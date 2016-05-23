(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* DONE: We only want to display the about section! */
    $('#articles').hide();
    $('#about').show();

  };

  module.aboutController = aboutController;
})(window);
