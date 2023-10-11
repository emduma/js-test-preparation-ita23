/**
 * This function greets a user by name.
 *
 * @param {string} name - Name of the user.
 * @returns {string} - Greeting message for the user.
 *
 * Usage:
 * const greetJack = greetUser("Jack"); // greetJack will be "Hello, Jack"
 */

function greetUser(name) {
  return `Hello, ${name}`;

/**
 * This function converts a string to spinal case.
 *
 * @param {string} str - The string to be converted.
 * @returns {string} - The spinal cased string.
 *
 * Usage:
 * const spinal = toSpinalCase("This Is Spinal Tap"); // spinal will be "this-is-spinal-tap"
 */

  function toSpinalCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+|_+/g, '-')              
    .toLowerCase();  

/**
 * This function calculates the time taken by light to travel a certain distance.
 *
 * @param {number} distance - The distance in kilometers.
 * @returns {number} - Time taken in seconds.
 *
 * Usage:
 * const time = lightTravelTime(300000); // time will be 1
 */
    
  function lightTravelTime(distance) {
    const speedOfLight = 300000;
    return distance / speedOfLight;
  }

  console.log(lightTravelTime(300000)) // Returns 1
  
