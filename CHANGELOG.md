# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- Lint Dockerfile with <https://github.com/hadolint/hadolint>

### Changed

#### Languages and services

- Update `Node` to `14.18.1` and switch to Debian Bullseye Slim
- Update `PostgreSQL` to `14.1` and switch to Debian Bullseye Slim
- Update `Redis` to switch to Debian Bullseye Slim

#### Back-end dependencies

- Update `eslint-config-airbnb-base` to `15.0.0`
- Update `eslint-plugin-import` to `2.25.3`
- Update `eslint` to `8.3.0`
- Update `jest` to `27.3.1`
- Update `knex` to `0.95.14`
- Update `nodemon` to `2.0.15`
- Update `objection` to `3.0.0`
- Update `pg` to `8.7.1`
- Update `redis` to `3.1.2`
- Update `supertest` to `6.1.6`

#### Front-end dependencies

- Update `@babel/core` to `7.16.0`
- Update `@babel/preset-env` to `7.16.4`
- Update `@babel/register` to `7.16.0`
- Update `autoprefixer` to `10.4.0`
- Update `babel-loader` to `8.2.3`
- Update `copy-webpack-plugin` to `10.0.0`
- Update `css-loader` to `6.5.1`
- Update `css-minimizer-webpack-plugin` to `3.2.0`
- Update `mini-css-extract-plugin` to `2.4.5`
- Update `postcss-loader` to `6.2.1`
- Update `postcss` to `8.4.3`
- Update `tailwindcss` to `2.2.19`
- Update `webpack-cli` to `4.9.1`
- Update `webpack` to `5.64.4`

### Fixed

- Run `yarn cache clean` after `yarn install`

## [0.2.0] - 2021-06-18

### Added

- `bin/rename-project` script to assist with renaming the project

### Changed

- Use the Docker Compose spec in `docker-compose.yml` (removes `version:` property)
- Update PostgreSQL from `13.2` to `13.3`
- Update Redis from `6.0.10` to `6.2.4`
- Update `connect-redis` from `5.1.0` to `6.0.0`
- Update `express-ejs-layouts` from `2.5.0` to `2.5.1`
- Update `express-session` from `1.17.1` to `1.17.2`
- Update `knex` from `0.21.19` to `0.95.6`
- Update `objection` from `2.2.14` to `2.2.15`
- Update `pg` from `8.5.1` to `8.6.0`
- Update `redis` from `3.0.2` to `3.1.2`
- Update `eslint` from `7.26.0` to `7.28.0`
- Update `eslint-plugin-import` from `2.23.2` to `2.23.4`
- Update `jest` from `26.6.3` to `27.0.4`
- Update TailwindCSS to `2.2.2` and enable the JIT compiler
- Update all Webpack related dependencies to their latest versions
- Replace `APP_NAME` in `run` script with `POSTGRES_USER` for connecting to psql

### Fixed

- Fix `run` script error for unbound variable in older versions of Bash on macOS
- Remove `.js` extension in `backend/src/knex.js` import (eslint 7.26+ doesn't like it)

### Removed

- Remove Webpack's cache since the JIT compiler is pretty speedy as is

## [0.1.0] - 2021-03-11

### Added

- Everything!

[Unreleased]: https://github.com/nickjj/docker-node-example/compare/0.2.0...HEAD
[0.2.0]: https://github.com/nickjj/docker-node-example/compare/0.1.0...0.2.0
[0.1.0]: https://github.com/nickjj/docker-node-example/releases/tag/0.1.0
