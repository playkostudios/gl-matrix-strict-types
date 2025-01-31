import { type quat2_64, type vec3_64, type ReadonlyMat4_64, type ReadonlyVec3_64, type ReadonlyQuat_64, type ReadonlyQuat2_64 } from '../types_64.js';
import * as f_quat2_64 from '../f64/quat2_64.js';
export { create, fromValues, fromRotationTranslationValues } from '../f64/quat2_64.js';
import { assert_64 } from './assert_64.js';

/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */


/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2_64} a dual quaternion to clone
 * @returns {quat2_64} new dual quaternion
 * @function
 */
export function clone(a: ReadonlyQuat2_64): quat2_64 {
  assert_64(a);
  return f_quat2_64.clone(a);
}

/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {quat2_64} out quaternion receiving operation result
 * @param {ReadonlyQuat_64} q a normalized quaternion
 * @param {ReadonlyVec3_64} t translation vector
 * @function
 */
export function fromRotationTranslation(out: quat2_64, q: ReadonlyQuat_64, t: ReadonlyVec3_64): void {
  assert_64(out);
  assert_64(q);
  assert_64(t);
  f_quat2_64.fromRotationTranslation(out, q, t);
}

/**
 * Creates a dual quat from a translation
 *
 * @param {quat2_64} out quaternion receiving operation result
 * @param {ReadonlyVec3_64} t translation vector
 * @function
 */
export function fromTranslation(out: quat2_64, t: ReadonlyVec3_64): void {
  assert_64(out);
  assert_64(t);
  f_quat2_64.fromTranslation(out, t);
}

/**
 * Creates a dual quat from a quaternion
 *
 * @param {quat2_64} out quaternion receiving operation result
 * @param {ReadonlyQuat_64} q the quaternion
 * @function
 */
export function fromRotation(out: quat2_64, q: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(q);
  f_quat2_64.fromRotation(out, q);
}

/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2_64} out the dual quaternion
 * @param {ReadonlyMat4_64} a the matrix
 * @function
 */
export function fromMat4(out: quat2_64, a: ReadonlyMat4_64): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.fromMat4(out, a);
}

/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the source dual quaternion
 * @function
 */
export function copy(out: quat2_64, a: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.copy(out, a);
}

/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2_64} out the receiving quaternion
 */
export function identity(out: quat2_64): void {
  assert_64(out);
  f_quat2_64.identity(out);
}

/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2_64} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @function
 */
export function set(out: quat2_64, x1: number, y1: number, z1: number, w1: number, x2: number, y2: number, z2: number, w2: number): void {
  assert_64(out);
  f_quat2_64.set(out, x1, y1, z1, w1, x2, y2, z2, w2);
}

/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2_64} a Dual Quaternion
 */
export function getDual(out: quat2_64, a: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.getDual(out, a);
}

/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2_64} out the receiving quaternion
 * @param {ReadonlyQuat_64} q a quaternion representing the dual part
 * @function
 */
export function setDual(out: quat2_64, q: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(q);
  f_quat2_64.setDual(out, q);
}

/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3_64} out translation
 * @param  {ReadonlyQuat2_64} a Dual Quaternion to be decomposed
 */
export function getTranslation(out: vec3_64, a: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.getTranslation(out, a);
}

/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the dual quaternion to translate
 * @param {ReadonlyVec3_64} v vector to translate by
 */
export function translate(out: quat2_64, a: ReadonlyQuat2_64, v: ReadonlyVec3_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(v);
  f_quat2_64.translate(out, a, v);
}

/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 */
export function rotateX(out: quat2_64, a: ReadonlyQuat2_64, rad: number): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.rotateX(out, a, rad);
}

/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 */
export function rotateY(out: quat2_64, a: ReadonlyQuat2_64, rad: number): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.rotateY(out, a, rad);
}

/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 */
export function rotateZ(out: quat2_64, a: ReadonlyQuat2_64, rad: number): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.rotateZ(out, a, rad);
}

/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the dual quaternion to rotate
 * @param {ReadonlyQuat_64} q quaternion to rotate by
 */
export function rotateByQuatAppend(out: quat2_64, a: ReadonlyQuat2_64, q: ReadonlyQuat_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(q);
  f_quat2_64.rotateByQuatAppend(out, a, q);
}

/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat_64} q quaternion to rotate by
 * @param {ReadonlyQuat2_64} a the dual quaternion to rotate
 */
export function rotateByQuatPrepend(out: quat2_64, q: ReadonlyQuat_64, a: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(q);
  assert_64(a);
  f_quat2_64.rotateByQuatPrepend(out, q, a);
}

/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the dual quaternion to rotate
 * @param {ReadonlyVec3_64} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 */
export function rotateAroundAxis(out: quat2_64, a: ReadonlyQuat2_64, axis: ReadonlyVec3_64, rad: number): void {
  assert_64(out);
  assert_64(a);
  assert_64(axis);
  f_quat2_64.rotateAroundAxis(out, a, axis, rad);
}

/**
 * Adds two dual quat's
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the first operand
 * @param {ReadonlyQuat2_64} b the second operand
 * @function
 */
export function add(out: quat2_64, a: ReadonlyQuat2_64, b: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_quat2_64.add(out, a, b);
}

/**
 * Multiplies two dual quat's
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a the first operand
 * @param {ReadonlyQuat2_64} b the second operand
 */
export function multiply(out: quat2_64, a: ReadonlyQuat2_64, b: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_quat2_64.multiply(out, a, b);
}

/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2_64} out the receiving dual quat
 * @param {ReadonlyQuat2_64} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @function
 */
export function scale(out: quat2_64, a: ReadonlyQuat2_64, b: number): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.scale(out, a, b);
}

/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2_64} out the receiving dual quat
 * @param {ReadonlyQuat2_64} a the first operand
 * @param {ReadonlyQuat2_64} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 */
export function lerp(out: quat2_64, a: ReadonlyQuat2_64, b: ReadonlyQuat2_64, t: number): void {
  assert_64(out);
  assert_64(a);
  assert_64(b);
  f_quat2_64.lerp(out, a, b, t);
}

/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a dual quat to calculate inverse of
 */
export function invert(out: quat2_64, a: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.invert(out, a);
}

/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2_64.inverse and produces the same result.
 *
 * @param {quat2_64} out the receiving quaternion
 * @param {ReadonlyQuat2_64} a quat to calculate conjugate of
 */
export function conjugate(out: quat2_64, a: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.conjugate(out, a);
}

/**
 * Normalize a dual quat
 *
 * @param {quat2_64} out the receiving dual quaternion
 * @param {ReadonlyQuat2_64} a dual quaternion to normalize
 * @function
 */
export function normalize(out: quat2_64, a: ReadonlyQuat2_64): void {
  assert_64(out);
  assert_64(a);
  f_quat2_64.normalize(out, a);
}

/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2_64} a the first dual quaternion.
 * @param {ReadonlyQuat2_64} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyQuat2_64, b: ReadonlyQuat2_64): boolean {
  assert_64(a);
  assert_64(b);
  return f_quat2_64.exactEquals(a, b);
}

/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2_64} a the first dual quat.
 * @param {ReadonlyQuat2_64} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */
export function equals(a: ReadonlyQuat2_64, b: ReadonlyQuat2_64): boolean {
  assert_64(a);
  assert_64(b);
  return f_quat2_64.equals(a, b);
}
