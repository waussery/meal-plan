//List Variables
const entrees = ['Salmon', 'Herb Chicken', 'Pork Chops', 'Barbecue'];
const vegetables = ['Butter Thyme Peas', 'Salad', 'Brown Sugar Carrots', 'Roasted Zucchini', 'Roasted Mixed Vegetables', 'Steamed Broccoli', 'Cooked Greens'];
const carbs = ['Quinoa', 'Mac and Cheese', 'Mashed Potatoes', 'Rice', 'Sweet Potatoes', 'Roasted Squash', 'Rice Pilaf', 'Beans'];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//Define Meal Picker
function chooseMeal(choices) {
    let randNum = Math.floor(Math.random() * choices.length);
    console.log(choices[randNum]);
}

//Generate Meals
console.log('%cMeals for the Week:', 'color: yellow');
for (day of weekDays) {
    console.log(day + ':');
    chooseMeal(entrees);
    chooseMeal(vegetables);
    chooseMeal(carbs);
    console.log('');
}