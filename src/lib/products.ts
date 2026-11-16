import { PRODUCTS } from "@/data/products";
import { CATEGORIES, MERCHANTS } from "@/lib/constants";
import type { Category, CategoryId, Merchant, MerchantId, Product } from "@/types/product";

export function getAllProducts(): readonly Product[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getFeaturedProducts(limit = 8): Product[] {
  return PRODUCTS.filter((p) => p.featured).slice(0, limit);
}

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return [];
  return PRODUCTS.filter(
    (p) => p.slug !== slug && p.categoryId === current.categoryId,
  ).slice(0, limit);
}

export function getCategoryById(id: CategoryId): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getMerchantById(id: MerchantId): Merchant | undefined {
  return MERCHANTS.find((m) => m.id === id);
}

export function isValidCategory(value: string): value is CategoryId {
  return CATEGORIES.some((c) => c.id === value);
}

export function isValidMerchant(value: string): value is MerchantId {
  return MERCHANTS.some((m) => m.id === value);
}
