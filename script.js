function render (data){
	var html = "<div class='review_comment'><span>"+data.name+"</span><br><span>"+data.date+"</span><br><p>"+data.comment+"</p></div>"
	$('#reviews').append(html);

}
$(document).ready(function(){
	var coment=Array();	
	for (var i = 0; i < coment.length; i++) {
		render(coment[i]);
	}

	$('#submit').click(function(){
		var addobj= {
			name: $('#name').val(),
			date: $('#date').val(),
			comment: $('#comment').val(),	
		};
		console.log(addobj);
		coment.push(addobj);
		render(addobj);
	});
});