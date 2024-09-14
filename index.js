import express from 'express';
import bodyParser from 'body-parser';
import purchaseRoutes from './routes/purchaseRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000
app.use(bodyParser.json());
app.use('/api', purchaseRoutes);
app.listen(PORT, () => {console.log(`Server running on port: ${PORT}`)
});