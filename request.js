
var https = require('follow-redirects').https;


const getData = (url, token) => {

    // console.log("url: ", url);

    return new Promise((resolve, reject) => {
        const options = {
            'method': 'GET',
            'hostname': 'test.api.amadeus.com',
            'path': url,
            'headers': {
                'Authorization': 'Bearer ' + token
            },
            'maxRedirects': 20
        };

        const req = https.request(options, function (res) {
            const chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function (chunk) {
                const body = Buffer.concat(chunks);
                resolve(body.toString());
            });

            res.on("error", function (error) {
                reject(error);
            });
        });

        req.end();
    })
};

module.exports = {
    getData
}