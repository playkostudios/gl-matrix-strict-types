import { type AngleOrder } from '../AngleOrder.js';
import { type vec3_32, type quat_32, type ReadonlyVec3_32, type ReadonlyQuat_32 } from '..//types_32.js';
import * as f_quat_32 from '../f32/quat_32.js';
export { create } from '../f32/quat_32.js';
import { assert_32 } from './assert_32.js';

/**
 * Quaternion in the format XYZW
 * @module quat
 */

/**
 * Set a quat_32 to the identity quaternion
 *
 * @param {quat_32} out the receiving quaternion
 */
export function identity(out: quat_32): void {
  assert_32(out);
  f_quat_32.identity(out);
}

/**
 * Sets a quat_32 from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyVec3_32} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 **/
export function setAxisAngle(out: quat_32, axis: ReadonlyVec3_32, rad: number): void {
  assert_32(out);
  assert_32(axis);
  f_quat_32.setAxisAngle(out, axis, rad);
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
 * @param  {vec3_32} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat_32} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
export function getAxisAngle(out_axis: vec3_32, q: ReadonlyQuat_32): number {
  assert_32(out_axis);
  assert_32(q);
  return f_quat_32.getAxisAngle(out_axis, q);
}

/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat_32} a     Origin unit quaternion
 * @param  {ReadonlyQuat_32} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */
export function getAngle(a: ReadonlyQuat_32, b: ReadonlyQuat_32): number {
  assert_32(a);
  assert_32(b);
  return f_quat_32.getAngle(a, b);
}

/**
 * Multiplies two quat_32's
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a the first operand
 * @param {ReadonlyQuat_32} b the second operand
 */
export function multiply(out: quat_32, a: ReadonlyQuat_32, b: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_quat_32.multiply(out, a, b);
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat_32} out quat_32 receiving operation result
 * @param {ReadonlyQuat_32} a quat_32 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateX(out: quat_32, a: ReadonlyQuat_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.rotateX(out, a, rad);
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat_32} out quat_32 receiving operation result
 * @param {ReadonlyQuat_32} a quat_32 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateY(out: quat_32, a: ReadonlyQuat_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.rotateY(out, a, rad);
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat_32} out quat_32 receiving operation result
 * @param {ReadonlyQuat_32} a quat_32 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateZ(out: quat_32, a: ReadonlyQuat_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.rotateZ(out, a, rad);
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate W component of
 */
export function calculateW(out: quat_32, a: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.calculateW(out, a);
}

/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate the exponential of
 */
export function exp(out: quat_32, a: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.exp(out, a);
}

/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate the exponential of
 */
export function ln(out: quat_32, a: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.ln(out, a);
}

/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 */
export function pow(out: quat_32, a: ReadonlyQuat_32, b: number): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.pow(out, a, b);
}

/**
 * Performs a spherical linear interpolation between two quat_32
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a the first operand
 * @param {ReadonlyQuat_32} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function slerp(out: quat_32, a: ReadonlyQuat_32, b: ReadonlyQuat_32, t: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_quat_32.slerp(out, a, b, t);
}

/**
 * Generates a random unit quaternion
 *
 * @param {quat_32} out the receiving quaternion
 */
export function random(out: quat_32): void {
  assert_32(out);
  f_quat_32.random(out);
}

/**
 * Calculates the inverse of a quat_32
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate inverse of
 */
export function invert(out: quat_32, a: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.invert(out, a);
}

/**
 * Calculates the conjugate of a quat_32
 * If the quaternion is normalized, this function is faster than quat_32.inverse and produces the same result.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate conjugate of
 */
export function conjugate(out: quat_32, a: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(a);
  f_quat_32.conjugate(out, a);
}

/**
 * Creates a quaternion from the given euler angle x, y, z using the provided intrinsic order for the conversion.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {Number} x Angle to rotate around X axis in degrees.
 * @param {Number} y Angle to rotate around Y axis in degrees.
 * @param {Number} z Angle to rotate around Z axis in degrees.
 * @param {'xyz'|'xzy'|'yxz'|'yzx'|'zxy'|'zyx'} order Intrinsic order for conversion, default is zyx.
 * @function
 */
export function fromEuler(out: quat_32, x: number, y: number, z: number, order: AngleOrder | undefined): void {
  assert_32(out);
  f_quat_32.fromEuler(out, x, y, z, order);
}

/**
 * Returns whether or not the quaternions point approximately to the same direction.
 *
 * Both quaternions are assumed to be unit length.
 *
 * @param {ReadonlyQuat_32} a The first unit quaternion.
 * @param {ReadonlyQuat_32} b The second unit quaternion.
 * @returns {Boolean} True if the quaternions are equal, false otherwise.
 */
export function equals(a: ReadonlyQuat_32, b: ReadonlyQuat_32): boolean {
  assert_32(a);
  assert_32(b);
  return f_quat_32.equals(a, b);
}

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat_32} out the receiving quaternion.
 * @param {ReadonlyVec3_32} a the initial vector
 * @param {ReadonlyVec3_32} b the destination vector
 */
export function rotationTo(out: quat_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32) {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_quat_32.rotationTo(out, a, b);
}

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a the first operand
 * @param {ReadonlyQuat_32} b the second operand
 * @param {ReadonlyQuat_32} c the third operand
 * @param {ReadonlyQuat_32} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function sqlerp(out: quat_32, a: ReadonlyQuat_32, b: ReadonlyQuat_32, c: ReadonlyQuat_32, d: ReadonlyQuat_32, t: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  assert_32(c);
  assert_32(d);
  f_quat_32.sqlerp(out, a, b, c, d, t);
}