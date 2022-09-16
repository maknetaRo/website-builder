SHELL:=bash
MAKEDIR:=$(dir $(firstword $(MAKEFILE_LIST)))
PROJECTDIR:=$(MAKEDIR)/..
PROJECT:=web-builder
NODE_VERSION:=v16.13.2
OS:=$(shell uname -s | tr ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz)
ARCH:=$(shell uname -i | sed 's/x86_64/x64/')

APP_PORT:=8200
BACKEND_PORT:=8300

#
# DOCKER DEVELOPPEMENT ENVIRONMENT
#
.PHONY: dev-container
dev-container: 
	sudo DOCKER_BUILDKIT=1 docker build \
                --build-arg OS="${OS}" \
                --build-arg ARCH="${ARCH}" \
                --build-arg NODE_VERSION="${NODE_VERSION}" \
                --build-arg HOME="$${HOME}" \
                --build-arg PWD="$$(pwd)" \
                --progress=plain \
                --tag "${PROJECT}"/dev \
                - < "${MAKEDIR}"/dev.dockerfile

.PHONY: dev
dev: dev-container
	sudo docker run -it --rm \
                -e TERM \
                -p ${APP_PORT}:8080 \
                -p ${BACKEND_PORT}:8300 \
		--user "$$(id -u):$$(id -g)" \
		--mount type=bind,src="$${HOME}",dst="$${HOME}" \
		"${PROJECT}/dev" \
                /bin/sh -c "cd \"$$(pwd)\"; /bin/bash || true"

