// Add your code here
    function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
    method: "POST", 
    headers: {
        "Content-type": "application/json", 
        "Accept": "application/json"
    }, 
    body: JSON.stringify({name, email})
}
)
    .then(function(response) {
       return response.json()
    })
    .then(function(object) {
        const newDiv = document.createElement("div")
        newDiv.innerHTML = object.id 
        document.body.appendChild(newDiv)
})
    .catch(function(error) {
        alert('Unauthorized Access')
        const span = document.createElement('span');
        span.innerHTML = error.message; 
        document.body.append(span)
    })
}



