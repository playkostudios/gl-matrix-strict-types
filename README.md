[gl-matrix](https://github.com/toji/gl-matrix) 3.4.0, but with strict types to
help the browser optimiser. You are expected to use gl-matrix alongside this,
for cases where you don't know the type of the inputs/outputs, to avoid
deoptimising functions in this library.

There are also other changes to the library, such as:
- No chaining (no return values in most functions)
- Some utils are missing
- If matrix inversion fails, you're on your own. There is no return value, and you will get a bad result
- No `str` functions
- No `mat2`, `mat2d`, `mat3d` or `vec2`
- Renamed functions are not re-exported. For example:
    - `quat.length` doesn't exist, use `vec4.length`
    - `quat2.getReal`/`quat2.setReal` -> `quat.copy`
    - `*.mul` -> `*.multiply`
- No `forEach` functions
- No custom types. Use typed arrays instead
- `random` has no scale factor anymore. Call `scale` afterwards instead
- Far planes can't be `null`; must either be a finite number or Infinity, not `null`
- `perspectiveFromFieldOfView` doesn't use an object for passing degrees
- Random function is not configurable
- `round` function no longer exists, and the browser's round implementation is used instead
- Default angle order is no longer configurable
- Angle order is now passed as a numeric enum
- Epsilon is no longer configurable

TODO:
- tests
