export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image_url: string;
  rating: number;
}

export interface RestaurantListResponse {
  results: Restaurant[];
}
