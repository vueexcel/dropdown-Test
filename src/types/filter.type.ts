export enum filterType { text, number, bool, select, date }
export enum condition {
    eq = 'equals',
    ne = 'not equal',
    lt = 'less than',
    gt = 'greater than',
    is = 'is',
}
export type filterResult = {
    key: string,
    condition: condition,
    value: string | number,
    precondition?: string,
}
export type filterDefinition = {
    key: string,
    name: string,
    values?: string[] | ((selection?: filterResult[]) => string[] | number[]),
    type: filterType,
    conditions: condition[],
}
export type filteredDefinition = {
    id: string,
    key: string,
    name: string,
    values?: string[] | ((selection?: filterResult[]) => string[] | number[]),
    type: filterType,
    conditions: condition[],
    condition: string,
    value: string | number,
    precondition: string
}