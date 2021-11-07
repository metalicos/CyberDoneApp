import {ValueType} from '../../../../../services/device.service';


export let HYDROPONIC_TOPIC_LABEL_MAP: Map<string, string> = new Map<string, string>([
  ['phUpPump', 'Керувати насосом PH UP'],
  ['phDownPump', 'Керувати насосом PH DOWN'],
  ['tdsPump', 'Керувати насосом TDS'],

  ['mlPerMillisecond', 'Об\'єм прокачуваної насосом рідини в мл за 1 мс'],
  ['regulateErrorPh', 'Вважати коректною похибку PH'],
  ['regulateErrorTds', 'Вважати коректною похибку TDS'],
  ['phUpDoseMl', 'Доза регулювання PH UP мл'],
  ['phDownDoseMl', 'Доза регулювання PH DOWN мл'],
  ['tdsDoseMl', 'Доза регулювання TDS мл'],
  ['recheckDispensersAfterMs', 'Перевірка правильних показників регулятора (кожних "мс")'],
  ['setupPhValue', 'Підтримуване значення PH'],
  ['setupTdsValue', 'Підтримуване значення TDS'],
  ['dispensersEnable', 'Ввімк./вимк. регуляторів'],
  ['sensorsEnable', 'Ввімк./вимк. читання сенсорів'],
  ['calibratePhLow', 'Калібрування PH (нижня межа - PH Low)'],
  ['calibratePhHigh', 'Калібрування PH (верхня межа - PH High)'],
  ['calibratePhClear', 'Очистити калібрування PH'],
  ['calibrateTds', 'Калібрування сенсора TDS'],
  ['calibrateTdsClear', 'Очистити калібрування TDS'],

  ['phCalibrationValue1', 'Калібрувальний коефіцієнт PH сенсора по PH LOW'],
  ['phCalibrationValue2', 'Калібрувальний коефіцієнт PH сенсора по PH HIGH'],
  ['phCalibrationAdc1', 'Значення АЦП PH сенсора по PH LOW'],
  ['phCalibrationAdc2', 'Значення АЦП PH сенсора по PH HIGH'],
  ['phCalibrationAdcOffset', 'Зміщення АЦП PH сенсора після калібрування'],
  ['phOversampling', 'Усереднена вибірка PH (Передискретизація сигналу PH)'],

  ['tdsKValue', 'Калібрувальний коефіцієнт TDS сенсора'],
  ['tdsOversampling', 'Усереднена вибірка TDS (Передискретизація сигналу TDS)'],

  ['restart', 'Перевантаження'],
  ['autotime', 'Автоматичне оновлення часу за часовим поясом'],
  ['updateTime', 'Ручне оновлення часу'],
  ['restartCounter', 'Лічильник перевантажень контролера'],
  ['timezone', 'Зміна часового поясу'],
  ['readAll', 'Вичитати збережені налаштування в пам\'ять пристрою'],
  ['saveAll', 'Зберегти налаштування пристрою'],
  ['wifiSSID', 'Змінити назву точки доступу на'],
  ['wifiPASS', 'Змінити пароль на'],
]);

export interface TopicInfo {
  name: string;
  type: ValueType;
}

