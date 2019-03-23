$(document).ready(function() {

var question = ["Первый вопрос?",
			"What do you think about your mom??)))0",
			"Вопрос",
			"Вопрос",
			"Вопрос",
			"Вопрос",
			"Вопрос",
			"Вопрос",
		" И последний вопрос"],



      result = 0,
      i = 0;
quest.innerHTML = (i + 1) + " " + question[i];






      
answ.onchange = function() { 
   result += +answ.value; 		
   if( i < question.length - 1) {
        answ.options[answ.options.selectedIndex].setAttribute("selected","");
        i++;
        quest.innerHTML = (i + 1) + " " + question[i];
        answ.options[0].setAttribute("selected","selected");
        answ.value = answ.options[0].text;
   }
   else if(result >= 20) {
          res.innerHTML = result + " - Высокий Уровень";
       	alert("Ты Кек"); 
       window.location.href = "chooseTest.html";
    }
      else{
       if(result < 20)    res.innerHTML = result + " - 	Низкий Уровень";
       	alert("Ты не Кек"); 
       window.location.href = "../PhysicsB.html"; 
   }
}

});	