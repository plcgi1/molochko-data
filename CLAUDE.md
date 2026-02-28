## 1. Project Overview

Shared package `@molochko-dev/data` (v1.4.112) — provides enums, types, constants, and utility functions used by both **molochko-crm** (backend, Node.js) and **molochko-front** (frontend, Angular).

Published to npm: `https://registry.npmjs.org/@molochko-dev/data`

---

## 2. Tech Stack

| Component | Technology |
|-----------|-----------|
| **Language** | TypeScript 4.8 |
| **Output** | CommonJS (`dist/`) with `.d.ts` declarations |
| **Testing** | Jest + ts-jest |
| **Linting** | ESLint + Prettier |
| **Runtime deps** | `moment` (date helpers) |

### 2.1 Code Style
- **Semicolons**: yes
- **Single quotes**: yes
- **Print width**: 100
- **Trailing commas**: ES5
- **Arrow parens**: avoid (`x => x`, not `(x) => x`)

### 2.2 Commands
```bash
npm run build          # rm -rf dist/ && tsc (compile to dist/)
npm test               # jest
npm run lint:fix       # eslint auto-fix
npm run pub            # lint:fix → test → patch-version → build → npm publish
npm run patch-version  # npm version patch --no-git-tag-version
```

---

## 3. Project Structure

```
molochko-data/
├── package.json
├── tsconfig.json
├── jest.config.js
├── typings/
│   └── index.d.ts              # Ambient declaration: declare module '@molochko-dev/data'
├── src/
│   ├── index.ts                # Main barrel export (namespaced)
│   ├── enums.ts                # Root enums (TOKEN_TYPE, SEED_*, USER_*, etc. + DEPRECATED duplicates)
│   ├── types.ts                # Core interfaces (IAnimal, IRolePermissionItem, etc.)
│   ├── helpers.ts              # asObject(), enumToObject()
│   ├── breed.ts                # BREED array (~120 cattle breeds) + BREED_AS_OBJECT
│   ├── role-permissions.ts     # ROOT_PERMISSIONS, USER_PERMISSIONS (RBAC config)
│   ├── helpers/
│   │   └── date.ts             # getMonthFromDate(), datestrToDate()
│   ├── animals/
│   │   ├── enums.ts            # ANIMAL_GENDER_ENUM, ANIMAL_STATUS_ENUM, BULL_STATUS_ENUM, COW_STATUS_ENUM
│   │   └── index.ts
│   ├── animal-tag/
│   │   ├── enums.ts            # TAG_TYPE_ENUM
│   │   └── index.ts
│   ├── custom-list/
│   │   ├── enums.ts            # CLIST_* enums (operators, types, conditions, datasources, etc.)
│   │   └── index.ts
│   ├── easy-query/
│   │   ├── enums.ts            # EQ_PROFILE, EQ_STATUS_ENUM, EQ_CATEGORY_TYPE_ENUM, EQ_FORBIDDEN_WORDS
│   │   ├── models.ts           # IEQField, IEQEventField, IEQItem, IEQResponse
│   │   └── index.ts
│   ├── event/
│   │   ├── enums.ts            # EVENT_TYPES_ENUM, EVENT_ERROR_REASON_ENUM, DISEASES_ENUM, MEDMETHOD_ENUM, etc.
│   │   ├── animal-event-filter.ts  # AnimalEventFilter class (business logic)
│   │   └── index.ts
│   ├── import-data/
│   │   ├── enums.ts            # IMPDATA_SOURCES_ENUM, IMPDATA_STATUS_ENUM
│   │   └── index.ts
│   ├── milk/
│   │   ├── enums.ts            # MILK_PROVIDER_ENUM
│   │   └── index.ts
│   └── org/
│       ├── const.ts            # CDefaultOrgSettings (event periods, report settings)
│       └── index.ts
└── test/
    ├── index.test.ts
    └── event/
        └── animal-event-filter.spec.ts
```

---

## 4. Export Structure (src/index.ts)

The main barrel exports everything as **namespaced objects**:

