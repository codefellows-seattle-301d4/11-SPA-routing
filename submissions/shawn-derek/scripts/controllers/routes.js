/* TODO: Configure our two routes for this app with page.js,
    by registering each URL your app can handle, linked to a
    single controller function to handle it: */
page('/', index);
page('/about', about);
/* TODO: What function do we call to activate page.js?
    Fire it off now, to execute it: */
page();

function index(){
  console.log('we made it');
  articlesController.index();
}

function about(){
  console.log('we made it to about');
  aboutController.index();

}
