import {Injectable} from '@angular/core';

export class ErrorDto {
  timestamp: string;
  error: string;
  title: string;
  detail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  public handleError(errCode: number, err: ErrorDto) {
    let errorMsg = '';
    console.log(JSON.stringify(err));
    if (errCode === 400) {
      errorMsg = 'Запит надісланий на сервер не валідний. 400 : ' + err.error + ' : ' + err.title + ' : ' + err.detail;
    } else if (errCode === 401) {
      errorMsg = 'Помилка авторизації. 401 : ' + err.error + ' : ' + err.title + ' : ' + err.detail;
    } else if (errCode === 403) {
      errorMsg = 'Відмовлено у доступі 403 : ' + err.error + ' : ' + err.title + ' : ' + err.detail;
    } else if (errCode === 404) {
      errorMsg = 'Ресурс не знайдено. 404 : ' + err.error + ' : ' + err.title + ' : ' + err.detail;
    } else if (errCode === 405) {
      errorMsg = 'Метод . 405 : ' + err.error + ' : ' + err.title + ' : ' + err.detail;
    } else if (errCode === 409) {
      errorMsg = 'Конфлікт із існуючим ресурсом. 409 : ' + err.error + ' : ' + err.title + ' : ' + err.detail;
    } else if (errCode === 500) {
      errorMsg = 'Вибачте за тимчасові незручності, у нас серверні неполадки. 500 : ' + err.error + ' : ' + err.title + ' : ' + err.detail;
    }
    return {type: 'danger', msg: errorMsg};
  }
}
