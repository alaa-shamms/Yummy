
let links=document.querySelectorAll('.links li')









$(document).ready(()=>{
    getMeals("").then(()=>{
        $('.loading-page').fadeOut(2000)
        $('body').css("overflow","visible")
        $('.inner-loading-page').fadeOut(500)

    })
   
})





$('.side-nav-menu').animate({left: -240},400)


$('.side-nav-menu .nav-show').click(()=>{
    let  widtOfLeft=$('.left-nav').outerWidth()
    if($('.side-nav-menu').css('left')=="0px")
    {
        $('.side-nav-menu').animate({left: -widtOfLeft},400)

        $('.nav-show').addClass('fa-align-justify')
        $('.nav-show').removeClass('fa-x')
        
        $('.links li').animate({top:400},450)
    }
    else
    {
        $('.side-nav-menu').animate({left: 0},400)

        $('.nav-show').removeClass('fa-align-justify')
        $('.nav-show').addClass('fa-x')

        $('.links li').eq(0).animate({top:0},300)
        $('.links li').eq(1).animate({top:0},400)
        $('.links li').eq(2).animate({top:0},500)
        $('.links li').eq(3).animate({top:0},600)
        $('.links li').eq(4).animate({top:0},700)
    }

})


// display of Meals
let mealsList=[]
async function getMeals(type) {

    let mealApi= await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${type}`)
    let mealData=await mealApi.json()
    mealsList=mealData.meals
    // console.log(mealData.meals)
    displayMeal()
}




function displayMeal() {
    let temp=``

    mealsList.forEach(element => {
        temp+=
        `
        <div class="col-md-3 pointer">
            <div class="meal position-relative overflow-hidden text-dark rounded-3" onclick="getDetails(${element.idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="${element.strMealThumb}" class="w-100" alt="">
                <div class="over-lay position-absolute d-flex align-items-center w-100 h-100 ">
                    <h2 class="p-3">${element.strMeal}</h2>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("rowData").innerHTML=temp
}


// display of categories
let categoriesList =[]
document.getElementById('categories').addEventListener('click',async function getCategories() {
    
    document.querySelector('#contact_area').classList.add('d-none')



        document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)

    document.getElementById('serchParent').innerHTML=''
    $('.side-nav-menu').animate({left: -240},400)
    $('.nav-show').removeClass('fa-x')
    $('.nav-show').addClass('fa-align-justify')
    // document.getElementById('contact_part').innerHTML=''




    let cateApi= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let cateData=await cateApi.json()
    categoriesList=cateData.categories
    // console.log(mealData.categories)
    displayCategories()
    $('.inner-loading-page').fadeOut(500)


    
})

