# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- `bin/rename-project` script to assist with renaming the project

### Changed

- Use the Docker Compose spec in `docker-compose.yml` (removes `version:` property)
- Update `connect-redis` from `5.1.0` to `5.2.0`
- Update `knex` from `0.21.19` to `0.95.6`
- Update `objection` from `2.2.14` to `2.2.15`
- Update `pg` from `8.5.1` to `8.6.0`
- Update `redis` from `3.0.2` to `3.1.2`
- Update `eslint` from `7.21.0` to `7.26.0`
- Update TailwindCSS to `2.1.2` and enable the JIT compiler
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

[Unreleased]: https://github.com/nickjj/docker-node-example/compare/0.1.0...HEAD
[0.1.0]: https://github.com/nickjj/docker-node-example/releases/tag/0.1.0
