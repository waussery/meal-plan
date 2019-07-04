//List Food Choices
const entrees    = ['Salmon', 'Herb Chicken', 'Pork Chops'];
const vegetables = ['Butter Thyme Peas', 'Salad', 'Brown Sugar Carrots', 'Roasted Mixed Vegetables'];
const carbs      = ['Mac and Cheese', 'Mashed Potatoes', 'Rice', 'Sweet Potatoes', 'Roasted Squash'];

//Other Variables
const days       = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Create meals
function createMeals() {
	let output = "";
	for (let day of days) {
		const entree = entrees[Math.floor(Math.random() * entrees.length)];
		const side   = vegetables[Math.floor(Math.random() * vegetables.length)];
		const carb   = carbs[Math.floor(Math.random() * carbs.length)];
		output += `${day}:\n${entree}, ${side}, ${carb}\n\n`;
	}
	return output;
}

console.log('Meals for the Week:\n');
console.log(createMeals())