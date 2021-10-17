const http = require("http");
const fs = require("fs");

const products = [
  {
    name: "pc",
    price: 2000,
    src: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__340.jpg",
  },
  {
    name: "tv",
    price: 2500,
    src: "https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141__340.png",
  },
  {
    name: "phone",
    price: 2000,
    src: "https://cdn.pixabay.com/photo/2017/04/03/15/52/mobile-phone-2198770__340.png",
  },
  {
    name: "fridge",
    price: 4000,
    src: "https://cdn.pixabay.com/photo/2021/04/20/09/26/fridge-6193314__340.jpg",
  },
  {
    name: "microwave",
    price: 2000,
    src: "https://cdn.pixabay.com/photo/2020/05/08/09/23/appliance-5144884__340.jpg",
  },
];

const product = {
  name: "pc",
  price: 2000,
  src: "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241__340.jpg",
};

const HtmlFile = "./public/index.html";
const HtmlFile2 = "./public/about.html";
const HtmlFile3 = "./public/sales.html";
const jsonObj = JSON.stringify(products);

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile(HtmlFile, "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("not found");
        } else {
          res.write(data);
        }
        res.end();
      });
      break;
    case "/about":
      fs.readFile(HtmlFile2, "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("not found");
        } else {
          res.write(data);
        }

        res.end;
      });
      break;

    case "/sales":
      fs.readFile(HtmlFile3, "utf8", (err, data) => {
        if (err) {
          res.writeHead(404);
          res.write("not found");
        } else {
          res.write(data);
        }
      });

      break;

    case "/products":
      res.write(jsonObj);
      res.end();
      break;

      case "/product":
          res.write(JSON.stringify(product))
          res.end()
          break;
          case  "/CSS/style.css":
            fs.readFile('./public/CSS/style.css', "utf8", (err, data) => {
              if (err) {
                res.writeHead(404);
                res.write("wrong");
              } else {
                res.writeHead(200,{"content-type":"text/css"});
                res.write(data);
              }
              res.end();
            });
    default:
      break;
  }
});

server.listen(2000);
