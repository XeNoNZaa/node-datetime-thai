'use strict'

const _str_day = {
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

const _str_month = {
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

this.thai_pattern = {
  'minimal': 1,
  'partial': 2,
  'maximum': 3
}

Date.prototype.toThaiString = function (pattern_num) {

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