(function(module) {
  var adminController = {};

  adminController.index = function() {
    Article.fetchAll(articleView.initAdminPage);
    console.log('hi');
    $('#about').hide();
    $('#articles').hide();
    $('content').fadeIn('fast');
  };

  module.adminController = adminController;
})(window);
