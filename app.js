const Twit = require('twit'),
T = new Twit(require('./config.js')),
const hashtagSearch = { q: '#producer', count: 10, result_type: 'recent'}
