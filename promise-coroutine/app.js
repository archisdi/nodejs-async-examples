'use strict'

const Promise = require('bluebird');
const MongoClient = Promise.promisify(require('mongodb').MongoClient);
const url = "mongodb://localhost:27017/mydb";

Promise.coroutine(function*() {

    function getData(){
        return MongoClient.connect(url).then((db) => {
            return db.collection("customers").findOne({}).then((item) => {
                // console.log(item);
                db.close();
                return item;
            }).catch((err) => {
                console.log(err);
            });
        });
    }

    let data = yield getData(); 

    console.log(data);
})();