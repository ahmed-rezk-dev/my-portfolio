// Readonly<T> returns a type that sets all properties of T to readonly

export type MyReadonly<T> = { readonly [K in keyof T]: T[K] }

type Order = {
	food: string
	count: number
	side: boolean
}

const first: Order = {
	food: "Cheese",
	count: 1,
	side: false,
}

const firstReadyonly: MyReadonly<Order> = { ...first }
