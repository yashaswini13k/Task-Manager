export interface Task {
  id: string;
  projectid: string;
  title: string;
  description: string;
  type: string;
  priority: string;
}

export interface NewTaskData {
  title: string;
  description: string;
  type: string;
  priority: string;
}
