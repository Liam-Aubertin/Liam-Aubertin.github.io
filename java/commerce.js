
var iphone = parseInt(799);
var laptop = parseInt(399);
var souri = parseInt(21.99);
var clavier = parseInt(39.99);
var moniteur = parseInt(278) ;
var quan = "" ; 
var message = "" ;
var argent ="" ;
var prixTot = 0
          // trouber le total des produit // 
function vrPix() {
  for (var i = 0 ; i < 5 ; i ++) {
  var quanI = document.getElementById("quaI").value ;
  var quanL = document.getElementById("quaL").value ;
  var quanS = document.getElementById("quaS").value ;
  var quanC = document.getElementById("quaC").value ;
  var quanM = document.getElementById("quaM").value ;
  }
   // ler variable pour faire le recu //
  var recuIphone = "Iphone 13:  " + quanI + "x  " + iphone ;
  var recuLaptop = "Laptop Asus:  " + quanL + "x  " + laptop ;
  var recuSouri = "Souri:  " + quanS + "x  " + souri ;
  var recuClavier = "Clavier:  " + quanC + "x  " + clavier ;
  var recuMoniteur  = "Moniteur:  " + quanM + "x  " + moniteur ;

  // creation dun if pour voir si ill vie en Ontario ou quebec // 
  var resultaPro = document.getElementsByName("Province") ;
       var pro = "";
           if (resultaPro[0].checked) {
               pro = parseFloat(1.13);
           } else{
             if (resultaPro[1].checked){
               pro = parseFloat(1.15);
             }else{
               if(!resultaPro[0].checked && ! resultaPro[1].checked){
                 alert("tu doit choisir un province") ;
               }
             }
           }
   // creation dun if pour voir quelle service //
  var resultaserv = document.getElementsByName("service") ;
       var serv = "";
           if (resultaserv[0].checked) {
               serv = parseInt(10);
           } else{
             if (resultaserv[1].checked){
               serv = parseInt(3);
             }else{
               if(! resultaserv[0].checked && ! resultaserv[1].checked){
                 alert("tu doit choisir un service!!") ;
               }
             }
           }
console.log(serv)
    iphone = iphone * quanI ;
    laptop = laptop * quanL ; 
    souri = souri * quanS ;
    clavier = clavier * quanC ; 
    moniteur = moniteur * quanM ; 
  var tot = + iphone + laptop + souri + clavier + moniteur + serv ; 
  var message = tot * pro
  // prix total : //
  prixTot = message ;
var affiche = document.getElementById("affichePrix") ; 
message = message.toFixed(2);
  console.log( pro ) ; 
  // recu //
  var recu = "******************************* " + 
    "<br>*  Reçu- Le soucre pour tech  * " + 
    " <br> ------------------------------------ " + 
     "<br>" + recuIphone+"$" +
     "<br>" + recuLaptop+"$" +
     "<br>" + recuSouri +"$"  +
     "<br>" + recuClavier +"$"+
     "<br>" + recuMoniteur+ "$" + 
    "<br>" + "------------------------------------ " + 
     "<br>" + "Liverasion:" + serv+"$" +  
     "<br>" + "Taxes:" + pro+"$" +
     "<br>" +"Total:" + message+"$"  +
    "<br>" + "*********************************" ;
  affiche.innerHTML = recu;
  // function pour rendre largent // 
 
  } 

function RendreArgent(){
var money = document.getElementById("money").value ; 
  var argent = document.getElementById("afficheMoney") ; 
    var rendre = money - prixTot ;
  argent.innerHTML =  "<h3>L'argent on doit te redonner: "+ rendre.toFixed(2)+"$" + "<br><br> Passe une bonne journée :) " ;
}