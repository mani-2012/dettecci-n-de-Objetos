function setup() {
    cuadro=createCanvas(500,400);
    cuadro.position(470,169);
    vidio.hide();
}
function preload() {
    vidio=createVideo("Video proyecto.mp4");
}
function draw() {
    image(vidio,0,0,500,400);
}
function empieza() {
    model=ml5.objectDetector("cocossd",come);
}
function come() { 
    document.getElementById("LISTO").innerHTML="DETECTANDO LOS OBJETOS DE ESTE VIDEO";
    console.log("listo calispto :)");
    vidio.loop();
    vidio.speed(1);
    vidio.volume(1);
    
}
function pausa(params) {
    document.getElementById("LISTO").innerHTML="SE A DETENIDO EL VIDEO. ESPERANDO...";
    vidio.pause();
    vidio.speed(0);
    vidio.volume(0);
}