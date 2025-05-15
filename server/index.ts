import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form submission:', { name, email, message });
  res.json({ message: `Thank you for your interest, ${name}` });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err: NodeJS.ErrnoException) => {
  console.error('Server failed to start:', err.message);
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Try a different port.`);
  }
});