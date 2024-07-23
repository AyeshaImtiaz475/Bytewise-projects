import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import usersRouter from './route/users.js'; // Corrected import

// Declare express
const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app-1", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo Error", err));

// Router path
app.use('/users', usersRouter);

// Home route
app.get('/', (req, res) => {
  res.send('Hello from Homepage');
});

// Listen for incoming requests
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
