import { types, flow } from 'mobx-state-tree'
import makeInspectable from 'mobx-devtools-mst'

const model = {
	form: types.optional(types.string, '')
}

const actions = self => {
	return {}
}

export default makeInspectable(
	types
		.model(model)
		.actions(actions)
		.create({})
)
