# Noter til Avanceret Frontend

* Hvad gør følgende kode?
```javascript
res.render();
```
res.render(); render et *view*, en html-string, der bliver læst af browseren og vist som en html-side

---

* **Server-tags**

```
<%- %>
<%= %>
```

---

* **Conditional(ternary) operator**

```javascript
something == "something else" ? something : "yote";
```

---

* **Send data med sammen med sider i routes**

```javascript
app.get('/', (req, res, next) => {
      res.render('home', {
         "title": "yeetus"
      });
   });
```
Efter det første argument kan man tilføje extra data vha. et komma og et JS objekt:
```javascript
res.render('home', {"what is this?":"Object"});
```
