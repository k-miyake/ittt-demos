import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  @Get()
  getProfile(): string {
    return 'My Profile is here!';
  }
}
