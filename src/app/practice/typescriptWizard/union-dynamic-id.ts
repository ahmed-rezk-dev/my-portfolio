// Transform a union to another union, using the 'in' operator as a kind of for-loop with dynamic [ID]

type Entity = { type: "user" } | { type: "post" } | { type: "comment" }

type EntityWithId = {
	[k in Entity["type"]]: { type: k } & Record<`${k}ID`, string>
}[Entity["type"]]

const newEntity: EntityWithId = { type: "user", userID: "123"  }
