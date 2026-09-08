# Multi-stage production build for FieldHQ Angular web (cwt-web)

# ---------------------------------------------------------------------------
# Builder
# ---------------------------------------------------------------------------
FROM node:22-bookworm-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Uses environment.prod.ts via angular.json fileReplacements
RUN npm run build

# ---------------------------------------------------------------------------
# Production — static files behind Nginx
# ---------------------------------------------------------------------------
FROM nginx:1.27-alpine AS production

# Remove default site
RUN rm -f /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Angular application builder output
COPY --from=builder /app/dist/viho/browser /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
