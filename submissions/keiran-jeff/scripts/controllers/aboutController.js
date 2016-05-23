(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* TODO: We only want to display the about section! */
    console.log('About Controller running...');
    $('#articles').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
