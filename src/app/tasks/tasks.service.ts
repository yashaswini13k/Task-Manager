import { Injectable, signal } from "@angular/core";
import { type NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
   private  tasks = signal( [
        {
          id: 't1',
          projectid: 'P1',
          title:  'Add email validation in registration form',
          description: 'Validate the email entered in the user registration form',
          priority: 'high',
          type: 'Feature'
        },
        {
          id: 't2',
          projectid: 'P2',
          title:  'Display the adress details of a customer',
          description: 'Add a column to display the details of the customer address in the customer list',
          priority: 'low',
          type: 'Feature'
        },
        {
          id: 't3',
          projectid: 'P2',
          title:  'Export to CSV is not working',
          description: 'The export process of a report into CSV format throws an error',
          priority: 'high',
          type: 'Bug'
        },
      ]);
      
      allTasks = this.tasks.asReadonly();
      constructor(){
        const tasks =localStorage.getItem('tasks');
        if (tasks){
          this.tasks.set(JSON.parse(tasks));
        }
      }
    

      addTask(taskData : NewTaskData, projectid : string){
        this.tasks.update((prevTasks) => [
          {
            id: new Date().getTime().toString(),
            projectid: projectid,
            title: taskData.title,
            description: taskData.description,
            type:taskData.type,
            priority:taskData.priority,
        },
        ... prevTasks,
      
      ]);
      this.saveTasks();
      }

      removeTask(id: string){
        this.tasks.update((prevTasks) =>  
           prevTasks.filter((task)=>task.id !== id)
        );
        this.saveTasks();
      }
      private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks()));
      }
}

// function prevTasks(value: { id: string; projectid: string; title: string; description: string; priority: string; type: string; }[]): { id: string; projectid: string; title: string; description: string; priority: string; type: string; }[] {
//   throw new Error("Function not implemented.");
// }
