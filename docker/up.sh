#!/usr/bin/env bash

ABSOLUTE_PROJECT_PATH=$(git rev-parse --show-toplevel)

docker run -d \
    -v ${ABSOLUTE_PROJECT_PATH}:/projects \
    -w /projects \
    -p 727:3000 \
    --network="verisure" \
    --name="transmitter-smtp-service" \
    node:12-alpine npm run dev