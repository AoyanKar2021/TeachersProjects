window.addEventListener("scroll",function(){
    document.querySelector('nav').classList.toggle("window-scroll",window.scrollY>0)
})

let faq=document.querySelectorAll(".faqs");
faq.forEach(element => {
   element.addEventListener("click", () =>{
    element.classList.toggle("show");
    let icon=element.querySelector(".icon_img i");
    console.log(icon.classList.className);
    if(icon.className==="fa-solid fa-plus")
    {
        icon.className="fa-solid fa-minus"
    }else{
        icon.className="fa-solid fa-plus"
    }
   
    
    
   })
})






// let ico =document.querySelectorAll(".icon");
// for(let i of ico)
// {
//    i.addEventListener("click",function(){
//     i.classList.remove("fa-plus");
//     i.classList.add("fa-minus");
//     var para=document.getElementsByClassName("p");
//     for(let v of para)
//     {
//         v.setAttribute("class","hide")
//     }
// })
// }
// icon.addEventListener("click",function(){
//     icon.classList.remove("fa-plus");
//     icon.classList.add("fa-minus");
// })
// let data=document.getElementsByClassName("icon");
// data.classList; 
// console.log(data);
// for(let a of data)
// {
// console.log(a);
// data.addEventListener("click",function(){
//     data.setAttribute("class","fa-solid fa-minus");
   
// })}

// var doc = document.getElementById("test");
// var notes = null;
// for (var i = 0; i < doc.childNodes.length; i++) {
//     if (doc.childNodes[i].className == "4") {
//       notes = doc.childNodes[i];
//       break;
//     }        
// }