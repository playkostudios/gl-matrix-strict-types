import { type vec3_32, type ReadonlyMat4_32, type ReadonlyVec3_32, type ReadonlyQuat_32 } from '..//types_32.js';
import * as f_vec3_32 from '../f32/vec3_32.js';
export { create, fromValues } from '../f32/vec3_32.js';
import { assert_32 } from './assert_32.js';

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new vec3_32 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3_32} a vector to clone
 * @returns {vec3_32} a new 3D vector
 */
export function clone(a: ReadonlyVec3_32): vec3_32 {
  assert_32(a);
  return f_vec3_32.clone(a);
}

/**
 * Calculates the length of a vec3_32
 *
 * @param {ReadonlyVec3_32} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a: ReadonlyVec3_32): number {
  assert_32(a);
  return f_vec3_32.length(a);
}

/**
 * Copy the values from one vec3_32 to another
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the source vector
 */
export function copy(out: vec3_32, a: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  f_vec3_32.copy(out, a);
}

/**
 * Set the components of a vec3_32 to the given values
 *
 * @param {vec3_32} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 */
export function set(out: vec3_32, x: number, y: number, z: number): void {
  assert_32(out);
  f_vec3_32.set(out, x, y, z);
}

/**
 * Adds two vec3_32's
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 */
export function add(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.add(out, a, b);
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 */
export function subtract(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.subtract(out, a, b);
}

/**
 * Multiplies two vec3_32's
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 */
export function multiply(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.multiply(out, a, b);
}

/**
 * Divides two vec3_32's
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 */
export function divide(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.divide(out, a, b);
}

/**
 * Math.ceil the components of a vec3_32
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a vector to ceil
 */
export function ceil(out: vec3_32, a: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  f_vec3_32.ceil(out, a);
}

/**
 * Math.floor the components of a vec3_32
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a vector to floor
 */
export function floor(out: vec3_32, a: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  f_vec3_32.floor(out, a);
}

/**
 * Returns the minimum of two vec3_32's
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 */
export function min(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.min(out, a, b);
}

/**
 * Returns the maximum of two vec3_32's
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 */
export function max(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.max(out, a, b);
}

/**
 * symmetric round the components of a vec3_32
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a vector to round
 */
export function round(out: vec3_32, a: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  f_vec3_32.round(out, a);
}

/**
 * Scales a vec3_32 by a scalar number
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the vector to scale
 * @param {Number} b amount to scale the vector by
 */
export function scale(out: vec3_32, a: ReadonlyVec3_32, b: number): void {
  assert_32(out);
  assert_32(a);
  f_vec3_32.scale(out, a, b);
}

/**
 * Adds two vec3_32's after scaling the second operand by a scalar value
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 */
export function scaleAndAdd(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32, scale: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.scaleAndAdd(out, a, b, scale);
}

/**
 * Calculates the euclidian distance between two vec3_32's
 *
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a: ReadonlyVec3_32, b: ReadonlyVec3_32): number {
  assert_32(a);
  assert_32(b);
  return f_vec3_32.distance(a, b);
}

/**
 * Calculates the squared euclidian distance between two vec3_32's
 *
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a: ReadonlyVec3_32, b: ReadonlyVec3_32): number {
  assert_32(a);
  assert_32(b);
  return f_vec3_32.squaredDistance(a, b);
}

/**
 * Calculates the squared length of a vec3_32
 *
 * @param {ReadonlyVec3_32} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a: ReadonlyVec3_32): number {
  assert_32(a);
  return f_vec3_32.squaredLength(a);
}

/**
 * Negates the components of a vec3_32
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a vector to negate
 */
export function negate(out: vec3_32, a: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  f_vec3_32.negate(out, a);
}

/**
 * Returns the inverse of the components of a vec3_32
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a vector to invert
 */
export function inverse(out: vec3_32, a: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  f_vec3_32.inverse(out, a);
}

/**
 * Normalize a vec3_32
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a vector to normalize
 */
export function normalize(out: vec3_32, a: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  f_vec3_32.normalize(out, a);
}

/**
 * Calculates the dot product of two vec3_32's
 *
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a: ReadonlyVec3_32, b: ReadonlyVec3_32): number {
  assert_32(a);
  assert_32(b);
  return f_vec3_32.dot(a, b);
}

/**
 * Computes the cross product of two vec3_32's
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 */
export function cross(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.cross(out, a, b);
}

/**
 * Performs a linear interpolation between two vec3_32's
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function lerp(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32, t: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.lerp(out, a, b, t);
}

/**
 * Performs a spherical linear interpolation between two vec3_32's
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function slerp(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32, t: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.slerp(out, a, b, t);
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 * @param {ReadonlyVec3_32} c the third operand
 * @param {ReadonlyVec3_32} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function hermite(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32, c: ReadonlyVec3_32, d: ReadonlyVec3_32, t: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  assert_32(c);
  assert_32(d);
  f_vec3_32.hermite(out, a, b, c, d, t);
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the first operand
 * @param {ReadonlyVec3_32} b the second operand
 * @param {ReadonlyVec3_32} c the third operand
 * @param {ReadonlyVec3_32} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function bezier(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32, c: ReadonlyVec3_32, d: ReadonlyVec3_32, t: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  assert_32(c);
  assert_32(d);
  f_vec3_32.bezier(out, a, b, c, d, t);
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3_32} out the receiving vector
 */
export function random(out: vec3_32): void {
  assert_32(out);
  f_vec3_32.random(out);
}

/**
 * Transforms the vec3_32 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the vector to transform
 * @param {ReadonlyMat4_32} m matrix to transform with
 */
export function transformMat4(out: vec3_32, a: ReadonlyVec3_32, m: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(m);
  f_vec3_32.transformMat4(out, a, m);
}

/**
 * Transforms the vec3_32 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3_32} out the receiving vector
 * @param {ReadonlyVec3_32} a the vector to transform
 * @param {ReadonlyQuat_32} q quaternion to transform with
 */
export function transformQuat(out: vec3_32, a: ReadonlyVec3_32, q: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(q);
  f_vec3_32.transformQuat(out, a, q);
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3_32} out The receiving vec3_32
 * @param {ReadonlyVec3_32} a The vec3_32 point to rotate
 * @param {ReadonlyVec3_32} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 */
export function rotateX(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.rotateX(out, a, b, rad);
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3_32} out The receiving vec3_32
 * @param {ReadonlyVec3_32} a The vec3_32 point to rotate
 * @param {ReadonlyVec3_32} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 */
export function rotateY(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.rotateY(out, a, b, rad);
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3_32} out The receiving vec3_32
 * @param {ReadonlyVec3_32} a The vec3_32 point to rotate
 * @param {ReadonlyVec3_32} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 */
export function rotateZ(out: vec3_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_vec3_32.rotateZ(out, a, b, rad);
}

/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3_32} a The first operand
 * @param {ReadonlyVec3_32} b The second operand
 * @returns {Number} The angle in radians
 */
export function angle(a: ReadonlyVec3_32, b: ReadonlyVec3_32): number {
  assert_32(a);
  assert_32(b);
  return f_vec3_32.angle(a, b);
}

/**
 * Set the components of a vec3_32 to zero
 *
 * @param {vec3_32} out the receiving vector
 */
export function zero(out: vec3_32): void {
  assert_32(out);
  f_vec3_32.zero(out);
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3_32} a The first vector.
 * @param {ReadonlyVec3_32} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyVec3_32, b: ReadonlyVec3_32): boolean {
  assert_32(a);
  assert_32(b);
  return f_vec3_32.exactEquals(a, b);
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3_32} a The first vector.
 * @param {ReadonlyVec3_32} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function equals(a: ReadonlyVec3_32, b: ReadonlyVec3_32): boolean {
  assert_32(a);
  assert_32(b);
  return f_vec3_32.equals(a, b);
}
