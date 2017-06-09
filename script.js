// Add your javascript here
$(function() {

alert(1);


 $(".changeKeyType").on('click', function(e) {
	    $("#hiddenInput").val(0);
	    var button = $(this);
	    idPrefix = (this.id).split('-')[0];
	    var inputsuffix = button.text().trim();
	    var toggleText = (inputsuffix == '123' ? 'abc' : '123');
	    var toggleType = (inputsuffix == '123' ? 'number' : 'text');
	    $("#hiddenInput").attr('type', toggleType);
	    originalVal = $("#" + idPrefix).val();
	    $(this).text(toggleText);
	    oldLength = 0;
	    if ($("#hiddenInput").val() !== undefined) {
	        oldLength = $("#hiddenInput").val().length;
	    }
	    $("#" + idPrefix).addClass("activeInput");
	    $("#" + idPrefix).on('focus', function() {
	        button.text('abc');
	        $("#hiddenInput").attr('type', 'number');
	    });
	
	    maxLength = $("#" + idPrefix).attr("maxlength");
	    $("#hiddenInput").focus();
	});
	
	$(".changeKeyInput").on('click focus', function() {
	    $("#hiddenInput").focus().val(0);
	    $("#hiddenInput").attr('type', 'number');
	    idPrefix = (this.id).split('-')[0];
	    originalVal = $(this).val();
	    oldLength = 0;
	    if ($("#hiddenInput").val() !== undefined) {
	        oldLength = $("#hiddenInput").val().length;
	    }
	    maxLength = $(this).attr("maxlength");
	});

  $("#hiddenInput").off().on('keyup', function(event) {
//		alert('keyup triggered');
		var actualLength = $("#" + idPrefix).val().length;
		var newVal = $(this).val();
		var newLength = newVal.length;
		if (actualLength < maxLength && newLength == 2) {
			originalVal += newVal[newLength - 1];
			$("#" + idPrefix).val(originalVal);
			newVal = newVal.slice(0, -1);
			$(this).val(newVal);
		} else if(actualLength == maxLength && newLength >= 2){
			$(this).val(0);
		} else if(newLength == 0){
//			alert('backspace');
			originalVal = originalVal.slice(0, -1);
			$("#" + idPrefix).val(originalVal)
			$(this).val(0);
		}
	});




});
