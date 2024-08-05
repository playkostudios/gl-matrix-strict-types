import { type quat_32, type mat4_32, type quat2_32, type vec3_32, type vec4_32 } from '../types.js';

export type mat4 = mat4_32;
export type quat = quat_32;
export type quat2 = quat2_32;
export type vec3 = vec3_32;
export type vec4 = vec4_32;

export type ReadonlyMat4 = Readonly<mat4_32>;
export type ReadonlyQuat = Readonly<quat_32>;
export type ReadonlyQuat2 = Readonly<quat2_32>;
export type ReadonlyVec3 = Readonly<vec3_32>;
export type ReadonlyVec4 = Readonly<vec4_32>;