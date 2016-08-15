// selectField
export function selectField(color, index) {
	return {
		type: 'SELECT_FIELD',
		color,
		index,
	}
}

// misthrow
export function misthrow() {
	return {
		type: 'MISTHROW',
	}
}

// clearAll
export function clearAll() {
	return {
		type: 'CLEAR_ALL',
	}
}
