-- AlterTable
ALTER TABLE "Deposit" ALTER COLUMN "monthlyDepositAmount" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "DepositPaymentMethodPhone" ALTER COLUMN "phoneNumber" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "PersonalInfo" ALTER COLUMN "phone" SET DATA TYPE BIGINT,
ALTER COLUMN "nid" SET DATA TYPE BIGINT,
ALTER COLUMN "senderPhoneNumber" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "PersonalInfoStates" ALTER COLUMN "monthlyDeposit" SET DATA TYPE BIGINT;
