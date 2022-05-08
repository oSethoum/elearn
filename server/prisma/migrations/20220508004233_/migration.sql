/*
  Warnings:

  - You are about to drop the column `deadline` on the `Assignment` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Assignment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL,
    "content" TEXT NOT NULL,
    "description" TEXT,
    "courseId" INTEGER,
    CONSTRAINT "Assignment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Assignment" ("content", "courseId", "createdAt", "description", "id", "published", "title", "updatedAt") SELECT "content", "courseId", "createdAt", "description", "id", "published", "title", "updatedAt" FROM "Assignment";
DROP TABLE "Assignment";
ALTER TABLE "new_Assignment" RENAME TO "Assignment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
