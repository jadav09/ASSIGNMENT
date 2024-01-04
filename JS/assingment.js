pas_tag = document.getElementById("pas")

function sw()
{
    if(pas_tag.type=="password")
    {
        pas_tag.type="text"
    }

    else
    {
        pas_tag.type="password"
    }
}
// task:2 ************************************************task:2


num1_tag = document.getElementById("num1")
num2_tag = document.getElementById("num2")

sp1_tag = document.getElementById("sp1")

sp1_tag.style.color = "green"
sp1_tag.style.fontSize = "25px"



function add() {
    sp1_tag.innerHTML = Number(num1_tag.value) + Number(num2_tag.value)

}

function mins() {
    sp1_tag.innerHTML = num1_tag.value - num2_tag.value
}

function mul() {
    sp1_tag.innerHTML = num1_tag.value * num2_tag.value

}

function dev() {
    sp1_tag.innerHTML = num1_tag.value / num2_tag.value

}

function mod() {
    sp1_tag.innerHTML = num1_tag.value % num2_tag.value

}

console.log("num1")




// task:3 ************************************************task:3


// get the id

n1_tag = document.getElementById("n1")
n2_tag = document.getElementById("n2")
n3_tag = document.getElementById("n3")
n4_tag = document.getElementById("n4")
n5_tag = document.getElementById("n5")
n6_tag = document.getElementById("n6")
n7_tag = document.getElementById("n7")

ttl_tag = document.getElementById("ttl")
per_tag = document.getElementById("per")

input_tag = document.getElementsByTagName("inp")



// function call for total 

function cal() {

    ttl_tag.innerHTML = Number(n1_tag.value) + Number(n2_tag.value) + Number(n3_tag.value) + Number(n4_tag.value) + Number(n5_tag.value) + Number(n6_tag.value) + Number(n7_tag.value)

    ttl_tag.style.color = "green"
    per.style.color = "green"

    ttl_tag.style.fontSize = "18px"
    per_tag.style.fontSize = "18px"



    per_tag.innerHTML = ttl_tag.innerHTML * 100 / 350

}


function jdv(k)
{
    if(k.value>50)
    {
        alert("enter the number between 0-50")
        k.value=""
    }

    else if(k.value<0)
    {
        alert("not accept nagative noumber")
        k.value=""

    }
}
console.log(ttl_tag)




// task4********slider***********



const swiper = new Swiper(".swiper", {
    slidesPerView: 5,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
        nextEl: ".next",
        prevEl: ".prev"
    },
    pagination: {
        el: ".pagination",
        clickable: true   // dots clickable hai.
    },
    autoplay: {
        enabled: true,
        delay: 2000    //autopaly 2sec hai.
    },
    

    // Media

    breakpoints: {
      // when window width is >= 100px
      100:{
        slidesPerView:2,
        spaceBetween:20
      },

      // when window width is >= 600px

      600:{
        slidesPerView:3,
        spaceBetween:20
      },

    //   // when window width is >= 1000px

      1000: {
        slidesPerView: 5,
        spaceBetween: 30
      }

    }
});