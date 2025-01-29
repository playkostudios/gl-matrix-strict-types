import { type AngleOrder } from '../AngleOrder.js';
import { type vec3_64, type quat_64, type ReadonlyVec3_64, type ReadonlyQuat_64 } from '..//types_64.js';
import * as f_quat_64 from '../f64/quat_64.js';
export { create } from '../f64/quat_64.js';
import { assert_64 } from './assert_64.js';

/**
 * Quaternion in the format XYZW
 * @module quat
 */

/**
 * Set a quat_64 to the identity quaternion
 *
 * @param {quat_64} out the receiving quaternion
 */
export function identity(out: quat_64): void {
  assert_64(out);
  f_quat_64.identity(out);
}

/**
 * Sets a quat_64 from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyVec3_64} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 **/
export function setAxisAngle(out: quat_64, axis: ReadonlyVec3_64, rad: number): void {
  assert_64(out);
  assert_64(axis);
  f_quat_64.setAxisAngle(out, axis, rad);
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3_64} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat_64} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
export function getAxisAngle(out_axis: vec3_64, q: ReadonlyQuat_64): number {
  assert_64(out_axis);
  assert_64(q);
  return f_quat_64.getAxisAngle(out_axis, q);
}

/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat_64} a     Origin unit quaternion
 * @param  {ReadonlyQuat_64} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */
export function getAngle(a: ReadonlyQuat_64, b: ReadonlyQuat_64): number {
  assert_64(a);
  assert_64(b);
  return f_quat_64.getAngle(a, b);
}

/**
 * Multiplies two quat_64's
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a the first operand
 * @param {ReadonlyQuat_64} b the second operand
 */
export function multiply(out: quat_64, a: ReadonlyQuat_64, b: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_quat_64.multiply(out, a, b);
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat_64} out quat_64 receiving operation result
 * @param {ReadonlyQuat_64} a quat_64 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateX(out: quat_64, a: ReadonlyQuat_64, rad: number): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.rotateX(out, a, rad);
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat_64} out quat_64 receiving operation result
 * @param {ReadonlyQuat_64} a quat_64 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateY(out: quat_64, a: ReadonlyQuat_64, rad: number): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.rotateY(out, a, rad);
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat_64} out quat_64 receiving operation result
 * @param {ReadonlyQuat_64} a quat_64 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateZ(out: quat_64, a: ReadonlyQuat_64, rad: number): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.rotateZ(out, a, rad);
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a quat_64 to calculate W component of
 */
export function calculateW(out: quat_64, a: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.calculateW(out, a);
}

/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a quat_64 to calculate the exponential of
 */
export function exp(out: quat_64, a: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.exp(out, a);
}

/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a quat_64 to calculate the exponential of
 */
export function ln(out: quat_64, a: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.ln(out, a);
}

/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a quat_64 to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 */
export function pow(out: quat_64, a: ReadonlyQuat_64, b: number): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.pow(out, a, b);
}

/**
 * Performs a spherical linear interpolation between two quat_64
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a the first operand
 * @param {ReadonlyQuat_64} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function slerp(out: quat_64, a: ReadonlyQuat_64, b: ReadonlyQuat_64, t: number): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_quat_64.slerp(out, a, b, t);
}

/**
 * Generates a random unit quaternion
 *
 * @param {quat_64} out the receiving quaternion
 */
export function random(out: quat_64): void {
  assert_64(out);
  f_quat_64.random(out);
}

/**
 * Calculates the inverse of a quat_64
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a quat_64 to calculate inverse of
 */
export function invert(out: quat_64, a: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.invert(out, a);
}

/**
 * Calculates the conjugate of a quat_64
 * If the quaternion is normalized, this function is faster than quat_64.inverse and produces the same result.
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a quat_64 to calculate conjugate of
 */
export function conjugate(out: quat_64, a: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(a);
  f_quat_64.conjugate(out, a);
}

/**
 * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
 *
 * @param {quat_64} out the receiving quaternion
 * @param {Number} x Angle to rotate around X axis in degrees.
 * @param {Number} y Angle to rotate around Y axis in degrees.
 * @param {Number} z Angle to rotate around Z axis in degrees.
 * @param {'xyz'|'xzy'|'yxz'|'yzx'|'zxy'|'zyx'} order Intrinsic order for conversion, default is zyx.
 * @function
 */
export function fromEuler(out: quat_64, x: number, y: number, z: number, order: AngleOrder | undefined): void {
  assert_64(out);
  f_quat_64.fromEuler(out, x, y, z, order);
}

/**
 * Returns whether or not the quaternions point approximately to the same direction.
 *
 * Both quaternions are assumed to be unit length.
 *
 * @param {ReadonlyQuat_64} a The first unit quaternion.
 * @param {ReadonlyQuat_64} b The second unit quaternion.
 * @returns {Boolean} True if the quaternions are equal, false otherwise.
 */
export function equals(a: ReadonlyQuat_64, b: ReadonlyQuat_64): boolean {
  assert_64(a);
  assert_64(b);
  return f_quat_64.equals(a, b);
}

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat_64} out the receiving quaternion.
 * @param {ReadonlyVec3_64} a the initial vector
 * @param {ReadonlyVec3_64} b the destination vector
 */
export function rotationTo(out: quat_64, a: ReadonlyVec3_64, b: ReadonlyVec3_64) {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_quat_64.rotationTo(out, a, b);
}

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} a the first operand
 * @param {ReadonlyQuat_64} b the second operand
 * @param {ReadonlyQuat_64} c the third operand
 * @param {ReadonlyQuat_64} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function sqlerp(out: quat_64, a: ReadonlyQuat_64, b: ReadonlyQuat_64, c: ReadonlyQuat_64, d: ReadonlyQuat_64, t: number): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  assert_64(c);
  assert_64(d);
  f_quat_64.sqlerp(out, a, b, c, d, t);
}