```typescript
export const enums = { ...dataEnums, BREED, BREED_AS_OBJECT }  // root enums + breeds
export const rolePermissions = { ROOT_PERMISSIONS, USER_PERMISSIONS }
export const types = { /* IAnimal, IRolePermissionItem, etc. */ }
export const customListEnums = { CLIST_* enums }
export const animalTagEnums = { TAG_TYPE_ENUM }
export const importEnums = { IMPDATA_* enums }
export const animalForEventFilters = { filter, EVENT_ERROR_REASON_ENUM, ... }
export const animalEnums = { ANIMAL_GENDER_ENUM, ANIMAL_STATUS_ENUM, BULL_STATUS_ENUM, COW_STATUS_ENUM }
export const eventEnums = { EVENT_TYPES_ENUM, DISEASES_ENUM, MEDMETHOD_ENUM, ... }
export const eqEnums = { EQ_PROFILE, EQ_STATUS_ENUM, ... }
export const orgConstants = { CDefaultOrgSettings }
export const milkEnums = { MILK_PROVIDER_ENUM }
export const dateHelpers = { getMonthFromDate, datestrToDate }
export * as event from './event'
```

---

## 5. How Consumers Import

### Backend (CommonJS `require`, via main entry):
```javascript
const { EVENT_TYPES_ENUM } = require('@molochko-dev/data').eventEnums
const { COW_STATUS_ENUM } = require('@molochko-dev/data').animalEnums
const { TOKEN_TYPE_ENUM } = require('@molochko-dev/data').enums
const { MILK_PROVIDER_ENUM } = require('@molochko-dev/data').milkEnums
const { EQ_STATUS_ENUM } = require('@molochko-dev/data').eqEnums
const { TAG_TYPE_ENUM } = require('@molochko-dev/data').animalTagEnums
const { CLIST_AFUNCTIONS_ENUM } = require('@molochko-dev/data').enums
```

### Frontend (TypeScript ES import, deep dist/ paths):
```typescript
import { SUPPORTED_LANG_ENUM } from '@molochko-dev/data/dist/enums'
import { ANIMAL_GENDER_ENUM, BULL_STATUS_ENUM } from '@molochko-dev/data/dist/animals/enums'
import { EVENT_TYPES_ENUM } from '@molochko-dev/data/dist/event/enums'
import { AnimalStatus, IAnimal } from '@molochko-dev/data/dist/types'
import { CDefaultOrgSettings } from '@molochko-dev/data/dist/org/const'
import { enumToObject } from '@molochko-dev/data/dist/helpers'
import { MILK_PROVIDER_ENUM } from '@molochko-dev/data/dist/milk/enums'
import { EQ_FORBIDDEN_WORDS } from '@molochko-dev/data/dist/easy-query/enums'
import { dateHelpers } from '@molochko-dev/data'
```

### Consumers & Versions
| Consumer | Version |
|----------|---------|
| molochko-crm/packages/backend | ^1.4.109 |
| molochko-crm/packages/scheduler | ^1.4.108 |
| molochko-crm/packages/shared | ^1.4.108 |
| molochko-front | ^1.4.112 |

---

## 6. Enums Reference

### 6.1 IMPORTANT: Enum Duplication

Many enums exist in TWO places — root `src/enums.ts` (DEPRECATED, marked `TODO removeme`) and domain subdirectories (CANONICAL). **Always use the canonical versions from subdirectories:**

