let oul = document.getElementsByClassName("box")[0].getElementsByTagName("ul")[0]
let oli = document.getElementsByClassName("box")[0].getElementsByTagName("li")[0]
let but1 = document.getElementsByClassName("but1")[0]
let but2 = document.getElementsByClassName("but2")[0]
let OLI = document.getElementsByClassName("dian")[0].getElementsByTagName("li")

let a = 1
let win = 100;
var i = 0
let w = true

but2.onclick = function() {
	//				console.log(2);
	if(w) {
		w = false
		a++
		i++
		//				console.log(i)

		if(i == OLI.length) {
			i = 0
		}
		for(let k = 0; k < OLI.length; k++) {
			OLI[k].id = ""
		}
		OLI[i].id = "li-1"

		oul.style.left = -(a) * win + "%"
		oul.style.transition = "1s"
		setTimeout(function() {
			w = true
			if(oul.style.left == -win * 6 + "%") {
				a = 1;
				oul.style.left = -1 * win + "%";
				oul.style.transition = "";
			}
		}, 1000);
	}
	setTimeout(w, 1000)
}

but1.onclick = function() {
	//			console.log(i+" ")
	if(w) {
		//						console.log(1)
		w = false
		a--;

		i = i - 1
		if(i < 0) {
			i = 4
		}
		for(let k = 0; k < OLI.length; k++) {
			OLI[k].id = ""
		}
		OLI[i].id = "li-1"

		oul.style.left = -a * win + "%"
		oul.style.transition = "1s"
		//				console.log(oul.style.left)
		setTimeout(function() {
			if(oul.style.left == 0 + "%") {
				a = 5
				oul.style.left = -5 * win + "%";
				oul.style.transition = "";
			}
			w = true
		}, 1000);
	}
	setTimeout(w, 1000)

}
let Oli = document.getElementsByClassName("box-1")[0].getElementsByTagName("li")
for(y = 0; y < Oli.length; y++) {
	Oli.length = y;
	Oli[y].onmouseover = function() {
		if(y > 0) {
			this.style.backgroundColor = " rgba(0, 0, 0, 0.3)"
		}
	}

	//
	//
	//
	Oli[y].onmouseout = function() {

		if(y > 0) {
			this.style.backgroundColor = " rgba(0, 0, 0, 0)"
		}
	}
}

for(let n = 0; n < OLI.length; n++) {

	OLI[n].onmouseover = () => {
		oul.style.left = -(n - 1 + 2) * win + "%";
		oul.style.transition = "1s"
		console.log(n)
		//						console.log(a)
		i = n

		for(let k = 0; k < OLI.length; k++) {
			OLI[k].id = ""
		}
		OLI[n].id = "li-1"
	}
}