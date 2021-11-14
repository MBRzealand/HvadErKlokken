document.onload = showTime()

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(h.toString().length<2){
        h = "0"+ h;
    }

    if(m.toString().length<2){
        m = "0"+ m;
    }

    if(s.toString().length<2){
        s = "0"+ s;
    }

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();



    var time = h + ":" + m + ":" + s;
    var date = day + "/" + month + "/" + year;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("MyDateDisplay").innerHTML = date;

    setTimeout(showTime, 1000);
}

async function postRequest() {

    let data = {
        "time": document.getElementById("MyClockDisplay").innerText,
        "date": document.getElementById("MyDateDisplay").innerText,
    }

    let postRequest = await fetch("/time", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

}