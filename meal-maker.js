const menu = {
	courses: { appetizers: [], mains: [], desserts: [] },
	addDishToCourse: function (courseName, dishName, dishPrice) {
		const dish = { name: dishName, price: dishPrice };
		this.courses[courseName].push(dish);
	},
	getRandomDishFromCourse: function (courseName) {
		const dishes = this.courses[courseName];
		const randDish = dishes[Math.floor(Math.random() * dishes.length)];
		return randDish;
	},
	generateRandomMeal: function () {
		const randApp =
			this.courses.appetizers[
				Math.floor(Math.random() * this.courses.appetizers.length)
			];
		const randMain =
			this.courses.mains[Math.floor(Math.random() * this.courses.mains.length)];
		const randDessert =
			this.courses.desserts[
				Math.floor(Math.random() * this.courses.desserts.length)
			];
		return `Your meal will consist of ${randApp.name} for an appetizer, ${
			randMain.name
		} for the main course, and ${
			randDessert.name
		} for dessert. The total price will be $${
			randApp.price + randMain.price + randDessert.price
		}. Enjoy!`;
	},
};

menu.addDishToCourse("appetizers", "french fries", 2);
menu.addDishToCourse("appetizers", "onion rings", 2);
menu.addDishToCourse("appetizers", "mozz sticks", 2);

menu.addDishToCourse("mains", "Spaghetti", 4);
menu.addDishToCourse("mains", "Calzone", 8);
menu.addDishToCourse("mains", "Stromboli", 6);

menu.addDishToCourse("desserts", "Cheesecake", 3);
menu.addDishToCourse("desserts", "Pie", 3);
menu.addDishToCourse("desserts", "Ice cream", 3);

console.log(menu.generateRandomMeal());
