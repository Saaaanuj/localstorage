/*let radius=10;
const pi=3.14;
const title = 'best reads';
const author = 'mario';    
const link = 20;
//console.log(radius,pi);

//math operators + - * / ** %

console.log(10/2);*/
//let result = radius % 2;

//let result = pi*radius**2;

//let likes=10;

//order of operation B I D M A S

//result++;
//result+=10;

//Nan - not a number

//console.log(5*'hello');

//concatenation way
//let result= 'the blog has ' + likes +' likes';

//console.log(result);

//template string way(syntax imp ` key is next to 1)

//let result = `the blog by ${title} by ${author} has ${link} likes`;
//console.log(result);

//creating html templates
/*let html =`
    <h2>${title}</h2>
    <p>${author}</p>
    <span>${link}</span>
`;*/

//console.log(html);


//let ninja=['shaun', 'me' , 'chun'];
//ninja[1]='you';
//console.log(ninja[1]);


//let random=['shaun', 'me' , 'chun',30, 40];
//console.log(random);
//console.log(random.length);  .includes()

//let result = ninja.join('-')
//let result = ninja.indexOf('chun')
//let result = ninja.concat(['ken', 'crystal']);
//let result = ninja.push('ken');
//let result = ninja.pop();
//console.log(result);

//const para = document.querySelector('div.error');

//console.log(para);

/*//const paras = document.querySelectorAll('p');

paras.forEach(paras => {
    console.log(paras);
})

//console.log(paras[2]);
//#grabbing with id
const title = document.getElementById('page');
console.log(title);


// get elements by class name
const me = document.getElementsByClassName('error');
console.log(me);
//for each not apllicable above

const next = document.getElementsByTagName('p');
console.log(next);




const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

console.log(errors);
*/

const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText += 'hello back';

const paras = document.querySelectorAll('p')
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
})

//.innerHTML .setAttribute  .style  .classList .textContent
//.classList.add('name')  .classList.remove('name')

//.classList.toggle();