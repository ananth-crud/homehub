import { ITriboxPanel } from "../../interface/home/ITriboxPanel";
import "../../styles/home/tribox-panel.scss";
export const TriBoxPanel: React.FC<ITriboxPanel | null> = (props) => {
  let categories = ['youTube', 'meta', 'instagram'];
  if (props) {
    return (
      <div className="tribox-container">
      {
        categories.map((category, index) => {
          return (
            <div className="tri-panel" key={index}>
              <div>
                <img
                  className="headBackground"
                  src={props.linkages?.[category].headBackground.url}
                  alt={props.linkages?.[category].headBackground.alt}
                />
              </div>
              <img
                className="circle-image"
                src={props.linkages?.[category].logo.url}
                alt={props.linkages?.[category].logo.alt}
              />
              <div className="content">{props.linkages?.[category].content}</div>
              <div className="link-container">
                <img
                  src={props.linkages?.[category].linkLogo.url}
                  alt={props.linkages?.[category].linkLogo.alt}
                />
                <div className="linkMessage">{props.linkages?.[category].linkMessage}</div>
              </div>
            </div>
          )
        })
      }
      </div>
    );
  }
  return <></>;
};
