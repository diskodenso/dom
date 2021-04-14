function addBands(array) {
    let ul = document.getElementById("band list")
    console.log('ul', ul);
    console.log('array', array);
    for (let i = 0; i < array.lenght; i++) {
        let li = document.createElement("li");
        li.innerText = array[i];
        console.log(li);
        ul.appendChild(li);
    }
}
addBands(["Dire Straits", "Kansas", "Steely Dan"])

function addBands() {
    document.body.style.background = "black";
    document.getElementById("Band List").style.color = "white";
    document.getElementById("myUl").style.color = "white"
}
