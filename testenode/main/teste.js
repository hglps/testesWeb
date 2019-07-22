// text, btn, invalid, img

let text = document.getElementById("text");
let btn = document.getElementById("btn");
let invalid = document.getElementById("invalid");
let img = document.getElementById("img");

function getImg(num){
    return "img/" + num + ".png";
}

function showPkmn() {
    if(isNaN(text.value) || parseInt(text.value) <1 || parseInt(text.value) > 493){
        img.style.display = "none";
        invalid.textContent = "tem nao esse pokemano, meu vingador";
        invalid.style.display='block'
    }
    else{
        var num = parseInt(text.value);
        invalid.style.display="none";
        text.textContent = ""
        img.src = getImg(num);
        img.style.display='block';
        console.log("successfully changed! :))")

    }
}

