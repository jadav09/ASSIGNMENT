pas_tag= document.getElementById("pas")


function show()
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

// *************2

sp_tag = document.getElementById("sp")

function add(a,b)
{
     sp_tag.innerHTML =Number.parseInt(a.value) + Number.parseInt(b.value)
     sp_tag.style.color="green"
     
}

function min(a,b)
{
    sp_tag.innerHTML =a.value - b.value
    sp_tag.style.color="green"

}

function mul(a,b)
{
    sp_tag.innerHTML =a.value * b.value
    sp_tag.style.color="green"

}

function div(a,b)
{
    sp_tag.innerHTML =a.value / b.value
    sp_tag.style.color="green"

}

// *********marks

sp1_tag = document.getElementById("sp1")
sp2_tag = document.getElementById("sp2")

function xyz(a,b,c,d,e,f,g)
{
    let stor1= Number.parseInt(a.value)+Number.parseInt(b.value)+Number.parseInt(c.value)
    +Number.parseInt(d.value)+Number.parseInt(e.value)+Number.parseInt(f.value)+Number.parseInt(g.value)

    sp1_tag.innerHTML= stor1

    sp2_tag.innerHTML = stor1*100/350

    console.log(sp2_tag)
    sp1_tag.style.color="green"
    sp2_tag.style.color="green"


}

function alt1(blr)
{
if(blr.value > 50 || blr.value<0 || blr.value=="")
{
    alert("allowed 0-50 number only & required!!!")
    blr.value=""
}

}

