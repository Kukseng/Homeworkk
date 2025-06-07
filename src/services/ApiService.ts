import { Product } from '../types/Product';

export class ApiService {
  private static readonly BASE_URL = 'https://fakestoreapi.com';

  static async fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products. Please try again later.');
    }
  }

  static async fetchProduct(id: number): Promise<Product> {
    try {
      const response = await fetch(`${this.BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw new Error('Failed to fetch product details. Please try again later.');
    }
  }

  static async fetchCategories(): Promise<string[]> {
    try {
      const response = await fetch(`${this.BASE_URL}/products/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories. Please try again later.');
    }
  }
}