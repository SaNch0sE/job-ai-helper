import prisma from "@/lib/prisma/prisma.service";
import { PrismaAdapter } from "@auth/prisma-adapter";

export default PrismaAdapter(prisma);