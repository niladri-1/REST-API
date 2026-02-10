import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
	console.log("[Serving API Documentation]");
	res.sendFile('home.html', { root: __dirname });
})

app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);