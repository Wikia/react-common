import { Record, List } from 'immutable';

import isPlainObject from 'lodash/isPlainObject';

const BaseModel = (defaultValues, name) => class extends Record(defaultValues, name) {
    /**
     * Build  from data, returns undefined if data is not an object
     *
     * @param   {Object|Model} data
     * @returns {Model}
     */
    static build(data) {
        if (!(isPlainObject(data) || data instanceof this)) {
            return undefined;
        }

        const recordInstance = new this();
        return recordInstance.merge(data);
    }

    /**
     * Always returns default (empty)
     *
     * @returns {Model}
     */
    static empty() {
        return this.build({});
    }

    /**
     * Build a List<> collection
     *
     * @param   {Object|Object[]} data
     * @returns {List<Model>|undefined}
     */
    static buildList(data) {
        if (!data) {
            return undefined;
        }

        return List(data.map(item => this.build(item)));
    }
};

export default BaseModel;
