import type { Express } from "express";

import productRoutes from "./products";
import billingRoutes from "./billing";

function mountRoutes(app: Express) {
  app.use("/api/products", productRoutes);
  app.use("/api/billing", billingRoutes);

}

export default mountRoutes;
