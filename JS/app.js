'use strict';

const dayHours =['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'];




function Sales(location,min,max,avg){
  this.storeLocation =location ;
  this.hrMin = min;
  this.hrMax = max;
  this.cookiespercostumerAvg = avg;
  this.costumerPerHrArr = [];
  this.perHrConsumeArr= [];
}

Sales.prototype.random = function(){

  function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  for(let i=0; i<dayHours.length; i++)
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




function first(){
  const container= document.getElementById('salestable');

  const tableEl=document.createElement('table');
  container.appendChild(tableEl);

  const headerowEL=document.createElement('tr');
  tableEl.appendChild(headerowEL);

  let headerCells=document.createElement('th');
  headerowEL.appendChild(headerCells);
  headerCells.textContent = 'Time';

  for (let i=0; i< dayHours.length; i++)
  {
    let headerCells=document.createElement('th');
    headerowEL.appendChild(headerCells);
    headerCells.textContent = dayHours[i];
  }
  headerCells=document.createElement('th');
  headerowEL.appendChild(headerCells);
  headerCells.textContent = 'Daily total';

}


Sales.prototype.salesPrint =function(){
  const container= document.getElementById('salestable');

  const tableEl=document.createElement('table');
  container.appendChild(tableEl);

  const dataRaw=document.createElement('tr');
  tableEl.appendChild(dataRaw);


  let dataCells=document.createElement('td');
  dataRaw.appendChild(dataCells);
  dataCells.textContent = this.storeLocation;

  for (let i=0; i< dayHours.length; i++)
  {
    let dataCells=document.createElement('td');
    dataRaw.appendChild(dataCells);
    dataCells.textContent = this.perHrConsumeArr[i];

  }
  dataCells=document.createElement('td');
  dataRaw.appendChild(dataCells);
  dataCells.textContent = this.cookiesTotal();

};

function last(){
  const container= document.getElementById('salestable');

  const tableEl=document.createElement('table');
  container.appendChild(tableEl);

  const headerowEL=document.createElement('tr');
  tableEl.appendChild(headerowEL);

  let headerCells=document.createElement('th');
  headerowEL.appendChild(headerCells);
  headerCells.textContent = 'Total';

  for (let i=0; i< dayHours.length; i++)
  {
    let headerCells=document.createElement('th');
    headerowEL.appendChild(headerCells);
    headerCells.textContent = '';
  }
  headerCells=document.createElement('th');
  headerowEL.appendChild(headerCells);
  headerCells.textContent = '';

}



first();


const seattle = new Sales('Seattle',23,65,6.3);

seattle.random();
seattle.salesPrint();

const tokyo = new Sales('Tokyo',3,24,1.2);

tokyo.random();
tokyo.salesPrint();


const dubai = new Sales('Dubai',11,38,3.7);

dubai.random();
dubai.salesPrint();



const paris = new Sales('Paris',20,38,2.3);

paris.random();
paris.salesPrint();



const lima = new Sales('Lima',2,16,4.6);
lima.random();
lima.salesPrint();


last();




