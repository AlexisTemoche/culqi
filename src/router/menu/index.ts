import * as Icons from '@heroicons/vue/24/outline'
import type { Route } from './route.interface'

export const routeLinks: Route[] = [
  {
    path: '/recharges',
    name: 'recharges',
    title: 'Recargas',
    iconComponent: Icons.DevicePhoneMobileIcon
  },
  {
    path: '/payment-of-services',
    name: 'payment-of-services',
    title: 'Pago de servicios',
    iconComponent: Icons.LightBulbIcon
  },
  {
    path: '/history-of-earnings-and-operations',
    name: 'history-of-earnings-and-operations',
    title: 'Historial de ganancias y operaciones',
    iconComponent: Icons.CalendarDaysIcon
  }
]
