function playGame(){





    let choice = document.querySelector('input[name="move"]:checked');

    if(!choice){
        alert("You must pick one first");
        return false;
    }

    let user = choice.value;

    let options = ["Rock","Paper","Scissors","Spock"];
    let computer = options[Math.floor(Math.random()*4)];

    document.getElementById("userChoice").innerHTML = user;
    document.getElementById("compChoice").innerHTML = computer;

    if(computer == "Spock"){
        alert("You have Lost, better luck next time!");
        document.body.style.background="red";
        return false;
    }

    if(user == computer){
        alert("You have tied, there is no winner, try again");
        document.body.style.background="blue";
        return false;
    }

    if(
        (user=="Rock" && computer=="Scissors") ||
        (user=="Paper" && computer=="Rock") ||
        (user=="Scissors" && computer=="Paper")
    ){
        alert("You have won, congrats!");
        document.body.style.background="green";
    }
    else{
        alert("You have Lost, better luck next time!");
        document.body.style.background="red";
    }

    return false;
}





function checkText(){

    let msg = document.getElementById("msg").value;

    let bad = /[^a-zA-Z0-9\s]/;

    if(bad.test(msg)){
        alert("You cant use special characters");
        return false;
    }

    window.location="success.html";
    return false;
}