import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_jJknCO46LEYI@ep-gentle-cloud-ac46ihg5-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
  },
});

