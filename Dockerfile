FROM node:20 AS builder
WORKDIR /app
RUN corepack enable
ARG PUBLIC_GROWTH_ENDPOINT
ENV PUBLIC_GROWTH_ENDPOINT=${PUBLIC_GROWTH_ENDPOINT}
COPY package.json pnpm-lock.yaml ./
COPY scripts ./scripts
RUN pnpm install --frozen-lockfile
COPY . .
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
