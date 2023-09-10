 var randomnumber1=Math.floor(Math.random()*7)
 var randomdiceimg="dice"+randomnumber1+".png"
 var randomimgsource ="images/"+randomdiceimg
var img = document.querySelectorAll("img")[0]
img.setAttribute("src",randomimgsource)
var randomnumber2 = Math.floor(Math.random()*7)
var randomdiceimg2 ="dice"+randomnumber2+".png"
var randomimgsource ="images/"+randomdiceimg2
 document.querySelectorAll("img")[1].setAttribute("src",randomimgsource)
if(randomnumber1>randomnumber2)
{
    document.querySelector("h2").innerHTML ="player 1 wins 🚩"
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h2").innerHTML="player 2 wins🚩"
}
else
{
    document.querySelector("h2").innerHTML="It's a draw🚩"
}
