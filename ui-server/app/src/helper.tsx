import { Task } from "./public-types";

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(2022, 1, 1),
      end: new Date(2023, 12, 1),
      name: "horizon 1",
      id: "horizon-1",
      progress: 50,
      type: "project",
      hideChildren: true,
    },
    {
      start: new Date(2022, 2, 1),
      end: new Date(2022, 7, 1),
      name: "API RFT DOE application",
      id: "wf4-app",
      progress: 90,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2023, 1, 1),
      end: new Date(2023, 7, 1),
      name: "API RFT DOE pilot",
      id: "wf4-pilot",
      progress: 0,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2022, 2, 1),
      end: new Date(2022, 4, 1),
      name: "software version / change control",
      id: "github",
      progress: 100,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2022, 2, 1),
      end: new Date(2023, 1, 1),
      name: "SIMS pilot",
      id: "sims-pilot",
      progress: 60,
      type: "task",
      project: "horizon-1"
    },
    {
      start: new Date(2022, 6, 1),
      end: new Date(2022, 12, 1),
      name: "reaction completion",
      id: "reaction-completion",
      progress: 90,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2023, 1, 1),
      end: new Date(2023, 12, 1),
      name: "disso media prep",
      id: "disso-media-prep",
      progress: 0,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2022, 2, 1),
      end: new Date(2022, 6, 5),
      name: "automated documentation",
      id: "automated-documentation",
      progress: 100,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2022, 9, 1),
      end: new Date(2022, 12, 5),
      name: "GA automated UV report",
      id: "UV-report",
      progress: 80,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2022, 7, 1),
      end: new Date(2022, 11, 1),
      name: "Project Telescope",
      id: "project-telescope",
      progress: 100,
      type: "task",
      project: "horizon-1"
    },
    {
      start: new Date(2022, 2, 1),
      end: new Date(2022, 7, 1),
      name: "custom application template",
      id: "custom-application-template",
      progress: 90,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2022, 9, 1),
      end: new Date(2023, 2, 1),
      name: "PSSM application template",
      id: "PSSM-application-template",
      progress: 70,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2022, 2, 1),
      end: new Date(2022, 8, 1),
      name: "pfizer platform template",
      id: "pfizer-platform-template",
      progress: 100,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2022, 2, 1),
      end: new Date(2022, 12, 15),
      name: "presentation framework",
      id: "presentation-framework",
      progress: 100,
      type: "task",
      project: "horizon-1",
    },
    {
      start: new Date(2024, 1, 1),
      end: new Date(2025, 12, 1),
      name: "horizon 2",
      id: "horizon-2",
      progress: 0,
      type: "project",
      hideChildren: true,
    },
    {
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 1),
      name: "additional workflow definitions",
      id: "additional-workflow-definitions",
      progress: 0,
      type: "milestone",
      project: "horizon-2"
    },
    {
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 1),
      name: "expansion across PSSM",
      id: "expansion-across-pssm",
      progress: 0,
      type: "milestone",
      project: "horizon-2"
    },
    {
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 1),
      name: "external vendor use cases",
      id: "external-vendor-use-cases",
      progress: 0,
      type: "milestone",
      project: "horizon-2"
    },
    {
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 1),
      name: "expand training exploration",
      id: "expand-training-exploration",
      progress: 0,
      type: "milestone",
      project: "horizon-2"
    },
    {
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 1),
      name: "automated sample preparation",
      id: "automated-sample-preparation",
      progress: 0,
      type: "milestone",
      project: "horizon-2"
    },
    {
      start: new Date(2026, 1, 1),
      end: new Date(2027, 12, 1),
      name: "horizon 3",
      id: "horizon-3",
      progress: 0,
      type: "project",
      hideChildren: true,
    },
    {
      start: new Date(2026, 1, 1),
      end: new Date(2026, 1, 1),
      name: "simulate first experiment for confirmation only (ML, AI)",
      id: "ml-ai",
      progress: 0,
      type: "milestone",
      project: "horizon-3"
    },
  ];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
