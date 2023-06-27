/* ---------------------- array --------------------------- */
let passwordArray =[
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    '1','2','3','4','5','6','7','8','9','0',
    '+','-','*','/','!','@','#','$','%','^','&','(',')','<','>','?'
]

/* ---------------------- declaration --------------------------- */
let passwordGenerator = document.querySelector(".password-generate-btn")
let firstPassword = document.getElementById("pswd-1")
let secondPassword = document.getElementById("pswd-2")
let thirdPassword = document.getElementById("pswd-3")
let fourthPassword = document.getElementById("pswd-4")
let inputLength = document.querySelector(".input-data")

/* ---------------------- event listener --------------------------- */
passwordGenerator.addEventListener('click',generatePassword)

/* ---------------------- get random Number --------------------------- */
function randomNumber()
{
    return Math.floor(Math.random() * passwordArray.length)
}

/* ---------------------- generate new password --------------------------- */
function generatePassword()
{
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    thirdPassword.textContent = ""
    fourthPassword.textContent = ""

   for(let i = 0; i < inputLength.value ; i++)
   {       
        firstPassword.textContent += passwordArray[randomNumber()]
        secondPassword.textContent +=passwordArray[randomNumber()]
        thirdPassword.textContent +=passwordArray[randomNumber()]
        fourthPassword.textContent +=passwordArray[randomNumber()]  
   }
}

