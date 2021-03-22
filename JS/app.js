'use strict';


function Sales(location,min,max,avg,time){
  this.storeLocation =location ;
  this.hrMin = min;
  this.hrMax = max;
  this.cookiespercostumerAvg = avg;
  this.dayHours = time;
  this.costumerPerHrArr = [];
  this.perHrConsumeArr= [];
}

Sales.prototype.random = function(){

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  for(let i=0; i<this.dayHours.length; i++)
  {
    let x= random(this.hrMin,this.hrMax);
    this.costumerPerHrArr.push(x);
    this.perHrConsumeArr.push(Math.ceil(x* this.cookiespercostumerAvg));
  }
};

Sales.prototype.cookiesTotal =function(){
  let total =0;
  for (let i=0; i<this.perHrConsumeArr.length; i++){
    total= this.perHrConsumeArr[i] + total;
  }
  return total;

};

Sales.prototype.salesPrint =function(){

  const container= document.getElementById('salestable');
  const h3El=document.createElement('h3');
  h3El.textContent= this.storeLocation;
  container.appendChild(h3El);



  const ulEl=document.createElement('ul');
  ulEl.textContent= 'Sales for this day:';
  container.appendChild(ulEl);

  for (let i=0; i< this.dayHours.length; i++)
  {
    let liEl=document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `${this.dayHours[i]} : ${this.perHrConsumeArr[i]} cookies`;
  }


  let liEl=document.createElement('li');
  ulEl.appendChild(liEl);
  liEl.textContent = `Total : ${this.cookiesTotal()} cookies`;
};






const seattle = new Sales('Seattle',23,65,6.3,['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM']);

seattle.random();
seattle.salesPrint();



const tokyo = new Sales('Tokyo',3,24,1.2,['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM']);

tokyo.random();
tokyo.salesPrint();


const dubai = new Sales('Dubai',11,38,3.7,['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM']);

dubai.random();
dubai.salesPrint();



const paris = new Sales('Paris',20,38,2.3,['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM']);

paris.random();
paris.salesPrint();



const lima = new Sales('Lima',2,16,4.6,['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM']);

lima.random();
lima.salesPrint();








// ------------------------------------------------------------------------------------------------

// let seattle = {
//   storeLocation : 'Seattle',
//   hrMin : 23,
//   hrMax : 65,
//   cookiespercostumerAvg : 6.3,
//   dayHours : ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
//   costumerPerHrArr : [],
//   perHrConsumeArr: [],

//   persuesCookies : function () {

//     function random(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1) + min);
//     }


//     for(let i=0; i<this.dayHours.length; i++)
//     {
//       let x= random(this.hrMin,this.hrMax);
//       this.costumerPerHrArr.push(x);
//       this.perHrConsumeArr.push(Math.ceil(x* this.cookiespercostumerAvg));
//     }

//   },

//   cookiesTotal: function ()
//   { let total =0;
//     for (let i=0; i<this.perHrConsumeArr.length; i++){
//       total= this.perHrConsumeArr[i] + total;
//     }
//     return total;
//   },


//   render : function()
//   {
//     const container= document.getElementById('salestable');
//     const h3El=document.createElement('h3');
//     h3El.textContent= this.storeLocation;
//     container.appendChild(h3El);



//     const ulEl=document.createElement('ul');
//     ulEl.textContent= 'Sales for this day:';
//     container.appendChild(ulEl);

//     for (let i=0; i< this.dayHours.length; i++)
//     {
//       let liEl=document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${this.dayHours[i]} : ${this.perHrConsumeArr[i]} cookies`;
//     }


//     let liEl=document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total : ${this.cookiesTotal()} cookies`;
//   },

// };

// seattle.persuesCookies();
// seattle.render();

