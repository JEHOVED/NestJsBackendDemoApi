import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {


    getAllTask(){

        return ['task 1', 'task 2', 'task 3']

    }
}
