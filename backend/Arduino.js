const fetch = require("node-fetch");

const baseUrl = "http://localhost:2311/";
const loginUrl = baseUrl + "auth/login";
const readingsUrl = baseUrl + "readings";

async function getToken() {
  console.log("Getting token");
  try {
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "killingeddy@gmail.com",
        password: "dodoto2311",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    const data = await response.json();
    console.log("Token:", data.token);
    return data.token;
  } catch (error) {
    console.error("Error during login:", error.message);
    throw error;
  }
}

async function sendReadings(temperatura, umidade, authToken) {
  console.log("Sending readings");
  try {
    const response = await fetch(
      readingsUrl + `?temperatura=${temperatura}&umidade=${umidade}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send readings");
    }

    const data = await response.json();
    console.log("Readings sent successfully");
    return data;
  } catch (error) {
    console.error("Error sending readings:", error.message);
    throw error;
  }
}

async function main() {
  try {
    const token = await getToken();
    const readingsData = await sendReadings(36, 10, token);
    console.log("Readings data:", readingsData);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
