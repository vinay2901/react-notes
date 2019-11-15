const serverBaseUrl = "http://localhost:4000/";
export async function callAPI(method, uri, data = null, headers = null) {
  try {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    }
    let response = await fetch(`${serverBaseUrl}${uri}`, {
      method: method,
      body: data,
      headers: headers
    });
    let result = await response.json();
    return result;
  } catch (error) {
    console.log("Error", error);
  }
}

export async function callGetAPI(method, uri, headers = null) {
  try {
    if (!headers) {
      headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
      };
    }
    let response = await fetch(`${serverBaseUrl}${uri}`, {
      method: method,
      headers: headers
    });
    let result = await response.json();
    return result;
  } catch (error) {
    console.log("Error", error);
  }
}
