import { Item } from "./Table";

export type Column = ComponentFramework.PropertyHelper.DataSetApi.Column;
export type Record = ComponentFramework.PropertyHelper.DataSetApi.EntityRecord;
export type RecordSet = { [id: string]: Record };
export type DataSet = ComponentFramework.PropertyTypes.DataSet;
export interface IDataSetOption {
    /**
     * Key: PCF type is string, FluentUI type is string | number
     */
    key: string;
    /**
     * Text: display text
     */
    text: string;
}

export function createColumnItems(columns: Column[], records: RecordSet, sortedRecordIds: string[]): Item[] {
    // for each record, return formatted value, or recordId if no column is specified.
    return columns.map((column) => {
        return {
            id: column.name,
            name: column.name,
            propertyValue: column.disableSorting,
        } as Item;
    });
}