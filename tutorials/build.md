@ngdoc content
@name How to write documentation
@description Build Process

Build Process
===
- Gulp controls TypeScript
- Sass is namespaced
- component paths are relative to the 'public' folder

1. an npm script is used to run gulp with "npm run gulp" (~/package.json)
  2. gulpfile location is set within npm script as well
2. scripts used for build process are all in "build" directory
  3. parent directories for source and destination files are defined in config.js
  4. specific paths for app and vendor files are set in paths-app.js and paths-vendor.js
3. Gulp loads these paths then runs tasks
4. Gulp runs Typescript files through TSLint then Typescript
5. Gulp also runs Sass preprocessing on all styles

using [gulp-jsdoc3](https://github.com/mlucool/gulp-jsdoc3) to build jsdoc documentation

src/\_assets is only copied to public/assets when gulp is initially run
src/\_assets is not watched for changes
