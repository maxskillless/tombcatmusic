el = document.querySelector(".scroller-content-title-containter");
text = document.querySelector(".scroller-content-title");
img = document.querySelectorAll("[class=scroller-member-image]");
rects = document.querySelectorAll("[class=scroller-member-rect]");
desc = document.querySelectorAll("[class=scroller-member-wrapper-desc]");
rw = document.querySelectorAll("[class=scroller-member-wrapper-rect]");
member = document.querySelectorAll("[class=scroller-member]");

var onScreen = false

console.log(name)

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

window.onload = function() {
	img.forEach( function(item, index){
		console.log(name[index])
		rects[index].style.width = item.clientWidth + 'px';
		rects[index].style.height = item.clientHeight + 'px';
		rw[index].style.top = -item.clientHeight + 'px'
		desc[index].style.top = -(1.5 * item.clientHeight) + 'px'
		desc[index].style.left = -(0.16 * item.clientWidth) + 'px'
		member[index].style.height = item.clientHeight + 'px'
	})
};

window.onresize = function() {
	img.forEach( function(item, index){
		rects[index].style.width = item.clientWidth + 'px';
		rects[index].style.height = item.clientHeight + 'px';
		rw[index].style.top = -item.clientHeight + 'px'
		desc[index].style.top = -(1.5 * item.clientHeight) + 'px'
		desc[index].style.left = -(0.16 * item.clientWidth) + 'px'
		member[index].style.height = item.clientHeight + 'px'
	})
}
