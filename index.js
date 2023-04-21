function handlePress(event){
    //busca o botão selecionado, lembrando de this repassa todas as propriedades existentes
    var pressedButton = event.key;
    //console.log(pressedButton);


    switch (pressedButton){
        case "w":
            buttonAnimation(pressedButton);
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            buttonAnimation(pressedButton);
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            buttonAnimation(pressedButton);
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            buttonAnimation(pressedButton);
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            buttonAnimation(pressedButton);
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            buttonAnimation(pressedButton);
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            buttonAnimation(pressedButton);
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log('nenhum som inserido para a tecla ' + pressedButton);
            break;
    };

     
    //this.style.color = "white";
};


function buttonAnimation(currentKey){
    //para pesquisar a classe do botão, precisamos adicionar o "." na frente quando estamos utilizando querySelector()
    var activeButton = document.querySelector("." + currentKey);
    //adiciona uma classe ao elemento encontrado na linha anterior
    activeButton.classList.add("pressed");
    
    /*
    setTimeout é uma js function que permite que um código seja executado por alguns milissegundos,
    como primeiro argumento, recebe um código, no caso uma função que vai remover a classe inserida
    como segundo argumento, vai receber um tempo em milissegundos, no nosso caso, dará uma
    sensação de animação
    */
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


document.addEventListener("keydown", handlePress);