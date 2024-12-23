import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import compression from "compression";
import cors from "cors";

import appRoutes from "./routes/user.routes.js";
import mainRoute from "./routes/main.route.js";

const port = 4000;
const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
});

app.use(compression());
app.use(limiter);
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use("/v1/user", appRoutes);
app.use("/v1", mainRoute);

app.listen(port, () => {
  console.log(`API server running on ${port}`);
});
