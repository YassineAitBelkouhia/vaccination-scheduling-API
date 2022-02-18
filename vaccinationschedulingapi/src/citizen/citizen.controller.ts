import { Controller, Get } from '@nestjs/common';

@Controller('citizen')
export class CitizenController {
 @Get()
 getCitizens() : any {
  return [{id : 1, name: "citizen One", address: 'random adress'}];
 }
}
