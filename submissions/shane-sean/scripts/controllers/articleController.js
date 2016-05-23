(function(module) {
  var articlesController = {};

  /* TODO:NE Try and initialize our database table when the controller
      first loads */

  Article.createTable();

  articlesController.index = function() {
    /* TODO:NE Complete this function that kicks off the fetching and
        rendering of articles. What will happen when a user navigates
        back and forth between home and about?

    /* TODO:NE Also be sure to reveal only the articles section */
    Article.fetchAll(articleView.initIndexPage);
    $('section').not('.heading-group-h1').hide();
    $('#articles').fadeIn('fast');
  };

  module.articlesController = articlesController;
})(window);
