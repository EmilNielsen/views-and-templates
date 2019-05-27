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
---

* **res.render() vs res.send()**

```javascript
res.render('/test');
res.send();
```

Der vil opstå en lille konflikt mellem disse to.
Render() prøver at sende en html-string ud som skal vises som en html-side i browseren
Send() prøver at sende *noget* ud for at undgå at siden kommer til at loade indtil server sender en timeout-error

**Der kan kun sendes *én* gang per route.**