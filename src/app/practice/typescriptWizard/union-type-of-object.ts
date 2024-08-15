const drinkCounts = {
	coffee: 2,
	tea: 1,
	hotCoffee: 4,
	sweettea: 1,
}

type DrinkCounts = typeof drinkCounts

type NewDrinkCounts = {
	[k in keyof DrinkCounts]: {
		[k2 in k]: number
	}
}[keyof DrinkCounts]

const singleOrder: NewDrinkCounts = { hotCoffee: 1 }
