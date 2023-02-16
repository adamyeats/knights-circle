# Knights Circle

This is an implementation of the Knight's Circle game in TypeScript. I was given this challenge in an interview and I totally flunked it, which really frustrated me so once the pressure of the interview was off, I decided to continue with my implementation and add it to GitHub.

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

## Final thoughts

During the interview, I initially attempted to implement the game using an array as the core data structure. However, the interviewer preferred the use of a linked list, so I decided to use one for my final implementation.

Having written JavaScript/TypeScript for the majority of my career, I have used linked lists in my own code maybe a couple of times, ever. I wrote an implementation of a linked list (though not a circular one) [here on AppSignal's blog](https://blog.appsignal.com/2019/07/16/javascript-iterators-and-iterables.html) a few years back. I think the interviewer was correct that a circular linked list would be an ideal fit for this particular problem, although I absolutely did not consider this at the time of the interview. However, **I would not use this approach for most problems in my own code when writing JS/TS**.

- Linked lists can be relatively challenging to understand, especially for less experienced developers, which could impact overall codebase readability. However, in a team of engineers who are well-versed in data structures and algorithms, this might not be an issue. It is worth noting that, if I had used an array for this exercise, I would have to deal with wrapping back to the first/last item in the array if the index I attempt to access is out of bounds, which comes at a cost of slightly less "elegant" code. I don't have that issue with a linked list. However, for my money, I do still think the tradeoffs here lean in favour of just iterating over an array.
- Using a linked list would likely be less performant than using an array, as [V8](https://v8.dev/) is optimized to work efficiently with arrays in the hot code path. While the linked list approach may have a lower algorithmic complexity and potential optimizations to allocations from [TurboFan](https://v8.dev/docs/turbofan), the optimisations to arrays, where they are laid out contiguously in memory, and further JIT optimisations are made for pointer arithmetic and caching, in particular, may offset the benefits of the linked list approach. That being said, put a heavy "YMMV" on this point as it'll be quite use case dependant.
- The linked list approach would likely create a lot of heap allocations, which can be a problem in JavaScript applications where space is often at a premium. This would be more pronounced for larger lists, which could lead to higher memory usage. In the case of the small list used in the game, this is not a significant concern, but it would be a more prominent issue for larger lists.
