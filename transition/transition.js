var h1 = document.querySelector("h1")
var letters = h1.innerText.split("")
let html = ""

letters.forEach(letter => {
    let classes = ''
    if (letter !== ' '){
        classes = 'letters js-letter'
    }
    html = html + `<span class = '${classes}'>${letter}</span>`
});

h1.innerHTML = html

const jsLetters = document.querySelectorAll(".js-letter")
jsLetters.forEach(node => {
    node.addEventListener("mouseover", function (event) {
        this.classList.add("active")
    })
    node.addEventListener("mouseout", function (event) {
        this.classList.remove("active")
    })
})
