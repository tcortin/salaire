(function () {
    
    const horaireBrut = document.getElementById("brut-horaire");
    const horaireNet = document.getElementById("net-horaire");
    const mensuelBrut = document.getElementById("brut-mensuel");
    const mensuelNet = document.getElementById("net-mensuel");
    const annuelBrut = document.getElementById("brut-annuel");
    const annuelNet = document.getElementById("net-annuel");

    let brutHoraire;
    let netHoraire;
    let brutMensuel;
    let netMensuel;
    let brutAnnuel;
    let netAnnuel;
    
    horaireBrut.onkeyup = function (){
        if(isNaN(horaireBrut.value)){
            horaireBrut.value = "";
        }
        else{            
            netHoraire = Number(((77 * horaireBrut.value)/100).toFixed(2));
            brutMensuel = Number((horaireBrut.value * 151.65).toFixed(0));
            netMensuel = Number((netHoraire * 151.65).toFixed(0));
            brutAnnuel = Number((brutMensuel * 12).toFixed(0));
            netAnnuel = Number((netMensuel * 12).toFixed(0));

            horaireNet.value = netHoraire.toLocaleString() + " €";
            mensuelBrut.value = brutMensuel.toLocaleString() + " €";
            mensuelNet.value = netMensuel.toLocaleString() + " €";
            annuelBrut.value = brutAnnuel.toLocaleString() + " €";
            annuelNet.value = netAnnuel.toLocaleString() + " €";
        }
    }    
    horaireNet.onkeyup = function (){
        if(isNaN(horaireNet.value)){
            horaireNet.value = "";
        }
        else{
            brutHoraire = Number(((100 * horaireNet.value)/77).toFixed(2));
            brutMensuel = Number((brutHoraire * 151.65).toFixed(0));
            netMensuel = Number((horaireNet.value * 151.65).toFixed(0));
            brutAnnuel = Number((brutMensuel * 12).toFixed(0));
            netAnnuel = Number((netMensuel * 12).toFixed(0));

            horaireBrut.value = brutHoraire.toLocaleString() + " €";
            mensuelBrut.value = brutMensuel.toLocaleString() + " €";
            mensuelNet.value = netMensuel.toLocaleString() + " €";
            annuelBrut.value = brutAnnuel.toLocaleString() + " €";
            annuelNet.value = netAnnuel.toLocaleString() + " €";
        }
    }
    mensuelBrut.onkeyup = function (){
        if(isNaN(mensuelBrut.value)){
            mensuelBrut.value = "";
        }
        else{
            brutHoraire = Number((mensuelBrut.value / 151.65).toFixed(2));
            brutAnnuel = Number((mensuelBrut.value * 12).toFixed(0));
            netHoraire = Number(((77 * brutHoraire)/100).toFixed(2));
            netMensuel = Number((netHoraire * 151.65).toFixed(0));
            netAnnuel = Number((netMensuel * 12).toFixed(0));

            horaireBrut.value = brutHoraire.toLocaleString() + " €";
            horaireNet.value = netHoraire.toLocaleString() + " €";
            mensuelNet.value = netMensuel.toLocaleString() + " €";
            annuelBrut.value = brutAnnuel.toLocaleString() + " €";
            annuelNet.value = netAnnuel.toLocaleString() + " €";
        }
    }
    mensuelNet.onkeyup = function (){
        if(isNaN(mensuelNet.value)){
            mensuelNet.value = "";
        }
        else{
            netHoraire = Number((mensuelNet.value / 151.65).toFixed(2));
            netAnnuel = Number((mensuelNet.value * 12).toFixed(0));
            brutHoraire = Number(((100 * netHoraire)/77).toFixed(2));
            brutMensuel = Number((brutHoraire * 151.65).toFixed(0));
            brutAnnuel = Number((brutMensuel * 12).toFixed(0));

            horaireBrut.value = brutHoraire.toLocaleString() + " €";
            horaireNet.value = netHoraire.toLocaleString() + " €";
            mensuelBrut.value = brutMensuel.toLocaleString() + " €";
            annuelBrut.value = brutAnnuel.toLocaleString() + " €";
            annuelNet.value = netAnnuel.toLocaleString() + " €";
        }
    }
    annuelBrut.onkeyup = function (){
        if(isNaN(annuelBrut.value)){
            annuelBrut.value = "";
        }
        else{
            brutMensuel = Number((annuelBrut.value / 12).toFixed(0));
            brutHoraire = Number((brutMensuel / 151.65).toFixed(2));
            netHoraire = Number(((77 * brutHoraire)/100).toFixed(2));
            netMensuel = Number((netHoraire * 151.65).toFixed(0));
            netAnnuel = Number((netMensuel * 12).toFixed(0));

            horaireBrut.value = brutHoraire.toLocaleString() + " €";
            horaireNet.value = netHoraire.toLocaleString() + " €";
            mensuelBrut.value = brutMensuel.toLocaleString() + " €";
            mensuelNet.value = netMensuel.toLocaleString() + " €";
            annuelNet.value = netAnnuel.toLocaleString() + " €";
        }
    }
    annuelNet.onkeyup = function (){
        if(isNaN(annuelNet.value)){
            annuelNet.value = "";
        }
        else{
            netMensuel = Number((annuelNet.value / 12).toFixed(0));
            netHoraire = Number((netMensuel / 151.65).toFixed(2));
            brutHoraire = Number(((100 * netHoraire)/77).toFixed(2));
            brutMensuel = Number((brutHoraire * 151.65).toFixed(0));
            brutAnnuel = Number((brutMensuel * 12).toFixed(0));
            
            horaireBrut.value = brutHoraire.toLocaleString() + " €";
            horaireNet.value = netHoraire.toLocaleString() + " €";
            mensuelBrut.value = brutMensuel.toLocaleString() + " €";
            mensuelNet.value = netMensuel.toLocaleString() + " €";
            annuelBrut.value = brutAnnuel.toLocaleString() + " €";
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