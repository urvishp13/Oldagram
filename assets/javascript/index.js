import { posts } from "./posts.js"

let main = document.getElementsByTagName("main")[0]
const postLayout = document.getElementsByClassName("post-layout")[0]

// grab the sections from the DOM
const posterInfo = postLayout.getElementsByClassName("poster-info")[0]
const postEl = postLayout.getElementsByClassName("post")[0]
const postDetails = postLayout.getElementsByClassName("post-details")[0]

let html = ""
// gather HTML to write the posts to the DOM
for (const obj of posts) {

    const { name, username, location, avatar, post, comment, likes } = obj

    getPosterInfo(name, avatar, location)
    getPost(post, name)
    getPostDetails(likes, username, comment)

    html += postLayout.outerHTML
}

// write the posts' HTML to the DOM
main.innerHTML = html

// grab all the post layouts after they've been added to the DOM, and...
const postLayouts = document.querySelectorAll(".post-layout")

// for each post layout
postLayouts.forEach(layout => {
    // add an event listener to the post that increases the number of
    // likes by 1 when it is double clicked
    layout.querySelector(".post-img").addEventListener("dblclick", function() {
        // grab the likes element
        const likes = layout.querySelector(".likes")
        // get the current number of likes for the post
        const numOfLikes = Number(likes.textContent.split(" ")[0])
        // add 1 to the number of likes to account for the double-click
        likes.textContent = `${numOfLikes + 1} likes`
    })
})

function getPosterInfo(name, avatar, location) {
    const avatarEl = posterInfo.getElementsByClassName("avatar")[0]
    const nameEl = posterInfo.getElementsByClassName("poster-name")[0]
    const locationEl = posterInfo.getElementsByClassName("poster-location")[0]

    const html = `
                <img 
                    src="assets/${avatar}" 
                    alt="picture of ${name}"
                    class="avatar">
                `

    avatarEl.innerHTML = html
    nameEl.textContent = name
    locationEl.textContent = location
}

function getPost(post, name) {
    postEl.innerHTML = `
                    <img 
                         src="assets/${post}" 
                         alt="self-portrait of ${name}" 
                         class="post-img"
                         >
                    `
}

function getPostDetails(likes, username, comment) {
    const likesEl = postDetails.querySelector(".likes")
    const usernameEl = postDetails.querySelector(".username")
    const commentEL = postDetails.querySelector(".comment .text")

    likesEl.textContent = `${likes} likes`
    usernameEl.textContent = username
    commentEL.textContent = comment
}