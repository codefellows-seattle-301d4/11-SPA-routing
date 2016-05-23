(function(module) {
  var articlesController = {};


  Article.createTable();

  articlesController.index = function() {
    Article.fetchAll(articleView.initIndexPage);
    $('#about').hide();
    $('#articles').show();
    $('#blog-stats').hide();
  };

  module.articlesController = articlesController;
})(window);
