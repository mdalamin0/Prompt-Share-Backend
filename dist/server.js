
   import { createRequire } from 'module';
   const require = createRequire(import.meta.url);
  
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/app.ts
import express, { urlencoded } from "express";
import cors from "cors";

// src/config/index.ts
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
var config_default = {
  port: process.env.PORT,
  app_url: process.env.APP_URL,
  node_env: process.env.NODE_ENV,
  frontend_url: process.env.FRONTEND_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  ssl_commerz_store_id: process.env.SSL_COMMERZ_STORE_ID,
  ssl_commerz_store_password: process.env.SSL_COMMERZ_STORE_PASSWORD,
  google_client_id: process.env.GOOGLE_CLIENT_ID,
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
  google_callback_url: process.env.GOOGLE_CALLBACK_URL,
  redis_user: process.env.REDIS_USER,
  redis_password: process.env.REDIS_PASSWORD,
  redis_host: process.env.REDIS_HOST,
  redis_port: process.env.REDIS_PORT,
  smtp_user: process.env.SMTP_USER,
  smtp_password: process.env.SMTP_PASSWORD,
  email_sender: process.env.EMAIL_SENDER,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET
};

// src/app.ts
import cookieParser from "cookie-parser";

// src/middlewares/notFound.ts
import httpStatus from "http-status";
var notFound = (req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    message: "Route not found!",
    path: req.originalUrl,
    date: Date()
  });
};

// src/middlewares/globalErrorHandler.ts
import httpStatus2 from "http-status";

// generated/prisma/client.ts
import * as path2 from "path";
import { fileURLToPath } from "url";

