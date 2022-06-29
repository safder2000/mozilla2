const email =document.getElementById("emailAddress")
const country =document.getElementById("Country")
const language =document.getElementById("Language")
const errorElement = document.getElementById("Error")

FormData.addEventListener('submit',(e)=>{
    let messeges =[]
    if(email.value == '' || email.value == null){
        messeges.push('Email address requied')
    }
    if(messeges.length > 0){

        e.preventDefault();
        errorElement.innerText = messeges.join(', ')
    }
    if(email.value === 'Country'){
        messeges.push('password cannot be blank')
    }
})