const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/config");
const path = require("path");
const helpers = require("./utils/helpers");

const exphandlebars = require("express-handlebars");

const handlebars = exphandlebars.create({ helpers });
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3306;
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {
    // Session expires in 20 m
    expires: 20 * 60 * 1000,
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('views', path.join(__dirname, '/views'));
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "main",
    extname: "handlebars",
    partialsDir: __dirname + "/views/partials",
  })
);


app.use(routes);
// connect to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
