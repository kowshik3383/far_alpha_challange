
const express = require('express');
const app = express();

const PORT = 80;

app.get('/sayHello', (req, res) => {
	// Send a JSON response with the message "Hello User"
	res.json({ message: 'Hello User' });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
