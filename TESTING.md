TESTING node-datetime-thai on วันศุกร์ ที่ 2 มิถุนายน พ.ศ. 2560


  Datetime for Thai (Static pattern)
    √ datetime.getThaiPattern should return Object if no string () are passed in
    √ datetime.getThaiPattern().minimal should return 1 if no string () are passed in
    √ datetime.getThaiPattern().partial should return 2 if no string () are passed in
    √ datetime.getThaiPattern().maximum should return 3 if no string () are passed in

  Datetime for Thai: getString (Day, Month, Year)
    √ datetime.getThaiDay should return "อา" if no string () are passed in
    √ datetime.getThaiDay should return "อา" if string ("thai") are passed in
    √ datetime.getThaiDay should return "อา" if number (1) are passed in
    √ datetime.getThaiDay should return "อา" if Object ({example:1}) are passed in
    √ datetime.getThaiFullDay should return "อาทิตย์" if no string () are passed in
    √ datetime.getThaiFullDay should return "อาทิตย์" if string ("thai") are passed in
    √ datetime.getThaiFullDay should return "อาทิตย์" if number (1) are passed in
    √ datetime.getThaiFullDay should return "อาทิตย์" if Object ({example:1}) are passed in
    √ datetime.getThaiMonth should return "ม.ค." if no string () are passed in
    √ datetime.getThaiMonth should return "ม.ค." if string ("thai") are passed in
    √ datetime.getThaiMonth should return "ม.ค." if number (1) are passed in
    √ datetime.getThaiMonth should return "ม.ค." if Object ({example:1}) are passed in
    √ datetime.getThaiFullMonth should return "มกราคม" if no string () are passed in
    √ datetime.getThaiFullMonth should return "มกราคม" if string ("thai") are passed in
    √ datetime.getThaiFullMonth should return "มกราคม" if number (1) are passed in
    √ datetime.getThaiFullMonth should return "มกราคม" if Object ({example:1}) are passed in
    √ datetime.getThaiYear should return 2560 if no string () are passed in
    √ datetime.getThaiYear should return 2560 if string ("thai") are passed in
    √ datetime.getThaiYear should return 2560 if number (1) are passed in
    √ datetime.getThaiYear should return 2560 if Object ({example:1}) are passed in

  Datetime for Thai (toThaiString)
    √ datetime.toThaiString should return "1 ม.ค. 2560" if no string () are passed in
    √ datetime.toThaiString should return "1 ม.ค. 2560" if (thaiPattern.minimal) are passed in
    √ datetime.toThaiString should return "1 มกราคม 2560" if (thaiPattern.minimal) are passed in
    √ datetime.toThaiString should return "วันอาทิตย์ ที่ 1 มกราคม พ.ศ. 2560" if (thaiPattern.minimal) are passed in
    √ datetime.toThaiString should return "1 ม.ค. 2560" if (1) are passed in
    √ datetime.toThaiString should return "1 มกราคม 2560" if (2) are passed in
    √ datetime.toThaiString should return "วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560" if (3) are passed in
    √ datetime.toThaiString + toLocaleTimeString  should return "วันอาทิตย์ที่ 1 มกราคม พ.ศ.2560 08:00:00" if (3) are passed in

  Datetime for Thai (getThaiShortTime)
    √ when time is 00:00:00 getThaiShortTime should return "เที่ยงคืน" 
    √ when time is 00:15:00 getThaiShortTime should return "เที่ยงคืน 15 นาที" 
    √ when time is 00:30:00 getThaiShortTime should return "เที่ยงคืนครึ่ง" 
    √ when time is 01:00:00 getThaiShortTime should return "ตี 1" 
    √ when time is 00:15:00 getThaiShortTime should return "ตี 1 15 นาที" 
    √ when time is 00:30:00 getThaiShortTime should return "ตี 1 ครึ่ง" 
    √ when time is 06:00:00 getThaiShortTime should return "6 โมงเช้า" 
    √ when time is 06:15:00 getThaiShortTime should return "6 โมง 15 นาที" 
    √ when time is 06:30:00 getThaiShortTime should return "6 โมงครึ่ง" 
    √ when time is 08:00:00 getThaiShortTime should return "8 โมงเช้า" 
    √ when time is 08:15:00 getThaiShortTime should return "8 โมง 15 นาที" 
    √ when time is 08:30:00 getThaiShortTime should return "8 โมงครึ่ง" 
    √ when time is 09:00:00 getThaiShortTime should return "9 โมงเช้า" 
    √ when time is 10:00:00 getThaiShortTime should return "10 โมง" 
    √ when time is 10:15:00 getThaiShortTime should return "10 โมง 15 นาที" 
    √ when time is 10:30:00 getThaiShortTime should return "10 โมงครึ่ง" 
    √ when time is 12:00:00 getThaiShortTime should return "เที่ยง" 
    √ when time is 12:15:00 getThaiShortTime should return "เที่ยง 15 นาที" 
    √ when time is 12:30:00 getThaiShortTime should return "เที่ยงครึ่ง" 
    √ when time is 13:00:00 getThaiShortTime should return "บ่ายโมง" 
    √ when time is 13:15:00 getThaiShortTime should return "บ่ายโมง 15 นาที" 
    √ when time is 13:30:00 getThaiShortTime should return "บ่ายโมงครึ่ง" 
    √ when time is 14:00:00 getThaiShortTime should return "บ่าย 2 โมง" 
    √ when time is 14:15:00 getThaiShortTime should return "บ่ายโมง 15 นาที" 
    √ when time is 14:30:00 getThaiShortTime should return "บ่ายโมงครึ่ง" 
    √ when time is 16:00:00 getThaiShortTime should return "4 โมงเย็น" 
    √ when time is 16:15:00 getThaiShortTime should return "4 โมง 15 นาที" 
    √ when time is 16:30:00 getThaiShortTime should return "4 โมงครึ่ง" 
    √ when time is 18:00:00 getThaiShortTime should return "6 โมงเย็น" 
    √ when time is 18:15:00 getThaiShortTime should return "6 โมง 15 นาที" 
    √ when time is 18:30:00 getThaiShortTime should return "6 โมงครึ่ง" 
    √ when time is 19:00:00 getThaiShortTime should return "ทุ่ม" 
    √ when time is 19:15:00 getThaiShortTime should return "ทุ่ม 15 นาที" 
    √ when time is 19:30:00 getThaiShortTime should return "ทุ่มครึ่ง" 
    √ when time is 20:00:00 getThaiShortTime should return "2 ทุ่ม" 
    √ when time is 20:15:00 getThaiShortTime should return "2 ทุ่ม 15 นาที" 
    √ when time is 20:30:00 getThaiShortTime should return "2 ทุ่มครึ่ง" 
    √ when time is 22:00:00 getThaiShortTime should return "4 ทุ่ม" 
    √ when time is 22:15:00 getThaiShortTime should return "4 ทุ่ม 15 นาที" 
    √ when time is 22:30:00 getThaiShortTime should return "4 ทุ่มครึ่ง" 
    √ when time is 23:00:00 getThaiShortTime should return "5 ทุ่ม" 
    √ when time is 23:15:00 getThaiShortTime should return "5 ทุ่ม 15 นาที" 
    √ when time is 23:30:00 getThaiShortTime should return "5 ทุ่มครึ่ง" 
    √ when time is 23:55:00 getThaiShortTime should return "5 ทุ่ม 55 นาที" 

  Datetime for Thai (getThaiFormalLongTime)
    √ when time is 00:00:00 getThaiFormalLongTime should return "0 นาฬิกา 0 นาที 0 วินาที" 
    √ when time is 08:12:00 getThaiFormalLongTime should return "8 นาฬิกา 12 นาที 0 วินาที" 
    √ when time is 08:12:53 getThaiFormalLongTime should return "8 นาฬิกา 12 นาที 53 วินาที" 

  Datetime for Thai (getThaiFormalShortTime)
    √ when time is 00:00:00 getThaiFormalShortTime should return "0 นาฬิกา" 
    √ when time is 08:12:00 getThaiFormalShortTime should return "8 นาฬิกา 12 นาที" 
    √ when time is 08:12:53 getThaiFormalShortTime should return "8 นาฬิกา 12 นาที 53 วินาที" 


  82 passing (26ms)

