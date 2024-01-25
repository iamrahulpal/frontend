export const BASE_URL =
  String(import.meta.env.VITE_NODE_ENV) === "development"
    ? String(import.meta.env.VITE_DEV_URL)
    : String(import.meta.env.VITE_PROD_URL);
