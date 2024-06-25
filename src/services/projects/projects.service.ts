import prisma from "@/lib/prisma/prisma.service";
import IPagination from "../interfaces/pagination.interface";
import Project from "@/interfaces/project.interface";
import ICreateProjectInput from "@/interfaces/create-input.interface";

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

  static async getOne(id?: number): Promise<Project | null> {
    if (id) {
      return prisma.projects.findFirst({
        where: {
          id,
        },
        orderBy: {
          id: "desc",
        },
      });
    }

    return prisma.projects.findFirst({
      orderBy: {
        id: "desc",
      },
    });
  }

  static async create(data: ICreateProjectInput) {
    return prisma.projects.create({
      data,
    });
  }

  static async update(id: number, data: ICreateProjectInput) {
    return prisma.projects.update({
      where: {
        id,
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