import React from "react";

export type CampaignProps = {
  reverse?: boolean;
  ellipsis?: boolean;
  title: string;
};

const Campaign: React.FunctionComponent<CampaignProps> = ({
  reverse,
  ellipsis,
  title,
}) => {
  return (
    <section
      className={`campaign
      ${reverse && "campaign--reverse"}
      ${ellipsis && "campaign--ellipsis"}
       `}
    >
      <img className="campaign__image" src="images/campaign.png" alt="" />
      <h4 className="campaign__title">{title}</h4>
    </section>
  );
};

export default Campaign;
