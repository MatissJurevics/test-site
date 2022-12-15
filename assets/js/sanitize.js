let message = document.querySelector("#message")
let form = document.querySelector("#form")

const sanitize = str => {
    str = str.replace("<", "&lt;")
    str = str.replace(">", "&gt;")
}
const checkConsent = val => {
    if (val.value != "on") {
        alert("please tick the box before submitting")
    }
}
const checkSubjects = vals => {
    // Will only run if something goes very wrong 
    if (!vals.value) {
        alert("please select a subject")
    }
}

form.addEventListener("submit", e => {
    e.preventDefault()
    e.stopPropagation()
    checkSubjects(e.target[4])
    checkConsent(e.target[7])
    value = sanitize(e.target[6].value)
    location.replace("/src")
    
})

