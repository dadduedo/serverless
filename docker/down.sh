#!/usr/bin/env bash

docker stop $(docker ps | grep transmitter-smtp-service | awk '{print $1}')
docker rm -f transmitter-smtp-service