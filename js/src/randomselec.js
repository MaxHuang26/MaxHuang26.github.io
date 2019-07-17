function random(){
var a = parseInt(Math.random()*100);
var b = a%4+1;
if(b==1){
document.getElementById("id").src="crash_cheat_1.js";
}else if(b==2){
document.getElementById("id").src="crash_cheat_2.js";
}else if(b==3){
document.getElementById("id").src="crash_cheat_3.js";
}

}