#!/bin/sh

if test -f /app/package.json && cmp -s ./package.json /app/package.json; then
    echo "package.json didn't change, running server..."
    npm run start-node-dev
else
    cp ./package.json /app/package.json
    echo "package.json changed or didn't exist, running npm install..."
    npm install && npm run start-node-dev
fi