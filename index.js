let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
require('dotenv').config();

const bagpackroutes = require('./App/routes/bagpackroutes');
let app = express();


app.use(express.json());
app.use(cors());



app.use('/api/bagpack', bagpackroutes);

app.get('/', (req, res) => {
  res.send(
    { 
       status: 1,
       msg: 'Welcome to the backend server!' }
);
});


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to database");
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running on port ${process.env.PORT}`);
  });
})
.catch(err => {
  console.error("❌ Error connecting to database:", err);
  process.exit(1); // stop the app if DB connection fails
});
