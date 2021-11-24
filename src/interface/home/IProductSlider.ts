export interface IProductSlider {
  details: ISlider[];
  sliderButtonLabel: string;
}

export interface ISlider {
  useLabel: string;
  setLabel: {
    url: string;
    alt: string;
  };
  recommendationLabel: string;
  productImage: {
    url: string;
    alt: string;
  };
}
