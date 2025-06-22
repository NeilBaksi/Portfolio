import React from "react";

/**
 * Replaces all occurrences of **text** in a string with
 * <span className="purple">text</span> and returns an array suitable for React rendering.
 * @param {string} input
 * @returns {Array<string|JSX.Element>}
 */
function parsePurple(input) {
  const regex = /\*\*(.+?)\*\*/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(input)) !== null) {
    // Push text before match
    if (match.index > lastIndex) {
      parts.push(input.slice(lastIndex, match.index));
    }
    // Push the purple span
    parts.push(
      <span className="purple" key={key++}>
        {match[1]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }
  // Push any remaining text
  if (lastIndex < input.length) {
    parts.push(input.slice(lastIndex));
  }
  return parts;
}

export default parsePurple;
