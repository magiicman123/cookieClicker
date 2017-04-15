var game = {
	cookies:0,
	cps:0
};


var addCookie = function(e){
	var keyCode = e.keyCode;
	if(keyCode == 32){
		game.cookies++;
		oneCycleFlag= false
	}
}


setInterval(function(){
	document.getElementById('stats').innerHTML = "<br>ccookies:"+Math.round(String(Number(game.cookies)))+"<br>cookies per second:"+game.cps;
	game.cookies+=game.cps/10;
},100);
function moreCps(a,b){
	console.log('called');
	if(b <= game.cookies){
		game.cookies-=b;
		game.cps+=a;
	}
}
document.addEventListener('keyup', addCookie)