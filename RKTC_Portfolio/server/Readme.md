1. cd server
2. npm init -y
3. npm install express mongoose cors dotenv
//cors is used to give React frontend , access of backend
4. npm install --save-dev nodemon
- then added some json scripts.
5. npm run dev
- created index.js : import, create app, get, listen
- Inquiry.js model:
  ::new mongoose.Schema(): defines the structure of the Inquiry document.
  ::trim: remove extra spaces
  ::timestamp:true automatically adds 'createdAt' and 'updatedAt'(admin can see the time it came)
- .env file and mongoose connect()
7. npm install bcryptjs jsonwebtoken 
- connect to mongoose 