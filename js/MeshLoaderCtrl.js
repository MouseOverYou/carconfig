var Car_P, World_P
var hdrTexture
var MesseCollidersLoaderTask, BottleLoaderTask

function LoadAssets(scene, assetsManager) {


    //ENV TASK
    var envTask = assetsManager.addCubeTextureTask("envTask", "./assets/Runyon_Canyon_A_2k_cube_specular.dds");
    //var envTask = assetsManager.addCubeTextureTask("envTask", "./assets/environment.dds");

    envTask.onSuccess = function (task) {
        hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData(task.texture.name, scene);
        //hdrTexture = task.texture
        hdrTexture.rotationY = 180 * (Math.PI / 180);
        hdrTexture.level = 1

        var hdrSkyboxMaterial = new BABYLON.PBRMaterial("hdrSkyBox", scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
        hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        hdrSkyboxMaterial.microSurface = 1.0;
        hdrSkyboxMaterial.disableLighting = false;
        // Create Skybox
        var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
        hdrSkybox.visibility = 1
        hdrSkybox.material = hdrSkyboxMaterial;
        hdrSkybox.infiniteDistance = false;

    }
    envTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }


    Car_P = new BABYLON.TransformNode("Car_P");
    MesseLoaderTask = assetsManager.addMeshTask("", "", "./assets/car_web_LOD1.glb")

    MesseLoaderTask.onSuccess = function (task) {

        task.loadedMeshes[0].position.x = 0
        task.loadedMeshes[0].position.y = 0.001
        task.loadedMeshes[0].position.z = 0
        task.loadedMeshes[0].parent = Car_P
        Car_P.position.x = 0
        Car_P.position.y = 0
        Car_P.scaling = new BABYLON.Vector3(1, 1, 1)

    }

    MesseLoaderTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }

    World_P = new BABYLON.TransformNode("World_P");
    WorldLoaderTask = assetsManager.addMeshTask("", "", "./assets/car_web_env.glb")

    WorldLoaderTask.onSuccess = function (task) {

        task.loadedMeshes[0].position.x = 0
        task.loadedMeshes[0].position.y = 0
        task.loadedMeshes[0].position.z = 0
        task.loadedMeshes[0].parent = World_P
        World_P.position.x = 0
        World_P.position.y = 0
        World_P.scaling = new BABYLON.Vector3(0.01, 0.01, 0.01)

    }

    WorldLoaderTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }




    //FINISH

    var pbr
    assetsManager.onFinish = function (task) {
        ChangeMaterialProperties()
        CreateColorPicker();
        //EditMeshes();
        //AddShadows();
        //PostEffects(scene)
        //AddSSAO()

    }
    //Asset Manager check
    assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
        engine.loadingUIText = 'We are loading the scene. ' + remainingCount + ' out of ' + totalCount + ' items still need to be loaded.';
    };

    assetsManager.load();
}

