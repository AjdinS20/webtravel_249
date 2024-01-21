const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/api/users', userRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/comments', commentRoutes);

mongoose.connect('mongodb://localhost/dbtravel_249', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(() => {
   console.log("MongoDB Connected");
   ensureAdminUser();
  })
  .catch(err => console.log(err));

  async function ensureAdminUser() {
    try {
      const adminUser = await User.findOne({ username: "admin" });
      if (!adminUser) {
        const hashedPassword = await bcrypt.hash("adminpass", 10);
        const newAdmin = new User({
          username: "admin",
          password: hashedPassword,
          email: "admin@example.com",
          role: "admin",
          isActive: true
        });
        await newAdmin.save();
        console.log("Admin user created");
      }
    } catch (error) {
      console.error("Error ensuring admin user:", error);
    }
  }
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Travel Agency Portal');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});