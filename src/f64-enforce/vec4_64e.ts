import { type vec4_64, type ReadonlyMat4_64, type ReadonlyQuat_64, type ReadonlyVec4_64 } from '../types_64.js';
import * as f_vec4_64 from '../f64/vec4_64.js';
export { create, fromValues } from '../f64/vec4_64.js';
import { assert_64 } from './assert_64.js';

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new vec4_64 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4_64} a vector to clone
 * @returns {vec4_64} a new 4D vector
 */
export function clone(a: ReadonlyVec4_64): vec4_64 {
  assert_64(a);
  return f_vec4_64.clone(a);
}

/**
 * Copy the values from one vec4_64 to another
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the source vector
 */
export function copy(out: vec4_64, a: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  f_vec4_64.copy(out, a);
}

/**
 * Set the components of a vec4_64 to the given values
 *
 * @param {vec4_64} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 */
export function set(out: vec4_64, x: number, y: number, z: number, w: number): void {
  assert_64(out);
  f_vec4_64.set(out, x, y, z, w);
}

/**
 * Adds two vec4_64's
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 */
export function add(out: vec4_64, a: ReadonlyVec4_64, b: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_vec4_64.add(out, a, b);
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 */
export function subtract(out: vec4_64, a: ReadonlyVec4_64, b: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_vec4_64.subtract(out, a, b);
}

/**
 * Multiplies two vec4_64's
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 */
export function multiply(out: vec4_64, a: ReadonlyVec4_64, b: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_vec4_64.multiply(out, a, b);
}

/**
 * Divides two vec4_64's
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 */
export function divide(out: vec4_64, a: ReadonlyVec4_64, b: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_vec4_64.divide(out, a, b);
}

/**
 * Math.ceil the components of a vec4_64
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a vector to ceil
 */
export function ceil(out: vec4_64, a: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  f_vec4_64.ceil(out, a);
}

/**
 * Math.floor the components of a vec4_64
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a vector to floor
 */
export function floor(out: vec4_64, a: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  f_vec4_64.floor(out, a);
}

/**
 * Returns the minimum of two vec4_64's
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 */
export function min(out: vec4_64, a: ReadonlyVec4_64, b: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_vec4_64.min(out, a, b);
}

/**
 * Returns the maximum of two vec4_64's
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 */
export function max(out: vec4_64, a: ReadonlyVec4_64, b: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_vec4_64.max(out, a, b);
}

/**
 * symmetric round the components of a vec4_64
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a vector to round
 */
export function round(out: vec4_64, a: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  f_vec4_64.round(out, a);
}

/**
 * Scales a vec4_64 by a scalar number
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the vector to scale
 * @param {Number} b amount to scale the vector by
 */
export function scale(out: vec4_64, a: ReadonlyVec4_64, b: number): void {
  assert_64(out);
  assert_64(a);
  f_vec4_64.scale(out, a, b);
}

/**
 * Adds two vec4_64's after scaling the second operand by a scalar value
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 */
export function scaleAndAdd(out: vec4_64, a: ReadonlyVec4_64, b: ReadonlyVec4_64, scale: number): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_vec4_64.scaleAndAdd(out, a, b, scale);
}

/**
 * Calculates the euclidian distance between two vec4_64's
 *
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a: ReadonlyVec4_64, b: ReadonlyVec4_64): number {
  assert_64(a);
  assert_64(b);
  return f_vec4_64.distance(a, b);
}

/**
 * Calculates the squared euclidian distance between two vec4_64's
 *
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a: ReadonlyVec4_64, b: ReadonlyVec4_64): number {
  assert_64(a);
  assert_64(b);
  return f_vec4_64.squaredDistance(a, b);
}

/**
 * Calculates the length of a vec4_64
 *
 * @param {ReadonlyVec4_64} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a: ReadonlyVec4_64): number {
  assert_64(a);
  return f_vec4_64.length(a);
}

/**
 * Calculates the squared length of a vec4_64
 *
 * @param {ReadonlyVec4_64} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a: ReadonlyVec4_64): number {
  assert_64(a);
  return f_vec4_64.squaredLength(a);
}

/**
 * Negates the components of a vec4_64
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a vector to negate
 */
export function negate(out: vec4_64, a: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  f_vec4_64.negate(out, a);
}

/**
 * Returns the inverse of the components of a vec4_64
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a vector to invert
 */
export function inverse(out: vec4_64, a: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  f_vec4_64.inverse(out, a);
}

/**
 * Normalize a vec4_64
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a vector to normalize
 */
export function normalize(out: vec4_64, a: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(a);
  f_vec4_64.normalize(out, a);
}

/**
 * Calculates the dot product of two vec4_64's
 *
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a: ReadonlyVec4_64, b: ReadonlyVec4_64): number {
  assert_64(a);
  assert_64(b);
  return f_vec4_64.dot(a, b);
}

/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} u the first vector
 * @param {ReadonlyVec4_64} v the second vector
 * @param {ReadonlyVec4_64} w the third vector
 */
export function cross(out: vec4_64, u: ReadonlyVec4_64, v: ReadonlyVec4_64, w: ReadonlyVec4_64): void {
  assert_64(out);
  assert_64(u);
  assert_64(v);
  assert_64(w);
  f_vec4_64.cross(out, u, v, w);
}

/**
 * Performs a linear interpolation between two vec4_64's
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the first operand
 * @param {ReadonlyVec4_64} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function lerp(out: vec4_64, a: ReadonlyVec4_64, b: ReadonlyVec4_64, t: number): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_vec4_64.lerp(out, a, b, t);
}

/**
 * Generates a random vector
 *
 * @param {vec4_64} out the receiving vector
 */
export function random(out: vec4_64): void {
  assert_64(out);
  f_vec4_64.random(out);
}

/**
 * Transforms the vec4_64 with a mat4.
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the vector to transform
 * @param {ReadonlyMat4_64} m matrix to transform with
 */
export function transformMat4(out: vec4_64, a: ReadonlyVec4_64, m: ReadonlyMat4_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(m);
  f_vec4_64.transformMat4(out, a, m);
}

/**
 * Transforms the vec4_64 with a quat
 *
 * @param {vec4_64} out the receiving vector
 * @param {ReadonlyVec4_64} a the vector to transform
 * @param {ReadonlyQuat_64} q quaternion to transform with
 */
export function transformQuat(out: vec4_64, a: ReadonlyVec4_64, q: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(q);
  f_vec4_64.transformQuat(out, a, q);
}

/**
 * Set the components of a vec4_64 to zero
 *
 * @param {vec4_64} out the receiving vector
 */
export function zero(out: vec4_64): void {
  assert_64(out);
  f_vec4_64.zero(out);
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4_64} a The first vector.
 * @param {ReadonlyVec4_64} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyVec4_64, b: ReadonlyVec4_64): boolean {
  assert_64(a);
  assert_64(b);
  return f_vec4_64.exactEquals(a, b);
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4_64} a The first vector.
 * @param {ReadonlyVec4_64} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function equals(a: ReadonlyVec4_64, b: ReadonlyVec4_64): boolean {
  assert_64(a);
  assert_64(b);
  return f_vec4_64.equals(a, b);
}
