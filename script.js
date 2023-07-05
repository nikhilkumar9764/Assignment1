var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas,true);

function createScene()
{
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("camera" ,0,0,0, BABYLON.Vector3.Zero(),scene);
    camera.setPosition(new BABYLON.Vector3(0,0,-5));
    camera.attachControl(canvas,true);
    
    var light = new BABYLON.HemisphericLight("light" , new BABYLON.Vector3(0,1,0) , scene);
    var box = BABYLON.MeshBuilder.CreateBox("box" , { size : 2} , scene);
    
    return scene;
}

var sc = createScene();

engine.runRenderLoop(function(){
     sc.render();
})