<!-- markdownlint-disable-next-line first-line-h1 -->
![https://detdigitalefolkebibliotek.dk/sites/default/files/ddf_logo_rgb_blue_web.png](https://detdigitalefolkebibliotek.dk/sites/default/files/ddf_logo_rgb_blue_web.png)

<!-- markdownlint-disable -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [DPL Design System](#dpl-design-system)
  - [Requirements](#requirements)
    - [Manual requirements](#manual-requirements)
  - [Installation](#installation)
    - [Installation outside docker](#installation-outside-docker)
  - [Development](#development)
    - [Development without docker](#development-without-docker)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [Storybook](#storybook)
  - [Chromatic](#chromatic)
    - [What is Storybook](#what-is-storybook)
      - [How to use](#how-to-use)
      - [Addons](#addons)
      - [Important to notice](#important-to-notice)
        - [Internal classes](#internal-classes)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- markdownlint-enable -->

# DPL Design System

DPL Design System is a library of UI components that should be used as a common
base system for "Danmarks Biblioteker" / "Det Digitale Folkebibliotek". The
design is implemented
with [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
/ [React](https://reactjs.org/) and is output with HTML markup and css-classes
through an addon in Storybook.

The codebase follows the naming that designers have used in Figma closely
to ensure consistency.

## Requirements

This project comes with [go-task](https://github.com/go-task/task) and docker
compose, hence the requirements are limited to having docker install and tasks.

### Manual requirements

This project can be used outside docker with the following requirements:

- `npm >= 7`
- `node 16`

Check in the terminal which versions you have installed with `npm -v` and
`node -v`.

If you don't have the right `npm` version, you can bump it with
`nvm install-latest-npm` - which requires you to
have [nvm](https://github.com/nvm-sh/nvm)
installed.

## Installation

Use the tasks defined in `Taskfile` to run the project:

```shell
task dev:install
```

### Installation outside docker

Use the node package manager to install project dependencies:

```shell
npm install
```

## Development

To start the docker compose setup in development simple use the `start` task:

```shell
task dev:start
```

To see the output from the compile process and start of storybook:

```shell
task dev:logs
```

Use `task` and tabulator key in the terminal to see the other predefined tasks:

```shell
task dev:[TAB]
```

### Development without docker

To start developing run:

```shell
npm run dev
```

Components and CSS will be automatically recompiled when making changes in the
source code.

## Usage

The project is available in two ways and should be consumed accordingly:

1. As package in the local npm registry for this repository
2. As a `dist.zip` file attached to a release for this repository

Both releases contain the built assets of the project: JavaScript files, CSS
styles and icons.

You can find the HTML output for a given story under the HTML tab inside
storybook.

## Deployment

The project is getting rebuild on pushes to every branch and every tag. In
general consuming projects should prefer tagged versions as they are stable
proper releases.

During development where the design system is being updated in parallel with
the implementation of a consuming project it may be advantageous to use a
version tagging a branch.

Run the following to create a tag and push a release:

```shell
git tag -a v*.*.* && git push origin v*.*.*
```

## Storybook

Spin up storybook by running this command in the terminal:

```shell
npm run storybook
```

When storybook is ready it automatically opens up in a browser with the
interface ready to use.

## Chromatic

We are using Chromatic for visual test. You can access the dashboard
under the `danskernesdigitalebibliotek` (organisation) `dpl-design-system`
(project).

<https://www.chromatic.com/builds?appId=616ffdab9acbf5003ad5fd2b>

You can deploy a version locally to Chromatic by running:

```shell
npm run chromatic
```

Make sure to set the `CHROMATIC_PROJECT_TOKEN` environment variable is available
in your shell context. You can access the token from:

<https://www.chromatic.com/manage?appId=616ffdab9acbf5003ad5fd2b&view=configure>

### What is Storybook

[Storybook](https://storybook.js.org/docs/react/get-started/introduction) is an
open source tool for building UI components and pages in isolation from your
app's business logic, data, and context. Storybook helps you document components
for reuse and automatically visually test your components to prevent bugs. It
promotes the [component-driven](https://componentdriven.org) process and agile
development.

It is possible to extend Storybook with an ecosystem of addons that help you do
things like fine-tune responsive layouts or verify accessibility.

#### How to use

The Storybook interface is simple and intuitive to use. Browse the project's
stories now by navigating to them in the sidebar. The stories are divided into
"Components" and "Atoms" where atoms are the smaller building blocks that can be
used to build bigger components. Each Atom/Component has a corresponding
`.stories` file. View their code in the `src/stories` directory to learn how
they work. The `stories` file is used to add the component to the Storybook
interface.

#### Addons

Storybook ships with some essential
pre-installed [addons](https://storybook.js.org/addons/tag/essentials/)
to power the core Storybook experience.

- [Controls](https://storybook.js.org/addons/@storybook/addon-controls/)
- [Actions](https://storybook.js.org/addons/@storybook/addon-actions/)
- [Docs](https://storybook.js.org/addons/@storybook/addon-docs/)
- [Viewport](https://storybook.js.org/addons/@storybook/addon-viewport/)
- [Backgrounds](https://storybook.js.org/addons/@storybook/addon-backgrounds/)
- [Toolbars](https://storybook.js.org/addons/@storybook/addon-toolbars/)
- [Measure](https://storybook.js.org/addons/@storybook/addon-measure/)
- [Outline](https://storybook.js.org/addons/@storybook/addon-outline/)

There are many other helpful addons to customise the usage and experience.
Additional addons used for this project:

- [HTML / storybook-addon-html](https://storybook.js.org/addons/@whitespace/storybook-addon-html/):
  This addon is used to display compiled HTML markup for each story and make it
  easier for developers to grab the code. Because we are developing with React,
  it is necessary to be able to show the HTML markup with the css-classes to
  make it easier for other developers that will implement it in the future.
  If a story has controls the HTML markup changes according to the controls that
  are set.

- [Designs / storybook-addon-designs](https://storybook.js.org/addons/storybook-addon-designs/):
  This addon is used to embed Figma in the addon panel for a better
  design-development workflow.

- [A11Y](https://storybook.js.org/addons/@storybook/addon-a11y/):
  This addon is used to check the accessibility of the components.

All the addons can be found in `storybook/main.js` directory.

#### Important to notice

##### Internal classes

To display some components (fx Colors, Spacing) in a more presentable way, we
are using some "internal" css-classes which can be found in the
`styles/internal.scss` file. All css-classes with "internal" in the front should
therefore be ignored in the HTML markup.
