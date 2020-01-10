import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import routes from "./routes";

const app = express();

app.use(cors());

app.use(helmet());

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }
  })
);
routes(app);
export default app;
