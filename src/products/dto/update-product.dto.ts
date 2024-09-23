import { IsString, IsNumber , IsOptional } from 'class-validator';

export class UpdateProductDto {
    @IsString() //Validate ว่าเป็น string หรือไม่
    @IsOptional()
    readonly name?: string;
    @IsString()
    @IsOptional() //ไม่จำเป็นต้องใส่ก็ได้
    readonly description?: string;
    @IsNumber() //Validate ว่าเป็น number หรือไม่
    @IsOptional()
    readonly price?: number;
}
