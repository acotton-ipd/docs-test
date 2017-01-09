Forms components
===
parent: workspace
visible if `selectedNode` is not a Group
receives selectedNode.id and selectedGroup.id

Pages
---
add new page: add_page_icon.svg calls `choosePage()` which opens Page Chooser (dialog containing file.html template)

Pages can also be added by drag-and-dropping a pdf over the #file-drop-zone (currently the drop zone is set to the entire form.html template).

Drag-and-drop opens the <page-preview> component (PDF viewer) directly.  

The <page-preview> is an overlay which is made visible, not an mdDialog.

Adding Pages:
1. add button
  2. calls choosePage
2. opens Page Chooser / file.html in mdDialog
  3. dialog promise .then openPanel(file)
    4. if (file), open into PDF Viewer when Page Chooser dialog is closed (**???**)
3. choose existing page or **add new page**
  4. "Browse File" button opens file browser
  5. **uses angular-file-model plugin**
  6. chosen file > file-model > $ctrl.file
  7. WATCHes for change in `file`
  8. calls $mdDialog.hide(this.file) //passes filename to hide
  9. after hide, then `openPanel(file,null)`
  10. `openPanel` calls `PdfService` which loads PDF into PDF Viewer

Selected page in <page-preview> is opened into PDF Viewer by:
onOpen > openDocument > openPanel > PdfService
passes document data from Firebase to openDocument
openPanel takes file object from DOM

uploadBlob ??
