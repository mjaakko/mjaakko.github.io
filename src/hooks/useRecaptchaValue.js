import { useState, useEffect, useContext } from "react";
import { KEY, RecaptchaContext } from "../components/RecaptchaProvider";

export default (action, endpoint) => {
  const [value, setValue] = useState(null);
  const grecaptcha = useContext(RecaptchaContext);

  useEffect(() => {
    if (grecaptcha) {
      grecaptcha.ready(() => {
        grecaptcha.execute(KEY, { action }).then(
          token => {
            fetch(`${endpoint}?token=${token}`).then(res => {
              if (res.ok) {
                res.json().then(value => {
                  setValue({ value, success: true });
                });
              } else {
                setValue({ success: false });
              }
            });
          },
          () => setValue({ success: false })
        );
      });
    }
  }, [action, endpoint, grecaptcha]);

  return value;
};
