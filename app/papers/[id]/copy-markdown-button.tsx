"use client";

import { useState } from "react";

type Props = {
  markdown: string;
};

export function CopyMarkdownButton({ markdown }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button className="copy-button" onClick={onCopy}>
      {copied ? "Copied" : "Copy note"}
    </button>
  );
}

