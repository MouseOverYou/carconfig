function TurnLightsOff(){
    spotLightL.diffuse = new BABYLON.Color3(0, 0, 0)
    spotLightR.diffuse = new BABYLON.Color3(0, 0, 0)

    LeuchteMat.emissiveColor = new BABYLON.Color3(0, 0, 0)
}

function TurnLightsOn(rate) {
    rate = rate * 2
    //spots
    spotLightL.diffuse = new BABYLON.Color3(rate, rate, rate)
    spotLightR.diffuse = new BABYLON.Color3(rate, rate, rate)

    //general
    LeuchteMat.emissiveColor = new BABYLON.Color3(255 / 255 * rate, 255 / 255 * rate, 255 / 255 * rate)


    if (rate > 0.99) {
        UpdateAnimRate = false
        AnimRate = 0;
    }
}