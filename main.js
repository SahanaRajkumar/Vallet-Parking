//Create a reference for canvas 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
Car_width=75;
Car_height=100;
Car_X=5;
Car_y=225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	//upload car, and background images on the canvas.
	background_image_tag=new Image();
	background_image_tag.onload=uploadBackground;
	background_image_tag.src=background_image;


	Car_image_tag=new Image();
	Car_image_tag.onload=uploadgreencar;
	Car_image_tag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(Car_image_tag,Car_X,Car_y,Car_width,Car_height);
	
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
	if(Car_y>=0){
		Car_y=Car_y-5;
		uploadBackground();
		uploadgreencar();


	}
}

function down()
{
	if(Car_y<=350){
		Car_y=Car_y+5;
		uploadBackground();
		uploadgreencar();
		

	}
}

function left()
{
	if(Car_X>=0){
		Car_X=Car_X-5;
		uploadBackground();
		uploadgreencar();
		

	}
}

function right()
{
	if(Car_X<=700){
		Car_X=Car_X+5;
		uploadBackground();
		uploadgreencar();
		

	}
}
