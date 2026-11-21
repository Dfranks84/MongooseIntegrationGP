
// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the Mongoose configuration
const configureMongoose = require('./config/mongoose');

// Load the Express configuration
const configureExpress = require('./config/express');

// Connect to MongoDB before starting Express
async function startServer() {
    try {
        await configureMongoose();

        // Create a new Express application instance
        const app = configureExpress();

        // Start the Express server
        app.listen(3000, function () {
            console.log('Server running at http://localhost:3000/');
        });

        // Expose the Express application instance
        module.exports = app;
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exitCode = 1;
    }
}

startServer();
