/**
 * What counts as a contact. One set of rules, used twice: by the form for
 * feedback as you type, and by the server action for the check that counts.
 */

export type ContactCheck =
  | { status: "empty" }
  | {
      status: "valid";
      kind: "email" | "instagram";
      /** Normalised, ready to store. */
      value: string;
      note: string;
    }
  /** Not there yet but could be: said gently mid-typing, firmly afterwards. */
  | {
      status: "incomplete";
      note: string;
      problem: string;
      /** Set when the text would be a valid handle if it had its @. */
      handle?: string;
    }
  /** Cannot become valid by typing more. */
  | { status: "invalid"; problem: string };

export const CONTACT_REQUIRED = "Enter your email address or Instagram handle.";

const EMAIL = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[^\s@.]{2,}$/;
// Instagram's own rule: letters, numbers, full stops and underscores, up to 30.
const HANDLE = /^[a-z0-9._]+$/i;
const HANDLE_MAX = 30;

export function checkContact(raw: string): ContactCheck {
  const value = raw.trim();
  if (!value) return { status: "empty" };

  if (value.startsWith("@")) {
    const handle = value.slice(1);
    if (!handle) {
      const text = "Type your Instagram handle after the @.";
      return { status: "incomplete", note: text, problem: text };
    }
    if (!HANDLE.test(handle)) {
      return {
        status: "invalid",
        problem: "Handles only use letters, numbers, full stops and underscores.",
      };
    }
    if (handle.length > HANDLE_MAX) {
      return {
        status: "invalid",
        problem: "Instagram handles are 30 characters at most.",
      };
    }
    return {
      status: "valid",
      kind: "instagram",
      value: value.toLowerCase(),
      note: "Looks like an Instagram handle.",
    };
  }

  if (value.includes("@")) {
    if (/\s/.test(value)) {
      return {
        status: "invalid",
        problem: "Email addresses can't contain spaces.",
      };
    }
    if (value.indexOf("@") !== value.lastIndexOf("@")) {
      return { status: "invalid", problem: "An email address only has one @." };
    }
    // Also keeps a leading = + or - from reaching the Sheet as a formula.
    if (!/^[a-z0-9_]/i.test(value)) {
      return {
        status: "invalid",
        problem: "Email addresses start with a letter or number.",
      };
    }
    if (value.length > 254) {
      return { status: "invalid", problem: "That email address is too long." };
    }
    if (EMAIL.test(value)) {
      return {
        status: "valid",
        kind: "email",
        value: value.toLowerCase(),
        note: "Looks like an email address.",
      };
    }
    return {
      status: "incomplete",
      note: "Keep going, for example name@example.com",
      problem: "That email isn't complete. It should look like name@example.com",
    };
  }

  // No @ yet: either the start of an email, or a handle missing its @.
  return {
    status: "incomplete",
    note: "For Instagram, start with @. For email, keep typing.",
    problem: "Start with @ for Instagram, or enter a full email.",
    handle:
      HANDLE.test(value) && value.length <= HANDLE_MAX ? `@${value}` : undefined,
  };
}
