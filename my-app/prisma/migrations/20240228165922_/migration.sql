/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `bills` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `food` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `misc` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `rentOrMortgage` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `misc` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `Income` table. All the data in the column will be lost.
  - You are about to drop the column `stocks` on the `Income` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freq` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amount` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `freq` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Expense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "freq" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_Expense" ("id", "userId") SELECT "id", "userId" FROM "Expense";
DROP TABLE "Expense";
ALTER TABLE "new_Expense" RENAME TO "Expense";
CREATE TABLE "new_Income" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "freq" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_Income" ("id", "userId") SELECT "id", "userId" FROM "Income";
DROP TABLE "Income";
ALTER TABLE "new_Income" RENAME TO "Income";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
