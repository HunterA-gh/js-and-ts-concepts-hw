/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('will be resolved'), 2000)
})

promise.then((response) => { return response + "more" }).then((responseTwo) => {console.log(responseTwo)})
*/

function getUsers(onSuccess) {
    return new Promise((resolve, reject) => { // <-- used when there is not always a chance of success
        setTimeout(() => {
            if (onSuccess) {
                resolve([
                    {id: 1, name: 'p1'},
                    {id: 2, name: 'p2'},
                    {id: 3, name: 'p3'},
                ])
            } else {
                reject('Failed to fetch data!')
            }
        }, 1000)
    })
}

getUsers(true)  // <--- Mimics an API that would get user data
    .then((response) => {      // <----- then/catch covers both passing/failing situations
        console.log(response)
    })
    .catch((error) => {
        console.error(error)
    }).finally(() => console.log("this looks familiar..."))