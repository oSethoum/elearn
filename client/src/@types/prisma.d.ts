/**
 * Model User
 */

export type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
  disabled: boolean;
  createdAt: Date;
  updatedAt: Date;
  student?: Student;
  teacher?: Teacher;
  admin?: Admin;
};

/**
 * Model Student
 */

export type Student = {
  id: number;
  grade: number;
  firstName: string;
  lastName: string;
  user: User;
  topic: Topic;
  userId: number;
  topicId: number | null;
};

/**
 * Model Teacher
 */

export type Teacher = {
  id: number;
  firstName: string;
  lastName: string;
  userId: number;
};

/**
 * Model Admin
 */

export type Admin = {
  id: number;
  lastName: string;
  firstName: string;
  userId: number;
};

/**
 * Model Department
 */

export type Department = {
  id: number;
  name: string;
};

/**
 * Model Topic
 */

export type Topic = {
  id: number;
  name: string;
  grades: number;
  departmentId: number | null;
};

/**
 * Model Course
 */

export type Course = {
  id: number;
  title: string;
  grade: number;
  description: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  topicId: number | null;
  teacherId: number | null;
};

/**
 * Model Assignment
 */

export type Assignment = {
  id: number;
  deadline: Date;
  createdAt: Date;
  updatedAt: Date;
  published: boolean | null;
  courseId: number | null;
  contentId: number;
};

/**
 * Model Meeting
 */

export type Meeting = {
  id: number;
  title: string;
  start: Date;
  duration: Date;
  createdAt: Date;
  link: string | null;
  updatedAt: Date;
  courseId: number | null;
};

/**
 * Model Submission
 */

export type Submission = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  studentId: number | null;
  assignementId: number | null;
  contentId: number;
};

/**
 * Model Content
 */

export type Content = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  content: string;
};

/**
 * Model File
 */

export type File = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  link: string;
  contentId: number | null;
};

/**
 * Model Lesson
 */

export type Lesson = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  contentId: number;
  lessonsId: number | null;
};
