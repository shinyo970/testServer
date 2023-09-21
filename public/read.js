const fs=require('fs');
const path=require('path');
var p = new Promise(function (resolve, reject) {
    fs.readFile(path.join('public/','a.txt'), function (err, data) {
        if (err) {
            console.log('读取a失败', err);
            reject();
        } else {
            resolve(JSON.parse(data.toString()))
        }
    })
})
module.exports={
    p
}