/*
  Warnings:

  - Changed the type of `category` on the `prompts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PromptCategory" AS ENUM ('code', 'text', 'image');

-- AlterTable
ALTER TABLE "prompts" DROP COLUMN "category",
ADD COLUMN     "category" "PromptCategory" NOT NULL;

-- CreateIndex
CREATE INDEX "prompts_title_category_idx" ON "prompts"("title", "category");
