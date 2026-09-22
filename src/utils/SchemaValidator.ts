import Ajv, { Schema } from 'ajv';
import { expect } from 'chai';

const ajv = new Ajv();

export class SchemaValidator {
    static validate(data: unknown, schema: Schema) {
        const validate = ajv.compile(schema);
        const valido = validate(data);

        expect(valido, JSON.stringify(validate.errors, null, 2)).to.be.true;
    }
}
