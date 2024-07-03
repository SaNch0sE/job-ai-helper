import { project } from "@/db/schema/project";
import ICreateProjectInput from "@/interfaces/create-input.interface";
import Project from "@/interfaces/project.interface";
import IPagination from "../interfaces/pagination.interface";
import { dbService } from "@/db/service";
import { asc, desc, eq, gt, lt } from "drizzle-orm";

export default class ProjectService {
  static async get(pagination: IPagination): Promise<Project[]> {
    return dbService
      .select()
      .from(project)
      .where(pagination.fromId
        ? (pagination.order === 'asc' ? gt(project.id, pagination.fromId) : lt(project.id, pagination.fromId))
        : undefined)
      .limit(pagination.limit)
      .orderBy(pagination.order === 'asc' ? asc(project.id) : desc(project.id));
  }

  static async getOne(id?: number): Promise<Project | null> {
    const first = await dbService.query.project.findFirst({
      where: id ? eq(project.id, id) : undefined,
      orderBy: [desc(project.id)],
    });

    return first || null;
  }

  static async create(data: ICreateProjectInput) {
    const [created] = await dbService
      .insert(project)
      .values(data)
      .returning();

    return created;
  }

  static async update(id: number, data: ICreateProjectInput) {
    return dbService
      .update(project)
      .set(data)
      .where(eq(project.id, id))
      .returning();
  }

  static async delete(id: number) {
    return dbService
      .delete(project)
      .where(eq(project.id, id));
  }
}
