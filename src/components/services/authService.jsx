import React from "react";

const authService = async (username, password) => {
  try {
    const response = await fetch("http://167.172.129.202:3002/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const userData = await response.json();
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true, data: userData };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.message };
    }
  } catch (error) {
    console.error("Erreur lors de la tentative de connexion:", error);
    return {
      success: false,
      error: "Erreur lors de la tentative de connexion. Veuillez réessayer.",
    };
  }
};

export { authService };
