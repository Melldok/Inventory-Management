import express from 'express'
import mysql from "mysql"
import cors from "cors"

const app = express()

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

app.listen(8800, () => {
    console.log('Connected to backend!')
})

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