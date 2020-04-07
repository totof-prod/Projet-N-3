const exampleCarousel = new Carousel;
exampleCarousel.useControls();
exampleCarousel.useKeyboard();
//exampleCarousel.timer();
//exampleCarousel.pausePlay();

const exampleMaps= new Map;
exampleMaps.maps();
exampleMaps.createMarker();

const exampleReserve = new Reserve;
exampleReserve.btn_event();

const name = new Name();
name.nameDisplayCheck();
document.body.onload = name.nameDisplayCheck;

const canvasExample = new Canvas();
canvasExample.InitThis();
canvasExample.clearArea();



