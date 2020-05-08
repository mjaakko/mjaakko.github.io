import React, { useState, useEffect } from "react";

export const KEY = "6LdvfPQUAAAAAEgQxBvV7HN8_zk-_lFTUvru2GYb";

export const RecaptchaContext = React.createContext();

export default ({ children }) => {
  const [_, setReady] = useState(false);

  useEffect(() => {
    const grecaptchaReady = () => {
      setReady(true);
    };

    const recaptchaScript = window.document.createElement("script");
    recaptchaScript.type = "text/javascript";
    recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${KEY}`;
    recaptchaScript.addEventListener("load", grecaptchaReady);

    window.document.body.appendChild(recaptchaScript);
  }, []);

  return (
    <>
      <div className="g-recaptcha" data-sitekey={KEY} data-size="invisible" />
      <RecaptchaContext.Provider value={window.grecaptcha}>
        {children}
      </RecaptchaContext.Provider>
    </>
  );
};
