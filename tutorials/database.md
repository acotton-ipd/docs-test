@ngdoc content
@name How to write documentation
@description Database Architecture

Database Architecture
---
top level: **projects**

reference aliases created in src/\_common/services/queryDatabase.service.ts

queryDatabase.service.ts
---
- service named `db`
- inject into component with `private db: QueryDatabase` (*see* tagEditor.component.ts)
- create Firebase references like `this.db.Tags` or `this.db.Project`
