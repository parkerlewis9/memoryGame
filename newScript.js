//Guessing Game

// Random Colors
var oldColors = ["red", "green", "blue", "orange", "yellow", "violet", "teal", "white", "red", "green", "blue", "orange", "yellow", "violet", "teal", "white"]

function random(arr) {
	for (var i = 0; i < arr.length; i++) {
		var randomIndex = Math.floor(Math.random() * arr.length)
		var temp = arr[i];
		arr[i] = arr[randomIndex];
		arr[randomIndex] = temp;
	}
	return arr


}

var colors = random(oldColors)

// Setting Color Attribute to Each Div and Make an Array of the IDs
var squares = document.querySelectorAll(".square");
var ids = [];
for (var j = 0; j < squares.length; j++) {
	squares[j].setAttribute("data-gameColor", colors[j]);
	var myAttribute = squares[j].getAttribute("id");
	ids.push(myAttribute);
}


//Adding click event to all of them
var counter = 0;
var score = document.querySelector("h1");

for(var k = 0; k < ids.length; k++) {
	var clickableDiv = document.querySelector("#" + ids[k])
	clickableDiv.addEventListener("click", function() {
//Change Color of the Card
		var color = this.getAttribute("data-gameColor");
		this.style.backgroundColor = color;
//Give it a clicked class for later
		this.className = this.className + " clicked";
		var clicked = document.querySelectorAll(".clicked")
//Check how many clicks have happened
		if(clicked.length > 1) {
			var attribute0 = clicked[0].getAttribute("data-gameColor");
			var attribute1 = clicked[1].getAttribute("data-gameColor");
			if (attribute0 === attribute1) {
				counter++;
				if (counter === 1) {
					score.innerHTML = counter + " match!"
				} else {
					score.innerHTML = counter + " matches!"
				}
				clicked[0].className = "square flipped";
				clicked[1].className = "square flipped";
			} else {
				window.setTimeout(function() {
					clicked[0].style.backgroundColor = "black";
					clicked[1].style.backgroundColor = "black";
					clicked[0].className = "square";
					clicked[1].className = "square";
				}, 1000);
			};
		};
		// Congrats
		var doneClicked = document.querySelectorAll(".flipped");
		var contain = document.querySelector(".container");
		if (doneClicked.length === 16) {
			window.setTimeout(function() {
				contain.innerHTML = "Congrats! You win!"
			}, 1000)

		};

	});

};



















