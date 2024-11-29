import React from "react";
import styles from "./SocialProofSection.module.css";

// Import SVG files
import BoltshiftLogo from "./assets/icons/boltshift.svg";
import LightboxLogo from "./assets/icons/lightbox.svg";
import FeatherDevLogo from "./assets/icons/featherdev.svg";
import SpheruleLogo from "./assets/icons/spherule.svg";
import GlobalBankLogo from "./assets/icons/globalbank.svg";
import NietzscheLogo from "./assets/icons/nietzsche.svg";

const SocialProofSection = () => {
  const companies = [
    { id: 1, logo: BoltshiftLogo, name: "Boltshift" },
    { id: 2, logo: LightboxLogo, name: "Lightbox" },
    { id: 3, logo: FeatherDevLogo, name: "FeatherDev" },
    { id: 4, logo: SpheruleLogo, name: "Spherule" },
    { id: 5, logo: GlobalBankLogo, name: "GlobalBank" },
    { id: 6, logo: NietzscheLogo, name: "Nietzsche" },
  ];

  return (
    <div className={styles.maincontainer}>
      <h4 className={styles.title}>
        Join 4,000+ companies already growing
      </h4>
      <div className={styles.contentcontainer}>
        {companies.map((company) => (
          <div key={company.id} className={styles.iconbox}>
            <img
              src={company.logo}
              alt={company.name}
              className={styles.logo}
            />
            <b className={styles.name}>{company.name}</b>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProofSection;
