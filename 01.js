const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let numbers = "";
while (numbers.length < 3) {
    let num = Math.floor(Math.random ()*10);
    if (numbers.includes(num) === false) {
        numbers = numbers.concat(num);
    }
}




console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
let count = 0;
let answer = 0;

while (answer !== numbers) {
    let numS = 0;
    let numB = 0;
    
    count++;
    answer = rl.question(`${count}번째 시도 : `, (line) => {
        rl.close();
    })
    let arrNum = [...numbers];
    let arrAnswer = Array.from(String(answer));
    
    for (let i = 0; i < numbers.length; i++){ 
        for (let j = 0; j < answer.length; j++) {
            if (arrAnswer[j] === arrNum[i] && i === j) {
                numS++;
            } else if (arrAnswer[j] === arrNum[i] && i !== j){
                numB++;
            }
        }
    console.log(`${numB}B${numS}S`);
    }
}
console.log(`${count}번만에 맞히셨습니다.`);
console.log('게임을 종료합니다.');



// let count = 0 
// function solution(answer) {
//     count++;
//     let arrNum = [...numbers];
//     let arrAnswer = Array.from(String(answer));

//     let numS = 0;
//     let numB = 0;
//     for (let i = 0; i < numbers.length; i++){ 
//         for (let j = 0; j < answer.length;j++) {
//             if (arrAnswer[j] === arrNum[i] && i === j) {
//                 numS++;
//             } else if (arrAnswer[j] === arrNum[i] && i !== j){
//                 numB++;
//             }
//         }
//     console.log(`${numB}B${numS}S`);
//     }

// }


    







