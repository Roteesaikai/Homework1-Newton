///////////////////////////////////
// 1.Merge two array
// level: \*
// desc: รวม array 2 ตัวเข้าด้วยกัน
// input: [1,2,3] , [4,5,6]
// output: [1,2,3,4,5,6]
const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6];
firstArr.push(...secondArr);
console.log("1:" + `[${firstArr}]`);
///////////////////////////////////
// 2.Filter less than 30
// level: \*
// desc: เอาตัวที่น้อยกว่า 30 ออก
// input: [10,20,30,40,50]
// output: [30,40,50]
const thirdArr = [10, 20, 30, 40, 50];
const moreThan30 = thirdArr.filter((value) => value >= 30);
console.log("2:" + `[${moreThan30}]`);
///////////////////////////////////
// 3.Remove element from array
// level: \* \*
// desc: เอา element ใน array ออกจาก array by index (ไม่จำเป็นต้องเรียงเหมือนเดิม)
// array = [5,6,7,2,4]
// input: 2
// output: [5,6,2,4] (ไม่ตายตัว)
const forthArr = [5, 6, 7, 2, 4];
const removeArr = [];
const removeIndex = 2;
forthArr.map((value, index) => {
  if (index !== removeIndex) {
    x = value;
    removeArr.push(x);
  }
});
console.log("3:" + `[${removeArr}]`);
///////////////////////////////////
// Roman to number
// level: \* \* \*
// input: "XIV"
// output: 14
const Roam = "XIV";
const splitWord = Roam.split("");
const lastIndex = Roam.length;
let sum = 0;
splitWord.map((value, index) => {
  if (value == "X") {
    sum = sum + 10;
  } else if (value == "I" && index !== lastIndex) {
    sum = sum - 1;
  } else if (value == "I" && index == lastIndex) {
    sum = sum + 1;
  } else if (value == "V") {
    sum = sum + 5;
  }
});
console.log("4:" + `[${sum}]`);
///////////////////////////////////
// Remove duplicate from array and sort array
// desc: เอา
// level: โหดนิดหน่อย
// input: [1,2,1,4,5,2,3,4,1,4]
// output: [1,2,3,4,5]
const fifthArr = [1, 2, 1, 4, 5, 2, 3, 4, 1, 4];
const arr = [...fifthArr];
let duplicateArr = [];
let x1 = false;
let x2 = false;
let x3 = false;
let x4 = false;
let x5 = false;
fifthArr.map((value, index) => {
    if (value == 1 && x1 == false) {
        x1 = true;
        duplicateArr.push(1)
        return x1 = true;

    } else if (value == 2 && x2 == false) {
        x2 = true;
        duplicateArr.push(2)
        return x2 = true;
    }
    else if (value == 3 && x3 == false) {
        x3 = true;
        duplicateArr.push(3)
        return x3 = true;
    }
    else if (value == 4 && x4 == false) {
        x4 = true;
        duplicateArr.push(4)
        return x4 = true;
    }
    else if (value == 5 && x5 == false) {
        x5 = true;
        duplicateArr.push(5)
        return x5 = true;
    }
});
console.log("5:" + `[${duplicateArr.sort()}]`);
///////////////////////////////////
// Rotate Array
//    desc: ขยับ array ไปทางขวา n ครั้ง
//    array: [1,2,3,4,5]
//    level: สุดโหด 💀
//    input: 3
//    output: [3,4,5,1,2]
const sixthArr = [1, 2, 3, 4, 5];
const backArr = 3;
const newArr = [...sixthArr];
sixthArr.map((value, index) => {
  if (index < backArr - 1) {
    newArr.push(value);
    newArr.shift(value);
  }
});
console.log("6:" + `[${newArr}]`);
