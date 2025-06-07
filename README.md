# @knowvia/shared-types

Shared TypeScript interfaces, types, and constants used across Knowvia frontend and backend projects.

---

## 📦 Installation

```bash
npm install @knowvia/shared-types
```

or

```bash
yarn add @knowvia/shared-types
```

---

## 🔧 Usage

Import types or constants wherever needed:

```ts
import { ChatTheme, CHAT_THEMES } from '@knowvia/shared-types';
```

---

## 📁 Folder Structure

```
src/
  models/
  events/
  styles/
  ...
tsconfig.json
package.json
```

All source types live in `src/`. Compiled files output to `dist/` and are published to npm.

---

## 🛠 Local Development

To make changes to shared types:

1. Clone the repo and make your changes in `src/`
2. Build the package:

```bash
npm run build
```

3. (Optional) Test usage in another local project using `npm link`

---

## 🚀 Publishing to npm

To publish an update:

1. **Build the package:**

```bash
npm run build
```

2. **Bump the version:**

```bash
npm run bump:patch && npm publish --access **public**
```

4. **In your consuming project, update the dependency:**

```bash
npm install @knowvia/shared-types@latest
```

---

## 📌 Notes

- This package includes both runtime constants (like theme presets) and TypeScript-only types.
- Do not import from deep paths like `@knowvia/shared-types/dist/...` — always use the top-level package path.

---

## 🧹 .gitignore Highlights

- `dist/` is ignored from Git (but included in npm via `"files"`)
- `node_modules/`, `*.log`, `.tsbuildinfo`, and editor config files are also excluded
