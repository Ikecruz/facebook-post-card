let emojis = document.getElementsByClassName("emoji");
let reaction = document.querySelector("#reaction");

let obj = { 
    128077: "&#128077; Like", 
    128147: "&#128147; Love", 
    129303: "&#129303; Care",
    128514: "&#128514; Haha",
    128559: "&#128559; Wow",
    128546: "&#128546; Sad",
    128545: "&#128545; Angry"
}

for (let i = 0; i < emojis.length; i++){
    emojis[i].addEventListener('click', () => {
        let key = emojis[i].id;

        reaction.innerHTML = obj[key];
    })
}