import { IsMongoId, IsNotEmpty, IsNumber , Min } from 'class-validator';


export class CreateOrderDto {

    @IsNotEmpty() //validate ว่าไม่ใช่ค่าว่าง
    @IsMongoId() //Validate ว่าเป็น MongoId หรือไม่
    readonly productId: string;


    @IsNumber() //Validate ว่าเป็น number หรือไม่
    @Min(1) //validate ว่าต้องมากกว่า 1
    readonly quantity: number;
}
