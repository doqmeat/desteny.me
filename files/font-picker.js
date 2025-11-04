const bodyDoc = document.querySelector("body");
const fontSelect = document.querySelector("#font-picker");

checkFont();

function switchFont(font) {
	bodyDoc.style.fontFamily = font;
	localStorage.setItem("fontName", font);
	switch (font) {
		case "ds":
			bodyDoc.style.fontSize = "20px";
			break;
		case "ms pgothic":
			bodyDoc.style.fontSize = "17px";
			break;
		case "arial":
			bodyDoc.style.fontSize = "15px";
		default:
			break;
	}
}

function checkFont() {
	if (localStorage.getItem("fontName") == null) {
		localStorage.setItem("fontName", "ms pgothic");
	} else {
		fontSelect.value = localStorage.getItem("fontName");
		switchFont(localStorage.getItem("fontName"));
	}
}
