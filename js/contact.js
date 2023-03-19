// contact

document.getElementById('contact').addEventListener('click', function () {
    
    // document.getElementById('rowData').innerHTML=''

    // $('.side-nav-menu').animate({left: -240},400)
    // $('.nav-show').removeClass('fa-x')
    // $('.nav-show').addClass('fa-align-justify')


    //  document.querySelector('#search_area').classList.remove('d-none')


    // document.getElementById('serchParent').innerHTML=''
    location.href='contact.html'
    
})






// validation of contact inputs
let name_input=document.getElementById('name_input')
let NameAlert=document.getElementById('NameAlert')




function validatename()
{
  var regex=/^[a-zA-Z ]+$/
  if(regex.test(name_input.value))
  {
    NameAlert.classList.add('d-none')
    name_input.classList.remove('is-invalid')
    name_input.classList.add('is-valid')
    return true


  }
  else
  {
    NameAlert.classList.remove('d-none')
    name_input.classList.remove('is-valid')
    name_input.classList.add('is-invalid')
    return false
    
  }

}

let email_input=document.getElementById('email_input')
let emailAlert=document.getElementById('emailAlert')

function validateEmail()
{
  var regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/
  if(regex.test(email_input.value))
  {
    emailAlert.classList.add('d-none')
    email_input.classList.remove('is-invalid')
    email_input.classList.add('is-valid')
    return true


  }
  else
  {
    emailAlert.classList.remove('d-none')
    email_input.classList.remove('is-valid')
    email_input.classList.add('is-invalid')
    return false
    
  }

}

// phone
let phone_input=document.getElementById('phone_input')
let phoneAlert=document.getElementById('phoneAlert')

function validatePhone()
{
  var regex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{5,6}$/
  if(regex.test(phone_input.value))
  {
    phoneAlert.classList.add('d-none')
    phone_input.classList.remove('is-invalid')
    phone_input.classList.add('is-valid')
    return true


  }
  else
  {
    phoneAlert.classList.remove('d-none')
    phone_input.classList.remove('is-valid')
    phone_input.classList.add('is-invalid')
    return false
    
  }

}

// age
let age_input=document.getElementById('age_input')
let ageAlert=document.getElementById('ageAlert')

function validateAge()
{
  var regex=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
  if(regex.test(age_input.value))
  {
    ageAlert.classList.add('d-none')
    age_input.classList.remove('is-invalid')
    age_input.classList.add('is-valid')
    return true


  }
  else
  {
    ageAlert.classList.remove('d-none')
    age_input.classList.remove('is-valid')
    age_input.classList.add('is-invalid')
    return false
    
  }

}


// pass
let password_input=document.getElementById('password_input')
let passwordAlert=document.getElementById('passwordAlert')

function validatePass()
{
  var regex=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
  if(regex.test(password_input.value))
  {
    passwordAlert.classList.add('d-none')
    password_input.classList.remove('is-invalid')
    password_input.classList.add('is-valid')
    return true


  }
  else
  {
    passwordAlert.classList.remove('d-none')
    password_input.classList.remove('is-valid')
    password_input.classList.add('is-invalid')
    return false
    
  }

}

// repass
let repassword_input=document.getElementById('repassword_input')
let repasswordAlert=document.getElementById('repasswordAlert')

function validateRePass()
{
  if(password_input.value==repassword_input.value&&password_input.value!="")
  {
    repasswordAlert.classList.add('d-none')
    repassword_input.classList.remove('is-invalid')
    repassword_input.classList.add('is-valid')
    return true


  }
  else
  {
    repasswordAlert.classList.remove('d-none')
    repassword_input.classList.remove('is-valid')
    repassword_input.classList.add('is-invalid')
    return false
    
  }

}




function enterData()
{
    userInputsValidation()
    if(userInputsValidation()==true)
    {
        document.querySelector('.submit').removeAttribute("disabled")
        // window.alert('yes')
    }
    else
    {
        document.querySelector('.submit').setAttribute("disabled", true)
        // window.alert('no')

    }
}

document.querySelector('.submit').addEventListener('click',()=>{

    window.alert('You Enter valid data')
    name_input.value=''
    name_input.classList.remove('is-valid')
    age_input.value=''
    age_input.classList.remove('is-valid')
    phone_input.value=''
    phone_input.classList.remove('is-valid')
    password_input.value=''
    password_input.classList.remove('is-valid')
    repassword_input.value=''
    repassword_input.classList.remove('is-valid')
    email_input.value=''
    email_input.classList.remove('is-valid')
    document.querySelector('.submit').setAttribute("disabled", true)

})

function userInputsValidation()
{
  validatename()
  validatename()
  validateEmail()
  validatePhone()
  validateAge()
  validatePass()
  validateRePass()

  if(validatename()==true&&validateEmail()==true&&validatePhone()==true
  &&validateAge()==true&&validatePass()==true&&validateRePass()==true)
  {
    return true
  }
  else
  {
    return false
  }
}