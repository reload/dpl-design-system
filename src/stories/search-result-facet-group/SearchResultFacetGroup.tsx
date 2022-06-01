import { Facet } from "../facet/Facet";

export type SearchResultFacetGroupProps = { test: null };

export const SearchResultFacetGroup = (props: SearchResultFacetGroupProps) => {
  return (
    <div className="search-result-facet-group">
      <Facet title="EVENTYR" />
      <Facet title="J.K. ROWLING" />
      <Facet title="Harry potter" />
      <Facet title="SKØNLITTERATUR" />
    </div>
  );
};
