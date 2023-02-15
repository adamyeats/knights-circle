# Knights Circle

This is an implementation of the Knight's Circle game in TypeScript. I was given this challenge in an interview and I totally flunked it, which really frustrated me so once the pressure of the interview was off, I decided to continue with my implementation and add it to GitHub.

I originally implemented it using an array as the data structure, but the interviewer was looking more for a linked list, so I used one here.

## Quick Start

- Run `npm install` to install the dependencies
- Run `npm dev` to start the `tsc` compiler and `nodemon` in watch mode

## Development

This project requires **at least Node.js v18**.

### Installation

To install the dependencies:

```bash
npm install
```

You can then run the following to start the project in _dev mode_.

```bash
npm run dev
```

This runs the `build:watch` and `start:debug` commands at the same time.

#### TypeScript Compilation

You can also run the following to only start the compiler in _watch_ mode.

```bash
npm run build:watch
```

You can also build the library without watching the directory:

```bash
npm run build
```

### Testing

The tests for this library use [Jest](https://jestjs.io) as the test runner. Once you've installed the dependencies, you can run the following command in the root of this repository to run the tests:

```bash
npm run test
```
