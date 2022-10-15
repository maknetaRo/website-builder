/**
 *  A synchronization primitive which can only be raised once.
 */
export default function latch() {
  let curr = false;
  let resolver;

  const p = new Promise((resolve) => (resolver = resolve));

  return function (v) {
    if (v === undefined) {
      /* We just query the latch. Nothing to do */
    } else if (v === true) {
      if (curr) {
        throw new Error("A latch can only be set once");
      }
      curr = true;
      resolver(true);
    } else {
      throw new Error("A latch can only be checked or set to true");
    }

    return p;
  };
}
