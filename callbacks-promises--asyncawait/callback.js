let btn = document.querySelector("#btn1");

btn.addEventListener("click", function(e) { alert('button was clicked') } )



const posts = [
    { title: 't1', body: 'b1'},
    { title: 't2', body: 'b2'},
    { title: 't3', body: 'b3'}
]

/*
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post) {
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}
getPosts(); <-- runs before new post is created

createPost( { title: 't4', body: 'b4'})
*/

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback(); // <--- waits until createPost is completed
    }, 2000);
}

createPost( { title: 't4', body: 'b4'}, getPosts)
