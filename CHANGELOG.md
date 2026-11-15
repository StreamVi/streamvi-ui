# Changelog

All notable changes to the public `@streamvi.io/streamvi-ui-kit` package are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this package follows [Semantic Versioning](https://semver.org/).
History starts with the first stable public npm release, 2.0.1. Dates use UTC.

## [Unreleased]

## [2.0.3] - 2026-11-15

### Added

- A public changelog covering notable package changes, included in npm installations and the GitHub repository.

## [2.0.2] - 2026-11-14

No notable consumer-facing changes.

## [2.0.1] - 2026-11-14

### Added

- First stable public npm release of `@streamvi.io/streamvi-ui-kit`, with 14 React components, TypeScript declarations, light and dark themes, and an optional bundled Inter font.

### Changed

- **Breaking:** The Material UI implementation replaces the previous Base UI library. Migrate theme setup, component props, events, and customization using the [migration guide](https://github.com/StreamVi/streamvi-ui/blob/v2.0.1/README.md#upgrading-from-the-previous-version).
- **Breaking:** Replace imports and dependencies on `@streamvi/streamvi-ui-kit` with `@streamvi.io/streamvi-ui-kit`. Applications require React and React DOM 19.3+, Material UI 9.5+, and compatible Emotion 11 peers listed in the [installation guide](https://github.com/StreamVi/streamvi-ui/blob/v2.0.1/README.md#installation).

[Unreleased]: https://github.com/StreamVi/streamvi-ui/compare/v2.0.3...HEAD
[2.0.3]: https://github.com/StreamVi/streamvi-ui/compare/v2.0.2...v2.0.3
[2.0.2]: https://github.com/StreamVi/streamvi-ui/compare/v2.0.1...v2.0.2
[2.0.1]: https://github.com/StreamVi/streamvi-ui/tree/v2.0.1
