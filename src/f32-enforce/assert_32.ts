export function assert_32(val: Float32Array): asserts val is Float32Array {
    if (!(val instanceof Float32Array)) {
        throw new Error('gl-matrix-strict-types argument is not a Float32Array');
    }
}