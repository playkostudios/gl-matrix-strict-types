import { type mat4_32, type vec3_32, type quat_32, type ReadonlyMat4_32, type ReadonlyVec3_32, type ReadonlyQuat_32, type ReadonlyQuat2_32 } from '..//types_32.js';
import * as f_mat4_32 from '../f32/mat4_32.js';
export { create, fromValues } from '../f32/mat4_32.js';
import { assert_32 } from './assert_32.js';

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */


/**
 * Creates a new mat4_32 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4_32} a matrix to clone
 * @returns {mat4_32} a new 4x4 matrix
 */
export function clone(a: ReadonlyMat4_32): mat4_32 {
  assert_32(a);
  return f_mat4_32.clone(a);
}

/**
 * Copy the values from one mat4_32 to another
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the source matrix
 */
export function copy(out: mat4_32, a: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.copy(out, a);
}

/**
 * Set the components of a mat4_32 to the given values
 *
 * @param {mat4_32} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 */
export function set(
  out: mat4_32,
  m00: number,
  m01: number,
  m02: number,
  m03: number,
  m10: number,
  m11: number,
  m12: number,
  m13: number,
  m20: number,
  m21: number,
  m22: number,
  m23: number,
  m30: number,
  m31: number,
  m32: number,
  m33: number
): void {
  assert_32(out);
  f_mat4_32.set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
}

/**
 * Set a mat4_32 to the identity matrix
 *
 * @param {mat4_32} out the receiving matrix
 */
export function identity(out: mat4_32): void {
  assert_32(out);
  f_mat4_32.identity(out);
}

/**
 * Transpose the values of a mat4_32
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the source matrix
 */
export function transpose(out: mat4_32, a: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.transpose(out, a);
}

/**
 * Inverts a mat4_32
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the source matrix
 */
export function invert(out: mat4_32, a: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.invert(out, a);
}

/**
 * Calculates the adjugate of a mat4_32
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the source matrix
 */
export function adjoint(out: mat4_32, a: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.adjoint(out, a);
}

/**
 * Calculates the determinant of a mat4_32
 *
 * @param {ReadonlyMat4_32} a the source matrix
 * @returns {Number} determinant of a
 */
