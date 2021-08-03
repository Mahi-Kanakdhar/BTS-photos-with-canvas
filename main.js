var canvas = new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;
 
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
    top:block_y,
    left:block_x
    });
    canvas.add(block_image_object);
    });
 
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '49') 
	{
		block_x =10
		new_image('Jin.png'); 
        console.log("1");
	}
	if(keyPressed == '50')
	{
		block_x = 200;
		new_image('hope.png'); 
        console.log("2");
	}
	
	if(keyPressed == '51')
	{
		block_x =350;
		new_image('suga.png'); 
        console.log("3");
	}
	if(keyPressed == '52')
	{
		block_x = 600;
		new_image('rm.png'); 
        console.log("4");
	}
	if(keyPressed == '53')
	{
		block_x = 700;
		new_image('jimin.png'); 
        console.log("5");
	}
	if(keyPressed == '54')
	{
		block_x = 700;
		new_image('V.png'); 
        console.log("6");
	}
    if(keyPressed == '55')
	{
		block_x = 700;
		new_image('jk.png'); 
        console.log("7");
	}
	
	
}

