module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {
         "title": "yeetus"
      });
   });

   app.get('/product', (req, res, next) => {
      res.render('product');
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact');
   });
};