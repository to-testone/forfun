const theButton = document.getElementById("theButton");

function ranom() {
    let posX = Math.floor(Math.random() * 10) * 10;
    let posY = Math.floor(Math.random() * 10) * 10;

    theButton.style.left = posX + '%';
    theButton.style.top = posY + '%';
}

function catched() {
    alert("All right, I give up. You win.")
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}