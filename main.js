var canvas=new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
player_X=10;
player_Y=10;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true&& keypressed=="80"){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true&& keypressed=="77"){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("Current_width").innerHTML=block_width;
        document.getElementById("Current_height").innerHTML=block_height;
    }
    if(keypressed=="38")
    {
        up();
        console.log("up");
    }
    if(keypressed=="39")
    {
        right();
        console.log("right");
    }
    if(keypressed=="40")
    {
        down();
        console.log("down");
    }
    if(keypressed=="37")
    {
        left();
        console.log("left");
    }
    if(keypressed=="87")
    {
        new_image("wall.jpg")
        console.log("w");
    }
    if(keypressed=="71")
    {
        new_image("ground.png")
        console.log("g");
    }
    if(keypressed=="76")
    {
        new_image("light_green.png")
        console.log("l");
    }
    if(keypressed=="84")
    {
        new_image("trunk.jpg")
        console.log("t");
    }
    if(keypressed=="82")
    {
        new_image("roof.jpg")
        console.log("r");
    }
    if(keypressed=="89")
    {
        new_image("yellow_wall.png")
        console.log("y");
    }
    if(keypressed=="68")
    {
        new_image("dark_green.png")
        console.log("d");
    } 
    if(keypressed=="85")
    {
        new_image("unique.png")
        console.log("u");
    }
    if(keypressed=="67")
    {
        new_image("cloud.jpg")
        console.log("c");
    }
    
}

function up(){
    if(player_Y >=0){
        player_Y=player_Y-block_height;
        console.log("when up arrow is pressed, X= "+player_X+"| Y= "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_Y <=500){
        player_Y=player_Y+10;
        console.log("when down arrow is pressed, X= "+player_X+"| Y= "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_X >=0){
        player_X=player_X-10;
        console.log("when left arrow is pressed, X= "+player_X+"| Y= "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_X <=700){
        player_X=player_X+10;
        console.log("when right arrow is pressed, X= "+player_X+"| Y= "+player_Y);
        canvas.remove(player_object);
        player_update();
    }
}