//create the constructor for the class saucer
function Ship() {

    var x = 300,
        y = 430,
        vx = 0,
        vy = 0,
        GlobeYellow = 1;

    Ship.prototype.move = function () {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;        
    }

    //public method to set the vector of the square
    Ship.prototype.setVector = function (vector) {
        //set vx
        vx = vector.VX;
        //set vy
        vy = vector.VY;
    }


    //halt fuction for ship
    Ship.prototype.halt = function (vector) {
        //ser vx
        vx = 0;
        //set vy
        vy = 0;

}

    //public method to set the vector of the saucer
    Ship.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }


  
    // public read only propery for the y posn
    Object.defineProperty(this, 'RY',
        {
            get: function () {
                // return the y posn
                return y;
            }
        }
    )

    // public read only propery for the x posn
    Object.defineProperty(this, 'RX',
        {
            get: function () {
                // return the x posn
                return x;
            }
        }
    )


    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Ship.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#8E8E8E";
        context.moveTo(24, 16);
        context.lineTo(48, 16);
        context.lineTo(48, -16);
        context.lineTo(24, -16);
        context.lineTo(-24, -16);
        context.lineTo(-48, -16);
        context.lineTo(-48, 16);
        context.lineTo(-24, 16);
        context.fill();
        context.fillstyle = '#CC5C55';
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();

        //var to store the colour of the globe
        var colour = "";
        //if the value of GlobeYellow is less than 50
        if (GlobeYellow < 50) {
            //set the colour to yellow
            colour = "#ffff00";
        }
        else {
            //otherwise set it to red
            colour = "#ff0000";
        }

        //right globe
        context.beginPath();
        context.fillStyle = colour;
        context.moveTo(48, 16);
        context.quadraticCurveTo(76, 2, 48, -16);
        context.fill();
        context.stroke();

        //left globe
        context.beginPath();
        context.fillStyle = colour;
        context.moveTo(-48, 16);
        context.quadraticCurveTo(-76, 2, -48, -16);
        context.fill();
        context.stroke();

        //increase the value of globe yellow (The larger the increment the faster the flashing effect)
        GlobeYellow += 1;
        //if globe yellow is more than 100 
        if (GlobeYellow > 100) {
            //set it back to 1
            GlobeYellow = 1;
        }



        //restore the state of the context to what it was before our drawing
        context.restore();
    }
}
