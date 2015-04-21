function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
};

function Property(propId, sqFoot, costPerFoot){
	this.propId = propId;
	this.sqFoot = sqFoot;
	this.costPerFoot = costPerFoot;
}


function makeProperty(){
	var propId = randomNumber(50,500);
	var sqFoot = randomNumber(800,3000);
	var costPerFoot = randomNumber(5,50);
	var property = new Property(propId, sqFoot, costPerFoot);
	return property;
}





$(document).ready(function (){
	$("#generate").on("click", function(){
		var property = makeProperty();
		console.log(property, property.propId, property.sqFoot);


		var el = "<div><tr><td>Property ID: " + property.propId + "</td><td>" + property.sqFoot + " Sq. Ft. </td><td>$" + property.costPerFoot + "/sq.ft. </td><td><button class='remove'>Remove</button></td></tr></div>";

		$("#propTable").append(el);
		el = $("#propTable").children().last();
		el.hide().slideDown();
	});

	$("#propTable").on("click", ".remove", function(){
		$(this).parent().slideUp(function(){
			$(this).remove();
		});
	});
});

/*	function thingFadeToggle(element){
		element.fadeToggle("slow", function(){
			thingFadeToggle(element);
		});
	}

	$("#ourList").on("click", ".removeButton", function(){
		thingFadeToggle($(this).parent());
		});
	});

*/