(function(module) {
  var adminController = {};

  /* TODO: Try and initialize our database table when the controller
      first loads */

  adminController.index = function() {
    /* TODO: Complete this function that kicks off the fetching and
        rendering of articles. What will happen when a user navigates
        back and forth between home and about?*/

    Article.fetchAll(articleView.initAdminPage);

    $('#articles').hide();
    $('#about').hide();
    $('#index-nav').hide();
    $('#admin-nav').show();
    $('#admin').show();


    /* TODO: Also be sure to reveal only the articles section */
  };

  module.adminController = adminController;
})(window);
//
