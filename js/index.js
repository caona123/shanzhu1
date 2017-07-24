$(function() {
	var num = $('.main span').html()
	$(".foot").on('tap', function() {
		if(0<$("#inpo").val()&&$("#inpo").val()<=parseInt(num)&&$("#inpt").val()===$("#inpo").val()) {
			$(".black").css("display", "block")
			$(".window-bottom").on('tap', function() {
				$(".black").css("display", "none")
			})
		}else{
			$(".black").css("display", "none")
		}
	})
})
