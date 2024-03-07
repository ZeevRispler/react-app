import MockClient from './Mock';

let debugMode = false; // Set this to true if you are in debug mode


// write a set of functions to interface with a remote API, use a common client to make requests, and handle the responses, catch errors and print them to the console, and then use these functions in your components to fetch and display data from the API.
// one function access api/list and returns a list of items, another function access api/item/:id and returns a single item, and a third function access api/submit and sends a new item to the server.

import axios, {AxiosResponse} from "axios";

class ApiClient {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: "/api",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: false,
    });
  }

  private handleResponse(response: AxiosResponse) {
    if (response.data.success) {
      return response.data.data;
    } else {
      console.error(response.data.error);
      return null;
    }
  }

  private handleError(error: any) {
    console.error(error.message);
    return null;
  }

  async listSessions(last?: number, username?: string) {
    try {
      const response = await this.client.get("/sessions", {
        params: {
          last: last,
          username: username,
        },

      });
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  async getSession(id: string) {
    try {
      const response = await this.client.get(`/session/${id}`);
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }

  async submitQuery(id: string, question: string, args?: any) {
    try {
      const response = await this.client.post("http://localhost:8000/api/query", {"session_id": id, "question": question});
      return this.handleResponse(response);
    } catch (error) {
      return this.handleError(error);
    }
  }
}

// export default new ApiClient();

// todo: add the ApiClient class here

function getClient() {
  if (debugMode) {
    return new MockClient();
  } else {
    return new ApiClient();  // Return the real client here
  }
}

const Client = getClient();

export default Client;