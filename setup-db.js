'use strict';

const Hapi = require('hapi');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/threads';
const fs = require('fs-extra');

MongoClient.connect(url, function (err, db) {
    console.log(err);
    const collection = db.collection('threads');

    collection.deleteMany({});
    collection.insertOne(fs.readJsonSync('./fixtures/topic.json', 'utf-8'));

    db.close();
});