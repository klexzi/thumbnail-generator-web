import { Express } from "express";
import thumbnailGeneratorRouter from "./thumbnail-generator";

export default function routes(app: Express) {
  app.use("/generate-thumbnail", thumbnailGeneratorRouter);
  // Catch 404 and forward to error handler
  app.use((req, res) => {
    res.status(404).send("Endpoint not found");
  });
}
