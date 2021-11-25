import { IHeaderPanel } from "../../interface/home/IHeaderPanel";
import "../../styles/home/header-panel.scss";

export const HeaderPanel: React.FC<IHeaderPanel | null> = (props) => {
  if (props) {
    return (
      <>
        <div className="header-panel">
          <img
            className="main-img"
            src={props.headimage?.url}
            alt={props.headimage?.alt}
          />
          <div className='title-section'>
            <div className="text-center headTitleSmall">{props.headTitleSmall}</div>
            <div className="text-center headTitleBig">{props.headTitleBig}</div>
          </div>
          <img
            className="product-img"
            src={props.headProductImage?.url}
            alt={props.headProductImage?.alt}
          />
        </div>
      </>
    );
  }
  return <></>;
};
