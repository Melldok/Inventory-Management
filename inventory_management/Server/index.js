import express from 'express'
import mysql from "mysql"
import cors from "cors"

// BACKEND CONSTRUCTION : Using express, cors, nodemon 

const app = express()

// Creating the connection, password by default is root

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"inventory_management"

})

app.use(express.json())
app.use(cors())


app.get("/", (req,resp) => {
    resp.json("Hello, this is the backend")
})

app.get("/items", (req,resp) => {
    const q = "SELECT * FROM items"
    db.query(q, (err, data) => {
        if(err) return resp.json(err)
        return resp.json(data)
    })
})

// Port where the backend server is being listened to

app.listen(8800, () => {
    console.log('Connected to backend!')
})

// Backend create behavior

app.post("/items", (req, resp) => {
    const q = "INSERT INTO `inventory_management`.`items` (`product_name`, `in_stock`, `category`, `src`, `storage`) VALUES (?)"

    const values = [
        req.body.product_name,
        req.body.in_stock,
        req.body.category,
        "https://source.unsplash.com/30x30",
        req.body.storage
    ]

    db.query(q, [values], (err,data) => {
        if(err) return resp.json(err)
        return resp.json('Item has been created')
    })
})



// DELETE

app.delete("/items/:id", (req,resp) => {
    const itemId = req.params.id;
    const q = "DELETE FROM items WHERE id = ?"

    db.query(q,[itemId], (err, data) => {
        if(err) return resp.send(err)
        return resp.json('Item has been deleted')
    })
})


// UPDATE (PUT)


app.put("/items/:id", (req,resp) => {
    
    const itemId = req.params.id;
    const q = "UPDATE items SET `in_stock` = ? WHERE id = ?";
    // User is able to change the stock amount dinamically on the client
    const values = [req.body.in_stock]

    db.query(q, [...values, itemId], (err, data) => {
        if(err) return resp.send(err)
        return resp.json('Item has updated succesfully')
    })
})

