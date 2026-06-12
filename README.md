# 📘 Day 10 – TypeScript + Express + CouchBase (Full CRUD API)

## 🗂️ Topics Covered

- Connecting to **CouchBase** (Cloud NoSQL Database)
- Full **CRUD Operations** with CouchBase SDK
- **MVC Architecture** with Routes layer added
- `async/await` in Controllers & Services
- TypeScript with **ESModule** (`"type": "module"`)
- `tsconfig.json` strict configuration

---

## 🏗️ Project Structure

```
📁 project/
├── app.ts                          ← Entry point
├── package.json
├── tsconfig.json
└── 📁 src/
    ├── 📁 config/
    │   └── couch.config.ts         ← CouchBase connection
    ├── 📁 routes/
    │   └── document.routes.ts      ← Route definitions
    ├── 📁 controllers/
    │   └── document.controller.ts  ← Request/Response handling
    ├── 📁 services/
    │   └── document.services.ts    ← CouchBase CRUD logic
    └── 📁 interfaces/
        └── document.interface.ts   ← Type definitions
```

---

## 🔌 CouchBase Connection (`couch.config.ts`)

Connected to **CouchBase Capella** (Cloud) using the SDK.

```typescript
import couchbase from "couchbase";

const cluster = await couchbase.connect("couchbases://your-cluster-url", {
  username: "nodejs-user",
  password: "yourpassword"
});

const bucket = cluster.bucket("documents");
const collection = bucket.defaultCollection();

export { collection };
```

> **Cluster → Bucket → Collection** is the CouchBase hierarchy (similar to DB → Table in SQL).

---

## 🔷 Interface

```typescript
export interface Document {
  id: string;
  title: string;
  pages: number;
}
```

---

## 🔷 CRUD – Service Layer (`document.services.ts`)

| Operation | CouchBase Method | Description |
|---|---|---|
| Create | `collection.insert(id, data)` | Insert new document |
| Read | `collection.get(id)` | Fetch by key |
| Update | `collection.upsert(id, data)` | Update or insert |
| Delete | `collection.remove(id)` | Remove by key |

```typescript
// CREATE
export const createDocument = async (document: Document) => {
  return await collection.insert(document.id, document);
};

// READ
export const readDocumentById = async (id: string) => {
  const docs = await collection.get(id);
  return docs.content;
};

// UPDATE
export const updateDocumentById = async (id: string, document: Document) => {
  await collection.upsert(id, { id, title: document.title, pages: document.pages });
};

// DELETE
export const deleteByid = async (id: string) => {
  await collection.remove(id);
};
```

---

## 🔷 Routes (`document.routes.ts`)

```typescript
router.post("/create", insertDocument)     // CREATE
router.get("/get/:id", fetchById)          // READ
router.put("/update/:id", updateById)      // UPDATE
router.delete("/delete/:id", deleteByID)   // DELETE
```

---

## 🔷 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/create` | Insert a new document |
| GET | `/api/get/:id` | Fetch document by ID |
| PUT | `/api/update/:id` | Update document by ID |
| DELETE | `/api/delete/:id` | Delete document by ID |

---

## ⚙️ `tsconfig.json` Highlights

```json
{
  "module": "nodenext",       // ESModule support for Node
  "target": "esnext",
  "strict": true,             // Strict type checking ON
  "allowImportingTsExtensions": true,  // import .ts files directly
  "noEmit": true,             // Don't compile — just type check
  "verbatimModuleSyntax": true // Enforces import type for type-only imports
}
```

> `"type": "module"` in `package.json` enables ES Modules (`import/export`) instead of CommonJS (`require`).

---

## 💡 Quick Cheat Sheet

| Concept | Detail |
|---|---|
| CouchBase hierarchy | Cluster → Bucket → Collection |
| Insert | `collection.insert(key, value)` |
| Read | `collection.get(key)` → `.content` |
| Update | `collection.upsert(key, value)` |
| Delete | `collection.remove(key)` |
| ES Module | `"type":"module"` in package.json |
| Type-only import | `import type { X } from "..."` |

---

## 🧠 Today's Summary

- Connected TypeScript + Express to a **real cloud NoSQL database (CouchBase Capella)**.
- Implemented **full CRUD** — Create, Read, Update, Delete — using CouchBase SDK methods.
- Added a **Routes layer** to the MVC structure, making the project fully organized.
- Used `async/await` throughout services and controllers for database operations.
- Configured **strict TypeScript ESModule** setup with `tsconfig.json` and `"type":"module"`.

> **Stack:** TypeScript · Node.js · Express.js · CouchBase Capella  
> **Day:** 10 of TypeScript Fundamentals
