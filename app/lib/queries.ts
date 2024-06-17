import { dummyTasks } from "@/db/dummy-data";
import { tasks, type Task } from "@/db/schema";
// import type { DrizzleWhere } from "@/@types";
// import { and, asc, desc, gte, lte, or, sql, type SQL } from "drizzle-orm";

// import { filterColumn } from "@/lib/filter-column";

import { getTasksSchema, type GetTasksSchema } from "./validations";

// GET TASKS
export async function getTasks(input: GetTasksSchema) {
  const validatedInput = getTasksSchema.parse(input);
  
  const { page, per_page, sort, title, status, priority, operator, from, to } = validatedInput;

  try {
    // Offset to paginate the results
    const offset = (page - 1) * per_page;
    // Column and order to sort by
    const [column, order] = (sort?.split(".").filter(Boolean) ?? [
      "createdAt",
      "desc",
    ]) as [keyof Task | undefined, "asc" | "desc" | undefined];

    // Convert the date strings to date objects
    const fromDay = from ? new Date(from) : undefined;
    const toDay = to ? new Date(to) : undefined;

    const expressions: ((task: Task) => boolean)[] = [
      title ? (task: Task) => task.title?.includes(title) : undefined,
      status ? (task: Task) => task.status === status : undefined,
      priority ? (task: Task) => task.priority === priority : undefined,
      fromDay && toDay
        ? (task: Task) =>
            new Date(task.createdAt) >= fromDay &&
            new Date(task.createdAt) <= toDay
        : undefined,
    ].filter(Boolean) as ((task: Task) => boolean)[];

    const filteredTasks = dummyTasks.filter((task) =>
      expressions.every((expression) => expression(task)),
    );

    const sortedTasks = filteredTasks.sort((a, b) => {
      if (!column || !(column in a) || !(column in b)) return 0;
      if (order === "asc") {
        return a[column]! > b[column]! ? 1 : -1;
      }
      return a[column]! < b[column]! ? 1 : -1;
    });

    const paginatedTasks = sortedTasks.slice(offset, offset + per_page);
    const total = filteredTasks.length;

    const pageCount = Math.ceil(total / per_page);
    return { data: paginatedTasks, pageCount };
  } catch (err) {
    return { data: [], pageCount: 0 };
  }
}

export async function getTaskCountByStatus() {
  try {
    const statusCounts = dummyTasks.reduce(
      (acc, task) => {
        if (!acc[task.status]) {
          acc[task.status] = 0;
        }
        acc[task.status]++;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(statusCounts).map(([status, count]) => ({
      status,
      count,
    }));
  } catch (err) {
    return [];
  }
}

export async function getTaskCountByPriority() {
  try {
    const priorityCounts = dummyTasks.reduce(
      (acc, task) => {
        if (!acc[task.priority]) {
          acc[task.priority] = 0;
        }
        acc[task.priority]++;
        return acc;
      },
      {} as Record<string, number>,
    );

    return Object.entries(priorityCounts).map(([priority, count]) => ({
      priority,
      count,
    }));
  } catch (err) {
    return [];
  }
}
