// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// from https://github.com/react-hook-form/resolvers/class-validator/src/class-validator.ts

import { FieldErrors } from 'react-hook-form';
import { toNestErrors, validateFieldsNatively } from '@hookform/resolvers';
import { validate, validateSync, ValidationError } from 'class-validator';

import { plainToClass } from '#class-transformer';

const parseErrors = (
  errors: ValidationError[],
  validateAllFieldCriteria: boolean,
  parsedErrors: FieldErrors = {},
  path = '',
) => {
  return errors.reduce((acc, error) => {
    const _path = path ? `${path}.${error.property}` : error.property;

    if (error.constraints) {
      const key = Object.keys(error.constraints)[0];
      acc[_path] = {
        type: key,
        message: error.constraints[key],
      };

      const _e = acc[_path];
      if (validateAllFieldCriteria && _e) {
        Object.assign(_e, { types: error.constraints });
      }
    }

    if (error.children && error.children.length) {
      parseErrors(error.children, validateAllFieldCriteria, acc, _path);
    }

    return acc;
  }, parsedErrors);
};

export const classValidatorResolver =
  (schema, schemaOptions = {}, resolverOptions = {}) =>
  async (values, _, options) => {
    const { transformer, validator } = schemaOptions;
    const data = plainToClass(schema, values, transformer);

    const rawErrors = await (
      resolverOptions.mode === 'sync' ? validateSync : validate
    )(data, validator);

    if (rawErrors.length) {
      return {
        values: {},
        errors: toNestErrors(
          parseErrors(
            rawErrors,
            !options.shouldUseNativeValidation &&
              options.criteriaMode === 'all',
          ),
          options,
        ),
      };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    options.shouldUseNativeValidation && validateFieldsNatively({}, options);

    return {
      values: resolverOptions.rawValues ? values : data,
      errors: {},
    };
  };
