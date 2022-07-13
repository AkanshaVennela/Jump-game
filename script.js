const boy = document.querySelector(".boy");
var dog = document.getElementById("dog");
let boyTop=parseInt(window.getComputedStyle(boy).getPropertyValue("top"));
var b=false;//to check whether a user has clicked button already 
function check()
{
    if(boyTop<100 && boyTop>82 && b!=true)
    {
        console.log(boyTop);
        var r=confirm("Game Over");
        if(r==true){
            setTimeout("location.reload(true);", 0);
        }
        else{
              ele=document.querySelector("#unseen");
              ele.style.visibility="visible";
        }
    }
}
setTimeout(check,800);


function jump() {
    b=true;
    let boyTop=parseInt(window.getComputedStyle(boy).getPropertyValue("top"));
    console.log(boyTop);

  if (boy.classList != "animating") {
    boy.classList.add("animating");
    dog.style.animation="move 1s infinite linear";
  }
  setTimeout(function () {
    boy.classList.remove("animating");
  }, 500);

  let isAlive = setInterval(function(){
      
    let boyTop=parseInt(window.getComputedStyle(boy).getPropertyValue("top"));

    let dogLeft= parseInt(window.getComputedStyle(dog).getPropertyValue("left"));
 
    
    if(dogLeft<=118 && dogLeft>=0 && boyTop>=0){
        dog.style.animation="none";
        var r=confirm("Game Over");
        if(r==true){
            setTimeout("location.reload(true);",0);
        }
        else{
              ele=document.getElementById("unseen");
              ele.style.visibility="visible";
        }
    }    
  },10) 
}

