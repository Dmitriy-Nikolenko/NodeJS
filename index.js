const colors = require("colors/safe");
let n = Number(process.argv[2])

let num = []
let gnum = []
let ynum = []
let rnum = []

if (n || n === 0) {

    if (n === 0 || n === 1) {
        console.log(colors.red("Простых чисел в диапазоне нет"));

    } else {

        for (let i = 2; i <= n; i++) {
            let flag = 1;
            if (i > 2 && i % 2 !== 0)
            {
                for (let j = 3; j*j <= i ; j=j+2)
                {
                    if (i%j===0)
                    {
                        flag=0;
                        break;
                    }
                }
            }
            else if (i !== 2) flag = 0;
            if (flag===1) {
                num.push(i);
            }

        }
    }


}
else {
    console.log("Вы ввели не число");
   }

for(let i=0; i<num.length; i+=3){
    gnum.push(num[i])
}
for(let i=1; i<num.length; i+=3){
    ynum.push(num[i])
}
for(let i=2; i<num.length; i+=3){
    rnum.push(num[i])
}

for (i =0; i<num.length; i++) {
    if(gnum[i]) {
        console.log(colors.green(gnum[i]))
    }
    if(ynum[i]) {
        console.log(colors.yellow(ynum[i]))
    }
    if(rnum[i]) {
        console.log(colors.red(rnum[i]))
    }

}





