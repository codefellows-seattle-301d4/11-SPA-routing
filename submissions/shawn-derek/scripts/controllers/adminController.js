(function(module) {
  var adminController = {};

  adminController.index = function() {
    articleView.initAdminPage();

    $('#about').hide();
    $('#articles').hide();
    $('#write').hide();
    $('#blog-stats').show();


  };

  adminController.newArticle = function() {
    articleView.initNewArticlePage();
    $('#about').hide();
    $('#articles').hide();
    $('#blog-stats').hide();
    $('#write').show();

  };

  module.adminController = adminController;
})(window);
