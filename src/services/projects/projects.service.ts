import { project } from "@/db/schema/project";
import Project from "@/interfaces/project.interface";
import IPagination from "../interfaces/pagination.interface";
import { dbService } from "@/db/service";
import { asc, desc, eq, gt, lt } from "drizzle-orm";
import CreateProjectFormData from "@/interfaces/create-form-data.interface";
import { createEmbedding } from "../openai/openai.service";

class ProjectService {
  private concatProjectData(prj: Partial<Project>): string {
    if (!prj.name || !prj.description) {
      throw new Error("invalid project passed. Can't concat");
    }

    // Only spaces for better embeddings according to OpenAI
    return `${prj.name} Description ${prj.description}`
      + `Features ${prj.features || "Empty..."}`
      + `Tech stack ${prj.techstack || "Empty..."}`
      + `Links ${prj.links || "Empty..."}`;
  }

  private async createProjectEmbedding(prj: CreateProjectFormData): Promise<Array<number>> {
    const input = this.concatProjectData(prj);

    return createEmbedding(input);
  }

  async get(pagination: IPagination): Promise<Project[]> {
    return dbService
      .select()
      .from(project)
      .where(pagination.fromId
        ? (pagination.order === 'asc' ? gt(project.id, pagination.fromId) : lt(project.id, pagination.fromId))
        : undefined)
      .limit(pagination.limit)
      .orderBy(pagination.order === 'asc' ? asc(project.id) : desc(project.id));
  }

  async getOne(id?: number): Promise<Project | null> {
    const first = await dbService.query.project.findFirst({
      where: id ? eq(project.id, id) : undefined,
      orderBy: [desc(project.id)],
    });

    return first || null;
  }

  async create(data: CreateProjectFormData) {
    const embedding = await this.createProjectEmbedding(data);
    const [created] = await dbService
      .insert(project)
      .values({
        ...data,
        embedding,
      })
      .returning();

    return created;
  }

  async update(id: number, data: CreateProjectFormData) {
    const embedding = await this.createProjectEmbedding(data);
    return dbService
      .update(project)
      .set({
        ...data,
        embedding,
      })
      .where(eq(project.id, id))
      .returning();
  }

  async delete(id: number) {
    return dbService
      .delete(project)
      .where(eq(project.id, id));
  }
}

export const projectService = new ProjectService();
