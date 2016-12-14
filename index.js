'use strict';

const Hapi = require('hapi');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/threads';

const findTopicByTopicName = (db, topicName, callback) => {
    const collection = db.collection('threads');
    collection.find({
        name: topicName
    }).toArray(function (err, docs) {
        callback(docs);
    });
};

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000,
    routes: {
        cors: true
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/topic/{topicName}',
    handler: function (request, reply) {
        MongoClient.connect(url, function (err, db) {
            findTopicByTopicName(db, request.params.topicName, (topic) => {
                db.close();
                return reply(topic);
            });
        });

    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});