FROM node:14.17.3-buster-slim AS webpack
LABEL maintainer="Nick Janetakis <nick.janetakis@gmail.com>"

WORKDIR /app/frontend

RUN apt-get update \
  && apt-get install -y build-essential --no-install-recommends \
  && rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man \
  && apt-get clean \
  && mkdir -p /node_modules && chown node:node -R /node_modules /app

USER node

COPY --chown=node:node frontend/package.json frontend/*yarn* ./

RUN yarn install

ARG NODE_ENV="production"
ENV NODE_ENV="${NODE_ENV}" \
    PATH="${PATH}:/node_modules/.bin" \
    USER="node"

COPY --chown=node:node frontend .

# We need to copy the main web app so that PurgeCSS can find our HTML templates
# at build time so it knows what to purge / keep in the final CSS bundle.
#
# This doesn't bloat anything in the end because only the final assets get
# copied over in another build stage. Yay for multi-stage builds!
COPY --chown=node:node backend /app/backend

RUN if [ "${NODE_ENV}" != "development" ]; then \
  yarn run build; else mkdir -p /app/public; fi

CMD ["bash"]

#

FROM node:14.17.3-buster-slim AS app
LABEL maintainer="Nick Janetakis <nick.janetakis@gmail.com>"

WORKDIR /app/backend

RUN apt-get update \
  && apt-get install -y build-essential curl libpq-dev --no-install-recommends \
  && rm -rf /var/lib/apt/lists/* /usr/share/doc /usr/share/man \
  && apt-get clean \
  && mkdir -p /node_modules && chown node:node -R /node_modules /app

USER node

COPY --chown=node:node backend/package.json backend/*yarn* ./

RUN yarn install

ARG NODE_ENV="production"
ENV NODE_ENV="${NODE_ENV}" \
    PATH="${PATH}:/node_modules/.bin" \
    USER="node"

COPY --chown=node:node --from=webpack /app/public /public
COPY --chown=node:node backend ./
COPY --chown=node:node bin/ /app/bin

ENTRYPOINT ["/app/bin/docker-entrypoint-web"]

EXPOSE 8000

CMD ["yarn", "watch-production"]
