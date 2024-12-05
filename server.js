const io = require('socket.io')(server);

// Use namespaces
const chatNamespace = io.of('/chat');
chatNamespace.on('connection', (socket) => {
  console.log('New user connected to chat');

  // Handle events
  socket.on('message', (data) => {
    console.log(data);
    chatNamespace.emit('message', data);
  });

  // Clean up listeners on disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected from chat');
    socket.removeAllListeners();
  });
});
