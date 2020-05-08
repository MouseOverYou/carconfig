var lightLinks, lightRechts, spotLightL, spotLightR
function CreateLighting(){
    lightLinks = new BABYLON.DirectionalLight("lightLinks", new BABYLON.Vector3(-60, -41, -90), scene);
    lightLinks.position = new BABYLON.Vector3(1, 1, 0);
    lightLinks.intensity = 0.35
    lightLinks.shadowMinZ = -13

    lightRechts = new BABYLON.DirectionalLight("lightRechts", new BABYLON.Vector3(120, -41, -90), scene);
    lightRechts.position = new BABYLON.Vector3(-1, 1, 0);
    lightRechts.intensity = 0.35
/*
    spotLightL = new BABYLON.SpotLight("spotLightL", new BABYLON.Vector3(35, 30, -48), new BABYLON.Vector3(0, -1, 0.3), 95 * (Math.PI / 180), 2, scene);
    spotLightL.intensity = 8000

    spotLightR = new BABYLON.SpotLight("spotLightR", new BABYLON.Vector3(-35, 30, -48), new BABYLON.Vector3(0, -1, 0.3), 95 * (Math.PI / 180), 2, scene);
    spotLightR.intensity = 8000
*/

}