FROM node:20 AS builder
WORKDIR /app
RUN corepack enable
ARG PUBLIC_GROWTH_ENDPOINT
ENV PUBLIC_GROWTH_ENDPOINT=${PUBLIC_GROWTH_ENDPOINT}
ENV ENABLE_IMAGE_OPTIMIZER=false
COPY package.json pnpm-lock.yaml ./
COPY scripts ./scripts
RUN pnpm install --frozen-lockfile
COPY . .
ENV UV_THREADPOOL_SIZE=1
RUN NODE_OPTIONS="--max-old-space-size=2048" pnpm build

FROM node:20 AS runner
WORKDIR /app
RUN corepack enable
ENV NODE_ENV=production
ENV PORT=3000

# Fix the warning: ARG must be declared again in the new stage
ARG PUBLIC_GROWTH_ENDPOINT
ENV PUBLIC_GROWTH_ENDPOINT=${PUBLIC_GROWTH_ENDPOINT}

# Trust reverse-proxy headers (Dokploy / Traefik / Caddy)
ENV PROTOCOL_HEADER=x-forwarded-proto
ENV HOST_HEADER=x-forwarded-host

# Cleanest way to get prod deps without memory spikes from prune
COPY package.json pnpm-lock.yaml ./
COPY scripts ./scripts
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/build ./build
COPY package.json ./
EXPOSE 3000
CMD ["node", "build/index.js"]