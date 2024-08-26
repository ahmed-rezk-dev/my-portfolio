// Record<K, V> returns an object type with keys of K and values of V.
//
// Please implement MyRecord<K, V> by yourself.
//
// Notice that property key could only be number | string | symbol.

type MyRecord<K extends number | string | symbol, V> = { [key in keyof K]: V }

type Key = "a" | "b" | "c"
const a: Record<Key, string> = {
	a: "BFE.dev",
	b: "BFE.dev",
	c: "BFE.dev",
}
a.a = "bigfrontend.dev" // OK
a.b = 123 // Error
a.d = "BFE.dev" // Error
type Foo = MyRecord<{ a: string }, string> // Error
