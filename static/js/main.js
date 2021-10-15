function myFunction(myid) {
    var x = document.getElementById(myid);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault()
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    console.log(instances)
});



display = () => {
    var iframehai = document.getElementById("textarea1").value
    document.getElementById("map").innerHTML = iframehai
}


function deleteit(id) {
    const urlhai=window.location.host
    fetch('/del/'+ id, { // assuming the backend is hosted on the same server
        method: 'PUT',
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: "ok",
    }).then(function (response) {
        console.log(response.json().then(data => {
            location.reload()
        }))
    })
}
