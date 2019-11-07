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
        
    //    console.log(data[i]['region']);
    }
    console.log(data[0]['name']);
    console.log(data[0]['borders']);
    buttonAddHtml(data);
    search(data);
    viewChanger();
    backbutton();
    countryButton();
    console.log(Object.keys(data[0]));
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
    createElement('p','para',parentSelector,'id','population');
    createElement('p','para',parentSelector,'id','region');
    createElement('p','para',parentSelector,'id','capital');
}

function addWrapperFullView(e){
    var parentSelector = document.querySelector('#'+e['alpha2Code']+ ' .full-view');
    createElement('div','img-btn-grp',parentSelector,'id','');
    createElement('div','para-btn-grp',parentSelector,'id','');
 //   console.log(parentSelector);
}

function imgFullView(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele);
    createElement('button','back-button',parentSelector,'val','back-button');
    createElement('img','flag-full-view',parentSelector,'src',e['flag']);
}

function paraGraphFullView(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele);
    createElement('h2','heading',parentSelector,'id','');
    createElement('p','para',parentSelector,'id','nativeName');
    createElement('p','para',parentSelector,'id','population');
    createElement('p','para',parentSelector,'id','region');
    createElement('p','para',parentSelector,'id','subregion');
    createElement('p','para',parentSelector,'id','capital');
    createElement('p','para',parentSelector,'id','topLevelDomain');
    createElement('p','para',parentSelector,'id','currencies');
    createElement('p','para',parentSelector,'id','languages');
    createElement('div','neighbourCountries',parentSelector,'id','');
}

function backButtonFullView(e){
    var elementSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+'.img-btn-grp .back-button');
    elementSelector.innerHTML += '<span><i class="fa fa-long-arrow-left" aria-hidden="true"></i><p>Back</p>';
}

function buttonsFullView(e,ele){
    var parentSelector = document.querySelector('main .container '+'#'+e['alpha2Code']+' '+ele+' .neighbourCountries');
    parentSelector.innerHTML += '<h3>Border Countries: </h3>';
   // console.log(parentSelector);
   var nbrCtn = e['borders'];
  // console.log(nbrCtn);
  if(nbrCtn.length > 0){
    for(var i=0;i<nbrCtn.length;i++){
        createElement('button','btn',parentSelector,'value',nbrCtn[i]);
    }
  }
}

function buttonID(e,ele){
    var parentSelector = document.querySelectorAll('main .container '+'#'+e['alpha2Code']+' '+ele+' .neighbourCountries button');
    var nbrCtn = parentSelector //.children;
    for(var i = 0;i<nbrCtn.length;i++){
        if(nbrCtn[i].tagName === 'BUTTON'){
            nbrCtn[i].setAttribute('id',e['borders'][i]);
        }
        
    }
}

function fullViewAddHtml(e,ele,key){
    if(ele === 'p'){
        var paraSelector = document.querySelector('#'+e['alpha3Code']+'-full-view '+'#'+key);
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
      //  console.log(selector);
        selector.innerHTML += e['name'];
    }
}

function buttonAddHtml(e){
    var obj = {};
    for(var i=0;i<e.length;i++){
        obj[e[i]['alpha3Code']] = e[i]['name'];
    }
   // console.log(obj);
    for(var i=0;i<e.length;i++){
        var selector = document.querySelectorAll('#'+e[i]['alpha3Code']+'-full-view .para-btn-grp .neighbourCountries .btn');
        //console.log(selector);
        for(var j=0;j<selector.length;j++){
           // console.log(selector[j]);
           selector[j].innerHTML += obj[selector[j].id];
         // console.log(obj[j.id]);
        }
    }
}

function init(){
    themeChanger();
    filter();
    
  //  search();
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
        var fullViewSelector = document.querySelectorAll('.country .full-view');
        var headerSelector = document.querySelector('main header .theme-head');
       // console.log(headerSelector);
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
        
       // elementSelector.parentElement.classList.toggle('active');        
    })
}

function filter(){
    var selectionSelector = document.querySelector('main header nav #region-selector');
   selectionSelector.addEventListener('input',function(event){
      // console.log(event.target.value);
      var containerSelector = document.querySelector('main .container '+'.'+event.target.value);
     // console.log(containerSelector.parentElement.children);
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
   // console.log(searchBoxSelector);
    for(var i=0;i<data.length;i++){
        info[data[i]['name']] = data[i]['alpha2Code'];

    }
    searchBoxSelector.addEventListener('keyup',function(){
       //console.log(event.target.value);
       var text;
       var regex;
       if(event.target.value !== ''){
        text = '^'+event.target.value;
        regex = new RegExp(text,'gi');
       // console.log(regex.test(text));
      //  console.log(text);
       // console.log(regex);
       }else {
            var allCountrySelector = document.querySelectorAll('main .container .country');
            for(var i of allCountrySelector){
                i.style.display = 'block';
            }
       }
       key = Object.keys(info);
       for(var i=0;i<key.length;i++){
          // console.log(key[i]);
          if(regex.test(key[i]) === true){
             // console.log(key[i]);
           // console.log(info[key[i]]);
           var alphaCode = info[key[i]];
          // console.log(alphaCode);
           var countrySelector =  document.querySelector('main .container '+'#'+alphaCode);
           var allCountrySelector = document.querySelectorAll('main .container .country');
           for(var i of allCountrySelector){
               if(i !== countrySelector){
                   i.style.display = 'none';
               }else {
                   i.style.display = 'block';
               }
           }
          //  console.log(countrySelector);
          }
       }
       
    })
    
}

function viewChanger(){
    var elementSelector = document.querySelectorAll('.country .short-view');
    for(var i of elementSelector){
        i.addEventListener('click',function(){
         //   console.log(event.currentTarget.parentElement.id);
            var elementId = event.currentTarget.parentElement.id;
            var fullViewElement = document.querySelector('#'+elementId+' .full-view');
            fullViewElement.classList.add('active');
            var smallViewSelector = document.querySelectorAll('.country .short-view');
            for(var i of smallViewSelector){
                i.style.display = 'none';
            }
          /*  var smallViewElement = document.querySelectorAll('.country .short-view');
            for(var i of smallViewElement){
                i.classList.add('')
            }*/
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
   // console.log(elementSelector);
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