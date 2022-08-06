const rl = require("readline-sync");
const a = rl.question('nhập giá tiền có để mua ô tô: ');
function main() {
    card(a)
        .then((result)=>{
            console.log(result)
        })
        .catch((err)=>{
            console.log(err)
        })
}
main()
function card(inputMoney){
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if(inputMoney > 10 && inputMoney < 20){
                resolve(`bạn có thể mua dc 1 chiếc ô tô vs giá ${inputMoney}`);
            }else if(inputMoney >= 20){
                resolve(`bạn có thể mua dc nhiều chiếc ô tô vs giá ${inputMoney}`);
            }else {
                reject(new Error('Hãy sách đít lên và đi làm để có tiền mua oto !'))
            }
        }, 1000)
    })
}