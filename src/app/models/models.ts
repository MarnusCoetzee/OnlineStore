export interface Product {
  id: string,
  category: string,
  title: string,
  description: string,
  inStock: boolean,
  stockCount: boolean,
  price: number
  imgUrl: string,
  hasRating: boolean,
  ratingAverage: boolean,
  totalRatingsCount: number,
  totalRatingsSum: number
}
