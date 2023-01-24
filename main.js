// console.log(document)
// console.log(typeof document)
// console.dir(document)
// console.dir(document.title)
// console.log(document.body)
// console.log(document.head)
// console.dir(window)
// console.dir(document.all)


let docuname = document.getElementById("formid");
let login = document.getElementById("header")
let email = document.getElementById("emailid")
let forgot = document.getElementById("forgotid")
// login.textContent= "Facebook Signin"
// login.innerHTML="Facebook Signin"
// login.innerText= "Facebook Signin"
// console.dir(login)
// console.dir(login.innerText)
// console.dir(login.textContent)
// console.dir(login.innerHTML)
// console.log(login.innerText)
// console.log(login.textContent)
// console.log(login.innerHTML)

login.style.color ="white"
login.style.fontSize ="30px"
login.style.backgroundColor ="blue"
login.style.borderRadius = "90px"


email.style.color ="red"


forgot.style.color="red"
forgot.style.backgroundColor="#d5c9c9"
forgot.style.fontSize="20px"
forgot.style.padding="15px"
forgot.style.borderRadius="80px"

let form = document.querySelector("#formid")
let h1element = form.querySelector("h1")


let newelement = document.createElement('div')
newelement.className ="new-class";
newelement.setAttribute("id", "iam");
newelement.setAttribute("title","hey-boy")
form.insertBefore(newelement,h1element)
newelement.innerText="Please Signup Now"
console.log(newelement)


newelement.style.background="white"
newelement.style.padding="5px"
newelement.style.borderRadius="60px"
newelement.style.color="blue"
newelement.style.marginBottom="10px"