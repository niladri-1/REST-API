# User Management API

Simple REST API for managing users. Create, read, update, and delete user data.

## Live API

🌐 **Base URL:** `https://curdapi-ycmy.onrender.com`

💾 **Source Code:** [github.com/niladri-1/REST-API](https://github.com/niladri-1/REST-API)

## Setup

```bash
git clone https://github.com/niladri-1/REST-API.git
cd REST-API
npm install
npm start
```

Server runs at `http://localhost:5000`

## API Endpoints

### GET - View All Users

**What it does:** Returns a list of all users

**URL:** `https://curdapi-ycmy.onrender.com/users`

**How to test:**
- **Browser:** Just paste the URL above in your address bar
- **Postman:** Create a GET request with the URL above
- **JavaScript:**
  ```javascript
  fetch('https://curdapi-ycmy.onrender.com/users')
    .then(response => response.json())
    .then(data => console.log(data));
  ```

**Response example:**
```json
[
  {
    "firstName": "John",
    "lastName": "Doe",
    "age": 25,
    "id": "abc-123-def"
  }
]
```

---

### POST - Create New User

**What it does:** Adds a new user to the database

**URL:** `https://curdapi-ycmy.onrender.com/users`

**How to do it:**

**Using Postman:**
1. Set method to `POST`
2. URL: `https://curdapi-ycmy.onrender.com/users`
3. Go to Body → raw → JSON
4. Paste this:
   ```json
   {
     "firstName": "Jane",
     "lastName": "Smith",
     "age": 28
   }
   ```
5. Click Send

**Using JavaScript:**
```javascript
fetch('https://curdapi-ycmy.onrender.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName: 'Jane',
    lastName: 'Smith',
    age: 28
  })
})
```

**Response:** `"Jane is added"`

---

### GET - View Single User

**What it does:** Gets information about one specific user

**URL:** `https://curdapi-ycmy.onrender.com/users/{user-id}`

Replace `{user-id}` with the actual ID from when you created or fetched users

**Example:** `https://curdapi-ycmy.onrender.com/users/abc-123-def`

**How to test:**
- **Browser:** Paste the URL with a real user ID
- **Postman:** GET request with the URL above

---

### PATCH - Update User

**What it does:** Changes some information about an existing user

**URL:** `https://curdapi-ycmy.onrender.com/users/{user-id}`

**How to do it:**

**Using Postman:**
1. Set method to `PATCH`
2. URL: `https://curdapi-ycmy.onrender.com/users/{user-id}` (use real ID)
3. Go to Body → raw → JSON
4. Send only the fields you want to change:
   ```json
   {
     "age": 29
   }
   ```

**Using JavaScript:**
```javascript
fetch('https://curdapi-ycmy.onrender.com/users/abc-123-def', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    age: 29
  })
})
```

**Response:** `"abc-123-def has been updated!"`

---

### DELETE - Remove User

**What it does:** Permanently deletes a user from the database

**URL:** `https://curdapi-ycmy.onrender.com/users/{user-id}`

**How to do it:**

**Using Postman:**
1. Set method to `DELETE`
2. URL: `https://curdapi-ycmy.onrender.com/users/{user-id}` (use real ID)
3. Click Send

**Using JavaScript:**
```javascript
fetch('https://curdapi-ycmy.onrender.com/users/abc-123-def', {
  method: 'DELETE'
})
```

**Response:** `"User Id: abc-123-def deleted from DB!"`

## Important Notes

⚠️ **No Database:** Data is stored in memory only. When server restarts, all users are lost.

💡 **Perfect for:** Learning, testing, portfolio projects

🔑 **User ID:** Every user gets a unique ID automatically (UUID format)

## Tech Stack

Node.js • Express.js • UUID

## License

ISC