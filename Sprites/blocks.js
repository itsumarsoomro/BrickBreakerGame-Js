//create the constructor for the class Block
function Block(x, y) {

    this.x = x;
    this.y = y;


    //create the draw function to give us the draw method
    //it accepts one parameter which is the context from the canvas it is drawn on
    Block.prototype.draw = function (context) {
        //save the state of the drawing context before we change it
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(this.x, this.y);
        //start the line (path)
        context.beginPath();
        context.moveTo(6, 4);
        context.lineTo(12, 4);
        context.lineTo(12, -4);
        context.lineTo(6, -4);
        context.lineTo(-6, -4);
        context.lineTo(-12, -4);
        context.lineTo(-12, 4);
        context.lineTo(-6, 4);
        context.fill();
        context.fillstyle = '#566573 ';
        //close the path
        context.closePath();
        //go ahead and draw the line
        context.stroke();



        //restore the state of the context to what it was before our drawing
        context.restore();

    }


    //create a public property called Top
    Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the y posn less the height
                return y - 10;
            }
        }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the y posn plus the height
                return y + 10;
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