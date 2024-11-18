let plus=document.querySelector(".plus");
let cart=document.querySelector(".cart");


plus.addEventListener('click',function(){
   
    plus.classList.toggle("plus1");
    cart.classList.toggle("cart1");
})


//now i am going to write the programme of item add
let add=document.querySelectorAll(".add");


add.forEach(function(i){
    i.addEventListener('click',function(){
        console.log(i.parentElement.childNodes[1].childNodes[1].src);
        let img=i.parentElement.childNodes[1].childNodes[1].src;
        let content1=i.parentElement.childNodes[3].innerText;
        let content2=i.parentElement.childNodes[7].innerText;

        let cartdata = JSON.parse(localStorage.getItem("productdata")) ?? [];

        cartdata.push({
            cart_img:img,
            cart_content1:content1,
            cart_content2:content2,
        })

        localStorage.setItem("productdata", JSON.stringify(cartdata));
        displaydata();
        addcart();
        
        console.log(cartdata);
    })
    
})

function displaydata(){
    let cartdata=JSON.parse(localStorage.getItem("productdata"));
    showdata=``

    cartdata.forEach(function(e,i){
        showdata +=`
        <div class="cart_box">
            <div class="cart_img">
                <img src="${e.cart_img}" alt="">
            </div>
            <div class="cart_content">
            <p class="cross" onclick="removedata(${i})">&times;</p>
            

                <p>${e.cart_content1}</p>
                <p>${e.cart_content2}</p>
            </div>
        </div>

        `
    })
    cart.innerHTML=showdata;
}

function removedata(index){
    let cartdata=JSON.parse(localStorage.getItem("productdata")) ?? [];
    cartdata.splice(index,1);
    localStorage.setItem("productdata",JSON.stringify(cartdata));
    
    displaydata();
    addcart();

}

let cart_icon=document.querySelector(".number");

function addcart(){
    let cartdata=JSON.parse(localStorage.getItem("productdata")) ?? [];
    cart_icon.innerHTML=cartdata.length;
    
    
   
}



displaydata();
addcart();




/////here i am starting the working of heart like
let heart=document.querySelectorAll(".heart");
heart.forEach(function(i){
    i.addEventListener('click',function(){
        i.classList.toggle("heart1");

    })
})


//now i am writing the code for contact form
let cform=document.querySelector(".cform");
let contact_form=document.querySelector(".contact_form");
let rem=document.querySelector(".remove");
cform.addEventListener('click',function(){
    contact_form.classList.add("contact_form1");
})

rem.addEventListener('click',function(){
    contact_form.classList.remove("contact_form1");
})

