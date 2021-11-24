import { IFourthPanel } from "../../interface/home/IFourthPanel";
import "../../styles/home/fourth-panel.scss";

export const FourthPanel: React.FC<IFourthPanel | null> = (props) => {
  if (props) {
    return (
      <div className="fourthpanel-container">
        <div className="tri-panel tri-panel-1">
          <img className="mobileSubImage"
            src={props.mobileSubImage?.url}
            alt={props.mobileSubImage?.alt}
          />
        </div>
        <div className="tri-panel tri-panel-2">
          <div>
            <img
              src={props.homehubLogoWithNameImage?.url}
              alt={props.homehubLogoWithNameImage?.alt}
            />
          </div>
          <div className="content">{props.whatIsHomehubContent}</div>
        </div>
        <div className="tri-panel tri-panel-3">
          <img className="circledMobileImage"
            src={props.circledMobileImage?.url}
            alt={props.circledMobileImage?.alt}
          />
        </div>
      </div>
    );
  }
  return <></>;
};