| Enum | DEPRECATED location | CANONICAL location |
|------|--------------------|--------------------|
| `ANIMAL_GENDER_ENUM` | `src/enums.ts` | `src/animals/enums.ts` |
| `ANIMAL_STATUS_ENUM` | `src/enums.ts` | `src/animals/enums.ts` |
| `COW_STATUS_ENUM` | `src/enums.ts` (as `COW_STATUS`) | `src/animals/enums.ts` (as `COW_STATUS_ENUM`) |
| `BULL_STATUS_ENUM` | `src/enums.ts` (as `BULL_STATUS`) | `src/animals/enums.ts` (as `BULL_STATUS_ENUM`) |
| `EVENT_TYPES_ENUM` | `src/enums.ts` | `src/event/enums.ts` |
| `EVENT_ERROR_REASON_ENUM` | `src/enums.ts` | `src/event/enums.ts` |
| `DISEASES_ENUM` | `src/enums.ts` | `src/event/enums.ts` |
| `MEDMETHOD_ENUM` | `src/enums.ts` | `src/event/enums.ts` |
| `CLIST_*` enums | `src/enums.ts` | `src/custom-list/enums.ts` |

The canonical versions may have additional values (e.g., `lateDry`, `estrous`, `calving`) not present in the deprecated root versions.

### 6.2 Root Enums (src/enums.ts) — Non-duplicated

```typescript
BCRYPT_SALT = 12

SYSTEM_USER_ROLES_ENUM     { user, admin, root }
USER_STATUSES_ENUM         { waiting, ready, blocked, deleted }
ORG_TYPE_ENUM              { org, location }
TOKEN_TYPE_ENUM            { confirm, auth, refresh, resetPassword, invite }
SEED_TYPE_ENUM             { traditional, sexytelka, sexybull, meat, meatSexyTelka, meatSexyBull }
SEED_STATUS_ENUM           { active, notActive }
SEED_CODES_ENUM            { DOUBLE_OVSYNC, PRESYNC, RESYNC, OVSYNC, HEAT, ACTIVITY_SENSOR, PRID_DELTA, G6G }
COMMON_SIMPLE_STATUS_ENUM  { failed, success }
USER_PERMISSION_ENUM       { view, create, update, delete, deleteAll, attach, detach }
USER_PERMISSION_METHOD_ENUM { post, put, delete, get, patch }
ACCESS_ENUM                { read, write }
SUPPORTED_LANG_ENUM        { ru = 'ru', en = 'en' }
```

### 6.3 Animal Enums (src/animals/enums.ts)

```typescript
ANIMAL_GENDER_ENUM   { cow = 'cow', bull = 'bull' }

ANIMAL_STATUS_ENUM   { heifer, bred, pregnant, open, fresh, dry, lateDry, dnb, sold, died, theft, transferout }

COW_STATUS_ENUM      { heifer, bred, pregnant, open, fresh, dry, lateDry, dnb, sold, died, theft, transferout, estrous }

BULL_STATUS_ENUM     { sold, bull, died }
```

### 6.4 Event Enums (src/event/enums.ts)

```typescript
EVENT_TYPES_ENUM {
  otel, calving, recheck, ohota, insemenation, stelnaya, yalovaya,
  stelneotpos, perevod, kbiku, suhostoi, abort, neosem, prodazha,
  pala, zamenaNomera, obrKopit, pozSuhostoi, ves, rost, biometry,
  upitannost, zaboi, sinchronizatsia, transferOut, treatment
}

EVENT_EXEC_STATUS_ENUM      { waiting, done, cancel, block }

EVENT_ERROR_REASON_ENUM {
  animalMustBeACow, animalTooYoung, animalInsemenatedAtEventDate,
  animalInVWPForEventDate, animalInDryForEventDate,
  eventsBeforeShouldBeInsemOrRecheck, tooEarlyToRecheckAfterInsemenation,
  recheckMustbeBefore, recheckMustbePregnant, tooEarlyToDry,
  noDryAfterFirstInsemenation, dryMustBeBefore, tooEarlyLateToDry,
  noLateDryAfterFirstInsemenation, lateDryMustBeBeforeCalving,
  dryMustBeBeforeLateDryForCalving, animalNotInCalvingPeriod
}

TRANSFEROUT_TYPES_ENUM  { transferOut, died }
TRANSFEROUT_REASON_ENUM { leikoz, tuberkulez, klostirikoz, nekrobacilez, aktinomikoz, ginekologic, metabolicDisorders, Infertility, udderDiseases, lameness, breedingSales, salesToThePublic, theft, dead }

DISEASES_ENUM { PREVENTION, VACCTINATION, MASTITIS, METRITIS, PARESIS, TEMPERATURE, ABOMASUM_DISPLACEMENT, LAMENESS, INJURY, DEHORNING, METABOLIC_DISEASE, DIARRHEA, ATONY, PNEUMONIA, TYMPANY, HEALTHY, KETOSIS, CONJUNCTEVITIS, DIPEPSIA, SYNCHRONIZATION, OTHER }

MEDMETHOD_ENUM { SUBCUTANEOUSLY, NASALLY, INTRAMUSCULARLY, INTRACISTERNALLY, ORALLY, INTRAVENOUSLY, INTRAUTERINE, INTRAVAGINALLY }
```

