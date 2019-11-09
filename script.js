let element = document.querySelector('main .container');
const url = 'https://restcountries.eu/rest/v2/all';

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
        addWrapperFullView(data[i]);
        imgFullView(data[i],'.img-btn-grp');
        backButtonFullView(data[i]);
        paraGraphFullView(data[i],'.para-btn-grp');
        buttonsFullView(data[i],'.full-view');
        fullViewAddHtml(data[i],'.heading','');
        fullViewAddHtml(data[i],'p','nativeName');
        fullViewAddHtml(data[i],'p','population');
        fullViewAddHtml(data[i],'p','region');
        fullViewAddHtml(data[i],'p','subregion');
        fullViewAddHtml(data[i],'p','capital');
        fullViewAddHtml(data[i],'p','topLevelDomain');
        fullViewAddHtml(data[i],'p','currencies');
        fullViewAddHtml(data[i],'p','languages');
        buttonID(data[i],'.full-view');
    }
    buttonAddHtml(data);
    search(data);
    viewChanger();
    backbutton();
    countryButton();
})

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
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else if(e['region'] === 'Europe'){
        var parentSelector = document.querySelector('main .container .europe');
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else if(e['region'] === 'Africa'){
        var parentSelector = document.querySelector('main .container .africa');
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else if(e['region'] === 'Americas'){
        var parentSelector = document.querySelector('main .container .america');
        createElement('div','country',parentSelector,'id',e['alpha2Code']);
    }else if(e['region'] === 'Oceania'){
        var parentSelector = document.querySelector('main .container .oceania');
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
    var id = e['alpha3Code']+'-'+'full-view';
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
    createElement('p','para',parentSelector,'class','population');
    createElement('p','para',parentSelector,'class','region');
    createElement('p','para',parentSelector,'class','capital');
}

function addWrapperFullView(e){
    var parentSelector = document.querySelector('#'+e['alpha2Code']+ ' .full-view');
    createElement('div','img-btn-grp',parentSelector,'id','');
    createElement('div','para-btn-grp',parentSelector,'id','');
}

function imgFullView(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele);
    createElement('button','back-button',parentSelector,'val','back-button');
    createElement('img','flag-full-view',parentSelector,'src',e['flag']);
}

function paraGraphFullView(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele);
    createElement('h2','heading',parentSelector,'id','');
    createElement('p','para',parentSelector,'class','nativeName');
    createElement('p','para',parentSelector,'class','population');
    createElement('p','para',parentSelector,'class','region');
    createElement('p','para',parentSelector,'class','subregion');
    createElement('p','para',parentSelector,'class','capital');
    createElement('p','para',parentSelector,'class','topLevelDomain');
    createElement('p','para',parentSelector,'class','currencies');
    createElement('p','para',parentSelector,'class','languages');
    createElement('div','neighbourCountries',parentSelector,'id','');
}

function backButtonFullView(e){
    var elementSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+'.img-btn-grp .back-button');
    elementSelector.innerHTML += '<span><i class="fa fa-long-arrow-left" aria-hidden="true"></i><p>Back</p>';
}

function buttonsFullView(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele+' .neighbourCountries');
    parentSelector.innerHTML += '<h3>Border Countries: </h3>';
    var nbrCtn = e['borders'];
  if(nbrCtn.length > 0){
    for(var i=0;i<nbrCtn.length;i++){
        createElement('button','btn',parentSelector,'value',nbrCtn[i]);
    }
  }
}

function buttonID(e,ele){
    var parentSelector = document.querySelectorAll('main .container '+'#'+e['alpha2Code']+' '+ele+' .neighbourCountries button');
    var nbrCtn = parentSelector ;
    for(var i = 0;i<nbrCtn.length;i++){
        if(nbrCtn[i].tagName === 'BUTTON'){
            nbrCtn[i].setAttribute('id',e['borders'][i]);
        }
    }
}

function fullViewAddHtml(e,ele,key){
    if(ele === 'p'){
        var paraSelector = document.querySelector('#'+e['alpha3Code']+'-full-view '+'.'+key);
        switch(key){
            case 'nativeName':
                paraSelector.innerHTML += '<b>Native Name</b>: '+e['nativeName'];
                break;
            case 'population':
                paraSelector.innerHTML += '<b>Population</b>: '+e['population'];
                break;
            case 'region':
                paraSelector.innerHTML += '<b>Region</b>: '+e['region'];
                break;
            case "subregion":
                paraSelector.innerHTML += '<b>Sub Region</b>: '+e['subregion'];
                break;
            case 'capital':
                paraSelector.innerHTML += '<b>Capital</b>: '+e['capital'];
                break;
            case 'topLevelDomain':
                paraSelector.innerHTML += '<b>Top Level Domain</b>: '+e['topLevelDomain'];
                break;
            case 'currencies':
                paraSelector.innerHTML += '<b>Currencies</b>: '+e['currencies'][0]['name'];
                break;
            case 'languages':
                paraSelector.innerHTML += '<b>Languages</b>: ';
                for(var i=0;i<e['languages'].length;i++){
                    paraSelector.innerHTML +=  ' '+e['languages'][i]['name'];
                }
                break;
        }
    }else {
        var selector = document.querySelector('#'+e['alpha3Code']+'-full-view .para-btn-grp '+ele);
        selector.innerHTML += e['name'];
    }
}

