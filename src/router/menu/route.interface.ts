import { HomeIcon } from '@heroicons/vue/24/outline'

type IconComponent = typeof HomeIcon

export interface DataOfRoute {
  path: string
  name: string
  title: string
  iconComponent: IconComponent
}

export type Route = DataOfRoute
