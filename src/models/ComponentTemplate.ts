import { injectionToTemplate } from '../utils/general'
import { BASIC_COMPONENT_TEMPLATE } from '../templates/BASIC_COMPONENT'
import { TEST_COMPONENT_TEMPLATE } from '../templates/TEST_COMPONENT'

export class ComponentTemplate {
  private reducerName: string
  private componentName: string

  constructor(reducerName: string, componentName: string) {
    this.reducerName = reducerName
    this.componentName = componentName
  }

  get component(): string {
    const value = this.reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(BASIC_COMPONENT_TEMPLATE, [
      {
        key: 'reducerName',
        value,
      },
      {
        key: 'componentName',
        value: this.componentName,
      },
    ])
  }

  get componentTest(): string {
    return injectionToTemplate(TEST_COMPONENT_TEMPLATE, [
      {
        key: 'componentName',
        value: this.componentName,
      },
    ])
  }
}
