# Node.js Environment Variables

## Introduction

Environment variables are configuration values provided outside the application code.

They are commonly used for values such as:

* Port numbers
* Database URLs
* API keys
* Environment settings

---

## process.env

`process.env` is used to access environment variables in Node.js.

```javascript
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
```

---

## .env File

A `.env` file can be used to store environment variables during development.

Example:

```text
PORT=3000
NODE_ENV=development
```

---

## Loading .env

Node.js can load a `.env` file using the `--env-file` option.

```bash
node --env-file=.env app.js
```

Then the values can be accessed through `process.env`.

---

## Example

`.env`:

```text
PORT=3000
NODE_ENV=development
```

`app.js`:

```javascript
console.log(process.env.PORT);
console.log(process.env.NODE_ENV);
```

Run:

```bash
node --env-file=.env app.js
```

Output:

```text
3000
development
```

---

## Secrets and Configuration

Environment variables can contain both normal configuration and sensitive values.

Examples:

```text
PORT=3000
NODE_ENV=development
DATABASE_URL=...
API_KEY=...
```

`PORT` and `NODE_ENV` are configuration values.

`API_KEY` and some database credentials can be sensitive.

---

## .gitignore

Sensitive `.env` files should generally not be committed to GitHub.

Add `.env` to `.gitignore`:

```text
.env
node_modules/
```

This prevents Git from tracking the `.env` file.

---

## Important Concepts

* `process.env` → Accesses environment variables
* `.env` → Common file for storing development environment variables
* `--env-file=.env` → Loads variables from `.env`
* `.gitignore` → Prevents `.env` from being tracked by Git
* Environment variables → Can contain configuration or sensitive values

---

## Best Practices

* Never hard-code API keys or passwords in source code.
* Keep sensitive environment variables out of GitHub.
* Add `.env` to `.gitignore`.
* Use environment variables for configuration that changes between environments.

---

## Interview Questions

* What are environment variables?
* What is `process.env`?
* What is a `.env` file?
* How can Node.js load a `.env` file?
* Why should `.env` usually be added to `.gitignore`?
* Can environment variables contain non-secret configuration?
* Why should API keys not be hard-coded?

---

## Quick Revision

Environment variables → External configuration values.

`process.env` → Access environment variables.

`.env` → Common development environment variable file.

`--env-file=.env` → Loads `.env` variables.

`.gitignore` → Keeps `.env` from being tracked.

Environment variables → Can contain configuration and secrets.
