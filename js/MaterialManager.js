let woodMat, LeuchteMat
let videoMats = []
let coatMat;
function ChangeMaterialProperties() {

    var redBay = new BABYLON.Color3.FromHexString("#ea1e1e");
    var blueBay = new BABYLON.Color3.FromHexString("#063c9d");
    var lightGrayBay = new BABYLON.Color3.FromHexString("#eeeeee");
    var darkGrayBay = new BABYLON.Color3.FromHexString("#323334");
    var blackBay = new BABYLON.Color3.FromHexString("#000000");

    var yellow = new BABYLON.Color3.FromHexString("#E19A00");

    let sceneMats = scene.materials;
    for (let mat of sceneMats) {
        if (mat.name == "hdrSkyBox") {
            continue;
        }

        mat.reflectionTexture = hdrTexture;
        if (mat.name == "Car03_Body_Mat01") {
            //mat.reflectionTexture = hdrTexture;
            coatMat = mat
            mat.albedoColor = yellow;
            mat.roughness = 0.3
            mat.albedoTexture = mat.ambientTexture

            mat.clearCoat.isEnabled = true;
            mat.clearCoat.intensity = 1; // 0-1 defaults to 1
            mat.clearCoat.roughness = 0.1; // 0-1 defaults to 0
            //material.clearCoat.texture = texture; // R is storing intensity and G roughness

            //mat.clearCoat.isTintEnabled = true;
            //mat.clearCoat.tintColor = Color3.Teal();
            //mat.clearCoat.bumpTexture = texture; // dedicated bump texture for the coat
        }
        else if(mat.name =="Car03_Glass_Mat"){
            mat.roughness = 0;
            mat.metallic = 1
        }
        else if(mat.name == "Car03_Wheel_Mat01"){
            mat.metallic = 1
            mat.roughness = 0.2

        }
        else if(mat.name == "Car03_Interior_Mat01"){
            mat.alpha = 1
            mat.roughness = 0.5
            mat.bumpTexture.level = 0.3
        }

        console.log(mat.name);

    }


}

var colMat
function CreateCustomMaterials() {
    colMat = new BABYLON.StandardMaterial("colMat", scene)
    colMat.wireframe = false
    colMat.alpha = 0
}

function createVideoMat() {

    var videoMat = new BABYLON.PBRMaterial("videoMat", scene);
    videoMats.push(videoMat)
    var dotsText = new BABYLON.Texture("./assets/videoDots2.jpg", scene, true, false)
    var ambientScreen = new BABYLON.Texture("./assets/screenAmbient.jpg", scene, true, false)
    videoMat.ambientTexture = ambientScreen
    videoMat.bumpTexture = dotsText
    videoMat.bumpTexture.level = 0
    videoMat.bumpTexture.uScale = 1
    videoMat.bumpTexture.vScale = 1
    videoMat.emissiveColor = new BABYLON.Color3.FromHexString("#313131")
    videoMat.metallic = 0
    videoMat.roughness = 0

    return videoMat;
}

