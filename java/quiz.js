var resultaSport = "" ;
var afiche = "" ;
var message = "" ;
var tblNom = "" ;

function comfirmSou(){
  var resultaSport = document.getElementsByName("sport") ;
       var Sport = "";
           if (resultaSport[0].checked) {
               Sport = resultaSport[0].value;
           } 

  //Pour déterminer lesquels des checkbox sont cochés
var chckMath = document.getElementsByName("math");
var messageBonjour = "";
    if (chckMath[2].checked) {
         messageBonjour += " " + chckMath[3].value;
    }
       //Chercher les données select dans le formulaire
       var ecole = document.getElementById("selAnee").value;
  console.log(Sport + chckMath + selAnee.value ) ; 

}