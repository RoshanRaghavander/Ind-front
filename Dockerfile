FROM node:20 AS builder
WORKDIR /app
RUN corepack enable
ARG PUBLIC_GROWTH_ENDPOINT
ENV PUBLIC_GROWTH_ENDPOINT=${PUBLIC_GROWTH_ENDPOINT}
ENV NODE_ENV=production
ENV ENABLE_IMAGE_OPTIMIZER=false
COPY package.json pnpm-lock.yaml ./
COPY scripts ./scripts
RUN pnpm install --frozen-lockfile
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=1536"
ENV UV_THREADPOOL_SIZE=1
RUN pnpm build

FROM node:20 AS runner
WORKDIR /app
RUN corepack enable
ENV NODE_ENV=production
ENV PORT=3000
ENV PUBLIC_GROWTH_ENDPOINT=${PUBLIC_GROWTH_ENDPOINT}
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
EXPOSE 3000
CMD ["node", "build/index.js"]
