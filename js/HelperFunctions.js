showDebug = true;

$(document).keyup(function (e) {
    //"m" pressed
    if (e.keyCode === 77) { handleDebugLayer(); }
});

function handleDebugLayer() {
    console.log("d pressed")
    if (scene.debugLayer.isVisible()) {
        scene.debugLayer.hide()
      } else {
        scene.debugLayer.show()
      }
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

//loading screen
BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function () {
    if (document.getElementById("customLoadingScreenDiv")) {
        document.getElementById("customLoadingScreenDiv").style.display = "initial";
        // Do not add a loading screen if there is already one
        return;
    }
    
    this._loadingDiv = document.createElement("div");
    this._loadingDiv.id = "customLoadingScreenDiv";
    
    //this._loadingDiv.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Loadingsome.gif/600px-Loadingsome.gif' />";
    this._loadingDiv.innerHTML = "<img src='./assets/bayLoading.gif' />";

    var para = document.createElement("p");
    var node = document.createTextNode("Scene is being loaded ...");
    para.appendChild(node);

    this._loadingDiv.appendChild(para)

    var customLoadingScreenCss = document.createElement('style');
    customLoadingScreenCss.type = 'text/css';
    customLoadingScreenCss.innerHTML = `
    #customLoadingScreenDiv{
        background-color: #FFFFFF;
        color: white;
        font-size:100px;
        text-align:center;
    }
    `;
    document.getElementsByTagName('head')[0].appendChild(customLoadingScreenCss);
    this._resizeLoadingUI();
    window.addEventListener("resize", this._resizeLoadingUI);
    document.body.appendChild(this._loadingDiv);
};

BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI = function(){
    document.getElementById("customLoadingScreenDiv").style.display = "none";
    console.log("scene is now loaded");
}