const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('ok');
});

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/notes', require('./routes/api/notes'))
app.use('/api/todos', require('./routes/api/todos'))
app.use('/api/events', require('./routes/api/events'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;