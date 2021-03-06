const express = require('express')

const app = express()

const PORT = process.env.PORT || 3300

app.get('/', (req, res) => {
    res.send("Hello from server")
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
})