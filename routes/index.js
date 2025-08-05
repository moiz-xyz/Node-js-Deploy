import express from "express";

const router = express.Router();

const users = [
    {
        id: 1,
        name: "Abdullah",
        email: 'ab@gmail.com'
    },
    {
        id: 2,
        name: "Ahmed",
        email: 'Ahmedh@gmail.com'
    },
    {
        id: 3,
        name: "Ali",
        email: 'alik@gmail.com'
    },
]

router.get("/", (req, res) => {
   console.log("POST /api hit with body:");
  res.send("API is running");
});

router.post("/", (req, res) => {
   console.log("POST /api hit with body:", req.body);
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.send({ message: "User added successfully", user: newUser });
}); 


export default router;