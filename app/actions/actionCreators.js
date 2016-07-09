// selectField
export function selectField(color, index) {
	return {
		type: 'SELECT_FIELD',
		color,
		index,
	}
}

// clearAll
export function clearAll() {
	return {
		type: 'CLEAR_ALL',
	}
}
