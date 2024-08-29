import { Controller, Get } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller({
        
})
export class TaskController {
    //se crea la referencia para utilizar las tareas del servicio
    taskService: TaskService;

    //se referencia el servicio task
    constructor(task:TaskService){

        this.taskService = task;

    }


    @Get('/')
    getIndex(){
        return "Inicio";
    }
    
    @Get('/tasks')
    getAllTask(){
        return this.taskService.getAllTask();
    }

}