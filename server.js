const express = require('express')
const app = express()
app.use(express.json());

var students = [
    {
        id:1,
        name:"faith",
        age:20
    },
    {
        id:2,
        name:"Wambui",
        age:10
    }
]

// routes
app.get("/student", (req,res) => {
    // res.send('Hello Node Api')
    res.send({
        success:true,
        message:"data fetched successfully",
        data:students
    });
})

app.post("/student",(req,res) => {
    var name = req.body.name
    var age = req.body.age
    students.push({
        id:(students.length + 1).toString(),
        name:name,
        age:age
    })
    res.send({
        success:true,
        message:"Student created successfully"
    })
})

app.delete("/student/:id",(req,res) =>{
    var id = req.params.id
    var newStudents = students.filter(stud => stud.id != id)
    students = newStudents

    res.send({
        success:true,
        message:"Student deleted successfully"
    })
})

app.put("/student/:id",(req,res) =>{
    var id = req.params.id
    var student = students.find(stud => stud.id == id)

    if(!student){
        res.status(404).send({
            success:false,
            message:"Student not found"
        })
    }
    else{
        student.name = req.body.name || student.name
        student.age = req.body.age || student.age

        res.send({
            success:true,
            message:"Student updated successfully"
        })
    }
})


app.listen(3000,() => {
    console.log('Node Api app is running on port 3000')
})