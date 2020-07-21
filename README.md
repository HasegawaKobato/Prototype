# Index
### \- Array
* [equals](#equals)
* [softmax](#softmax)

### \- Date
* [getWeek](#getWeek)
 
---

## Array
### equals()
Compare two arrays if they are equal.
#### example1:
```
let array1 = [
    20, 
    {
        isArray: false,
        data: "string"
    },
    [
        50,
        "number",
        [
            "array",
            0,
            []
        ]
    ]
]
let array2 = [
    20, 
    {
        isArray: false,
        data: "string"
    },
    [
        50,
        "number",
        [
            "array",
            0,
            []
        ]
    ]
]

array1.equals(array2)
```
*result: true*

#### example2:

```
let array1 = [
    20, 
    {
        isArray: false,
        data: "string"
    },
    [
        50,
        "number",
        [
            "array",
            0,
            []
        ]
    ]
]
let array2 = [
    20, 
    {
        isArray: false,
        data: [
            "This difference will cause the comparison return false."
        ]
    },
    [
        50,
        "number",
        [
            "array",
            0,
            []
        ]
    ]
]

array1.equals(array2)
```
*result: false*

### softmax()
Softmax function in mathematics.
#### example1:

```
let a = [1,2,3,4,1,2,3];

Array.prototype.softmax = function () {
    let sum = this.map(item => {
        return Math.exp(item);
    })
    .reduce((a,b) => {
        return a + b
    });
    return this.map(item => {
        return Math.exp(item) / sum;
    })
}

a.softmax();
```
*result: [0.023640543021591385, 0.06426165851049616, 0.17468129859572226, 0.4748329997443803, 0.023640543021591385, 0.06426165851049616, 0.17468129859572226]*

---

## Date
### getWeek()
Get week number of year.
#### example1:
```
new Date('2020/12/3').getWeek();
```
*result: 49*

#### example2:
```
new Date(1555430400000).getWeek();
```
*result: 16*
