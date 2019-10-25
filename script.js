let element = document.querySelector('main');
const url = 'https://restcountries.eu/rest/v2/all';
/*fetch(url).then((resp) => resp.json()).then(function(data){
    let res = data.results;
    //let final = JSON.parse(res);
    console.log(typeof(res));
})*/
fetch(url).then(responce => responce.json()).then(function(data){
    console.log(Object.getOwnPropertyNames(data[0]).filter(item => typeof data[item] === 'function'));
  /*  for(var i=0;i<data.length;i++){
        
       // element.innerHTML += data[0]['name'];
    }*/
});