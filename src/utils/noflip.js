const NOFLIP = '/* @noflip */';

// Appends a noflip comment to a style rule in order to prevent it from being automatically
// flipped in RTL contexts. This should be used only in situations where the style must remain
// unflipped regardless of direction context. See: https://github.com/kentcdodds/rtl-css-js#usage
// Reminder: the output is a String, so the input should probably also be a String!
export default function noflip(value) {
  return `${typeof value === 'number' ? `${value}px` : value} ${NOFLIP}`;
}
