import { REDUCER_TYPE_TEMPLATE } from '../templates/reducerType'
import { injectionToTemplate } from '../utils/general'
import { REDUCER_INDEX_TEMPLATE } from '../templates/reducerIndex'
import { REDUCER_SELECTORS_TEMPLATE } from '../templates/reducerSelectors'
import { REDUCER_MODEL_TEMPLATE } from '../templates/reducerModel'
import { REDUCER_REDUCERS_TEMPLATE } from '../templates/reducerReducers'

export class ReducerTemplate {
  private reducerName: string

  constructor(reducerName: string) {
    this.reducerName = reducerName
  }

  get index(): string {
    const value = this.reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(REDUCER_INDEX_TEMPLATE, [
      {
        key: 'reducerName',
        value: this.reducerName,
      },
      {
        key: 'actionName',
        value,
      },
    ])
  }

  get model(): string {
    const value = this.reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(REDUCER_MODEL_TEMPLATE, [
      {
        key: 'reducerName',
        value,
      },
    ])
  }

  get reducers(): string {
    const value = this.reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(REDUCER_REDUCERS_TEMPLATE, [
      {
        key: 'reducerName',
        value,
      },
    ])
  }

  get selectors(): string {
    const value = this.reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    return injectionToTemplate(REDUCER_SELECTORS_TEMPLATE, [
      {
        key: 'reducerName',
        value,
      },
      {
        key: 'stateName',
        value: this.reducerName,
      },
    ])
  }

  get types(): string {
    const value = this.reducerName.replace(/^[a-z]/g, function (val) {
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
