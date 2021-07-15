import { IsString } from "class-validator";

export class RefreshToken {
    @IsString()
    readonly refreshToken: string;
}

export class RefreshRes {
    accessToken: string;
    refreshToken: string;
}