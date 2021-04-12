const express = require('express');
const session = require('express-session');
const app = express();

const PORT = process.env.PORT || 8003;

app.set('trust proxy', 1);
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  name: "To-Do"
//   cookie: { secure: true }
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))
app.set('view engine', 'ejs');

//Routes
// app.get('/', (req,res) => res.redirect('/home'));
app.use('*', (req, res) => {
  res.render('404', {title: 'Not Found', user: {}} )
})

app.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)});