let oli = document.getElementsByClassName("con-1")[0].getElementsByTagName("li")
let oul = document.getElementsByClassName("con-2")[0].getElementsByTagName("ul")
let ow = document.getElementsByClassName("con-2")[0].getElementsByTagName("li")
let oulID = document.getElementById("ul-1");
for(let i = 0; i < oli.length; i++) {
	oli[i].onclick = function() {
		oulID = document.getElementById("ul-1");
		for(k = 0; k < oli.length; k++) {
			oli[k].id = "";
			oul[k].id = "";
			OLI[2].id = "";
			OLI[1].id = ""
			oul[k].style.transition = "none";
			oul[k].style.zIndex = 0;
			oul[k].style.left = 0 + "px";
		}
		oli[i].id = "li_1";
		oul[i].id = "ul-1";
		oul[i].style.left = 0 + "px";
		oul[i].setAttribute("name", i)
		oul[i].style.transition = "1s"
		oul[i].style.zIndex = 99;
		OLI[0].id = "li-3"
	}
}
let OLI = document.getElementsByClassName("con-3")[0].getElementsByTagName("li")
for(let k = 0; k < OLI.length; k++) {
	OLI[k].onclick = function() {
		oulID = document.getElementById("ul-1");
		for(w = 0; w < OLI.length; w++) {
			OLI[w].id = ""
		}
		oulID.style.left = -(k) * 1200 + "px";
		//					oul[1].style.left = -(k) * 1200 + "px";
		//					oul[2].style.left = -(k) * 1200 + "px";
		//					oul[3].style.left = -(k) * 1200 + "px";
		oulID.style.transition = "1s";
		OLI[k].id = "li-3";
		console.log(ow)
	}
}

function ajax(method, url, data,fn) {
    let htp = null;
    try {
        htp = new XMLHttpRequest()
    }
    catch (err) {
        htp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    if (method == "get") {
        htp.open(method, url +"?"+ data);
        htp.send()
    } else {
        htp.open(method, url);
        htp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        htp.send(data)
    }
    htp.onreadystatechange = function () {
        if (htp.readyState == 4 && htp.status == 200) {
            fn(htp.responseText)
        }

    }
}
var odiv = document.getElementsByClassName("zhuti-3")[0];
for(let i = 0; i < ow.length; i++) {
	ow[i].index = i;
	ow[i].onclick = function() {
		let index = this.index
		ajax("get", "js/tupian.json", "", function(data) {
			json = JSON.parse(data);
			odiv.innerHTML = `<img src="${json[index].src}"/>
					<h1>${json[index].h1}</h1>
					<p>${json[index].p}</p>`
			console.log(1)
		})
	}
}