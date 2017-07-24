(function(win,doc){
	win.onresize = function(){
		change();
	}
	change();
	function change(){
		//320  20px 
		//414  20px
		var oFs = doc.documentElement.clientWidth/(320/20);
		//设置根目录的字体大小
		doc.documentElement.style.fontSize = oFs+"px";
	}
})(window,document);
