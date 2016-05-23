(function(module) {
  var adminController = {};

  adminController.index = function() {
    Article.fetchAll(articleView.initAdminPage);

    $('#articles').hide();
    $('#about').hide();
    $('#blog-stats').show();
  };

  module.adminController = adminController;
})(window);
