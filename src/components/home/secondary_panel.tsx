import { ISecondaryPanel } from "../../interface/home/ISecondaryPanel";
import "../../styles/home/secondary-panel.scss";

export const SecondaryPanel: React.FC<ISecondaryPanel | null> = (props) => {
  if (props) {
    return (
      <>
        <div className="secondary-panel">
          <div className="tri-panel tri-panel-1">
            <img
              className="main-image"
              src={props.whatIsBitlockMainImage?.url}
              alt={props.whatIsBitlockMainImage?.alt}
            />
          </div>
          <div className="tri-panel tri-panel-2">
            <div className="tri-panel-title">
              <img
                src={props.bitlockTitleLogo?.url}
                alt={props.bitlockTitleLogo?.alt}
              />
              <p className="sub-title">{props.whatIsLabel}</p>
            </div>
            <div className="content">{props.whatIsBitlockContent}</div>
          </div>
          <div className="tri-panel subImages">
            <img
              src={props.whatIsBitlockSubImagesBlack?.url}
              alt={props.whatIsBitlockSubImagesBlack?.alt}
            />
            <img
              src={props.whatIsBitlockSubImagesWhite?.url}
              alt={props.whatIsBitlockSubImagesWhite?.alt}
            />
          </div>
        </div>
      </>
    );
  }
  return <></>;
};
