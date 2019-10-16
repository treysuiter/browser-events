console.log("we good")

let textInput = document.querySelector("#message")

let textOutput1 = document.querySelector("#articles_article1")

let textOutput2 = document.querySelector("#articles_article2")


textInput.addEventListener("keyup", function (event) {
    textOutput1.innerHTML = event.target.value
    textOutput2.innerHTML = event.target.value
})