// generated/prisma/internal/class.ts
import * as runtime from "@prisma/client/runtime/client";
var config = {
  "previewFeatures": [],
  "clientVersion": "7.9.1",
  "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
  "activeProvider": "postgresql",
  "inlineSchema": 'enum Role {\n  USER\n  ADMIN\n}\n\nenum UserStatus {\n  ACTIVE\n  SUSPENDED\n  DELETED\n}\n\nenum AuthProvider {\n  CREDENTIAL\n  GOOGLE\n}\n\nenum PromptCategory {\n  code\n  text\n  image\n}\n\nmodel Prompt {\n  id          String         @id @default(uuid())\n  title       String\n  description String\n  template    String\n  category    PromptCategory\n  tags        String[]\n  isPublic    Boolean        @default(true)\n  forkCount   Int            @default(0)\n\n  userId String\n  user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@index([title, category])\n  @@map("prompts")\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Get a free hosted Postgres database in seconds: `npx create-db`\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel User {\n  id            String  @id @default(uuid())\n  name          String\n  email         String  @unique\n  password      String?\n  image         String?\n  imagePublicId String?\n\n  role     Role         @default(USER)\n  status   UserStatus   @default(ACTIVE)\n  provider AuthProvider @default(CREDENTIAL)\n  googleId String?      @unique\n\n  emailVerified Boolean @default(false)\n\n  prompts Prompt[]\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  @@map("users")\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  },
  "parameterizationSchema": {
    "strings": [],
    "graph": ""
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Prompt":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"template","kind":"scalar","type":"String"},{"name":"category","kind":"enum","type":"PromptCategory"},{"name":"tags","kind":"scalar","type":"String"},{"name":"isPublic","kind":"scalar","type":"Boolean"},{"name":"forkCount","kind":"scalar","type":"Int"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"User","relationName":"PromptToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"prompts"},"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"imagePublicId","kind":"scalar","type":"String"},{"name":"role","kind":"enum","type":"Role"},{"name":"status","kind":"enum","type":"UserStatus"},{"name":"provider","kind":"enum","type":"AuthProvider"},{"name":"googleId","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"prompts","kind":"object","type":"Prompt","relationName":"PromptToUser"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":"users"}},"enums":{},"types":{}}');
config.parameterizationSchema = {
  strings: JSON.parse('["where","orderBy","cursor","prompts","_count","user","Prompt.findUnique","Prompt.findUniqueOrThrow","Prompt.findFirst","Prompt.findFirstOrThrow","Prompt.findMany","data","Prompt.createOne","Prompt.createMany","Prompt.createManyAndReturn","Prompt.updateOne","Prompt.updateMany","Prompt.updateManyAndReturn","create","update","Prompt.upsertOne","Prompt.deleteOne","Prompt.deleteMany","having","_avg","_sum","_min","_max","Prompt.groupBy","Prompt.aggregate","User.findUnique","User.findUniqueOrThrow","User.findFirst","User.findFirstOrThrow","User.findMany","User.createOne","User.createMany","User.createManyAndReturn","User.updateOne","User.updateMany","User.updateManyAndReturn","User.upsertOne","User.deleteOne","User.deleteMany","User.groupBy","User.aggregate","AND","OR","NOT","id","name","email","password","image","imagePublicId","Role","role","UserStatus","status","AuthProvider","provider","googleId","emailVerified","createdAt","updatedAt","equals","in","notIn","lt","lte","gt","gte","not","contains","startsWith","endsWith","every","some","none","title","description","template","PromptCategory","category","tags","isPublic","forkCount","userId","has","hasEvery","hasSome","is","isNot","connectOrCreate","upsert","createMany","set","disconnect","delete","connect","updateMany","deleteMany","increment","decrement","multiply","divide","push"]'),
  graph: "jQEUIA8FAABhACAuAABeADAvAAADABAwAABeADAxAQAAAAE_QABUACFAQABUACFPAQBOACFQAQBOACFRAQBOACFTAABfUyJUAABYACBVIABTACFWAgBgACFXAQBOACEBAAAAAQAgDwUAAGEAIC4AAF4AMC8AAAMAEDAAAF4AMDEBAE4AIT9AAFQAIUBAAFQAIU8BAE4AIVABAE4AIVEBAE4AIVMAAF9TIlQAAFgAIFUgAFMAIVYCAGAAIVcBAE4AIQEFAACHAQAgAwAAAAMAIAEAAAQAMAIAAAEAIAEAAAADACABAAAAAQAgAwAAAAMAIAEAAAQAMAIAAAEAIAMAAAADACABAAAEADACAAABACADAAAAAwAgAQAABAAwAgAAAQAgDAUAAIYBACAxAQAAAAE_QAAAAAFAQAAAAAFPAQAAAAFQAQAAAAFRAQAAAAFTAAAAUwJUAAB9ACBVIAAAAAFWAgAAAAFXAQAAAAEBCwAACwAgCzEBAAAAAT9AAAAAAUBAAAAAAU8BAAAAAVABAAAAAVEBAAAAAVMAAABTAlQAAH0AIFUgAAAAAVYCAAAAAVcBAAAAAQELAAANADABCwAADQAwDAUAAIUBACAxAQBmACE_QABsACFAQABsACFPAQBmACFQAQBmACFRAQBmACFTAAB4UyJUAAB5ACBVIABrACFWAgB6ACFXAQBmACECAAAAAQAgCwAAEAAgCzEBAGYAIT9AAGwAIUBAAGwAIU8BAGYAIVABAGYAIVEBAGYAIVMAAHhTIlQAAHkAIFUgAGsAIVYCAHoAIVcBAGYAIQIAAAADACALAAASACACAAAAAwAgCwAAEgAgAwAAAAEAIBIAAAsAIBMAABAAIAEAAAABACABAAAAAwAgBQQAAIABACAYAACBAQAgGQAAhAEAIBoAAIMBACAbAACCAQAgDi4AAFYAMC8AABkAEDAAAFYAMDEBADYAIT9AADwAIUBAADwAIU8BADYAIVABADYAIVEBADYAIVMAAFdTIlQAAFgAIFUgADsAIVYCAFkAIVcBADYAIQMAAAADACABAAAYADAXAAAZACADAAAAAwAgAQAABAAwAgAAAQAgEQMAAFUAIC4AAE0AMC8AAB8AEDAAAE0AMDEBAAAAATIBAE4AITMBAAAAATQBAE8AITUBAE8AITYBAE8AITgAAFA4IjoAAFE6IjwAAFI8Ij0BAAAAAT4gAFMAIT9AAFQAIUBAAFQAIQEAAAAcACABAAAAHAAgEQMAAFUAIC4AAE0AMC8AAB8AEDAAAE0AMDEBAE4AITIBAE4AITMBAE4AITQBAE8AITUBAE8AITYBAE8AITgAAFA4IjoAAFE6IjwAAFI8Ij0BAE8AIT4gAFMAIT9AAFQAIUBAAFQAIQUDAAB_ACA0AABiACA1AABiACA2AABiACA9AABiACADAAAAHwAgAQAAIAAwAgAAHAAgAwAAAB8AIAEAACAAMAIAABwAIAMAAAAfACABAAAgADACAAAcACAOAwAAfgAgMQEAAAABMgEAAAABMwEAAAABNAEAAAABNQEAAAABNgEAAAABOAAAADgCOgAAADoCPAAAADwCPQEAAAABPiAAAAABP0AAAAABQEAAAAABAQsAACQAIA0xAQAAAAEyAQAAAAEzAQAAAAE0AQAAAAE1AQAAAAE2AQAAAAE4AAAAOAI6AAAAOgI8AAAAPAI9AQAAAAE-IAAAAAE_QAAAAAFAQAAAAAEBCwAAJgAwAQsAACYAMA4DAABtACAxAQBmACEyAQBmACEzAQBmACE0AQBnACE1AQBnACE2AQBnACE4AABoOCI6AABpOiI8AABqPCI9AQBnACE-IABrACE_QABsACFAQABsACECAAAAHAAgCwAAKQAgDTEBAGYAITIBAGYAITMBAGYAITQBAGcAITUBAGcAITYBAGcAITgAAGg4IjoAAGk6IjwAAGo8Ij0BAGcAIT4gAGsAIT9AAGwAIUBAAGwAIQIAAAAfACALAAArACACAAAAHwAgCwAAKwAgAwAAABwAIBIAACQAIBMAACkAIAEAAAAcACABAAAAHwAgBwQAAGMAIBoAAGUAIBsAAGQAIDQAAGIAIDUAAGIAIDYAAGIAID0AAGIAIBAuAAA1ADAvAAAyABAwAAA1ADAxAQA2ACEyAQA2ACEzAQA2ACE0AQA3ACE1AQA3ACE2AQA3ACE4AAA4OCI6AAA5OiI8AAA6PCI9AQA3ACE-IAA7ACE_QAA8ACFAQAA8ACEDAAAAHwAgAQAAMQAwFwAAMgAgAwAAAB8AIAEAACAAMAIAABwAIBAuAAA1ADAvAAAyABAwAAA1ADAxAQA2ACEyAQA2ACEzAQA2ACE0AQA3ACE1AQA3ACE2AQA3ACE4AAA4OCI6AAA5OiI8AAA6PCI9AQA3ACE-IAA7ACE_QAA8ACFAQAA8ACEOBAAAPgAgGgAATAAgGwAATAAgQQEAAAABQgEAAAAEQwEAAAAERAEAAAABRQEAAAABRgEAAAABRwEAAAABSAEASwAhSQEAAAABSgEAAAABSwEAAAABDgQAAEkAIBoAAEoAIBsAAEoAIEEBAAAAAUIBAAAABUMBAAAABUQBAAAAAUUBAAAAAUYBAAAAAUcBAAAAAUgBAEgAIUkBAAAAAUoBAAAAAUsBAAAAAQcEAAA-ACAaAABHACAbAABHACBBAAAAOAJCAAAAOAhDAAAAOAhIAABGOCIHBAAAPgAgGgAARQAgGwAARQAgQQAAADoCQgAAADoIQwAAADoISAAARDoiBwQAAD4AIBoAAEMAIBsAAEMAIEEAAAA8AkIAAAA8CEMAAAA8CEgAAEI8IgUEAAA-ACAaAABBACAbAABBACBBIAAAAAFIIABAACELBAAAPgAgGgAAPwAgGwAAPwAgQUAAAAABQkAAAAAEQ0AAAAAEREAAAAABRUAAAAABRkAAAAABR0AAAAABSEAAPQAhCwQAAD4AIBoAAD8AIBsAAD8AIEFAAAAAAUJAAAAABENAAAAABERAAAAAAUVAAAAAAUZAAAAAAUdAAAAAAUhAAD0AIQhBAgAAAAFCAgAAAARDAgAAAAREAgAAAAFFAgAAAAFGAgAAAAFHAgAAAAFIAgA-ACEIQUAAAAABQkAAAAAEQ0AAAAAEREAAAAABRUAAAAABRkAAAAABR0AAAAABSEAAPwAhBQQAAD4AIBoAAEEAIBsAAEEAIEEgAAAAAUggAEAAIQJBIAAAAAFIIABBACEHBAAAPgAgGgAAQwAgGwAAQwAgQQAAADwCQgAAADwIQwAAADwISAAAQjwiBEEAAAA8AkIAAAA8CEMAAAA8CEgAAEM8IgcEAAA-ACAaAABFACAbAABFACBBAAAAOgJCAAAAOghDAAAAOghIAABEOiIEQQAAADoCQgAAADoIQwAAADoISAAARToiBwQAAD4AIBoAAEcAIBsAAEcAIEEAAAA4AkIAAAA4CEMAAAA4CEgAAEY4IgRBAAAAOAJCAAAAOAhDAAAAOAhIAABHOCIOBAAASQAgGgAASgAgGwAASgAgQQEAAAABQgEAAAAFQwEAAAAFRAEAAAABRQEAAAABRgEAAAABRwEAAAABSAEASAAhSQEAAAABSgEAAAABSwEAAAABCEECAAAAAUICAAAABUMCAAAABUQCAAAAAUUCAAAAAUYCAAAAAUcCAAAAAUgCAEkAIQtBAQAAAAFCAQAAAAVDAQAAAAVEAQAAAAFFAQAAAAFGAQAAAAFHAQAAAAFIAQBKACFJAQAAAAFKAQAAAAFLAQAAAAEOBAAAPgAgGgAATAAgGwAATAAgQQEAAAABQgEAAAAEQwEAAAAERAEAAAABRQEAAAABRgEAAAABRwEAAAABSAEASwAhSQEAAAABSgEAAAABSwEAAAABC0EBAAAAAUIBAAAABEMBAAAABEQBAAAAAUUBAAAAAUYBAAAAAUcBAAAAAUgBAEwAIUkBAAAAAUoBAAAAAUsBAAAAAREDAABVACAuAABNADAvAAAfABAwAABNADAxAQBOACEyAQBOACEzAQBOACE0AQBPACE1AQBPACE2AQBPACE4AABQOCI6AABROiI8AABSPCI9AQBPACE-IABTACE_QABUACFAQABUACELQQEAAAABQgEAAAAEQwEAAAAERAEAAAABRQEAAAABRgEAAAABRwEAAAABSAEATAAhSQEAAAABSgEAAAABSwEAAAABC0EBAAAAAUIBAAAABUMBAAAABUQBAAAAAUUBAAAAAUYBAAAAAUcBAAAAAUgBAEoAIUkBAAAAAUoBAAAAAUsBAAAAAQRBAAAAOAJCAAAAOAhDAAAAOAhIAABHOCIEQQAAADoCQgAAADoIQwAAADoISAAARToiBEEAAAA8AkIAAAA8CEMAAAA8CEgAAEM8IgJBIAAAAAFIIABBACEIQUAAAAABQkAAAAAEQ0AAAAAEREAAAAABRUAAAAABRkAAAAABR0AAAAABSEAAPwAhA0wAAAMAIE0AAAMAIE4AAAMAIA4uAABWADAvAAAZABAwAABWADAxAQA2ACE_QAA8ACFAQAA8ACFPAQA2ACFQAQA2ACFRAQA2ACFTAABXUyJUAABYACBVIAA7ACFWAgBZACFXAQA2ACEHBAAAPgAgGgAAXQAgGwAAXQAgQQAAAFMCQgAAAFMIQwAAAFMISAAAXFMiBEEBAAAABVgBAAAAAVkBAAAABFoBAAAABA0EAAA-ACAYAABbACAZAAA-ACAaAAA-ACAbAAA-ACBBAgAAAAFCAgAAAARDAgAAAAREAgAAAAFFAgAAAAFGAgAAAAFHAgAAAAFIAgBaACENBAAAPgAgGAAAWwAgGQAAPgAgGgAAPgAgGwAAPgAgQQIAAAABQgIAAAAEQwIAAAAERAIAAAABRQIAAAABRgIAAAABRwIAAAABSAIAWgAhCEEIAAAAAUIIAAAABEMIAAAABEQIAAAAAUUIAAAAAUYIAAAAAUcIAAAAAUgIAFsAIQcEAAA-ACAaAABdACAbAABdACBBAAAAUwJCAAAAUwhDAAAAUwhIAABcUyIEQQAAAFMCQgAAAFMIQwAAAFMISAAAXVMiDwUAAGEAIC4AAF4AMC8AAAMAEDAAAF4AMDEBAE4AIT9AAFQAIUBAAFQAIU8BAE4AIVABAE4AIVEBAE4AIVMAAF9TIlQAAFgAIFUgAFMAIVYCAGAAIVcBAE4AIQRBAAAAUwJCAAAAUwhDAAAAUwhIAABdUyIIQQIAAAABQgIAAAAEQwIAAAAERAIAAAABRQIAAAABRgIAAAABRwIAAAABSAIAPgAhEwMAAFUAIC4AAE0AMC8AAB8AEDAAAE0AMDEBAE4AITIBAE4AITMBAE4AITQBAE8AITUBAE8AITYBAE8AITgAAFA4IjoAAFE6IjwAAFI8Ij0BAE8AIT4gAFMAIT9AAFQAIUBAAFQAIVsAAB8AIFwAAB8AIAAAAAABYAEAAAABAWABAAAAAQFgAAAAOAIBYAAAADoCAWAAAAA8AgFgIAAAAAEBYEAAAAABCxIAAG4AMBMAAHMAMF0AAG8AMF4AAHAAMF8AAHEAIGAAAHIAMGEAAHIAMGIAAHIAMGMAAHIAMGQAAHQAMGUAAHUAMAoxAQAAAAE_QAAAAAFAQAAAAAFPAQAAAAFQAQAAAAFRAQAAAAFTAAAAUwJUAAB9ACBVIAAAAAFWAgAAAAECAAAAAQAgEgAAfAAgAwAAAAEAIBIAAHwAIBMAAHsAIAELAACNAQAwDwUAAGEAIC4AAF4AMC8AAAMAEDAAAF4AMDEBAAAAAT9AAFQAIUBAAFQAIU8BAE4AIVABAE4AIVEBAE4AIVMAAF9TIlQAAFgAIFUgAFMAIVYCAGAAIVcBAE4AIQIAAAABACALAAB7ACACAAAAdgAgCwAAdwAgDi4AAHUAMC8AAHYAEDAAAHUAMDEBAE4AIT9AAFQAIUBAAFQAIU8BAE4AIVABAE4AIVEBAE4AIVMAAF9TIlQAAFgAIFUgAFMAIVYCAGAAIVcBAE4AIQ4uAAB1ADAvAAB2ABAwAAB1ADAxAQBOACE_QABUACFAQABUACFPAQBOACFQAQBOACFRAQBOACFTAABfUyJUAABYACBVIABTACFWAgBgACFXAQBOACEKMQEAZgAhP0AAbAAhQEAAbAAhTwEAZgAhUAEAZgAhUQEAZgAhUwAAeFMiVAAAeQAgVSAAawAhVgIAegAhAWAAAABTAgJgAQAAAARqAQAAAAUFYAIAAAABZgIAAAABZwIAAAABaAIAAAABaQIAAAABCjEBAGYAIT9AAGwAIUBAAGwAIU8BAGYAIVABAGYAIVEBAGYAIVMAAHhTIlQAAHkAIFUgAGsAIVYCAHoAIQoxAQAAAAE_QAAAAAFAQAAAAAFPAQAAAAFQAQAAAAFRAQAAAAFTAAAAUwJUAAB9ACBVIAAAAAFWAgAAAAEBYAEAAAAEBBIAAG4AMF0AAG8AMF8AAHEAIGMAAHIAMAAAAAAAAAUSAACIAQAgEwAAiwEAIF0AAIkBACBeAACKAQAgYwAAHAAgAxIAAIgBACBdAACJAQAgYwAAHAAgBQMAAH8AIDQAAGIAIDUAAGIAIDYAAGIAID0AAGIAIA0xAQAAAAEyAQAAAAEzAQAAAAE0AQAAAAE1AQAAAAE2AQAAAAE4AAAAOAI6AAAAOgI8AAAAPAI9AQAAAAE-IAAAAAE_QAAAAAFAQAAAAAECAAAAHAAgEgAAiAEAIAMAAAAfACASAACIAQAgEwAAjAEAIA8AAAAfACALAACMAQAgMQEAZgAhMgEAZgAhMwEAZgAhNAEAZwAhNQEAZwAhNgEAZwAhOAAAaDgiOgAAaToiPAAAajwiPQEAZwAhPiAAawAhP0AAbAAhQEAAbAAhDTEBAGYAITIBAGYAITMBAGYAITQBAGcAITUBAGcAITYBAGcAITgAAGg4IjoAAGk6IjwAAGo8Ij0BAGcAIT4gAGsAIT9AAGwAIUBAAGwAIQoxAQAAAAE_QAAAAAFAQAAAAAFPAQAAAAFQAQAAAAFRAQAAAAFTAAAAUwJUAAB9ACBVIAAAAAFWAgAAAAEBBQACAgMFAQQAAwEDBgAAAQUAAgEFAAIFBAAIGAAJGQAKGgALGwAMAAAAAAAFBAAIGAAJGQAKGgALGwAMAAADBAARGgASGwATAAAAAwQAERoAEhsAEwYCAQcHAQgIAQkJAQoKAQwMAQ0OBA4PBQ8RARATBBEUBhQVARUWARYXBBwaBx0bDR4dAh8eAiAhAiEiAiIjAiMlAiQnBCUoDiYqAicsBCgtDykuAiovAiswBCwzEC00FA"
};
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var prismaNamespace_exports = {};
__export(prismaNamespace_exports, {
  AnyNull: () => AnyNull2,
  DbNull: () => DbNull2,
  Decimal: () => Decimal2,
  JsonNull: () => JsonNull2,
  ModelName: () => ModelName,
  NullTypes: () => NullTypes2,
  NullsOrder: () => NullsOrder,
  PrismaClientInitializationError: () => PrismaClientInitializationError2,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError2,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError2,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError2,
  PrismaClientValidationError: () => PrismaClientValidationError2,
  PromptScalarFieldEnum: () => PromptScalarFieldEnum,
  QueryMode: () => QueryMode,
  SortOrder: () => SortOrder,
  Sql: () => Sql2,
  TransactionIsolationLevel: () => TransactionIsolationLevel,
  UserScalarFieldEnum: () => UserScalarFieldEnum,
  defineExtension: () => defineExtension,
  empty: () => empty2,
  getExtensionContext: () => getExtensionContext,
  join: () => join2,
  prismaVersion: () => prismaVersion,
  raw: () => raw2,
  sql: () => sql
});
import * as runtime2 from "@prisma/client/runtime/client";
var PrismaClientKnownRequestError2 = runtime2.PrismaClientKnownRequestError;
var PrismaClientUnknownRequestError2 = runtime2.PrismaClientUnknownRequestError;
var PrismaClientRustPanicError2 = runtime2.PrismaClientRustPanicError;
var PrismaClientInitializationError2 = runtime2.PrismaClientInitializationError;
var PrismaClientValidationError2 = runtime2.PrismaClientValidationError;
var sql = runtime2.sqltag;
var empty2 = runtime2.empty;
var join2 = runtime2.join;
var raw2 = runtime2.raw;
var Sql2 = runtime2.Sql;
var Decimal2 = runtime2.Decimal;
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var prismaVersion = {
  client: "7.9.1",
  engine: "e922089b7d7502aff4249d5da3420f6fa55fc6ad"
};
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var DbNull2 = runtime2.DbNull;
var JsonNull2 = runtime2.JsonNull;
var AnyNull2 = runtime2.AnyNull;
var ModelName = {
  Prompt: "Prompt",
  User: "User"
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var PromptScalarFieldEnum = {
  id: "id",
  title: "title",
  description: "description",
  template: "template",
  category: "category",
  tags: "tags",
  isPublic: "isPublic",
  forkCount: "forkCount",
  userId: "userId",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var UserScalarFieldEnum = {
  id: "id",
  name: "name",
  email: "email",
  password: "password",
  image: "image",
  imagePublicId: "imagePublicId",
  role: "role",
  status: "status",
  provider: "provider",
  googleId: "googleId",
  emailVerified: "emailVerified",
  createdAt: "createdAt",
  updatedAt: "updatedAt"
};
var SortOrder = {
  asc: "asc",
  desc: "desc"
};
var QueryMode = {
  default: "default",
  insensitive: "insensitive"
};
var NullsOrder = {
  first: "first",
  last: "last"
};
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/enums.ts
var Role = {
  USER: "USER",
  ADMIN: "ADMIN"
};
var UserStatus = {
  ACTIVE: "ACTIVE",
  SUSPENDED: "SUSPENDED",
  DELETED: "DELETED"
};
var AuthProvider = {
  CREDENTIAL: "CREDENTIAL",
  GOOGLE: "GOOGLE"
};

// generated/prisma/client.ts
globalThis["__dirname"] = path2.dirname(fileURLToPath(import.meta.url));
var PrismaClient = getPrismaClientClass();

// src/errors/AppError.ts
var AppError = class extends Error {
  statusCode;
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
};
var AppError_default = AppError;

// src/middlewares/globalErrorHandler.ts
import { ZodError } from "zod";
import multer from "multer";
var globalErrorHandler = (err, req, res, next) => {
  console.error(err);
  let statusCode;
  let errorMessage = err instanceof Error ? err.message : "Internal Server Error";
  if (err instanceof AppError_default) {
    statusCode = err.statusCode;
    errorMessage = err.message;
  }
  if (err instanceof ZodError) {
    statusCode = httpStatus2.BAD_REQUEST;
    errorMessage = err.issues[0]?.message || "Validation failed";
  }
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      statusCode = httpStatus2.BAD_REQUEST;
      errorMessage = "File size must be less than 5MB.";
    }
  }
  if (err instanceof prismaNamespace_exports.PrismaClientValidationError) {
    statusCode = httpStatus2.BAD_REQUEST;
    errorMessage = "You have provided incorrect field type or missing fields";
  } else if (err instanceof prismaNamespace_exports.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      statusCode = httpStatus2.CONFLICT, errorMessage = "Duplicate Key Error";
    } else if (err.code === "P2003") {
      statusCode = httpStatus2.BAD_REQUEST, errorMessage = "Foreign key constraint failed";
    } else if (err.code === "P2025") {
      statusCode = httpStatus2.NOT_FOUND, errorMessage = "An operation failed because it depends on one or more records that were required but not found.";
    }
  } else if (err instanceof prismaNamespace_exports.PrismaClientInitializationError) {
    if (err.errorCode === "P1000") {
      statusCode = httpStatus2.INTERNAL_SERVER_ERROR;
      errorMessage = "Authentication failed against database server. Please Check Your Credentials";
    } else if (err.errorCode === "P1001") {
      statusCode = httpStatus2.BAD_REQUEST;
      errorMessage = "Can't reach database server";
    }
  } else if (err instanceof prismaNamespace_exports.PrismaClientUnknownRequestError) {
    statusCode = httpStatus2.INTERNAL_SERVER_ERROR;
    errorMessage = "Error occurred during query execution";
  }
  res.status(statusCode || httpStatus2.INTERNAL_SERVER_ERROR).json({
    success: false,
    statusCode: statusCode || httpStatus2.INTERNAL_SERVER_ERROR,
    message: errorMessage,
    error: config_default.node_env === "development" && err instanceof Error ? err.stack : void 0
  });
};
var globalErrorHandler_default = globalErrorHandler;

