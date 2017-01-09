@ngdoc content
@name How to write documentation
@description Projects and Slides

Selecting or Changing Projects (Groups)
---
Selecting a group in the groups.component
1. sets `selectedGroup` in workspace
  - `selectedGroup` is bound to `group` in tree component
  - group is now **project**
  - when selectedGroup/group changes, tree changes and hotkeys are added or removed
2. sets global `projectId` in queryDatabase.service (for use in router?)
3. calls 			``this.$rootRouter.navigateByUrl(\`/project/${group.$id}\`);``
  - router in app.component
  - router based on [Angular 1.5 Router](https://docs.angularjs.org/guide/component-router)

Opening/Closing Group Trees
- Matters and Group Tree are all in same div
- default is Matters are shown and Tree is hidden to right
- When selecting a group, class 'open' is added and div is translated to left, revealing group tree.

Keyboard Navigation of Tree
___
key bindings are made with angular-hotkeys plugin

UP & DOWN arrow keys change the `selectedNode` by moving up or down specially created hashmaps (arrays) of nodes in the correct order
