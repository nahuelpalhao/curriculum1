/* se puede hacer asi o como estaabajo

document .getElementById ("boton") . onclick = function () {
    console.log("capturamos el click");
    document.getElementById("demo").innerHTML = "estamos provando nuestro primer evento en js"
    
}
*/


/***  a todo el documento cuando hago click pasa algo */
document. addEventListener ("click" , function()  {
    console.log("hola mundo desde event listener");
    document.getElementById("demo").innerHTML = "estamos provando nuestro primer evento en js"
}  ) ;


/**  en el documento busca aquel elemento cuyo id es boton y agregale un escuchador que
 *  es cuando se dispare el elemento click csbre ese elemento hace lo que te podo abajo  */
document. getElementById ("boton") . addEventListener ("click" , function()  {
    console.log("hola mundo desde event listener");
    document.getElementById("demo").innerHTML = "curriculum vitae:"
    "I studied at a school that was close to home and finished high school in 1983 with normal grades.""
    I started university in engineering two years later I met my current partner (with whom I have two children)
    "I was received in 1988 and a few months later they called me to work in an international company called
    "the stone.inc in charge of building houses and roads as I had learned Spanish at school there were times
     "that I had to act as an interpreter between my bosses and my colleagues, this caused me to be promoted until I
     "One day they suggested that I go to work in Europe. I talked about it with the family and we confirmed. Years passed until
      "that one day I decided to return home but since my bosses did not want to make the transfer, I resigned and returned home
      "That's why I'm sending this e-mail to your company." 
}  ) ;



document. getElementById ("boton_color") . addEventListener ("click" , function()  {
   
    document.body.style.backgroundColor = "red"
}  ) ;



document. getElementById ("boton_default") . addEventListener ("click" , function()  {
   
    document.body.style.backgroundColor = "grey"
}  ) ;


document. getElementById (" boton_ocultar ") . addEventListener ("click" , function()  {
   
    document.getElementById("demo") .style.display = "none"
}  ) ;


const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "blue" ;
}