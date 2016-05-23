(function(module) {
  var articlesController = {};

  /* TODO: Try and initialize our database table when the controller
      first loads */

  articlesController.index = function() {
    /* TODO: Complete this function that kicks off the fetching and
        rendering of articles. What will happen when a user navigates
        back and forth between home and about?*/
    Article.createTable();
    Article.fetchAll(articleView.initIndexPage);
    /* TODO: Also be sure to reveal only the articles section */
    $('#about').hide();
  };

  module.articlesController = articlesController;
})(window);
