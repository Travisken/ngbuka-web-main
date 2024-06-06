"use server";

export async function signInForm(FormData) {
    const payLoad = {
      username: FormData.get("email"),
      password: FormData.get("password"),
      isEmailLogin: true
    };

    console.log(payLoad);
    try {
      const response = await fetch(
        `https://api-ngbuka.olotusquare.co/api/v1/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payLoad),
        }
      );
      
      if (!response.ok) {
        throw new Error("Failed to sign in. Status: " + response.status);
      }
  
      const data = await response.json();
      setToken(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  }