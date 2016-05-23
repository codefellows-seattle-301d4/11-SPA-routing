(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* DONE: We only want to display the about section! */
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
