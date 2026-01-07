import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Hammad Meer",
        "alternateName": "hammad meer dev",
        "givenName": "Hammad",
        "familyName": "Meer",
        "url": "https://hammadmeer.netlify.app/",
        "image": "https://hammadmeer.netlify.app/hammad-meer.jpeg",
        "jobTitle": "MERN Stack & Full-Stack Web Developer",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance / Available for Hire"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Sialkot",
            "addressRegion": "Punjab",
            "addressCountry": "PK"
        },
        "sameAs": [
            "https://github.com/hammadmeer-dev",
            "https://pk.linkedin.com/in/hammad-meer-dev",
            "https://www.instagram.com/hammadmeer_dev/",
            "https://www.facebook.com/hammad.mir.338?mibextid=ZbWKwL"
        ],
        "knowsAbout": [
            "MERN Stack",
            "Full-Stack Web Development",
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Tailwind CSS",
            "JavaScript",
            "API Development"
        ],
        "description": "Hammad Meer is a specialized MERN Stack Developer and Full-Stack Web Developer based in Sialkot, Pakistan. He builds secure, high-performance web applications and is an expert in React.js and Node.js."
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;
