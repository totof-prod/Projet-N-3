const element = document.querySelector('#mapid');
const elt = document.querySelector('.map');
const div = document.getElementById("reserve_1");


document.addEventListener("click", () => {
    let el = document.querySelector('.reserved');
    if (el && el.contains(event.target)) {
        element.style.width = '70%';
        elt.style.display = 'flex';
        div.classList.replace("reserve", "reserve_2");


    }
});
addEventListener('click', name =>{

} )


document.addEventListener("click", event => {
    let el = document.querySelector('#reserved_bike');
    if (el && el.contains(event.target)) {
        document.getElementById('#reserved_nom').value = sessionStorage.setItem('nom');
        document.getElementById('#reserved_prenom').value = sessionStorage.setItem('prenom');


    }
});


