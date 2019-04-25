let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let isClicked = false;
let sClick = false;

let mouseX;
let mouseY;
let color = "black";
let tools = {
	pencil: true,
	pen: false,
	eraser: false
};
let size = document.getElementById("siz").value;

addEventListener("mousemove", mousePos, true);
addEventListener("mousemove", draw, true);
addEventListener("mousedown", click);
addEventListener("click", siClick);
addEventListener("mouseup", noClick);

// setInterval(update, 20);

// function update() {
// 	sizeChange();
// }

// function sizeChange() {
// 	size = document.getElementById("size");
// }

function setPen() {
	tools.pen = true;
	tools.pencil = false;
	tools.eraser = false;
}

function setEraser() {
	tools.pen = false;
	tools.pencil = false;
	tools.eraser = true;
}

function setPencil() {
	tools.pencil = true;
	tools.pen = false;
	tools.eraser = false;
}

function erase() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function noClick() {
	isClicked = false;
}

function click() {
	isClicked = true;
}

function siClick() {
	sClick = true;
}

function mousePos(e) {
	mouseX = e.pageX - 382;
	mouseY = e.pageY - 170;
}

function draw() {
	color = document.getElementById("color").value;
	size = document.getElementById("siz").value;
	size = parseFloat(size);
	if (isClicked == true) {
		if (tools.pencil) {
			ctx.fillStyle = color;
			ctx.fillRect(mouseX, mouseY, size, size);
		} else if (tools.pen) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.arc(mouseX, mouseY, size, size, size * Math.PI);
			ctx.fill();
		} else if (tools.eraser) {
			ctx.fillStyle = "lightgray";
			ctx.fillRect(mouseX, mouseY, size, size);
		}
	} else if (sClick) {
		if (tools.pencil) {
			ctx.fillStyle = color;
			ctx.fillRect(mouseX, mouseY, size, size);
		} else if (tools.pen) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.arc(mouseX, mouseY, size, size, size * Math.PI);
			ctx.fill();
		} else if (tools.eraser) {
			ctx.fillStyle = "lightgray";
			ctx.fillRect(mouseX, mouseY, size, size);
		}
		sClick = false;
	}
}
