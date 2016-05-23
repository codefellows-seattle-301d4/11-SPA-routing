(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* TODO: We only want to display the about section! */
    $('#admin').hide();
    $('#articles').hide();
    $('#admin-nav').hide();
    $('#index-nav').show();
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
