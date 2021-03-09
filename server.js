const express = require('express')
const fetch = require('node-fetch');
const app = express()
const port = 4000


app.get('/', (req, res) => {
	res.json({
		server: 'hello-world-server',
		version: '0.0.1'
	})
})

app.listen(port, () => {
  console.log(`Example app server listening at http://localhost:${port}`)
})