### 6.5 Custom List Enums (src/custom-list/enums.ts)

```typescript
CLIST_NUMBER_OPERATOR_ENUM  { eq, gte, lte, lt, gt }
CLIST_STRING_OPERATOR_ENUM  { eq, consists }
CLIST_DATE_OPERATOR_ENUM    { eq, between }
CLIST_TYPE_ENUM             { string, number, date }
CLIST_CONDITION_ENUM        { and, or, not }
CLIST_MODELS_ENUM           { animals, events, seedBank, employee, org, protocol, treatment, animalMetrics }
CLIST_DATASOURCE_ENUM       { animals, animalMetrics, seedBank, events, employee }
CLIST_STATUS_ENUM           { working, published }
CLIST_AFUNCTIONS_ENUM       { count, min, max, avg, sum }
```

### 6.6 Other Enums

```typescript
// src/animal-tag/enums.ts
TAG_TYPE_ENUM              { user, system, event }

// src/easy-query/enums.ts
EQ_PROFILE                 { animal, animalReport }
EQ_STATUS_ENUM             { working, published }
EQ_CATEGORY_TYPE_ENUM      { system, user }
EQ_FORBIDDEN_WORDS         ['*','insert','update','delete','drop','create','alter','change']

// src/import-data/enums.ts
IMPDATA_SOURCES_ENUM       { dairyComp }
IMPDATA_STATUS_ENUM        { waiting, working, ready, error }

// src/milk/enums.ts
MILK_PROVIDER_ENUM         { vestfallia }
```

---

## 7. Types / Interfaces (src/types.ts)

```typescript
export interface EnumItem {
  readonly id: string
  readonly label: string
  readonly color?: string
}
export type EnumArrayAsObject = { [key: string]: string }

export interface IAnimal {
  id: string; orgId: string; name: string; animalId: string;
  isoId: string; regId: string; activometrId: string;
  status: AnimalStatus; gender: ANIMAL_GENDER_ENUM; dob: Date;
  breed?: string; tags?: number[]; searchTag?: string;
  animalEventRelation?: IAnimalEventRelation[];
}
export type AnimalStatus = COW_STATUS | BULL_STATUS
export type BaseAnimal = {
  id: string; dob: Date; gender: ANIMAL_GENDER_ENUM;
  status: AnimalStatus; animalEventRelation?: IAnimalEventRelation[];
}

export interface IAnimalEventRelation { eventDetail: IEventDetail }
export interface IEventDetail { type: EVENT_TYPES_ENUM }

export interface IBackendRolePermissionItem {
  active: boolean;
  permission: USER_PERMISSION_ENUM;
  method: USER_PERMISSION_METHOD_ENUM;
  paths: string[];
}

export interface IRolePermissionItem {
  name: string;
  frontend?: { active: boolean; path: string };
  backend?: IBackendRolePermissionItem[];
}
```

### Easy Query Interfaces (src/easy-query/models.ts)

```typescript
export interface IEQField { field: string; value: string; label: string; type: string; visible: boolean }
export interface IEQEventField extends IEQField {
  treatment?: IEQField; protocol?: IEQField; seedBank?: IEQField; employee?: IEQField
}
export interface IEQItem { animal: Record<string, IEQField>; metrics: Record<string, IEQField>; events: Record<string, IEQEventField>[] }
export interface IEQResponse { count: number; data: IEQItem[] }
```

