(function(){

    // fetch("http://localhost:3000/New_students")
    // .then(data => data.json())
    // .then(result => console.log(result))

    axios.get("/db.json")
    .then(result => console.log (result.data))
}());