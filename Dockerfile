# Stage 1: Build dependencies and application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

COPY . .

# Stage 2: Create the final, lightweight runtime image
FROM node:18-alpine AS runner

# Create a non-root user and set permissions (for security)
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
USER appuser
WORKDIR /home/appuser/app

# Copy only the necessary files from the builder stage
COPY --from=builder --chown=appuser:appgroup /app/package*.json ./
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:appgroup /app/src ./src

EXPOSE 5000

# Specify the command to run the application
CMD ["node", "src/index.js"]
