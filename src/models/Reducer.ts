export class Reducer {
  private reducerName: string
  private category?: string

  constructor(arg: { reducerName: string; category?: string }) {
    const { reducerName, category } = arg
    this.reducerName = reducerName
    if (category) this.category = category
  }
}
