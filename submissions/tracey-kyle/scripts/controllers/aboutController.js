(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* DONE: We only want to display the about section! */
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });

    $('.main-nav .tab:second').click();
  };

  module.aboutController = aboutController;
})(window);
