(function(module) {
  var articlesController = {};

  /* DONE: Try and initialize our database table when the controller
      first loads */

  articlesController.index = function() {
    /* DONE: Complete this function that kicks off the fetching and
        rendering of articles. What will happen when a user navigates
        back and forth between home and about?


    /* DONE: Also be sure to reveal only the articles section */

    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });

    $('.main-nav .tab:first').click();
  };

  module.articlesController = articlesController;
})(window);
