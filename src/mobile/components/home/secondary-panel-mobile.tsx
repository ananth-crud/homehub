import { ISecondaryPanel } from "../../../interface/home/ISecondaryPanel";
import "../../../styles/home/secondary-panel.scss";

export const SecondaryPanelMobile: React.FC<ISecondaryPanel | null> = (props) => {
  if (props) {
    return (
      <>
        <div className="secondary-panel">
            <div className="tri-panel title-section">
                <div className="tri-panel-title">
                    <img
                        src={props.bitlockTitleLogo?.url}
                        alt={props.bitlockTitleLogo?.alt}
                    />
                    <p className="sub-title">{props.whatIsLabel}</p>
                </div>
            </div>
            <div className="tri-panel mainImage-section">
                <img
                className="main-image"
                src={props.whatIsBitlockMainImage?.url}
                alt={props.whatIsBitlockMainImage?.alt}
                />
            </div>

            <div className='content-section'>
                <div className="content">{props.whatIsBitlockContent}</div>
                <div className='subImage-section'>
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
            </div>
            
            
        </div>
      </>
    );
  }
  return <></>;
};
