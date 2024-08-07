import { project } from "@/db/schema/project";
import Project from "@/interfaces/project.interface";
import IPagination from "../interfaces/pagination.interface";
import { dbService } from "@/db/service";
import { asc, cosineDistance, desc, eq, getTableColumns, gt, lt, sql } from "drizzle-orm";
import CreateProjectFormData from "@/interfaces/create-form-data.interface";
import { createEmbedding, generateChatCompletion } from "../openai/openai.service";

class ProjectService {
  concatProjectData(prj: Partial<Project>): string {
    // Only spaces for better embeddings according to OpenAI
    return (prj.name ? `${prj.name};` : "")
      + (prj.description ? `Description ${prj.description};` : "")
      + (prj.features ? `Features ${prj.features};` : "")
      + (prj.techstack ? `Tech stack ${prj.techstack};` : "")
      + (prj.links ? `Links ${prj.links};` : "");
  }

  private async createProjectEmbedding(prj: CreateProjectFormData): Promise<Array<number>> {
    const input = this.concatProjectData(prj);

    const keywords = await generateChatCompletion(`
      Find keywords in the input: ${input}.

      Do not write anything except found keywords.
    `);

    console.debug(`Project ${prj.name} keywords: ${keywords}`);

    return createEmbedding(
      keywords ? `${input}. Project keywords: ${keywords}` : input
    );
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

  async searchByEmbedding(query: string) {
    const queryEmbedding = await createEmbedding(query);
    const vectorQuery = `[${queryEmbedding.join(',')}]`;

    const similarity = sql<number>`1 - (${cosineDistance(
      project.embedding,
      vectorQuery
    )})`;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { embedding, ...columns } = getTableColumns(project);

    return dbService
      .select({ ...columns })
      .from(project)
      .where(gt(similarity, 0.4))
      .orderBy((p) => desc(p.id))
      .limit(5);
  }
}

export const projectService = new ProjectService();
