let message = document.getElementsByClassName("message");
let count = document.getElementById("count");

let counter = 10;

let t = () => {
    count.innerHTML = counter;
    if (counter == 0) {
        message[0].style.display = "none";
        clearInterval(z);
    }
    counter--;
}

let z = setInterval(t, 1000);



