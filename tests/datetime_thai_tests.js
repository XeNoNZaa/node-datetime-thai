var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
require('./../src/datetime_thai');

//'วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560'
var newYear2017 = new Date('2017-01-01 08:00:00');
var newYear2017_afternoon_13 = new Date('2017-01-01 13:00:00');
var newYear2017_afternoon_14 = new Date('2017-01-01 14:00:00');
var newYear2017_afternoon_16 = new Date('2017-01-01 16:00:00');
var newYear2017_night_20 = new Date('2017-01-01 20:00:00');
var newYear2017_night_22 = new Date('2017-01-01 20:00:00');
var newYear2017_night_23 = new Date('2017-01-01 20:00:00');
var newYear2017_midnight = new Date('2017-01-01 00:02:00');

describe('Datetime for Thai (Static pattern)', function () {
  it('datetime.getThaiPattern should return Object if no string () are passed in', function () {
    expect(typeof newYear2017.getThaiPattern()).to.equal('object');
  });
  it('datetime.getThaiPattern().minimal should return 1 if no string () are passed in', function () {
    expect(newYear2017.getThaiPattern().minimal).to.equal(1);
  });
  it('datetime.getThaiPattern().partial should return 2 if no string () are passed in', function () {
    expect(newYear2017.getThaiPattern().partial).to.equal(2);
  });
  it('datetime.getThaiPattern().maximum should return 3 if no string () are passed in', function () {
    expect(newYear2017.getThaiPattern().maximum).to.equal(3);
  });
});
describe('Datetime for Thai: getString (Day, Month, Year)', function () {
  it('datetime.getThaiDay should return "อา" if no string () are passed in', function () {
    expect(newYear2017.getThaiDay()).to.equal('อา');
  });
  it('datetime.getThaiDay should return "อา" if string ("thai") are passed in', function () {
    expect(newYear2017.getThaiDay("thai")).to.equal('อา');
  });
  it('datetime.getThaiDay should return "อา" if number (1) are passed in', function () {
    expect(newYear2017.getThaiDay(1)).to.equal('อา');
  });
  it('datetime.getThaiDay should return "อา" if Object ({example:1}) are passed in', function () {
    expect(newYear2017.getThaiDay({ example: 1 })).to.equal('อา');
  });

  it('datetime.getThaiFullDay should return "อาทิตย์" if no string () are passed in', function () {
    expect(newYear2017.getThaiFullDay()).to.equal('อาทิตย์');
  });
  it('datetime.getThaiFullDay should return "อาทิตย์" if string ("thai") are passed in', function () {
    expect(newYear2017.getThaiFullDay("thai")).to.equal('อาทิตย์');
  });
  it('datetime.getThaiFullDay should return "อาทิตย์" if number (1) are passed in', function () {
    expect(newYear2017.getThaiFullDay(1)).to.equal('อาทิตย์');
  });
  it('datetime.getThaiFullDay should return "อาทิตย์" if Object ({example:1}) are passed in', function () {
    expect(newYear2017.getThaiFullDay({ example: 1 })).to.equal('อาทิตย์');
  });

  it('datetime.getThaiMonth should return "ม.ค." if no string () are passed in', function () {
    expect(newYear2017.getThaiMonth()).to.equal('ม.ค.');
  });
  it('datetime.getThaiMonth should return "ม.ค." if string ("thai") are passed in', function () {
    expect(newYear2017.getThaiMonth("thai")).to.equal('ม.ค.');
  });
  it('datetime.getThaiMonth should return "ม.ค." if number (1) are passed in', function () {
    expect(newYear2017.getThaiMonth(1)).to.equal('ม.ค.');
  });
  it('datetime.getThaiMonth should return "ม.ค." if Object ({example:1}) are passed in', function () {
    expect(newYear2017.getThaiMonth({ example: 1 })).to.equal('ม.ค.');
  });

  it('datetime.getThaiFullMonth should return "มกราคม" if no string () are passed in', function () {
    expect(newYear2017.getThaiFullMonth()).to.equal('มกราคม');
  });
  it('datetime.getThaiFullMonth should return "มกราคม" if string ("thai") are passed in', function () {
    expect(newYear2017.getThaiFullMonth("thai")).to.equal('มกราคม');
  });
  it('datetime.getThaiFullMonth should return "มกราคม" if number (1) are passed in', function () {
    expect(newYear2017.getThaiFullMonth(1)).to.equal('มกราคม');
  });
  it('datetime.getThaiFullMonth should return "มกราคม" if Object ({example:1}) are passed in', function () {
    expect(newYear2017.getThaiFullMonth({ example: 1 })).to.equal('มกราคม');
  });

  it('datetime.getThaiYear should return 2560 if no string () are passed in', function () {
    expect(newYear2017.getThaiYear()).to.equal(2560);
  });
  it('datetime.getThaiYear should return 2560 if string ("thai") are passed in', function () {
    expect(newYear2017.getThaiYear("thai")).to.equal(2560);
  });
  it('datetime.getThaiYear should return 2560 if number (1) are passed in', function () {
    expect(newYear2017.getThaiYear(1)).to.equal(2560);
  });
  it('datetime.getThaiYear should return 2560 if Object ({example:1}) are passed in', function () {
    expect(newYear2017.getThaiYear({ example: 1 })).to.equal(2560);
  });
});

