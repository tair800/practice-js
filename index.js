// let dropArea=document.getElementById("div1");
// let dropArea2=document.getElementById("div2");
// let dragElement=document.getElementById("drag1");

// dragElement.ondragstart=function(ev){
//     ev.dataTransfer.setData("id",this.id)
// };

// dropArea.ondragover=(ev)=>{
//     ev.preventDefault();
// }

// dropArea.ondrop=function(ev){
//     let id=ev.dataTransfer.getData("id");
//     let dragElement=document.getElementById(id);
//     this.append(dragElement);
// };

// dropArea2.ondragover=(ev)=>{
//     ev.preventDefault();
// }
// dropArea2.ondrop=function(ev){
//     let id=ev.dataTransfer.getData("id");
//     let dragElement=document.getElementById(id);
//     this.append(dragElement);
// };





const products=[]

const img = document.querySelector(".img")
const name = document.querySelector(".name");
const price = document.querySelector(".price");
const description = document.querySelector(".description");

const imgPic = document.querySelector(".img-pic")
const imgname = document.querySelector(".img-name");
const imgprice = document.querySelector(".img-price");
const imgdes = document.querySelector(".img-description");





img.addEventListener("change", (e) => {
    for (const file of e.target.files) {
        const fileReader = new FileReader()

        fileReader.onload = (e) => {
            imgPic.src = e.target.result
        }
        fileReader.readAsDataURL(file)
    }
})

name.addEventListener("keyup", function () {
    if (this.value==="") {
        imgname.textContent="Name"
    }else{
        imgname.innerHTML=this.value
    }
})

price.addEventListener("keyup",function(){
    if(this.value===""){
        imgprice.innerHTML="$"
    }else{
        imgprice.innerHTML="$"+ this.value
    }
})

description.addEventListener("keyup",function(){
    if(this.value===""){
        imgdes.innerHTML="Name";
    }else{
        imgdes.innerHTML=this.value
    }
})

const create=document.querySelector(".create");

create.addEventListener("click",()=>{
    products.push({imgPic:imgPic.src,imgname:imgname.innerText,imgprice:imgprice.innerText,imgdes:imgdes.innerText})
    const lastProduct=products[products.length-1];
    const row=document.querySelector(".row")

    row.innerHTML+=` <div class="card" style="width: 18rem;">
    <img src="${lastProduct.imgPic}" class="card-img-top img-pic"
        alt="...">
    <div class="card-body">
        <h5 class="card-title img-name">${lastProduct.imgname}</h5>
        <p class="card-text img-price">$${lastProduct.imgprice}</p>
        <p class="img-description">${lastProduct.imgdes}</p>
    </div>
</div>`
})