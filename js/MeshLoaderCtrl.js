var Lounge_P, Bottle_P
var hdrTexture
var MesseCollidersLoaderTask, BottleLoaderTask

function LoadAssets(scene, assetsManager) {


    //ENV TASK
    var envTask = assetsManager.addCubeTextureTask("envTask", "./assets/environment.dds");

    envTask.onSuccess = function (task) {
        //alert('HDR LOADED');
        hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("./assets/environment.dds", scene);
        hdrTexture.rotationY = 140 * (Math.PI / 180);
        hdrTexture.level = 1

        // Create Skybox
        var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
        hdrSkybox.visibility = 0
        var hdrSkyboxMaterial = new BABYLON.PBRMaterial("hdrSkyBox", scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.microSurface = 1.0;
        hdrSkyboxMaterial.disableLighting = true;
        hdrSkybox.material = hdrSkyboxMaterial;
        hdrSkybox.infiniteDistance = false;

    }
    envTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }


    Lounge_P = new BABYLON.TransformNode("Lounge_P");
    MesseLoaderTask = assetsManager.addMeshTask("", "", "./assets/car_web_LOD1.glb")

    MesseLoaderTask.onSuccess = function (task) {

        task.loadedMeshes[0].position.x = 0
        task.loadedMeshes[0].position.y = 0
        task.loadedMeshes[0].position.z = 0
        task.loadedMeshes[0].parent = Lounge_P
        Lounge_P.position.x = 0
        Lounge_P.position.y = 0
        Lounge_P.scaling = new BABYLON.Vector3(1, 1, 1)

    }

    MesseLoaderTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }




    //FINISH

    var pbr
    assetsManager.onFinish = function (task) {
        ChangeMaterialProperties()
        CreateColorPicker();

    }
    //Asset Manager check
    assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
        engine.loadingUIText = 'We are loading the scene. ' + remainingCount + ' out of ' + totalCount + ' items still need to be loaded.';
    };

    assetsManager.load();
}

