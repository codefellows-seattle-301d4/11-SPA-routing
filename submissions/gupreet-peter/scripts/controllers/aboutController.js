(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* DONE: We only want to display the about section! */
    $('#about').show();
    $('#articles').hide();
    $('#blog-stats').hide();
  };

  module.aboutController = aboutController;
})(window);
