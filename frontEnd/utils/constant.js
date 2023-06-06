const baseUrl = ''
if (process.env.NODE_ENV === 'development') {
	baseUrl = 'localhost:8081'
} else {
	baseUrl = 'cloud server'
}

module.exports = {
	baseUrl
}