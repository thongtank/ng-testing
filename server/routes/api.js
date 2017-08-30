const express = require('express');
const router = express.Router();

const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

const dbcfg = require('../config/database');

router.get('/', (req, res, next) => {
    res.send('Hello From API');
});

router.get('/pages', /*cors(),*/ (req, res) => {
    // Create Database จะสร้าง DB ได้ก็ต่อเมื่อมี Collection เท่านั้น จะไม่สามารถสร้าง DB เปล่าๆ ได้
    MongoClient.connect(dbcfg.database, (err, db) => {
        assert.equal(null, err);
        // skip คือให้ข้าม document(s) ไปทั้งหมดกี่แถว เช่น skip(10) คือข้ามไป 10 แถวและเริ่มแสดงที่แถว 11
        db.collection(dbcfg.collections.pages).find({}).skip(10).limit(10).toArray((err, data) => {
            res.json(data);
        });
        db.close();
    });
});

router.post('/create', /*cors(),*/ (req, res, next) => {
    MongoClient.connect(dbcfg.database, (err, db) => {
        let objPage = JSON.parse(Object.keys(req.body));
        assert.equal(null, err);
        db.collection(dbcfg.collections.pages).insertOne({
            _id: objPage._id,
            title: objPage.title,
            content: objPage.content
        }, (err, r) => {
            res.json(r);
            db.close();
        });
    });
});

module.exports = router;