let closeBtn = document.querySelectorAll(".close");
let blockChilds = "";
closeBtn.forEach((current)=>{
    current.onclick = ()=>{
        blockChilds = current.parentElement.parentElement.children;
        // console.log(blockChilds);
        Array.from(blockChilds).forEach((current)=>{
            current.style.cssText = "display:none";
        })
        blockChilds[0].style.cssText = "display:flex";
    }
})


let show = document.querySelectorAll(".show a");
show.forEach((current)=>{
    current.onclick = (e)=>{
        e.preventDefault();
        // Array.from(blockChilds).forEach((current, index)=>{
            // if(index > 0){
            //     console.log(index);
            //     current.style.cssText = "display:flex";  
            // }
            // else    current.style.cssText = "display:none";
            Array.from(blockChilds).forEach((current)=>{
            current.style.cssText = "display:flex";
        })
        blockChilds[0].style.cssText = "display:none";
        // })
    }
})


// how to add class in an element in html using js
function myfunction(){
    let element= document.querySelector(#div1);
    element.classList.add("top");

    // 2nd 2way//
    element.setAttribute("class", "top");
}




// how to add css using javascript//
document.getElementById("lefteye").style.backgroundColor = "purple";
current.style.cssText = "display:flex";


function myfunction(){
    var element=document.querySelector(#div1);
    element.classList.add("top");
    element.setAttribute('class',"top");
    element.style.fontFamily="roboto";
    element.cssText="backgroundColor:black";
}

const lecture =1;
const name ='sanjay';
const course={
    lecture:1,
    name:'sanjay'
    notes: 23

}