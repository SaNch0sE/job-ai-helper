import { dbService } from "@/db/service";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

export default DrizzleAdapter(dbService);
