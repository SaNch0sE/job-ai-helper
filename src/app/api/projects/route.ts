import prisma from "@/lib/prisma/prisma.service";
import ProjectService from "@/services/projects/projects.service";

export const dynamic = 'force-dynamic' // defaults to auto
export async function POST(request: Request) {
  const { limit, fromId, skipId } = await request.json();

  const projects = await (new ProjectService(prisma)).get({
    limit: limit || 10,
    fromId,
    skipId,
    order: 'asc',
  });

  return Response.json({
    results: projects,
    next: projects.at(-1)?.id,
  });
}