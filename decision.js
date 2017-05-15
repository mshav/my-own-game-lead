var gamebox1 = document.querySelector("#gamebox1");
var addbutton = document.querySelector("#adddata");
var final = document.querySelectorAll('.gameblock');


console.log(final);
gamebox1.addEventListener("change", function(){
var word = gamebox1.value;

final[0].classList.remove('off');
final[1].classList.remove('off');
final[2].classList.remove('off');
final[3].classList.remove('off');
final[4].classList.remove('off');
final[5].classList.remove('off');
final[6].classList.remove('off');
final[7].classList.remove('off');
final[8].classList.remove('off');


if(word === "action"){
  final[1].classList.add('off');
  final[2].classList.add('off');
  final[3].classList.add('off');
  final[4].classList.add('off');
  final[5].classList.add('off');
  final[6].classList.add('off');
  final[7].classList.add('off');
  final[8].classList.add('off');

}

else if(word === "action-adventure"){
  final[0].classList.add('off');
  final[2].classList.add('off');
  final[3].classList.add('off');
  final[4].classList.add('off');
  final[5].classList.add('off');
  final[6].classList.add('off');
  final[7].classList.add('off');
  final[8].classList.add('off');

}

else if(word === "Role-playing"){
  final[0].classList.add('off');
  final[1].classList.add('off');
  // final[2].classList.add('off');
   final[3].classList.add('off');
  final[4].classList.add('off');
  final[5].classList.add('off');
  final[6].classList.add('off');
  final[7].classList.add('off');
  final[8].classList.add('off');




}
else if(word === "strategy"){
  final[0].classList.add('off');
  final[1].classList.add('off');
  final[2].classList.add('off');
  final[4].classList.add('off');
  final[5].classList.add('off');
  final[6].classList.add('off');
  final[7].classList.add('off');
  final[8].classList.add('off');

}

else if(word === "sport"){
  final[0].classList.add('off');
  final[1].classList.add('off');
  final[2].classList.add('off');
  final[3].classList.add('off');
  final[5].classList.add('off');
  final[6].classList.add('off');
  final[7].classList.add('off');
  final[8].classList.add('off');

}

else if(word === "family"){
  final[0].classList.add('off');
  final[1].classList.add('off');
  final[2].classList.add('off');
  final[3].classList.add('off');
  final[4].classList.add('off');
  final[6].classList.add('off');
  final[7].classList.add('off');
  final[8].classList.add('off');

}

else if(word === "kids"){
  final[0].classList.add('off');
  final[1].classList.add('off');
  final[3].classList.add('off');
  final[2].classList.add('off');
  final[4].classList.add('off');
  final[5].classList.add('off');
  final[7].classList.add('off');
  final[8].classList.add('off');

}

else if(word === "adults"){
  final[0].classList.add('off');
  final[1].classList.add('off');
  final[2].classList.add('off');
  final[3].classList.add('off');
  final[4].classList.add('off');
  final[5].classList.add('off');
  final[6].classList.add('off');
  final[8].classList.add('off');

}

 else if(word === "game kings"){
   final[0].classList.add('off');
   final[1].classList.add('off');
   final[2].classList.add('off');
   final[3].classList.add('off');
   final[4].classList.add('off');
   final[5].classList.add('off');
   final[6].classList.add('off');
   final[7].classList.add('off');

 }







gamebox1.value = " ";
localStorage.setItem(word ,gamebox1.value)

});
