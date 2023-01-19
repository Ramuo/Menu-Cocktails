
import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';


const presentDrink = async ()=>{
    const id = localStorage.getItem('drink');
    // setup id when visitor arrived for the first time on the page
    if(!id){
        window.location.replace('index.html')
    }else{
        const drink = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        displayDrink(drink);
    } 
};

window.addEventListener('DOMContentLoaded', presentDrink);




