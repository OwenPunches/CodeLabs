const multipleButtons = document.querySelectorAll('.btn_onclick');

multipleButtons.forEach((button) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
	button.onclick = function () {
		document.body.style.backgroundColor = "#" + randomColor;
	};
});
