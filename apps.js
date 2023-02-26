(function(){
    (async()=>{
        let response = await fetch("http://localhost:3000/Books")
        let user = await response.json();
        
        console.log(user)
    })();
    
}());