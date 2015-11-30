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
	window.location.href="http://ocn27.com/demo/wechat_baidu/wechat.html"; 
}


//jquery
$(document).ready(function(){
	
	// go left or right model
	$("#Ocn_Menu").click(function(){
		Ocn_Menu_Out();
	});
	$("#go_Left").click(function(){
		Ocn_Menu_Back();
	});
	// go OcnPlayer
	$("#music").click(function(){
		window.open("http://ocn27.com/demo/Ocn_player/index.html");
	});
	// go wechat
	$("#wechat").click(function(){
		window.open("http://ocn27.com/demo/wechat/index.html");
	});
	// train_demo
	$("#train_demo").click(function(){
		window.open("http://ocn27.com/demo/train_demo/index.html");
	});
	// go Login page
	$("#Wp_Login").click(function(){
		window.open("http://ocn27.com/wordpress/wp-login.php");
	});
	// go GitHub
	$("#GitHub").click(function(){
		window.open("https://github.com/ocn27");
	});
	
	

	function Ocn_Menu_Out() {
		$.fn.fullpage.moveSlideRight();
		
		var time = 0;
		for(var i=0;i<=8;i++){
			time+=200;
			icon_out(i, time);
	    }
	    setTimeout(function() {
			$("#go_Left").fadeToggle();
	    }, 2000);
	}

	function icon_out(i, time){
		setTimeout(function() {
			$(".icon").eq(i).stop().fadeIn();
	    }, time);
	}

	function Ocn_Menu_Back() {
		$.fn.fullpage.moveSlideLeft();
		$("#go_Left").stop().fadeToggle();
        $(".icon").stop().fadeOut();
	}

});