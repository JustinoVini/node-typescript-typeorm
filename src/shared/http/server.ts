import express from "express";
import cors from "cors";
import routes from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const PORT = 3200;

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}! 🏆`);
});