import { Customer, Photographer } from './tables';

export type DtoByTableName = {
  photographers: Photographer;
  customers: Customer;
};

export type TableName = keyof DtoByTableName;
