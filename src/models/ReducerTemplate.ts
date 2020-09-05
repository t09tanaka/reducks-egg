import { REDUCER_TYPE_TEMPLATE } from '../templates/reducerType'
import { injectionToTemplate } from '../utils/general'
import { REDUCER_INDEX_TEMPLATE } from '../templates/reducerIndex'
import { REDUCER_SELECTORS_TEMPLATE } from '../templates/reducerSelectors'
import { REDUCER_MODEL_TEMPLATE } from '../templates/reducerModel'

export class ReducerTemplate {
  static index(reducerName: string): string {
    const value = reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(REDUCER_INDEX_TEMPLATE, [
      {
        key: 'reducerName',
        value: reducerName,
      },
      {
        key: 'actionName',
        value,
      },
    ])
  }

  static model(reducerName: string): string {
    const value = reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(REDUCER_MODEL_TEMPLATE, [
      {
        key: 'reducerName',
        value,
      },
    ])
  }

  static selectors(reducerName: string): string {
    const value = reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(REDUCER_SELECTORS_TEMPLATE, [
      {
        key: 'reducerName',
        value,
      },
      {
        key: 'stateName',
        value: reducerName,
      },
    ])
  }

  static types(reducerName: string): string {
    const value = reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(REDUCER_TYPE_TEMPLATE, [
      {
        key: 'reducerName',
        value,
      },
    ])
  }
}
