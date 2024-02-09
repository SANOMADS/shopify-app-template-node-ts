import type { Express } from "express";

import productRoutes from "./products";
import billingRoutes from "./billing";
import shopRoutes from "./shop";

function mountRoutes(app: Express) {
  app.use("/api/products", productRoutes);
  app.use("/api/billing", billingRoutes);
  app.use("/api/shop", shopRoutes);
}

export default mountRoutes;
