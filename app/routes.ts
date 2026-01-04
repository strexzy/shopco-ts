import {
  index,
  layout,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  layout("routes/auth/auth-layout.tsx", [
    route("login", "routes/auth/auth-login.tsx"),
    route("register", "routes/auth/auth-register.tsx"),
  ]),
  layout("routes/shop/shop-layout.tsx", [index("routes/shop/shop-home.tsx")]),
] satisfies RouteConfig;
