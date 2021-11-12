import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql"
import { Currency } from "src/interfaces/enums/Currency"
import { WalletType } from "src/interfaces/enums/WalletType"

registerEnumType(Currency, {
	name: "Currency",
})
registerEnumType(WalletType, {
	name: "WalletType",
})

@ObjectType()
export class CategoryGQLModel {
	@Field(() => ID)
	readonly id: string

	@Field()
	readonly kind: string

	@Field()
	owner_user_id: string

	@Field({ nullable: true })
	parent_category_id: string | null

	@Field()
	name: string

	@Field()
	is_deleted: boolean

	@Field({ nullable: true })
	created_at: string | null

	@Field({ nullable: true })
	updated_at: string | null

	@Field({ nullable: true })
	deleted_at: string | null
}
