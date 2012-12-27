$(document).ready(function(){

var lightboximages = [  "0px", "-940px", "-1650px", "-2580px"];

var lightboxCurrent = 0;

function rightclick() {

  lightboxCurrent += 1

  $("#tile1").animate({"left": lightboximages[lightboxCurrent]}, 1000)

  if (lightboxCurrent==(lightboximages.length - 1)) {

    $("#rightbutton").fadeOut()
  }


}

function leftclick() {


  lightboxCurrent -= 1

  $("#tile1").animate({"left": lightboximages[lightboxCurrent]}, 1000)

  if (lightboxCurrent==(lightboximages.length - 4)) {

    $("#leftbutton").fadeOut()
  }

}

  $("#rightbutton").click(function(event) {

    event.preventDefault();
    rightclick()
    $("#leftbutton").fadeIn()
    $("#headup").css({"display": "none"})
    $(".infobox").fadeOut()

        });

  $("#leftbutton").click(function(event) {

    event.preventDefault();
    leftclick()
    $("#rightbutton").fadeIn()
    $(".infobox").fadeOut()


        });


   $("#explainer").click(function(event) {

    event.preventDefault();
    $("#headlinecopy").fadeOut(function(event){

    	$(".info").fadeIn(function(event){

    		$("#headup").fadeIn()
            $("#rightbutton").fadeIn()
    	})
   	 })
        });


    $("#info1").click(function(event) {

    event.preventDefault();
    $("#infobox1").fadeToggle()


        });

    $("#info2").click(function(event) {

    event.preventDefault();
    $("#infobox2").fadeToggle()


        });

    $("#info3").click(function(event) {

    event.preventDefault();
    $("#infobox3").fadeToggle()


        });
    
    $("#info4").click(function(event) {

    event.preventDefault();
    $("#infobox4").fadeToggle()


        });

    $("#info5").click(function(event) {

    event.preventDefault();
    $("#infobox5").fadeToggle()


        });

    $("#info6").click(function(event) {

    event.preventDefault();
    $("#infobox6").fadeToggle()


        });

    $("#info7").click(function(event) {

    event.preventDefault();
    $("#infobox8").fadeToggle()


        });

    $("#info8").click(function(event) {

    event.preventDefault();
    $("#infobox7").fadeToggle()


        });

    $("#info9").click(function(event) {

    event.preventDefault();
    $("#infobox9").fadeToggle()


        });

    $("#info10").click(function(event) {

    event.preventDefault();
    $("#infobox10").fadeToggle()


        });

    $("#info11").click(function(event) {

    event.preventDefault();
    $("#infobox11").fadeToggle()


        });


}); //ready