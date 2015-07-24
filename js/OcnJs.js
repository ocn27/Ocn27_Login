//检测平台
var p = navigator.platform;

var avatar = document.getElementById("avatar");
var Ocn_Menu = document.getElementById("Ocn_Menu");
var login = document.getElementById("login");
var homepage = document.getElementById("homepage");

function icon_Out() {
	avatar.className = 'avatar avatar_Click';

	Ocn_Menu.style.cssText = "display:block; -webkit-animation: Ocn_Menu_Out 1.5s ease 0s forwards; -moz-animation: Ocn_Menu_Out 1.5s ease 0s forwards; ";
	login.style.cssText = "display:block; -webkit-animation: login_Out 1.5s ease 0s forwards; -moz-animation: login_Out 1.5s ease 0s forwards; ";
	homepage.style.cssText = "display:block; -webkit-animation: homepage_Out 1.5s ease 0s forwards; -moz-animation: homepage_Out 1.5s ease 0s forwards; ";
	avatar.setAttribute("onMouseUp", "icon_In();");
}
function icon_In() {
	avatar.className = 'avatar avatar_Click';

	Ocn_Menu.style.cssText = "display:block; -webkit-animation: Ocn_Menu_In 1.5s ease 0s forwards; -moz-animation: Ocn_Menu_In 1.5s ease 0s forwards; ";
	login.style.cssText = "display:block; -webkit-animation: login_In 1.5s ease 0s forwards; -moz-animation: login_In 1.5s ease 0s forwards; ";
	homepage.style.cssText = "display:block; -webkit-animation: homepage_In 1.5s ease 0s forwards; -moz-animation: homepage_In 1.5s ease 0s forwards; ";
	avatar.setAttribute("onMouseUp", "icon_Out();");
}
function get_Reset() {
	avatar.className = 'avatar';
}

function homepage_Out() {
	icon_In();
	window.location.href="#page2"; 
}

function go_Back() {
	window.location.href="#page1"; 
}
function login_Out() {
	window.location.href="http://ocn27.com/wordpress/wp-login.php"; 
}

function Ocn_Menu_Out() {
	window.location.href="https://github.com/ocn27"; 
}