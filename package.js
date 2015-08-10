Package.describe({
  name: 'alexdmejias:jqgrid',
  summary: 'jqGrid',
  version: '0.1.0',
  git: 'https://github.com/amejias101/meteor-jqGrid.git'
});

Package.onUse(function(api) {

  if (api.versionsFrom) {
    api.versionsFrom('1.0.3');
  }

  api.use('jquery', 'client');

  api.addFiles('lib/jqGrid/js/minified/jquery.jqGrid.min.js','client', {bare:true}); // 'bare' means Meteor won't add another closure
  api.addFiles('lib/jqGrid/js/i18n/grid.locale-en.js','client', {bare:true}); // 'bare' means Meteor won't add another closure
  api.addFiles('lib/jqGrid/css/ui.jqgrid-bootstrap.css','client');

});
