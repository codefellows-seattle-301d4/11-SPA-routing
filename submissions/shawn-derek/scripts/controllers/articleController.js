(function(module) {
  var articlesController = {};

  /* TODO:DONE Try and initialize our database table when the controller
      first loads */
  Article.createTable();
  Article.fetchAll(articleView.initIndexPage);

  articlesController.index = function() {
    /* DONE: Complete this function that kicks off the fetching and
        rendering of articles. What will happen when a user navigates
        back and forth between home and about?*/
    /* DONE: Also be sure to reveal only the articles section */
    $('#about').hide();
    $('#blog-stats').hide();
    $('#write').hide();
    $('#articles').show();
  };

  module.articlesController = articlesController;
})(window);
