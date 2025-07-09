FROM node:alpine AS build

# Installiere pnpm
RUN npm install -g pnpm

WORKDIR /app

# Kopiere package.json und pnpm-lock.yaml für besseres Caching
COPY src/package.json src/pnpm-lock.yaml ./

# Installiere Dependencies mit pnpm
RUN pnpm install

# Kopiere den gesamten Quellcode
COPY src/ ./

# Build die Anwendung
RUN pnpm run build

# Stage 2: Production
FROM node:alpine AS production

# Installiere pnpm
RUN npm install -g pnpm

WORKDIR /app

# Kopiere package.json und pnpm-lock.yaml für Production Dependencies
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml ./

# Installiere nur Production Dependencies
RUN pnpm install --prod --frozen-lockfile

# Kopiere Build-Artefakte und notwendige Dateien
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/pages ./pages
COPY --from=build /app/components ./components
COPY --from=build /app/next.config.js ./
COPY --from=build /app/theme.config.tsx ./
COPY --from=build /app/styles ./styles

EXPOSE 3000

ENV NODE_ENV=production

CMD ["pnpm", "start"]