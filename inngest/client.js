// inngest/client.ts
import { Inngest } from "inngest"; // Capital I, import the class, not the instance

export const inngest = new Inngest({
  id: "scholar-101", // ✅ Use `id`, not `name`
});