var thaiPattern = newYear2017.getThaiPattern();
describe('Datetime for Thai (toThaiString)', function () {
  it('datetime.toThaiString should return "1 ม.ค. 2560" if no string () are passed in', function () {
    expect(newYear2017.toThaiString()).to.equal('1 ม.ค. 2560');
  });
  it('datetime.toThaiString should return "1 ม.ค. 2560" if (thaiPattern.minimal) are passed in', function () {
    expect(newYear2017.toThaiString(thaiPattern.minimal)).to.equal('1 ม.ค. 2560');
  });
  it('datetime.toThaiString should return "1 มกราคม 2560" if (thaiPattern.minimal) are passed in', function () {
    expect(newYear2017.toThaiString(thaiPattern.partial)).to.equal('1 มกราคม 2560');
  });
  it('datetime.toThaiString should return "วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560" if (thaiPattern.minimal) are passed in', function () {
    expect(newYear2017.toThaiString(thaiPattern.maximum)).to.equal('วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560');
  });

  it('datetime.toThaiString should return "1 ม.ค. 2560" if (1) are passed in', function () {
    expect(newYear2017.toThaiString(1)).to.equal('1 ม.ค. 2560');
  });
  it('datetime.toThaiString should return "1 มกราคม 2560" if (2) are passed in', function () {
    expect(newYear2017.toThaiString(2)).to.equal('1 มกราคม 2560');
  });
  it('datetime.toThaiString should return "วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560" if (3) are passed in', function () {
    expect(newYear2017.toThaiString(3)).to.equal('วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560');
  });

  it('datetime.toThaiString + toLocaleTimeString  should return "วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560 08:00:00" if (3) are passed in', function () {
    expect(newYear2017.toThaiString(3) + " " + newYear2017.toLocaleTimeString()).to.equal('วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560 08:00:00');
  });
});

