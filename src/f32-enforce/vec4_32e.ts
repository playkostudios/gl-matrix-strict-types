import { type vec4_32, type ReadonlyMat4_32, type ReadonlyQuat_32, type ReadonlyVec4_32 } from '..//types_32.js';
import * as f_vec4_32 from '../f32/vec4_32.js';
export { create, fromValues } from '../f32/vec4_32.js';
import { assert_32 } from './assert_32.js';

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new vec4_32 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4_32} a vector to clone
 * @returns {vec4_32} a new 4D vector
 */
export function clone(a: ReadonlyVec4_32): vec4_32 {
  assert_32(a);
  return f_vec4_32.clone(a);
}

/**
 * Copy the values from one vec4_32 to another
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the source vector
 */
export function copy(out: vec4_32, a: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  f_vec4_32.copy(out, a);
}

/**
 * Set the components of a vec4_32 to the given values
 *
 * @param {vec4_32} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 */
export function set(out: vec4_32, x: number, y: number, z: number, w: number): void {
  assert_32(out);
  f_vec4_32.set(out, x, y, z, w);
}

/**
 * Adds two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function add(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec4_32.add(out, a, b);
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function subtract(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec4_32.subtract(out, a, b);
}

/**
 * Multiplies two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function multiply(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec4_32.multiply(out, a, b);
}

/**
 * Divides two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function divide(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec4_32.divide(out, a, b);
}

/**
 * Math.ceil the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to ceil
 */
export function ceil(out: vec4_32, a: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  f_vec4_32.ceil(out, a);
}

/**
 * Math.floor the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to floor
 */
export function floor(out: vec4_32, a: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  f_vec4_32.floor(out, a);
}

/**
 * Returns the minimum of two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function min(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec4_32.min(out, a, b);
}

/**
 * Returns the maximum of two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function max(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec4_32.max(out, a, b);
}

/**
 * symmetric round the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to round
 */
export function round(out: vec4_32, a: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  f_vec4_32.round(out, a);
}

/**
 * Scales a vec4_32 by a scalar number
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the vector to scale
 * @param {Number} b amount to scale the vector by
 */
export function scale(out: vec4_32, a: ReadonlyVec4_32, b: number): void {
  assert_32(out);
  assert_32(a);
  f_vec4_32.scale(out, a, b);
}

/**
 * Adds two vec4_32's after scaling the second operand by a scalar value
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 */
export function scaleAndAdd(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32, scale: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec4_32.scaleAndAdd(out, a, b, scale);
}

/**
 * Calculates the euclidian distance between two vec4_32's
 *
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a: ReadonlyVec4_32, b: ReadonlyVec4_32): number {
  assert_32(a);
  assert_32(b);
  return f_vec4_32.distance(a, b);
}

/**
 * Calculates the squared euclidian distance between two vec4_32's
 *
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a: ReadonlyVec4_32, b: ReadonlyVec4_32): number {
  assert_32(a);
  assert_32(b);
  return f_vec4_32.squaredDistance(a, b);
}

/**
 * Calculates the length of a vec4_32
 *
 * @param {ReadonlyVec4_32} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a: ReadonlyVec4_32): number {
  assert_32(a);
  return f_vec4_32.length(a);
}

/**
 * Calculates the squared length of a vec4_32
 *
 * @param {ReadonlyVec4_32} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a: ReadonlyVec4_32): number {
  assert_32(a);
  return f_vec4_32.squaredLength(a);
}

/**
 * Negates the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to negate
 */
export function negate(out: vec4_32, a: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  f_vec4_32.negate(out, a);
}

/**
 * Returns the inverse of the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to invert
 */
export function inverse(out: vec4_32, a: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  f_vec4_32.inverse(out, a);
}

/**
 * Normalize a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to normalize
 */
export function normalize(out: vec4_32, a: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(a);
  f_vec4_32.normalize(out, a);
}

/**
 * Calculates the dot product of two vec4_32's
 *
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a: ReadonlyVec4_32, b: ReadonlyVec4_32): number {
  assert_32(a);
  assert_32(b);
  return f_vec4_32.dot(a, b);
}

/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} u the first vector
 * @param {ReadonlyVec4_32} v the second vector
 * @param {ReadonlyVec4_32} w the third vector
 */
export function cross(out: vec4_32, u: ReadonlyVec4_32, v: ReadonlyVec4_32, w: ReadonlyVec4_32): void {
  assert_32(out);
  assert_32(u);
  assert_32(v);
  assert_32(w);
  f_vec4_32.cross(out, u, v, w);
}

/**
 * Performs a linear interpolation between two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function lerp(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32, t: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec4_32.lerp(out, a, b, t);
}

/**
 * Generates a random vector
 *
 * @param {vec4_32} out the receiving vector
 */
export function random(out: vec4_32): void {
  assert_32(out);
  f_vec4_32.random(out);
}

/**
 * Transforms the vec4_32 with a mat4.
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the vector to transform
 * @param {ReadonlyMat4_32} m matrix to transform with
 */
export function transformMat4(out: vec4_32, a: ReadonlyVec4_32, m: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(m);
  f_vec4_32.transformMat4(out, a, m);
}

/**
 * Transforms the vec4_32 with a quat
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the vector to transform
 * @param {ReadonlyQuat_32} q quaternion to transform with
 */
export function transformQuat(out: vec4_32, a: ReadonlyVec4_32, q: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(q);
  f_vec4_32.transformQuat(out, a, q);
}

/**
 * Set the components of a vec4_32 to zero
 *
 * @param {vec4_32} out the receiving vector
 */
export function zero(out: vec4_32): void {
  assert_32(out);
  f_vec4_32.zero(out);
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4_32} a The first vector.
 * @param {ReadonlyVec4_32} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyVec4_32, b: ReadonlyVec4_32): boolean {
  assert_32(a);
  assert_32(b);
  return f_vec4_32.exactEquals(a, b);
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4_32} a The first vector.
 * @param {ReadonlyVec4_32} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function equals(a: ReadonlyVec4_32, b: ReadonlyVec4_32): boolean {
  assert_32(a);
  assert_32(b);
  return f_vec4_32.equals(a, b);
}
