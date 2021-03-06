const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const port = process.env.port || 3000;

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
const axios = require('axios');


app.listen(port, function() {
    console.log('Listen :3000 Successfully');
});

// Body parser middleware
// ทำให้ express ของเราสามารถอ่านและส่งค่า Body ได้
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Set static path
app.use(express.static(path.join(__dirname)));

app.get('/', function(req, res) {
    res.send('<h1>Hello IT</h1>');
});

app.post('/user/add', function(req, res, next) {
    console.log(req.body);
});



//Create a database named "dbProduct":
var url = 'mongodb://localhost:27017/dbProduct';

// Create Database จะสร้าง DB ได้ก็ต่อเมื่อมี Collection เท่านั้น จะไม่สามารถสร้าง DB เปล่าๆ ได้
MongoClient.connect(url, function(err, db) {
    var collection = db.collection('tbProduct');
    assert.equal(null, err);
    console.log('Connect to Mongodb successfully!!!');
    db.close();

    // Create Collection
    // db.createCollection('tbProduct', function(err, res) {
    //     if (err) throw err;
    //     console.log('Create Collection Successfully');
    //     db.close();
    // });

    // Create 1 Object for Insert to the Collection
    // var objproduct = {
    //     name: 'Coke',
    //     price: 12
    // };
    // db.collection('tbProduct').insertOne(objproduct, function(err, res) {
    //     if (err) throw err;
    //     console.log('Insert Object Successfully');
    //     db.close();
    // });

    // Create Mutiple Objects for insert to the Collection
    // objproduct = [{
    //     _id: 1,
    //     name: 'Coke',
    //     price: 12
    // }, {
    //     _id: 2,
    //     name: 'Pepsi',
    //     price: 12,
    // }, {
    //     _id: 3,
    //     name: 'Est',
    //     price: 12,
    // }, {
    //     _id: 4,
    //     name: 'Fanta',
    //     price: 10,
    // }];
    // db.collection('tbProduct').insertMany(objproduct, function(err, res) {
    //     if (err) throw err;
    //     console.log(`Insert ${res.insertedCount} record(s) Successfully`);
    //     db.close();
    // });

    // Read Document form the Colloection
    // collection.findOne({}, function(err, res) {
    //     try {
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // });

    // Read Documents form the Colloection Condition Like with "%e%" and Price Greater than 10
    // SQL Command LIKE '%e%' = $regex: /e/ (ประกอบด้วยตัว e)
    // SQL Command LIKE 'e%' = $regex: /^e/ (ขึ้นต้นด้วยตัว e)
    // SQL Command LIKE '%e' = $regex: /e$/ (ลงท้ายด้วยตัว e)
    // collection.find({
    //     name: { $regex: /e$/ },
    //     price: { $gt: 10 },
    // }).toArray(function(err, res) {
    //     try {
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     db.close();
    // });

    // Update Document with findOneAndUpdate
    // collection.findOneAndUpdate({ price: 10 }, {
    //         $set: {
    //             name: 'Mama'
    //         }
    //     },
    //     function(err, res) {
    //         if (err) throw err;
    //         console.log(res);
    //         db.close();
    //     });

    // Update a document with updateOne
    // collection.updateOne({ name: 'Mama' }, {
    //     $set: {
    //         price: 50,
    //         discount: '50%'
    //     }
    // }, function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     db.close();
    // });

    // Update Many Documents with updateMany
    // collection.updateMany({
    //     price: {
    //         $gt: 10
    //     }
    // }, {
    //     $set: {
    //         price: 5
    //     }
    // }, function(err, res) {
    //     try {
    //         console.log(`update successfully -> ${res}`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // });

    // Delete a Document with deleteOne
    // collection.deleteOne({ name: 'Mama' }, function(err, res) {
    //     if (err) throw err;
    //     console.log(`Delete successfully -> ${res}`);
    //     db.close();
    // });

    // Delete many documents with deleteMany
    // collection.deleteMany({
    //     name: {
    //         $regex: /s/
    //     }
    // }, function(err, res) {
    //     if (err) throw err;
    //     console.log(`Delete successfully -> ${res}`);
    //     db.close();
    // });
});