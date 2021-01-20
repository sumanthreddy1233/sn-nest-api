import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Sumanth Naidu';
  }
  getAbout(): string {
    return 'Sumanth Naidu - Software Developer';
  }
}
