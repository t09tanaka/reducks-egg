import { REDUCER_TYPE_TEMPLATE } from '../templates/REDUCER_TYPE'
import { injectionToTemplate } from '../utils/general'
import { REDUCER_INDEX_TEMPLATE } from '../templates/REDUCER_INDEX'
import { REDUCER_SELECTORS_TEMPLATE } from '../templates/REDUCER_SELECTORS'
import { REDUCER_MODEL_TEMPLATE } from '../templates/REDUCER_MODEL'
import { REDUCER_REDUCERS_TEMPLATE } from '../templates/REDUCER_REDUCERS'
import { TEST_REDUCER_MODEL_TEMPLATE } from '../templates/TEST_REDUCER_MODEL'
import { ReducerDirectory } from './ReducerDirectory'

export class ReducerTemplate {
  private reducerName: string
  private category?: string

  constructor(reducerName: string, category?: string) {
    this.reducerName = reducerName
    this.category = category
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

  get testModel(): string {
    const value = this.reducerName.replace(/^[a-z]/g, function (val) {
      return val.toUpperCase()
    })

    const { reducerDirectory } = ReducerDirectory.define(
      this.reducerName,
      this.category
    )

    return injectionToTemplate(TEST_REDUCER_MODEL_TEMPLATE, [
      {
        key: 'reducerName',
        value,
      },
      {
        key: 'reducersDirectory',
        value: reducerDirectory,
      },
    ])
  }
}
