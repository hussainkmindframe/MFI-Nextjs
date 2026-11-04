/**
 * JWT Configuration
 * Constants for JWT token generation and verification
 */

export const JWT_CONFIG = {
  SECRET: process.env.JWT_SECRET || 'your_super_secret_jwt_key',
  EXPIRY: process.env.JWT_EXPIRY || '24h',
};
