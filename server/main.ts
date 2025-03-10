import express, { json } from "express";
import { join } from "path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import * as graphql from "./src/graphql";
import * as routes from "./src/routes";
import { publicRoutes } from "./src/routes/public";
import { graphqlUploadExpress } from "graphql-upload";

async function main() {
  const app = express();

  // middleware
  app.use(morgan("dev"));
  app.use(json({ limit: "50mb" }));
  app.use(cookieParser());
  app.use(graphqlUploadExpress());

  publicRoutes(app);
  routes.setup(app);
  await graphql.setup(app);

  app.use(express.static(join(__dirname, "public"), {extensions: ["js", "jpg", "png", "svg", "css", "html"]}));
  app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "public", "index.html"));
  });

  const port = 3001;
  app.listen({ port }, () => console.log(`server is listening on ${port}/!`));
}

main().catch(console.error);
