
var article=document.querySelector('article');
console.log(article.childNodes[1]);
for (var i=0;i<article.childNodes.length;i+=2){
    console.log(article.childNodes[i].innerHTML='一');
}

// document.querySelector('article').childNodes[1].childNodes[7].childNodes[1];