var nano = require('nano');
const url = "https://apikey-v2-237a9fx60g51gyopiewwx5pb339t2r1xw085fzt3skgx:85e4a7e36372ac1e47c80f4b81a78d62@99560248-15e7-4158-bfde-3c13e3ebf4e9-bluemix.cloudant.com";
const nanodb = nano(process.env.COUCHDB_URL || url);
const fresher = nanodb.use('freshers_sample');
module.exports = { fresher, nano };