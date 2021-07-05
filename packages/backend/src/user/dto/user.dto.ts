import { IsString } from "class-validator";

export class UserDto {
    @IsString()
    id: string;

    @IsString()
    profileImage: string;

    @IsString()
    name: string;
    
    @IsString()
    description: string;

    @IsString()
    location: string;
}