// src/modules/auth/auth.route.ts
import { Router } from "express";

// src/utils/catchAsync.ts
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// src/modules/auth/auth.service.ts
import bcrypt from "bcryptjs";

// src/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
var connectionString = `${process.env.DATABASE_URL}`;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/modules/auth/auth.service.ts
import ejs from "ejs";
import httpStatus3 from "http-status";

// src/utils/jwt.ts
import jwt from "jsonwebtoken";
var createToken = (jwtPayload, secret, expiresIn) => {
  const token = jwt.sign(jwtPayload, secret, {
    expiresIn
  });
  return token;
};
var verifyToken = (token, secret) => {
  try {
    const verifiedToken = jwt.verify(token, secret);
    return { success: true, data: verifiedToken };
  } catch (error) {
    console.log("Token verification failed", error);
    return { success: false, error: error.message };
  }
};
var jwtUtils = {
  createToken,
  verifyToken
};

// src/modules/auth/auth.service.ts
import crypto from "crypto";

// src/lib/redis.ts
import { createClient } from "redis";
var redisClient = createClient({
  username: config_default.redis_user,
  password: config_default.redis_password,
  socket: {
    host: config_default.redis_host,
    port: Number(config_default.redis_port)
  }
});

// src/lib/nodemailer.ts
import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config_default.smtp_user,
    pass: config_default.smtp_password
  }
});

