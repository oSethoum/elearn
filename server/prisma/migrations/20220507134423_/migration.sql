/*
  Warnings:

  - Added the required column `title` to the `Assignment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Assignment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "deadline" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL,
    "content" TEXT NOT NULL,
    "description" TEXT,
    "courseId" INTEGER,
    CONSTRAINT "Assignment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Assignment" ("content", "courseId", "createdAt", "deadline", "id", "published", "updatedAt") SELECT "content", "courseId", "createdAt", "deadline", "id", "published", "updatedAt" FROM "Assignment";
DROP TABLE "Assignment";
ALTER TABLE "new_Assignment" RENAME TO "Assignment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
