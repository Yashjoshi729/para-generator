
// const getdata=()=>{

//     let input=document.getElementById("noofwords").value
//     document.getElementById("mypara").innerHTML=input
// }
let input = document.getElementById("noofwords")
let conatiner = document.querySelector(".container")

const genwords = (n) => {
    let text = ""
    const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 0; i < n; i++) {

        const random = (Math.random() * 25).toFixed(0)
        text += letter[random]

    }
    return text
}


let numofwords;
const getdata = () => {
    numofwords = Number(input.value)

    let data = ""
console.log(numofwords)
    for (i = 0; i < numofwords; i++) {
        const rand = genwords((Math.random() * 15).toFixed(0))

        // console.log(rand)
        data =data + rand
        data+=" "
        
    }
    

    const para = document.createElement("p")
    para.innerText = data
    para.setAttribute("class", "para")
    conatiner.append(para)

    // const para = document.createElement("p")
    // para.innerHTML = `<p>${data}</p>`
    // para.setAttribute("class", "para")
    // conatiner.append(para)
}

