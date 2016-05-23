(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* DONE: We only want to display the about section! */
    $('#about').show();
    $('#articles').hide();
  };

  module.aboutController = aboutController;
})(window);
