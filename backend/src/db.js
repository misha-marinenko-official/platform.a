const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const uuidv1 = require('uuid/v1');
const adapter = new FileSync('db/db.json');
const db = low(adapter);

