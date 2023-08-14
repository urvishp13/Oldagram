import { posts } from "./posts.js"

let main = document.getElementsByTagName("main")[0]
const postLayout = document.getElementsByClassName("post-layout")[0]

// grab the sections from the DOM
const posterInfo = postLayout.getElementsByClassName("poster-info")[0]
const postEl = postLayout.getElementsByClassName("post")[0]
const postDetails = postLayout.getElementsByClassName("post-details")[0]

let html = ""
// write the posts to the DOM
for (const obj of posts) {

    const { name, username, location, avatar, post, comment, likes } = obj

    getPosterInfo(name, avatar, location)
    getPost(post, name)
    getPostDetails(likes, username, comment)

    html += postLayout.outerHTML
}

main.innerHTML = html

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
                         class="post"
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