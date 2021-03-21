'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


//Seattle


let Seattle = {
  storeLocation : 'Seattle',
  SeattleMin : 3,
  SeattleMax : 24,
  perCostumerAvg : 1.5,
  dayHours : ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM', 'Total'],
  hoursConsumeArray: [],

  random : function () {

    for(let i=0; i<this.dayHours.length; i++)
    {
      let x= getRandomIntInclusive(this.SeattleMin,this.SeattleMax);
      let y= Math.ceil(x* this.perCostumerAvg);
      this.hoursConsumeArray.push(y);
    }

    return this.hoursConsumeArray;

  },





  salesPrint : function()
  {
    const container= document.getElementById('container');
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
      liEl.textContent = `${this.dayHours[i]} : ${this.random()[i]} cookies`;
    }

  },


  cookiesTotal: function()
  {
    let x=0;
    for (let i=0; i<this.hoursConsumeArray.length; i++){
      x= this.random[i] + x;
      return x;
    }

    // let liEl=document.createElement('li');
    // ulEl.appendChild(liEl);
    // liEl.textContent = `Total : ${x} cookies`;
  },

};

Seattle.salesPrint();
Seattle.cookiesTotal();


//----------------------------------------------------------------
//Tokyo

let Tokyo = {
  storeLocation : 'Tokyo',
  TokyoMin : 3,
  TokyoMax : 24,
  perCostumerAvg : 1.5,
  dayHours : ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM', 'Total'],
  hoursConsumeArray: [],

  random : function () {

    for(let i=0; i<this.dayHours.length; i++)
    {
      let x= getRandomIntInclusive(this.TokyoMin,this.TokyoMax);
      let y= Math.ceil(x* this.perCostumerAvg);
      this.hoursConsumeArray.push(y);
    }

    return this.hoursConsumeArray;

  },





  salesPrint : function()
  {
    const container= document.getElementById('container');
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
      liEl.textContent = `${this.dayHours[i]} : ${this.random()[i]} cookies`;
    }

  },


  cookiesTotal: function()
  {
    let x=0;
    for (let i=0; i<this.hoursConsumeArray.length; i++){
      x= this.hoursConsumeArray[i] + x;
      return x;
    }
  },

};

Tokyo.salesPrint();
Tokyo.cookiesTotal();


//----------------------------------------------------------------
//Dubai


let Dubai = {
  storeLocation : 'Dubai',
  DubaiMin : 11,
  DubaiMax : 38,
  perCostumerAvg : 3.7,
  dayHours : ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM', 'Total'],
  hoursConsumeArray: [],

  random : function () {

    for(let i=0; i<this.dayHours.length; i++)
    {
      let x= getRandomIntInclusive(this.DubaiMin,this.DubaiMax);
      let y= Math.ceil(x* this.perCostumerAvg);
      this.hoursConsumeArray.push(y);
    }

    return this.hoursConsumeArray;

  },





  salesPrint : function()
  {
    const container= document.getElementById('container');
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
      liEl.textContent = `${this.dayHours[i]} : ${this.random()[i]} cookies`;
    }

  },


  cookiesTotal: function()
  {
    let x=0;
    for (let i=0; i<this.hoursConsumeArray.length; i++){
      x= this.hoursConsumeArray[i] + x;
      return x;
    }
  },

};

Dubai.salesPrint();
Dubai.cookiesTotal();



//------------------------------------------------------------------
// Paris

let Paris = {
  storeLocation : 'Paris',
  ParisMin : 20,
  ParisMax : 38,
  perCostumerAvg : 2.3,
  dayHours : ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM', 'Total'],
  hoursConsumeArray: [],

  random : function () {

    for(let i=0; i<this.dayHours.length; i++)
    {
      let x= getRandomIntInclusive(this.ParisMin,this.ParisMax);
      let y= Math.ceil(x* this.perCostumerAvg);
      this.hoursConsumeArray.push(y);
    }

    return this.hoursConsumeArray;

  },





  salesPrint : function()
  {
    const container= document.getElementById('container');
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
      liEl.textContent = `${this.dayHours[i]} : ${this.random()[i]} cookies`;
    }

  },


  cookiesTotal: function()
  {
    let x=0;
    for (let i=0; i<this.hoursConsumeArray.length; i++){
      x= this.hoursConsumeArray[i] + x;
      return x;
    }
  },

};

Paris.salesPrint();
Paris.cookiesTotal();


//--------------------------------------------------------
//Lima


let Lima = {
  storeLocation : 'Lima',
  LimaMin : 2,
  LimaMax : 16,
  perCostumerAvg : 4.6,
  dayHours : ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM', 'Total'],
  hoursConsumeArray: [],

  random : function () {

    for(let i=0; i<this.dayHours.length; i++)
    {
      let x= getRandomIntInclusive(this.LimaMin,this.LimaMax);
      let y= Math.ceil(x* this.perCostumerAvg);
      this.hoursConsumeArray.push(y);
    }

    return this.hoursConsumeArray;

  },





  salesPrint : function()
  {
    const container= document.getElementById('container');
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
      liEl.textContent = `${this.dayHours[i]} : ${this.random()[i]} cookies`;
    }

  },


  cookiesTotal: function()
  {
    let x=0;
    for (let i=0; i<this.hoursConsumeArray.length; i++){
      x= this.hoursConsumeArray[i] + x;
      return x;
    }
  },

};

Lima.salesPrint();
Lima.cookiesTotal();
