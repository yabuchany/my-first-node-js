'use strict';
// process.argv は Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列です。

// なぜ添字として 2 番を使っているかというと、0 番には node コマンドのファイルのパスが入り、
// 1 番には、実行しているプログラムのファイルのパスが入る、という決まりがあるためです。
// コマンドの後ろに書いた最初の引数は process.argv[2] なのです。

// 左に値がないときは、0を使って欲しい。
const number = process.argv[2] || 0;
let sum = 0;
for(let i = 1;i <= number; i++){
    sum = sum + i;  // 0,1,3,6,10.....
}
console.log(sum);