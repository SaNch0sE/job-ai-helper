import prisma from "@/lib/prisma/prisma.service";
import ProjectService from "@/services/projects/projects.service";

const projectService = new ProjectService(prisma);

export default projectService;