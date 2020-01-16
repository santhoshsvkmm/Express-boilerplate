import { Controller, Get} from '@nestjs/common';

@Controller('api')
export class ApiController {
     @Get()
     fetchAll() {
         return {
             msg: 'All aviable names',
         };
     }
}
