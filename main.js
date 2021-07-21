canvas = document.getElementById('myCanvas');
ctx = canvas.getContent("2d")
//Give specific height and width to the car image
gmcar_width= 100;
gmcar_height=100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
gmcar_x =5;
gmcar_y =255;
function add1() {
	//upload car, and background images on the canvas.
	backgroundImageTag = new Image();
     backgroundImageTag.onload= uploadBackground;
    backgroundImageTag.src= background_image;

	gmcar_imgTag= new Image();
	gmcar_imgTag.onload=uploadgreencar;
	gmcar_imgTag.src= greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(backgroundImageTag,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(gmcar_imgTag,gmcar_x,gmcar_y,gmcar_width,gmcar_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(gmcar_y>0){
		gmcar_y=gmcar_y-10;
		uploadBackground();
		uploadgreencar();

 
	} 
}

function down()
{
	//Define function to move the car downward
	if(gmcar_y<500){
		gmcar_y=gmcar_y+10;
		uploadBackground();
		uploadgreencar();

 
	} 
}

function left()
{
	//Define function to move the car left side
	if(gmcar_x>0){
		gmcar_x=gmcar_x-10;
		uploadBackground();
		uploadgreencar();

 
	} 
}

function right()
{
	//Define function to move the car right side
	if(gmcar_x<700){
		gmcar_x=gmcar_x+10;
		uploadBackground();
		uploadgreencar();

 
	} 
}
