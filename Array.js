
function  addFruit(){
    const  fruit= ['apple','banana', 'orange', 'mango'];
    const h2 = document.querySelector('h2');
    const name = document.querySelector('#input')
    if (fruit.includes(name.value)){
        h2.innerHTML = `${name.value} is available`
    }
    else{
        console.log("The fruit is not available");
        h2.innerHTML = `${name.value} is not available`
    }

    }  
