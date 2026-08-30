# Graph Report - Portfolio  (2026-08-31)

## Corpus Check
- 45 files · ~96,366 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 353 nodes · 482 edges · 27 communities (24 shown, 3 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.77)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cd59a79a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- MainContainer.tsx
- Portfolio README - React + TypeScript + Vite Template
- devDependencies
- dependencies
- Neil Baksi Profile Photo
- draco_decoder.js
- Scene.tsx
- compilerOptions
- getCache
- compilerOptions
- ExceptionInfo
- App.tsx
- Component Patterns & Tokens (execution contract — all agents follow verbatim)
- createWasm
- TechStack.tsx
- package.json
- ma
- callRuntimeCallbacks
- gsap-splittext.d.ts
- printChar
- encrypt.cjs
- tsconfig.json

## God Nodes (most connected - your core abstractions)
1. `getCache()` - 21 edges
2. `ExceptionInfo()` - 16 edges
3. `compilerOptions` - 16 edges
4. `Portfolio README - React + TypeScript + Vite Template` - 16 edges
5. `compilerOptions` - 14 edges
6. `Scene()` - 12 edges
7. `ma()` - 8 edges
8. `createWasm()` - 8 edges
9. `Component Patterns & Tokens (execution contract — all agents follow verbatim)` - 7 edges
10. `scripts` - 6 edges

## Surprising Connections (you probably didn't know these)
- `Portfolio README - React + TypeScript + Vite Template` --conceptually_related_to--> `Portfolio Favicon - Lightning Bolt / Zap Icon (Purple Gradient)`  [INFERRED]
  README.md → public/favicon.svg
- `Neil Baksi Profile Photo` --portfolio_item_of--> `MarketNow Real Estate Payment App UI`  [INFERRED]
  public/Profile-Picture-v2.png → src/assets/marketnow.jpg
- `Neil Baksi Profile Photo` --author_worked_at--> `Optus Brand Logo`  [INFERRED]
  public/Profile-Picture-v2.png → src/assets/optus.png
- `Neil Baksi Profile Photo` --portfolio_item_of--> `Shimmer Bazaar Brand Logo`  [INFERRED]
  public/Profile-Picture-v2.png → src/assets/ShimmerBazaar.png
- `Neil Baksi Profile Photo` --portfolio_item_of--> `Buy Now Pay Later Mobile App UI (Stack)`  [INFERRED]
  public/Profile-Picture-v2.png → src/assets/stack.jpg

## Import Cycles
- None detected.

## Communities (27 total, 3 thin omitted)

### Community 0 - "MainContainer.tsx"
Cohesion: 0.09
Nodes (20): About(), Career(), Contact(), Cursor(), HoverLinks(), Landing(), MainContainer(), Navbar() (+12 more)

### Community 1 - "Portfolio README - React + TypeScript + Vite Template"
Cohesion: 0.14
Nodes (20): Portfolio Favicon - Lightning Bolt / Zap Icon (Purple Gradient), ESLint, eslint-plugin-react-dom, eslint-plugin-react-x, Hot Module Replacement (HMR), Oxc JavaScript Toolchain, @vitejs/plugin-react (Oxc), @vitejs/plugin-react-swc (SWC) (+12 more)

### Community 2 - "devDependencies"
Cohesion: 0.07
Nodes (29): eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, jsdom, devDependencies, eslint, eslint-plugin-react-hooks (+21 more)

### Community 3 - "dependencies"
Cohesion: 0.07
Nodes (29): gsap, @gsap/react, dependencies, gsap, @gsap/react, react, react-dom, react-fast-marquee (+21 more)

### Community 4 - "Neil Baksi Profile Photo"
Cohesion: 0.53
Nodes (6): Neil Baksi Profile Photo, Orrdr eCommerce Platform Landing Page UI, MarketNow Real Estate Payment App UI, Optus Brand Logo, Shimmer Bazaar Brand Logo, Buy Now Pay Later Mobile App UI (Stack)

### Community 5 - "draco_decoder.js"
Cohesion: 0.09
Nodes (10): castObject(), emscripten_realloc_buffer(), _emscripten_resize_heap(), ensureString(), getHeapMax(), intArrayFromString(), lengthBytesUTF8(), stringToUTF8Array() (+2 more)

### Community 6 - "Scene.tsx"
Cohesion: 0.17
Nodes (18): Scene(), createBoneAction(), filterAnimationTracks(), setAnimations(), setCharacter(), decryptFile(), generateAESKey(), setLighting() (+10 more)

### Community 7 - "compilerOptions"
Cohesion: 0.09
Nodes (21): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+13 more)

### Community 8 - "getCache"
Cohesion: 0.10
Nodes (20): AttributeOctahedronTransform(), AttributeQuantizationTransform(), AttributeTransformData(), Decoder(), DecoderBuffer(), destroy(), DracoFloat32Array(), DracoInt16Array() (+12 more)

### Community 9 - "compilerOptions"
Cohesion: 0.11
Nodes (17): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, isolatedModules, lib, module, moduleDetection (+9 more)

### Community 11 - "App.tsx"
Cohesion: 0.18
Nodes (10): App(), CharacterModel, MainContainer, Loading(), initialFX(), LoopText(), LoadingContext, LoadingProvider() (+2 more)

### Community 12 - "Component Patterns & Tokens (execution contract — all agents follow verbatim)"
Cohesion: 0.15
Nodes (12): Aesthetic Direction, Banned (AI tells) — reaffirmed for this project, Brand Personality, Card pattern (Projects reuses Work's language exactly), Component Patterns & Tokens (execution contract — all agents follow verbatim), Design Context, Design Principles, Section wrapper pattern (+4 more)

### Community 13 - "createWasm"
Cohesion: 0.21
Nodes (12): abort(), addOnInit(), addRunDependency(), assert(), createWasm(), getBinary(), getBinaryPromise(), intArrayFromBase64() (+4 more)

### Community 14 - "TechStack.tsx"
Cohesion: 0.17
Nodes (8): TechStack, imageUrls, PointerProps, sphereGeometry, SphereProps, spheres, textureLoader, textures

### Community 15 - "package.json"
Cohesion: 0.18
Nodes (10): name, private, scripts, build, deploy, dev, lint, preview (+2 more)

### Community 16 - "ma"
Cohesion: 0.22
Nodes (9): A(), B(), c(), l(), ma(), p(), v(), w() (+1 more)

### Community 17 - "callRuntimeCallbacks"
Cohesion: 0.38
Nodes (7): addOnPostRun(), addOnPreRun(), callRuntimeCallbacks(), initRuntime(), postRun(), preRun(), run()

### Community 18 - "gsap-splittext.d.ts"
Cohesion: 0.33
Nodes (3): gsap/SplitText, SplitText, SplitTextVars

### Community 19 - "printChar"
Cohesion: 0.50
Nodes (4): _fd_write(), printChar(), UTF8ArrayToString(), UTF8ToString()

## Knowledge Gaps
- **109 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+104 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `ExceptionInfo()` connect `ExceptionInfo` to `draco_decoder.js`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _109 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `MainContainer.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.0873440285204991 - nodes in this community are weakly interconnected._
- **Should `Portfolio README - React + TypeScript + Vite Template` be split into smaller, more focused modules?**
  _Cohesion score 0.1368421052631579 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._