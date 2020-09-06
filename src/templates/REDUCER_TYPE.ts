export const REDUCER_TYPE_TEMPLATE = `export interface ErrorProps {
    yourValue?:boolean
}

export interface {{reducerName}}Payload {}

export interface {{reducerName}}State {
    yourValue:string
    error?:ErrorProps
}
`