---

## 8. Constants

### 8.1 Default Org Settings (src/org/const.ts)
```typescript
export const CDefaultOrgSettings = {
  events: {
    minInsemenationAgeDays: 540,
    periodForRecheckAfterInsemenation: [30, 220],
    periodInsemenationAfterLastCalving: [40, 60],
    periodForDryAfterInsemenation: [220, 250],
    periodForLateDryAfterInsemenation: [250, 275],
    periodCalvingAfterInsemenation: [275, 310],
    periodGuessCalving: [365, 410],
  },
  reports: {
    pagingPeriod: 21,
    vwp: { heifer: 360, firstHeifer: 70, mature: 60 },
  },
}
```

### 8.2 Breed Data (src/breed.ts)
`BREED: EnumItem[]` — array of ~120 cattle breeds with `id` (code) and `label` (name).
`BREED_AS_OBJECT` — same data as `{ id: id }` map.

### 8.3 Role Permissions (src/role-permissions.ts)
- `ROOT_PERMISSIONS` — wildcard `*` access
- `USER_PERMISSIONS` — detailed RBAC: maps module names (org, employees, seed-bank, animal-tag, animal, event, role-permissions) to frontend paths and backend API endpoint permissions

---

## 9. Utility Functions

### helpers.ts
```typescript
// Convert EnumItem[] to { [id]: id } map
asObject(arrayOfObjects: EnumItem[]): EnumArrayAsObject

// Convert TypeScript enum to { key: value } plain object (skips numeric reverse-mappings)
enumToObject(e: object): { [key: string]: string }
```

### helpers/date.ts
```typescript
// Months between now and dateString
getMonthFromDate(dateString: string): number

// Parse 6-digit "YYMMDD" string (e.g. "251201") into Date, null if invalid
datestrToDate(dateStr: string): Date | null
```

### event/animal-event-filter.ts
`AnimalEventFilter` class — filters arrays of animals based on event type, checking gender, status, and age constraints. Exported as `filter()` function. Used to determine which animals are eligible for a given event type.

---

## 10. Adding New Enums / Types

### 10.1 Add to Existing Domain
1. Add the enum/type to the relevant `src/<domain>/enums.ts` or `src/<domain>/models.ts`
2. Re-export from `src/<domain>/index.ts`
3. If needed for main entry consumers, add to the namespace export in `src/index.ts`

### 10.2 Add a New Domain
1. Create `src/<domain>/enums.ts` (and/or `models.ts`)
2. Create `src/<domain>/index.ts` with re-exports
3. Add namespace export in `src/index.ts`:
   ```typescript
   import * as _newDomain from './<domain>'
   export const newDomainEnums = _newDomain.enums
   ```
4. Write tests in `test/<domain>/`

### 10.3 Publishing
```bash
npm run pub  # lint → test → version patch → build → publish
```

**IMPORTANT**: After publishing, update the version in all consumer `package.json` files:
- `molochko-crm/packages/backend/package.json`
- `molochko-crm/packages/scheduler/package.json`
- `molochko-crm/packages/shared/package.json`
- `molochko-front/package.json`

Then run `npm install` / `yarn install` in each consumer.

---

## 11. Domain Terms (Russian → English)

Event type enum values use transliterated Russian:
- `otel` / `calving` — calving (birth)
- `ohota` — estrus / heat
- `suhostoi` — dry period
- `pozSuhostoi` — late dry period
- `stelnaya` — pregnant
- `yalovaya` — barren
- `neosem` — failed insemination
- `perevod` — transfer between groups
- `prodazha` — sale
- `pala` — death
- `zaboi` — slaughter
- `sinchronizatsia` — synchronization protocol
- `transferOut` — disposal/removal
- `upitannost` — body condition score
- `ves` — weight
- `rost` — height
- `obrKopit` — hoof trimming
- `zamenaNomera` — tag replacement
- `kbiku` — bull breeding