// src/modules/auth/auth.service.ts
import path3 from "path";
var registerUser = async (payload) => {
  const { name, password, role } = payload;
  const email2 = payload.email.trim().toLowerCase();
  const isExistsUser = await prisma.user.findUnique({
    where: {
      email: email2
    }
  });
  if (isExistsUser) {
    throw new AppError_default(httpStatus3.CONFLICT, "User already exists!");
  }
  const hashPassowrd = await bcrypt.hash(
    password,
    Number(config_default.bcrypt_salt_rounds)
  );
  const expirationSeconds = 5 * 60;
  const otpKey = `user-registration-otp:${email2}`;
  const otpValue = crypto.randomInt(1e5, 1e6).toString();
  await redisClient.set(otpKey, otpValue, {
    expiration: {
      type: "EX",
      value: expirationSeconds
    }
  });
  const userRegistrationKey = `user-registration-data:${email2}`;
  const redisUserDataPayload = {
    name,
    email: email2,
    password: hashPassowrd,
    role
  };
  await redisClient.set(
    userRegistrationKey,
    JSON.stringify(redisUserDataPayload),
    {
      expiration: {
        type: "EX",
        value: expirationSeconds
      }
    }
  );
  const tempatePath = path3.join(
    process.cwd(),
    "src/templates/registration-user-otp.ejs"
  );
  const templateData = {
    name,
    email: email2,
    otp: otpValue,
    expirationMinutes: expirationSeconds / 60
  };
  const html = await ejs.renderFile(tempatePath, templateData);
  await transporter.sendMail({
    from: config_default.email_sender,
    to: email2,
    subject: "Email Verification",
    html
  });
};
var verifyEmail = async (payload) => {
  const otp = payload.otp;
  const email2 = payload.email.trim().toLowerCase();
  const isUserExist = await prisma.user.findUnique({
    where: { email: email2 }
  });
  if (isUserExist?.status === "SUSPENDED") {
    throw new AppError_default(httpStatus3.FORBIDDEN, "User is suspended!");
  }
  if (isUserExist?.emailVerified) {
    throw new AppError_default(httpStatus3.BAD_REQUEST, "Email already verified.");
  }
  const otpKey = `user-registration-otp:${email2}`;
  const redisOtp = await redisClient.get(otpKey);
  if (!redisOtp) {
    throw new AppError_default(httpStatus3.BAD_REQUEST, "Invalid or expired OTP!");
  }
  if (redisOtp !== otp) {
    throw new AppError_default(httpStatus3.BAD_REQUEST, "OTP does not match!");
  }
  const userRegistrationKey = `user-registration-data:${email2}`;
  const redisUserData = await redisClient.get(userRegistrationKey);
  if (!redisUserData) {
    throw new AppError_default(
      httpStatus3.BAD_REQUEST,
      "Registration session expired. Please register again."
    );
  }
  const userPayload = JSON.parse(redisUserData);
  const createdUser = await prisma.user.create({
    data: {
      name: userPayload.name,
      email: userPayload.email,
      password: userPayload.password,
      role: userPayload.role,
      emailVerified: true,
      provider: AuthProvider.CREDENTIAL
    },
    omit: {
      password: true
    }
  });
  await redisClient.del(otpKey);
  await redisClient.del(userRegistrationKey);
  try {
    const templatePath = path3.join(
      process.cwd(),
      "src/templates/user-welcome-email.ejs"
    );
    const templateData = {
      name: createdUser.name
    };
    const html = await ejs.renderFile(templatePath, templateData);
    await transporter.sendMail({
      from: config_default.email_sender,
      to: email2,
      subject: "Welcome To Prompt Share",
      html
    });
  } catch (error) {
    console.error("Failed to send welcome email:", error);
  }
  const jwtPayload = {
    userId: createdUser.id,
    email: createdUser.email,
    role: createdUser.role
  };
  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_access_secret,
    config_default.jwt_access_expires_in
  );
  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_refresh_secret,
    config_default.jwt_refresh_expires_in
  );
  return {
    accessToken,
    refreshToken,
    user: createdUser
  };
};
var generateTokens = async (user) => {
  const jwtPayload = {
    userId: user.id,
    email: user.email,
    role: user.role
  };
  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_access_secret,
    config_default.jwt_access_expires_in
  );
  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config_default.jwt_refresh_secret,
    config_default.jwt_refresh_expires_in
  );
  return {
    accessToken,
    refreshToken
  };
};
var getMe = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    omit: {
      password: true
    }
  });
  if (!user) {
    throw new Error("User not found");
  }
  return user;
};
var updateMe = async (payload, userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) {
    throw new AppError_default(httpStatus3.NOT_FOUND, "User not found!");
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      name: payload.name
    },
    omit: { password: true }
  });
  return updatedUser;
};
var forgotPassword = async (payload) => {
  const { email: email2 } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: email2
    }
  });
  if (!isUserExist) {
    throw new AppError_default(httpStatus3.NOT_FOUND, "User does not exist!");
  }
  if (isUserExist.status === "SUSPENDED") {
    throw new AppError_default(httpStatus3.FORBIDDEN, "User is suspended!");
  }
  if (!isUserExist.emailVerified) {
    throw new AppError_default(httpStatus3.BAD_REQUEST, "User email is not verified!");
  }
  if (isUserExist.googleId && isUserExist.provider === "GOOGLE") {
    throw new AppError_default(
      httpStatus3.BAD_REQUEST,
      "Google account does not have a password!"
    );
  }
  const otp = crypto.randomInt(1e5, 1e6).toString();
  const key = `forgot-password-otp:${isUserExist.email}`;
  const expirationSeconds = 5 * 60;
  await redisClient.set(key, otp, {
    expiration: {
      type: "EX",
      value: expirationSeconds
    }
  });
  const tempatePath = path3.join(
    process.cwd(),
    "src/templates/forgot-password.ejs"
  );
  const tempateData = {
    name: isUserExist.name,
    otp,
    expirationMinutes: expirationSeconds / 60
  };
  const html = await ejs.renderFile(tempatePath, tempateData);
  await transporter.sendMail({
    from: config_default.email_sender,
    to: isUserExist.email,
    subject: "Forgot Password OTP",
    html
  });
};
var resetPassword = async (payload) => {
  const { email: email2, newPassword, otp } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: email2
    }
  });
  if (!isUserExist) {
    throw new AppError_default(httpStatus3.NOT_FOUND, "User does not exist!");
  }
  if (isUserExist.status === "SUSPENDED") {
    throw new AppError_default(httpStatus3.FORBIDDEN, "User is suspended!");
  }
  if (!isUserExist.emailVerified) {
    throw new AppError_default(httpStatus3.BAD_REQUEST, "User email is not verified!");
  }
  if (isUserExist.googleId && isUserExist.provider === "GOOGLE") {
    throw new AppError_default(
      httpStatus3.BAD_REQUEST,
      "Google account does not have a password!"
    );
  }
  const key = `forgot-password-otp:${isUserExist.email}`;
  const redisOtp = await redisClient.get(key);
  if (!redisOtp) {
    throw new AppError_default(httpStatus3.UNAUTHORIZED, "Invalid or expired OTP!");
  }
  if (redisOtp !== otp) {
    throw new AppError_default(httpStatus3.UNAUTHORIZED, "OTP does not match!");
  }
  const hashedNewPassword = await bcrypt.hash(
    newPassword,
    Number(config_default.bcrypt_salt_rounds)
  );
  await prisma.user.update({
    where: {
      email: isUserExist.email
    },
    data: {
      password: hashedNewPassword
    }
  });
  await redisClient.del([key]);
  const tempatePath = path3.join(
    process.cwd(),
    "src/templates/reset-password-success.ejs"
  );
  const tempateData = {
    name: isUserExist.name
  };
  const html = await ejs.renderFile(tempatePath, tempateData);
  await transporter.sendMail({
    from: config_default.email_sender,
    to: isUserExist.email,
    subject: "Password Changed",
    html
  });
};
var authServices = {
  registerUser,
  verifyEmail,
  generateTokens,
  getMe,
  updateMe,
  forgotPassword,
  resetPassword
};

