
const form = document.querySelector('form');
const firstNameInput = document.querySelector('#reserved_firstName');
const lastNameInput = document.querySelector('#reserved_lastName');
const submitBtn = document.querySelector('#reserved_bike');
const success = "Votre vélo est réserver pour une durée de 20 minute" ;
const canvas = document.querySelector('#signature');


class Reserve {




   btn_event(){

       form.addEventListener('submit', function(e) {
           e.preventDefault();
       });
       //controle si nom et prenom pour fair apparaitre le canvas
       if (localStorage.getItem('firstName') !== null){
           document.getElementById("canvas").classList.replace("not_visible", "visible");
       }else {
           firstNameInput.addEventListener('input', () => {
               document.getElementById("canvas").classList.replace("not_visible", "visible");
           });
       }
       //controle si le canvas est rempli pour faitre apparaitre le bouton de reservation
       canvas.addEventListener('mouseup',() =>{
           document.getElementById("reserved_bike").classList.replace("not_visible", "visible");
       });

       // controle si un date est deja presente
       if (sessionStorage.getItem('date')) {
           const timer = new Count();
           timer.countdown();
          let zip = sessionStorage.getItem('adresse');
           document.querySelector("#reserved_message") .classList.replace("not_visible", "visible");
           document.querySelector("#reserved_success").classList.replace("not_visible","visible");
           document.querySelector("#reserved_success").innerHTML = 'Une reservation est en cours ';
           document.querySelector("#stop").classList.replace("not_visible", "visible");
           document.querySelector("#reserve_1") .classList.replace("visible", "not_visible");
           document.querySelector("#adress") .classList.replace("not_visible", "visible");
           document.querySelector("#countdown") .classList.replace("not_visible", "visible");
           document.querySelector("#adress").innerHTML = "Vélo réservé à la station " + zip ;


       }

       submitBtn.addEventListener('click',()=>{
        // vérife de la date a l'appuie du bouton
           if (sessionStorage.getItem('date')){
               const timer = new Count();
               timer.countdown();
               alert("tu as déjà un reservation");
               document.querySelector("#stop").classList.replace("not_visible", "visible");
               document.querySelector("#reserved_message") .classList.replace("not_visible", "visible");
               document.querySelector("#reserved_success").classList.replace("visible","not_visible");
           }else{
               //sinon lance la reservation
               let data = new Date().toString();
               sessionStorage.setItem("date", data);

               let zip_elt = document.getElementById("zip");
               let zip = zip_elt.innerText || zip_elt.textContent;
               sessionStorage.setItem("adresse", zip );
               document.querySelector("#reserved_success").classList.replace("not_visible","visible");
               document.querySelector("#reserved_success").innerHTML = success;
               document.querySelector("#adress").innerHTML = "Vélo réservé à la station " + zip + " par " + firstNameInput.value + " "
                   + lastNameInput.value ;
               document.querySelector("#stop").classList.replace("not_visible", "visible");
               document.querySelector("#reserve_1") .classList.replace("visible", "not_visible");
               document.querySelector("#adress") .classList.replace("not_visible", "visible");
               document.querySelector("#countdown") .classList.replace("not_visible", "visible");
               document.querySelector("#reserved_message") .classList.replace("not_visible", "visible");
               element.style.width = '100%';
               const timer = new Count();
               timer.countdown();

           }
           //si info deja la => canvas sinon enregistre les info utilisateur
           if(localStorage.getItem('firstName')){

           }else{
               localStorage.setItem('firstName' ,firstNameInput.value );
               localStorage.setItem('lastName', lastNameInput.value);
           }
       });
       document.addEventListener("click", () => {
           let el = document.querySelector('#stop');
           if (el && el.contains(event.target)) {
              sessionStorage.removeItem("date");
              sessionStorage.removeItem("adresse");
              document.querySelector("#reserved_success").classList.replace("not_visible","visible");
              document.querySelector("#reserved_success").innerHTML ="Votre reservation est annuler";
              element.style.width = '100%';
              document.querySelector("#adress") .classList.replace("visible", "not_visible");
              document.querySelector("#countdown") .classList.replace("visible", "not_visible");
              document.querySelector("#reserved_message") .classList.replace("not_visible", "visible");
               document.querySelector("#stop") .classList.replace("visible", "not_visible");

           }

       });

   }




}










