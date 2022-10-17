// class DataSaver {
    
//     constructor(prices) {
//         this.prices = prices;
//     }

//     set val (str) {
//         if(str && str[0] === "A") {
//             this._val = str;
//         }
//     }

//     get val () {
//         return this._val;
//     }

//     get getTotal () {
//         return this.prices.reduce((preVal, CurrVal) => {
//             return preVal + CurrVal;
//         }, 0);  // 0, 130 = 130 /// 130, 140 = 270 /// 270, 150 = 420
//     }

//     static save (name, data) {
//         const json = JSON.stringify(data);
//         localStorage.setItem(name, json);
//         return true;
//     }

//     static get (name) {
//         const json = localStorage.getItem(name);
//         return JSON.parse(json);
//     }
// }

// const data = new DataSaver([130, 140, 150]);
// data.getTotal = 120;
// data.val = "Apple";
// data.val = "Orange";
// console.log(data.val);

//DataSaver.save("obj", {key: "value"});
// const data = DataSaver.get("obj");
// if(data) {
//     console.log(data);
// }

function count (times) {
    return new Promise((resolve, reject) => {
    const interval = setInterval(function() {
            console.log("Called");
        }, 1000);
        setTimeout(function () {
            clearInterval(interval);
            reject();
        }, times * 1000);
    });
    
}

// Promises

count(3)
.then(() => {console.log("Done")})
.catch((err) => {console.log("Error")})

// Callback Hell

// count(3, function() {
//     count(5, function() {
//         count(3, function() {
//             count(5, function() {
//                 count(3, function() {
//                     count(5, function() {
//                         count(3, function() {
//                         count(5, function() {
//                             console.log("Done");
//                         });
//                     });
//                     });
//                 });
//             });
//         });
//     });
// });