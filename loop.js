for (let i = 1; i <= 100; i++) {
    console.log(`Table ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
let username='jon'
let name = 'doe'
alert(`${username} ${name}`)
let student_name='student',student_age =20 , student_Education = 'certified Mobile Application Development'
alert(`${student_name}`), alert (`${student_age} year old `), alert(`${student_Education}`)
let one = 'Pizza'
alert(`${one}`)
one = 'pizz'
alert (`${one}`)
one = 'piz'
alert (`${one}`)
one = 'pi'
alert (`${one}`)
one='p'
alert (`${one}`)
let email = 'jawwad@gmail.com'
alert(`My Email Address is ${email}`)
const p = document.querySelector('.p');
p.innerHTML = 'we can write html with javascript';
let visitor_name ='Jon',product_title='T-shirts', ordered = 5;
const p = document.querySelector('.p');
p.innerHTML=`Visitor Name: ${visitor_name} ordered ${ordered} ${product_title} on KId store`;
let name_ = 'visitor'
let _name = 'visitor'
let name$_ = 'visitor_name';
let name1234_12 ='visitor_name'
let _name$_ = 'visitor_name'
console.log(`${name_} , ${_name} , ${name$_}, ${name1234_12}, ${_name$_}`);
let num1 =10;
let num2 =20;
let num3;
const p = document.querySelector('.p');
function add() {
     num3 = num1 + num2; 
     p.innerHTML = `sum of ${num1} and ${num2} is ${num3}`;
     num3 = num2 - num1; 
     p.innerHTML += ` subtraction of ${num1} and ${num2} is ${num3}`;
     num3 = num1*num2
     p.innerHTML += ` Multiplication of ${num1} and ${num2} is ${num3}`;
     num3=num1/num2;
     p.innerHTML += ` Division of ${num1} and ${num2} is ${num3}`;
     num3 = num2%num1
     p.innerHTML += ` Modulus of ${num1} and ${num2} is ${num3}`;
}
let variable;
const p = document.querySelector('.p');
p.innerHTML += `value after variable declarations ${variable} <br>`
variable=5;
p.innerHTML += ` after variable assigned ${variable} <br>`;
variable=variable +1;
p.innerHTML += ` after variable increment ${variable} <br>`;
variable=variable+ 7
p.innerHTML += ` after variable addition ${variable} <br>`;
variable=variable-1
p.innerHTML += ` after variable decrement ${variable} <br>`;
variable=variable%3
p.innerHTML += ` remainder ${variable}`
let cost = 600;
const p = document.querySelector('.p');
p.innerHTML += `Total cost to buy 5 tickets to a  movie is ${5*cost}RS` 
let cel =25;
let f = (cel*9/5)+32
const p = document.querySelector('.p');
p.innerHTML += `${cel}*C is ${f}*F <br>`;
f=70;
cel=(f-32)*5/9
p.innerHTML += `${f}*F is ${cel}*C`
const h = document.querySelector('.h');
h.innerHTML = 'Shopping Cart';
const p = document.querySelector('.p');
let price = 650,quantity=3, shipping =100;
p.innerHTML += `Price of item 1 is  ${price}RS <br>`;
p.innerHTML += `Quantity of item 1 is  ${quantity} <br>`;
let cost1 = price*quantity;
price=100
quantity=7
let cost2 = price*quantity;
p.innerHTML += `Price of item 2 is  ${price}RS <br>`;
p.innerHTML += `Quantity of item 2 is  ${quantity} <br>`;
p.innerHTML += `Shipping charges is  ${shipping}RS <br> <br> <br>`;
p.innerHTML += `Total cost of your product is  ${cost1+cost2+shipping}RS `;
let us = 104.80;
let riyal = 28; 
let Quantity_us = 10;
let Quantity_su = 25;
let total1 = us * Quantity_us;
let Total2 = riyal * Quantity_su;
let Total = total1 + Total2;
const h = document.getElementById('h');
h.innerHTML = `Total PKR: ${parseInt(Total)}`;
document.write('Qualifications <br> <br>')
let Education = ['SSC','HSC','BCS','BS','BCOM','MS','MPHIL','PHD']
for (let index = 0 ,i=1; index < Education.length; index++,i++) {
    document.write(`${i} ) ${Education[index] } <br>`);
}
document.write('Top movies of 2015 <br> <br>')
let movie = [];
movie[0] = 'Avengers';
movie[1] = 'Spectre';
movie[2] = 'Jurassic World';
movie[3] = 'Inside Out';
movie[4] = 'The Martian';
movie[5] = 'Interstellar';
movie[6] = 'Supernatural';

for (let index = 0, i = 0; index < movie.length; index++, i++) {
    document.write(`${i}) ${movie[index]} <br>`);
}
document.write(`Length of the movie: ${movie.length}<br><br>`);
document.write('Favorite categories of cars <br> <br>')
let cars =['Audi','BMW','Mwb','Toyota','Titanium','catalina','Swift','Ferrari','Lamborghini'];
document.write(`First index of the array is : 0 <br>`)
document.write(`car at the beginning of the array is : ${cars[0]} <br>`)
document.write(`last index of the array is : 8 <br>`)
document.write(`car at the end of the array is : ${cars[8]} <br>`)
let Students_name=['Jhn', 'michel','Ali'];
let Student_score=[320,400,300]
let TotalScore = 500;
for (let index = 0,j=0; index < Students_name.length && j<Student_score.length; index++,j++) {
    document.write(`Score of ${Students_name[index]} is ${Student_score[j]} Percentage is ${(Student_score[j]/TotalScore)*100}% <br>`);
}
let Score =[320,230,480,120]
document.write(`Score of student ${Score} <br>`);
Score.sort();
document.write(`Ordered Score: ${Score}`);
let fruits = ['grapes','Apple','Banana','orange','mushrooms']
document.write(`Fruits List:<br> ${fruits} <br> <br>`);
document.write(`Ordered fruit list:<br> ${fruits.sort()} <br>`);
let Cities =['Karachi','Islamabad','peshawar','Multan','Lahore']
document.write(`Cities List:<br> ${Cities} <br> <br>`);
document.write(`selected cities List:<br> ${Cities.slice(0,2)} <br> <br>`);
let Animal = ['This','is','my','cat']
document.write(`Animal List:<br> ${Animal} <br> <br>`);
document.write(`String :<br> ${Animal.join(' ')} <br> <br>`);
let Devices = ['Keyboard','Mouse','Computer','Printer' ]
document.write(`Devices List:<br> ${Devices} <br> <br>`);
for (let index = Devices.length-1; index>=0; index--) {
    document.write(`Out:<br> ${Devices[index]} <br>`);
}
let manufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Hair'];
document.write('<select>');
manufacturers.forEach(function (name) {
    document.write('<option value =' + name + '>' + name + '</option>');
}
)
let Multidimensional = [[0,1,2,3,4],[1,0,0,1,0],[2,0,9,1,1,]]
for (let index = 0; index < Multidimensional.length; index++) {
    document.write(`${Multidimensional[index].join(" ")} <br>`)
}
for (let index = 0; index < 5; index++) {
    document.write('Hello Word <br>')
}
for (let index = 1; index <=10; index++) {
    document.write(`${index} <br>`)
}
let Table_no = +prompt('Enter a number to print multiplication table')
let Table_length =+prompt('Enter the table length')
for (let index = 1; index <= Table_length; index++) {
    document.write(`${Table_no} * ${index} = ${(Table_no)*(index)} <br>`);
} 
let Phones =['samsung', 'Apple','iPhone','iPad','Windows']
for (let index = 0; index < Phones.length; index++) {
    document.write(`${Phones[index]} <br>`);
}
let Fruits =['apple','orange','mango','banana','grapes','Dates' ]
for (let index = 0; index < Fruits.length; index++) {
    document.write(`${Fruits[index]} <br>`)
}
for (let index = 0; index < Fruits.length; index++){
    document.write(`Element at  index ${index} is ${Fruits[index]} <br>`)
}
let number_of_items =+prompt('Enter a number of items')
let Items =  []
document.write(`Number of items: ${number_of_items} <br><br>`)
document.write(`Items <br><br>`)
for (let i=0; i<number_of_items; i++){
    Items[i] = prompt(`Enter value of ${i}`)
    document.write(`${Items[i]} <br>`)
}
document.write(`Counting: <br><br>`)
for(let i=1;i<=15;i++){
    document.write(`${i},  `)
}
document.write(`<br> <br>`)
document.write(`Reverse Counting: <br><br>`)
for(let i=10;i>=1;i--){
    document.write(`${i}, `)
}
document.write(`<br> <br>`)
document.write(`Even: <br><br>`)
for(let i=0;i<25;i++){
    if(i%2==0){
    document.write(`${i}, `)
}
}
document.write(`<br> <br>`)
document.write(`Odd: <br><br>`)
for(let i=0;i<=21;i++){
    if(i%2!=0 ){
    document.write(`${i}, `)
}
}
document.write(`<br> <br>`)
document.write(`Series: <br><br>`)
for(let i=1;i<=10;i++){
    document.write(`${i+i}K, `)
}
let Bakery = ['apple','orange','banana','dates','kiwi']
const inputB = document.querySelector('.bacshop')
function shop(){
if(Bakery.includes(inputB.value)){
    document.write(`${inputB.value} is available at ${Bakery.indexOf(inputB.value)} in our bakery`)
}
else{
    document.write(`${inputB.value} is  not available in our bakery`)
}
}
let arr = [9, 2, 3, 90,0]
let largest_numbers =arr[0];
let smallest_numbers =arr[0]
if(arr.length===0){
    console.log(`Array is empty`);
}
for(let i=1;  i<arr.length; i++) {
    if(arr[i]>largest_numbers){
        largest_numbers=arr[i];
    }
    else if (arr[i]<smallest_numbers){
        smallest_numbers=arr[i];
    }

}
console.log(`Array item: [ ${arr} ]`);
console.log(`Largest number found: ${largest_numbers}`)
console.log(`Smallest number found: ${smallest_numbers}`)

for(let i=1;i<=100;i++){
    if(i%5===0){
        console.log(i + '');
    }
}







