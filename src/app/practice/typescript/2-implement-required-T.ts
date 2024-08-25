//As the opposite of Partial<T>, Required<T> sets all properties of T to required.

export type MyRequired<T> = { [K in keyof T]-?: T[K] }

type Order = {
	food?: string
	count?: number
	side?: boolean
}

const first: MyRequired<Order> = {
	food: "Cheese",
	count: 1,
  side: false
}

const second: MyRequired<Order> = {
	food: "tea",
}

const third: MyRequired<Order> = {
	food: "Fries",
}
