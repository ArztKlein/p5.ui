let button;

function setup(){
    createCanvas(400, 300);
    button = new Button(width / 2, height / 2, 100, 70);
    button.fill("red");
    button.stroke("purple");

    button.onHover = function(){
        this.fill("green");
    }

    button.onClick = function(){
        this.fill("orange");
    }
}

function draw(){
    background(255);
}