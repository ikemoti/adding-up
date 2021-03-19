'use strict';
//importみたいなやつ
const fs = require("fs")
const readline = require("readline")

const rs = fs.createReadStream('./popu-pref.csv')
const ls = readline.createInterface({ input: rs, output: {} });
const prefectureDataMap = new Map();

//node.jsにおけるストリーム　＝＝　非同期で情報を操る概念？？RX
ls.on('line', lineString => {
  const columns = lineString.split(',');
  const year = parseInt(columns[0]);
  const prefecture = columns[1];
  const popu = parseInt(columns[3]);
  if (year === 2010 || year === 2015) {
    let value = prefectureDataMap.get(prefecture);
    if (!value) {
      value = {
        popu10: 0,
        popu15: 0,
        change: null
      };
    }
    if (year === 2010) {
      value.popu10 = popu;
    }
    if (year === 2015) {
      value.popu15 = popu;
    }
    prefectureDataMap.set(prefecture, value);
  }
});
ls.on('close', () => {
  for (let [key, value] of prefectureDataMap) {
    value.change = value.popu15 / value.popu10;
  }
  console.log(prefectureDataMap);
});
