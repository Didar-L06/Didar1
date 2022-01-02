// let age = prompt('how old are you?',100);

// alert(`you are ${age} year`);


// let isBoss = confirm("are you boss");

// alert(isBoss);

// let i=0;

// while(i!=10){
// 	alert(++i);
// }

// let sum = 0;

// while (true) {

//   let value = prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );

// let fr = prompt("FRUIT ", "apple");

// let fruit = {
//     [fr]: 12,
//     banana: 13
// };

// alert(fruit.apple);

// const textElem = document.querySelector('.text');

// const getComent = textElem.nextSibling;

// console.log(getComent);
// console.log(getComent.data);

// getComent.data = 'hi men didar';
// console.log(getComent.data);

// const textElemCont = textElem.innerHTML;

// textElem.innerHTML = `<p>${textElemCont}</p> <p>pmompompj dpojpjdpojdpdpojdpojd dpod <span class="yel">ipinpoipo</span> oknokn</p>`;

// textContent что пишет то и выводит

// const newElem = document.createElement('div');

// newElem.innerHTML = `ononoknon pnmponpo op-[po-o[om <span class="yel">ojhougoub</span> hvuguhvik`;
// console.log(newElem);

// do elementa 
// textElem.before(newElem);

// w etom elemente w nacale
// textElem.prepend(newElem);

// w etom elemente w posle
// textElem.append(newElem);

//posle
// textElem.after(newElem);


// textElem.insertAdjacentHTML(
//     'afterend',
//     `<p>jnojnono oininoin inoinoino <span class="yel">kjbkjbklj</span> noinoioni</p>`
// );

// beforebegin
// afterbegin
// beforeend
// afterend

// const title = document.querySelector('h3');

// const cloneTitle = title.cloneNode(true);

// textElem.append(cloneTitle);


// textElem.remove();

// document.querySelector('.button_p').addEventListener('click',addOne);
// document.querySelector('.button_m').addEventListener('click',popOne);

// let c = -1111110;
// function addOne() {
// 	c+=100;
// 	document.querySelector('.plus').textContent = c;
// }

// function popOne() {
// 	c--;
// 	document.querySelector('.plus').textContent = c;
// }
const daysE = document.getElementById('days'); 
const hoursE = document.getElementById('hours');
const minsE = document.getElementById('mins');
const secsE = document.getElementById('secs'); 

const newYear = '1 jan 2023';

function countdown() {
	const newYearDate = new Date(newYear);
	const currentDate = new Date();


	const tS = (newYearDate - currentDate)/ 1000;

	const days = Math.floor(tS / 3600 / 24);
	const hours = Math.floor(tS / 3600)%24;
	const mins = Math.floor(tS / 60)%60;
	const secs = Math.floor(tS)%60;

	daysE.innerHTML = Ft(days);
	hoursE.innerHTML = Ft(hours);
	minsE.innerHTML = Ft(mins);
	secsE.innerHTML = Ft(secs);
}

countdown();

function Ft(time) {
	return (time < 10) ? `0${time}` : time;
}
setInterval(countdown, 1000);
