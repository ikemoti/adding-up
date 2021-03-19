'use strict';
//importみたいなやつ
const fs = require("fs")
const readline = require("readline")

const rs = fs.createReadStream('./popu-pref.csv')
const ls = readline.createInterface({ input: rs, output: {} })
//node.jsにおけるストリーム　＝＝　非同期で情報を操る概念？？RX
ls.on('line', lineString => {
  console.log(lineString);
});
