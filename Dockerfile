FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# Copy yarn.lock if it exists.  Adjust if you are using pnpm
COPY yarn.lock ./

# Install dependencies (leverage caching)
RUN yarn install --frozen-lockfile --network-timeout 60000

# Copy source code
COPY . .

# Build the application (assuming you have a build script)
RUN yarn build

# --- Stage 2: Production ---
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env ./

# Install production dependencies only (if different from dev) - Optional, remove if not needed
# RUN yarn install --production --frozen-lockfile --network-timeout 60000

# Set environment variables (using ARG and ENV for Docker Compose compatibility)
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Expose port
EXPOSE 3000

# Define entrypoint and command
CMD ["node", "dist/index.js"]
# or if using ts-node: CMD ["ts-node", "src/index.ts"] if the build step is skipped. NOT RECOMMENDED for production