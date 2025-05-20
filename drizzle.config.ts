
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './utils/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://Ai%20PrepBot_owner:npg_rnX2k4WwuTHy@ep-broad-pine-a4vi9ykm-pooler.us-east-1.aws.neon.tech/Ai%20PrepBot?sslmode=require"
  },
});
