module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "title": "Home",
         "page": "home"
      });
      console.log("Home loaded");
      // res.send("yote");
      // console.log("Home page"); //Udskriver i terminal
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {
         "title": "Products",
         "page": "product"
      });
      console.log("Products loaded");
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {
         "title": "Contact",
         "page": "contact"
      });
      console.log("Contacts loaded");
   });

   app.get('/test', (req, res, next) => {
      res.send("This is just a small test");
      console.log("test page");
   });
};