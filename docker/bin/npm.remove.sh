#!/usr/bin/env bash

ABSOLUTE_PROJECT_PATH=$(git rev-parse --show-toplevel)

docker run -ti \
    -v ${ABSOLUTE_PROJECT_PATH}:/projects/api \
    -w /projects/api \
    node:12-alpine npm uninstall $@