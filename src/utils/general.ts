interface InjectValue {
  key: string
  value: string
}

export const injectionToTemplate = (
  template: string,
  needles: InjectValue[]
): string => {
  let result: string = template
  needles.forEach((needle) => {
    result = result.split(`{{${needle.key}}}`).join(needle.value)
  })
  return result
}
