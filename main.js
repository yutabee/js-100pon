//20 一週間の予定
// function getPaidHolidays(s) {
//     const s_arr = s.split(' ');

//     const yes_arr = s_arr.filter(x => x === 'no');
//     return yes_arr.length;
// }
// console.log(getPaidHolidays("yes yes yes yes no no yes")); // 2
// console.log(getPaidHolidays("yes no no no no no yes")); // 5


//21 nまでの和
// function getSum(n) {
//     let sum = 0;
//     const num_arr = [...Array(n).keys()].map(x => x + 1);
//     for (num of num_arr) {
//         sum += num
//     }
//     return sum;
// }

// console.log(getSum(10)); // 55
// console.log(getSum(99)); // 4950

// //22 数字の桁数
// function getNumberOfDigits(n) {
//     return n.toString().length;
// }

// console.log(getNumberOfDigits(100)); // 3
// console.log(getNumberOfDigits(114514)); // 6


//23 サイコロの裏面の数
// function getBackSide(n) {
//     return 7 - n;
// }

// console.log(getBackSide(1)); // 6
// console.log(getBackSide(3)); // 4

//24 分から秒に変換
// function convertToSeconds(n) {
//     return n * 60;
// }
// console.log(convertToSeconds(16)); // 960
// console.log(convertToSeconds(3)); // 180

//25 充電にかかる時間
// function getTimeUntilFull(n) {
//     return 100 - n;
// }
// console.log(getTimeUntilFull(70)); // 30
// console.log(getTimeUntilFull(25)); // 75


//26イニシャル出力
// function getInitialFromName(s) {
//     const s_arr = s.split(' ').map(x => x.split(''));
//     return s_arr[0][0] + '.' + s_arr[1][0];
// }

// console.log(getInitialFromName("Dio Brando")); // D.B
// console.log(getInitialFromName("Pannacotta Fugo")); // P.F
// console.log(getInitialFromName("Gyro Zeppeli")); // G.Z


// //27 
// function choiceOfGod(n) {
//     const choice = 21 % n;
//     if (choice === 0) {
//         return n;
//     } else {
//         return choice;
//     }
// }

// console.log(choiceOfGod(4)); // 1
// console.log(choiceOfGod(3)); // 3


//28 日付のデータ
// function formatYMD(s) {
//         let arr = s.split(' ');
//           return (
//             arr[0].padStart('4', '0') +
//             '/' +
//             arr[1].padStart('2', '0') +
//             '/' +
//             arr[2].padStart('2', '0')
//           );
//       }

// console.log(formatYMD("2021 1 1")); // 2021/01/01
// console.log(formatYMD("2020 10 10")); // 2020/10/10
// console.log(formatYMD("794 11 29")); // 0794/11/29

// //29 正規表現
// function convertAtToAtMark(s) {
//         return s.replace(/at/g, "@");
//       }

// console.log(convertAtToAtMark("gsatcodeatquantity")); // gs@code@quantity
// console.log(convertAtToAtMark("atatatjojoatatat")); // @@@jojo@@@



//30 花粉症でつらい
// function getNeedBox(m, n) {
//         return Math.ceil(n / m);
//     }
    
// console.log(getNeedBox(7, 30)); // 5
// console.log(getNeedBox(3, 100)); // 34
// console.log(getNeedBox(7, 5)); // 1


// function canStoreBooks(s) {
//     const arr = s.split(' ');
//     const shelfWidth = Number(arr[1]) * Number(arr[2]);
//     const bookWidth = Number(arr[0]);
//           return bookWidth <= shelfWidth ? "OK" : "NG";
//     } 

// console.log(canStoreBooks("400 5 85")); // OK
// console.log(canStoreBooks("500 4 70")); // NG


// //31 総当り戦回数
// function calculateNumberOfGames(n) {
//     let counter = 0;
//     const arr = [...Array(n).keys()];
//     for (a of arr) { counter += a };
//     return counter;
//       }

// console.log(calculateNumberOfGames(4)); // 6
// console.log(calculateNumberOfGames(10)); // 45


// //32
// function daysOfGoOut(s) {
//         const arr = s.split(' ');
//         return arr.filter(x => Number(x) <= 30).length;
//       }

// console.log(daysOfGoOut("13 0 15 30 89 100 30")); // 5
// console.log(daysOfGoOut("0 14 18 22 0 2 4")); // 7
// console.log(daysOfGoOut("99 99 99 99 99 99 99")); // 0
      
