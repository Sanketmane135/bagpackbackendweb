let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let helmet = require('helmet');
require('dotenv').config();

const bagpackroutes = require('./App/routes/bagpackroutes');
let app = express();


app.use(express.json());

app.use(cors(
  {
  origin:["https://bagpacktrips.vercel.app", " http://localhost:3000"],
  credentials: true,
  }
));

app.use('/api/bagpack', bagpackroutes);

app.get('/', (req, res) => {
  res.send(
    { 
       status: 1,
       msg: 'Welcome to the backend server!' }
);
});


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to database"))
  .catch(err => console.log("Error connecting to database", err));

// Start server regardless
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

