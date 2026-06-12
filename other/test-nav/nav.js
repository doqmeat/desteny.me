const imgEle = document.querySelector("img");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

const cats = [
	{
		path: "imgs/1.jpg",
		alt: "img 1",
	},
	{
		path: "imgs/2.jpg",
		alt: "img 2",
	},
	{
		path: "imgs/3.jpg",
		alt: "img 3",
	},
];

console.table(cats);

function prev() {
	btnNext.style.display = "inline-block";
	// extract current img
	let currentImg = imgEle.getAttribute("src");
	let currentIdx = currentImg.slice(5, -4) - 1;
	imgEle.setAttribute("src", cats[currentIdx - 1].path);

	if (currentIdx - 1 == 0) {
		btnPrev.style.display = "none";
	}
}

function next() {
	// extract current img
	btnPrev.style.display = "inline-block";
	let currentImg = imgEle.getAttribute("src");
	let currentIdx = currentImg.slice(5, -4) - 1;

	if (currentIdx + 1 != cats.length) {
		imgEle.setAttribute("src", cats[currentIdx + 1].path);
	}

	if (currentIdx + 2 == cats.length) {
		btnNext.style.display = "none";
	}
}
