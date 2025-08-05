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


app.get("/", (req , res)=>{
res.send(users)
})

router.post("/", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.send({ message: "User added successfully", user: newUser });
}); 


export default router;