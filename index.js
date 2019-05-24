/* @flow strict */
// Uses Rec. 601 to determine luminance value
// See https://en.wikipedia.org/wiki/Luma_(video)#Rec._601_luma_versus_Rec._709_luma_coefficients
export default function getBrightness(hex /*: string|number*/) /*: ?number*/ {
  // Convert hex color to decimal
  const d = typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex
  //     |- Red           |         |- Green       |         |- Blue        |
  return +// Get the Red part of the number
  (
    (((d >> 16) & 255) *
      // And, per Rec. 601; 0.2989R (or R * 299 / 1000)
      299 +
      // Add to that the Green part
      ((d >> 8) & 255) *
        // And, per Rec. 601; 0.5870G (or G * 587 / 1000)
        587 +
      // Add to that the Blue part
      (d & 255) *
        // And, per Rec. 601; 0.1140B (or B * 114 / 1000)
        114) /
    // We've multiplied all Rec.601 numbers by 1000, to avoid floating point issues
    // Now we can divide the whole number by 1000 to get the actual luma value
    1000 /
    // And divide by 255 to get percentage
    255
  )
    // And keep it to 2 DP
    .toFixed(2)
}
