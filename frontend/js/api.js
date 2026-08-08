const BASE_URL = "http://localhost:3001/api";

async function login(email, password) {

    const response = await fetch(`${BASE_URL}/auth/login`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email,
            password
        })

    });

    const data = await response.json();

    return data;
}