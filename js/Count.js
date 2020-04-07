class Count{

    countdown() {
        let time_in_minutes = 20;
        let current_time = Date.parse(sessionStorage.getItem("date"));
        let deadline = new Date(current_time + time_in_minutes*60*1000);


        function time_remaining(endtime){
            let t = Date.parse(endtime) - Date.parse(new Date());
            let seconds = Math.floor( (t/1000) % 60 );
            let minutes = Math.floor( (t/1000/60) % 60 );
            let hours = Math.floor( (t/(1000*60*60)) % 24 );
            let days = Math.floor( t/(1000*60*60*24) );
            return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
        }

        function run_clock(id,endtime){
            let clock = document.getElementById(id);

            function update_clock(){
                let t = time_remaining(endtime);

                clock.innerHTML = 'il vous reste '+t.minutes+' minutes et '+t.seconds+' ' +
                    ' secondes avant que la réservation arrive a son terme';
                if(t.total<=0){
                    clearInterval(timeinterval);
                    sessionStorage.removeItem('date');
                    clock.innerHTML = "Votre reservation est terminée";
                    element.style.width = '70%';
                    elt.style.display = 'flex';
                    document.getElementById("reserve_1").classList.replace("not_visible", "visible");
                    document.querySelector("#stop").classList.replace("visible","not_visible");
                }

            }
            update_clock(); // run function once at first to avoid delay
            let timeinterval = setInterval(update_clock,1000);
            document.addEventListener("click", () => {
                let el = document.querySelector('#stop');
                if (el && el.contains(event.target)) {
                    clearInterval(timeinterval);
                }
            });


        }

        run_clock('countdown',deadline);
    }

}