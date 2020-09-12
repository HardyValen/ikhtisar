import React from 'react';
import { Helmet } from 'react-helmet';
import * as Asset from '../../assets/assets-common';

const SiteHelmet = ({title}) => {
  const description = "Ikhtisar, a web design cookbook by Hardy Valenthio";

  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>{`${title}  | Ikhtisar`}</title>
      <meta name="title" content={`${title}  | Ikhtisar`}/>
      <meta name="description" content={description}/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content=""/>
      <meta property="og:title" content={`${title}  | Ikhtisar`}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={Asset.MetaLogo}/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content=""/>
      <meta property="twitter:title" content={`${title}  | Ikhtisar`}/>
      <meta property="twitter:description" content={description}/>
      <meta property="twitter:image" content={Asset.MetaLogo}/>
    </Helmet>
  )
}
export default SiteHelmet;
