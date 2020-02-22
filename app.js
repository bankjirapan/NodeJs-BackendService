const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const errorController = require('./controllers/error');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

const app = express();

// Database setup
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItems = require('./models/cart-items');
const Order = require('./models/order');
const OrderItems = require('./models/order-items');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');
app.use(bodyParser.urlencoded({ extended: false }));

var options = {
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: '',
  database: 'hellonode'
};

const sessionStore = new MySQLStore(options);

app.use(
  session({
    secret: 'MyProejct',
    resave: false,
    store: sessionStore,
    saveUninitialized: false
  })
);

const csrfProtection = csrf();

app.use(csrfProtection);
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use((req, res, next) => {
  User.findById(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(() => {
      console.log('err');
    });
});

app.use((req,res,next) =>{
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();

  next();
});

app.use('/admin', adminRoutes);
app.use(authRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// Database runing
Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItems });
Product.belongsToMany(Cart, { through: CartItems });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItems });

sequelize
  .sync({ force: false })
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
