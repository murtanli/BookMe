

/*
// Определение функции для отображения текущего времени 
function displayTime() {
	var element = document.getElementById("clock"); // Найти элемент с id="clock" 
  const k = document.getElementById('but');
  var l = document.getElementById('num');
  k.onclick = (event) => {
    let n = "Hello";
    l.innerHTML = n;
  }
  
	var now = new Date();	// Получить текущее время
  //alert(now.getHours.toString)
  if(now.getHours === 12){
      alert("ho");
  }
	element.innerHTML = now.toLocaleTimeString(); // Отобразить его 
	setTimeout(displayTime, 1000);	// Вызвать снова через 1 сек
}

window.onload = displayTime; // Начать отображение времени после загрузки документа
*/



function res_pr(symbol) {
    var input = document.getElementById('res')

    if(symbol == "del"){
        input.value="";
    } else{
        if(symbol == "c"){
            let max = input.value.length;
            let h = input.value.substr(0, max - 1);
            input.value = "";
            input.value += h;
        } else{
            input.value += symbol;
        }
        
    }
}

function result() {
    var txt = document.getElementById('res').value;
    let result = document.getElementById('res');
    let res2;
    //var re = new RegExp("[^+/*-]+");
    let num1 = txt.match("[^+/*-]+");

    let p = txt.split(num1).join('');
    let num2 = p.match("[^+/*-]+");
    
    let mat = txt.match("[+/*-]+");
    switch(String(mat)) {
        case '+':
             res2 = Number(num1) + Number(num2); 
            break;
        case '-':
             res2 = Number(num1) - Number(num2);
            break;
        case '*':
             res2 = Number(num1) * Number(num2);
            break;
        default:
            alert(mat);
    }
    result.value = "";
    result.value += res2;  
}

function disp(){
    var but_1 = document.getElementById('but_1');
    var but_2 = document.getElementById('but_2');
    var but_3 = document.getElementById('but_3');
    var but_4 = document.getElementById('but_4');
    var but_5 = document.getElementById('but_5');
    var but_6 = document.getElementById('but_6');
    var but_7 = document.getElementById('but_7');
    var but_8 = document.getElementById('but_8');
    var but_9 = document.getElementById('but_9');
    var but_0 = document.getElementById('but_0');

    var but_plus = document.getElementById('but_+');
    var but_minus = document.getElementById('but_-');
    var but_mult = document.getElementById('but_*');
    var but_del = document.getElementById('but_del');
    var but_c = document.getElementById('but_c');
    var result_btn = document.getElementById('result_btn');


    but_1.onclick = (event1) =>{
        photo();
        res_pr("1");
    }
    but_2.onclick = (event2) =>{
        res_pr("2");
    }
    but_3.onclick = (event1) =>{
        res_pr("3");
    }
    but_4.onclick = (event2) =>{
        res_pr("4");
    }
    but_5.onclick = (event1) =>{
        res_pr("5");
    }
    but_6.onclick = (event2) =>{
        res_pr("6");
    }
    but_7.onclick = (event1) =>{
        res_pr("7");
    }
    but_8.onclick = (event2) =>{
        res_pr("8");
    }
    but_9.onclick = (event1) =>{
        res_pr("9");
    }
    but_0.onclick = (event1) =>{
        res_pr("0");
    }
    
    but_plus.onclick = (event1) =>{
        res_pr("+");
    }
    but_minus.onclick = (event2) =>{
        res_pr("-");
    }
    but_mult.onclick = (event1) =>{
        res_pr("*");
    }
    but_del.onclick = (event1) =>{
        res_pr("del");
    }
    but_c.onclick = (event1) =>{
        res_pr("c");
    }
    result_btn.onclick = (event1) =>{
        result();
        
    }
    
}
window.onload = disp;