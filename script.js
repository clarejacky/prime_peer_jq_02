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


		var el = "<div id='row'><div id='propertyId'>Property ID: " + property.propId + "</div><div id='sqft'>" + property.sqFoot + " Sq. Ft. </div><div id='pricesqft'>$" + property.costPerFoot + "/sq.ft.</div><div id='button'><button id='remove'>Remove</button></div></div>";

		$("#propTable").append(el);
		el = $("#propTable").children().last();
		el.hide().slideDown();
		$("#generate").prop('Click again');
	});

	$("#propTable").on("click", "#button", function(){
		$(this).parent().slideUp(function(){
			$(this).remove();
		});
	});
	/*$("#generate").mouseover(function (){
		$("generate").css("background-color", "yellow");
		
	});*/
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