function displayCategories() {
    let temp=``

    categoriesList.forEach(element => {
        temp+=
        `
        <div class="col-md-3">
            <div onclick="getSpecialCategory('${element.strCategory}')" class="meal position-relative overflow-hidden text-dark rounded-3 pointer">
                <img src="${element.strCategoryThumb}" class="w-100" alt="">
                <div class="over-lay position-absolute w-100 h-100 text-center">
                    <h2 class="p-3">${element.strCategory}</h2>
                    <p class="px-2">${element.strCategoryDescription.split(" ").slice(0,22).join(" ")}</p>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("rowData").innerHTML=temp
}




// display of Area
let areaList =[]
document.getElementById('area').addEventListener('click',async function getArea() {
    document.querySelector('#contact_area').classList.add('d-none')


        document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)

    document.getElementById('serchParent').innerHTML=''
    $('.side-nav-menu').animate({left: -240},400)
    $('.nav-show').removeClass('fa-x')
    $('.nav-show').addClass('fa-align-justify')
    // document.getElementById('contact_part').innerHTML=''




    let areaApi= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let areaData=await areaApi.json()
    areaList=areaData.meals
    console.log(areaData.meals)
    displayArea()
    $('.inner-loading-page').fadeOut(500)
    $('body').css("overflow","vissible")


    
})

function displayArea() {
    let temp=``

    areaList.forEach(element => {
        temp += 
        `
        <div class="col-md-3">
            <div class="text-center pointer" onclick="getSpecialArea('${element.strArea}')">
                    <i class="fa-solid fa-house-laptop fa-4x"></i>
                    <h2 class="p-1">${element.strArea}</h2>
            </div>
        </div>
        `
    });
    document.getElementById("rowData").innerHTML=temp
}


// display of ingredients
let ingrList =[]

document.getElementById('ingredients').addEventListener('click',async function getIngr() {
    document.querySelector('#contact_area').classList.add('d-none')

    document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)


    document.getElementById('serchParent').innerHTML=''
    $('.side-nav-menu').animate({left: -240},400)
    $('.nav-show').removeClass('fa-x')
    $('.nav-show').addClass('fa-align-justify')
    // document.getElementById('contact_part').innerHTML=''



    let ingrApi= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let ingrData=await ingrApi.json()
    ingrList=ingrData.meals.slice(0,25)
    // console.log(ingrData.meals)
    displayIngr()
    $('.inner-loading-page').fadeOut(500)

    
})

function displayIngr() {
    let temp=``

    ingrList.forEach(element => {
        temp += 
        `
        <div class="col-md-3">
            <div class="text-center pointer" onclick="getSpecialIngredient('${element.strIngredient}')">
                   <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h2 class="p-1 h2_ingr">${element.strIngredient}</h2>
                    <p class="p-1 p2_ingr">${element.strDescription.split(" ").slice(0,22).join(" ")}</p>
            </div>
        </div>
        `

    });
    document.getElementById("rowData").innerHTML=temp
}





// display special meal from  any Category
let spcialcat=[]

async function getSpecialCategory(Category) {
    document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`)
    let apiData=await api.json()
    spcialcat=apiData.meals
console.log(apiData.meals)
displaySpecialMeal()
$('.inner-loading-page').fadeOut(500)


}


function displaySpecialMeal() {
    let temp=``

    spcialcat.forEach(element => {
        temp+=
        `
        <div class="col-md-3 pointer">
            <div class="meal position-relative overflow-hidden text-dark rounded-3" onclick="getDetails(${element.idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="${element.strMealThumb}" class="w-100" alt="">
                <div class="over-lay position-absolute d-flex align-items-center w-100 h-100 ">
                    <h2 class="p-3">${element.strMeal}</h2>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("rowData").innerHTML=temp
}


// display special meal from  any Area
let spcialArea=[]

async function getSpecialArea(Area) {
    document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)
    let apiData=await api.json()
    spcialArea=apiData.meals
console.log(apiData.meals)
displaySpecialArea()
$('.inner-loading-page').fadeOut(500)

}


function displaySpecialArea() {
    let temp=``

    spcialArea.forEach(element => {
        temp+=
        `
        <div class="col-md-3 pointer">
            <div class="meal position-relative overflow-hidden text-dark rounded-3" onclick="getDetails(${element.idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="${element.strMealThumb}" class="w-100" alt="">
                <div class="over-lay position-absolute d-flex align-items-center w-100 h-100 ">
                    <h2 class="p-3">${element.strMeal}</h2>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("rowData").innerHTML=temp
}


// display special meal from  any ingredient
let spcialIngredient=[]
async function getSpecialIngredient(ingredient) {
    document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    let apiData=await api.json()
    spcialIngredient=apiData.meals
console.log(apiData.meals)
displaySpecialIngredient()
$('.inner-loading-page').fadeOut(500)

}


function displaySpecialIngredient() {
    
    let temp=``

    spcialIngredient.forEach(element => {
        temp+=
        `
        <div class="col-md-3 pointer">
            <div class="meal position-relative overflow-hidden text-dark rounded-3" onclick="getDetails(${element.idMeal})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="${element.strMealThumb}" class="w-100" alt="">
                <div class="over-lay position-absolute d-flex align-items-center w-100 h-100 ">
                    <h2 class="p-3">${element.strMeal}</h2>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("rowData").innerHTML=temp
}










// display details of meal 

let mealDetails=[]
async function getDetails(mealId) {


//    document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)

    let api=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    let apiData=await api.json()
    mealDetails=apiData.meals
console.log(apiData.meals)

displayDetails()
$('.inner-loading-page').fadeOut(500)


}


function displayDetails() {

    let ingredients = ``




    let tagsStr = ''



    
    let temp=``

    mealDetails.forEach(element => {
         for (let i = 1; i <= 20; i++) {
        if (element[`strIngredient${i}`]) {

            ingredients += `<p class="bg-recip">${element[`strMeasure${i}`]} ${element[`strIngredient${i}`]}</p>`
        }
    }

        let tags = element.strTags?.split(",")
    if (!tags) tags = []
        for (let i = 0; i < tags.length; i++) {
        tagsStr += `
        <p class="bg-tags">${tags[i]}</p>`
    }
        temp+=
        `
        <div class="col-md-4">
            <img src="${element.strMealThumb}" class="w-100" alt="">
            <h2>${element.strMeal}</h2>
        </div>
        <div class="col-md-8">
            <h3>Instructions</h3>
            <p>${element.strInstructions}</p>
                <p class="fs-3"><span class="fw-bold fs-2">Area : </span>${element.strArea}</p>
                <p class="fs-3"><span class="fw-bold fs-2">Category  : </span>${element.strCategory}</p>
                <p class="fw-bold fs-2">Recipes :</p>
                <div class="recipes d-flex flex-wrap gap-3">
                    ${ingredients}
                </div>
                <p class="fw-bold fs-2">tags :</p>
                <div class="tags d-flex flex-wrap gap-3 mb-2">
                    ${tagsStr}
                </div>

               <a class="btn btn-success me-2" href="${element.strSource}" target="_blank">Source</a>
               <a class="btn btn-danger me-2"href="${element.strYoutube}" target="_blank">Youtube</a>

        </div>
        `
    });

    document.getElementById("modal_data").innerHTML=temp
    console.log(temp)

}










// search 

document.getElementById('search').addEventListener('click', function () {
    
    document.querySelector('#contact_area').classList.add('d-none')


    $('.side-nav-menu').animate({left: -240},400)
    $('.nav-show').removeClass('fa-x')
    $('.nav-show').addClass('fa-align-justify')


    // document.getElementById('contact_part').innerHTML=''


    document.getElementById('serchParent').innerHTML=
    `
    <div class="search-part">
   <div class="row px-2 py-5">

       <div class="col-md-6">
           <input type="text" class="form-control bg-transparent text-warning" placeholder="Search By Name" onkeyup='searchByName(this.value)' >
       </div>
       <div class="col-md-6">
           <input type="text" class="form-control bg-transparent text-danger" id='f_letter_input' placeholder="Search By Fist Letter" onkeyup='searchByfirstLetter(this.value)' maxlength="1">
       </div>
       
   </div>
</div>
    `
    
    document.getElementById('rowData').innerHTML=''
})


// search by name

let searchList=[]
async function searchByName(seachItem) {
    document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)

    let mealApi= await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${seachItem}`)
    let mealData=await mealApi.json()
    searchList=mealData.meals
    console.log(searchList)
    if(searchList!=null)
    {
        displaySearchMeal()
    }
    else
    {
        document.getElementById('rowData').innerHTML=''

    }
    $('.inner-loading-page').fadeOut(500)

}



function displaySearchMeal() {
    let temp=``

    searchList.forEach(element => {
        temp+=
        `
        <div class="col-md-3 pointer">
            <div class="meal position-relative overflow-hidden text-dark rounded-3" onclick="getDetails(${element.idMeal})">
                <img src="${element.strMealThumb}" class="w-100" alt="">
                <div class="over-lay position-absolute d-flex align-items-center w-100 h-100 ">
                    <h2 class="p-3">${element.strMeal}</h2>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("rowData").innerHTML=temp
}








// search by First letter


let searchMealLetter=[]
async function searchByfirstLetter(seachLetter) {

        document.getElementById("rowData").innerHTML=""

    $('.inner-loading-page').fadeIn(500)

    let mealApi= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${seachLetter}`)
    let mealData=await mealApi.json()
    searchMealLetter=mealData.meals
    console.log(searchMealLetter)
    if(searchMealLetter!=null)
    {
        displaySearchMealLetter()
    }
    else
    {
        document.getElementById('rowData').innerHTML=''

    }

    $('.inner-loading-page').fadeOut(500)

}



function displaySearchMealLetter() {
    let temp=``

    searchMealLetter.forEach(element => {
        temp+=
        `
        <div class="col-md-3 pointer">
            <div class="meal position-relative overflow-hidden text-dark rounded-3" onclick="getDetails(${element.idMeal})">
                <img src="${element.strMealThumb}" class="w-100" alt="">
                <div class="over-lay position-absolute d-flex align-items-center w-100 h-100 ">
                    <h2 class="p-3">${element.strMeal}</h2>
                </div>
            </div>
        </div>
        `
    });
    document.getElementById("rowData").innerHTML=temp
}





// contact

document.getElementById('contact').addEventListener('click', function () {
    
    document.getElementById('rowData').innerHTML=''

    $('.side-nav-menu').animate({left: -240},400)
    $('.nav-show').removeClass('fa-x')
    $('.nav-show').addClass('fa-align-justify')

console.log('con')
     document.querySelector('#contact_area').classList.remove('d-none')



    document.getElementById('serchParent').innerHTML=''
    
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










// nav links

var allLinks = document.querySelectorAll(".nav-link");

for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
  });
} 


