import { IsNotEmpty } from "class-validator";

export class CreateSlangDto {
    @IsNotEmpty()
    slang: string;
    
    @IsNotEmpty()
    meaning: string
}
