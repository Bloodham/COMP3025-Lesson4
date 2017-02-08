/* Core Game Script */
/// <reference path="./_reference.ts"/>
//IIFE - Immediately Invoked Function Expression
(function () {
    //CreateJS Variables
    var canvas;
    var stage;
    //Game Variables
    var helloLabel;
    var clickMeButton;
    function Start() {
        canvas = document.getElementById("canvas"); //get ref to canvas element
        stage = new createjs.Stage(canvas); //creating a new stage object
        stage.enableMouseOver(20); //enable mouse over events every 20 frames
        createjs.Ticker.framerate = 60; //set fps to 60
        createjs.Ticker.on("tick", Update); //calls the update function every framerate
        Game();
    }
    function Update(event) {
        stage.update(); //manually redraws the stage
    }
    function Game() {
        console.log("Game Started...");
        //add helloLabel to the stage
        helloLabel = new objects.Label("Hello World!", "40px Consolas", "#000000", 160, 240, true);
        stage.addChild(helloLabel);
        //add clickMeButton to the stage
        clickMeButton = new objects.Button("../../Assets/images/ClickMeButton.png", 160, 300, true);
        stage.addChild(clickMeButton);
        // register an event listener with an anoymous event handler inLine
        clickMeButton.on("click", function (event) {
            helloLabel.text = "Good Bye!";
        });
    }
    window.onload = Start; //cals the start function once the window loads
})();
//# sourceMappingURL=game.js.map