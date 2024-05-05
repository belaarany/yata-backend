import { Field, InputType } from "@nestjs/graphql"
import { ArrayUnique, IsArray, IsEnum, IsNotEmpty, IsOptional } from "class-validator"
import { Currency } from "src/core/interfaces/enums/Currency"
import { IsWaddObjectId } from "src/core/validators/IsWaddObjectIs"

@InputType()
export class CreateIncomeGQLInput {
  @Field()
  @IsNotEmpty()
  wallet_id: string

  @Field()
  @IsNotEmpty()
  amount: number

  @Field()
  @IsNotEmpty()
  @IsEnum(Currency)
  currency: Currency

  @Field()
  @IsNotEmpty()
  // TODO: check
  // @IsDateString()
  timestamp: Date

  @Field({ nullable: true})
  @IsNotEmpty()
  @IsOptional()
  location: string

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  @IsArray()
  @ArrayUnique()
  @IsOptional()
  // @IsWaddObjectId({ each: true })
  related_expense_ids: string[]

  @Field({ nullable: true})
  @IsNotEmpty()
  @IsOptional()
  note: string

  @Field()
  @IsNotEmpty()
  category_id: string

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  @IsArray()
  @ArrayUnique()
  @IsOptional()
  tags: string[]

  @Field({ nullable: true })
  @IsNotEmpty()
  @IsOptional()
  group_id: string | null

  @Field(() => [String], { nullable: true })
  @IsNotEmpty()
  @IsArray()
  @ArrayUnique()
  @IsOptional()
  // @IsWaddObjectId({ each: true })
  attachment_file_ids: string[]
}
