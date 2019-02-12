import { TRANSLATION_LIST } from './constants';

const defaultState = {
	translationsList: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case TRANSLATION_LIST:
			return {
				...state,
				translationsList: action.list
			}
		default:
			return state;
	}
}
