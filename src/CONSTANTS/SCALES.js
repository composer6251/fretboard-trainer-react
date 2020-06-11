/****
 * this file holds the constants for the different scale patterns. Each scale has a CONSTANT which is an array of int which represent the whole step or half steps of the scale.
 *                     T,W,W,H,W,W,W,H 
 * EX:  MAJOR_SCALE = (0,2,2,1,2,2,2,1)
 * 
 * When creating the scale for the user, the entire scale array will be mapped (once for each octave), adding the props.keynote value + SCALE[value at index], to a new notesInKey array.
 */

 
 export const MAJOR_SCALE = (0,2,2,1,2,2,2,1);

 export const MINOR_SCALE = (0,2,1,2,2,1,2,2);

 export const KEY_NOTES = ("C","D","E");

 
