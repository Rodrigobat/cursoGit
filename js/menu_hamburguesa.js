/*const btn=document.querySelector(".nav-btn");
const aside=document.querySelector(".aside")

btn.addEventListener("click", ()=>{
    aside.classList.toggle("moverAside");
})  */

export default function hamburguerMenu(btn,menu,mLink) {
    document.addEventListener("click",e=>{
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            document.querySelector(menu).classList.toggle("moverAside");
            document.querySelector(btn).classList.toggle("is-active");
        }
        if(e.target.matches(mLink)){
            document.querySelector(menu).classList.remove("moverAside");
            document.querySelector(btn).classList.remove("is-active");
        }
    })
}