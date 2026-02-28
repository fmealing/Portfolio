"use client";

import { useState, useEffect } from "react";

/**
 * Types `text` out character by character once `trigger` becomes true.
 * @param text       The full string to type.
 * @param trigger    Start typing when this becomes true.
 * @param speed      Milliseconds per character (default 42).
 * @param startDelay Milliseconds to wait before the first character (default 0).
 */
export function useTypewriter(
  text: string,
  trigger: boolean,
  speed = 42,
  startDelay = 0
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;

    // Reset in case trigger flips back (e.g. StrictMode double-invoke)
    setDisplayed("");
    setDone(false);

    let i = 0;
    let id: ReturnType<typeof setTimeout>;

    const tick = () => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i < text.length) {
        id = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    };

    id = setTimeout(tick, startDelay);
    return () => clearTimeout(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return { displayed, done };
}
