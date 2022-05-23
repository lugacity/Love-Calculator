
let luv1 = document.getElementById("luv");
let button = document.getElementById("btnlove");


button.addEventListener('click', myFunction);


function myFunction(){
    var inputlove = document.getElementById("inputlove1").value;
    var inputlove3 = document.getElementById("inputlove2").value;
if(inputlove.length<=2){
    alert('The character must be atleast 3');
    }
if(inputlove3.length<=2){
    alert('The character must be atleast 3');
    }
else{
    let random = Math.floor(Math.random() * 100);
    document.getElementById("luv1").innerHTML = inputlove + "and" + inputlove3 +  +random + "%" + "of love";

    }
}
// // document.getElementById("btnlove").addEventListener("click", myFunction);

// function myFunction(){
//     let total =(Math.floor(Math.random() * 100)); 
    
    
// }
