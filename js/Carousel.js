const btnPause = document.querySelector(".gallery-controls-pause_2");
const btnPlay = document.querySelector(".gallery-controls-play");
const btnNext =  document.querySelector('.gallery-controls-next')
const timer = setInterval(function () {
     btnNext.click();
}, 5000);

class Carousel {
constructor() {
  this.pausePlay(timer);
}
  // mise a jour du carrousel a l'aide des classes css
  setCurrentState(target, selected, previous, next, first, last) {

    selected.forEach(el => {
      el.classList.remove('gallery-item-selected');

      target.className === 'gallery-controls-previous btn btn-primary'
          ? el.classList.add('gallery-item-next')
            : el.classList.add('gallery-item-previous');
    });

    previous.forEach(el => {
      el.classList.remove('gallery-item-previous');

     target.className === 'gallery-controls-previous btn btn-primary'
       ? el.classList.add('gallery-item-selected')
            : el.classList.add('gallery-item-first');
    });

    next.forEach(el => {
      el.classList.remove('gallery-item-next');

      target.className === 'gallery-controls-previous btn btn-primary'
       ? el.classList.add('gallery-item-last')
        : el.classList.add('gallery-item-selected');
    });

    first.forEach(el => {
      el.classList.remove('gallery-item-first');

      target.className === 'gallery-controls-previous btn btn-primary'
        ? el.classList.add('gallery-item-previous')
          : el.classList.add('gallery-item-last');
    });

    last.forEach(el => {
      el.classList.remove('gallery-item-last');

      target.className === 'gallery-controls-previous btn btn-primary'
        ? el.classList.add('gallery-item-first')
          : el.classList.add('gallery-item-next');

    });
  }


  // ecoute de l'evenement click sur les boutons
  useControls() {
    const triggers = [
        document.querySelector('.gallery-controls-previous')
      , document.querySelector('.gallery-controls-next')
    ];

    triggers.forEach(control => {
      control.addEventListener('click', () => {
        const target = control;
        const selectedItem = document.querySelectorAll('.gallery-item-selected');
        const previousSelectedItem = document.querySelectorAll('.gallery-item-previous');
        const nextSelectedItem = document.querySelectorAll('.gallery-item-next');
        const firstCarouselItem = document.querySelectorAll('.gallery-item-first');
        const lastCarouselItem = document.querySelectorAll('.gallery-item-last');

        this.setCurrentState(target, selectedItem, previousSelectedItem, nextSelectedItem, firstCarouselItem, lastCarouselItem);
      });
    });
  }

  // simule un appuye sur un bouton avec les flèches du clavier
  useKeyboard() {
    document.addEventListener('keydown', (event) => {
      let specificSelector;
      switch (event.code) {
        case 'ArrowRight' :
          specificSelector = '.gallery-controls-next';
          break;
        case 'ArrowLeft' :
          specificSelector = '.gallery-controls-previous';
          break;

      }

      if (specificSelector !== undefined) {
        document.querySelector(specificSelector)
       .click();


      }
    });
  }

// defillement automatique du carroussel




  pausePlay(timer){

    btnPause.addEventListener('click', ()=>{
      clearInterval(timer);
      btnPause.classList.replace("gallery-controls-pause_2", "gallery-controls-pause");
      btnPlay.classList.replace("gallery-controls-play", "gallery-controls-play_2");
    });
    btnPlay.addEventListener("click", (event) => {
     setTimeout(function  () {
       timer = setInterval(function () {
         btnNext.click();
       }, 5000)

     });
      btnPause.classList.replace("gallery-controls-pause", "gallery-controls-pause_2");
      btnPlay.classList.replace("gallery-controls-play_2", "gallery-controls-play");


    });
  }

}


