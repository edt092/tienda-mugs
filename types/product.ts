export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  psychologicalBenefits: string[];
  neuroscience: {
    title: string;
    description: string;
  };
  dailyImpact: string;
  mentalBenefits: string[];
}

export interface CartItem extends Product {
  quantity: number;
}
