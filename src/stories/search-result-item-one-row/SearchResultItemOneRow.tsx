import { AvailabilityLabel } from "../availability-label/AvailabilityLabel";
import { Button } from "../button/Button";
import { Material } from "../material/Material";

export type SearchResultItemOneRowProps = {
  title: string;
  author: string;
  year: string;
};

export const SearchResultItemOneRow = ({
  title,
  author,
  year,
}: SearchResultItemOneRowProps) => {
  return (
    <div className="search-result-item-one-row">
      <div className="search-result-item-one-row__availability">
        <AvailabilityLabel
          manifestation="Bog"
          availability="Hjemme"
          status="available"
        />
      </div>
      <div className="search-result-item-one-row__cover">
        <Material
          url="images/book_cover_3.jpg"
          size="small"
          animate={false}
          tint="120"
        />
      </div>

      <div className="search-result-item-one-row__text">
        <h2 className="search-result-item-one-row__text__title text-header-h4">
          {title}
        </h2>
        <p className="text-small-caption">{`Af ${author} (${year})`}</p>
        <div className="search-result-item-one-row__text__details">
          <p className="link-tag text-small-caption">Detaljer om materialet </p>
          <img src="icons/collection/ExpandMore.svg" alt="ExpandMore" />
        </div>
      </div>

      <div className="search-result-item-one-row__reserve">
        <Button
          label="RESERVER"
          buttonType="none"
          disabled={false}
          collapsible={false}
          size="small"
          variant="filled"
        />
        <span className="link-tag text-small-caption search-result-item-one-row__reserve__find">
          Find på hylden
        </span>
      </div>
    </div>
  );
};
