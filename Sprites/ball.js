//create the constructor for the balls
function Balls(x, y) {
 

    //create private variables for the x and y coordinates
    var x = 180,
        y = 416,
        vx = 0,
        vy = 0;


    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Balls.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);


        //draw ball
        context.beginPath();
        //ball color
        context.fillStyle = "#441E1C";
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(120, -12, 5, 0, (Math.PI * 2));
        context.fill();
        context.stroke();

        context.restore();
    }

    Balls.prototype.move = function () {
        //set vx
        x += vx;
        //set vy
        y += vy;
    }

    Balls.prototype.setVector = function (vector) {
        //set vx
        vx = vector.VX;
        //set vy
        vy = vector.VY;
    }

    //halt function for balls
    Balls.prototype.halt = function (vector) {
        //set vx
        vx = 0;
        //set vy
        vy = 0;
    }

    //public method to set the vector of the laser
    Balls.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }

    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the y posn less the height
                return y - 4;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return y + 4;
            }
        }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the x posn less the width
                return x - 600;
            }
        }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the x posn plus the width
                return x + 600;
            }
        }
    )

}