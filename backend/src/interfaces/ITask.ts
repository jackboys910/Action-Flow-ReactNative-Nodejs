export interface ITask {
  id: string;
  title: string;
  description?: string;
  status: "In Progress" | "Completed";
  isImportant: boolean;
}
