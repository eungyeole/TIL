import { IsString } from "class-validator";

export class GithubCodeDto {
    @IsString()
    readonly code: string;
}
