const readline = require("readline");
const mysql = require("mysql");
const { getData } = require('./request');

var request = require('request');

const token = [];

//get token
var options = {
    'method': 'POST',
    'url': 'https://test.api.amadeus.com/v1/security/oauth2/token',
    'headers': {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
        'client_id': 'Axrb5Ujuh70xA7HDAhvCRAbYZwrso6bj',
        'client_secret': 'fG8wmUSEBUXT1RgQ',
        'grant_type': 'client_credentials'
    }
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    token.push(JSON.parse(response.body).access_token)
});
//get token

var adults = 1;
var max = 25;

//get mysql db data (airport and fltclass)
const dbData = []
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "steven"
})

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT airport, fltclass FROM users_copy1", function (err, result, fields) {
        if (err) throw err;
        dbData.push(result);
    })
});
//get mysql db data (airport and fltclass)

//get user input Data
const userInputs = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your departureDate ? ", function saveInput(departureDate) {
    console.log(`departureDate is ${departureDate}`);
    userInputs.push(departureDate)
    rl.question("What is your return date ? ", function saveInput(returnDate) {
        console.log(`returnDate is ${returnDate}`);
        userInputs.push(returnDate)
        rl.question("What is your destinationLocationCode ? ", function saveInput(destinationLocationCode) {
            console.log(`destinationLocationCode is ${destinationLocationCode}`);
            userInputs.push(destinationLocationCode)
            rl.close();
        });
    });
});

rl.on("close", async () => {
    const result = [];
    let i = 0;
    for (const item of dbData[0]) {
        result.push(null);
    }
    let count = 0;
    for (const item of dbData[0]) {
        const url = "/v2/shopping/flight-offers?originLocationCode=" + item.airport + "&destinationLocationCode=" + userInputs[2] + "&departureDate=" + userInputs[0] + "&returnDate=" + userInputs[1] + "&adults=" + adults + "&max=" + max + "&travelClass=" + item.fltclass;
        let index = i;
        getData(url, token[0]).then((tempResult) => {
            result[index] = tempResult;
            count++;
            if (dbData[0].length == count) {
                console.log(result.toString());
            }
        }).catch((error) => {
            console.error(error);
        });
        i++;
    }
});

//get user input Data
