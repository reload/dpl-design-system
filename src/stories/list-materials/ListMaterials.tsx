import { useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import { StatusLabel, StatusLabelProps } from "../status-label/StatusLabel";

export type ListMaterialsProps = {
  title: string;
  author: string;
  statusMaterialType: StatusLabelProps;
  statusDelivery: StatusLabelProps;
  canBeRenewed: boolean;
  isChecked: boolean;
};

export const ListMaterials = (props: ListMaterialsProps) => {
  const [isChecked, setChecked] = useState(props.isChecked);

  const handleToggle = (state: boolean) => {
    setChecked(state);
  };

  return (
    <div
      className={`list-materials ${
        isChecked ? "list-materials__selected" : ""
      }`}
    >
      {props.canBeRenewed && (
        <div className="list-materials__checkbox mr-32">
          <Checkbox isChecked={isChecked} callback={handleToggle} />
        </div>
      )}
      <div className="list-materials__content">
        <div className="list-materials__content-status">
          <StatusLabel {...props.statusMaterialType} />
          <StatusLabel classNames="list-materials__content-status-label" {...props.statusDelivery} />
        </div>
        <p className="text-header-h5 mt-8">{props.title}</p>
        <p className="text-small-caption">{props.author}</p>
      </div>
      <div className="list-materials__status">
        {!props.canBeRenewed && (
          <span className="text-small-caption">
            Digitale materialer kan ikke fornys
          </span>
        )}
        <StatusLabel {...props.statusDelivery} />
      </div>
    </div>
  );
};
