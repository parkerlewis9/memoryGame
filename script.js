var squares = document.querySelectorAll(".square");	
var oldColors = ["red", "yellow", "blue", "red", "teal", "white", "violet", "yellow", "green", "teal", "grey", "violet", "white", "green", "blue", "grey"]; 

function random(arr) {
	for (var i = 0; i < arr.length; i++) {
		var randomIndex = Math.floor(Math.random() * arr.length)
		var temp = arr[i];
		arr[i] = arr[randomIndex];
		arr[randomIndex] = temp;
	};
	return arr;

};

var colors = random(oldColors);





for (var i = 0; i < squares.length; i++) {
	squares[i].setAttribute("data-gameColor", colors[i]);
	// squares[i].setAttribute("data-flipped", "no");
}
var counter = 0;

//Counter
var score = document.querySelector("h1");


var one = document.body.querySelector("#a");
one.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var two = document.body.querySelector("#b");
two.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var three = document.body.querySelector("#c");
three.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var four = document.body.querySelector("#d");
four.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var five = document.body.querySelector("#e");
five.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var six = document.body.querySelector("#f");
six.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var seven = document.body.querySelector("#g");
seven.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var eight = document.body.querySelector("#h");
eight.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var nine = document.body.querySelector("#i");
nine.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var ten = document.body.querySelector("#j");
ten.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var eleven = document.body.querySelector("#k");
eleven.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var twelve = document.body.querySelector("#l");
twelve.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var thirteen = document.body.querySelector("#m");
thirteen.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var fourteen = document.body.querySelector("#n");
fourteen.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var fifteen = document.body.querySelector("#o");
fifteen.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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

var sixteen = document.body.querySelector("#p");
sixteen.addEventListener("click", function() {
	var color = this.getAttribute("data-gameColor");
	this.style.backgroundColor = color;
	this.className = this.className + " clicked";
	var clicked = document.querySelectorAll(".clicked")
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










//Reset Button
var button = document.querySelector("button");
button.addEventListener("click", function() {
	window.location.reload(true)
})