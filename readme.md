# @novarel/container

## Advanced Dependency Injection Container for the Novarel Framework

A powerful, flexible, and production-ready DI container inspired by Laravel’s service container, built with TypeScript decorators and `reflect-metadata`.

---

## ✨ Features

- Constructor-based injection with `@Injectable()`
- Primitive, class, and factory bindings
- Singleton, transient, and scoped lifecycles
- Aliases, tags, contextual resolution
- Extensible with resolution hooks and decorators
- Works with `reflect-metadata`

---

## 📦 Installation

```bash
pnpm add @novarel/container reflect-metadata
```

> Requires TypeScript 4.5+ and experimental decorators enabled.

---

## 🔧 Usage

```ts
import 'reflect-metadata';
import { Container, Injectable } from '@novarel/container';

@Injectable()
class Logger {
  log(msg: string) {
    console.log(msg);
  }
}

@Injectable()
class App {
  constructor(private logger: Logger) {}

  run() {
    this.logger.log('Hello from App');
  }
}

const container = new Container();
container.register(Logger);
container.register(App);

const app = container.resolve(App);
app.run();
```

---

## 🛠 Compiler Options (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

---

## 📁 Project Structure

```
src/
  container/
    container.ts
    decorators.ts
    bindings.ts
  types/
    index.ts
  index.ts

dist/
```

---

## 📜 License

MIT © 2025 Muhammad Sulman <whomaderules@gmail.com>
