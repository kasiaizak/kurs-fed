$(function(){
    
    $("#sprawdzPesel").click(function(){        
        var peselInput = $("#pesel");
        
        var pesel = $("#pesel")[0].value;
        
        if(pesel.length == 11){
                $("#wiadomosc").text("jest ok").removeClass("error").addClass("success");
            }else if(pesel.length > 11){
                $("#wiadomosc").text("pesel jest za długi").removeClass("success").addClass("error");
            }else{
                $("#wiadomosc").text("pesel jest za krótki").removeClass("success").addClass("error");
            }
    });
            
    $("#wypelnijWyraz").click(function(){
        var literka = $("#literka")[0].value;
        
        switch(literka){
            case "a":
                $("#wyraz").text("ananas").removeClass("error").addClass("success");
                break;
            case "b":
                $("#wyraz").text("banan").removeClass("error").addClass("success");
                break;
            case "c":
                $("#wyraz").text("cytryna").removeClass("error").addClass("success");
                break;
            case "d":
                $("#wyraz").text("daktyl").removeClass("error").addClass("success");
                break;
            default:
                $("#wyraz").text("nieobsługiwana literka!").removeClass("success").addClass("error");
            }
    });
    
    var liczbaWStringu = "123.05";
    var liczbaWIncie = 1234;
        
    $("#dodawanieCyferek1").text(liczbaWStringu + liczbaWIncie); 
    $("#dodawanieCyferek2").text(liczbaWIncie + liczbaWStringu); 
    $("#dodawanieCyferek3").text(liczbaWIncie + parseFloat(liczbaWStringu));
    
    $("#uruchomPetle").click(function(){
        var koniecPetli = parseInt($("#koniecPetli")[0].value);
        
        var suma = 0;
        
        for(var i = 1;i<=koniecPetli;i++){
            suma += i;
        }
        
        $("#skutekPetli").text("suma to: " + suma);
    })
    
    var numerki = [1, 2, 4, 5, 7];
    var drugaSuma = 0;
    
    numerki.forEach(function(i){
        drugaSuma+=i;
    });
    
    
    $("#skutekForEach").text("suma foreach to: " + drugaSuma);
});