el = document.querySelector(".scroller-content-title-containter");
text = document.querySelector(".scroller-content-title")
img = document.querySelectorAll("[class=card-member-small]")
rects = document.querySelectorAll("[class=card-member-rect]")

var onScreen = false

window.addEventListener('scroll', function getRect() {
	var rect = el.getBoundingClientRect();

	var visible = (rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth))

	if ((visible) && (!(onScreen))){
		onScreen = true;
		text.classList.add("visible");
	};
});

img.forEach( function(item, index){
	rects[index].style['width'] = item.clientWidth + "px";
	rects[index].style.height = item.clientHeight + "px";
	console.log(item.style['z-index'])
});
