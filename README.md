# (npm) node-datetime-thai

ฟิเจอร์พื้นฐานสำหรับการใช้งาน:

 * สำหรับการดึงข้อมูลวันที่ เวลา เป็นภาษาไทย
 * วันจันทร์ - อาทิตย์
 * เดือนมกราคม - ธันวาคม
 * ปี พ.ศ. (ค.ศ. + 543)

## การติดตั้ง - Install
This is [on npm](https://www.npmjs.com/package/node-datetime-thai).

```node
npm install --save node-datetime-thai
```

## การประกาศใช้งาน - Initial

```javascript
require('node-datetime-thai');
```

## Method Available
 * getThaiPattern
 * getThaiDay
 * getThaiFullDay
 * getThaiMonth
 * getThaiFullMonth
 * getThaiYear
 * getThaiFullDay
 * toThaiString
 * getThaiShortTime
 * getThaiFormalShortTime
 * getThaiFormalLongTime

And here's some code! :+1:

```javascript
var Now = new Date();
console.log('Method', 'getThaiDay', Now.getThaiDay());
```

## example
```javascript
require('./../dist/dtthai.js');

var Now = new Date();
var thai_pattern = Now.getThaiPattern();

console.log('Method', 'getThaiDay', Now.getThaiDay());
console.log('Method', 'getThaiFullDay', Now.getThaiFullDay());

console.log('Method', 'getThaiMonth', Now.getThaiMonth());
console.log('Method', 'getThaiFullMonth', Now.getThaiFullMonth());

console.log('Method', 'getThaiYear', Now.getThaiYear());
console.log('Method', 'getThaiFullDay', Now.getThaiFullDay());

console.log('Method', 'toThaiString minimal', Now.toThaiString(thai_pattern.minimal));
console.log('Method', 'toThaiString partial', Now.toThaiString(thai_pattern.partial));
console.log('Method', 'toThaiString maximum', Now.toThaiString(thai_pattern.maximum));
console.log('Method', 'toThaiString minimal', Now.toThaiString(1));
console.log('Method', 'toThaiString partial', Now.toThaiString(2));
console.log('Method', 'toThaiString maximum', Now.toThaiString(3));

console.log('Method', 'getThaiShortTime', Now.getThaiShortTime());
console.log('Method', 'getThaiFormalShortTime', Now.getThaiFormalShortTime());
console.log('Method', 'getThaiFormalLongTime', Now.getThaiFormalLongTime());
```
##### Result
```
Method getThaiDay ศ
Method getThaiFullDay ศุกร์
Method getThaiMonth มิ.ย.
Method getThaiFullMonth มิถุนายน
Method getThaiYear 2560
Method getThaiFullDay ศุกร์
Method toThaiString minimal 2 มิ.ย. 2560
Method toThaiString partial 2 มิถุนายน 2560
Method toThaiString maximum วันศุกร์ที่ 2 มิถุนายน พ.ศ.2560
Method toThaiString minimal 2 มิ.ย. 2560
Method toThaiString partial 2 มิถุนายน 2560
Method toThaiString maximum วันศุกร์ที่ 2 มิถุนายน พ.ศ.2560
Method getThaiShortTime บ่ายโมง 43 นาที
Method getThaiFormalShortTime 13 นาฬิกา 43 นาที
Method getThaiFormalLongTime 13 นาฬิกา 43 นาที 40 วินาที
```

This is [on GitHub](https://github.com/XeNoNZaa/node-datetime-thai) so let me know if I've broked it somewhere.