function buttonAddHtml(e){
    var obj = {};
    for(var i=0;i<e.length;i++){
        obj[e[i]['alpha3Code']] = e[i]['name'];
    }
    for(var i=0;i<e.length;i++){
        var selector = document.querySelectorAll('#'+e[i]['alpha3Code']+'-full-view .para-btn-grp .neighbourCountries .btn');
        for(var j=0;j<selector.length;j++){
           selector[j].innerHTML += obj[selector[j].id];
        }
    }
}

function init(){
    themeChanger();
    filter();
}

function addHtml(e,ele,key){
    var selector = document.querySelector('#'+e['alpha2Code']+'-short-view '+ele);
    if(ele === 'h3'){
        selector.innerHTML += e[key];
    }else if(ele === 'p'){
        var paraSelector = document.querySelector('#'+e['alpha2Code']+'-short-view '+'.'+key);
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
        var fullViewSelector = document.querySelectorAll('.country .full-view');
        var headerSelector = document.querySelector('main header .theme-head');
        for(var i of shortViewSelector){
            i.classList.toggle('active');
        }
        selectionSelector.classList.toggle('active');
        inputIconSelector.classList.toggle('active');
        inputSelector.classList.toggle('active');
        bodySelector.classList.toggle('active');
        headerSelector.classList.toggle('active');
        for(var i of fullViewSelector){
            i.classList.toggle('night-mode');
        }     
    })
}

function filter(){
    var selectionSelector = document.querySelector('main header nav #region-selector');
   selectionSelector.addEventListener('input',function(event){
      var containerSelector = document.querySelector('main .container '+'.'+event.target.value);
     var siblingSelector = containerSelector.parentElement.children;
     for(var i of siblingSelector){
         if(i.className !== event.target.value){
            i.style.display = 'none';
         }else {
             i.style.display = 'block';
         }
         
     }
   })
}

function search(data){
    var info = {} ;
    var key = {};
    var searchBoxSelector = document.querySelector('main header nav .searchBox input');
    for(var i=0;i<data.length;i++){
        info[data[i]['name']] = data[i]['alpha2Code'];

    }
    searchBoxSelector.addEventListener('keyup',function(){
       var text;
       var regex;
       if(event.target.value !== ''){
        text = '^'+event.target.value;
        regex = new RegExp(text,'gi');
       }else {
            var allCountrySelector = document.querySelectorAll('main .container .country');
            for(var i of allCountrySelector){
                i.style.display = 'block';
            }
       }
       key = Object.keys(info);
       for(var i=0;i<key.length;i++){
          if(regex.test(key[i]) === true){
           var alphaCode = info[key[i]];
           var countrySelector =  document.querySelector('main .container '+'#'+alphaCode);
           var allCountrySelector = document.querySelectorAll('main .container .country');
           for(var i of allCountrySelector){
               if(i !== countrySelector){
                   i.style.display = 'none';
               }else {
                   i.style.display = 'block';
               }
           }
          }
       }
    })
}

function viewChanger(){
    var elementSelector = document.querySelectorAll('.country .short-view');
    for(var i of elementSelector){
        i.addEventListener('click',function(){
            var elementId = event.currentTarget.parentElement.id;
            var fullViewElement = document.querySelector('#'+elementId+' .full-view');
            fullViewElement.classList.add('active');
            var smallViewSelector = document.querySelectorAll('.country .short-view');
            for(var i of smallViewSelector){
                i.style.display = 'none';
            }
        })
    }
}

function backbutton(){
    var elementSelector = document.querySelectorAll('.country .full-view .img-btn-grp .back-button');
    for(var i of elementSelector){
        i.addEventListener('click',function(){
            event.currentTarget.parentElement.parentElement.classList.remove('active');
            var smallViewSelector = document.querySelectorAll('.country .short-view');
            for(var i of smallViewSelector){
                i.style.display = 'block';
            }
        })
    }
}

function countryButton(){
    var elementSelector = document.querySelectorAll('.country .full-view .para-btn-grp .neighbourCountries .btn');
    for(var i of elementSelector){
        i.addEventListener('click',function(){
            var fullViewSelector = document.querySelectorAll('.country .full-view');
            var allCountrySelector = document.querySelectorAll('main .container .country');
            for(var i of allCountrySelector){
                i.style.display = '';
            }
            for(var i of fullViewSelector){
                i.classList.remove('active');
            }
            var countrySelector = document.querySelector('#'+event.target.value+'-full-view');
            countrySelector.classList.add('active');
        })
    }
}