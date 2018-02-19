(function () {
    
    const valeurA = document.getElementById("brut-horaire");
    const valeurB = document.getElementById("net-horaire");
    const valeurC = document.getElementById("brut-mensuel");
    const valeurD = document.getElementById("net-mensuel");
    const valeurE = document.getElementById("brut-annuel");
    const valeurF = document.getElementById("net-annuel");

    let brutHoraire;
    let netHoraire;
    let brutMensuel;
    let netMensuel;
    let brutAnnuel;
    let netAnnuel;
    
    valeurA.onkeyup = function (){
        if(isNaN(valeurA.value)){
            valeurA.value = "";
        }
        else{            
            netHoraire = (Number(77 * valeurA.value)/100).toFixed(2);
            brutMensuel = (Number(valeurA.value * 151.65)).toFixed(0);
            netMensuel = (Number(netHoraire * 151.65)).toFixed(0);
            brutAnnuel = (Number(brutMensuel * 12)).toFixed(0);
            netAnnuel = (Number(netMensuel * 12)).toFixed(0);
            valeurB.value = netHoraire + " €";
            valeurC.value = brutMensuel + " €";
            valeurD.value = netMensuel + " €";
            valeurE.value = brutAnnuel + " €";
            valeurF.value = netAnnuel + " €";
        }
    }    
    valeurB.onkeyup = function (){
        if(isNaN(valeurB.value)){
            valeurB.value = "";
        }
        else{
            brutHoraire = (Number(100 * valeurB.value)/77).toFixed(2);
            brutMensuel = (Number(brutHoraire * 151.65)).toFixed(0);
            netMensuel = (Number(valeurB.value * 151.65)).toFixed(0);
            brutAnnuel = (Number(brutMensuel * 12)).toFixed(0);
            netAnnuel = (Number(netMensuel * 12)).toFixed(0);
            valeurA.value = brutHoraire + " €";
            valeurC.value = brutMensuel + " €";
            valeurD.value = netMensuel + " €";
            valeurE.value = brutAnnuel + " €";
            valeurF.value = netAnnuel + " €";
        }
    }
    valeurC.onkeyup = function (){
        if(isNaN(valeurC.value)){
            valeurC.value = "";
        }
        else{
            brutHoraire = (Number(valeurC.value / 151.65)).toFixed(2);
            brutAnnuel = (Number(valeurC.value * 12)).toFixed(0);
            netHoraire = (Number(77 * brutHoraire)/100).toFixed(2);
            netMensuel = (Number(netHoraire * 151.65)).toFixed(0);
            netAnnuel = (Number(netMensuel * 12)).toFixed(0);
            valeurA.value = brutHoraire + " €";
            valeurB.value = netHoraire + " €";
            valeurD.value = netMensuel + " €";
            valeurE.value = brutAnnuel + " €";
            valeurF.value = netAnnuel + " €";
        }
    }
    valeurD.onkeyup = function (){
        if(isNaN(valeurD.value)){
            valeurD.value = "";
        }
        else{
            netHoraire = (Number(valeurD.value / 151.65)).toFixed(2);
            netAnnuel = (Number(valeurD.value * 12)).toFixed(0);
            brutHoraire = (Number(100 * netHoraire)/77).toFixed(2);
            brutMensuel = (Number(brutHoraire * 151.65)).toFixed(0);
            brutAnnuel = (Number(brutMensuel * 12)).toFixed(0);
            valeurA.value = brutHoraire + " €";
            valeurB.value = netHoraire + " €";
            valeurC.value = brutMensuel + " €";
            valeurE.value = brutAnnuel + " €";
            valeurF.value = netAnnuel + " €";
        }
    }
    valeurE.onkeyup = function (){
        if(isNaN(valeurE.value)){
            valeurE.value = "";
        }
        else{
            brutMensuel = (Number(valeurE.value / 12)).toFixed(0);
            brutHoraire = (Number(brutMensuel / 151.65)).toFixed(2);
            netHoraire = (Number(77 * brutHoraire)/100).toFixed(2);
            netMensuel = (Number(netHoraire * 151.65)).toFixed(0);
            netAnnuel = (Number(netMensuel * 12)).toFixed(0);
            valeurA.value = brutHoraire + " €";
            valeurB.value = netHoraire + " €";
            valeurC.value = brutMensuel + " €";
            valeurD.value = netMensuel + " €";
            valeurF.value = netAnnuel + " €";
        }
    }
    valeurF.onkeyup = function (){
        if(isNaN(valeurF.value)){
            valeurF.value = "";
        }
        else{
            netMensuel = (Number(valeurF.value / 12)).toFixed(0);
            netHoraire = (Number(netMensuel / 151.65)).toFixed(2);
            brutHoraire = (Number(100 * netHoraire)/77).toFixed(2);
            brutMensuel = (Number(brutHoraire * 151.65)).toFixed(0);
            brutAnnuel = (Number(brutMensuel * 12)).toFixed(0);
            valeurA.value = brutHoraire + " €";
            valeurB.value = netHoraire + " €";
            valeurC.value = brutMensuel + " €";
            valeurD.value = netMensuel + " €";
            valeurE.value = brutAnnuel + " €";
        }
    }

}());

// ANIMATION DES INPUTS LORS DU FOCUS //

$(window).load(function(){
    
      $('.field input').focus(function(){
        $(this).parent().addClass('is-focused');
      })
    
      $('.field input').focusout(function(){
        $parent = $(this).parent();
          $parent.removeClass('is-focused');
      })      
})