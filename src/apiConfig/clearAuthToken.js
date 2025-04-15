export const clearAuthTokens = (except) => {
    const allTokens = ["userToken", "adminToken"];
    allTokens.forEach((key) => {
      if (key !== except) localStorage.removeItem(key);
    });
  };