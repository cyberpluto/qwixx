// selectField
export function selectField(color, index) {
	return {
		type: 'SELECT_FIELD',
		color,
		index,
	}
}