// 初始化
var left = document.getElementsByClassName('leftarr')[0];
var right = document.getElementsByClassName('rightarr')[0];
var images = document.getElementsByClassName('newteaslideshow')[0];
left.onclick = function() {
	leftlunbo(images.childNodes);
};
right.onclick = function() {
	rightlunbo(images.childNodes);
};

function leftlunbo(img) {
	var s = img[3].src;

	for(var i = 3; i < img.length; i += 2) {
		if(i < 7) {
			var t = img[i + 2].src;
			img[i].src = t;
		}
		if(i == 7) {
			img[i].src = s;
		}
	}
}

function rightlunbo(img) {
	var s = img[7].src;
	for(var i = 7; i > 2; i -= 2) {
		if(i > 3) {
			var t = img[i - 2].src;
			img[i].src = t;
		}
		if(i == 3) {
			console.log(s);
			img[i].src = s;
			console.log(s);
		}
	}
}
ajax("get", "json.json", "", function(data) {
	str = JSON.parse(data);
	console.log(str)
	let oUL = document.getElementsByClassName("newsslideshow")[0];
	for(const i in str) {
		oUL.innerHTML += `<li>
							<ul>
								<li>
									<a href="#" data-id="${str[i].id}">${str[i].h1}</a>
									<section>
										<p>${str[i].time}</p>
										<span>${str[i].p}</span>
									</section>
								</li>
							</ul>
						</li>
						`
	}

})
let oUL = document.getElementsByClassName("newsslideshow")[0];
oUL.onclick = function(ev) {
	var ev = window.event || ev;
	var target = ev.target = ev.srcElement;
	console.log(target)
	if(target.getAttribute("data-id")) {
		window.open("xiangqing.html?id=" + target.getAttribute("data-id"))
	}
}
let dot = document.getElementsByClassName("dot")[0].getElementsByTagName("li");
let oul = document.getElementsByClassName("newsslideshow")[0].getElementsByTagName("li")
for(let i = 0; i < dot.length; i++) {
	dot[0].onmouseover = function() {
		for(let j = 0; j < oul.length; j++) {
			oul[j].style.left = 0;

		}
		dot[0].style.backgroundColor = "blue"
		dot[1].style.backgroundColor = ""
	}
	dot[1].onmouseover = function() {
		for(let j = 0; j < oul.length; j++) {
			oul[j].style.left = -520 + "px"
		}
		dot[1].style.backgroundColor = "blue"
		dot[0].style.backgroundColor = ""
	}
}