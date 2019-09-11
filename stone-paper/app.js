var player_1 = document.querySelector('img').scr;
var start = document.querySelector('#start');
var count1 = document.querySelector('#score1');
var count2 = document.querySelector('#score2');
var count3 = parseInt(count1.innerHTML);
var count4 = parseInt(count2.innerHTML);
var nonClick =document.querySelectorAll('.choice');
var round  =  document.querySelector('#countRound');
var winner =  document.querySelector('#winner');
var count_round = 1;

start.addEventListener("click", () => {
	start.style.display = 'none';
		player();
});


		
//main function

function player(){
	document.querySelector('#score').style.display = 'flex';
	document.querySelector('#option').style.display = 'flex';
	var card = document.querySelectorAll('.card');
	card.forEach( option => {
		option.addEventListener('click' , (event) => {
			//to store ID of element
			var select = event.target.id;
			select = select.toLowerCase();
			document.querySelector('#number').style.display="block";
			 palyer_1 = document.querySelector('#number').src ="images/"+ select+".png"; 
			 var card2 = document.querySelectorAll('.card2');
            computer(select);
		    
		});
	});
}




function computer(select) {
			 option3=["stone","paper", "scissor"];
		     var ran = Math.floor(Math.random()*3);
		     document.querySelector('#number2').style.display="block";
			 player_1=document.querySelector('#number2').src ="images/"+option3[ran]+".png";
              round.innerHTML= count_round++;
			 roundWinner(select ,option3[ran])
            }
//winner's conditions

function roundWinner(select , ran) {

	if(select == ran) {

	}
	if(select == 'stone'){

        if(ran == 'paper'){
        	count4++;
        	count2.innerHTML=count4;
        }

        else if(ran == 'scissor'){
        		count3++;
        		count1.innerHTML=count3;
        }
}
        if(select == 'paper'){
	        if(ran == 'stone'){
	        	count3++;
	        	count1.innerHTML=count3;
	        }

	        else if(ran == 'scissor'){
	        	count4++;
	        	count2.innerHTML=count4;
	        }
}

        if(select == 'scissor'){
	        if(ran == 'stone'){
	        	count4++;
	        	count2.innerHTML=count4;
	        }

	        if(ran == 'paper'){
	        	count3++;
	        	count1.innerHTML=count3;
	        }	
}

finalWinner( count3, count4)
}

function finalWinner( count3, count4) {
	if( count3 == 3){
		winner.innerHTML = `player win the game in ${count_round-1} round `;
		reset();
	}

 if( count4 == 3){
		winner.innerHTML = `computer win the game in ${count_round-1} round `;
		reset();
	}
}


function reset() {
	
	nonClick.forEach( option => {
		option.style.pointerEvents = "none";
		document.querySelector('#option').style.display = 'none';
		 document.querySelector('#number2').style.display = 'none';
		 document.querySelector('#number').style.display = 'none';
		
});
}