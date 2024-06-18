import { PrismaClient } from "@prisma/client";
import IPagination from "../interfaces/pagination.interface";
import Project from "@/interfaces/project.interface";

export default class ProjectService {
  private db: PrismaClient;

  constructor(client: PrismaClient) {
    this.db = client;
  }

  async get(pagination: IPagination): Promise<Project[]> {
    if (pagination.fromId) {
      return this.db.projects.findMany({
        take: pagination.limit,
        skip: Number(pagination.skipId),
        cursor: {
          id: pagination.fromId,
        },
        orderBy: {
          id: pagination.order,
        },
      });
    }

    return this.db.projects.findMany({
      take: pagination.limit,
      orderBy: {
        id: pagination.order,
      },
    });    
  }

  async create(data: Project) {
    return this.db.projects.create({
      data,
    });
  }

  async update(data: Project) {
    return this.db.projects.update({
      where: {
        id: data.id,
      },
      data,
    });
  }


  async delete(id: number) {
    return this.db.projects.delete({
      where: { id },
    })
  }
}