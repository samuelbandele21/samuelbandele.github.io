var keys = document.querySelectorAll("ul li")

keys.forEach(node =>{
    node.addEventListener('mousedown', function (event) {
        let value = node.innerText.trim()
        let result = document.querySelector('.screen')
        let resultT = result.innerText.trim() 
        
        if (resultT == '0' || resultT == 'undefined' || resultT == 'infinity' ) {
            result.innerText = ""
        }

        if (value.toLowerCase() == 'c') {
            result.innerText = "0"
            return true
        }
        if (value == '=') {
            let solution = eval(resultT)
            result.innerText = solution
            return true
        }

        result.append(value)
    })


})