export function determinant(a: ReadonlyMat4_32): number {
  assert_32(a);
  return f_mat4_32.determinant(a);
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the first operand
 * @param {ReadonlyMat4_32} b the second operand
 */
export function multiply(out: mat4_32, a: ReadonlyMat4_32, b: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_mat4_32.multiply(out, a, b);
}

/**
 * Translate a mat4_32 by the given vector
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the matrix to translate
 * @param {ReadonlyVec3_32} v vector to translate by
 */
export function translate(out: mat4_32, a: ReadonlyMat4_32, v: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(v);
  f_mat4_32.translate(out, a, v);
}

/**
 * Scales the mat4_32 by the dimensions in the given vec3_32 not using vectorization
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the matrix to scale
 * @param {ReadonlyVec3_32} v the vec3_32 to scale the matrix by
 **/
export function scale(out: mat4_32, a: ReadonlyMat4_32, v: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(v);
  f_mat4_32.scale(out, a, v);
}

/**
 * Rotates a mat4_32 by the given angle around the given axis
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3_32} axis the axis to rotate around
 */
export function rotate(out: mat4_32, a: ReadonlyMat4_32, rad: number, axis: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(axis);
  f_mat4_32.rotate(out, a, rad, axis);
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 */
export function rotateX(out: mat4_32, a: ReadonlyMat4_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.rotateX(out, a, rad);
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 */
export function rotateY(out: mat4_32, a: ReadonlyMat4_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.rotateY(out, a, rad);
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 */
export function rotateZ(out: mat4_32, a: ReadonlyMat4_32, rad: number): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.rotateZ(out, a, rad);
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {ReadonlyVec3_32} v Translation vector
 */
export function fromTranslation(out: mat4_32, v: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(v);
  f_mat4_32.fromTranslation(out, v);
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {ReadonlyVec3_32} v Scaling vector
 */
export function fromScaling(out: mat4_32, v: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(v);
  f_mat4_32.fromScaling(out, v);
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3_32} axis the axis to rotate around
 */
export function fromRotation(out: mat4_32, rad: number, axis: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(axis);
  f_mat4_32.fromRotation(out, rad, axis);
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 */
export function fromXRotation(out: mat4_32, rad: number): void {
  assert_32(out);
  f_mat4_32.fromXRotation(out, rad);
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 */
export function fromYRotation(out: mat4_32, rad: number): void {
  assert_32(out);
  f_mat4_32.fromYRotation(out, rad);
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 */
export function fromZRotation(out: mat4_32, rad: number): void {
  assert_32(out);
  f_mat4_32.fromZRotation(out, rad);
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {ReadonlyQuat_32} q Rotation quaternion
 * @param {ReadonlyVec3_32} v Translation vector
 */
export function fromRotationTranslation(out: mat4_32, q: ReadonlyQuat_32, v: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(q);
  assert_32(v);
  f_mat4_32.fromRotationTranslation(out, q, v);
}

/**
 * Creates a new mat4_32 from a dual quat.
 *
 * @param {mat4_32} out Matrix
 * @param {ReadonlyQuat2_32} a Dual Quaternion
 */
export function fromQuat2(out: mat4_32, a: ReadonlyQuat2_32): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.fromQuat2(out, a);
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3_32} out Vector to receive translation component
 * @param  {ReadonlyMat4_32} mat Matrix to be decomposed (input)
 */
export function getTranslation(out: vec3_32, mat: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(mat);
  f_mat4_32.getTranslation(out, mat);
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3_32} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4_32} mat Matrix to be decomposed (input)
 */
export function getScaling(out: vec3_32, mat: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(mat);
  f_mat4_32.getScaling(out, mat);
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat_32} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4_32} mat Matrix to be decomposed (input)
 */
export function getRotation(out: quat_32, mat: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(mat);
  f_mat4_32.getRotation(out, mat);
}

/**
 * Decomposes a transformation matrix into its rotation, translation
 * and scale components. Returns only the rotation component
 * @param  {quat_32} out_r Quaternion to receive the rotation component
 * @param  {vec3_32} out_t Vector to receive the translation vector
 * @param  {vec3_32} out_s Vector to receive the scaling factor
 * @param  {ReadonlyMat4_32} mat Matrix to be decomposed (input)
 */
export function decompose(out_r: quat_32, out_t: vec3_32, out_s: vec3_32, mat: ReadonlyMat4_32): void {
  assert_32(out_r);
  assert_32(out_t);
  assert_32(out_s);
  assert_32(mat);
  f_mat4_32.decompose(out_r, out_t, out_s, mat);
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {ReadonlyQuat_32} q Rotation quaternion
 * @param {ReadonlyVec3_32} v Translation vector
 * @param {ReadonlyVec3_32} s Scaling vector
 */
export function fromRotationTranslationScale(out: mat4_32, q: ReadonlyQuat_32, v: ReadonlyVec3_32, s: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(q);
  assert_32(v);
  assert_32(s);
  f_mat4_32.fromRotationTranslationScale(out, q, v, s);
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {ReadonlyQuat_32} q Rotation quaternion
 * @param {ReadonlyVec3_32} v Translation vector
 * @param {ReadonlyVec3_32} s Scaling vector
 * @param {ReadonlyVec3_32} o The origin vector around which to scale and rotate
 */
export function fromRotationTranslationScaleOrigin(out: mat4_32, q: ReadonlyQuat_32, v: ReadonlyVec3_32, s: ReadonlyVec3_32, o: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(q);
  assert_32(v);
  assert_32(s);
  assert_32(o);
  f_mat4_32.fromRotationTranslationScaleOrigin(out, q, v, s, o);
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4_32} out mat4_32 receiving operation result
 * @param {ReadonlyQuat_32} q Quaternion to create matrix from
 */
export function fromQuat(out: mat4_32, q: ReadonlyQuat_32): void {
  assert_32(out);
  assert_32(q);
  f_mat4_32.fromQuat(out, q);
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4_32} out mat4_32 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 */
export function frustum(out: mat4_32, left: number, right: number, bottom: number, top: number, near: number, far: number): void {
  assert_32(out);
  f_mat4_32.frustum(out, left, right, bottom, top, near, far);
}

/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4_32} out mat4_32 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be Infinity
 */
export function perspectiveNO(out: mat4_32, fovy: number, aspect: number, near: number, far: number): void {
  assert_32(out);
  f_mat4_32.perspectiveNO(out, fovy, aspect, near, far);
}

/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4_32} out mat4_32 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be Infinity
 */
export function perspectiveZO(out: mat4_32, fovy: number, aspect: number, near: number, far: number): void {
  assert_32(out);
  f_mat4_32.perspectiveZO(out, fovy, aspect, near, far);
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4_32} out mat4_32 frustum matrix will be written into
 * @param {number} fovUpDegrees FOV up degrees
 * @param {number} fovDownDegrees FOV down degrees
 * @param {number} fovLeftDegrees FOV left degrees
 * @param {number} fovRightDegrees FOV right degrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 */
export function perspectiveFromFieldOfView(out: mat4_32, fovUpDegrees: number, fovDownDegrees: number, fovLeftDegrees: number, fovRightDegrees: number, near: number, far: number): void {
  assert_32(out);
  f_mat4_32.perspectiveFromFieldOfView(out, fovUpDegrees, fovDownDegrees, fovLeftDegrees, fovRightDegrees, near, far);
}

/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4_32} out mat4_32 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 */
export function orthoNO(out: mat4_32, left: number, right: number, bottom: number, top: number, near: number, far: number): void {
  assert_32(out);
  f_mat4_32.orthoNO(out, left, right, bottom, top, near, far);
}

/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4_32} out mat4_32 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 */
export function orthoZO(out: mat4_32, left: number, right: number, bottom: number, top: number, near: number, far: number): void {
  assert_32(out);
  f_mat4_32.orthoZO(out, left, right, bottom, top, near, far);
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4_32} out mat4_32 frustum matrix will be written into
 * @param {ReadonlyVec3_32} eye Position of the viewer
 * @param {ReadonlyVec3_32} center Point the viewer is looking at
 * @param {ReadonlyVec3_32} up vec3_32 pointing up
 */
export function lookAt(out: mat4_32, eye: ReadonlyVec3_32, center: ReadonlyVec3_32, up: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(eye);
  assert_32(center);
  assert_32(up);
  f_mat4_32.lookAt(out, eye, center, up);
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4_32} out mat4_32 frustum matrix will be written into
 * @param {ReadonlyVec3_32} eye Position of the viewer
 * @param {ReadonlyVec3_32} target Point the viewer is looking at
 * @param {ReadonlyVec3_32} up vec3_32 pointing up
 */
export function targetTo(out: mat4_32, eye: ReadonlyVec3_32, target: ReadonlyVec3_32, up: ReadonlyVec3_32): void {
  assert_32(out);
  assert_32(eye);
  assert_32(target);
  assert_32(up);
  f_mat4_32.targetTo(out, eye, target, up);
}

/**
 * Returns Frobenius norm of a mat4_32
 *
 * @param {ReadonlyMat4_32} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
export function frob(a: ReadonlyMat4_32): number {
  assert_32(a);
  return f_mat4_32.frob(a);
}

/**
 * Adds two mat4's
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the first operand
 * @param {ReadonlyMat4_32} b the second operand
 */
export function add(out: mat4_32, a: ReadonlyMat4_32, b: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_mat4_32.add(out, a, b);
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the first operand
 * @param {ReadonlyMat4_32} b the second operand
 */
export function subtract(out: mat4_32, a: ReadonlyMat4_32, b: ReadonlyMat4_32): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_mat4_32.subtract(out, a, b);
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4_32} out the receiving matrix
 * @param {ReadonlyMat4_32} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 */
export function multiplyScalar(out: mat4_32, a: ReadonlyMat4_32, b: number): void {
  assert_32(out);
  assert_32(a);
  f_mat4_32.multiplyScalar(out, a, b);
}

/**
 * Adds two mat4_32's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4_32} out the receiving vector
 * @param {ReadonlyMat4_32} a the first operand
 * @param {ReadonlyMat4_32} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 */
export function multiplyScalarAndAdd(out: mat4_32, a: ReadonlyMat4_32, b: ReadonlyMat4_32, scale: number): void {
  assert_32(out);
  assert_32(a);
  assert_32(b);
  f_mat4_32.multiplyScalarAndAdd(out, a, b, scale);
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4_32} a The first matrix.
 * @param {ReadonlyMat4_32} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function exactEquals(a: ReadonlyMat4_32, b: ReadonlyMat4_32): boolean {
  assert_32(a);
  assert_32(b);
  return f_mat4_32.exactEquals(a, b);
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4_32} a The first matrix.
 * @param {ReadonlyMat4_32} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
export function equals(a: ReadonlyMat4_32, b: ReadonlyMat4_32): boolean {
  assert_32(a);
  assert_32(b);
  return f_mat4_32.equals(a, b);
}
