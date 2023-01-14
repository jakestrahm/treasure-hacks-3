// getting-started.js
const mongoose = require('mongoose');

async function main() {
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://127.0.0.1:27017/treasure-hacks-3');
}

main()