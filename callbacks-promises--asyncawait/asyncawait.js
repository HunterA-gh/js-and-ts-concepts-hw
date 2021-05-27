async function getMessage() { // <--- async makes the function return a Promise
    return "message" // <--- essentially means Promise.resolve("message")
}

console.log(getMessage())

getMessage().then((response) => console.log(response));

async function getUser() {
    const response = await fetch('https://api.github.com/users/abcde') // <--- await makes the program wait until the promise is resolved
    const data = await response.json() // <-- makes the program wait, ensures data is filled

    console.log(data)
}

getUser()



async function getAPIdata() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data) => {
            return data.text();
            })
            .then((data) => document.write(data))
        .catch(function(ex) {
        return ex;
    }).finally(document.write("it's over"))
}

// OR

async function getAPIdata2() {
    try{
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const newData = await data.text();
        document.write(newData);
    } catch (ex){
        document.createElement("h1", "ok");
    }
}


getAPIdata();

