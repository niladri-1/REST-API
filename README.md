# User Management REST API

A simple REST API to manage users. Built with Node.js and Express.

<br>

## 🌐 Try It Live

**API is live here:** https://curdapi-ycmy.onrender.com/

Click the link to see all available endpoints!

<br>

## What This API Does

Add users ➜ View users ➜ Update users ➜ Delete users

That's it! Simple user management.

<br>

## Quick Start

**1. Clone this repo:**
```bash
git clone https://github.com/niladri-1/REST-API.git
cd REST-API
```

**2. Install:**
```bash
npm install
```

**3. Run:**
```bash
npm start
```

Your API is now running at `http://localhost:5000` 🎉

<br>

## How to Use the API

### View All Users
```
GET https://curdapi-ycmy.onrender.com/users
```

### Add a New User
```
POST https://curdapi-ycmy.onrender.com/users
```
Send this data:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 25
}
```

### Get One User
```
GET https://curdapi-ycmy.onrender.com/users/:id
```

### Update a User
```
PATCH https://curdapi-ycmy.onrender.com/users/:id
```
Send the fields you want to change:
```json
{
  "age": 26
}
```

### Delete a User
```
DELETE https://curdapi-ycmy.onrender.com/users/:id
```

<br>

## Test It Right Now

**Try this in your browser or Postman:**

1. **See all users:** Just visit https://curdapi-ycmy.onrender.com/users

2. **Add a user:** Use Postman or this JavaScript code:
```javascript
fetch('https://curdapi-ycmy.onrender.com/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    firstName: 'Jane',
    lastName: 'Smith',
    age: 28
  })
})
```

<br>

## Built With

- Node.js
- Express.js
- UUID (for unique IDs)

<br>

## Important to Know

⚠️ **Data is temporary** - When the server restarts, all users are deleted (no database connected)

This is perfect for learning and testing!

<br>

## Questions?

Open an issue on [GitHub](https://github.com/niladri-1/REST-API) or try the live API!