// src/utils/sendResponse.ts
var sendResponse = (res, { message, data, error }, status = 200) => {
  res.status(status).json({
    success: !error,
    message,
    data: error ? void 0 : data
  });
};
var sendResponse_default = sendResponse;

// src/modules/auth/auth.controller.ts
import httpStatus4 from "http-status";
import passport from "passport";
var registerUser2 = catchAsync(
  async (req, res, next) => {
    const payload = req.body;
    await authServices.registerUser(payload);
    sendResponse_default(
      res,
      { message: "Email Verification OTP Send.", data: null },
      httpStatus4.OK
    );
  }
);
var verifyEmail2 = catchAsync(
  async (req, res, next) => {
    const payload = req.body;
    const { accessToken, refreshToken, user } = await authServices.verifyEmail(payload);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config_default.node_env === "production",
      sameSite: config_default.node_env === "production" ? "none" : "lax",
      maxAge: 1e3 * 60 * 60 * 24
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config_default.node_env === "production",
      sameSite: config_default.node_env === "production" ? "none" : "lax",
      maxAge: 1e3 * 60 * 60 * 24 * 7
    });
    sendResponse_default(
      res,
      {
        message: "Email verified and user created successfully!",
        data: {
          accessToken,
          refreshToken,
          user
        }
      },
      httpStatus4.CREATED
    );
  }
);
var loginUser = (req, res, next) => {
  const callback = async (err, user, info) => {
    try {
      if (err) {
        return next(err);
      }
      if (!user) {
        const message = typeof info === "object" && info !== null && "message" in info && typeof info.message === "string" ? info.message : "Invalid email or password";
        return next(new AppError_default(httpStatus4.UNAUTHORIZED, message));
      }
      const { accessToken, refreshToken } = await authServices.generateTokens(user);
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: config_default.node_env === "production",
        sameSite: config_default.node_env === "production" ? "none" : "lax",
        maxAge: 1e3 * 60 * 60 * 24
      });
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: config_default.node_env === "production",
        sameSite: config_default.node_env === "production" ? "none" : "lax",
        maxAge: 1e3 * 60 * 60 * 24 * 7
      });
      const { password, ...userWithoutPassword } = user;
      return sendResponse_default(res, {
        message: "User logged in successfully!",
        data: { accessToken, refreshToken, user: userWithoutPassword }
      });
    } catch (error) {
      next(error);
    }
  };
  passport.authenticate("local", callback)(req, res, next);
};
var googleCallback = catchAsync(
  async (req, res, next) => {
    const user = req.user;
    const { accessToken, refreshToken } = await authServices.generateTokens(
      user
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config_default.node_env === "production",
      sameSite: config_default.node_env === "production" ? "none" : "lax",
      maxAge: 1e3 * 60 * 60 * 24
    });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config_default.node_env === "production",
      sameSite: config_default.node_env === "production" ? "none" : "lax",
      maxAge: 1e3 * 60 * 60 * 24 * 7
    });
    res.redirect(`${config_default.frontend_url}/dashboard/user`);
  }
);
var getMe2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const result = await authServices.getMe(userId);
    sendResponse_default(res, {
      message: "User data retrive successfully.",
      data: result
    });
  }
);
var logout = catchAsync(
  async (req, res, next) => {
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: config_default.node_env === "production",
      sameSite: config_default.node_env === "production" ? "none" : "lax"
    });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: config_default.node_env === "production",
      sameSite: config_default.node_env === "production" ? "none" : "lax"
    });
    sendResponse_default(
      res,
      {
        message: "User logged out successfully!"
      },
      httpStatus4.OK
    );
  }
);
var updateMe2 = catchAsync(
  async (req, res, next) => {
    const payload = req.body;
    const userId = req.user?.id;
    const result = await authServices.updateMe(payload, userId);
    sendResponse_default(res, {
      message: "User update successfully.",
      data: result
    });
  }
);
var forgotPassword2 = catchAsync(
  async (req, res, next) => {
    const payload = req.body;
    await authServices.forgotPassword(payload);
    sendResponse_default(res, {
      message: `OTP Sent To your Email : ${payload.email}`,
      data: null
    });
  }
);
var resetPassword2 = catchAsync(
  async (req, res, next) => {
    const payload = req.body;
    await authServices.resetPassword(payload);
    sendResponse_default(res, {
      message: `Password changed successfully!`,
      data: null
    });
  }
);
var authControllers = {
  registerUser: registerUser2,
  verifyEmail: verifyEmail2,
  loginUser,
  googleCallback,
  updateMe: updateMe2,
  getMe: getMe2,
  logout,
  forgotPassword: forgotPassword2,
  resetPassword: resetPassword2
};