//33
// function isEquilateralTriangle(s) {
//         const arr = s.split(' ').map(x=>Number(x));
//         if (arr[0] === arr[1] && arr[1] === arr[2]) {
//           return 'Yes';
//         } else {
//           return 'No';
//         }
//       }

// console.log(isEquilateralTriangle('10 10 10')); // yes
// console.log(isEquilateralTriangle('3 4 5')); // No
      
//34
// function showWeather(n) {
//         if (n >= 0 && n <= 30) {
//           return "sunny";
//         } else if (n >= 31 && n <= 70) {
//           return "cloudy";
//         } else if(n >= 71 && n <= 100){
//           return "rainy";
//         }
//       }

//       console.log(showWeather(31)); // cloudy
//       console.log(showWeather(2)); // sunny
//       console.log(showWeather(71)); // rainy


//36
// function greet(s1, s2) {
//         if (s2 === "M") {
//           return "Hi, Mr." + s1;
//         } else if(s2 === "F") {
//           return "Hi, Ms." + s1;
//         }
//       }

// console.log(greet("Stroheim", "M")); // Hi, Mr.Stroheim
// console.log(greet("Trish", "F")); // Hi, Ms.Trish


// //37
// function convertNumberToAlphabet(s) {
//     const arr = s.split('').map(x => Number(x));
//     const change_arr = arr.map(x => {
//         if (x === 5) {
//             return 'A';
//         } else if (x === 4) {
//             return 'B';
//         } else if (x === 3) {
//             return 'C';
//         } else if (x === 2) {
//             return 'D';
//         } else if (x === 1) {
//             return 'E';
//         }
//     })
//     return change_arr.join('');
//     }

    //   console.log(convertNumberToAlphabet("53342")); // ACCBD
    //   console.log(convertNumberToAlphabet("22222")); // DDDDD
    //   console.log(convertNumberToAlphabet("51111")); // AEEEE
      

// //38 配列の最大値
// function getNumberOfSteps(s) {
//         const arr = s.split(' ');
//         const max_num = Math.max(...arr);
//         return max_num;
//     }

//     console.log(getNumberOfSteps("1 2 5")); // 5
//     console.log(getNumberOfSteps("2 5 5")); // 5
//     console.log(getNumberOfSteps("1 2 1")); // 2

// //39
// function getInterval(s) {
//     const arr = s.split(' ');
//     const calc_arr = [];
//         for (let i = 1; i < arr.length; i++) {
//           calc_arr.push(Number(arr[i]) - Number(arr[i - 1]));
//         }
//         return calc_arr.join(' ');
//       }

//     console.log(getInterval("5 8 19 25 31")); // 3 11 6 6
// console.log(getInterval("2 3 7 9 28")); // 1 4 2 19
    

// //40
// function getAutumn(s) {
//        return s.replace("noaki", "");
//       }

// console.log(getAutumn("codenoaki")); // code
// console.log(getAutumn("dokusyo")); // dokusyo
// console.log(getAutumn("javascriptnoaki")); // javascript
      


// 完全数とほぼ完全数
const isPerfectNumber = (str) => {

const str_num_array = str.split(' ');
const num_arr = str_num_array.map(x => Number(x));
const nest_arr = num_arr.map(x=> [...Array(x).keys()]);
const arr = [];
    
    for (x of nest_arr) {
         let dsr_sum = 0;
    x.map((y) => {
        if (x.length % y === 0) {
            dsr_sum += y;
        };
    }) 
        
        if (x.length - dsr_sum === 0) {
            arr.push('perfect');
        } else if (x.length - dsr_sum === 1 || x.length - dsr_sum === -1) {
            arr.push('nearly'); 
        } else {
            arr.push('neither');
        }
    };

    return arr.join(' ');
};

// console.log(isPerfectNumber("28 16 777")); // perfect nearly neither
// console.log(isPerfectNumber("3 4 5 6")); // neither nearly neither perfect




// 単語テストの採点
const calculatePoint = (s) =>{
    const array_s = s.split(',').map(x => x.split(' '));
    let point = 0;
    // console.log(array_s);
    const sepa_s = array_s.map(x => x.map(y=>y.split('')));

    array_s.map((x) => {
        if (x[0] === x[1]) {
            point += 2;
        } else if (x[0].length === x[1].length) {
            point += 1;
        } else {
            point += 0;
        }
    })

    return point;
}



// console.log(calculatePoint("apple aple,orange olange,grape glepe,lemon lemon")); // 3
// console.log(
//   calculatePoint(
//     "january januarry,february febrary,march march,april aplil,may may,june june,july jury,august ougust,september septenber,october october,november novembar,december dicembar"
//   )
// ); // 13



