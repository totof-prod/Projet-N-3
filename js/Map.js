let mymap = L.map('mapid').setView([49.0523939,2.0357109], 13);
const element = document.querySelector('#mapid');
const elt = document.querySelector('.map');
const div = document.getElementById("reserve_1");


class Map {

   maps(){
       L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                   maxZoom: 18,
                   id: 'mapbox/streets-v11'
                   ,
                   tileSize: 512,
                   zoomOffset: -1,
                   accessToken: 'pk.eyJ1IjoidG90b2Y3ODEzMCIsImEiOiJjazdubHJkMngwMnhlM29wNHJ0ZWdxY2xrIn0.VMp_abdVTsXwOnaL0kD-Rw'
       }).addTo(mymap);
       mymap.scrollWheelZoom.disable();
       mymap.on('click', () => { mymap.scrollWheelZoom.enable();});
       mymap.on('mouseout', () => { mymap.scrollWheelZoom.disable();});

   }


    createMarker(){
         let request = new XMLHttpRequest();
            request.open("GET", "https://api.jcdecaux.com/vls/v1/stations?contract=cergy-pontoise&apiKey=0c98a5816edaa1d864af832de0d377f5575b4f4c");


        request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            let responses = JSON.parse(request.response);
            responses.forEach(response => {
                let { position: { lat, lng }, name, status, available_bikes: bike, address: zip, bike_stands: place  } = response;

                const str1 = 'Station: Ouverte<br />Reste';
                const str2 = 'vélos';

                if (status === 'OPEN') {
                    let myIcon = L.icon({
                        iconUrl: 'icones/icons_vert.png',/**/
                        iconSize: [38, 45],
                        iconAnchor: [0, 0],
                    });
                    L.marker([lat, lng], { icon: myIcon })
                        .addTo(mymap)
                        .bindPopup(`${str1.concat(' ', bike, ' ', str2)}<br /><button type="button" class="btn btn-primary reserved">Réserver</button>`)
                        .on('popupopen', event => {

                            event.popup._container.querySelector('.reserved').addEventListener('click', () => {
                                element.classList.replace("mapid","mapid_70");
                                elt.style.display = 'flex';
                                div.classList.replace("not_visible", "visible");
                                document.getElementById('zip').innerHTML = zip;
                                document.getElementById('bike').innerHTML = bike;
                                document.getElementById('place').innerHTML = place;
                                document.querySelector("#stop").classList.replace("visible", "not_visible");
                                document.querySelector("#reserved_success").classList.replace("visible","not_visible");
                                document.querySelector("#reserved_message") .classList.replace("visible", "not_visible");
                                window.location="#reserve_1";


                            });

                        });
                }
                if( bike<= 3 ){
                    let  myIcon = L.icon({
                        iconUrl: 'icones/icons_orange.png',
                        iconSize: [38, 45],
                        iconAnchor: [0, 0]
                    });
                    L.marker([lat, lng], { icon: myIcon })
                        .addTo(mymap)
                        .bindPopup(str1.concat(' ', bike,' ' , str2) +
                            "<br /><button type=\"button\" id=\"reserved\" class=\"btn btn-primary reserved\">Réserver</button>")
                        .on('popupopen', event => {

                            event.popup._container.querySelector('#reserved').addEventListener('click', () => {
                                element.style.width = '70%';
                                elt.style.display = 'flex';
                                div.classList.replace("not_visible", "visible");
                                document.getElementById('zip').innerHTML = zip;
                                document.getElementById('bike').innerHTML = bike;
                                document.getElementById('place').innerHTML = place;
                                document.querySelector("#stop").classList.replace("visible", "not_visible");
                                document.querySelector("#reserved_success").classList.replace("visible","not_visible");
                            });
                        });
                }
                    if( bike <= 0 ){
                        let  myIcon = L.icon({
                            iconUrl: 'icones/icons_rouge.png',
                            iconSize: [38, 45],
                            iconAnchor: [0, 0]
                        });

                        L.marker([lat, lng], {
                            icon: myIcon,
                             alt: name
                         }).addTo(mymap).bindPopup('Station: Ouverte<br />plus de vélo disponible')
                    }
                    if (status === "Closed"){
                        let  myIcon = L.icon({
                            iconUrl: 'icones/icons_noir.png',
                            iconSize: [38, 45],
                            iconAnchor: [0, 0]
                        });

                        L.marker([lat, lng], {
                            icon: myIcon,
                            alt: name
                         }).addTo(mymap).bindPopup('Station: Fermé');

                    }


                })
            }
        };

        request.send();

    }
}








