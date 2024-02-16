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
  address?: string;
};

export type OrderType = "delivery" | "pickup" | "";
export type location = {
  name: string;
  id: string;
};
export type orderItem = Omit<
  product,
  "nutritionalValues" | "description"
> & {
  quantity: number;
};
export type order = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  totalPrice: number;
  pickupSpot?: string;
  deliveryAddress?: string;
  products: orderItem[];
};