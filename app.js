'use strict';
//importみたいなやつ
const fs = require("fs")
const readline = require("readline")

const rs = fs.createReadStream('./popu-pref.csv')
const ls = readline.createInterface({ input: rs, output: {} })
//node.jsにおけるストリーム　＝＝　非同期で情報を操る概念？？RX
ls.on('line', lineString => {
  const columns = lineString.split(',');
  const year = parseInt(columns[0]);
  const prefecture = columns[1];
  const popu = parseInt(columns[3]);
  if (year === 2010 || year === 2015) {
    console.log(year);
    console.log(prefecture);
    console.log(popu);
  }
});
