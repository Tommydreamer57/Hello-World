const express = require('express');
const app = express();


const path = require('path')
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 3005
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
