let element = document.querySelector('main .container');
const url = 'https://restcountries.eu/rest/v2/all';
var info = {};

fetch(url).then(responce => responce.json()).then(function(data){
    for(var i=0;i<data.length;i++){
        addWrapper(data[i]);
        shortView(data[i]);
        fullView(data[i]);
        image(data[i],'.short-view');
        headIng(data[i],'.short-view');
        paraGraph(data[i],'.short-view');
        addHtml(data[i],'h3','name');
        addHtml(data[i],'p','population');
        addHtml(data[i],'p','region');
        addHtml(data[i],'p','capital');
    }
  //  console.log(Object.keys(data[0]));
});

window.onload = init;
function createElement(elementType,classN,parrentElement,attrType,attrVal){
    var newElement = document.createElement(elementType);
    newElement.className = classN;
    newElement.setAttribute(attrType,attrVal);
    parrentElement.appendChild(newElement);
}
function addWrapper(e){
    createElement('div','country',element,'id',e['alpha2Code']);
}
function shortView(e){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']);
    var id = e['alpha2Code']+'-'+'short-view';
    createElement('div','short-view',parentSelector,'id',id);
}
function fullView(e){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']);
    var id = e['alpha2Code']+'-'+'full-view';
    createElement('div','full-view',parentSelector,'id',id);
}
function image(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele);
    createElement('img','flag',parentSelector,'src',e['flag']);
}
function headIng(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele);
    createElement('h3','heading',parentSelector,'id',e['alpha2Code']+'-'+'name');
}
function paraGraph(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele);
    createElement('p','para',parentSelector,'id','population');
    createElement('p','para',parentSelector,'id','region');
    createElement('p','para',parentSelector,'id','capital');
}
function init(){
    
}
function addHtml(e,ele,key){
    var selector = document.querySelector('#'+e['alpha2Code']+'-short-view '+ele);
  //  console.log(selector);
    if(ele === 'h3'){
        selector.innerHTML += e[key];
    }else if(ele === 'p'){
        var paraSelector = document.querySelector('#'+e['alpha2Code']+'-short-view '+'#'+key);
           // console.log(paraSelector);
        if(key === 'population'){
            paraSelector.innerHTML += '<b>Population</b>: '+e['population'];
        }else if(key === 'region'){
            paraSelector.innerHTML += '<b>Region</b>: '+e['region'];
        }else if(key === 'capital'){
            paraSelector.innerHTML += '<b>Capital</b>: '+e['capital'];
        }       
    }
}