const botonmenu=document.querySelector(".menu-hamburguesa");

const menu=document.querySelector(".nav ul");


const enlaces=document.querySelectorAll(".menu a");


botonmenu.addEventListener("click",()=>{

menu.classList.toggle("aparecer-menu");



})


/* for(var i=0;i<enlaces.length;i++)
{
  enlaces[i].addEventListener("click",()=>{
   menu.classList.remove("aparecer-menu");

  })

}
 */

enlaces.forEach(function(a){
    a.addEventListener("click",()=>{
        menu.classList.remove("aparecer-menu");

    })
})