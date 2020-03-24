let mymap = L.map('mapid').setView([49.0523939,2.0357109], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidG90b2Y3ODEzMCIsImEiOiJjazdubHJkMngwMnhlM29wNHJ0ZWdxY2xrIn0.VMp_abdVTsXwOnaL0kD-Rw'
}).addTo(mymap);

let request = new XMLHttpRequest();
request.open("GET", "https://api.jcdecaux.com/vls/v1/stations?contract=cergy-pontoise&apiKey=0c98a5816edaa1d864af832de0d377f5575b4f4c");


request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        let responses = JSON.parse(request.response);

        /*for (let i in response) {

            let lat = response[i].position.lat;
            let lng = response[i].position.lng;
            let name = response[i].name;
            let status = response[i].status;
            let bike = response[i].available_bikes;
            let zip = response[i].address;
            const str1 = "Station: Ouverte<br />Reste";
            const str2 = 'vélos';


            if (status === "OPEN"){

                let  myIcon = L.icon({
                    iconUrl: 'icones/icons_vert.png',
                    iconSize: [38, 45],
                    iconAnchor: [0, 0]});


                let layer = L.marker([lat, lng], {
                    icon: myIcon,
                    alt: name
                }).addTo(mymap)
                    .bindPopup(str1.concat(' ', bike,' ' , str2) +
                        "<br /><button type=\"button\" class=\"btn btn-primary reserved\">Réservé</button>");


                document.addEventListener("click", () => {
                    let el = document.querySelector('.reserved');
                    if (el && el.contains(event.target)) {

                        document.getElementById('zip').innerHTML = zip ;
                        document.getElementById('bike').innerHTML = bike ;
                    }
                });
            }*/

        responses.forEach(response => {
            let {position: {lat, lng}, name, status, available_bikes: bike, address: zip} = response
            const str1 = 'Station: Ouverte<br />Reste'
            const str2 = 'vélos'
            if (status === 'OPEN') {
                let myIcon = L.icon({
                    iconUrl: 'icones/icons_vert.png',
                    iconSize: [38, 45],
                    iconAnchor: [0, 0],
                })
                let layer = L.marker([lat, lng], {icon: myIcon, alt: name})
                    .addTo(mymap)
                    .bindPopup(` ${bike} ${str2}<br /><button type="button" class="btn btn-primary reserved">Réservé</button>`)
                document.addEventListener('click', event => {
                    let el = document.querySelector('.reserved')
                    if (el && el.contains(event.target)) {
                        console.log(layer)
                        document.getElementById('zip').innerHTML = zip
                        document.getElementById('bike').innerHTML = bike
                    }
                })
            }
        });


    }
};












               /* if( bike<= 3 ){
                    let  myIcon = L.icon({
                        iconUrl: 'icones/icons_orange.png',
                        iconSize: [38, 45],
                        iconAnchor: [0, 0]});

                    L.marker([lat, lng], {
                        icon: myIcon,
                        alt: name
                    }).addTo(mymap)
                        .bindPopup(str1.concat(' ', bike,' ' , str2) +
                            "<br /><button type=\"button\" class=\"btn btn-primary reserved\">Réservé</button>");

                }
                if( bike <= 0 ){
                    let  myIcon = L.icon({
                        iconUrl: 'icones/icons_rouge.png',
                        iconSize: [38, 45],
                        iconAnchor: [0, 0]});

                    L.marker([lat, lng], {
                        icon: myIcon,
                        alt: name
                    }).addTo(mymap).bindPopup('Station: Ouverte<br />plus de vélo disponible')
                }
                if (status === "Closed"){
                    let  myIcon = L.icon({
                        iconUrl: 'icones/icons_noir.png',
                        iconSize: [38, 45],
                        iconAnchor: [0, 0]});

                    L.marker([lat, lng], {
                        icon: myIcon,
                        alt: name
                    }).addTo(mymap).bindPopup('Station: Fermé');

                }




            }
         

        }

};*/
request.send();








