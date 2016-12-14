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

server.route({
    method: 'PUT',
    path: '/topic/{topicName}',
    handler: function (request, reply) {
        const threadMessage = request.payload.threadMessage;
        const topicName = request.params.topicName;

        MongoClient.connect(url, function (err, db) {
            const collection = db.collection('threads');


            collection.update({
                name: topicName
            }, {
                $push: {
                    threads: [
                        {
                            id: Math.random(0, 10000000000) * 10000000,
                            message: threadMessage,
                            createdAt: new Date(),
                            lastModified: new Date(),
                            votes: {
                                up: 0,
                                down: 0
                            },
                            comments: []
                        }
                    ]
                }
            });

            findTopicByTopicName(db, topicName, (topic) => {
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