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
    //    console.log(data[i]['region']);
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
    if(e['region'] === 'Asia'){
        var parentSelector = document.querySelector('main .container .asia');
     //   console.log(parentSelector);
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else if(e['region'] === 'Europe'){
        var parentSelector = document.querySelector('main .container .europe');
      //  console.log(parentSelector);
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else if(e['region'] === 'Africa'){
        var parentSelector = document.querySelector('main .container .africa');
      //  console.log(parentSelector);
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else if(e['region'] === 'Americas'){
        var parentSelector = document.querySelector('main .container .america');
     //   console.log(parentSelector);
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else if(e['region'] === 'Oceania'){
        var parentSelector = document.querySelector('main .container .oceania');
      //  console.log(parentSelector);
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else {
        var parentSelector = document.querySelector('main .container .others');
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }
    
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
    themeChanger();
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
function themeChanger(){
    var elementSelector = document.querySelector('main header .theme-head span');
    elementSelector.addEventListener('click',function(){
        var bodySelector = document.querySelector('body');
        var inputSelector = document.querySelector('main header nav .searchBox input');
        var inputIconSelector = document.querySelector('main header nav .searchBox span');
        var selectionSelector = document.querySelector('main header nav #region-selector');
        var shortViewSelector = document.querySelectorAll('main .container .country .short-view');
        for(var i of shortViewSelector){
            i.classList.toggle('active');
        }
        selectionSelector.classList.toggle('active');
        inputIconSelector.classList.toggle('active');
        inputSelector.classList.toggle('active');
        bodySelector.classList.toggle('active');
        elementSelector.parentElement.classList.toggle('active');        
    })
}