export type FacetProps = {
  title: string;
};

export const Facet = ({ title = "Title" }: FacetProps) => {
  return (
    <div className="text-tags facet">
      {title}
      <img
        className="facet__close-svg"
        src="icons/collection/CloseLarge.svg"
        alt={`${title} facet`}
      />
    </div>
  );
};
