// function createAlert(message){
//     const main = document.getElementById("main")
// const div = document.createElement("div")
// const textNode = document.createTextNode(message)

// div.className = "alert"
// div.append(textNode)

// main.prepend(div)
// }

//  createAlert("Food is updated !")



//  const foodContainerEl= document.getElementById("food-container")
// const foodItems=[
//     "veg Biriyani", "Mutton  Biriyani","Chicken Biriyani","mandhi Biriyani","Beef Biriyani"
// ]
// const fragment= document.createDocumentFragment()
// foodItems.forEach((foods)=>{
//  const list = document.createElement("li")
//  list.textContent= foods
//  list.className= "food-item"
//  fragment.append(list)
// })

// foodContainerEl.append(fragment)


// const foodContainerEl= document.getElementById("food-container")

// const li = document.createElement("id")
// li.textContent="VegBiriyani"
// li.className = ('food-item')

// foodContainerEl.insertAdjacentHTML("afterbegin","<strong>Hello</strong>")
// const foodContainerEl= document.getElementById("food-container")
// const duplicateEl = document.getElementById('duplicate')
// const resync = document.getElementById('resyncBtn')

// resync.addEventListener('click',()=>{
//     duplicateEl.innerHTML=""
//  const newClone =foodContainerEl.cloneNode(true)
//  duplicateEl.append(newClone)
// })


// const Biriyani = [
//     "veg Biriyani",
//     "prwan Biriyani",
//     "Egg Biriyani",
//     "Chicken biriyani"
// ]

// for(let i=0; i<Biriyani.length;i++){
//     console.log(Biriyani[i]);
    
// }

// for(const items of Biriyani){
//     console.log(items);
    
// }

// const List =document.querySelectorAll("li")
// console.log(List);

// const foodContainerEl = document.querySelector("#food-container")
// console.log(foodContainerEl.firstElementChild.innerText);

// const inputName = document.querySelector(".divStyle input")

// const clickBtn= document.querySelector("header span")

// const handleClick = function(){
 
// //    alert('Im Fine How is this  ')
// console.log("clicked");

// }

// clickBtn.addEventListener('click',handleClick)

// setTimeout(
//     ()=>{
// clickBtn.removeEventListener('click',handleClick)
//     },5000
// )



// const divContent = document.querySelector(".divStyle")
// const DisBtn = document.querySelector(".disBtn")

// DisBtn.addEventListener('click',()=>{
//    if(divContent.style.display === "none"){
//       DisBtn.innerText = "Hide Div"
//       DisBtn.style.backgroundColor= "rgb(5, 5, 13)"
//       divContent.style.display = "flex"
//    }
//    else{
//       divContent.style.display="none"
//       DisBtn.style.backgroundColor="royalBlue"
//        DisBtn.innerText="Show Div"
//    }
// })

//  const formEl = document.querySelector("form")
//  const divEl = document.querySelector("form div")
//  const pEl = document.querySelector("form p")


//  formEl.addEventListener('click',()=>{
//     alert("hello im Form")
    
//   ;
    
//  })

//   divEl.addEventListener('click',(event)=>{
//     alert("hello im div")
//        event.stopPropagation()
//  })

//   pEl.addEventListener('click',(event)=>{
//     alert("hello im p ")
//     event.stopPropagation()
 
//  })

// const tabEl = document.querySelector("table")
// let selectedId;


// tabEl.addEventListener("click",(event)=>{
     

 
// const target = event.target
// const closeTr =  target.closest("tr")
 
   
   

//    if(target.nodeName=='TH'){
//     return;
//    }
 
//    if(selectedId != undefined){
//     selectedId.classList.remove("active");
    
   
//  }
//  selectedId=closeTr;
//  closeTr.classList.add("active")
  
 
 


  
    
//  alert(` Hello ${closeTr.children[0].textContent}`)
// })


// document.addEventListener('click',(event)=>{
//     const id = event.target.dataset.toggleId

//     if(!id){
//         return ;
//     }

// const el =document.getElementById(id)

// el.hidden = !el.hidden 

// })

// const formel = document.querySelector('#donate-form')

// formel.addEventListener("submit",(event)=>{
//     const inVal =  event.target.querySelector("input")
//     event.preventDefault()
    

//     alert(`Thank You For Donating ₹ ${inVal.value}`)
    
   
// })

//   const nameEl = formEl.elements.fullName //name
// const radioEl = formEl.elements.radio //radio
// const emailEl = formEl.elements.email //email
// const feedbackEl = formEl.elements.feedback // feedback
// const checkBoxEl = formEl.elements.checkbox // checkbox
// const subEl = formEl.elements.submit
 
// const btnEl = document.querySelector("form button");





//  const {fullName,radio,email,feedback,checkbox,submit}= formEl.elements
// console.log(fullName,radio,email,feedback,checkbox);
// console.log(fullName,radio,email,feedback,checkbox,submit);



// encodeURIComponent
// const dataString =  data.map(([key,value])=>`${encodeURIComponent(key)} =${encodeURIComponent(value)} `).join("&")
 

// console.log(dataString);

// UrlSearchParams
// const dataString2 = new URLSearchParams(formdata).toString();
// console.log(dataString2);



// <li class="food-item">
//           <div>item 1</div>
//           <div onclick="removeItem(event)">
//             <button>x</button>
//           </div>
//         </li>

//         <li class="food-item">
//           <div>item 2</div>
//           <div onclick="removeItem(event)">
//             <button>x</button>
//           </div>
//         </li>

//         <li class="food-item">
//           <div>item 3</div>
//           <div onclick="removeItem(event)">
//             <button>x</button>
//           </div>
//         </li>



const formEl = document.forms.feedback
 

const handleForm = (event)=>{
     event.preventDefault();
const formdata = new FormData(formEl);
alert("Thank You For Your FeedBack !!")




}
  formEl.addEventListener("submit",handleForm )



  


 





 

 














  


    


    
     