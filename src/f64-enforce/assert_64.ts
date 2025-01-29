export function assert_64(val: Float64Array): asserts val is Float64Array {
    if (!(val instanceof Float64Array)) {
        throw new Error('gl-matrix-strict-types argument is not a Float64Array');
    }
}