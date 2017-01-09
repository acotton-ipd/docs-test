@ngdoc content
@name How to write documentation
@description Documentation

Dgeni
===
- uses jsdoc (like?) markup parsing
- requires typescript package (see config/index.js)
- requires ngdoc package
- run > `gulp dgeni` to compile

https://github.com/angular/dgeni

**[Tod Motto tutorial](https://toddmotto.com/documenting-angular-dgeni)** and [source files](https://github.com/toddmotto/angular-1-5-components-app)

1. install npm dependencies locally w/ --save-dev
2. create dir structure
3. edit config in config/index.js
  - creates & exports Dgeni package w/required dependencies
  - sets paths and source files
  - **ADD TYPESCRIPT support**
    - require typescript package
    - include **readTypeScriptModules** to set source input
4. create static docs
  - guides, tutorials, notes, etc...
5. Dgeni code generated docs will automatically be created and put into content/api
6. create Gulp task
  - run w/ `gulp dgeni`
  - outputs to docs/build
  - write task to clean up /build dir before generating docs
  - write task to copy docs/app/* to docs/build/src
7. create ng app to view doc
  - app.module & app.config
  - controllers for api & guide
  - index template (just copied to build folder)
8. Processor for Angular Index Page (index template)
  - config/processors/index-page.js
  - add to config/index.js

**issues**
- TS files are being read but error `warn:    No module code found in src/app/app/app.component.ts`
- TS files are not included in build
- test file that appears in docs/build when .js does not work when changed to .ts

petebacondarwin [dgeni-angular example](https://github.com/petebacondarwin/dgeni-angular)

[dgeni-typescript-example](https://github.com/ericjim/dgeni-typescript-example)

more about [Dgeni packages](https://github.com/angular/dgeni-packages)

"ngdoc - The angular.js specific tag-defs, processors and templates. This loads the jsdoc and nunjucks packages for you."

ngdoc
---
[angularjs: Writing AngularJS Documentation](https://github.com/angular/angular.js/wiki/Writing-AngularJS-Documentation)

**[starting off with ngDocs](http://www.podpea.co.uk/blog/starting-off-with-ngdocs/)**

[ngDoc](http://www.chirayuk.com/snippets/angularjs/ngdoc)

[gulp-ngdocs](https://www.npmjs.com/package/gulp-ngdocs)

(from 2014) "The flavour of jsdoc used by AngularJS is called ngdoc and is parsed by a Node.js utility called Dgeni."

typeDoc
---
[gulp-typedoc](https://runkit.com/npm/gulp-typedoc)

[typeDoc github](https://github.com/TypeStrong/typedoc)

[typeDoc.org](http://typedoc.org/guides/installation/)

other
---
[generating documentation for typescript projects](https://blog.cloudflare.com/generating-documentation-for-typescript-projects/)