// src/middlewares/validateRequest.ts
var validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
};
var validateRequest_default = validateRequest;

// src/modules/auth/auth.validation.ts
import z from "zod";
var registerValidationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password Must Minimum 8 Characters Long.").regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter").regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter").regex(/[0-9]/, "Password must contain atleast 1 Number").regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character")
});
var userVerifyEmailZodSchema = z.object({
  email: z.email("Invalid email address"),
  otp: z.string().length(6)
});
var loginValidationSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string()
});
var profileUpdateSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").optional()
});
var ForgotPasswordZodSchema = z.object({
  email: z.email()
});
var ResetPasswordZodSchema = z.object({
  email: z.email(),
  newPassword: z.string().min(8, "Password Must Minimum 8 Characters Long.").regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter").regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter").regex(/[0-9]/, "Password must contain atleast 1 Number").regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
  otp: z.string().length(6)
});

// src/modules/auth/auth.route.ts
import passport2 from "passport";

// src/middlewares/auth.ts
var auth = (...requiredRoles) => {
  return catchAsync(async (req, res, next) => {
    const token = req.cookies.accessToken ? req.cookies.accessToken : req.headers.authorization?.startsWith("Bearer") ? req.headers.authorization.split(" ")[1] : req.headers.authorization;
    if (!token) {
      throw new Error("You are not logged in. please log in");
    }
    const verifiedToken = jwtUtils.verifyToken(token, config_default.jwt_access_secret);
    if (!verifiedToken.success) {
      throw new Error(verifiedToken.error);
    }
    const { id, email: email2, role } = verifiedToken.data;
    if (requiredRoles.length && !requiredRoles.includes(role)) {
      throw new Error("Forbidden, you have don't permission");
    }
    const user = await prisma.user.findUnique({
      where: {
        id,
        email: email2
      }
    });
    if (!user) {
      throw new Error("User not found! Please login again.");
    }
    if (user.status === "SUSPENDED") {
      throw new Error(
        "Your account has been suspended. Please contact support!"
      );
    }
    req.user = user;
    next();
  });
};

// src/modules/auth/auth.route.ts
var router = Router();
router.post(
  "/register",
  validateRequest_default(registerValidationSchema),
  authControllers.registerUser
);
router.post(
  "/verify-email",
  validateRequest_default(userVerifyEmailZodSchema),
  authControllers.verifyEmail
);
router.post(
  "/login",
  validateRequest_default(loginValidationSchema),
  authControllers.loginUser
);
router.get(
  "/google",
  passport2.authenticate("google", {
    scope: ["profile", "email"]
  })
);
router.get(
  "/google/callback",
  passport2.authenticate("google", {
    session: false
  }),
  authControllers.googleCallback
);
router.get("/me", auth(Role.ADMIN, Role.USER), authControllers.getMe);
router.patch(
  "/me",
  auth(Role.ADMIN, Role.USER),
  validateRequest_default(profileUpdateSchema),
  authControllers.updateMe
);
router.post("/logout", authControllers.logout);
router.post(
  "/forgot-password",
  validateRequest_default(ForgotPasswordZodSchema),
  authControllers.forgotPassword
);
router.post(
  "/reset-password",
  validateRequest_default(ResetPasswordZodSchema),
  authControllers.resetPassword
);
var authRoutes = router;

// src/config/passport.ts
import passport3 from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  Strategy as GoogleStrategy
} from "passport-google-oauth20";
import bcrypt2 from "bcryptjs";
import path4 from "path";
import ejs2 from "ejs";
passport3.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email2, password, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { email: email2 }
        });
        if (!user) {
          return done(null, false, {
            message: "Invalid email or password"
          });
        }
        if (user.status === UserStatus.SUSPENDED) {
          return done(null, false, {
            message: "User is suspended!"
          });
        }
        if (user.provider === AuthProvider.GOOGLE && !user.password) {
          return done(null, false, {
            message: "This account is registered with Google. Please login with Google."
          });
        }
        const isPasswordMatched = await bcrypt2.compare(
          password,
          user.password
        );
        if (!isPasswordMatched) {
          return done(null, false, {
            message: "Invalid email or password"
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
passport3.use(
  new GoogleStrategy(
    {
      clientID: config_default.google_client_id,
      clientSecret: config_default.google_client_secret,
      callbackURL: config_default.google_callback_url
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email2 = profile.emails?.[0]?.value;
        if (!email2) {
          return done(null, false, {
            message: "Google account email not found"
          });
        }
        const existingGoogleUser = await prisma.user.findFirst({
          where: {
            email: email2,
            googleId: profile.id
          }
        });
        let user = existingGoogleUser;
        if (!existingGoogleUser) {
          const existingCredentialsUser = await prisma.user.findFirst({
            where: {
              email: email2,
              provider: AuthProvider.CREDENTIAL
            }
          });
          if (existingCredentialsUser) {
            if (existingCredentialsUser.status === UserStatus.SUSPENDED) {
              return done(null, false, {
                message: "User is suspended"
              });
            }
            user = await prisma.user.update({
              where: {
                id: existingCredentialsUser.id
              },
              data: {
                googleId: profile.id,
                image: profile.photos?.[0]?.value,
                emailVerified: true
              }
            });
          } else {
            user = await prisma.user.create({
              data: {
                name: profile.displayName,
                email: email2,
                role: Role.USER,
                googleId: profile.id,
                provider: AuthProvider.GOOGLE,
                emailVerified: true,
                image: profile.photos?.[0]?.value
              }
            });
            try {
              const templatePath = path4.join(
                process.cwd(),
                "src/templates/user-welcome-email.ejs"
              );
              const templateData = {
                name: user.name
              };
              const html = await ejs2.renderFile(templatePath, templateData);
              await transporter.sendMail({
                from: config_default.email_sender,
                to: email2,
                subject: "Welcome To Prompt Share Project",
                html
              });
            } catch (error) {
              console.error("Failed to send welcome email:", error);
            }
          }
        }
        if (!user) {
          return done(null, false, {
            message: "User not found!"
          });
        }
        if (user.status === UserStatus.SUSPENDED) {
          return done(null, false, {
            message: "User is suspended!"
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// src/modules/user/user.route.ts
import { Router as Router2 } from "express";

// src/lib/cloudinary.ts
import { v2 as Cloudinary } from "cloudinary";
Cloudinary.config({
  cloud_name: config_default.cloudinary_cloud_name,
  api_key: config_default.cloudinary_api_key,
  api_secret: config_default.cloudinary_api_secret
});
var cloudinary = Cloudinary;

// src/modules/user/user.service.ts
import httpStatus5 from "http-status";
var uploadProfileImage = async (buffer, userId) => {
  const currentUser = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      image: true,
      imagePublicId: true
    }
  });
  if (!currentUser) {
    throw new AppError_default(httpStatus5.NOT_FOUND, "User not found!");
  }
  const cloudinaryResult = await new Promise(
    (resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: "auto"
        },
        async (error, result) => {
          if (error) {
            return reject(error);
          }
          if (!result) {
            return reject(
              new AppError_default(
                httpStatus5.INTERNAL_SERVER_ERROR,
                "Failed to upload image."
              )
            );
          }
          resolve(result);
        }
      ).end(buffer);
    }
  );
  const updatedUser = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      image: cloudinaryResult.secure_url,
      imagePublicId: cloudinaryResult.public_id
    },
    omit: {
      password: true
    }
  });
  if (currentUser.imagePublicId && currentUser.image) {
    try {
      await cloudinary.uploader.destroy(currentUser.imagePublicId);
    } catch (error) {
      console.error("Failed to delete old profile image:", error);
    }
  }
  return updatedUser;
};
var userServices = {
  uploadProfileImage
};

// src/modules/user/user.controller.ts
import httpStatus6 from "http-status";
var uploadProfileImage2 = catchAsync(
  async (req, res, next) => {
    if (!req.file) {
      throw new AppError_default(httpStatus6.BAD_REQUEST, "No file uploaded");
    }
    const userId = req.user?.id;
    if (!userId) {
      throw new AppError_default(httpStatus6.UNAUTHORIZED, "User not authenticated!");
    }
    const result = await userServices.uploadProfileImage(
      req.file?.buffer,
      userId
    );
    sendResponse_default(res, {
      message: "Profile image updated successfully.",
      data: result
    });
  }
);
var userControllers = {
  uploadProfileImage: uploadProfileImage2
};

// src/lib/multer.ts
import multer2 from "multer";
var storage = multer2.memoryStorage();
var upload = multer2({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024
    // 5MB
  }
});

