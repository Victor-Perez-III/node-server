const http = require('http');

// Lista de tareas en formato JSON
const tasks = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Estudiar para el examen', completed: true },
    { id: 3, description: 'Hacer ejercicio', completed: false },
];

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
    if (req.url === '/tasks' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

const PORT = process.env.PORT || 3000;

// Iniciar el servidor
server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
