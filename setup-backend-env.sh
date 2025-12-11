#!/bin/bash

# Backend Environment Variables Setup Script
# Generated from Vly for Git Sync
# Run this script to set up your Convex backend environment variables

echo 'Setting up Convex backend environment variables...'

# Check if Convex CLI is installed
if ! command -v npx &> /dev/null; then
    echo 'Error: npx is not installed. Please install Node.js and npm first.'
    exit 1
fi

echo "Setting JWKS..."
npx convex env set "JWKS" -- "{\"keys\":[{\"kty\":\"RSA\",\"n\":\"qB0VB23511mm_HD-l1Uc9HOrCYmE79XS06LZyAK5Iq4OrRmDL4ArPc6xrEqy6KX_Zjx0NIrSih1okLY0i_s43Rh_a-2YrEKH_bx6jomd9f2RoxiUkg0QG5BVgJ3ELIrXFoj_3EHpQ3rMRP7oRAA7V9dApYl6P8QFHBjyhJYO6Z5C_2_-FhmhryW-MAX_GOQ3NGYIjPvtcMOy6XEO9i1KMiBH9sG2qnm98GSQBM5Z-MyZLj0gVRh5BGiOEP5ujIpXT8NZAXddIvDKpN8920IXp4sN1D4Ke5JNCSZFOaw1ay-8auZKf4RiiFzeyhKIcNrYUJRKt4fuIlB7MoFe0FHiQQ\",\"e\":\"AQAB\",\"use\":\"sig\"}]}"

echo "Setting JWT_PRIVATE_KEY..."
npx convex env set "JWT_PRIVATE_KEY" -- "-----BEGIN PRIVATE KEY-----"

echo "Setting SITE_URL..."
npx convex env set "SITE_URL" -- "https://runtime-monitoring.vly.ai"

echo "Setting VLY_APP_NAME..."
npx convex env set "VLY_APP_NAME" -- "AeroBook Modern"

echo "Setting VLY_INTEGRATION_BASE_URL..."
npx convex env set "VLY_INTEGRATION_BASE_URL" -- "https://integrations.vly.ai/"

echo "Setting VLY_INTEGRATION_KEY..."
npx convex env set "VLY_INTEGRATION_KEY" -- "sk_619b717abdb9fa16ef5d216ab2749ae4200e3ffa5adea6a53ffd5a54675411c3"

echo "✅ All backend environment variables have been set!"
echo "You can now run: pnpm dev:backend"
