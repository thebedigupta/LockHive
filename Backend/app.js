const express = require('express');
const userRouter = require('./routes/user.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(userRouter);

app.listen(3000);
