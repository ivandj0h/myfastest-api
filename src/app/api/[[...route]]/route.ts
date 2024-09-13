import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/search",  (c) => {
  return c.json({ result: ["Hello", "World"], duration: 0 });
});

// export to Vercel
export const GET = handle(app);

// export to Cloudflare Workers
export default app as never;