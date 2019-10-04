import React from "react";

import useContacts from "../hooks/useContacts";

import Layout from "../components/layout";
import SEO from "../components/SEO";
import BreadcrumbList from "../components/BreadcrumbList";

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
        <ul>
          {contacts.map(contact => (
            <li key={contact.type}>
              {contact.icon && (
                <img
                  src={contact.icon.publicURL}
                  alt=""
                  height={20}
                  width={20}
                  style={{ margin: 0, marginRight: 4, verticalAlign: "middle" }}
                />
              )}
              {contact.link && <a href={contact.link}>{contact.username}</a>}
            </li>
          ))}
        </ul>
      </Layout>
    </>
  );
};
