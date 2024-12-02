import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";

import appRoutes from "./routes/user.routes.js";
import mainRoute from "./routes/main.route.js";

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(helmet());

app.use("/v1/user", appRoutes);
app.use("/v1", mainRoute);

app.listen(port, () => {
  console.log(`API server running on ${port}`);
});
