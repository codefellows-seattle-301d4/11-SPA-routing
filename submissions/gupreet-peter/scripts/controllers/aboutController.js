(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show();
    $('#articles').hide();
    $('#blog-stats').hide();
  };

  module.aboutController = aboutController;
})(window);
