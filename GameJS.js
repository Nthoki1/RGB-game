var numBox = 6;
var colors = [];
var pickedColor;
var box = document.querySelectorAll(".box1");
var colorDisplay = document.getElementById("colordisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetbutton");
var modeButtons = document.querySelectorAll(".mode");





init();

function init()
{
	for(var i = 0; i <modeButtons.length; i++)
 	{
 		modeButtons[i].addEventListener("click",function()
 		{
	 		modeButtons[0].classList.remove("selected");
	 		modeButtons[1].classList.remove("selected");
	 		this.classList.add("selected");
	 		this.textContent === "Easy" ? numBox = 3 : numBox = 6;
	 		reset();
 		})

 	}
 	
	for(var i = 0; i < box.length; i++)
	{
		box[i].addEventListener("click",function()
		{
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}

			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!!";
			}

		})
	}
	reset();

}
 




 
function reset()
 {
 	colors = generateRandomColors(numBox);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < box.length; i++)
	{
		if (colors[i])
		{	
			box[i].style.display = "block";
			box[i].style.backgroundColor = colors[i];
		}
		else
		{
			box[i].style.display = "none";
		}	
	}
	h1.style.backgroundColor = "steelblue";
 }

resetButton.addEventListener("click",function()
{
	reset();
})


















function changeColors(color)
{
	for (var i = 0; i < box.length; i++) 
	{
		box[i].style.backgroundColor = color;
	}
}





function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i = 0; i < num; i++)
	{

		arr.push(randomColor());
	}

	return arr;
}





function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}