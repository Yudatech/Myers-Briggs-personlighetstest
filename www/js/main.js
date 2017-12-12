
let app;

// Tell jsonflex what classes we expect it to save/load
JSON._classes(App, QandA);


// Load json data
JSON._load('score_and_id.json')
  .then((data) => {
    // Retrieve the app from JSON
    app = data.app;
  })
  .catch(() => {
    // No working json data
    // create new app
    app = new App();
  })
  .then(() => {
    // Tell the app to render to <main>
    if(app.q_and_a_s.length>0){
      app.render('main');
    }

    else{
      app.loadQ().then(() => {
        app.currentQ=app.q_and_a_s[0];
        app.render('main');
      });
    }

});







