//==================================
//               Array
//==================================
//----------------------------
// 比較兩個陣列是否完全相同
//----------------------------
Array.prototype.equals = function (arr) {
    if (!Array.isArray(arr)) return console.error("Please input Array data.");
    let twoDArrayA = [];
    let twoDArrayB = [];
    pushFinalArray(arr, 0)
    pushFinalArray(this, 1)

    return compareArray(twoDArrayA, twoDArrayB);
    
    function pushFinalArray(tempArr, type) {
        let donHaveArray = true;
        let arrayIndex = [];
        for (let i = 0 ; i < tempArr.length; i ++) {
            if (typeof tempArr[i] == "object") {
                if(Array.isArray(tempArr[i])) {
                    pushFinalArray(tempArr[i], type);
                    arrayIndex.push(i);
                    donHaveArray = false;
                } else {
                    try {
                        tempArr[i] = JSON.stringify(tempArr[i]);
                    } catch {
                        console.error("Unknown Object type.");
                    }
                }
            }
        }
        let fakeData = [];
        for (let a = 0 ; a < tempArr.length; a ++) {            
            if (!arrayIndex.includes(a)) {
                fakeData.push(tempArr[a]);
            } else {
                fakeData.push("Array");
            }
        }
        if (donHaveArray) {
            if (type == 0) {
                twoDArrayA.push(tempArr);
            } else if (type == 1) {
                twoDArrayB.push(tempArr);
            }
        } else {
            if (type == 0) {
                twoDArrayA.push(fakeData);
            } else if (type == 1) {
                twoDArrayB.push(fakeData);
            }
        }
    }

    function compareArray(A, B) {
        if (A.length != B.length) return false;
        for (let i = 0 ; i < A.length; i ++) {
            if (A[i].length != B[i].length) return false;
            for (let s = 0 ; s < A[i].length; s ++) {
                if (A[i][s] !== B[i][s]) return false;
            }
        }
        return true;
    }
}
//==================================
//               Date
//==================================
//----------------------------
// 取得特定日期在當年的週數
//----------------------------
Date.prototype.getWeek = function () {
    if (this == 'Invalid Date') {
        throw `Invalid Date.`;
    }
    let result = 0;
    let timeInterval = new Date(this.getFullYear() + '/1/1').getTime();
    let nextWeek, newYearWeek;
    loop1:
    for (let i = 0 ; i < 7; i ++) {
        if (new Date(this.getTime() - i * 86400000).getDay() == 0) {
            if (i != 0) {
                result ++;
            }
            nextWeek = new Date(new Date(this.getTime() - i * 86400000).toLocaleDateString());
            break loop1;
        }
    }
    loop2:
    for (let i = 0 ; i < 7; i ++) {
        if (new Date(timeInterval + i * 86400000).getDay() == 0) {
            if (i != 0) {
                result ++;
            }
            newYearWeek = new Date(new Date(timeInterval + i * 86400000).toLocaleDateString());
            break loop2;
        }
    }
    let interval = nextWeek.getTime() - newYearWeek.getTime();
    return result + Math.floor(interval / 604800000);
}
