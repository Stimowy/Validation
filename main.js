const anyWord = /\w{1,}/;

const company = document.querySelector('#Company')
const fName = document.querySelector('#fName')
const sName = document.querySelector('#sName')
const eMail = document.querySelector('#eMail')
const eMailError = document.querySelector('#eMailError')

const items = document.querySelectorAll('.item')

company.addEventListener('change', () => {
    if(company.value.match(anyWord)){
        company.classList.add('correct')
        company.classList.remove('incorrect')
    } else {
        company.classList.add('incorrect')
        company.classList.remove('correct')
    }
})

fName.addEventListener('change', () => {
    if(fName.value.match(anyWord)){
        fName.classList.add('correct')
        fName.classList.remove('incorrect')
    } else {
        fName.classList.add('incorrect')
        fName.classList.remove('correct')
    }
})

sName.addEventListener('change', () => {
    if(sName.value.match(anyWord)){
        sName.classList.add('correct')
        sName.classList.remove('incorrect')
    } else {
        sName.classList.add('incorrect')
        sName.classList.remove('correct')
    }
})

eMail.addEventListener('change', () => {
    if(eMail.value.match(anyWord)){
        eMail.classList.add('correct')
        eMail.classList.remove('incorrect')
    } else {
        eMail.classList.add('incorrect')
        eMail.classList.remove('correct')
    }
    if(eMail.classList.contains('incorrect')){
        eMailError.innerHTML = "To pole musi zostać wypełnione";
    } else if(eMail.value.split('@').length != 2){
        eMailError.innerHTML = "W polu brakuje znaku '@'";
        eMail.classList.add('incorrect')
        eMail.classList.remove('correct')
    } else if(!eMail.value.split('@')[1].match(anyWord)){
        eMailError.innerHTML = "Brakuje drugiej części maila";
        eMail.classList.add('incorrect')
        eMail.classList.remove('correct')
    } else if(eMail.value.split('.').length != 2 || !eMail.value.split('.')[1].match(anyWord)){
        eMailError.innerHTML = "w eMailu brakuje odpowiedniej końcówki np; '.com'";
        eMail.classList.add('incorrect')
        eMail.classList.remove('correct')
    }
})
let isGood = false;
function good(){
    
    items.forEach((el) => {
        el.classList.contains('correct') ? isGood += 1 : isGood = 0;
    })
    isGood == 4 ? isGood = true : isGood = false;
        return isGood;
}



