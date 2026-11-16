export type CategoryId =
  | "electronics"
  | "fashion"
  | "beauty"
  | "home"
  | "kitchen"
  | "accessories"
  | "fitness"
  | "travel"
  | "gadgets";

export type MerchantId = "demo-merchant-a" | "demo-merchant-b";

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
}

export interface Merchant {
  id: MerchantId;
  name: string;
  allowlistedHost: string;
  env: {
    baseUrlKey: string;
    paramKey: string;
    valueKey: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categoryId: CategoryId;
  merchantId: MerchantId;
  tags: string[];
  imageUrl: string;
  specs: { label: string; value: string }[];
  featured: boolean;
  createdAt: string;
  affiliatePath: string;
  isDemo: true;
}

export interface ProductFilters {
  q?: string;
  category?: CategoryId;
  merchant?: MerchantId;
  sort?: "featured" | "name_asc" | "newest";
}
