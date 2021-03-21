'use strict';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const Seattle = {
  storeLocation : 'Seattle',
  seattleMin : 23,
  seattleMax : 65,
  perCostumerAvg : 6.3,
  dayHours : ['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM'],
  hoursCostumerArray: [],

  randomSeattle : function () {

    for(let i=0; i<this.dayHours.length; i++)
    {
      let x= getRandomIntInclusive(this.seattleMin,this.seattleMax);
      this.hoursCostumerArray.push(x);
    }
    return this.hoursCostumerArray;
  },

  pageText : function()
  {
    const container= document.getElementById('container');
    const h3El=document.createElement('h3');
    h3El.textContent= this.storeLocation;
    container.appendchild(h3El);



    const ulEl=document.createElement('ul');
    ulEl.textContent= 'Sales for this day:';
    container.appendchild(ulEl);

    for (let i=0; i< this.dayHours.length; i++)
    {
      let liEl=document.createElement('li');
      ulEl.appendchild(liEl);
      liEl.textContent = `${this.dayHours[i]} : ${this.hoursCostumerArray[i]} cookies`;
    }

  }
};


Seattle.randomSeattle();
Seattle.pageText();



