import { type vec4_32, type ReadonlyMat4_32, type ReadonlyQuat_32, type ReadonlyVec4_32 } from './types_32.js';

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4_32
 *
 * @returns {vec4_32} a new 4D vector
 */
export function create(): vec4_32 {
  return new Float32Array(4);
}

/**
 * Creates a new vec4_32 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4_32} a vector to clone
 * @returns {vec4_32} a new 4D vector
 */
export function clone(a: ReadonlyVec4_32): vec4_32 {
  const out = new Float32Array(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4_32 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4_32} a new 4D vector
 */
export function fromValues(x: number, y: number, z: number, w: number): vec4_32 {
  const out = new Float32Array(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4_32 to another
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the source vector
 */
export function copy(out: vec4_32, a: ReadonlyVec4_32): void {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
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
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
}

/**
 * Adds two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function add(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function subtract(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
}

/**
 * Multiplies two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function multiply(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
}

/**
 * Divides two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function divide(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
}

/**
 * Math.ceil the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to ceil
 */
export function ceil(out: vec4_32, a: ReadonlyVec4_32): void {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
}

/**
 * Math.floor the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to floor
 */
export function floor(out: vec4_32, a: ReadonlyVec4_32): void {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
}

/**
 * Returns the minimum of two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function min(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
}

/**
 * Returns the maximum of two vec4_32's
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 */
export function max(out: vec4_32, a: ReadonlyVec4_32, b: ReadonlyVec4_32): void {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
}

/**
 * symmetric round the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to round
 */
export function round(out: vec4_32, a: ReadonlyVec4_32): void {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
}

/**
 * Scales a vec4_32 by a scalar number
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the vector to scale
 * @param {Number} b amount to scale the vector by
 */
export function scale(out: vec4_32, a: ReadonlyVec4_32, b: number): void {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
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
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
}

/**
 * Calculates the euclidian distance between two vec4_32's
 *
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 * @returns {Number} distance between a and b
 */
export function distance(a: ReadonlyVec4_32, b: ReadonlyVec4_32): number {
  const x = b[0] - a[0];
  const y = b[1] - a[1];
  const z = b[2] - a[2];
  const w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared euclidian distance between two vec4_32's
 *
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 * @returns {Number} squared distance between a and b
 */
export function squaredDistance(a: ReadonlyVec4_32, b: ReadonlyVec4_32): number {
  const x = b[0] - a[0];
  const y = b[1] - a[1];
  const z = b[2] - a[2];
  const w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4_32
 *
 * @param {ReadonlyVec4_32} a vector to calculate length of
 * @returns {Number} length of a
 */
export function length(a: ReadonlyVec4_32): number {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vec4_32
 *
 * @param {ReadonlyVec4_32} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
export function squaredLength(a: ReadonlyVec4_32): number {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to negate
 */
export function negate(out: vec4_32, a: ReadonlyVec4_32): void {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
}

/**
 * Returns the inverse of the components of a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to invert
 */
export function inverse(out: vec4_32, a: ReadonlyVec4_32): void {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
}

/**
 * Normalize a vec4_32
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a vector to normalize
 */
export function normalize(out: vec4_32, a: ReadonlyVec4_32): void {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = a[3];
  let len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
}

/**
 * Calculates the dot product of two vec4_32's
 *
 * @param {ReadonlyVec4_32} a the first operand
 * @param {ReadonlyVec4_32} b the second operand
 * @returns {Number} dot product of a and b
 */
export function dot(a: ReadonlyVec4_32, b: ReadonlyVec4_32): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
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
  const A = v[0] * w[1] - v[1] * w[0],
    B = v[0] * w[2] - v[2] * w[0],
    C = v[0] * w[3] - v[3] * w[0],
    D = v[1] * w[2] - v[2] * w[1],
    E = v[1] * w[3] - v[3] * w[1],
    F = v[2] * w[3] - v[3] * w[2];
  const G = u[0];
  const H = u[1];
  const I = u[2];
  const J = u[3];

  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
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
  const ax = a[0];
  const ay = a[1];
  const az = a[2];
  const aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
}

/**
 * Generates a random vector
 *
 * @param {vec4_32} out the receiving vector
 */
export function random(out: vec4_32): void {
  // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;
  let rand = Math.random();
  const v1 = rand * 2 - 1;
  const v2 = (4 * Math.random() - 2) * Math.sqrt(rand * -rand + rand);
  const s1 = v1 * v1 + v2 * v2;

  rand = Math.random();
  const v3 = rand * 2 - 1;
  const v4 = (4 * Math.random() - 2) * Math.sqrt(rand * -rand + rand);
  const s2 = v3 * v3 + v4 * v4;

  const d = Math.sqrt((1 - s1) / s2);
  out[0] = v1;
  out[1] = v2;
  out[2] = v3 * d;
  out[3] = v4 * d;
}

/**
 * Transforms the vec4_32 with a mat4.
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the vector to transform
 * @param {ReadonlyMat4_32} m matrix to transform with
 */
export function transformMat4(out: vec4_32, a: ReadonlyVec4_32, m: ReadonlyMat4_32): void {
  const x = a[0],
    y = a[1],
    z = a[2],
    w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
}

/**
 * Transforms the vec4_32 with a quat
 *
 * @param {vec4_32} out the receiving vector
 * @param {ReadonlyVec4_32} a the vector to transform
 * @param {ReadonlyQuat_32} q quaternion to transform with
 */
export function transformQuat(out: vec4_32, a: ReadonlyVec4_32, q: ReadonlyQuat_32): void {
  const x = a[0],
    y = a[1],
    z = a[2];
  const qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3];

  // calculate quat * vec
  const ix = qw * x + qy * z - qz * y;
  const iy = qw * y + qz * x - qx * z;
  const iz = qw * z + qx * y - qy * x;
  const iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
}

/**
 * Set the components of a vec4_32 to zero
 *
 * @param {vec4_32} out the receiving vector
 */
export function zero(out: vec4_32): void {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4_32} a The first vector.
 * @param {ReadonlyVec4_32} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyVec4_32, b: ReadonlyVec4_32): boolean {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4_32} a The first vector.
 * @param {ReadonlyVec4_32} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
export function equals(a: ReadonlyVec4_32, b: ReadonlyVec4_32): boolean {
  const a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  const b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  return (
    Math.abs(a0 - b0) <=
      0.000001 * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
    Math.abs(a1 - b1) <=
      0.000001 * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
    Math.abs(a2 - b2) <=
      0.000001 * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
    Math.abs(a3 - b3) <=
      0.000001 * Math.max(1.0, Math.abs(a3), Math.abs(b3))
  );
}
