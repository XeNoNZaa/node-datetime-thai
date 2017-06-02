'use strict'

var _str_day = {
  ABB: [
    'อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'
  ],
  FULL: [
    'อาทิตย์',
    'จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัสบดี',
    'ศุกร์',
    'เสาร์'
  ]
}

var _str_month = {
  ABB: [
    'ม.ค.',
    'ก.พ.',
    'มี.ค.',
    'เม.ย.',
    'พ.ค.',
    'มิ.ย.',
    'ก.ค.',
    'ส.ค.',
    'ก.ย.',
    'ต.ค.',
    'พ.ย.',
    'ธ.ค.',
  ],
  FULL: [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฏาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤษจิกายน',
    'ธันวาคม',
  ]
}

var thai_patterns = {
  'minimal': 1,
  'partial': 2,
  'maximum': 3
}

Date.prototype.getThaiPattern = function () {
  return thai_patterns;
}
Date.prototype.toThaiString = function (pattern_num) {
  /*
  minimal : 31 พ.ค. 2560
  partial : 31 พฤษภาคม 2560
  maximum : วันพุธ ที่ 31 พฤษภาคม พ.ศ.2560
  */
  pattern_num = pattern_num || thai_patterns.minimal;
  switch (pattern_num) {
    case thai_patterns.minimal:
      return [this.getDate(), this.getThaiMonth(), this.getThaiYear()]
        .join(' ');
    case thai_patterns.partial:
      return [this.getDate(), this.getThaiFullMonth(), this.getThaiYear()]
        .join(' ');
    case thai_patterns.maximum:
      return 'วัน' + [this.getThaiFullDay(), 'ที่', this.getDate(), this.getThaiFullMonth(), 'พ.ศ.', this.getThaiYear()]
        .join(' ');

    default:
      return [this.getDate(), this.getThaiMonth(), this.getThaiYear()]
        .join(' ');
  }
}

Date.prototype.getThaiDay = function () {
  return _str_day.ABB[this.getDay()];
}
Date.prototype.getThaiFullDay = function () {
  return _str_day.FULL[this.getDay()];
}

Date.prototype.getThaiMonth = function () {
  return _str_month.ABB[this.getMonth()];
}
Date.prototype.getThaiFullMonth = function () {
  return _str_month.FULL[this.getMonth()];
}

Date.prototype.getThaiYear = function () {
  return this.getFullYear() + 543;
}

Date.prototype.getThaiShortTime = function () {
  var seperator = seperator || ' ';
  var hour = this.getHours();
  var minute = this.getMinutes();
  var result = [];

  //Read Hour
  if (hour == 0) {
    result.push('เที่ยงคืน');

  } else if (hour > 0 && hour <= 5) {
    result.push('ตี');
    result.push(hour % 12);

  } else if ((hour > 5 && hour <= 11)) {
    result.push(hour % 12);
    result.push('โมง');

  } else if (hour == 12) {
    result.push('เที่ยง');

  } else if (hour > 12 && hour <= 15) {
    result.push('บ่าย');
    if (hour == 13)
      result[result.length - 1] += 'โมง';
    else {
      result.push(hour - 12);
      result.push('โมง');
    }

  } else if (hour > 15 && hour <= 18) {
    result.push(hour % 12);
    result.push('โมง');

  } else {
    if (hour % 18 > 1)
      result.push(hour % 18);
    result.push('ทุ่ม');
  }

  //Read Minute
  if (minute == 0) {
    if (hour > 5 && hour <= 9)
      result[result.length - 1] += 'เช้า';
    if (hour > 15 && hour <= 18)
      result[result.length - 1] += 'เย็น';

  } else if (minute == 30) {
    if (typeof result[result.length - 1] == 'string')
      result[result.length - 1] += 'ครึ่ง';
    else
      result.push('ครึ่ง');

  } else if (minute > 0) {
    result.push(minute);
    result.push('นาที');
  }

  return result.join(seperator);
}

Date.prototype.getThaiFormalShortTime = function () {
  var seperator = seperator || ' ';
  var hour = this.getHours();
  var minute = this.getMinutes();
  var second = this.getSeconds();
  var result = [];

  result.push(hour);
  result.push('นาฬิกา');

  if (minute > 0) {
    result.push(minute);
    result.push('นาที');
  }
  if (second > 0) {
    result.push(second);
    result.push('วินาที');
  }

  return result.join(seperator);
}

Date.prototype.getThaiFormalLongTime = function () {
  var seperator = seperator || ' ';
  var hour = this.getHours();
  var minute = this.getMinutes();
  var second = this.getSeconds();
  var result = [];

  result.push(hour);
  result.push('นาฬิกา');
  result.push(minute);
  result.push('นาที');
  result.push(second);
  result.push('วินาที');

  return result.join(seperator);
}