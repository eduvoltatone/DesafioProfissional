import { HttpException, HttpStatus } from '@nestjs/common';

export class Erro extends HttpException {
    constructor(status: HttpStatus, message: string, id: string) {
        super({ id, message }, status);
    }
}