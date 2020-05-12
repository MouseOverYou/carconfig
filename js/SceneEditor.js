var lightLinks, lightRechts, spotLightL, spotLightR
function CreateLighting(){
    lightLinks = new BABYLON.DirectionalLight("lightLinks", new BABYLON.Vector3(-60, -41, -90), scene);
    lightLinks.position = new BABYLON.Vector3(1, 1, 0);
    lightLinks.intensity = 0
    lightLinks.shadowMinZ = -13

    lightRechts = new BABYLON.DirectionalLight("lightRechts", new BABYLON.Vector3(120, -41, -90), scene);
    lightRechts.position = new BABYLON.Vector3(-1, 1, 0);
    lightRechts.intensity = 0.5
/*
    spotLightL = new BABYLON.SpotLight("spotLightL", new BABYLON.Vector3(35, 30, -48), new BABYLON.Vector3(0, -1, 0.3), 95 * (Math.PI / 180), 2, scene);
    spotLightL.intensity = 8000

    spotLightR = new BABYLON.SpotLight("spotLightR", new BABYLON.Vector3(-35, 30, -48), new BABYLON.Vector3(0, -1, 0.3), 95 * (Math.PI / 180), 2, scene);
    spotLightR.intensity = 8000
*/

}

function EditMeshes(){
    scene.meshes.forEach(mesh => {
        if(mesh.name == "Car03_CollisionMesh"){
            mesh.isVisible = false
            //console.log(mesh)
        }
    });
}

function AddShadows() {
    var groundShadow = BABYLON.Mesh.CreatePlane('groundShadow', 95, scene)
    groundShadow.rotation.x = Math.PI / 2
    groundShadow.position.y = 0.01
    groundShadow.material = new BABYLON.ShadowOnlyMaterial('shadowOnly', scene)
    groundShadow.material.alpha = 0.2
    groundShadow.receiveShadows = true

    var generator = new BABYLON.ShadowGenerator(4096 / 8, lightLinks);
    generator.setTransparencyShadow(true);
    generator.filter = 100

    for (var i = 0; i < scene.meshes.length; i++) {
        if (scene.meshes[i].name == "Car03_CollisionMesh") {
            generator.addShadowCaster(scene.meshes[i]);

        }
        else if (scene.meshes[i].name == "walls") {
            scene.meshes[i].receiveShadows = true;
        }

    }

}

var changeEnv = async function (hdr, vis) {
    hdrSkyboxMaterial.dispose(false,true)
    await CreateEnvMaterial(hdr, vis);
    await UpdateEnvReflections(hdr);
    await ChangeEnvMesh(vis);
}

function CreateEnvMaterial(hdr, vis){

    hdrSkyboxMaterial = new BABYLON.PBRMaterial("hdrSkyBox", scene);
    hdrSkyboxMaterial.backFaceCulling = false;
    hdrSkyboxMaterial.reflectionTexture = hdr.clone();
    hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    hdrSkyboxMaterial.microSurface = 1.0;
    hdrSkyboxMaterial.disableLighting = false;
    // Create Skybox
    hdrSkybox.material = hdrSkyboxMaterial;
    hdrSkybox.visibility = vis
}

function ChangeEnvMesh(vis){

    if(vis == 0){
        console.log("setting off")
        console.log(Roof_P)
        Roof_P.setEnabled(false)
    }
    else{
        console.log("setting on")
        Roof_P.setEnabled(true)
    }


}