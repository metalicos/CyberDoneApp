export let TIME_ZONE_MAP = new Map<string, string>([
  ['Etc/GMT+12', '(UTC-12:00)'],

  ['Pacific/Pago_Pago', '(UTC-11:00)'],

  ['Pacific/Samoa', '(UTC-11:00)'],

  ['Pacific/Niue', '(UTC-11:00)'],

  ['US/Samoa', '(UTC-11:00)'],

  ['Etc/GMT+11', '(UTC-11:00)'],

  ['Pacific/Midway', '(UTC-11:00)'],

  ['Pacific/Honolulu', '(UTC-10:00)'],

  ['Pacific/Rarotonga', '(UTC-10:00)'],

  ['Pacific/Tahiti', '(UTC-10:00)'],

  ['Pacific/Johnston', '(UTC-10:00)'],

  ['US/Hawaii', '(UTC-10:00)'],

  ['SystemV/HST10', '(UTC-10:00)'],

  ['Etc/GMT+10', '(UTC-10:00)'],

  ['Pacific/Marquesas', '(UTC-09:30)'],

  ['Etc/GMT+9', '(UTC-09:00)'],

  ['Pacific/Gambier', '(UTC-09:00)'],

  ['America/Atka', '(UTC-09:00)'],

  ['SystemV/YST9', '(UTC-09:00)'],

  ['America/Adak', '(UTC-09:00)'],

  ['US/Aleutian', '(UTC-09:00)'],

  ['Etc/GMT+8', '(UTC-08:00)'],

  ['US/Alaska', '(UTC-08:00)'],

  ['America/Juneau', '(UTC-08:00)'],

  ['America/Metlakatla', '(UTC-08:00)'],

  ['America/Yakutat', '(UTC-08:00)'],

  ['Pacific/Pitcairn', '(UTC-08:00)'],

  ['America/Sitka', '(UTC-08:00)'],

  ['America/Anchorage', '(UTC-08:00)'],

  ['SystemV/PST8', '(UTC-08:00)'],

  ['America/Nome', '(UTC-08:00)'],

  ['SystemV/YST9YDT', '(UTC-08:00)'],

  ['Canada/Yukon', '(UTC-07:00)'],

  ['US/Pacific-New', '(UTC-07:00)'],

  ['Etc/GMT+7', '(UTC-07:00)'],

  ['US/Arizona', '(UTC-07:00)'],

  ['America/Dawson_Creek', '(UTC-07:00)'],

  ['Canada/Pacific', '(UTC-07:00)'],

  ['PST8PDT', '(UTC-07:00)'],

  ['SystemV/MST7', '(UTC-07:00)'],

  ['America/Dawson', '(UTC-07:00)'],

  ['Mexico/BajaNorte', '(UTC-07:00)'],

  ['America/Tijuana', '(UTC-07:00)'],

  ['America/Creston', '(UTC-07:00)'],

  ['America/Hermosillo', '(UTC-07:00)'],

  ['America/Santa_Isabel', '(UTC-07:00)'],

  ['America/Vancouver', '(UTC-07:00)'],

  ['America/Ensenada', '(UTC-07:00)'],

  ['America/Phoenix', '(UTC-07:00)'],

  ['America/Whitehorse', '(UTC-07:00)'],

  ['America/Fort_Nelson', '(UTC-07:00)'],

  ['SystemV/PST8PDT', '(UTC-07:00)'],

  ['America/Los_Angeles', '(UTC-07:00)'],

  ['US/Pacific', '(UTC-07:00)'],

  ['America/El_Salvador', '(UTC-06:00)'],

  ['America/Guatemala', '(UTC-06:00)'],

  ['America/Belize', '(UTC-06:00)'],

  ['America/Managua', '(UTC-06:00)'],

  ['America/Tegucigalpa', '(UTC-06:00)'],

  ['Etc/GMT+6', '(UTC-06:00)'],

  ['Pacific/Easter', '(UTC-06:00)'],

  ['Mexico/BajaSur', '(UTC-06:00)'],

  ['America/Regina', '(UTC-06:00)'],

  ['America/Denver', '(UTC-06:00)'],

  ['Pacific/Galapagos', '(UTC-06:00)'],

  ['America/Yellowknife', '(UTC-06:00)'],

  ['America/Swift_Current', '(UTC-06:00)'],

  ['America/Inuvik', '(UTC-06:00)'],

  ['America/Mazatlan', '(UTC-06:00)'],

  ['America/Boise', '(UTC-06:00)'],

  ['America/Costa_Rica', '(UTC-06:00)'],

  ['MST7MDT', '(UTC-06:00)'],

  ['SystemV/CST6', '(UTC-06:00)'],

  ['America/Chihuahua', '(UTC-06:00)'],

  ['America/Ojinaga', '(UTC-06:00)'],

  ['Chile/EasterIsland', '(UTC-06:00)'],

  ['US/Mountain', '(UTC-06:00)'],

  ['America/Edmonton', '(UTC-06:00)'],

  ['Canada/Mountain', '(UTC-06:00)'],

  ['America/Cambridge_Bay', '(UTC-06:00)'],

  ['Navajo', '(UTC-06:00)'],

  ['SystemV/MST7MDT', '(UTC-06:00)'],

  ['Canada/Saskatchewan', '(UTC-06:00)'],

  ['America/Shiprock', '(UTC-06:00)'],

  ['America/Panama', '(UTC-05:00)'],

  ['America/Chicago', '(UTC-05:00)'],

  ['America/Eirunepe', '(UTC-05:00)'],

  ['Etc/GMT+5', '(UTC-05:00)'],

  ['Mexico/General', '(UTC-05:00)'],

  ['America/Porto_Acre', '(UTC-05:00)'],

  ['America/Guayaquil', '(UTC-05:00)'],

  ['America/Rankin_Inlet', '(UTC-05:00)'],

  ['US/Central', '(UTC-05:00)'],

  ['America/Rainy_River', '(UTC-05:00)'],

  ['America/Indiana/Knox', '(UTC-05:00)'],

  ['America/North_Dakota/Beulah', '(UTC-05:00)'],

  ['America/Monterrey', '(UTC-05:00)'],

  ['America/Jamaica', '(UTC-05:00)'],

  ['America/Atikokan', '(UTC-05:00)'],

  ['America/Coral_Harbour', '(UTC-05:00)'],

  ['America/North_Dakota/Center', '(UTC-05:00)'],

  ['America/Cayman', '(UTC-05:00)'],

  ['America/Indiana/Tell_City', '(UTC-05:00)'],

  ['America/Mexico_City', '(UTC-05:00)'],

  ['America/Matamoros', '(UTC-05:00)'],

  ['CST6CDT', '(UTC-05:00)'],

  ['America/Knox_IN', '(UTC-05:00)'],

  ['America/Bogota', '(UTC-05:00)'],

  ['America/Menominee', '(UTC-05:00)'],

  ['America/Resolute', '(UTC-05:00)'],

  ['SystemV/EST5', '(UTC-05:00)'],

  ['Canada/Central', '(UTC-05:00)'],

  ['Brazil/Acre', '(UTC-05:00)'],

  ['America/Cancun', '(UTC-05:00)'],

  ['America/Lima', '(UTC-05:00)'],

  ['America/Bahia_Banderas', '(UTC-05:00)'],

  ['US/Indiana-Starke', '(UTC-05:00)'],

  ['America/Rio_Branco', '(UTC-05:00)'],

  ['SystemV/CST6CDT', '(UTC-05:00)'],

  ['Jamaica', '(UTC-05:00)'],

  ['America/Merida', '(UTC-05:00)'],

  ['America/North_Dakota/New_Salem', '(UTC-05:00)'],

  ['America/Winnipeg', '(UTC-05:00)'],

  ['America/Cuiaba', '(UTC-04:00)'],

  ['America/Marigot', '(UTC-04:00)'],

  ['America/Indiana/Petersburg', '(UTC-04:00)'],

  ['Chile/Continental', '(UTC-04:00)'],

  ['America/Grand_Turk', '(UTC-04:00)'],

  ['Cuba', '(UTC-04:00)'],

  ['Etc/GMT+4', '(UTC-04:00)'],

  ['America/Manaus', '(UTC-04:00)'],

  ['America/Fort_Wayne', '(UTC-04:00)'],

  ['America/St_Thomas', '(UTC-04:00)'],

  ['America/Anguilla', '(UTC-04:00)'],

  ['America/Havana', '(UTC-04:00)'],

  ['US/Michigan', '(UTC-04:00)'],

  ['America/Barbados', '(UTC-04:00)'],

  ['America/Louisville', '(UTC-04:00)'],

  ['America/Curacao', '(UTC-04:00)'],

  ['America/Guyana', '(UTC-04:00)'],

  ['America/Martinique', '(UTC-04:00)'],

  ['America/Puerto_Rico', '(UTC-04:00)'],

  ['America/Port_of_Spain', '(UTC-04:00)'],

  ['SystemV/AST4', '(UTC-04:00)'],

  ['America/Indiana/Vevay', '(UTC-04:00)'],

  ['America/Indiana/Vincennes', '(UTC-04:00)'],

  ['America/Kralendijk', '(UTC-04:00)'],

  ['America/Antigua', '(UTC-04:00)'],

  ['America/Indianapolis', '(UTC-04:00)'],

  ['America/Iqaluit', '(UTC-04:00)'],

  ['America/St_Vincent', '(UTC-04:00)'],

  ['America/Kentucky/Louisville', '(UTC-04:00)'],

  ['America/Dominica', '(UTC-04:00)'],

  ['America/Asuncion', '(UTC-04:00)'],

  ['EST5EDT', '(UTC-04:00)'],

  ['America/Nassau', '(UTC-04:00)'],

  ['America/Kentucky/Monticello', '(UTC-04:00)'],

  ['Brazil/West', '(UTC-04:00)'],

  ['America/Aruba', '(UTC-04:00)'],

  ['America/Indiana/Indianapolis', '(UTC-04:00)'],

  ['America/Santiago', '(UTC-04:00)'],

  ['America/La_Paz', '(UTC-04:00)'],

  ['America/Thunder_Bay', '(UTC-04:00)'],

  ['America/Indiana/Marengo', '(UTC-04:00)'],

  ['America/Blanc-Sablon', '(UTC-04:00)'],

  ['America/Santo_Domingo', '(UTC-04:00)'],

  ['US/Eastern', '(UTC-04:00)'],

  ['Canada/Eastern', '(UTC-04:00)'],

  ['America/Port-au-Prince', '(UTC-04:00)'],

  ['America/St_Barthelemy', '(UTC-04:00)'],

  ['America/Nipigon', '(UTC-04:00)'],

  ['US/East-Indiana', '(UTC-04:00)'],

  ['America/St_Lucia', '(UTC-04:00)'],

  ['America/Montserrat', '(UTC-04:00)'],

  ['America/Lower_Princes', '(UTC-04:00)'],

  ['America/Detroit', '(UTC-04:00)'],

  ['America/Tortola', '(UTC-04:00)'],

  ['America/Porto_Velho', '(UTC-04:00)'],

  ['America/Campo_Grande', '(UTC-04:00)'],

  ['America/Virgin', '(UTC-04:00)'],

  ['America/Pangnirtung', '(UTC-04:00)'],

  ['America/Montreal', '(UTC-04:00)'],

  ['America/Indiana/Winamac', '(UTC-04:00)'],

  ['America/Boa_Vista', '(UTC-04:00)'],

  ['America/Grenada', '(UTC-04:00)'],

  ['America/New_York', '(UTC-04:00)'],

  ['America/St_Kitts', '(UTC-04:00)'],

  ['America/Caracas', '(UTC-04:00)'],

  ['America/Guadeloupe', '(UTC-04:00)'],

  ['America/Toronto', '(UTC-04:00)'],

  ['SystemV/EST5EDT', '(UTC-04:00)'],

  ['America/Argentina/Catamarca', '(UTC-03:00)'],

  ['Canada/Atlantic', '(UTC-03:00)'],

  ['America/Argentina/Cordoba', '(UTC-03:00)'],

  ['America/Araguaina', '(UTC-03:00)'],

  ['America/Argentina/Salta', '(UTC-03:00)'],

  ['Etc/GMT+3', '(UTC-03:00)'],

  ['America/Montevideo', '(UTC-03:00)'],

  ['Brazil/East', '(UTC-03:00)'],

  ['America/Argentina/Mendoza', '(UTC-03:00)'],

  ['America/Argentina/Rio_Gallegos', '(UTC-03:00)'],

  ['America/Catamarca', '(UTC-03:00)'],

  ['America/Cordoba', '(UTC-03:00)'],

  ['America/Sao_Paulo', '(UTC-03:00)'],

  ['America/Argentina/Jujuy', '(UTC-03:00)'],

  ['America/Cayenne', '(UTC-03:00)'],

  ['America/Recife', '(UTC-03:00)'],

  ['America/Buenos_Aires', '(UTC-03:00)'],

  ['America/Paramaribo', '(UTC-03:00)'],

  ['America/Moncton', '(UTC-03:00)'],

  ['America/Mendoza', '(UTC-03:00)'],

  ['America/Santarem', '(UTC-03:00)'],

  ['Atlantic/Bermuda', '(UTC-03:00)'],

  ['America/Maceio', '(UTC-03:00)'],

  ['Atlantic/Stanley', '(UTC-03:00)'],

  ['America/Halifax', '(UTC-03:00)'],

  ['Antarctica/Rothera', '(UTC-03:00)'],

  ['America/Argentina/San_Luis', '(UTC-03:00)'],

  ['America/Argentina/Ushuaia', '(UTC-03:00)'],

  ['Antarctica/Palmer', '(UTC-03:00)'],

  ['America/Punta_Arenas', '(UTC-03:00)'],

  ['America/Glace_Bay', '(UTC-03:00)'],

  ['America/Fortaleza', '(UTC-03:00)'],

  ['America/Thule', '(UTC-03:00)'],

  ['America/Argentina/La_Rioja', '(UTC-03:00)'],

  ['America/Belem', '(UTC-03:00)'],

  ['America/Jujuy', '(UTC-03:00)'],

  ['America/Bahia', '(UTC-03:00)'],

  ['America/Goose_Bay', '(UTC-03:00)'],

  ['America/Argentina/San_Juan', '(UTC-03:00)'],

  ['America/Argentina/ComodRivadavia', '(UTC-03:00)'],

  ['America/Argentina/Tucuman', '(UTC-03:00)'],

  ['America/Rosario', '(UTC-03:00)'],

  ['SystemV/AST4ADT', '(UTC-03:00)'],

  ['America/Argentina/Buenos_Aires', '(UTC-03:00)'],

  ['America/St_Johns', '(UTC-02:30)'],

  ['Canada/Newfoundland', '(UTC-02:30)'],

  ['America/Miquelon', '(UTC-02:00)'],

  ['Etc/GMT+2', '(UTC-02:00)'],

  ['America/Godthab', '(UTC-02:00)'],

  ['America/Noronha', '(UTC-02:00)'],

  ['Brazil/DeNoronha', '(UTC-02:00)'],

  ['Atlantic/South_Georgia', '(UTC-02:00)'],

  ['Etc/GMT+1', '(UTC-01:00)'],

  ['Atlantic/Cape_Verde', '(UTC-01:00)'],

  ['Pacific/Kiritimati', '(UTC+14:00)'],

  ['Etc/GMT-14', '(UTC+14:00)'],

  ['Pacific/Fakaofo', '(UTC+13:00)'],

  ['Pacific/Enderbury', '(UTC+13:00)'],

  ['Pacific/Apia', '(UTC+13:00)'],

  ['Pacific/Tongatapu', '(UTC+13:00)'],

  ['Etc/GMT-13', '(UTC+13:00)'],

  ['NZ-CHAT', '(UTC+12:45)'],

  ['Pacific/Chatham', '(UTC+12:45)'],

  ['Pacific/Kwajalein', '(UTC+12:00)'],

  ['Antarctica/McMurdo', '(UTC+12:00)'],

  ['Pacific/Wallis', '(UTC+12:00)'],

  ['Pacific/Fiji', '(UTC+12:00)'],

  ['Pacific/Funafuti', '(UTC+12:00)'],

  ['Pacific/Nauru', '(UTC+12:00)'],

  ['Kwajalein', '(UTC+12:00)'],

  ['NZ', '(UTC+12:00)'],

  ['Pacific/Wake', '(UTC+12:00)'],

  ['Antarctica/South_Pole', '(UTC+12:00)'],

  ['Pacific/Tarawa', '(UTC+12:00)'],

  ['Pacific/Auckland', '(UTC+12:00)'],

  ['Asia/Kamchatka', '(UTC+12:00)'],

  ['Etc/GMT-12', '(UTC+12:00)'],

  ['Asia/Anadyr', '(UTC+12:00)'],

  ['Pacific/Majuro', '(UTC+12:00)'],

  ['Pacific/Ponape', '(UTC+11:00)'],

  ['Pacific/Bougainville', '(UTC+11:00)'],

  ['Antarctica/Macquarie', '(UTC+11:00)'],

  ['Pacific/Pohnpei', '(UTC+11:00)'],

  ['Pacific/Efate', '(UTC+11:00)'],

  ['Pacific/Norfolk', '(UTC+11:00)'],

  ['Asia/Magadan', '(UTC+11:00)'],

  ['Pacific/Kosrae', '(UTC+11:00)'],

  ['Asia/Sakhalin', '(UTC+11:00)'],

  ['Pacific/Noumea', '(UTC+11:00)'],

  ['Etc/GMT-11', '(UTC+11:00)'],

  ['Asia/Srednekolymsk', '(UTC+11:00)'],

  ['Pacific/Guadalcanal', '(UTC+11:00)'],

  ['Australia/Lord_Howe', '(UTC+10:30)'],

  ['Australia/LHI', '(UTC+10:30)'],

  ['Australia/Hobart', '(UTC+10:00)'],

  ['Pacific/Yap', '(UTC+10:00)'],

  ['Australia/Tasmania', '(UTC+10:00)'],

  ['Pacific/Port_Moresby', '(UTC+10:00)'],

  ['Australia/ACT', '(UTC+10:00)'],

  ['Australia/Victoria', '(UTC+10:00)'],

  ['Pacific/Chuuk', '(UTC+10:00)'],

  ['Australia/Queensland', '(UTC+10:00)'],

  ['Australia/Canberra', '(UTC+10:00)'],

  ['Australia/Currie', '(UTC+10:00)'],

  ['Pacific/Guam', '(UTC+10:00)'],

  ['Pacific/Truk', '(UTC+10:00)'],

  ['Australia/NSW', '(UTC+10:00)'],

  ['Asia/Vladivostok', '(UTC+10:00)'],

  ['Pacific/Saipan', '(UTC+10:00)'],

  ['Antarctica/DumontDUrville', '(UTC+10:00)'],

  ['Australia/Sydney', '(UTC+10:00)'],

  ['Australia/Brisbane', '(UTC+10:00)'],

  ['Etc/GMT-10', '(UTC+10:00)'],

  ['Asia/Ust-Nera', '(UTC+10:00)'],

  ['Australia/Melbourne', '(UTC+10:00)'],

  ['Australia/Lindeman', '(UTC+10:00)'],

  ['Australia/North', '(UTC+09:30)'],

  ['Australia/Yancowinna', '(UTC+09:30)'],

  ['Australia/Adelaide', '(UTC+09:30)'],

  ['Australia/Broken_Hill', '(UTC+09:30)'],

  ['Australia/South', '(UTC+09:30)'],

  ['Australia/Darwin', '(UTC+09:30)'],

  ['Etc/GMT-9', '(UTC+09:00)'],

  ['Pacific/Palau', '(UTC+09:00)'],

  ['Asia/Chita', '(UTC+09:00)'],

  ['Asia/Dili', '(UTC+09:00)'],

  ['Asia/Jayapura', '(UTC+09:00)'],

  ['Asia/Yakutsk', '(UTC+09:00)'],

  ['Asia/Pyongyang', '(UTC+09:00)'],

  ['ROK', '(UTC+09:00)'],

  ['Asia/Seoul', '(UTC+09:00)'],

  ['Asia/Khandyga', '(UTC+09:00)'],

  ['Japan', '(UTC+09:00)'],

  ['Asia/Tokyo', '(UTC+09:00)'],

  ['Australia/Eucla', '(UTC+08:45)'],

  ['Asia/Kuching', '(UTC+08:00)'],

  ['Asia/Chungking', '(UTC+08:00)'],

  ['Etc/GMT-8', '(UTC+08:00)'],

  ['Australia/Perth', '(UTC+08:00)'],

  ['Asia/Macao', '(UTC+08:00)'],

  ['Asia/Macau', '(UTC+08:00)'],

  ['Asia/Choibalsan', '(UTC+08:00)'],

  ['Asia/Shanghai', '(UTC+08:00)'],

  ['Antarctica/Casey', '(UTC+08:00)'],

  ['Asia/Ulan_Bator', '(UTC+08:00)'],

  ['Asia/Chongqing', '(UTC+08:00)'],

  ['Asia/Ulaanbaatar', '(UTC+08:00)'],

  ['Asia/Taipei', '(UTC+08:00)'],

  ['Asia/Manila', '(UTC+08:00)'],

  ['PRC', '(UTC+08:00)'],

  ['Asia/Ujung_Pandang', '(UTC+08:00)'],

  ['Asia/Harbin', '(UTC+08:00)'],

  ['Singapore', '(UTC+08:00)'],

  ['Asia/Brunei', '(UTC+08:00)'],

  ['Australia/West', '(UTC+08:00)'],

  ['Asia/Hong_Kong', '(UTC+08:00)'],

  ['Asia/Makassar', '(UTC+08:00)'],

  ['Hongkong', '(UTC+08:00)'],

  ['Asia/Kuala_Lumpur', '(UTC+08:00)'],

  ['Asia/Irkutsk', '(UTC+08:00)'],

  ['Asia/Singapore', '(UTC+08:00)'],

  ['Asia/Pontianak', '(UTC+07:00)'],

  ['Etc/GMT-7', '(UTC+07:00)'],

  ['Asia/Phnom_Penh', '(UTC+07:00)'],

  ['Asia/Novosibirsk', '(UTC+07:00)'],

  ['Antarctica/Davis', '(UTC+07:00)'],

  ['Asia/Tomsk', '(UTC+07:00)'],

  ['Asia/Jakarta', '(UTC+07:00)'],

  ['Asia/Barnaul', '(UTC+07:00)'],

  ['Indian/Christmas', '(UTC+07:00)'],

  ['Asia/Ho_Chi_Minh', '(UTC+07:00)'],

  ['Asia/Hovd', '(UTC+07:00)'],

  ['Asia/Bangkok', '(UTC+07:00)'],

  ['Asia/Vientiane', '(UTC+07:00)'],

  ['Asia/Novokuznetsk', '(UTC+07:00)'],

  ['Asia/Krasnoyarsk', '(UTC+07:00)'],

  ['Asia/Saigon', '(UTC+07:00)'],

  ['Asia/Yangon', '(UTC+06:30)'],

  ['Asia/Rangoon', '(UTC+06:30)'],

  ['Indian/Cocos', '(UTC+06:30)'],

  ['Asia/Kashgar', '(UTC+06:00)'],

  ['Etc/GMT-6', '(UTC+06:00)'],

  ['Asia/Almaty', '(UTC+06:00)'],

  ['Asia/Dacca', '(UTC+06:00)'],

  ['Asia/Omsk', '(UTC+06:00)'],

  ['Asia/Dhaka', '(UTC+06:00)'],

  ['Indian/Chagos', '(UTC+06:00)'],

  ['Asia/Qyzylorda', '(UTC+06:00)'],

  ['Asia/Bishkek', '(UTC+06:00)'],

  ['Antarctica/Vostok', '(UTC+06:00)'],

  ['Asia/Urumqi', '(UTC+06:00)'],

  ['Asia/Thimbu', '(UTC+06:00)'],

  ['Asia/Thimphu', '(UTC+06:00)'],

  ['Asia/Kathmandu', '(UTC+05:45)'],

  ['Asia/Katmandu', '(UTC+05:45)'],

  ['Asia/Kolkata', '(UTC+05:30)'],

  ['Asia/Colombo', '(UTC+05:30)'],

  ['Asia/Calcutta', '(UTC+05:30)'],

  ['Asia/Aqtau', '(UTC+05:00)'],

  ['Etc/GMT-5', '(UTC+05:00)'],

  ['Asia/Samarkand', '(UTC+05:00)'],

  ['Asia/Karachi', '(UTC+05:00)'],

  ['Asia/Yekaterinburg', '(UTC+05:00)'],

  ['Asia/Dushanbe', '(UTC+05:00)'],

  ['Indian/Maldives', '(UTC+05:00)'],

  ['Asia/Oral', '(UTC+05:00)'],

  ['Asia/Tashkent', '(UTC+05:00)'],

  ['Antarctica/Mawson', '(UTC+05:00)'],

  ['Asia/Aqtobe', '(UTC+05:00)'],

  ['Asia/Ashkhabad', '(UTC+05:00)'],

  ['Asia/Ashgabat', '(UTC+05:00)'],

  ['Asia/Atyrau', '(UTC+05:00)'],

  ['Indian/Kerguelen', '(UTC+05:00)'],

  ['Iran', '(UTC+04:30)'],

  ['Asia/Tehran', '(UTC+04:30)'],

  ['Asia/Kabul', '(UTC+04:30)'],

  ['Asia/Yerevan', '(UTC+04:00)'],

  ['Etc/GMT-4', '(UTC+04:00)'],

  ['Asia/Dubai', '(UTC+04:00)'],

  ['Indian/Reunion', '(UTC+04:00)'],

  ['Indian/Mauritius', '(UTC+04:00)'],

  ['Europe/Saratov', '(UTC+04:00)'],

  ['Europe/Samara', '(UTC+04:00)'],

  ['Indian/Mahe', '(UTC+04:00)'],

  ['Asia/Baku', '(UTC+04:00)'],

  ['Asia/Muscat', '(UTC+04:00)'],

  ['Europe/Volgograd', '(UTC+04:00)'],

  ['Europe/Astrakhan', '(UTC+04:00)'],

  ['Asia/Tbilisi', '(UTC+04:00)'],

  ['Europe/Ulyanovsk', '(UTC+04:00)'],

  ['Asia/Aden', '(UTC+03:00)'],

  ['Africa/Nairobi', '(UTC+03:00)'],

  ['Europe/Istanbul', '(UTC+03:00)'],

  ['Etc/GMT-3', '(UTC+03:00)'],

  ['Europe/Zaporozhye', '(UTC+03:00)'],

  ['Israel', '(UTC+03:00)'],

  ['Indian/Comoro', '(UTC+03:00)'],

  ['Antarctica/Syowa', '(UTC+03:00)'],

  ['Africa/Mogadishu', '(UTC+03:00)'],

  ['Europe/Bucharest', '(UTC+03:00)'],

  ['Africa/Asmera', '(UTC+03:00)'],

  ['Europe/Mariehamn', '(UTC+03:00)'],

  ['Asia/Istanbul', '(UTC+03:00)'],

  ['Europe/Tiraspol', '(UTC+03:00)'],

  ['Europe/Moscow', '(UTC+03:00)'],

  ['Europe/Chisinau', '(UTC+03:00)'],

  ['Europe/Helsinki', '(UTC+03:00)'],

  ['Asia/Beirut', '(UTC+03:00)'],

  ['Asia/Tel_Aviv', '(UTC+03:00)'],

  ['Africa/Djibouti', '(UTC+03:00)'],

  ['Europe/Simferopol', '(UTC+03:00)'],

  ['Europe/Sofia', '(UTC+03:00)'],

  ['Asia/Gaza', '(UTC+03:00)'],

  ['Africa/Asmara', '(UTC+03:00)'],

  ['Europe/Riga', '(UTC+03:00)'],

  ['Asia/Baghdad', '(UTC+03:00)'],

  ['Asia/Damascus', '(UTC+03:00)'],

  ['Africa/Dar_es_Salaam', '(UTC+03:00)'],

  ['Africa/Addis_Ababa', '(UTC+03:00)'],

  ['Europe/Uzhgorod', '(UTC+03:00)'],

  ['Asia/Jerusalem', '(UTC+03:00)'],

  ['Asia/Riyadh', '(UTC+03:00)'],

  ['Asia/Kuwait', '(UTC+03:00)'],

  ['Europe/Kirov', '(UTC+03:00)'],

  ['Africa/Kampala', '(UTC+03:00)'],

  ['Europe/Minsk', '(UTC+03:00)'],

  ['Asia/Qatar', '(UTC+03:00)'],

  ['Europe/Kiev', '(UTC+03:00)'],

  ['Asia/Bahrain', '(UTC+03:00)'],

  ['Europe/Vilnius', '(UTC+03:00)'],

  ['Indian/Antananarivo', '(UTC+03:00)'],

  ['Indian/Mayotte', '(UTC+03:00)'],

  ['Europe/Tallinn', '(UTC+03:00)'],

  ['Turkey', '(UTC+03:00)'],

  ['Africa/Juba', '(UTC+03:00)'],

  ['Asia/Nicosia', '(UTC+03:00)'],

  ['Asia/Famagusta', '(UTC+03:00)'],

  ['W-SU', '(UTC+03:00)'],

  ['EET', '(UTC+03:00)'],

  ['Asia/Hebron', '(UTC+03:00)'],

  ['Asia/Amman', '(UTC+03:00)'],

  ['Europe/Nicosia', '(UTC+03:00)'],

  ['Europe/Athens', '(UTC+03:00)'],

  ['Africa/Cairo', '(UTC+02:00)'],

  ['Africa/Mbabane', '(UTC+02:00)'],

  ['Europe/Brussels', '(UTC+02:00)'],

  ['Europe/Warsaw', '(UTC+02:00)'],

  ['CET', '(UTC+02:00)'],

  ['Europe/Luxembourg', '(UTC+02:00)'],

  ['Etc/GMT-2', '(UTC+02:00)'],

  ['Libya', '(UTC+02:00)'],

  ['Africa/Kigali', '(UTC+02:00)'],

  ['Africa/Tripoli', '(UTC+02:00)'],

  ['Europe/Kaliningrad', '(UTC+02:00)'],

  ['Africa/Windhoek', '(UTC+02:00)'],

  ['Europe/Malta', '(UTC+02:00)'],

  ['Europe/Busingen', '(UTC+02:00)'],

  ['Europe/Skopje', '(UTC+02:00)'],

  ['Europe/Sarajevo', '(UTC+02:00)'],

  ['Europe/Rome', '(UTC+02:00)'],

  ['Europe/Zurich', '(UTC+02:00)'],

  ['Europe/Gibraltar', '(UTC+02:00)'],

  ['Africa/Lubumbashi', '(UTC+02:00)'],

  ['Europe/Vaduz', '(UTC+02:00)'],

  ['Europe/Ljubljana', '(UTC+02:00)'],

  ['Europe/Berlin', '(UTC+02:00)'],

  ['Europe/Stockholm', '(UTC+02:00)'],

  ['Europe/Budapest', '(UTC+02:00)'],

  ['Europe/Zagreb', '(UTC+02:00)'],

  ['Europe/Paris', '(UTC+02:00)'],

  ['Africa/Ceuta', '(UTC+02:00)'],

  ['Europe/Prague', '(UTC+02:00)'],

  ['Antarctica/Troll', '(UTC+02:00)'],

  ['Africa/Gaborone', '(UTC+02:00)'],

  ['Europe/Copenhagen', '(UTC+02:00)'],

  ['Europe/Vienna', '(UTC+02:00)'],

  ['Europe/Tirane', '(UTC+02:00)'],

  ['MET', '(UTC+02:00)'],

  ['Europe/Amsterdam', '(UTC+02:00)'],

  ['Africa/Maputo', '(UTC+02:00)'],

  ['Europe/San_Marino', '(UTC+02:00)'],

  ['Poland', '(UTC+02:00)'],

  ['Europe/Andorra', '(UTC+02:00)'],

  ['Europe/Oslo', '(UTC+02:00)'],

  ['Europe/Podgorica', '(UTC+02:00)'],

  ['Africa/Bujumbura', '(UTC+02:00)'],

  ['Atlantic/Jan_Mayen', '(UTC+02:00)'],

  ['Africa/Maseru', '(UTC+02:00)'],

  ['Europe/Madrid', '(UTC+02:00)'],

  ['Africa/Blantyre', '(UTC+02:00)'],

  ['Africa/Lusaka', '(UTC+02:00)'],

  ['Africa/Harare', '(UTC+02:00)'],

  ['Africa/Khartoum', '(UTC+02:00)'],

  ['Africa/Johannesburg', '(UTC+02:00)'],

  ['Europe/Belgrade', '(UTC+02:00)'],

  ['Europe/Bratislava', '(UTC+02:00)'],

  ['Arctic/Longyearbyen', '(UTC+02:00)'],

  ['Egypt', '(UTC+02:00)'],

  ['Europe/Vatican', '(UTC+02:00)'],

  ['Europe/Monaco', '(UTC+02:00)'],

  ['Europe/London', '(UTC+01:00)'],

  ['Etc/GMT-1', '(UTC+01:00)'],

  ['Europe/Jersey', '(UTC+01:00)'],

  ['Europe/Guernsey', '(UTC+01:00)'],

  ['Europe/Isle_of_Man', '(UTC+01:00)'],

  ['Africa/Tunis', '(UTC+01:00)'],

  ['Africa/Malabo', '(UTC+01:00)'],

  ['GB-Eire', '(UTC+01:00)'],

  ['Africa/Lagos', '(UTC+01:00)'],

  ['Africa/Algiers', '(UTC+01:00)'],

  ['GB', '(UTC+01:00)'],

  ['Portugal', '(UTC+01:00)'],

  ['Africa/Sao_Tome', '(UTC+01:00)'],

  ['Africa/Ndjamena', '(UTC+01:00)'],

  ['Atlantic/Faeroe', '(UTC+01:00)'],

  ['Eire', '(UTC+01:00)'],

  ['Atlantic/Faroe', '(UTC+01:00)'],

  ['Europe/Dublin', '(UTC+01:00)'],

  ['Africa/Libreville', '(UTC+01:00)'],

  ['Africa/El_Aaiun', '(UTC+01:00)'],

  ['Africa/Douala', '(UTC+01:00)'],

  ['Africa/Brazzaville', '(UTC+01:00)'],

  ['Africa/Porto-Novo', '(UTC+01:00)'],

  ['Atlantic/Madeira', '(UTC+01:00)'],

  ['Europe/Lisbon', '(UTC+01:00)'],

  ['Atlantic/Canary', '(UTC+01:00)'],

  ['Africa/Casablanca', '(UTC+01:00)'],

  ['Europe/Belfast', '(UTC+01:00)'],

  ['Africa/Luanda', '(UTC+01:00)'],

  ['Africa/Kinshasa', '(UTC+01:00)'],

  ['Africa/Bangui', '(UTC+01:00)'],

  ['WET', '(UTC+01:00)'],

  ['Africa/Niamey', '(UTC+01:00)'],

  ['GMT', '(UTC+00:00)'],

  ['Etc/GMT-0', '(UTC+00:00)'],

  ['Atlantic/St_Helena', '(UTC+00:00)'],

  ['Etc/GMT+0', '(UTC+00:00)'],

  ['Africa/Banjul', '(UTC+00:00)'],

  ['Etc/GMT', '(UTC+00:00)'],

  ['Africa/Freetown', '(UTC+00:00)'],

  ['Africa/Bamako', '(UTC+00:00)'],

  ['Africa/Conakry', '(UTC+00:00)'],

  ['Universal', '(UTC+00:00)'],

  ['Africa/Nouakchott', '(UTC+00:00)'],

  ['UTC', '(UTC+00:00)'],

  ['Etc/Universal', '(UTC+00:00)'],

  ['Atlantic/Azores', '(UTC+00:00)'],

  ['Africa/Abidjan', '(UTC+00:00)'],

  ['Africa/Accra', '(UTC+00:00)'],

  ['Etc/UCT', '(UTC+00:00)'],

  ['GMT0', '(UTC+00:00)'],

  ['Zulu', '(UTC+00:00)'],

  ['Africa/Ouagadougou', '(UTC+00:00)'],

  ['Atlantic/Reykjavik', '(UTC+00:00)'],

  ['Etc/Zulu', '(UTC+00:00)'],

  ['Iceland', '(UTC+00:00)'],

  ['Africa/Lome', '(UTC+00:00)'],

  ['Greenwich', '(UTC+00:00)'],

  ['Etc/GMT0', '(UTC+00:00)'],

  ['America/Danmarkshavn', '(UTC+00:00)'],

  ['Africa/Dakar', '(UTC+00:00)'],

  ['America/Scoresbysund', '(UTC+00:00)'],

  ['Africa/Bissau', '(UTC+00:00)'],

  ['Etc/Greenwich', '(UTC+00:00)'],

  ['Africa/Timbuktu', '(UTC+00:00)'],

  ['UCT', '(UTC+00:00)'],

  ['Africa/Monrovia', '(UTC+00:00)'],

  ['Etc/UTC', '(UTC+00:00)']
]);
