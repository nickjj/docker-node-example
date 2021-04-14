# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a
Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Changed

- Update knex from `0.21.19` to `0.95.2`
- Update objection from `2.2.14` to `2.2.15`
- Update eslint from `7.21.0` to `7.22.0`
- Update TailwindCSS to `2.1.0` and enable the JIT compiler
- Replace `APP_NAME` in `run` script with `POSTGRES_USER` for connecting to psql

### Fixed

- Fix `run` script error for unbound variable in older versions of Bash on macOS

### Removed

- Remove Webpack's cache since the JIT compiler is pretty speedy as is

## [0.1.0] - 2021-03-11

### Added

- Everything!

[Unreleased]: https://github.com/nickjj/docker-node-example/compare/0.1.0...HEAD
[0.1.0]: https://github.com/nickjj/docker-node-example/releases/tag/0.1.0
