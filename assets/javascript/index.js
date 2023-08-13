import { posts } from "./posts.js"

// get original post layout element
// make a copy of the original post layout
    // make changes here
// add the copy to the DOM

let main = document.getElementsByTagName("main")[0]
const postLayout = document.getElementById("post-layout")

const posterInfo = document.getElementsByClassName("poster-info")[0]

for (const obj of posts) {

    const { name, username, location, avatar, post, comment, likes } = obj

    getPosterInfo(name, avatar, location)
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

    main.innerHTML += postLayout.outerHTML
}