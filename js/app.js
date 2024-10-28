const Monopoly = 1;
const TicketToRide = 2;
const Takenoto = 3;

function updateStatus(Jogo){
    let jogoAlugado = Jogo.getElementsByTagName('a').item(0).text == 'Devolver';
    let btn = Jogo.querySelector('a');
    let image = Jogo.querySelector('div.dashboard__item__img');
    if (jogoAlugado){
        btn.classList.remove('dashboard__item__button--return');
        btn.text = 'Alugar';
        image.classList.remove('dashboard__item__img--rented');
    }
    else{
        btn.classList.add('dashboard__item__button--return');
        btn.text = 'Devolver';  
        image.classList.add('dashboard__item__img--rented');   
    }
}

function alterarStatus(Jogo){
    if (Jogo == Monopoly){
        let btnMonopoly = document.getElementById('game-1');
        updateStatus(btnMonopoly);
    }   
    else if (Jogo == TicketToRide){
        let btnTicketToRide = document.getElementById('game-2');
        updateStatus(btnTicketToRide);
    }
    else if (Jogo == Takenoto){
        let btnTakenoto = document.getElementById('game-3');
        updateStatus(btnTakenoto);
    }
}