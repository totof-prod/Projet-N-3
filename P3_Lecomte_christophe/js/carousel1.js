const galleryContainer = document.querySelector('.gallery-container');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

  // mise a jour du carrousel a l'aide des classes css
  setCurrentState(target, selected, previous, next, first, last) {

    selected.forEach(el => {
      el.classList.remove('gallery-item-selected');

      if (target.className === 'gallery-controls-previous btn btn-primary') {
        el.classList.add('gallery-item-next');
      } else {
        el.classList.add('gallery-item-previous');
      }
    });

    previous.forEach(el => {
      el.classList.remove('gallery-item-previous');

      if (target.className === 'gallery-controls-previous btn btn-primary') {
        el.classList.add('gallery-item-selected');
      } else {
        el.classList.add('gallery-item-first');
      }
    });

    next.forEach(el => {
      el.classList.remove('gallery-item-next');

      if (target.className === 'gallery-controls-previous btn btn-primary') {
        el.classList.add('gallery-item-last');
      } else {
        el.classList.add('gallery-item-selected');
      }
    });

    first.forEach(el => {
      el.classList.remove('gallery-item-first');

      if (target.className === 'gallery-controls-previous btn btn-primary') {
        el.classList.add('gallery-item-previous');
      } else {
        el.classList.add('gallery-item-last');
      }
    });

    last.forEach(el => {
      el.classList.remove('gallery-item-last');

      if (target.className === 'gallery-controls-previous btn btn-primary') {
        el.classList.add('gallery-item-first');
      } else {
        el.classList.add('gallery-item-next');
      }
    });
  }


  // ecoute de l'evenement click sur les boutons
  useControls() {
    const triggers = [document.querySelector('.gallery-controls-previous')
                      , document.querySelector('.gallery-controls-next')];

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
        let myButton = document.querySelector(specificSelector);
        myButton.click();


      }
    });
  }
// defillement automatique du carroussel
  timer(){
    setInterval(function () {
       const myButton = document.querySelector('.gallery-controls-next');
       myButton.click();
    }, 10000);
  }

}


