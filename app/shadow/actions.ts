"use server";

/**
 * Early-access sign-ups, written to a Google Sheet.
 *
 * The Sheet is fronted by an Apps Script web app (signups.gs, next to this
 * file) and its URL lives in SHADOW_SIGNUP_SHEET_URL. The URL is the only
 * credential: anyone holding it can append rows, so it stays on the server.
 */

import { checkContact, CONTACT_REQUIRED } from "./contact";

export type SignupResult =
  | { ok: true; contact: string }
  | { ok: false; field: "contact" | "form"; error: string };

const FAILED = "Something went wrong. Please try again.";

export async function joinEarlyAccess(
  formData: FormData,
): Promise<SignupResult> {
  const field = (name: string) => {
    const value = formData.get(name);
    return typeof value === "string" ? value : "";
  };

  // The form runs this same check as you type. It is repeated here because
  // nothing sent from a browser can be trusted.
  const contact = checkContact(field("contact"));

  // The honeypot is hidden from people, so only a bot fills it in. Answer as
  // if it worked and write nothing.
  if (field("website")) {
    return { ok: true, contact: contact.status === "valid" ? contact.value : "" };
  }

  if (contact.status !== "valid") {
    return {
      ok: false,
      field: "contact",
      error: contact.status === "empty" ? CONTACT_REQUIRED : contact.problem,
    };
  }

  // A gym name never starts with a formula character, so drop any that do.
  const gym = field("gym")
    .replace(/\s+/g, " ")
    .replace(/^[=+\-\s]+/, "")
    .trim()
    .slice(0, 120);

  const url = process.env.SHADOW_SIGNUP_SHEET_URL;
  if (!url) {
    console.error("[shadow] SHADOW_SIGNUP_SHEET_URL is not set; sign-up dropped.");
    return { ok: false, field: "form", error: FAILED };
  }

  try {
    // Apps Script answers a POST with a redirect to the response body, which
    // fetch follows. A failed or mis-deployed script returns an HTML page with
    // a 200, so the JSON parse is the real success check.
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact: contact.value, kind: contact.kind, gym }),
      // A warm script answers in 2-3s, but a cold one can take well over 10.
      // Keep this under maxDuration in layout.tsx.
      signal: AbortSignal.timeout(25_000),
      cache: "no-store",
    });
    const text = await res.text();
    let data: { ok?: boolean; error?: string } = {};
    try {
      data = JSON.parse(text);
    } catch {
      // Not JSON: fall through and report what Google sent instead.
    }
    if (!res.ok || data.ok !== true) {
      const page = text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      throw new Error(
        data.error ??
          `${res.status} from ${new URL(res.url).host}: ${page.slice(0, 300)}`,
      );
    }
  } catch (err) {
    console.error(
      "[shadow] sign-up could not be saved:",
      err instanceof Error ? `${err.name}: ${err.message}` : err,
    );
    return { ok: false, field: "form", error: FAILED };
  }

  return { ok: true, contact: contact.value };
}
