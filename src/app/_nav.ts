import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  // {
  //   name: 'Інфо-панель',
  //   url: '/dashboard',
  //   icon: 'cil-home',
  // },
  {
    name: 'Пристрої',
    icon: 'cil-screen-smartphone',
    url: '/devices',
    children: [
      {
        name: 'Мої пристрої',
        url: '/devices/my',
        class: 'bg-light',
      },
      {
        name: 'Додати/видалити пристрій',
        url: '/devices/add-remove',
      },
    ]
  },
  {
    name: 'Події',
    icon: 'cil-av-timer',
    url: '/actions',
    children: [
      {
        name: 'Регулярні події',
        url: '/actions/regular',
      },
      {
        name: 'Одноразові події',
        url: '/actions/one-time',
      },
    ]
  },
  {
    name: 'Дані',
    url: '/data',
    icon: 'cil-bar-chart',
    children: [
      {
        name: 'У графіках',
        url: '/data/graphs',
      },
      {
        name: 'У таблицях',
        url: '/data/tables',
      },
    ]
  },
  {
    name: 'Шаблони',
    url: '/templates',
    icon: 'cil-window-restore',
    // badge: {
    //   variant: 'light',
    //   text: 'Нове'
    // }
  },
  {
    name: 'Налаштування',
    url: '/settings',
    icon: 'cil-settings',
  },

  // ########################################## ADMINS #####################################################
  {
    title: true,
    name: 'Адміністрування'
  },
  {
    name: 'Користувачі',
    icon: 'cil-group',
    url: '/users',
    children: [
      {
        name: 'Додати користувача',
        url: '/users/add',
      },
      {
        name: 'Видалити користувача',
        url: '/users/remove',
      },
      {
        name: 'Змінити повноваження користувача',
        url: '/users/permittions',
      },
    ]
  },
  {
    name: 'Пристрої',
    icon: 'icon-pencil',
    url: '/devices',
    children: [
      {
        name: 'Створити пристрій',
        url: '/devices/create',
      },
    ]
  },
  {
    name: 'Сповіщення',
    icon: 'icon-pencil',
    url: '/notifications',
    children: [
      {
        name: 'Тарифний план',
        url: '/notifications/tariff',
      },
      {
        name: 'Оплата',
        url: '/notifications/payment',
      },
      {
        name: 'Попередження',
        url: '/notifications/warning',
      },
    ]
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Увійти',
        url: '/login',
      },
      {
        name: 'Зареєструватися',
        url: '/register',
      },
      {
        name: 'Змінити пароль',
        url: '/change-password',
      },
    ]
  },
];
