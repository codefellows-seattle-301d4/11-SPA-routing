(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* TODO:NE We only want to display the about section! */
    $('#articles').hide();
    $('content').hide();
    $('#about').fadeIn('fast');
  };

  module.aboutController = aboutController;
})(window);
