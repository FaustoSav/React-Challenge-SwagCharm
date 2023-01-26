export interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}



export interface IContentPack {
  name: string;
  description: string;
}

export interface ICartProduct {
  name: string;
  quantity: number;
  price: number;
  contentPack: IContentPack[];
  isPack: boolean;
}

export interface IRecommendedProduct {
  name: string;
  price: number;
  minimum: number;
}

export interface IRootObject {
  cartProducts: ICartProduct[];
  recommendedProducts: IRecommendedProduct[];
}