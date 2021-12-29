import React from "react";

import {
  OurClientsSect,
  OurClientsSection,
  OurClientsTitle,
  OurClientsWrapper,
  LineAfter,
} from "./OurClientsElements";

const OurClients = () => {
  return (
    <OurClientsSect>
      <OurClientsSection>
        <OurClientsWrapper>
          <OurClientsTitle>OurClients</OurClientsTitle>
          <LineAfter />
        </OurClientsWrapper>
      </OurClientsSection>
    </OurClientsSect>
  );
};

export default OurClients;
