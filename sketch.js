//preparar e rodar um código
function setup() {
  createCanvas(500, 500);//criar tela
   background("red");
}

//função por desenhar
function draw() {
  stroke("blue");
  fill("yellow");
  
   if(mouseIsPressed){
      rect(mouseX, mouseY, 40, 40);
   }
} 