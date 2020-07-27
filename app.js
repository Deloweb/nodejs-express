const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const host = "localhost";
const port = 8000;

app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.get("/", (req, res) => {

  axios.get('https://jsonplaceholder.typicode.com/posts').then((test) => {
      let length = test.data.length;
        let posts = (test.data).slice(length-3,length);
        res.render("index.twig", {
            posts: posts
        }
        );
    })
});

app.get("/blog", (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((test) => {
        let posts = (test.data);
        res.render("posts.twig", {
            posts: posts
        }
        );
    })
});

app.get(tt = '/blog/:id', (req, res) => {
    res.render("post.twig", {
        id: tt
    });
  });

app.listen(port, () => {
  console.log(`App listening on ${host}:${port}`);
});
