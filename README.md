# Index
### \- Array
* [equals](#equals)

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
