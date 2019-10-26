let element = document.querySelector('main .container');
const url = 'https://restcountries.eu/rest/v2/all';
var info = {};

fetch(url).then(responce => responce.json()).then(function(data){
   // console.log(Object.getOwnPropertyNames(data[0]).filter(item => typeof data[item] === 'function'));
    for(var i=0;i<data.length;i++){
        info[i] = data[i];
    }
    
  /*  console.log(Object.keys(data[0]));
    
    createElement('div','af',element);
    addHtml();*/
});
/*function createElement(elementType,classN,parrentElement){
    var newElement = document.createElement(elementType);
    newElement.className = classN;
    parrentElement.appendChild(newElement);
}
function addHtml(){
    var ele = document.querySelector('main .af');
    var country = info[0];
    ele.innerHTML += country['name'];
    createElement('img','flag',ele);
    var img = document.querySelector('main .af img');
    img.setAttribute('src',country['flag']) ;
}*/
window.onload = init;
function createElement(elementType,classN,parrentElement,attrType,attrVal){
    var newElement = document.createElement(elementType);
    newElement.className = classN;
    newElement.setAttribute(attrType,attrVal);
    parrentElement.appendChild(newElement);
}
function addWrapper(e){
    createElement('div','country',element,'id',e['name']);
    console.log(info);
    console.log(e['name']);
}
function shortView(e){
    var parentSelector = document.querySelector('main .container .country');
   // console.log(parentSelector);
    createElement('div','short-view',parentSelector,'id',e['alpha2code']+'-'+'short-view');
}
function fullView(e){
    var parentSelector = document.querySelector('main .container .country');
    createElement('div','full-view',parentSelector,'id',e['alpha2code']+'-'+'full-view');
}
function image(e,ele){
    var parentSelector = document.querySelector('main .container .country'+' '+ele);
   // console.log(parentSelector);
    createElement('img','flag',parentSelector,'src',e['flag']);

}
function headIng(e,ele){
    var parentSelector = document.querySelector('main .container .country'+' '+ele);
    createElement('h3','heading',parentSelector,'id',e['alpha2code']+'-'+'name');
}
function paraGraph(e,ele){
    var parentSelector = document.querySelector('main .container .country'+' '+ele);
    createElement('p','para',parentSelector,'id','');
}
function init(){
   
    for(var i=0;i<info.length;i++){
        console.log(info.length);
        addWrapper(info[i]);
        shortView(info[i]);
        fullView(info[i]);
        image(info[i],'.short-view');
        headIng(info[i],'.short-view');
        paraGraph(info[i],'.short-view');
    }
    
}
function addHtml(){

}