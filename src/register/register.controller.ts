import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

    @Post()
    async register(@Body() req) {
        const { name, email, password, site, phone } = req;
        if(!name || !email || !password || !site || !phone) {
            throw new HttpException("Todos os campos são obrigatórios", 400);
        } else {
          return this.registerService.register(name, email, password, site, phone);
        }
    }
}