describe('Datetime for Thai (getThaiShortTime)', function () {

  it('when time is 00:00:00 getThaiShortTime should return "เที่ยงคืน" ', function () {
    checkThaiTime('00:00:00', 'เที่ยงคืน');
  });
  it('when time is 00:15:00 getThaiShortTime should return "เที่ยงคืน 15 นาที" ', function () {
    checkThaiTime('00:15:00', 'เที่ยงคืน 15 นาที');
  });
  it('when time is 00:30:00 getThaiShortTime should return "เที่ยงคืนครึ่ง" ', function () {
    checkThaiTime('00:30:00', 'เที่ยงคืนครึ่ง');
  });

  it('when time is 01:00:00 getThaiShortTime should return "ตี 1" ', function () {
    checkThaiTime('01:00:00', 'ตี 1');
  });
  it('when time is 00:15:00 getThaiShortTime should return "ตี 1 15 นาที" ', function () {
    checkThaiTime('01:15:00', 'ตี 1 15 นาที');
  });
  it('when time is 00:30:00 getThaiShortTime should return "ตี 1 ครึ่ง" ', function () {
    checkThaiTime('01:30:00', 'ตี 1 ครึ่ง');
  });

  it('when time is 06:00:00 getThaiShortTime should return "6 โมงเช้า" ', function () {
    checkThaiTime('06:00:00', '6 โมงเช้า');
  });
  it('when time is 06:15:00 getThaiShortTime should return "6 โมง 15 นาที" ', function () {
    checkThaiTime('06:15:00', '6 โมง 15 นาที');
  });
  it('when time is 06:30:00 getThaiShortTime should return "6 โมงครึ่ง" ', function () {
    checkThaiTime('06:30:00', '6 โมงครึ่ง');
  });

  it('when time is 08:00:00 getThaiShortTime should return "8 โมงเช้า" ', function () {
    checkThaiTime('08:00:00', '8 โมงเช้า');
  });
  it('when time is 08:15:00 getThaiShortTime should return "8 โมง 15 นาที" ', function () {
    checkThaiTime('08:15:00', '8 โมง 15 นาที');
  });
  it('when time is 08:30:00 getThaiShortTime should return "8 โมงครึ่ง" ', function () {
    checkThaiTime('08:30:00', '8 โมงครึ่ง');
  });

  it('when time is 09:00:00 getThaiShortTime should return "9 โมงเช้า" ', function () {
    checkThaiTime('09:00:00', '9 โมงเช้า');
  });

  it('when time is 10:00:00 getThaiShortTime should return "10 โมง" ', function () {
    checkThaiTime('10:00:00', '10 โมง');
  });
  it('when time is 10:15:00 getThaiShortTime should return "10 โมง 15 นาที" ', function () {
    checkThaiTime('10:15:00', '10 โมง 15 นาที');
  });
  it('when time is 10:30:00 getThaiShortTime should return "10 โมงครึ่ง" ', function () {
    checkThaiTime('10:30:00', '10 โมงครึ่ง');
  });

  it('when time is 12:00:00 getThaiShortTime should return "เที่ยง" ', function () {
    checkThaiTime('12:00:00', 'เที่ยง');
  });
  it('when time is 12:15:00 getThaiShortTime should return "เที่ยง 15 นาที" ', function () {
    checkThaiTime('12:15:00', 'เที่ยง 15 นาที');
  });
  it('when time is 12:30:00 getThaiShortTime should return "เที่ยงครึ่ง" ', function () {
    checkThaiTime('12:30:00', 'เที่ยงครึ่ง');
  });

  it('when time is 13:00:00 getThaiShortTime should return "บ่ายโมง" ', function () {
    checkThaiTime('13:00:00', 'บ่ายโมง')
  });
  it('when time is 13:15:00 getThaiShortTime should return "บ่ายโมง 15 นาที" ', function () {
    checkThaiTime('13:15:00', 'บ่ายโมง 15 นาที');
  });
  it('when time is 13:30:00 getThaiShortTime should return "บ่ายโมงครึ่ง" ', function () {
    checkThaiTime('13:30:00', 'บ่ายโมงครึ่ง');
  });

  it('when time is 14:00:00 getThaiShortTime should return "บ่าย 2 โมง" ', function () {
    checkThaiTime('14:00:00', 'บ่าย 2 โมง')
  });
  it('when time is 14:15:00 getThaiShortTime should return "บ่ายโมง 15 นาที" ', function () {
    checkThaiTime('14:15:00', 'บ่าย 2 โมง 15 นาที');
  });
  it('when time is 14:30:00 getThaiShortTime should return "บ่ายโมงครึ่ง" ', function () {
    checkThaiTime('14:30:00', 'บ่าย 2 โมงครึ่ง');
  });

  it('when time is 16:00:00 getThaiShortTime should return "4 โมงเย็น" ', function () {
    checkThaiTime('16:00:00', '4 โมงเย็น')
  });
  it('when time is 16:15:00 getThaiShortTime should return "4 โมง 15 นาที" ', function () {
    checkThaiTime('16:15:00', '4 โมง 15 นาที');
  });
  it('when time is 16:30:00 getThaiShortTime should return "4 โมงครึ่ง" ', function () {
    checkThaiTime('16:30:00', '4 โมงครึ่ง');
  });

  it('when time is 18:00:00 getThaiShortTime should return "6 โมงเย็น" ', function () {
    checkThaiTime('18:00:00', '6 โมงเย็น')
  });
  it('when time is 18:15:00 getThaiShortTime should return "6 โมง 15 นาที" ', function () {
    checkThaiTime('18:15:00', '6 โมง 15 นาที');
  });
  it('when time is 18:30:00 getThaiShortTime should return "6 โมงครึ่ง" ', function () {
    checkThaiTime('18:30:00', '6 โมงครึ่ง');
  });

  it('when time is 19:00:00 getThaiShortTime should return "ทุ่ม" ', function () {
    checkThaiTime('19:00:00', 'ทุ่ม')
  });
  it('when time is 19:15:00 getThaiShortTime should return "ทุ่ม 15 นาที" ', function () {
    checkThaiTime('19:15:00', 'ทุ่ม 15 นาที');
  });
  it('when time is 19:30:00 getThaiShortTime should return "ทุ่มครึ่ง" ', function () {
    checkThaiTime('19:30:00', 'ทุ่มครึ่ง');
  });

  it('when time is 20:00:00 getThaiShortTime should return "2 ทุ่ม" ', function () {
    checkThaiTime('20:00:00', '2 ทุ่ม')
  });
  it('when time is 20:15:00 getThaiShortTime should return "2 ทุ่ม 15 นาที" ', function () {
    checkThaiTime('20:15:00', '2 ทุ่ม 15 นาที');
  });
  it('when time is 20:30:00 getThaiShortTime should return "2 ทุ่มครึ่ง" ', function () {
    checkThaiTime('20:30:00', '2 ทุ่มครึ่ง');
  });

  it('when time is 22:00:00 getThaiShortTime should return "4 ทุ่ม" ', function () {
    checkThaiTime('22:00:00', '4 ทุ่ม')
  });
  it('when time is 22:15:00 getThaiShortTime should return "4 ทุ่ม 15 นาที" ', function () {
    checkThaiTime('22:15:00', '4 ทุ่ม 15 นาที');
  });
  it('when time is 22:30:00 getThaiShortTime should return "4 ทุ่มครึ่ง" ', function () {
    checkThaiTime('22:30:00', '4 ทุ่มครึ่ง');
  });

  it('when time is 23:00:00 getThaiShortTime should return "5 ทุ่ม" ', function () {
    checkThaiTime('23:00:00', '5 ทุ่ม')
  });
  it('when time is 23:15:00 getThaiShortTime should return "5 ทุ่ม 15 นาที" ', function () {
    checkThaiTime('23:15:00', '5 ทุ่ม 15 นาที');
  });
  it('when time is 23:30:00 getThaiShortTime should return "5 ทุ่มครึ่ง" ', function () {
    checkThaiTime('23:30:00', '5 ทุ่มครึ่ง');
  });
  it('when time is 23:55:00 getThaiShortTime should return "5 ทุ่ม 55 นาที" ', function () {
    checkThaiTime('23:55:00', '5 ทุ่ม 55 นาที');
  });
});

