# Node.js npm

## Introduction

npm stands for Node Package Manager.

npm is a package manager used to install and manage packages and dependencies in Node.js projects.

---

## Node.js vs npm

Node.js is a JavaScript runtime environment.

npm is a package manager used to install and manage Node.js packages and dependencies.

---

## package.json

`package.json` contains information about a Node.js project and its dependencies.

Example:

```json
{
  "name": "my-project",
  "version": "1.0.0"
}
```

It can contain:

* Project name
* Version
* Description
* Scripts
* Dependencies
* DevDependencies
* Module type

---

## npm init

The `npm init` command initializes a Node.js project and creates a `package.json` file.

```text
npm init
```

---

## npm init -y

`npm init -y` initializes a project using default values.

```text
npm init -y
```

---

## Installing Packages

A package can be installed using:

```text
npm install package-name
```

Short form:

```text
npm i package-name
```

Installed packages are added to the project's dependencies.

---

## Uninstalling Packages

A package can be removed using:

```text
npm uninstall package-name
```

Example:

```text
npm uninstall lodash
```

---

## node_modules

`node_modules` contains installed packages and their dependencies.

It is normally not pushed to GitHub because it can be recreated from `package.json` and `package-lock.json`.

---

## package-lock.json

`package-lock.json` records the dependency tree and exact versions of installed packages.

It helps keep dependency installation consistent across environments.

---

## dependencies

Dependencies are packages required by the application.

Example:

```text
npm install express
```

---

## devDependencies

DevDependencies are packages required during development.

Example:

```text
npm install --save-dev nodemon
```

Short form:

```text
npm install -D nodemon
```

---

## dependencies vs devDependencies

```text
dependencies
→ Required by the application

devDependencies
→ Required during development
```

---

## Common Commands

```text
npm init -y
npm install package-name
npm uninstall package-name
npm install --save-dev package-name
npm install -D package-name
```

---

## Best Practices

* Keep `package.json` in the project.
* Commit `package-lock.json` to Git.
* Do not push `node_modules` to GitHub.
* Keep development-only packages in `devDependencies`.
* Keep application-required packages in `dependencies`.

---

## Common Mistakes

* Pushing `node_modules` to GitHub.
* Confusing `dependencies` with `devDependencies`.
* Deleting `package-lock.json` unnecessarily.
* Installing development tools as regular dependencies without a reason.

---

## Interview Questions

* What is npm?
* What is the difference between Node.js and npm?
* What is `package.json`?
* What does `npm init -y` do?
* What is `node_modules`?
* What is `package-lock.json`?
* What is the difference between dependencies and devDependencies?
* Why is `node_modules` not pushed to GitHub?

---

## Quick Revision

* npm → Node Package Manager
* `package.json` → Project information and dependency configuration
* `npm init -y` → Creates `package.json` with defaults
* `npm install` → Installs packages
* `node_modules` → Installed packages
* `package-lock.json` → Locks dependency versions/tree
* `dependencies` → Application dependencies
* `devDependencies` → Development dependencies
