
var traingle, traingle2; //these are global variables

function preload() {
  traingle = loadImage("./Traingle2.png");
  traingle2 = loadImage("./Traingle2.jpg");
}

function setup() {
  canvas_context=createCanvas(1200,600);
  background(0,0,255,255); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var counter=0;counter<10;counter=counter+1){
    if(counter%2==0){
      image(traingle,counter*150,0,300,600);
    }
    else{
      //image(traingle2,counter*0,0,0,0);
    }

  }

//  save(canvas_context, "dragonImage.jpg")
  //https://p5js.org/reference/#/p5/save

}
