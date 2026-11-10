"use client";

import Link from "next/link";
import { PRIVACY_CONFIG, privacyRequestEmail } from "@/lib/privacy";

type ConsentCheckboxProps = {
  /** Unique per form on the page so label/aria ids never clash. */
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
};

/**
 * DPDP consent block shown above every form's submit button.
 *
 * - Always starts UNCHECKED (the parent keeps `checked` in state, default false).
 * - States what is collected, why, and links to the Privacy Policy.
 * - Opens the policy in a new tab so the visitor does not lose what they typed.
 */
export default function ConsentCheckbox({
  id,
  checked,
  onChange,
  error,
}: ConsentCheckboxProps) {
  const errorId = `${id}-error`;
  const noticeId = `${id}-notice`;

  return (
    <div className="mt-4 text-left">
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-required="true"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${noticeId} ${errorId}` : noticeId}
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-gray-300 accent-[#002D91]"
        />
        <label
          htmlFor={id}
          className="cursor-pointer text-sm leading-relaxed text-gray-700"
        >
          I agree that {PRIVACY_CONFIG.entityName} may use my name, email,
          phone number and message to reply to this enquiry, as explained in
          the{" "}
          <Link
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1e40af] underline underline-offset-2 hover:text-[#1e3a8a]"
          >
            Privacy Policy
          </Link>
          . <span className="text-red-600">*</span>
        </label>
      </div>
      <p id={noticeId} className="mt-1.5 pl-8 text-xs leading-relaxed text-gray-500">
        You can withdraw consent or ask us to correct or delete your details
        at any time by writing to {privacyRequestEmail}.
      </p>
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 pl-8 text-sm text-red-500">
          {error}
        </p>
      ) : null}
    </div>
  );
}
