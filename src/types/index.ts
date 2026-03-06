interface Task {
  id: number;
  title: string;
  description:;
  priority: 'low' | 'medium' | 'high';
  done: boolean}

interface Column {
  id: number;
  title: string;
 tasks: Task[];
}