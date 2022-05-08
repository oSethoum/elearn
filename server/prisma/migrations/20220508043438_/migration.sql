/*
  Warnings:

  - You are about to drop the column `start` on the `Meeting` table. All the data in the column will be lost.
  - Added the required column `date` to the `Meeting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meeting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "date" DATETIME NOT NULL,
    "startTime" DATETIME NOT NULL,
    "duration" DATETIME NOT NULL,
    "link" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "courseId" INTEGER,
    CONSTRAINT "Meeting_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Meeting" ("courseId", "createdAt", "description", "duration", "id", "link", "title", "updatedAt") SELECT "courseId", "createdAt", "description", "duration", "id", "link", "title", "updatedAt" FROM "Meeting";
DROP TABLE "Meeting";
ALTER TABLE "new_Meeting" RENAME TO "Meeting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
