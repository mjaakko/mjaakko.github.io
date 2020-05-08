import React from "react";

import useContacts from "../hooks/useContacts";
import useRecaptchaValue from "../hooks/useRecaptchaValue";

import Layout from "../components/layout";
import SEO from "../components/SEO";
import BreadcrumbList from "../components/BreadcrumbList";
import RecaptchaProvider from "../components/RecaptchaProvider";

const RecaptchaValue = ({ type, url }) => {
  const recaptchaValue = useRecaptchaValue(type, url);

  if (recaptchaValue === null) {
    return "Checking if you're robot...";
  } else if (recaptchaValue.success) {
    return (
      <a href={recaptchaValue.value.link}>{recaptchaValue.value.username}</a>
    );
  } else {
    return `Cannot show ${type} for robots :(`;
  }
};

const Contact = ({ icon, children }) => (
  <>
    {icon && (
      <img
        src={icon.publicURL}
        alt=""
        height={20}
        width={20}
        style={{ margin: 0, marginRight: 4, verticalAlign: "middle" }}
      />
    )}
    {children}
  </>
);

export default () => {
  const contacts = useContacts();

  return (
    <>
      <SEO
        pagePath="/contact"
        pageTitle="Contact"
        pageDescription="Contact details"
      />
      <BreadcrumbList breadcrumbs={[{ name: "Contact", path: "/contact/" }]} />
      <Layout>
        <h1>Contact</h1>
        <RecaptchaProvider>
          <ul>
            {contacts.map(contact => (
              <li key={contact.type}>
                <Contact icon={contact.icon}>
                  {contact.recaptcha ? (
                    <RecaptchaValue
                      type={contact.type}
                      url={contact.recaptchaUrl}
                    />
                  ) : (
                    contact.link && (
                      <a href={contact.link}>{contact.username}</a>
                    )
                  )}
                </Contact>
              </li>
            ))}
          </ul>
        </RecaptchaProvider>
      </Layout>
    </>
  );
};
