import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Пристрої',
    icon: 'cil-screen-smartphone',
    class: 'USER,ADMIN,OWNER',
    children: [
      {
        icon: 'cil-line-style',
        name: 'Панель пристроїв',
        url: '/devices/my',
        class: 'bg-light',
      },
      {
        icon: 'cil-library-add',
        name: 'Додати/видалити пристрій',
        url: '/devices/add-remove',
      },
    ]
  },
  {
    name: 'Автоматизація',
    icon: 'cil-lan',
    class: 'USER,ADMIN,SUPER_ADMIN,OWNER',
    children: [
      {
        icon: 'cil-av-timer',
        name: 'Регулярна автоматизація, з зміною одного параметра',
        url: '/automation/regular/single-value',
      },
      {
        icon: 'cil-calendar',
        name: 'Автоматизація за календарем, з зміною одного параметра',
        url: '/automation/calendar/single-value',
      },
    ]
  },
  // {
  //   name: 'Шаблони',
  //   url: '/templates',
  //   icon: 'cil-window-restore',
  //   // badge: {
  //   //   variant: 'light',
  //   //   text: 'Нове'
  //   // }
  // },
  // {
  //   name: 'Налаштування',
  //   url: '/settings',
  //   icon: 'cil-settings',
  // },

  // ########################################## ADMINS #####################################################
  {
    title: true,
    name: 'Адміністрування',
    class: 'ADMIN,OWNER',
  },
  {
    name: 'Користувачі',
    icon: 'cil-group',
    url: '/users',
    class: 'ADMIN,OWNER',
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
    class: 'ADMIN,OWNER',
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
    class: 'ADMIN,OWNER',
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
];
