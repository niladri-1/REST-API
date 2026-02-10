import { v4 as uuidv4 } from "uuid";

let users = [
	{
		"firstName": "Jhon",
		"lastName": "Doe",
		"age": 25,
		"id": "16de44e8-25db-433c-bb0f-868c79c6aff9"
	},
	{
		"firstName": "Alex",
		"lastName": "Lin",
		"age": 34,
		"id": "a8c44c06-4484-4828-bf45-591a1341d35a"
	},
	{
		"firstName": "Addyson",
		"lastName": "Richmond",
		"age": 21,
		"id": "358a2675-6709-429e-838b-1368963772bb"
	},
	{
		"firstName": "Tyler",
		"lastName": "Cochran",
		"age": 28,
		"id": "071262da-c022-49f7-8e1b-91163cfe727b"
	}

];


export const getUsers = (req, res) => {
	res.send(users);
}

export const createUser = (req, res) => {
	const user = req.body;
	const userId = uuidv4();

	const userWithId = { ...user, id: userId };
	users.push(userWithId);

	res.send(`${userWithId.firstName} is added`);
}

export const getUser = (req, res) => {
	const { id } = req.params;
	const foundUser = users.find((user) => user.id === id);
	res.send(foundUser);
}

export const deleteUser = (req, res) => {
	const { id } = req.params;
	users = users.filter((user) => user.id !== id);
	res.send(`User Id: ${id} deteled from DB!`);
}

export const updateUser = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;

	const user = users.find((user) => user.id === id);

	if (firstName) user.firstName = firstName;
	if (lastName) user.lastName = lastName;
	if (age) user.age = age;

	res.send(`${id} has been updated!`);
}