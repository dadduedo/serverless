#!/usr/bin/env bash

docker logs -f $(docker ps | grep transmitter-smtp-service | awk '{print $1}')