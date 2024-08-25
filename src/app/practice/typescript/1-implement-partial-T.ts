// As the opposite of Partial<T>, Required<T> sets all properties of T to required.
//
export type MyPartial<T> = { [K in keyof T]?: T[K] }

type Order = {
	food: string
	drink: string
	side: string
}

const first: MyPartial<Order> = {
	food: "Cheese",
}

const second: MyPartial<Order> = {
	drink: "tea",
}

const third: MyPartial<Order> = {
	side: "Fries",
}

