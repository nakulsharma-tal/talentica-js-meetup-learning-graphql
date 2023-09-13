import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { AUTHORS_SEED_DATA } from './authors.seed';
import { IAuthor } from './author.interface';

@Injectable()
export class AuthorService {
  public async getAllAuthors() {
    return AUTHORS_SEED_DATA;
  }

  public async getAuthorById(id: string) {
    const author = AUTHORS_SEED_DATA.find((author) => author.id === id);
    if (!author) {
      throw new HttpException('Author not found', HttpStatus.NOT_FOUND);
    }

    return author;
  }

  public async createAuthor(name: string) {
    const newAuthor: IAuthor = {
      id: uuidV4(),
      name,
    };

    AUTHORS_SEED_DATA.push(newAuthor);

    return newAuthor;
  }
}
