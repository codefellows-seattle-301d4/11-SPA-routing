(function(module) {
  var articlesController = {};

  /* TODO: Try and initialize our database table when the controller
      first loads */
  Article.createTable();
  articlesController.index = function() {
    /* TODO: Complete this function that kicks off the fetching and
        rendering of articles. What will happen when a user navigates
        back and forth between home and about?

    /* TODO: Also be sure to reveal only the articles section */
    if ($('#articles section').length === 0) {
      Article.fetchAll(articleView.initIndexPage);
    }

    $('#about').hide();
    $('#articles').show();
  };

  module.articlesController = articlesController;
})(window);
