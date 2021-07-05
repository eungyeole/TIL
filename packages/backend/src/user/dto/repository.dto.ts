import { IsString } from "class-validator";

export class RepositoryDto {
    @IsString()
    repository: string;
}