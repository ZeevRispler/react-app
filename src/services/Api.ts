import MockClient from './Mock';

let debugMode = true; // Set this to true if you are in debug mode

// todo: add the ApiClient class here

function getClient() {
  if (debugMode) {
    return new MockClient();
  } else {
    return null;  // Return the real client here
  }
}

const Client = getClient();

export default Client;