const bodyDoc = document.querySelector("body");
const fontSelect = document.querySelector("#font-picker");
const fontPicker = document.querySelector("select#font-picker");

checkFont();

function switchFont(font) {
	bodyDoc.style.fontFamily = font + ", var(--fonts)";
	localStorage.setItem("fontName", font);
	switch (font) {
		case "ds":
			bodyDoc.style.fontSize = "1.3em";
			break;
		case "dot gothic":
			bodyDoc.style.fontSize = "0.9em";
			bodyDoc.style.wordSpacing = "0px";
			break;
		case "arial":
			bodyDoc.style.fontSize = "1em";
			bodyDoc.style.wordSpacing = "0px";
		default:
			break;
	}
}

function checkFont() {
	if (localStorage.getItem("fontName") == null) {
		localStorage.setItem("fontName", "ds");
	} else {
		fontSelect.value = localStorage.getItem("fontName");
		switchFont(localStorage.getItem("fontName"));
	}
}
