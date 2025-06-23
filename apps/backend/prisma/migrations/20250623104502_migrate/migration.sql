/*
  Warnings:

  - You are about to drop the column `joingDate` on the `PersonalInfo` table. All the data in the column will be lost.
  - You are about to drop the column `refarenceName` on the `PersonalInfo` table. All the data in the column will be lost.
  - You are about to drop the column `montlyDeposit` on the `PersonalInfoStates` table. All the data in the column will be lost.
  - Added the required column `joiningDate` to the `PersonalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referenceName` to the `PersonalInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthlyDeposit` to the `PersonalInfoStates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PersonalInfo" DROP COLUMN "joingDate",
DROP COLUMN "refarenceName",
ADD COLUMN     "joiningDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "referenceName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PersonalInfoStates" DROP COLUMN "montlyDeposit",
ADD COLUMN     "monthlyDeposit" INTEGER NOT NULL;
