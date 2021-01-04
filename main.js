canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_images=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
random_number=Math.floor(Math.random()*5);
console.log("random_number")

rover_width =90;
rover_height =70;

background_image = mars_images[random_number];
console.log("the selected background image is"+background_image);
rover_image = "rover.png";

rover_x = 20;
rover_y = 20;

function add(){

    background_img_Tag = new Image();
    background_img_Tag.onload=uploadbackground;
background_img_Tag.src=background_image;

rover_img_Tag = new Image();
    rover_img_Tag.onload=uploadrover;
rover_img_Tag.src=rover_image;

}

function uploadbackground() {

ctx.drawImage(background_img_Tag,0,0,canvas.width,canvas.height);


}
function uploadrover() {

ctx.drawImage(rover_img_Tag,rover_x,rover_y,rover_width, rover_height);


    }

    window.addEventListener("keydown",my_keydown);

function my_keydown(e){

    keypressed=e.keyCode;

console.log(keypressed);

if (keypressed  == '38'){
up();
console.log("up");


}
    if (keypressed  == "40"){
        down();
        console.log("down");
        
        
        }
        if (keypressed  == "37"){
            left();
            console.log("left");
            
            
            }
            if (keypressed  == "39"){
                right();
                console.log("right");
                
                
                }
}

function up(){
if(rover_y>=0){

rover_y=rover_y-10;
console.log("when up is pressed x is" + rover_x + "y is" + rover_y);
uploadbackground();
uploadrover();
}
}
function down(){
    if(rover_y<=500){
    
    rover_y=rover_y+10;
    console.log("when down is pressed x is" + rover_x + "y is" + rover_y);
    uploadbackground();
    uploadrover();
    }
    }
function left(){
        if(rover_x>=0){
        
        rover_x=rover_x-10;
        console.log("when left is pressed x is" + rover_x + "y is" + rover_y);
        uploadbackground();
        uploadrover();
        }
        }
    function right(){
            if(rover_x<=700){
            
            rover_x=rover_x+10;
            console.log("when right is pressed x is" + rover_x + "y is" + rover_y);
            uploadbackground();
            uploadrover();
            }
            }