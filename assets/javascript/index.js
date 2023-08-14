import { posts } from "./posts.js"

let main = document.getElementsByTagName("main")[0]
const postLayout = document.getElementById("post-layout")

// grab the sections from the DOM
const postEl = document.getElementsByClassName("post")[0]
const postDetails = document.getElementsByClassName("post-details")[0]

const posterInfo = document.getElementsByClassName("poster-info")[0]

// write the posts to the DOM
for (const obj of posts) {

    const { name, username, location, avatar, post, comment, likes } = obj

    getPosterInfo(name, avatar, location)
    getPost(post, name)
    getPostDetails(likes, username, comment)

    main.innerHTML += postLayout.outerHTML
}

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
    nameEl.textContent = `${name}`
    locationEl.textContent = `${location}`
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