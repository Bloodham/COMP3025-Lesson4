/* Core Game Script */
/// <reference path="./_reference.ts"/>
//IIFE - Immediately Invoked Function Expression
(function () {
    //CreateJS Variables
    var canvas;
    var stage;
    //Game Variables
    var helloLabel;
    function Start() {
        canvas = document.getElementById("canvas"); //get ref to canvas element
        stage = new createjs.Stage(canvas); //creating a new stage object
        createjs.Ticker.framerate = 60; //set fps to 60
        createjs.Ticker.on("tick", Update); //calls the update function every framerate
        Game();
    }
    function Update(event) {
        helloLabel.rotation += 5;
        stage.update(); //manually redraws the stage
    }
    function Game() {
        console.log("Game Started...");
        helloLabel = new objects.Label("Hello World!", "40px Consolas", "#000000", 160, 240, true);
        stage.addChild(helloLabel);
    }
    window.onload = Start; //cals the start function once the window loads
})();
//# sourceMappingURL=game.js.map