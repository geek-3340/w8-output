// D109:ゾロ目の日付

// 11 月 11 日が迫るある日、あなたはゾロ目の日付を判定するプログラムを作成することにしました。

// ゾロ目の日とはある日付に対して 月 と 日 に含まれる全ての桁の数字が同じものを指します。
// スペース区切りで月と日が与えられるのでゾロ目の日であれば "Yes" そうでなければ "No" と出力してください。

// 例えば入力例 1 では 11 月 1 日が以下のように与えられます。

// 11 1
// この場合、月と日ともに 1 のゾロ目なので

// Yes
// と出力して下さい。

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const arr = lines[0].split(' ');
  let m = parseInt(arr[0]);
  let d = parseInt(arr[1]);

  if (m <= 9) {
    m *= 11;
  } else {
    m = m;

  }
  if (d <= 9) {
    d *= 11;
  } else {
    d = d;
  }
  let YoN = 'Yes';
  if (!m === d) {
    YoN = 'No';
  } else if (m === 12) {
    YoN = 'No';
  } else if (d === 12) {
    YoN = 'No';
  } else {
    YoN = YoN;
  }
  console.log(YoN);
});

// D233:3人の経験値
// A 君の経験値は a ポイントで、B 君の経験値は b ポイント、C 君の経験値は c ポイントです。3 人の合計の経験値は何ポイントですか？

// 入力例 1 の場合

// 180
// 150
// 100
// A 君の経験値の 180 ポイントと B 君の経験値の 150 ポイント、C 君の経験値の 100 ポイントを合計して、
// 430
// と出力してください。

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  lines[0] = parseInt(lines[0]) + parseInt(lines[1]) + parseInt(lines[2]);
  console.log(lines[0]);
});

// D187:【シュタゲコラボ問題】曲名の表記
// あなたは曲名と歌手名を表示をするプログラムを作成しています。

// 曲名と歌手名が改行区切りで入力されるので曲名、歌手名の順に「/」区切りの1行で出力してください。

// 入力例 1 の場合

// Programming
// Paiza
// と入力されるので
// Programming/Paiza
// と出力してください。

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  console.log(lines.join('/'));
});

// D142:【キャンペーン問題】イルミネーションの数

// クリスマスといえばやはりイルミネーションです。あなたはある並木道の木に電飾を施そうと考えています。大量の電球が必要になるので、あらかじめ必要な個数を数えて一度に注文しようと考えています。もっとも、予算には限りがあるので、一定の間隔で電飾を施すことにしています。

// 端の木には必ず電飾を施すこととしたとき、並木道の木の本数、一本あたりの装飾に必要な電球の数、何本ごとに電飾を施すかが与えられるので必要な電球の数を計算するプログラムを作成してください。

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const arr = lines[0].split(' ');
  const num1 = parseInt(arr[0]) / parseInt(arr[1]);
  const num2 = Math.round(num1);
  const num3 = num2 * parseInt(arr[2]);
  console.log(num3);
});

// C016:Leet文字列
// Leet と呼ばれるインターネットスラングがあります。
// Leet ではいくつかのアルファベットをよく似た形の他の文字に置き換えて表記します。 Leet の置き換え規則はたくさんありますが、ここでは次の置き換え規則のみを考えましょう。

// 置き換え前	置き換え後
//  A        	4
//  E	        3
//  G	        6
//  I	        1
//  O	        0
//  S	        5
//  Z	        2
// 文字列が入力されるので、これを Leet に変換して出力するプログラムを書いてください。

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  lines[0] = lines[0].replaceAll('A', '4')
    .replaceAll('E', '3')
    .replaceAll('G', '6')
    .replaceAll('I', '1')
    .replaceAll('O', '0')
    .replaceAll('S', '5')
    .replaceAll('Z', '2');
  console.log(lines[0]);
});

// C017:ハイアンドロー・カードゲーム
// paizaカードゲームは、複数枚の子カードそれぞれが、1枚の親カードとの強弱関係で勝負するゲームです。

// どのカードにも2つの番号が書かれています。
// 1つ目の番号は1から10の整数、2つ目の番号は1から4の整数で表されます。
// また、2つの番号の各組み合わせは1枚だけカードの束に含まれています。(同じカードが2枚以上存在しません)

// 2枚のカードの強弱関係は、次のルールによって決まります。
// ・1つ目の番号が大きいカードのほうが強い
// ・1つ目の番号が同じ場合、2つ目の番号が小さいカードのほうが強い

// 親カードと子カードの情報が与えられるので、それらの強弱関係を調べるプログラムを作成してください。

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {

  let pearent = lines[0].split(' ');
  const n = parseInt(lines[1]) + 2;
  let child;

  for (var i = 2; i < n; i++) {

    child = lines[i].split(' ');
    if (parseInt(pearent[0]) > parseInt(child[0])) {
      console.log('High');
    } else if (parseInt(pearent[0]) < parseInt(child[0])) {
      console.log('Low');
    } else {
      if (parseInt(pearent[1]) < parseInt(child[1])) {
        console.log('High');
      } else {
        console.log('Low');
      }
    }
  }
});