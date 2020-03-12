const cors = require('cors');

const corsHandler = (app) => {
    let whiteListDomains = ['http://localhost:4200'];
    const corsOptions = {
        origin: function(origin, callback) {
            if(whiteListDomains.length < 1 || whiteListDomains.indexOf(origin) !== -1 || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        // origin: 'http://localhost:4200',
        credentials: true
    };
    return cors(corsOptions);
};
module.exports = corsHandler;