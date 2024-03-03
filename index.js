const express = require("express");
const uuid = require("uuid")


const app = express();

const port = 3000;


const users = []



app.get("/users", (request, response) => {
    
    return response.json(users)
})

          
app.post("/users", (request, response) => {
    const {name,age} = request.body

    const user ={ id: uuid.v4(), name,age}
    users.push(user)

    
    return response.status(201).json(users)
})
app.put("/users", (request, response) => {
    const {id} = request.params
    const {name,age} = request.body

    const updateedUser = {id, name, age}

    const index = users.findIndex (user => user.id ===id)

    if(index < 0){
        return response.status(404).json({ message: "User not Found"})
    }

    users[index = updateedUser]
    
    
    return response.json(users)
})

app.delete("/users/id", (request, response) => {
    const {id} = request.params

    const index = users.findIndex(user =>user.id === id)
    if(index < 0){
        return response.status(404).json({message:"User not found"})
    }
    users.splice(index,1)
    return response.status(204).json()
    
    return response.json(users)
})






app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
