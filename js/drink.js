var json = [{
	id:'1',
		img: 'drinkimg1.png',
		title: '薄荷雪顶巧克力'
	},
	{
		id:'2',
		img: 'drinkimg2.png',
		title: '西柚薄荷茶'
	},
	{
		id:'3',
		img: 'drinkimg3.png',
		title: '青柠迷迭香茶'
	},
	{
		id:'4',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	},
	{
		id:'5',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	},
	{
		id:'6',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	},
	{
		id:'7',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	},
	{
		id:'8',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	},
	{
		id:'9',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	},
	{
		id:'10',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	},

	{
		id:'11',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	},
	{
		id:'12',
		img: 'drinkimg4.png',
		title: '橘橙绞股蓝茶'
	}
]

function main() {
	let img = '';
	let li = '';
	let imgarr = [];
	let liarr = [];
	let span = '';
	let k = 0;
	let num = 0;
	let value = 0;
	for(let i = 0; i < json.length; i++) {
		if(i % 4 == 0 && i > 0) {
			imgarr[k] = img;
			liarr[k] = li;
			k++;
			span += `<span>${k}</span>`;
			img = ''
		}
		img += `<img src="img/${json[i].img}"  data-id="${json[i].id}" alt="">`;
		li += `<li><a href="#">${json[i].title}</a></li>`;
	}
	imgarr[k] = img;
	liarr[k] = li;
	span += `<span>${k + 1}</span>`;
	html = `${imgarr[0]}<ul>${liarr[0]}</ul>`;
	$('.drink').html(html);
	$('.num').html(span);
	$('.num span:first-child').css('color', 'black');
	let $span = $('.num').children();
	$('.right').click(function() {
		$span[value].removeAttribute('style');
		num++;
		if(num > k) {
			num = k;
		}
		value = num;
		$span[num].style.color = 'black';
	})
	$('.left').click(function() {
		$span[value].removeAttribute('style');
		num--;
		if(num < 0) {
			num = 0;
		}
		value = num;
		$span[num].style.color = 'black';
	})
	let arimg = document.getElementsByClassName("drink")[0].getElementsByTagName("img")
	for(i = 0; i < arimg.length; i++) {
		arimg[i].onclick = function(ev) {
			console.log(1)
			var ev = window.event || ev;
			var target = ev.target || ev.srcElement;
			//					console.log(target)
			if(target.getAttribute("data-id")) {
				window.open("drink_xiang.html?" + "id=" + target.getAttribute("data-id"))
			}
		}
	}
}
main();