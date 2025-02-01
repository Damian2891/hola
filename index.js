const express = require('express');
const app = express();
const port = 3000; // Usamos un puerto estático (sin variables de entorno)

// Configuración de una ruta básica
app.get('/', (req, res) => {
    res.send('Hello, Express with Vercel!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
