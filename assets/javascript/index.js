import { posts } from "./posts.js"

let main = document.getElementsByTagName("main")[0]
const postLayout = document.getElementById("post-layout")
const postEl = document.getElementsByClassName("post")[0]

console.log(postEl)

const posterInfo = document.getElementsByClassName("poster-info")[0]

for (const obj of posts) {

    const { name, username, location, avatar, post, comment, likes } = obj

    getPosterInfo(name, avatar, location)
    getPost(post, name)

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