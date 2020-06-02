
let LightSwitch = true
let EnvSwitch = false
let showCommands = false
$(document).keyup(function (e) {


  if (e.keyCode === 49 || e.keyCode === 97) {
    console.log("p Keyboard")
    

  }

  else if (e.keyCode === 50 || e.keyCode === 98) {
    console.log("p Keyboard")
    

  }

  else if (e.keyCode === 51 || e.keyCode === 99) {
    console.log("p Keyboard")
    

  }

  if (e.keyCode === 73) {

  }

  if (e.keyCode === 74) {
    showCommands = !showCommands
    if (showCommands) {
      $('#debugLabel').css('z-index', 0)
    }
    else {
      $('#debugLabel').css('z-index', -1)
    }


  }


});

var LightSwitchOn = false
jQuery(document).ready(function ($) {

  //COLOUR COATING
  /* Some simple jQuery to switch the classes */
  $('.colourOption').on('click', function () {
    var colorValue = rgb2hex(getComputedStyle(this).backgroundColor)
    console.log(colorValue)
    coatMat.albedoColor = new BABYLON.Color3.FromHexString(colorValue)
    /* Remove all classes selectedColour from all child elements*/
    $('#colourPicker *').removeClass('selectedColour');
    /* This switches on the selectedColour class for that div. */
    $(this).toggleClass('selectedColour');
  });

  //ENVIRONMENT
  $('.envOption').on('click', function () {
    console.log(this.id);
    var envSelec = this.id
    switch(envSelec){
      case "envOne":
        changeEnv(hdrTexture, 1)
        break;
      case "envTwo":
        changeEnv(hdrTextureCity, 1)
        break;
      case "envThree":
        changeEnv(hdrTextureStudio, 0)
        break;
    }

    /* Remove all classes selectedColour from all child elements*/
    $('#envPicker *').removeClass('selectedEnv');
    /* This switches on the selectedColour class for that div. */
    $(this).toggleClass('selectedEnv');
  });

    //Wheels
    $('.wheelOption').on('click', function () {
      console.log(this.id);
      var wheelSelec = this.id
      switch(wheelSelec){
        case "wheelOne":
          wheelMat.albedoTexture = wheelAlbedo[0]
          wheelMat.metallicTexture = wheelMetal[0]
          //alert("wheel 1")
          break;
        case "wheelTwo":
          wheelMat.albedoTexture = wheelMat.ambientTexture
          wheelMat.metallicTexture = wheelMetal[1]
          //alert("wheel 2")
          break;
        case "wheelThree":
          wheelMat.albedoTexture = wheelAlbedo[2]
          wheelMat.metallicTexture = wheelMetal[1]
          //alert("wheel 3")
          break;
        case "wheelFour":
          wheelMat.albedoTexture = wheelAlbedo[3]
          wheelMat.metallicTexture = wheelMetal[1]
          //alert("wheel 4")
          break;
      }
  
      /* Remove all classes selectedColour from all child elements*/
      $('#wheelPicker *').removeClass('selectedWheel');
      /* This switches on the selectedColour class for that div. */
      $(this).toggleClass('selectedWheel');
    });


  //LIGHTSWITCHER
  $('.lightOption').on('click', function () {

    LightSwitchOn = !LightSwitchOn
    if (LightSwitchOn) {
      $('#lightPicker *').addClass('lightOn');
      UpdateAnimRate = true
    }
    else {
      $('#lightPicker *').removeClass('lightOn');
      TurnLightsOff()

    }



  });

});

