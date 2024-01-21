export type product = {
  name: string;
  description: string;
  price: number;
  picture: string;
  id: string;
  nutritionalValues: nutritionalValues;
};
export type nutritionalValues = {
  ingredients: string[];
  servingSize: number;
  calories: number;
  caloriesFromFat: number;
  carbs: number;
  protein: number;
  fats: number;
  saturatedFat: number;
  transFat: number;
  fiber: number;
  cholesterol: number;
  sodium: number;
  sugars: number;
};
export type cartItem = Omit<product, "nutritionalValues" | "description"> & {
  quantity: number;
};
export type cart = {
  items: cartItem[];
  totalPrice: number;
  totalItems: number;
};
export type Customer = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  pickupSpot?: string;
  address?: {
    country: string;
    city: string;
    street: string;
    houseNumber: string;
  };
};

export type OrderType = "delivery" | "pickup" | "";
