import { AngleOrder } from "../AngleOrder.js";
import * as vec3_fns from "./vec3.js";
import * as vec4_fns from "./vec4.js";
import { type vec3_32, type quat_32, type ReadonlyVec3_32, type ReadonlyQuat_32 } from './types_32.js';

/**
 * Quaternion in the format XYZW
 * @module quat
 */

/**
 * Creates a new identity quat_32
 *
 * @returns {quat_32} a new quaternion
 */
export function create(): quat_32 {
  const out = new Float32Array(4);
  out[3] = 1;
  return out;
}

/**
 * Set a quat_32 to the identity quaternion
 *
 * @param {quat_32} out the receiving quaternion
 */
export function identity(out: quat_32): void {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
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
  rad = rad * 0.5;
  const s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
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
  const rad = Math.acos(q[3]) * 2.0;
  const s = Math.sin(rad / 2.0);
  if (s > 0.000001) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat_32} a     Origin unit quaternion
 * @param  {ReadonlyQuat_32} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */
export function getAngle(a: ReadonlyQuat_32, b: ReadonlyQuat_32): number {
  const dotproduct = vec4_fns.dot(a, b);

  return Math.acos(2 * dotproduct * dotproduct - 1);
}

/**
 * Multiplies two quat_32's
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a the first operand
 * @param {ReadonlyQuat_32} b the second operand
 */
export function multiply(out: quat_32, a: ReadonlyQuat_32, b: ReadonlyQuat_32): void {
  const ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  const bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat_32} out quat_32 receiving operation result
 * @param {ReadonlyQuat_32} a quat_32 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateX(out: quat_32, a: ReadonlyQuat_32, rad: number): void {
  rad *= 0.5;

  const ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  const bx = Math.sin(rad),
    bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat_32} out quat_32 receiving operation result
 * @param {ReadonlyQuat_32} a quat_32 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateY(out: quat_32, a: ReadonlyQuat_32, rad: number): void {
  rad *= 0.5;

  const ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  const by = Math.sin(rad),
    bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat_32} out quat_32 receiving operation result
 * @param {ReadonlyQuat_32} a quat_32 to rotate
 * @param {number} rad angle (in radians) to rotate
 */
export function rotateZ(out: quat_32, a: ReadonlyQuat_32, rad: number): void {
  rad *= 0.5;

  const ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  const bz = Math.sin(rad),
    bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
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
  const x = a[0],
    y = a[1],
    z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
}

/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate the exponential of
 */
export function exp(out: quat_32, a: ReadonlyQuat_32): void {
  const x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];

  const r = Math.sqrt(x * x + y * y + z * z);
  const et = Math.exp(w);
  const s = r > 0 ? (et * Math.sin(r)) / r : 0;

  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
}

/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate the exponential of
 */
export function ln(out: quat_32, a: ReadonlyQuat_32): void {
  const x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];

  const r = Math.sqrt(x * x + y * y + z * z);
  const t = r > 0 ? Math.atan2(r, w) / r : 0;

  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
}

/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 */
export function pow(out: quat_32, a: ReadonlyQuat_32, b: number): void {
  ln(out, a);
  vec4_fns.scale(out, out, b);
  exp(out, out);
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
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  let ax = a[0],
    ay = a[1],
    az = a[2],
    aw = a[3];
  let bx = b[0],
    by = b[1],
    bz = b[2],
    bw = b[3];

  // calc cosine
  let cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  let scale0 = 0;
  let scale1 = 0;
  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    const omega = Math.acos(cosom);
    const sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
}

/**
 * Generates a random unit quaternion
 *
 * @param {quat_32} out the receiving quaternion
 */
export function random(out: quat_32): void {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  const u1 = Math.random();
  const u2 = Math.random();
  const u3 = Math.random();

  const sqrt1MinusU1 = Math.sqrt(1 - u1);
  const sqrtU1 = Math.sqrt(u1);

  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
}

/**
 * Calculates the inverse of a quat_32
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate inverse of
 */
export function invert(out: quat_32, a: ReadonlyQuat_32): void {
  const a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  const dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  const invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
}

/**
 * Calculates the conjugate of a quat_32
 * If the quaternion is normalized, this function is faster than quat_32.inverse and produces the same result.
 *
 * @param {quat_32} out the receiving quaternion
 * @param {ReadonlyQuat_32} a quat_32 to calculate conjugate of
 */
export function conjugate(out: quat_32, a: ReadonlyQuat_32): void {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
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
export function fromEuler(out: quat_32, x: number, y: number, z: number, order: AngleOrder = AngleOrder.ZYX): void {
  const halfToRad = Math.PI / 360;
  x *= halfToRad;
  z *= halfToRad;
  y *= halfToRad;

  const sx = Math.sin(x);
  const cx = Math.cos(x);
  const sy = Math.sin(y);
  const cy = Math.cos(y);
  const sz = Math.sin(z);
  const cz = Math.cos(z);

  switch (order) {
    case AngleOrder.XYZ:
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;

    case AngleOrder.XZY:
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;

    case AngleOrder.YXZ:
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz - sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;

    case AngleOrder.YZX:
      out[0] = sx * cy * cz + cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;

    case AngleOrder.ZXY:
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz + sx * sy * cz;
      out[3] = cx * cy * cz - sx * sy * sz;
      break;

    case AngleOrder.ZYX:
      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;
      break;

    default:
      throw new Error(`Unknown angle order ${order}`);
  }
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
    return Math.abs(vec4_fns.dot(a, b)) >= 1 - 0.000001;
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
export const rotationTo = (function () {
  const tmpvec3 = vec3_fns.create();
  const xUnitVec3 = vec3_fns.fromValues(1, 0, 0);
  const yUnitVec3 = vec3_fns.fromValues(0, 1, 0);

  return function (out: quat_32, a: ReadonlyVec3_32, b: ReadonlyVec3_32): void {
    const dot = vec3_fns.dot(a, b);
    if (dot < -0.999999) {
      vec3_fns.cross(tmpvec3, xUnitVec3, a);
      if (vec3_fns.length(tmpvec3) < 0.000001) vec3_fns.cross(tmpvec3, yUnitVec3, a);
      vec3_fns.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
    } else {
      vec3_fns.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      vec4_fns.normalize(out, out);
    }
  };
})();

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
export const sqlerp = (function () {
  let temp1 = create();
  let temp2 = create();

  return function (out: quat_32, a: ReadonlyQuat_32, b: ReadonlyQuat_32, c: ReadonlyQuat_32, d: ReadonlyQuat_32, t: number): void {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
  };
})();
