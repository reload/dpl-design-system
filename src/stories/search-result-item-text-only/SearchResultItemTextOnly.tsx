import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { Button } from "../button/Button";

export type SearchResultItemTextOnlyProps = {
  title: string;
  author: string;
  year: string;
};

export const SearchResultItemTextOnly = ({
  title,
  author,
  year,
}: SearchResultItemTextOnlyProps) => {
  return (
    <div className="search-result-item-text-only">
      <div className="search-result-item-text-only__availability">
        <AvailabilityLabel
          manifestation="Bog"
          availability="Hjemme"
          status="available"
        />
      </div>

      <div className="search-result-item-text-only__text">
        <h2 className="search-result-item-text-only__text__title text-header-h4">
          {title}
        </h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
      </div>

      <div className="search-result-item-text-only__reserve">
        <Button
          label="RESERVER"
          buttonType="none"
          disabled={false}
          collapsible={false}
          size="small"
          variant="filled"
        />
      </div>
    </div>
  );
};
