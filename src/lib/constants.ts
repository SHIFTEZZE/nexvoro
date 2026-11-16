import type { Category, Merchant } from "@/types/product";

export const BRAND = {
  name: "NEXVORO",
  slogan: "Discover More. Spend Less.",
  description:
    "Discover and compare products from authorized merchant partners. NEXVORO earns a commission from qualifying purchases.",
} as const;

/**
 * Nine consumer categories. Order here drives UI ordering everywhere
 * (homepage grid, header dropdown, filters).
 */
export const CATEGORIES: readonly Category[] = [
  { id: "electronics", label: "Electronics", description: "Phones, audio, wearables, and smart devices" },
  { id: "fashion", label: "Fashion", description: "Apparel, footwear, and everyday essentials" },
  { id: "beauty", label: "Beauty", description: "Skincare, grooming, and personal care" },
  { id: "home", label: "Home", description: "Decor, textiles, and home essentials" },
  { id: "kitchen", label: "Kitchen", description: "Cookware, tools, and small appliances" },
  { id: "accessories", label: "Accessories", description: "Bags, watches, and small carry" },
  { id: "fitness", label: "Fitness", description: "Training, recovery, and mobility" },
  { id: "travel", label: "Travel", description: "Luggage, packing, and travel gear" },
  { id: "gadgets", label: "Gadgets", description: "Small tech, desk, and daily-carry devices" },
] as const;

/**
 * Backward-compatible category URL aliases. Old category IDs map to the new
 * taxonomy so existing links keep working. Never silently drops a filter.
 */
export const CATEGORY_ALIASES: Readonly<Record<string, string>> = {
  audio: "electronics",
  wearables: "electronics",
} as const;

export const MERCHANTS: readonly Merchant[] = [
  {
    id: "demo-merchant-a",
    name: "Demo Merchant A",
    allowlistedHost: "merchant-a.example",
    env: {
      baseUrlKey: "AFFILIATE_MERCHANT_DEMO_A_BASE_URL",
      paramKey: "AFFILIATE_MERCHANT_DEMO_A_PARAM",
      valueKey: "AFFILIATE_MERCHANT_DEMO_A_VALUE",
    },
  },
  {
    id: "demo-merchant-b",
    name: "Demo Merchant B",
    allowlistedHost: "merchant-b.example",
    env: {
      baseUrlKey: "AFFILIATE_MERCHANT_DEMO_B_BASE_URL",
      paramKey: "AFFILIATE_MERCHANT_DEMO_B_PARAM",
      valueKey: "AFFILIATE_MERCHANT_DEMO_B_VALUE",
    },
  },
] as const;

export const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "name_asc", label: "Name (A-Z)" },
] as const;

export const UI = {
  siteUrlFallback: "http://localhost:3000",
} as const;
