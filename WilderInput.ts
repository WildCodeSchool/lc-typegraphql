import Wilder from "./Wilder";
import { InputType, Field } from "type-graphql";

@InputType()
export default class WilderInput implements Partial<Wilder> {
  @Field()
  name!: string;

  @Field()
  city!: string;
}
