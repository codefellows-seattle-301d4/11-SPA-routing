(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* TODO:DONE We only want to display the about section! */
    $('#articles').hide();
    $('#blog-stats').hide();

    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
