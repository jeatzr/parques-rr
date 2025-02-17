import {
  type RouteConfig,
  layout,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/index.tsx", [
    route("/", "routes/welcome.tsx"),
    route("comunidades", "routes/comunidades.tsx"),
    route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
