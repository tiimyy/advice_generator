'use strict'
const adviceContainer = document.querySelector(".advice-container");
const dice= document.querySelector(".dice");
//renderHTML
const renderAdvice= function(ID,advice){
   const html = `<div class="id">
  ADVICE #${ID}
 </div>
 <div class="advice">
 ${
   advice
 }
 </div>`
 adviceContainer.insertAdjacentHTML('beforeend', html);
}
const generateAdvice= async function (){
   try{
    const advice = await fetch (`https://api.adviceslip.com/advice`)
    const data = await advice.json();
    renderAdvice(data.slip.id,data.slip.advice)
    console.log(data.slip.advice)
   }catch (err){
    console.log(err);
   }
}
dice.addEventListener('click',function(){
   adviceContainer.textContent='';
   generateAdvice()
})