export let HYDROPONIC_LABEL_TOPIC_MAP: Map<string, TopicInfo> = new Map<string, TopicInfo>([
  ['Керувати насосом PH UP', {
    name: 'phUpPump', type: ValueType.DIRECTION
  }],
  ['Керувати насосом PH DOWN', {
    name: 'phDownPump', type: ValueType.DIRECTION
  }],
  ['Керувати насосом TDS', {
    name: 'phDownStart', type: ValueType.DIRECTION
  }],
  ['Об\'єм прокачуваної насосом рідини в мл за 1 мс', {
    name: 'mlPerMillisecond', type: ValueType.NUMBER
  }],
  ['Вважати коректною похибку PH', {
    name: 'regulateErrorPh', type: ValueType.NUMBER
  }],
  ['Вважати коректною похибку TDS', {
    name: 'regulateErrorTds', type: ValueType.NUMBER
  }],
  ['Доза регулювання PH UP мл', {
    name: 'phUpDoseMl', type: ValueType.NUMBER
  }],
  ['Доза регулювання PH DOWN мл', {
    name: 'phDownDoseMl', type: ValueType.NUMBER
  }],
  ['Доза регулювання TDS мл', {
    name: 'tdsDoseMl', type: ValueType.NUMBER
  }],
  ['Перевірка правильних показників регулятора (кожних "мс")', {
    name: 'recheckDispensersAfterMs', type: ValueType.NUMBER
  }],
  ['Підтримуване значення PH', {
    name: 'setupPhValue', type: ValueType.NUMBER
  }],
  ['Підтримуване значення TDS', {
    name: 'setupTdsValue', type: ValueType.NUMBER
  }],
  ['Ввімк./вимк. регуляторів', {
    name: 'dispensersEnable', type: ValueType.SWITCH
  }],
  ['Ввімк./вимк. читання сенсорів', {
    name: 'sensorsEnable', type: ValueType.SWITCH
  }],
  ['Калібрування PH (нижня межа - PH Low)', {
    name: 'calibratePhLow', type: ValueType.NUMBER
  }],
  ['Калібрування PH (верхня межа - PH High)', {
    name: 'calibratePhHigh', type: ValueType.NUMBER
  }],
  ['Очистити калібрування PH', {
    name: 'calibratePhClear', type: ValueType.NONE
  }],
  ['Калібрування сенсора TDS', {
    name: 'calibrateTds', type: ValueType.NUMBER
  }],
  ['Очистити калібрування TDS', {
    name: 'calibrateTdsClear', type: ValueType.NUMBER
  }],
  ['Калібрувальний коефіцієнт PH сенсора по PH LOW', {
    name: 'phCalibrationValue1', type: ValueType.NUMBER
  }],
  ['Калібрувальний коефіцієнт PH сенсора по PH HIGH', {
    name: 'phCalibrationValue2', type: ValueType.NUMBER
  }],
  ['Значення АЦП PH сенсора по PH LOW', {
    name: 'phCalibrationAdc1', type: ValueType.NUMBER
  }],
  ['Значення АЦП PH сенсора по PH HIGH', {
    name: 'phCalibrationAdc2', type: ValueType.NUMBER
  }],
  ['Зміщення АЦП PH сенсора після калібрування', {
    name: 'phCalibrationAdcOffset', type: ValueType.NUMBER
  }],
  ['Усереднена вибірка PH (Передискретизація сигналу PH)', {
    name: 'phOversampling', type: ValueType.NUMBER
  }],
  ['Калібрувальний коефіцієнт TDS сенсора', {
    name: 'tdsKValue', type: ValueType.NUMBER
  }],
  ['Усереднена вибірка TDS (Передискретизація сигналу TDS)', {
    name: 'tdsOversampling', type: ValueType.NUMBER
  }],
  ['Перевантаження', {
    name: 'restart', type: ValueType.NONE
  }],
  ['Автоматичне оновлення часу за часовим поясом', {
    name: 'autotime', type: ValueType.NUMBER
  }],
  ['Ручне оновлення часу', {
    name: 'updateTime', type: ValueType.TIME
  }],
  ['Лічильник перевантажень контролера', {
    name: 'restartCounter', type: ValueType.NUMBER
  }],
  ['Зміна часового поясу', {
    name: 'timezone', type: ValueType.TEXT
  }],
  ['Вичитати збережені налаштування в пам\'ять пристрою', {
    name: 'readAll', type: ValueType.NONE
  }],
  ['Зберегти налаштування пристрою', {
    name: 'saveAll', type: ValueType.NONE
  }],
  ['Змінити назву точки доступу на', {
    name: 'wifiSSID', type: ValueType.TEXT
  }],
  ['Змінити пароль на', {
    name: 'wifiPASS', type: ValueType.TEXT
  }],
]);
