import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'Інфо-панель',
    url: '/dashboard',
    icon: 'cil-home',
  },
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
  // TODO ################################################# WILL BE REMOVED
  // TODO ################################################# WILL BE REMOVED
  // TODO ################################################# WILL BE REMOVED
  // TODO ################################################# WILL BE REMOVED
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Navbars',
  //       url: '/base/navbars',
  //       icon: 'icon-puzzle'
  //
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
      },
      {
        name: 'Register',
        url: '/register',
      },
      {
        name: 'Error 404',
        url: '/404',
      },
      {
        name: 'Error 500',
        url: '/500',
      }
    ]
  },
];
