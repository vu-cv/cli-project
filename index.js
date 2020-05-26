#!/usr/bin/env node

const fetch = require("node-fetch");

const website = process.argv[2];
console.log(website);

function CheckWeb(name) {
    const info = fetch(`https://isitup.org/${name}.json`)
        .then(response => response.json());

    info.then(result => {
        console.log('result', result);

        if (result.response_code == 200) {
            console.log('website is up and running')
        } else {
            console.log('website is down')
        }
    })
}
CheckWeb(website);