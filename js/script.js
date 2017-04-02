'use strict';

var przycisk = document.getElementsByTagName('p')[2];

//console.log(paragraf1);
//console.log(paragraf2);
//console.log(przycisk);

function ustaw_tlo() {
    document.getElementsByTagName('p')[0].style.backgroundColor = "red";
    document.getElementsByTagName('p')[1].style.backgroundColor = "yellow";
}

przycisk.addEventListener('click', ustaw_tlo);

//someObj.addEventListener("click",
//                         function(){
//                             var newVar = someVar;
//                             some_function(someVar);
//                         },
//                         false);