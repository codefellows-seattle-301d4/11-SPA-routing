(function(module) {
  var adminController = {};

  Article.fetchAll(articleView.initAdminPage);
  
  $('#articles').hide();
  $('#about').hide();
  $('#blog-stats').show();

  module.adminController = adminController;
})(window);
