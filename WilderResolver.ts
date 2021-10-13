import { Query, Mutation, Resolver, Arg, ID } from "type-graphql";
import Wilder from "./Wilder";
import WilderInput from "./WilderInput";
import WilderModel from "./models/Wilder";

@Resolver(Wilder)
class WilderResolver {
  @Query((returns) => [Wilder])
  async allWilders() {
    console.log("get all wilders");
    const wilders = await WilderModel.find();
    return wilders;
  }

  @Mutation(() => String)
  async deleteWilder(@Arg("wilderId") wilderId: string) {
    const result = await WilderModel.deleteOne({ id: wilderId });
    console.log("result", result);
    return "okay";
  }

  @Mutation(() => Wilder)
  async addWilder(@Arg("wilderInput") wilderInput: WilderInput) {
    return await WilderModel.create(wilderInput);
  }
}

export default WilderResolver;
