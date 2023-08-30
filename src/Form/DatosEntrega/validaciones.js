export function validateAddress(address) {
    // Check if the address is at least five characters long
    return address.length >= 5;
  }
  
  export function validateCity(city) {
    // Check if the city is at least two characters long
    return city.length >= 2;
  }
  
  export function validateState(state) {
    // Check if the state is at least two characters long
    return state.length >= 2;
  }