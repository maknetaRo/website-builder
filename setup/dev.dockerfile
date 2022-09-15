#
# Dev environment for the website-builder project
#
# Start the container by running `make -f setup/Makefile dev` at the project's root directory
# The Makefile will take care of mapping your home directory to /home in the container
#
FROM ubuntu:20.04

#
# Build deps
#
ARG DEBIAN_FRONTEND="noninteractive"
RUN apt-get update
RUN apt-get install -y wget xz-utils

#
# Node.js
#
ARG OS
ARG ARCH
ARG NODE_VERSION
RUN echo ${OS} "${ARCH}"
RUN cd /usr/local && \
    wget -O- --progress=dot:mega https://nodejs.org/dist/${NODE_VERSION}/node-"${NODE_VERSION}-${OS}-${ARCH}".tar.xz | tar xJf - && \
    ln -sT node-"${NODE_VERSION}"-"${OS}"-"${ARCH}" node
ENV PATH="/usr/local/node/bin:${PATH}"
RUN npm config -g set update-notifier false

#
# Userspace tools
#
RUN apt-get install -y \
    curl \
    gettext \
    git \
    vim \
    ;

#
# Project specific tools
# (loop because npm install regularly fail on slow Internet connection)
#
RUN for i in $(seq 10); do npm install -g \
  --maxsockets=5 \
  --timeout=90000 \
  --fetch-retry-maxtimeout=180000 \
  --fetch-retries=10 \
  --loglevel=verbose \
  @vue/cli@5.0.1 && break; \
  done

ARG HOME
RUN mkdir -p "${HOME}"
RUN useradd -d "${HOME}" node
RUN chsh node -s /bin/bash
USER node
