module.exports = chainify;
/**
 * Returns a chainify instance.
 * @param {object} obj - An object containing some methods or properties that will not act as chain. 
 * @returns {object} The object with the methods and properties setters that can be used chained.
 * 
 * @example
 * var builder = chainify()
 */
function chainify(obj) {
    var result = obj || {};

    /**
     * @memberof something
     */
    var builder = {
        /**
         * Returns the instance wich contains all the chained methods.
         */
        value: () => result,

        /**
         * Adds a new method to the chain and returns the builder to continue adding more methods or fields.
         * @param {string} name - The name that will be used to invoke the method.
         * @param {function} method - The callback that will be invoked.
         */
        method: (name, method) => {
            result[name] = (...params) => {
                method.apply(null, params);
                return result;
            };

            return builder;
        },

        /**
         * Adds a new field setter, it means a method that will set the field value.
         * @param {string} name - The field name.
         * @params {object} defaultValue - If given, the field will be initialized with this value.
         */
        field: (name, ...defaultValue) => {
            if (defaultValue.length) {
                this[name] = defaultValue[0];
            }

            result[name] = (...params) => {
                this[name] = params.length === 1 ? params[0] : params.slice();
                return result;
            };

            return builder;
        },

        /**
         * Adds a new boolean field, the attached method will be used to set the field value.
         * @param {string} name - The boolean field
         */
        boolField: (name, initialValue, defaultValue) => {
            this[name] = !!initialValue;

            result[name] = (flag) => {
                this[name] = (flag !== undefined) ? !!flag : 
                    defaultValue === undefined ? !!initialValue : !!defaultValue;
                return result;
            };
            
            return builder;
        }
    };

    return builder;
}