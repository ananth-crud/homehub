import React from "react";
import { FourthPanel } from "../components/home/fourth_panel";
import { HeaderPanel } from "../components/home/header_panel";
import { ProductSlider } from "../components/home/product_slider";
import { SecondaryPanel } from "../components/home/secondary_panel";
import { TriBoxPanel } from "../components/home/tribox_panel";
import { IFourthPanel } from "../interface/home/IFourthPanel";
import { IHeaderPanel } from "../interface/home/IHeaderPanel";
import { IProductSlider, ISlider } from "../interface/home/IProductSlider";
import { ISecondaryPanel } from "../interface/home/ISecondaryPanel";
import { ITop } from "../interface/home/ITop";
import { ITriboxPanel } from "../interface/home/ITriboxPanel";
import { GeneralTop } from "../services/new-top-service";
export const Home: React.FC = () => {
  const { state, isLoading } = GeneralTop<ITop>();
  return (
    <>
      <HeaderPanel {...constructHeaderPanelObject(state)} />
      <SecondaryPanel {...constructSecondaryPanelObject(state)} />
      <ProductSlider {...constructSliderArray(state)} />
      <FourthPanel {...constructFourthPanelObject(state)} />
      <TriBoxPanel {...constructTriboxPanelObject(state)} />
    </>
  );
};

const constructSliderArray = (data: ITop | undefined): IProductSlider => {
  try {
    if (data && data.acf) {
      let SliderObj: IProductSlider = {
        details: [],
        sliderButtonLabel: data.acf.sliderButtonLabel,
      };
      Object.keys(data.acf.productsArrowSlider).forEach((element: any) => {
        SliderObj.details.push(data.acf.productsArrowSlider[element]);
      });
      return SliderObj;
    }
  } catch (e) {}
  return { details: [], sliderButtonLabel: "" };
};

const constructHeaderPanelObject = (data: ITop | undefined): IHeaderPanel => {
  return {
    headimage: data?.acf.headimage,
    headTitleSmall: data?.acf.headTitleSmall,
    headTitleBig: data?.acf.headTitleBig,
    headProductImage: data?.acf.headProductImage,
  };
};
const constructSecondaryPanelObject = (
  data: ITop | undefined
): ISecondaryPanel => {
  return {
    whatIsBitlockMainImage: data?.acf.whatIsBitlockMainImage,
    bitlockTitleLogo: data?.acf.bitlockTitleLogo,
    whatIsLabel: data?.acf.whatIsLabel,
    whatIsBitlockContent: data?.acf.whatIsBitlockContent,
    whatIsBitlockSubImagesBlack: data?.acf.whatIsBitlockSubImagesBlack,
    whatIsBitlockSubImagesWhite: data?.acf.whatIsBitlockSubImagesWhite,
  };
};

const constructTriboxPanelObject = (data: ITop | undefined): ITriboxPanel => {
  return {
    linkages: data?.acf.linkages,
  };
};

const constructFourthPanelObject = (data: ITop | undefined): IFourthPanel => {
  return {
    homehubLogoWithNameImage: data?.acf.homehubLogoWithNameImage,
    whatIsHomehubContent: data?.acf.whatIsHomehubContent,
    circledMobileImage: data?.acf.circledMobileImage,
    mobileSubImage: data?.acf.mobileSubImage,
  };
};