describe('Datetime for Thai (getThaiFormalLongTime)', function () {

  it('when time is 00:00:00 getThaiFormalLongTime should return "0 นาฬิกา 0 นาที 0 วินาที" ', function () {
    checkThaiTime('00:00:00', '0 นาฬิกา 0 นาที 0 วินาที', 'formal_long');
  });
  it('when time is 08:12:00 getThaiFormalLongTime should return "8 นาฬิกา 12 นาที 0 วินาที" ', function () {
    checkThaiTime('08:12:00', '8 นาฬิกา 12 นาที 0 วินาที', 'formal_long');
  });
  it('when time is 08:12:53 getThaiFormalLongTime should return "8 นาฬิกา 12 นาที 53 วินาที" ', function () {
    checkThaiTime('08:12:53', '8 นาฬิกา 12 นาที 53 วินาที', 'formal_long');
  });
})

describe('Datetime for Thai (getThaiFormalShortTime)', function () {

  it('when time is 00:00:00 getThaiFormalShortTime should return "0 นาฬิกา" ', function () {
    checkThaiTime('00:00:00', '0 นาฬิกา', 'formal_short');
  });
  it('when time is 08:12:00 getThaiFormalShortTime should return "8 นาฬิกา 12 นาที" ', function () {
    checkThaiTime('08:12:00', '8 นาฬิกา 12 นาที', 'formal_short');
  });
  it('when time is 08:12:53 getThaiFormalShortTime should return "8 นาฬิกา 12 นาที 53 วินาที" ', function () {
    checkThaiTime('08:12:53', '8 นาฬิกา 12 นาที 53 วินาที', 'formal_short');
  });
})

function checkThaiTime(timeString, stringExpect, formatType) {
  formatType = formatType || 'short';
  switch (formatType) {
    case 'short':
      checkMethod('getThaiShortTime', '2017-01-01 ' + timeString, stringExpect);
      break;

    case 'formal_short':
      checkMethod('getThaiFormalShortTime', '2017-01-01 ' + timeString, stringExpect);
      break;

    case 'formal_long':
      checkMethod('getThaiFormalLongTime', '2017-01-01 ' + timeString, stringExpect);
      break;

    default:
      throw ('not found function');
  }
}
function checkMethod(method, datetimeString, stringExpect) {
  var date_custom = new Date(datetimeString);
  if (typeof date_custom[method] !== 'function')
    throw (method + ' is not a function');

  expect(date_custom[method]()).to.equal(stringExpect);
}