// src/modules/user/user.route.ts
var router2 = Router2();
router2.patch(
  "/profile-image",
  auth(Role.ADMIN, Role.USER),
  upload.single("profileImage"),
  userControllers.uploadProfileImage
);
var userRoutes = router2;

// src/modules/prompt/prompt.route.ts
import { Router as Router3 } from "express";

// src/modules/prompt/prompt.service.ts
import httpStatus7 from "http-status";
var createPrompt = async (userId, payload) => {
  const { title } = payload;
  console.log(payload);
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "User not found");
  }
  if (user.status === "SUSPENDED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is suspended.");
  }
  if (user.status === "DELETED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is deleted.");
  }
  const isTitleExists = await prisma.prompt.findFirst({
    where: {
      userId,
      title: {
        equals: title,
        mode: "insensitive"
      }
    }
  });
  if (isTitleExists) {
    throw new AppError_default(
      httpStatus7.CONFLICT,
      "A prompt with this title already exists in your dashboard!"
    );
  }
  const result = await prisma.prompt.create({
    data: {
      ...payload,
      userId
    }
  });
  return result;
};
var getAllPublicPrompts = async (query, currentUserId) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const andConditions = [
    {
      isPublic: true
    },
    {
      NOT: {
        title: {
          endsWith: "(Copied)"
        }
      }
    }
  ];
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          title: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          description: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          tags: {
            has: query.searchTerm
          }
        }
      ]
    });
  }
  if (query.category) {
    andConditions.push({
      category: {
        equals: query.category
      }
    });
  }
  const prompts = await prisma.prompt.findMany({
    where: {
      AND: andConditions
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          image: true,
          role: true,
          status: true
        }
      }
    }
  });
  const total = await prisma.prompt.count({
    where: {
      AND: andConditions
    }
  });
  const promptsWithForkStatus = await Promise.all(
    prompts.map(async (prompt) => {
      let isForkedByCurrentUser = false;
      if (currentUserId) {
        const hasForked = await prisma.prompt.findFirst({
          where: {
            userId: currentUserId,
            OR: [
              { id: prompt.id },
              { template: prompt.template }
            ]
          }
        });
        isForkedByCurrentUser = !!hasForked;
      }
      return {
        ...prompt,
        isForkedByCurrentUser
      };
    })
  );
  return {
    data: promptsWithForkStatus,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var getPromptById = async (promptId, userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "User not found");
  }
  if (user.status === "SUSPENDED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is suspended.");
  }
  if (user.status === "DELETED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is deleted.");
  }
  const prompt = await prisma.prompt.findUnique({
    where: {
      id: promptId
    }
  });
  if (!prompt) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "Prompt not found");
  }
  if (prompt.userId !== userId) {
    throw new AppError_default(
      httpStatus7.FORBIDDEN,
      "You do not have permission to access this prompt"
    );
  }
  return prompt;
};
var getMyPrompts = async (userId, query) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "User not found");
  }
  if (user.status === "SUSPENDED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is suspended.");
  }
  if (user.status === "DELETED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is deleted.");
  }
  const andConditions = [
    {
      userId
    }
  ];
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          title: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          description: {
            contains: query.searchTerm,
            mode: "insensitive"
          }
        },
        {
          tags: {
            has: query.searchTerm
          }
        }
      ]
    });
  }
  if (query.category) {
    andConditions.push({
      category: {
        equals: query.category
      }
    });
  }
  const prompts = await prisma.prompt.findMany({
    where: {
      AND: andConditions
    },
    take: limit,
    skip,
    orderBy: {
      [sortBy]: sortOrder
    }
  });
  const total = await prisma.prompt.count({
    where: {
      AND: andConditions
    }
  });
  return {
    data: prompts,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
};
var clonePromptToMyCollection = async (userId, promptId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "User not found");
  }
  if (user.status === "SUSPENDED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is suspended.");
  }
  if (user.status === "DELETED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is deleted.");
  }
  const originalPrompt = await prisma.prompt.findUnique({
    where: { id: promptId }
  });
  if (!originalPrompt) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "Original prompt not found!");
  }
  if (!originalPrompt.isPublic) {
    throw new AppError_default(httpStatus7.FORBIDDEN, "Private prompts cannot be cloned!");
  }
  if (originalPrompt.userId === userId) {
    throw new AppError_default(httpStatus7.BAD_REQUEST, "You cannot clone your own prompt!");
  }
  const isAlreadyCloned = await prisma.prompt.findFirst({
    where: {
      userId,
      OR: [
        { title: `${originalPrompt.title} (Copied)` },
        { template: originalPrompt.template }
      ]
    }
  });
  if (isAlreadyCloned) {
    throw new AppError_default(httpStatus7.CONFLICT, "You have already cloned this prompt to your collection!");
  }
  const result = await prisma.$transaction(async (tx) => {
    await tx.prompt.update({
      where: { id: promptId },
      data: { forkCount: { increment: 1 } }
    });
    const clonedPrompt = await tx.prompt.create({
      data: {
        title: `${originalPrompt.title} (Copied)`,
        description: originalPrompt.description,
        template: originalPrompt.template,
        category: originalPrompt.category,
        tags: originalPrompt.tags,
        isPublic: true,
        userId
      }
    });
    return clonedPrompt;
  });
  return result;
};
var updatePrompt = async (userId, promptId, payload) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "User not found");
  }
  if (user.status === "SUSPENDED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is suspended.");
  }
  if (user.status === "DELETED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is deleted.");
  }
  const prompt = await prisma.prompt.findUnique({
    where: { id: promptId }
  });
  if (!prompt) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "Prompt not found!");
  }
  if (prompt.userId !== userId) {
    throw new AppError_default(
      httpStatus7.UNAUTHORIZED,
      "You are not authorized to update this prompt!"
    );
  }
  const result = await prisma.prompt.update({
    where: { id: promptId },
    data: payload
  });
  return result;
};
var togglePromptPrivacy = async (userId, promptId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "User not found");
  }
  if (user.status === "SUSPENDED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is suspended.");
  }
  if (user.status === "DELETED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is deleted.");
  }
  const prompt = await prisma.prompt.findUnique({
    where: { id: promptId }
  });
  if (!prompt) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "Prompt not found!");
  }
  if (prompt.userId !== userId) {
    throw new AppError_default(
      httpStatus7.UNAUTHORIZED,
      "You are not authorized to change privacy for this prompt!"
    );
  }
  const result = await prisma.prompt.update({
    where: { id: promptId },
    data: {
      isPublic: !prompt.isPublic
    }
  });
  return result;
};
var deletePrompt = async (userId, promptId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "User not found");
  }
  if (user.status === "SUSPENDED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is suspended.");
  }
  if (user.status === "DELETED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is deleted.");
  }
  const prompt = await prisma.prompt.findUnique({
    where: { id: promptId }
  });
  if (!prompt) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "Prompt not found!");
  }
  if (prompt.userId !== userId) {
    throw new AppError_default(
      httpStatus7.UNAUTHORIZED,
      "You are not authorized to delete this prompt!"
    );
  }
  await prisma.prompt.delete({
    where: { id: promptId }
  });
  return null;
};
var getDashboardStats = async (userId) => {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new AppError_default(httpStatus7.NOT_FOUND, "User not found");
  }
  if (user.status === "SUSPENDED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is suspended.");
  }
  if (user.status === "DELETED") {
    throw new AppError_default(httpStatus7.FORBIDDEN, "User is deleted.");
  }
  const totalPrompts = await prisma.prompt.count({
    where: { userId }
  });
  const publicPrompts = await prisma.prompt.count({
    where: { userId, isPublic: true }
  });
  const privatePrompts = await prisma.prompt.count({
    where: { userId, isPublic: false }
  });
  const forkStats = await prisma.prompt.aggregate({
    where: { userId },
    _sum: {
      forkCount: true
    }
  });
  return {
    totalPrompts,
    publicPrompts,
    privatePrompts,
    totalForksReceived: forkStats._sum.forkCount || 0
  };
};
var promptServices = {
  createPrompt,
  getAllPublicPrompts,
  getPromptById,
  getMyPrompts,
  clonePromptToMyCollection,
  updatePrompt,
  togglePromptPrivacy,
  deletePrompt,
  getDashboardStats
};

