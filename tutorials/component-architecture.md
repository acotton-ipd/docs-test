@ngdoc content
@name How to write documentation
@description Component Architecture

`@Component` is a DECORATOR [GitHub](https://github.com/wycats/javascript-decorators) | [Medium](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.cyko4s9um)
<br>takes arguments: module, name, options, controller

components are attached to `modules.main` (*see* src/bootstrap.ts)
- vendor modules declared in bootstrap.ts, as well

use: controllerAs: $ctrl;

When declaring component variables:
- **public** if used in template html
- **private** if only used in component.ts

The controllers are written in an OOP format, consisting of a constructor and methods

Dependencies are injected in the constructor

Methods and properties are all referenced within the methods by `this.*name...*`

1-Way bindings can use $onChange method
<br>2-Way bindings require a $watch statement
