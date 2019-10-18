//ファイルの有無を確認してファイル作成または値の入力

var fs = require('fs');
//ファイルの有無の確認
    try {
    var msg ;
    fs.statSync('./test.csv');
    //ファイルがある場合センサー値入力
    msg ="1,1,1,1,1,1,1,1,1,1,1,1,1\n";
    console.log(msg);
    fs.appendFileSync("test.csv", msg);

    return msg;

  } catch(err) {
    //ファイルがない場合、ファイルを作成し項目を入力
    msg = "";
    msg += "timestamp" + ",";
    msg += "no" + ",";
    msg += "temperature" + ",";
    msg += "relativeHumidity" + ",";
    msg += "ambientLight" + ",";
    msg += "uvindex" + ",";
    msg += "barometricPressure" + ",";
    msg += "soundNoise" + ",";
    msg += "discomfortindex" + ",";
    msg += "heatstroke" + ",";
    msg += "battery" + ",";
    msg += "adData1" + ",";
    msg += "mac\n" ;


    console.log(msg);
    fs.writeFileSync("test.csv", msg);
    return msg;

  }


///var/webui/upload_dir/aaaa.js
