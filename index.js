import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
	console.log("[Serving API Documentation]");
	res.sendFile(path.join(__dirname, 'home.html'));
})

app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);