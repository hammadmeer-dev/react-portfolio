import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, image }) => {
    const siteTitle = "Hammad Meer | MERN Stack & Full-Stack Web Developer";
    const defaultDescription = "I’m Hammad Meer (hammad meer dev) — a MERN Stack & Full-Stack Web Developer passionate about building fast, secure, and scalable web applications.";
    const defaultKeywords = "Hammad Meer, hammad meer dev, MERN Stack Developer, Full-Stack Developer, React.js, Node.js, MongoDB, Express.js";
    const siteUrl = "https://hammadmeer.netlify.app/";
    const defaultImage = "https://hammadmeer.netlify.app/hammad-meer.jpeg";

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title ? `${title} | Hammad Meer` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="author" content="Hammad Meer" />
            <link rel="canonical" href={url || siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url || siteUrl} />
            <meta property="twitter:title" content={title || siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
