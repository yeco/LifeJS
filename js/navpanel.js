
var nav = new Nav();


function Nav(){

}

Nav.prototype.init = function(){
	$("#nav").draggable();
	$("#nav a.external").attr('target','_blank');
}