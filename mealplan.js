//List Food Choices
const entrees = ['Salmon', 'Herb Chicken', 'Pork Chops', 'Barbecue'];
const vegetables = ['Butter Thyme Peas', 'Salad', 'Brown Sugar Carrots', 'Roasted Zucchini', 'Roasted Mixed Vegetables', 'Steamed Broccoli', 'Cooked Greens'];
const carbs = ['Quinoa', 'Mac and Cheese', 'Mashed Potatoes', 'Rice', 'Sweet Potatoes', 'Roasted Squash', 'Rice Pilaf', 'Beans'];

//Declare Meals
const dinnerEntrees = [];
const dinnerSides = [];
const dinnerCarbs = [];
const dinnerMeal = [dinnerEntrees, dinnerSides, dinnerCarbs];

//Other Variables
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Define Meal Picker
function chooseMeal(type, choices) {
    for (let days = 0; days < 7; days++) {
        let randNum = Math.floor(Math.random() * choices.length);
        type.push(choices[randNum]);
        //console.log(choices.length);
        //console.log(randNum);
    }
}

//Generate Meals
chooseMeal(dinnerEntrees, entrees);
chooseMeal(dinnerSides, vegetables);
chooseMeal(dinnerCarbs, carbs);

//List Meals
console.log('Meals for the Week');
console.log("");
for (let i = 0; i < 7; i++) {
    console.log(weekDays[i] + ':');
    console.log(dinnerEntrees[i]);
    console.log(dinnerSides[i]);
    console.log(dinnerCarbs[i]);
    console.log("");
}
