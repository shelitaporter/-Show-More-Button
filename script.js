let getEinstein = new XMLHttpRequest();
getEinstein.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {
        let einsteinObject = JSON.parse(this.responseText);
        document.getElementById("name").innerHTML = einsteinObject.name;
        document.getElementById("birthday").innerHTML = einsteinObject.birthday;
    }
};
getEinstein.open("GET", "einstein.json", true);
getEinstein.send();

function showBio(){
    getEinstein.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            let einsteinObject = JSON.parse(this.responseText);
            document.getElementById("bio").innerHTML = einsteinObject.bio;
        }
    };
    getEinstein.open("GET", "einstein.json", true);
    getEinstein.send();

}
