import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const PORT = 5000;


app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
	res.send('Wellcome to this REST API! You have to go /user section');
})

app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);