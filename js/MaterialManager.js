let woodMat, LeuchteMat
let videoMats = []
function ChangeMaterialProperties() {

    var redBay =new BABYLON.Color3.FromHexString("#ea1e1e");
    var blueBay =new BABYLON.Color3.FromHexString("#063c9d");
    var lightGrayBay = new BABYLON.Color3.FromHexString("#eeeeee");
    var darkGrayBay = new BABYLON.Color3.FromHexString("#323334");
    var blackBay = new BABYLON.Color3.FromHexString("#000000");


    scene.materials.forEach(mat => {
        mat.reflectionTexture = hdrTexture;
        if(mat.name.startsWith("sit")){
            mat.metallic = 0;
            mat.roughness = 0.2;
            mat.bumpTexture = leatherNRM
            mat.bumpTexture.level = 0.13
            mat.bumpTexture.uScale = 0.15
            mat.bumpTexture.vScale = 0.15
        }
        else if(mat.name == "whiteWood"){
            mat.metallic = 0;
            mat.roughness = 0.1;
        }
        else if(mat.name == "Glass"){
            mat.metallic = 0;
            mat.roughness = 0;
            mat.indexOfRefraction = 0.52;
            mat.alpha = 0.5;
            mat.directIntensity = 0.0;
            mat.environmentIntensity = 0.7;
            mat.cameraExposure = 0.66;
            mat.cameraContrast = 1.66;
            mat.microSurface = 1;
            mat.reflectivityColor = new BABYLON.Color3(0.2, 0.2, 0.2);
            mat.albedoColor = new BABYLON.Color3(0.95, 0.95, 0.95);
        }
        else if (mat.name == "blackScreen"){
            mat.metallic = 1
            mat.roughness = 0;
        }
        else if (mat.name == "Leuchte"){
            mat.emissiveColor =  new BABYLON.Color3(117/255, 98/255, 95/255)
            LeuchteMat = mat
        }
        else if (mat.name == "glissBottle"){
            mat.metallic = 0.65
            mat.roughness = 0.1
        }

        else if (mat.name == "deckelMat"){
            mat.metallic = 0.65
            mat.roughness = 0.1
        }
        else if (mat.name == "glissMetal"){
            mat.metallic = 1
            mat.roughness = 0
        }
        else if (mat.name == "newSticker"){
            //mat.albedoColor = new BABYLON.Color3.Black()
        }
        else if(mat.name == "bild"){
            mat.emissiveTexture = mat.albedoTexture
            mat.emissiveColor = new BABYLON.Color3.FromHexString("#313131")
        }
        else if(mat.name == "Car03_Body_Mat01"){
            mat.roughness = 0.08
        }
    })  

    
}

var colMat
function CreateCustomMaterials(){
    colMat = new BABYLON.StandardMaterial("colMat", scene)
    colMat.wireframe = false
    colMat.alpha = 0
}

function createVideoMat(){
    
    var videoMat = new BABYLON.PBRMaterial("videoMat", scene);
    videoMats.push(videoMat)
    var dotsText = new BABYLON.Texture("./assets/videoDots2.jpg", scene, true, false)
    var ambientScreen = new BABYLON.Texture("./assets/screenAmbient.jpg", scene, true, false)
    videoMat.ambientTexture = ambientScreen
    videoMat.bumpTexture = dotsText
    videoMat.bumpTexture.level = 0
    videoMat.bumpTexture.uScale =1
    videoMat.bumpTexture.vScale =1
    videoMat.emissiveColor = new BABYLON.Color3.FromHexString("#313131")
    videoMat.metallic = 0
    videoMat.roughness = 0
    
    return videoMat;
}

