var openC = document.querySelector(".openB")
var closeC = document.querySelector(".closeB")
var mainS = document.querySelector(".main")

openC.addEventListener('click', function (event) {
    mainS.style.display = 'initial'
})

closeC.addEventListener('click', function(event){
    mainS.style.display = 'none'
})
