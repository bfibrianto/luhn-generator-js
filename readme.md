# Javascript Luhn Checksum Algorithm Generator 

This is code for generating checksum number using javascript language. I make this code based on tutorial provided by https://www.hashbangcode.com/article/create-checksums-using-luhn-algorithm-php. Check their website for the algorithm and code details.

## Generate Checksum

* You can use generateLuhnChecksum.js to generate checksum, just pass your number in the only and first argument
`const luhnGenerator = require('generateLuhnChecksum')`
`const number = 123456789`
`const checksum = luhnGenerator(number)`

## Using generator playground
Just run index.html on your browser, input number, and click submit.