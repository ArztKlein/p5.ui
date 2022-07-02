let elements = [];
let lastHovered;

function mouseHovering(element){
    return (mouseX > element.x && mouseX < element.x + element.width) && (mouseY > element.y && mouseY < element.y + element.height);
}

p5.prototype.drawGUI = function(){
    for (const element of elements) {
        element.draw();
    }
}

p5.prototype.handleEvents = function(){
    for (const element of elements) {

        // Ignore the element if it is not visible
        if (!element.isVisible()) continue;

        if (element.isVisible() && mouseHovering(element)){
            lastHovered = element;
            if(mouseIsPressed){
                element.onClick();
            }else{
                element.onHover();
            }
        }
    }
}

p5.prototype.registerMethod('post', p5.prototype.drawGUI);
p5.prototype.registerMethod('post', p5.prototype.handleEvents);

class Button{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visible = true;
        this.fillColour = "white";
        this.strokeColour = "black";
        this.weight = 1;
        elements.push(this);
    }

    draw(){
        fill(this.fillColour);
        stroke(this.strokeColour);
        strokeWeight(this.weight);
        rect(this.x, this.y, this.width, this.height);
    }

    fill(colour){
        this.fillColour = colour;
    }

    stroke(colour){
        this.strokeColour = colour;
    }

    strokeWeight(weight){
        this.weight = weight;
    }

    isVisible(){
        return this.visible;
    }

    onHover(){

    }

    onClick(){

    }
}