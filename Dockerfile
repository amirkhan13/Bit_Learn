FROM node:18-alpine AS base

WORKDIR /app

# Install dependencies for both builder and production stages
COPY package*.json ./
RUN npm install --frozen-lockfile

FROM base AS builder

# Copy source code
COPY . .

# Build the application
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Copy necessary public assets
COPY public ./public

# Copy .env (consider mounting it as a volume for external configuration)
COPY .env ./

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the port
EXPOSE 3000

# User and group for security
RUN addgroup -g 1001 nodejs
RUN adduser -u 1001 -G nodejs -s /bin/sh nodejs

USER nodejs

# Start the application
CMD ["node", "dist/index.js"]