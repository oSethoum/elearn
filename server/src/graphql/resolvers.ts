import { Resolver, Mutation, Arg } from "type-graphql";
import { GraphQLUpload } from "graphql-upload";
import { createWriteStream } from "fs";
import { Upload } from "../types";

@Resolver()
export class FileResolver {
  @Mutation(() => Boolean)
  async uploadFile(
    @Arg("file", () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const path = `./tmp/${filename}`;
      createReadStream()
        .pipe(createWriteStream(path))
        .on("finish", () => resolve(path))
        .on("error", () => reject(null));
    });
  }
}
