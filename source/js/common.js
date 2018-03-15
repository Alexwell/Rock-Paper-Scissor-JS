window.addEventListener("DOMContentLoaded", init);
function init(){
	var btnPlay = document.getElementById("js-btn-play"),
			resultP = document.getElementById("js-result");

	btnPlay.addEventListener("click", game, false);

	/*--------main function-----------*/
	function game(){
		var usrInput = prompt("Input: rock, paper or scissors"),
				usrChoice = usrInputHandler(usrInput),
				computerChoice = " ",
				result = " ";

		if (usrChoice == -1) {
			alert("Incorrect input, lets try again");
			return;
		}
		computerChoice = computerChoiceAction();
		result = compare(usrChoice, computerChoice);
		resultP.innerHTML = "You choice: "+ usrChoice +", computer choice: " + computerChoice + "<br>" + result;
	}

	function computerChoiceAction(){
		var randomInt = randomInteger(1, 4);
			switch (randomInt){
				case 1:
				case 2:
					return "scissors";
					break;

				case 3:
					return "rock";
					break;

				default:
						return "paper";
			}
	}
	
	function usrInputHandler(usrInput){
		var patternRock = /^[rRкК]/,
				patternPaper = /^[pPбБ]/,
				patternScissors = /^[sSнН]/ ;
		if (patternScissors.test(usrInput)) return "scissors";
		else if (patternRock.test(usrInput)) return "rock"; 
		else if (patternPaper.test(usrInput)) return "paper";
		else return -1;
	}

	function compare(usr, computer){
		if (usr == computer) return "Draw";
		else if (usr == "scissors") {
			if (computer == "paper") return "You win";
			else return "Computer win";
		}
		else if (usr == "rock") {
			if (computer == "scissors") return "You win";
			else return "Computer win";
		}
		else if (usr == "paper") {
			if (computer == "rock") return "You win";
			else return "Computer win";
		}
	}
	
	function randomInteger(min, max) {
		var rand = min - 0.5 + Math.random() * (max - min + 1)
		rand = Math.round(rand);
		return rand;
	}
}