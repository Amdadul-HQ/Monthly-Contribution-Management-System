-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Suspended', 'Deleted', 'Rejected', 'Pending');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Completed', 'Canceled', 'Pending');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('MEMBER', 'ADMIN');

-- CreateTable
CREATE TABLE "PersonalInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "memberId" INTEGER NOT NULL,
    "nid" INTEGER NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'Pending',
    "joingDate" TIMESTAMP(3) NOT NULL,
    "refarenceName" TEXT NOT NULL,
    "senderPhoneNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalInfoStates" (
    "id" TEXT NOT NULL,
    "memberId" INTEGER NOT NULL,
    "totalDeposit" INTEGER NOT NULL DEFAULT 0,
    "montlyDeposit" INTEGER NOT NULL,
    "totalMonthDeposit" INTEGER NOT NULL DEFAULT 0,
    "totalPenalties" INTEGER NOT NULL DEFAULT 0,
    "totalPenaltiesMonth" INTEGER NOT NULL DEFAULT 0,
    "registrationFee" INTEGER NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "paymentStreak" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PersonalInfoStates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credentials" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "memberId" SERIAL NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit" (
    "id" TEXT NOT NULL,
    "memberId" INTEGER NOT NULL,
    "monthlyDepositAmount" INTEGER NOT NULL,
    "month" TIMESTAMP(3) NOT NULL,
    "referenceName" TEXT NOT NULL,
    "paymentProof" TEXT NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "penalty" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Deposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepositPaymentMethodHandToHand" (
    "id" TEXT NOT NULL,
    "depositId" TEXT NOT NULL,
    "reciverName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "DepositPaymentMethodHandToHand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepositPaymentMethodPhone" (
    "id" TEXT NOT NULL,
    "depositId" TEXT NOT NULL,
    "paymentMethodName" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "transitionID" TEXT NOT NULL,

    CONSTRAINT "DepositPaymentMethodPhone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DepositPaymentMethodBank" (
    "id" TEXT NOT NULL,
    "depositId" TEXT NOT NULL,
    "bankACNumber" TEXT NOT NULL,
    "bankHolderName" TEXT NOT NULL,

    CONSTRAINT "DepositPaymentMethodBank_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_memberId_key" ON "PersonalInfo"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfo_nid_key" ON "PersonalInfo"("nid");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInfoStates_memberId_key" ON "PersonalInfoStates"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_memberId_key" ON "Credentials"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "Deposit_memberId_key" ON "Deposit"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "DepositPaymentMethodHandToHand_depositId_key" ON "DepositPaymentMethodHandToHand"("depositId");

-- CreateIndex
CREATE UNIQUE INDEX "DepositPaymentMethodPhone_depositId_key" ON "DepositPaymentMethodPhone"("depositId");

-- CreateIndex
CREATE UNIQUE INDEX "DepositPaymentMethodBank_depositId_key" ON "DepositPaymentMethodBank"("depositId");

-- AddForeignKey
ALTER TABLE "PersonalInfo" ADD CONSTRAINT "PersonalInfo_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Credentials"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalInfoStates" ADD CONSTRAINT "PersonalInfoStates_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "PersonalInfo"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit" ADD CONSTRAINT "Deposit_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Credentials"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepositPaymentMethodHandToHand" ADD CONSTRAINT "DepositPaymentMethodHandToHand_depositId_fkey" FOREIGN KEY ("depositId") REFERENCES "Deposit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepositPaymentMethodPhone" ADD CONSTRAINT "DepositPaymentMethodPhone_depositId_fkey" FOREIGN KEY ("depositId") REFERENCES "Deposit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DepositPaymentMethodBank" ADD CONSTRAINT "DepositPaymentMethodBank_depositId_fkey" FOREIGN KEY ("depositId") REFERENCES "Deposit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