// src/modules/prompt/prompt.controller.ts
import httpStatus8 from "http-status";
var createPrompt2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const payload = req.body;
    const result = await promptServices.createPrompt(userId, payload);
    sendResponse_default(
      res,
      {
        message: "Prompt created successfully.",
        data: result
      },
      httpStatus8.CREATED
    );
  }
);
var getAllPublicPrompts2 = catchAsync(
  async (req, res, next) => {
    const query = req.query;
    const currentUserId = req.user?.id;
    const result = await promptServices.getAllPublicPrompts(
      query,
      currentUserId
    );
    sendResponse_default(res, {
      message: "Public prompts fetched successfully.",
      data: result
    });
  }
);
var getPromptById2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const { promptId } = req.params;
    const result = await promptServices.getPromptById(
      promptId,
      userId
    );
    sendResponse_default(res, {
      message: "Prompt fetched successfully.",
      data: result
    });
  }
);
var getMyPrompts2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const query = req.query;
    const result = await promptServices.getMyPrompts(userId, query);
    sendResponse_default(res, {
      message: "My prompts fetched successfully.",
      data: result
    });
  }
);
var clonePromptToMyCollection2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const { promptId } = req.params;
    const result = await promptServices.clonePromptToMyCollection(
      userId,
      promptId
    );
    sendResponse_default(res, {
      message: "Prompt successfully cloned to your collection.",
      data: result
    });
  }
);
var updatePrompt2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const { promptId } = req.params;
    const payload = req.body;
    const result = await promptServices.updatePrompt(
      userId,
      promptId,
      payload
    );
    sendResponse_default(res, {
      message: "Prompt updated successfully.",
      data: result
    });
  }
);
var togglePromptPrivacy2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const { promptId } = req.params;
    const result = await promptServices.togglePromptPrivacy(
      userId,
      promptId
    );
    sendResponse_default(res, {
      message: `Prompt visibility changed to ${result.isPublic ? "Public" : "Private"} successfully.`,
      data: result
    });
  }
);
var deletePrompt2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const { promptId } = req.params;
    await promptServices.deletePrompt(userId, promptId);
    sendResponse_default(res, {
      message: "Prompt deleted successfully.",
      data: null
    });
  }
);
var getDashboardStats2 = catchAsync(
  async (req, res, next) => {
    const userId = req.user?.id;
    const result = await promptServices.getDashboardStats(userId);
    sendResponse_default(res, {
      message: "Dashboard analytics stats fetched successfully.",
      data: result
    });
  }
);
var promptControllers = {
  createPrompt: createPrompt2,
  getAllPublicPrompts: getAllPublicPrompts2,
  getPromptById: getPromptById2,
  getMyPrompts: getMyPrompts2,
  clonePromptToMyCollection: clonePromptToMyCollection2,
  updatePrompt: updatePrompt2,
  togglePromptPrivacy: togglePromptPrivacy2,
  deletePrompt: deletePrompt2,
  getDashboardStats: getDashboardStats2
};

// src/modules/prompt/prompt.validation.ts
import z2 from "zod";
var createPromptValidationSchema = z2.object({
  title: z2.string().min(3, "Title must be at least 3 characters").max(100),
  description: z2.string().min(10, "Description must be at least 10 characters"),
  template: z2.string(),
  category: z2.enum(["code", "text", "image"]),
  tags: z2.array(z2.string()).optional(),
  isPublic: z2.boolean().optional()
});
var updatePromptValidationSchema = z2.object({
  title: z2.string().min(3, "Title must be at least 3 characters").max(100).optional(),
  description: z2.string().min(10, "Description must be at least 10 characters").optional(),
  template: z2.string().optional(),
  category: z2.enum(["code", "text", "image"]).optional(),
  tags: z2.array(z2.string()).optional(),
  isPublic: z2.boolean().optional()
});

// src/middlewares/optionalAuth.ts
var optionalAuth = () => {
  return catchAsync(async (req, res, next) => {
    const token = req.cookies.accessToken ? req.cookies.accessToken : req.headers.authorization?.startsWith("Bearer") ? req.headers.authorization.split(" ")[1] : req.headers.authorization;
    if (!token) {
      return next();
    }
    const verifiedToken = jwtUtils.verifyToken(token, config_default.jwt_access_secret);
    if (!verifiedToken.success) {
      return next();
    }
    const { id, email: email2 } = verifiedToken.data;
    const user = await prisma.user.findUnique({
      where: {
        id,
        email: email2
      }
    });
    if (!user || user.status === "SUSPENDED") {
      return next();
    }
    req.user = user;
    next();
  });
};

// src/modules/prompt/prompt.route.ts
var router3 = Router3();
router3.get("/", optionalAuth(), promptControllers.getAllPublicPrompts);
router3.get("/my-prompts", auth(Role.USER), promptControllers.getMyPrompts);
router3.get(
  "/dashboard-stats",
  auth(Role.USER),
  promptControllers.getDashboardStats
);
router3.get("/:promptId", auth(Role.USER), promptControllers.getPromptById);
router3.post(
  "/create",
  auth(Role.USER),
  validateRequest_default(createPromptValidationSchema),
  promptControllers.createPrompt
);
router3.post(
  "/clone-prompt-to-my-collection/:promptId",
  auth(Role.USER),
  promptControllers.clonePromptToMyCollection
);
router3.patch(
  "/toggle-prompt-privacy/:promptId",
  auth(Role.USER),
  promptControllers.togglePromptPrivacy
);
router3.patch(
  "/:promptId",
  auth(Role.USER),
  validateRequest_default(updatePromptValidationSchema),
  promptControllers.updatePrompt
);
router3.delete("/:promptId", auth(Role.USER), promptControllers.deletePrompt);
var promptRoutes = router3;

// src/app.ts
var app = express();
app.use(
  cors({
    origin: config_default.frontend_url,
    credentials: true
  })
);
app.use(express.json());
app.use(
  urlencoded({
    extended: true
  })
);
app.use(cookieParser());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "prompt share server is running successfully!"
  });
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/prompt", promptRoutes);
app.use(notFound);
app.use(globalErrorHandler_default);
var app_default = app;

// src/server.ts
var PORT = config_default.port;
var main = async () => {
  try {
    await prisma.$connect();
    console.log("database connected successfullly!");
    await redisClient.connect();
    console.log("Redis connected successfully.");
    await transporter.verify();
    console.log("Nodemail connected successfully.");
    app_default.listen(PORT, () => {
      console.log(`prompt share listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(`error starting the server: ${error}`);
    await prisma.$disconnect();
    process.exit(1);
  }
};
main();
//# sourceMappingURL=server.js.map