import { IsString, IsNumber , IsOptional } from 'class-validator';


export class CreateProductDto {

    @IsString() //Validate ว่าเป็น string หรือไม่
    readonly name: string;

    @IsString() //Validate ว่าเป็น string หรือไม่
    @IsOptional() //ไม่จำเป็นต้องใส
    readonly description?: string;

    @IsNumber() //Validate ว่าเป็น number หรือไม่
    readonly price: number;
}
