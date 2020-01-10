import express, { Request, Response } from "express";
import { generateThumbnail } from "../libs/utils";

const thumbnailGeneratorRouter = express.Router();

thumbnailGeneratorRouter.post("/", (req: Request, res: Response) => {
  const imageObj = req.files.filepond;
  const fileBuffer = (imageObj as any).data;
  generateThumbnail(fileBuffer)
    .then(data => {
      res
        .status(200)
        .set("content-type", "image/jpeg")
        .send(data);
    })
    .catch(reason => {
      res.status(500).json({ error: reason });
    });
});

export default thumbnailGeneratorRouter;
