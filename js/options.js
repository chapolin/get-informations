var bindActions = function() {
	$list = $("ul");

	$(".new input").bind('blur keyup',function(e) {
	  if (e.type == 'blur' || e.keyCode == '13') {
	    var item = $(this).val();
			
	    if(item !== "") {
	      var listitem = '<li>' + 
					'<a class="check-toggle">' + '<i></i>' + '</a><div class="item">' + item + '</div></li>';
					
				$(this).val('').parent().after(listitem);
				$(this).focus();
				
				insertValue(item);
	    }
	  }
	});
};

var buildHtml = function() {
	itensData = getValue();
	
	$("ul.itens").val('');
	
	for(var i in itensData) {
		var listitem = '<li>' + 
			'<a class="check-toggle" data-name="' + escape(itensData[i]) + '">' + '<i></i>' + '</a><div class="item">' + itensData[i] + '</div></li>';
			
			$("ul.itens").after(listitem);
	}
};

$(document).ready(function() {
	bindActions();
	buildHtml();
	
	$(document).on('click', '.check-toggle', function() {
		itensData = getValue(), idItem = $(this).attr("data-name"),
		indiceToRemove = $.inArray(unescape(idItem), itensData);
		
		if(indiceToRemove !== -1) {
			itensData.splice(indiceToRemove, 1);
			
			localStorage.setObj("itensData", itensData);
		}
		
		$(this).parent().remove();
	});
});
