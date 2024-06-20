import prisma from "@/lib/prisma/prisma.service";
import IPagination from "../interfaces/pagination.interface";
import Project from "@/interfaces/project.interface";

export default class ProjectService {
  static async get(pagination: IPagination): Promise<Project[]> {
    if (pagination.fromId) {
      return prisma.projects.findMany({
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

    return prisma.projects.findMany({
      take: pagination.limit,
      orderBy: {
        id: pagination.order,
      },
    });    
  }

  static async create(data: Project) {
    return prisma.projects.create({
      data,
    });
  }

  static async update(data: Project) {
    return prisma.projects.update({
      where: {
        id: data.id,
      },
      data,
    });
  }


  static async delete(id: number) {
    return prisma.projects.delete({
      where: { id },
    })
  }
}