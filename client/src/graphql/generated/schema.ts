import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Admin = {
  __typename?: 'Admin';
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type AdminAvgAggregate = {
  __typename?: 'AdminAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type AdminAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AdminCountAggregate = {
  __typename?: 'AdminCountAggregate';
  _all: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  userId: Scalars['Int'];
};

export type AdminCountOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AdminCreateInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  user: UserCreateNestedOneWithoutAdminInput;
};

export type AdminCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AdminCreateWithoutUserInput>;
};

export type AdminCreateOrConnectWithoutUserInput = {
  create: AdminCreateWithoutUserInput;
  where: AdminWhereUniqueInput;
};

export type AdminCreateWithoutUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type AdminGroupBy = {
  __typename?: 'AdminGroupBy';
  _avg?: Maybe<AdminAvgAggregate>;
  _count?: Maybe<AdminCountAggregate>;
  _max?: Maybe<AdminMaxAggregate>;
  _min?: Maybe<AdminMinAggregate>;
  _sum?: Maybe<AdminSumAggregate>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  userId: Scalars['Int'];
};

export type AdminMaxAggregate = {
  __typename?: 'AdminMaxAggregate';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AdminMaxOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AdminMinAggregate = {
  __typename?: 'AdminMinAggregate';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AdminMinOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AdminOrderByWithAggregationInput = {
  _avg?: InputMaybe<AdminAvgOrderByAggregateInput>;
  _count?: InputMaybe<AdminCountOrderByAggregateInput>;
  _max?: InputMaybe<AdminMaxOrderByAggregateInput>;
  _min?: InputMaybe<AdminMinOrderByAggregateInput>;
  _sum?: InputMaybe<AdminSumOrderByAggregateInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AdminOrderByWithRelationInput = {
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export enum AdminScalarFieldEnum {
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  UserId = 'userId'
}

export type AdminScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AdminScalarWhereWithAggregatesInput>>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type AdminSumAggregate = {
  __typename?: 'AdminSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AdminSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AdminUpdateInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAdminInput>;
};

export type AdminUpdateManyMutationInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpdateOneWithoutUserInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AdminCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<AdminCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AdminUpdateWithoutUserInput>;
  upsert?: InputMaybe<AdminUpsertWithoutUserInput>;
};

export type AdminUpdateWithoutUserInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AdminUpsertWithoutUserInput = {
  create: AdminCreateWithoutUserInput;
  update: AdminUpdateWithoutUserInput;
};

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type AdminWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAdmin = {
  __typename?: 'AggregateAdmin';
  _avg?: Maybe<AdminAvgAggregate>;
  _count?: Maybe<AdminCountAggregate>;
  _max?: Maybe<AdminMaxAggregate>;
  _min?: Maybe<AdminMinAggregate>;
  _sum?: Maybe<AdminSumAggregate>;
};

export type AggregateAssignment = {
  __typename?: 'AggregateAssignment';
  _avg?: Maybe<AssignmentAvgAggregate>;
  _count?: Maybe<AssignmentCountAggregate>;
  _max?: Maybe<AssignmentMaxAggregate>;
  _min?: Maybe<AssignmentMinAggregate>;
  _sum?: Maybe<AssignmentSumAggregate>;
};

export type AggregateAssignmentFile = {
  __typename?: 'AggregateAssignmentFile';
  _avg?: Maybe<AssignmentFileAvgAggregate>;
  _count?: Maybe<AssignmentFileCountAggregate>;
  _max?: Maybe<AssignmentFileMaxAggregate>;
  _min?: Maybe<AssignmentFileMinAggregate>;
  _sum?: Maybe<AssignmentFileSumAggregate>;
};

export type AggregateCourse = {
  __typename?: 'AggregateCourse';
  _avg?: Maybe<CourseAvgAggregate>;
  _count?: Maybe<CourseCountAggregate>;
  _max?: Maybe<CourseMaxAggregate>;
  _min?: Maybe<CourseMinAggregate>;
  _sum?: Maybe<CourseSumAggregate>;
};

export type AggregateDepartment = {
  __typename?: 'AggregateDepartment';
  _avg?: Maybe<DepartmentAvgAggregate>;
  _count?: Maybe<DepartmentCountAggregate>;
  _max?: Maybe<DepartmentMaxAggregate>;
  _min?: Maybe<DepartmentMinAggregate>;
  _sum?: Maybe<DepartmentSumAggregate>;
};

export type AggregateLesson = {
  __typename?: 'AggregateLesson';
  _avg?: Maybe<LessonAvgAggregate>;
  _count?: Maybe<LessonCountAggregate>;
  _max?: Maybe<LessonMaxAggregate>;
  _min?: Maybe<LessonMinAggregate>;
  _sum?: Maybe<LessonSumAggregate>;
};

export type AggregateLessonFile = {
  __typename?: 'AggregateLessonFile';
  _avg?: Maybe<LessonFileAvgAggregate>;
  _count?: Maybe<LessonFileCountAggregate>;
  _max?: Maybe<LessonFileMaxAggregate>;
  _min?: Maybe<LessonFileMinAggregate>;
  _sum?: Maybe<LessonFileSumAggregate>;
};

export type AggregateMeeting = {
  __typename?: 'AggregateMeeting';
  _avg?: Maybe<MeetingAvgAggregate>;
  _count?: Maybe<MeetingCountAggregate>;
  _max?: Maybe<MeetingMaxAggregate>;
  _min?: Maybe<MeetingMinAggregate>;
  _sum?: Maybe<MeetingSumAggregate>;
};

export type AggregateStudent = {
  __typename?: 'AggregateStudent';
  _avg?: Maybe<StudentAvgAggregate>;
  _count?: Maybe<StudentCountAggregate>;
  _max?: Maybe<StudentMaxAggregate>;
  _min?: Maybe<StudentMinAggregate>;
  _sum?: Maybe<StudentSumAggregate>;
};

export type AggregateSubmission = {
  __typename?: 'AggregateSubmission';
  _avg?: Maybe<SubmissionAvgAggregate>;
  _count?: Maybe<SubmissionCountAggregate>;
  _max?: Maybe<SubmissionMaxAggregate>;
  _min?: Maybe<SubmissionMinAggregate>;
  _sum?: Maybe<SubmissionSumAggregate>;
};

export type AggregateSubmissionFile = {
  __typename?: 'AggregateSubmissionFile';
  _avg?: Maybe<SubmissionFileAvgAggregate>;
  _count?: Maybe<SubmissionFileCountAggregate>;
  _max?: Maybe<SubmissionFileMaxAggregate>;
  _min?: Maybe<SubmissionFileMinAggregate>;
  _sum?: Maybe<SubmissionFileSumAggregate>;
};

export type AggregateTeacher = {
  __typename?: 'AggregateTeacher';
  _avg?: Maybe<TeacherAvgAggregate>;
  _count?: Maybe<TeacherCountAggregate>;
  _max?: Maybe<TeacherMaxAggregate>;
  _min?: Maybe<TeacherMinAggregate>;
  _sum?: Maybe<TeacherSumAggregate>;
};

export type AggregateTopic = {
  __typename?: 'AggregateTopic';
  _avg?: Maybe<TopicAvgAggregate>;
  _count?: Maybe<TopicCountAggregate>;
  _max?: Maybe<TopicMaxAggregate>;
  _min?: Maybe<TopicMinAggregate>;
  _sum?: Maybe<TopicSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type Assignment = {
  __typename?: 'Assignment';
  _count?: Maybe<AssignmentCount>;
  assignmentFiles: Array<AssignmentFile>;
  content: Scalars['String'];
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  submissions: Array<Submission>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type AssignmentAssignmentFilesArgs = {
  cursor?: InputMaybe<AssignmentFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssignmentFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssignmentFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentFileWhereInput>;
};


export type AssignmentSubmissionsArgs = {
  cursor?: InputMaybe<SubmissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubmissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubmissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionWhereInput>;
};

export type AssignmentAvgAggregate = {
  __typename?: 'AssignmentAvgAggregate';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type AssignmentAvgOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AssignmentCount = {
  __typename?: 'AssignmentCount';
  assignmentFiles: Scalars['Int'];
  submissions: Scalars['Int'];
};

export type AssignmentCountAggregate = {
  __typename?: 'AssignmentCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  courseId: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AssignmentCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentCreateInput = {
  assignmentFiles?: InputMaybe<AssignmentFileCreateNestedManyWithoutAssignmentInput>;
  content: Scalars['String'];
  course?: InputMaybe<CourseCreateNestedOneWithoutAssignmentsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  published: Scalars['Boolean'];
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutAssignmentInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AssignmentCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<AssignmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AssignmentCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<AssignmentCreateWithoutCourseInput>>;
};

export type AssignmentCreateNestedOneWithoutAssignmentFilesInput = {
  connect?: InputMaybe<AssignmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AssignmentCreateOrConnectWithoutAssignmentFilesInput>;
  create?: InputMaybe<AssignmentCreateWithoutAssignmentFilesInput>;
};

export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
  connect?: InputMaybe<AssignmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AssignmentCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<AssignmentCreateWithoutSubmissionsInput>;
};

export type AssignmentCreateOrConnectWithoutAssignmentFilesInput = {
  create: AssignmentCreateWithoutAssignmentFilesInput;
  where: AssignmentWhereUniqueInput;
};

export type AssignmentCreateOrConnectWithoutCourseInput = {
  create: AssignmentCreateWithoutCourseInput;
  where: AssignmentWhereUniqueInput;
};

export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
  create: AssignmentCreateWithoutSubmissionsInput;
  where: AssignmentWhereUniqueInput;
};

export type AssignmentCreateWithoutAssignmentFilesInput = {
  content: Scalars['String'];
  course?: InputMaybe<CourseCreateNestedOneWithoutAssignmentsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  published: Scalars['Boolean'];
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutAssignmentInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AssignmentCreateWithoutCourseInput = {
  assignmentFiles?: InputMaybe<AssignmentFileCreateNestedManyWithoutAssignmentInput>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  published: Scalars['Boolean'];
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutAssignmentInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AssignmentCreateWithoutSubmissionsInput = {
  assignmentFiles?: InputMaybe<AssignmentFileCreateNestedManyWithoutAssignmentInput>;
  content: Scalars['String'];
  course?: InputMaybe<CourseCreateNestedOneWithoutAssignmentsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AssignmentFile = {
  __typename?: 'AssignmentFile';
  assignment?: Maybe<Assignment>;
  assignmentId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AssignmentFileAvgAggregate = {
  __typename?: 'AssignmentFileAvgAggregate';
  assignmentId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type AssignmentFileAvgOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AssignmentFileCountAggregate = {
  __typename?: 'AssignmentFileCountAggregate';
  _all: Scalars['Int'];
  assignmentId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  link: Scalars['Int'];
  name: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AssignmentFileCountOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentFileCreateInput = {
  assignment?: InputMaybe<AssignmentCreateNestedOneWithoutAssignmentFilesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AssignmentFileCreateNestedManyWithoutAssignmentInput = {
  connect?: InputMaybe<Array<AssignmentFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AssignmentFileCreateOrConnectWithoutAssignmentInput>>;
  create?: InputMaybe<Array<AssignmentFileCreateWithoutAssignmentInput>>;
};

export type AssignmentFileCreateOrConnectWithoutAssignmentInput = {
  create: AssignmentFileCreateWithoutAssignmentInput;
  where: AssignmentFileWhereUniqueInput;
};

export type AssignmentFileCreateWithoutAssignmentInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AssignmentFileGroupBy = {
  __typename?: 'AssignmentFileGroupBy';
  _avg?: Maybe<AssignmentFileAvgAggregate>;
  _count?: Maybe<AssignmentFileCountAggregate>;
  _max?: Maybe<AssignmentFileMaxAggregate>;
  _min?: Maybe<AssignmentFileMinAggregate>;
  _sum?: Maybe<AssignmentFileSumAggregate>;
  assignmentId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AssignmentFileListRelationFilter = {
  every?: InputMaybe<AssignmentFileWhereInput>;
  none?: InputMaybe<AssignmentFileWhereInput>;
  some?: InputMaybe<AssignmentFileWhereInput>;
};

export type AssignmentFileMaxAggregate = {
  __typename?: 'AssignmentFileMaxAggregate';
  assignmentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AssignmentFileMaxOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentFileMinAggregate = {
  __typename?: 'AssignmentFileMinAggregate';
  assignmentId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AssignmentFileMinOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AssignmentFileOrderByWithAggregationInput = {
  _avg?: InputMaybe<AssignmentFileAvgOrderByAggregateInput>;
  _count?: InputMaybe<AssignmentFileCountOrderByAggregateInput>;
  _max?: InputMaybe<AssignmentFileMaxOrderByAggregateInput>;
  _min?: InputMaybe<AssignmentFileMinOrderByAggregateInput>;
  _sum?: InputMaybe<AssignmentFileSumOrderByAggregateInput>;
  assignmentId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentFileOrderByWithRelationInput = {
  assignment?: InputMaybe<AssignmentOrderByWithRelationInput>;
  assignmentId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum AssignmentFileScalarFieldEnum {
  AssignmentId = 'assignmentId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Link = 'link',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AssignmentFileScalarWhereInput = {
  AND?: InputMaybe<Array<AssignmentFileScalarWhereInput>>;
  NOT?: InputMaybe<Array<AssignmentFileScalarWhereInput>>;
  OR?: InputMaybe<Array<AssignmentFileScalarWhereInput>>;
  assignmentId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AssignmentFileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AssignmentFileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AssignmentFileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AssignmentFileScalarWhereWithAggregatesInput>>;
  assignmentId?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  link?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AssignmentFileSumAggregate = {
  __typename?: 'AssignmentFileSumAggregate';
  assignmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type AssignmentFileSumOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AssignmentFileUpdateInput = {
  assignment?: InputMaybe<AssignmentUpdateOneWithoutAssignmentFilesInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssignmentFileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssignmentFileUpdateManyWithWhereWithoutAssignmentInput = {
  data: AssignmentFileUpdateManyMutationInput;
  where: AssignmentFileScalarWhereInput;
};

export type AssignmentFileUpdateManyWithoutAssignmentInput = {
  connect?: InputMaybe<Array<AssignmentFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AssignmentFileCreateOrConnectWithoutAssignmentInput>>;
  create?: InputMaybe<Array<AssignmentFileCreateWithoutAssignmentInput>>;
  delete?: InputMaybe<Array<AssignmentFileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AssignmentFileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AssignmentFileWhereUniqueInput>>;
  set?: InputMaybe<Array<AssignmentFileWhereUniqueInput>>;
  update?: InputMaybe<Array<AssignmentFileUpdateWithWhereUniqueWithoutAssignmentInput>>;
  updateMany?: InputMaybe<Array<AssignmentFileUpdateManyWithWhereWithoutAssignmentInput>>;
  upsert?: InputMaybe<Array<AssignmentFileUpsertWithWhereUniqueWithoutAssignmentInput>>;
};

export type AssignmentFileUpdateWithWhereUniqueWithoutAssignmentInput = {
  data: AssignmentFileUpdateWithoutAssignmentInput;
  where: AssignmentFileWhereUniqueInput;
};

export type AssignmentFileUpdateWithoutAssignmentInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssignmentFileUpsertWithWhereUniqueWithoutAssignmentInput = {
  create: AssignmentFileCreateWithoutAssignmentInput;
  update: AssignmentFileUpdateWithoutAssignmentInput;
  where: AssignmentFileWhereUniqueInput;
};

export type AssignmentFileWhereInput = {
  AND?: InputMaybe<Array<AssignmentFileWhereInput>>;
  NOT?: InputMaybe<Array<AssignmentFileWhereInput>>;
  OR?: InputMaybe<Array<AssignmentFileWhereInput>>;
  assignment?: InputMaybe<AssignmentRelationFilter>;
  assignmentId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AssignmentFileWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type AssignmentGroupBy = {
  __typename?: 'AssignmentGroupBy';
  _avg?: Maybe<AssignmentAvgAggregate>;
  _count?: Maybe<AssignmentCountAggregate>;
  _max?: Maybe<AssignmentMaxAggregate>;
  _min?: Maybe<AssignmentMinAggregate>;
  _sum?: Maybe<AssignmentSumAggregate>;
  content: Scalars['String'];
  courseId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AssignmentListRelationFilter = {
  every?: InputMaybe<AssignmentWhereInput>;
  none?: InputMaybe<AssignmentWhereInput>;
  some?: InputMaybe<AssignmentWhereInput>;
};

export type AssignmentMaxAggregate = {
  __typename?: 'AssignmentMaxAggregate';
  content?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AssignmentMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentMinAggregate = {
  __typename?: 'AssignmentMinAggregate';
  content?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AssignmentMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AssignmentOrderByWithAggregationInput = {
  _avg?: InputMaybe<AssignmentAvgOrderByAggregateInput>;
  _count?: InputMaybe<AssignmentCountOrderByAggregateInput>;
  _max?: InputMaybe<AssignmentMaxOrderByAggregateInput>;
  _min?: InputMaybe<AssignmentMinOrderByAggregateInput>;
  _sum?: InputMaybe<AssignmentSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentOrderByWithRelationInput = {
  assignmentFiles?: InputMaybe<AssignmentFileOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  course?: InputMaybe<CourseOrderByWithRelationInput>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  submissions?: InputMaybe<SubmissionOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AssignmentRelationFilter = {
  is?: InputMaybe<AssignmentWhereInput>;
  isNot?: InputMaybe<AssignmentWhereInput>;
};

export enum AssignmentScalarFieldEnum {
  Content = 'content',
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AssignmentScalarWhereInput = {
  AND?: InputMaybe<Array<AssignmentScalarWhereInput>>;
  NOT?: InputMaybe<Array<AssignmentScalarWhereInput>>;
  OR?: InputMaybe<Array<AssignmentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  courseId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AssignmentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AssignmentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AssignmentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AssignmentScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  courseId?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  published?: InputMaybe<BoolWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AssignmentSumAggregate = {
  __typename?: 'AssignmentSumAggregate';
  courseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type AssignmentSumOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type AssignmentUpdateInput = {
  assignmentFiles?: InputMaybe<AssignmentFileUpdateManyWithoutAssignmentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  course?: InputMaybe<CourseUpdateOneWithoutAssignmentsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutAssignmentInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssignmentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssignmentUpdateManyWithWhereWithoutCourseInput = {
  data: AssignmentUpdateManyMutationInput;
  where: AssignmentScalarWhereInput;
};

export type AssignmentUpdateManyWithoutCourseInput = {
  connect?: InputMaybe<Array<AssignmentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AssignmentCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<AssignmentCreateWithoutCourseInput>>;
  delete?: InputMaybe<Array<AssignmentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AssignmentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AssignmentWhereUniqueInput>>;
  set?: InputMaybe<Array<AssignmentWhereUniqueInput>>;
  update?: InputMaybe<Array<AssignmentUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany?: InputMaybe<Array<AssignmentUpdateManyWithWhereWithoutCourseInput>>;
  upsert?: InputMaybe<Array<AssignmentUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type AssignmentUpdateOneWithoutAssignmentFilesInput = {
  connect?: InputMaybe<AssignmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AssignmentCreateOrConnectWithoutAssignmentFilesInput>;
  create?: InputMaybe<AssignmentCreateWithoutAssignmentFilesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AssignmentUpdateWithoutAssignmentFilesInput>;
  upsert?: InputMaybe<AssignmentUpsertWithoutAssignmentFilesInput>;
};

export type AssignmentUpdateOneWithoutSubmissionsInput = {
  connect?: InputMaybe<AssignmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AssignmentCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<AssignmentCreateWithoutSubmissionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<AssignmentUpdateWithoutSubmissionsInput>;
  upsert?: InputMaybe<AssignmentUpsertWithoutSubmissionsInput>;
};

export type AssignmentUpdateWithWhereUniqueWithoutCourseInput = {
  data: AssignmentUpdateWithoutCourseInput;
  where: AssignmentWhereUniqueInput;
};

export type AssignmentUpdateWithoutAssignmentFilesInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  course?: InputMaybe<CourseUpdateOneWithoutAssignmentsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutAssignmentInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssignmentUpdateWithoutCourseInput = {
  assignmentFiles?: InputMaybe<AssignmentFileUpdateManyWithoutAssignmentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutAssignmentInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssignmentUpdateWithoutSubmissionsInput = {
  assignmentFiles?: InputMaybe<AssignmentFileUpdateManyWithoutAssignmentInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  course?: InputMaybe<CourseUpdateOneWithoutAssignmentsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AssignmentUpsertWithWhereUniqueWithoutCourseInput = {
  create: AssignmentCreateWithoutCourseInput;
  update: AssignmentUpdateWithoutCourseInput;
  where: AssignmentWhereUniqueInput;
};

export type AssignmentUpsertWithoutAssignmentFilesInput = {
  create: AssignmentCreateWithoutAssignmentFilesInput;
  update: AssignmentUpdateWithoutAssignmentFilesInput;
};

export type AssignmentUpsertWithoutSubmissionsInput = {
  create: AssignmentCreateWithoutSubmissionsInput;
  update: AssignmentUpdateWithoutSubmissionsInput;
};

export type AssignmentWhereInput = {
  AND?: InputMaybe<Array<AssignmentWhereInput>>;
  NOT?: InputMaybe<Array<AssignmentWhereInput>>;
  OR?: InputMaybe<Array<AssignmentWhereInput>>;
  assignmentFiles?: InputMaybe<AssignmentFileListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  course?: InputMaybe<CourseRelationFilter>;
  courseId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AssignmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Course = {
  __typename?: 'Course';
  _count?: Maybe<CourseCount>;
  assignments: Array<Assignment>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  grade: Scalars['Int'];
  id: Scalars['Int'];
  lessons: Array<Lesson>;
  meetings: Array<Meeting>;
  published: Scalars['Boolean'];
  teacher?: Maybe<Teacher>;
  teacherId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  topic?: Maybe<Topic>;
  topicId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};


export type CourseAssignmentsArgs = {
  cursor?: InputMaybe<AssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentWhereInput>;
};


export type CourseLessonsArgs = {
  cursor?: InputMaybe<LessonWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};


export type CourseMeetingsArgs = {
  cursor?: InputMaybe<MeetingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MeetingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MeetingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MeetingWhereInput>;
};

export type CourseAvgAggregate = {
  __typename?: 'CourseAvgAggregate';
  grade?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  teacherId?: Maybe<Scalars['Float']>;
  topicId?: Maybe<Scalars['Float']>;
};

export type CourseAvgOrderByAggregateInput = {
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  teacherId?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
};

export type CourseCount = {
  __typename?: 'CourseCount';
  assignments: Scalars['Int'];
  lessons: Scalars['Int'];
  meetings: Scalars['Int'];
};

export type CourseCountAggregate = {
  __typename?: 'CourseCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  grade: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Int'];
  teacherId: Scalars['Int'];
  title: Scalars['Int'];
  topicId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CourseCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  teacherId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseCreateInput = {
  assignments?: InputMaybe<AssignmentCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  grade: Scalars['Int'];
  lessons?: InputMaybe<LessonCreateNestedManyWithoutCourseInput>;
  meetings?: InputMaybe<MeetingCreateNestedManyWithoutCourseInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  teacher?: InputMaybe<TeacherCreateNestedOneWithoutCoursesInput>;
  title: Scalars['String'];
  topic?: InputMaybe<TopicCreateNestedOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseCreateNestedManyWithoutTeacherInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutTeacherInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutTeacherInput>>;
};

export type CourseCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutTopicInput>>;
};

export type CourseCreateNestedOneWithoutAssignmentsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutAssignmentsInput>;
  create?: InputMaybe<CourseCreateWithoutAssignmentsInput>;
};

export type CourseCreateNestedOneWithoutLessonsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutLessonsInput>;
  create?: InputMaybe<CourseCreateWithoutLessonsInput>;
};

export type CourseCreateNestedOneWithoutMeetingsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutMeetingsInput>;
  create?: InputMaybe<CourseCreateWithoutMeetingsInput>;
};

export type CourseCreateOrConnectWithoutAssignmentsInput = {
  create: CourseCreateWithoutAssignmentsInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutLessonsInput = {
  create: CourseCreateWithoutLessonsInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutMeetingsInput = {
  create: CourseCreateWithoutMeetingsInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutTeacherInput = {
  create: CourseCreateWithoutTeacherInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateOrConnectWithoutTopicInput = {
  create: CourseCreateWithoutTopicInput;
  where: CourseWhereUniqueInput;
};

export type CourseCreateWithoutAssignmentsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  grade: Scalars['Int'];
  lessons?: InputMaybe<LessonCreateNestedManyWithoutCourseInput>;
  meetings?: InputMaybe<MeetingCreateNestedManyWithoutCourseInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  teacher?: InputMaybe<TeacherCreateNestedOneWithoutCoursesInput>;
  title: Scalars['String'];
  topic?: InputMaybe<TopicCreateNestedOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseCreateWithoutLessonsInput = {
  assignments?: InputMaybe<AssignmentCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  grade: Scalars['Int'];
  meetings?: InputMaybe<MeetingCreateNestedManyWithoutCourseInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  teacher?: InputMaybe<TeacherCreateNestedOneWithoutCoursesInput>;
  title: Scalars['String'];
  topic?: InputMaybe<TopicCreateNestedOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseCreateWithoutMeetingsInput = {
  assignments?: InputMaybe<AssignmentCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  grade: Scalars['Int'];
  lessons?: InputMaybe<LessonCreateNestedManyWithoutCourseInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  teacher?: InputMaybe<TeacherCreateNestedOneWithoutCoursesInput>;
  title: Scalars['String'];
  topic?: InputMaybe<TopicCreateNestedOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseCreateWithoutTeacherInput = {
  assignments?: InputMaybe<AssignmentCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  grade: Scalars['Int'];
  lessons?: InputMaybe<LessonCreateNestedManyWithoutCourseInput>;
  meetings?: InputMaybe<MeetingCreateNestedManyWithoutCourseInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  topic?: InputMaybe<TopicCreateNestedOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseCreateWithoutTopicInput = {
  assignments?: InputMaybe<AssignmentCreateNestedManyWithoutCourseInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  grade: Scalars['Int'];
  lessons?: InputMaybe<LessonCreateNestedManyWithoutCourseInput>;
  meetings?: InputMaybe<MeetingCreateNestedManyWithoutCourseInput>;
  published?: InputMaybe<Scalars['Boolean']>;
  teacher?: InputMaybe<TeacherCreateNestedOneWithoutCoursesInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CourseGroupBy = {
  __typename?: 'CourseGroupBy';
  _avg?: Maybe<CourseAvgAggregate>;
  _count?: Maybe<CourseCountAggregate>;
  _max?: Maybe<CourseMaxAggregate>;
  _min?: Maybe<CourseMinAggregate>;
  _sum?: Maybe<CourseSumAggregate>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  grade: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  teacherId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  topicId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type CourseListRelationFilter = {
  every?: InputMaybe<CourseWhereInput>;
  none?: InputMaybe<CourseWhereInput>;
  some?: InputMaybe<CourseWhereInput>;
};

export type CourseMaxAggregate = {
  __typename?: 'CourseMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  teacherId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CourseMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  teacherId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseMinAggregate = {
  __typename?: 'CourseMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  teacherId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CourseMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  teacherId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CourseOrderByWithAggregationInput = {
  _avg?: InputMaybe<CourseAvgOrderByAggregateInput>;
  _count?: InputMaybe<CourseCountOrderByAggregateInput>;
  _max?: InputMaybe<CourseMaxOrderByAggregateInput>;
  _min?: InputMaybe<CourseMinOrderByAggregateInput>;
  _sum?: InputMaybe<CourseSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  teacherId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseOrderByWithRelationInput = {
  assignments?: InputMaybe<AssignmentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessons?: InputMaybe<LessonOrderByRelationAggregateInput>;
  meetings?: InputMaybe<MeetingOrderByRelationAggregateInput>;
  published?: InputMaybe<SortOrder>;
  teacher?: InputMaybe<TeacherOrderByWithRelationInput>;
  teacherId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  topic?: InputMaybe<TopicOrderByWithRelationInput>;
  topicId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CourseRelationFilter = {
  is?: InputMaybe<CourseWhereInput>;
  isNot?: InputMaybe<CourseWhereInput>;
};

export enum CourseScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Grade = 'grade',
  Id = 'id',
  Published = 'published',
  TeacherId = 'teacherId',
  Title = 'title',
  TopicId = 'topicId',
  UpdatedAt = 'updatedAt'
}

export type CourseScalarWhereInput = {
  AND?: InputMaybe<Array<CourseScalarWhereInput>>;
  NOT?: InputMaybe<Array<CourseScalarWhereInput>>;
  OR?: InputMaybe<Array<CourseScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  grade?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  teacherId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CourseScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CourseScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  grade?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  published?: InputMaybe<BoolWithAggregatesFilter>;
  teacherId?: InputMaybe<IntNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  topicId?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CourseSumAggregate = {
  __typename?: 'CourseSumAggregate';
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  teacherId?: Maybe<Scalars['Int']>;
  topicId?: Maybe<Scalars['Int']>;
};

export type CourseSumOrderByAggregateInput = {
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  teacherId?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
};

export type CourseUpdateInput = {
  assignments?: InputMaybe<AssignmentUpdateManyWithoutCourseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lessons?: InputMaybe<LessonUpdateManyWithoutCourseInput>;
  meetings?: InputMaybe<MeetingUpdateManyWithoutCourseInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  teacher?: InputMaybe<TeacherUpdateOneWithoutCoursesInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateManyWithWhereWithoutTeacherInput = {
  data: CourseUpdateManyMutationInput;
  where: CourseScalarWhereInput;
};

export type CourseUpdateManyWithWhereWithoutTopicInput = {
  data: CourseUpdateManyMutationInput;
  where: CourseScalarWhereInput;
};

export type CourseUpdateManyWithoutTeacherInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutTeacherInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutTeacherInput>>;
  delete?: InputMaybe<Array<CourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseUpdateWithWhereUniqueWithoutTeacherInput>>;
  updateMany?: InputMaybe<Array<CourseUpdateManyWithWhereWithoutTeacherInput>>;
  upsert?: InputMaybe<Array<CourseUpsertWithWhereUniqueWithoutTeacherInput>>;
};

export type CourseUpdateManyWithoutTopicInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CourseCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<CourseCreateWithoutTopicInput>>;
  delete?: InputMaybe<Array<CourseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CourseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>;
  set?: InputMaybe<Array<CourseWhereUniqueInput>>;
  update?: InputMaybe<Array<CourseUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<CourseUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<CourseUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type CourseUpdateOneWithoutAssignmentsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutAssignmentsInput>;
  create?: InputMaybe<CourseCreateWithoutAssignmentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CourseUpdateWithoutAssignmentsInput>;
  upsert?: InputMaybe<CourseUpsertWithoutAssignmentsInput>;
};

export type CourseUpdateOneWithoutLessonsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutLessonsInput>;
  create?: InputMaybe<CourseCreateWithoutLessonsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CourseUpdateWithoutLessonsInput>;
  upsert?: InputMaybe<CourseUpsertWithoutLessonsInput>;
};

export type CourseUpdateOneWithoutMeetingsInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CourseCreateOrConnectWithoutMeetingsInput>;
  create?: InputMaybe<CourseCreateWithoutMeetingsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CourseUpdateWithoutMeetingsInput>;
  upsert?: InputMaybe<CourseUpsertWithoutMeetingsInput>;
};

export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
  data: CourseUpdateWithoutTeacherInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateWithWhereUniqueWithoutTopicInput = {
  data: CourseUpdateWithoutTopicInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpdateWithoutAssignmentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lessons?: InputMaybe<LessonUpdateManyWithoutCourseInput>;
  meetings?: InputMaybe<MeetingUpdateManyWithoutCourseInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  teacher?: InputMaybe<TeacherUpdateOneWithoutCoursesInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutLessonsInput = {
  assignments?: InputMaybe<AssignmentUpdateManyWithoutCourseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  meetings?: InputMaybe<MeetingUpdateManyWithoutCourseInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  teacher?: InputMaybe<TeacherUpdateOneWithoutCoursesInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutMeetingsInput = {
  assignments?: InputMaybe<AssignmentUpdateManyWithoutCourseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lessons?: InputMaybe<LessonUpdateManyWithoutCourseInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  teacher?: InputMaybe<TeacherUpdateOneWithoutCoursesInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutTeacherInput = {
  assignments?: InputMaybe<AssignmentUpdateManyWithoutCourseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lessons?: InputMaybe<LessonUpdateManyWithoutCourseInput>;
  meetings?: InputMaybe<MeetingUpdateManyWithoutCourseInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneWithoutCoursesInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpdateWithoutTopicInput = {
  assignments?: InputMaybe<AssignmentUpdateManyWithoutCourseInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lessons?: InputMaybe<LessonUpdateManyWithoutCourseInput>;
  meetings?: InputMaybe<MeetingUpdateManyWithoutCourseInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  teacher?: InputMaybe<TeacherUpdateOneWithoutCoursesInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
  create: CourseCreateWithoutTeacherInput;
  update: CourseUpdateWithoutTeacherInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpsertWithWhereUniqueWithoutTopicInput = {
  create: CourseCreateWithoutTopicInput;
  update: CourseUpdateWithoutTopicInput;
  where: CourseWhereUniqueInput;
};

export type CourseUpsertWithoutAssignmentsInput = {
  create: CourseCreateWithoutAssignmentsInput;
  update: CourseUpdateWithoutAssignmentsInput;
};

export type CourseUpsertWithoutLessonsInput = {
  create: CourseCreateWithoutLessonsInput;
  update: CourseUpdateWithoutLessonsInput;
};

export type CourseUpsertWithoutMeetingsInput = {
  create: CourseCreateWithoutMeetingsInput;
  update: CourseUpdateWithoutMeetingsInput;
};

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>;
  NOT?: InputMaybe<Array<CourseWhereInput>>;
  OR?: InputMaybe<Array<CourseWhereInput>>;
  assignments?: InputMaybe<AssignmentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  grade?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  lessons?: InputMaybe<LessonListRelationFilter>;
  meetings?: InputMaybe<MeetingListRelationFilter>;
  published?: InputMaybe<BoolFilter>;
  teacher?: InputMaybe<TeacherRelationFilter>;
  teacherId?: InputMaybe<IntNullableFilter>;
  title?: InputMaybe<StringFilter>;
  topic?: InputMaybe<TopicRelationFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CourseWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Department = {
  __typename?: 'Department';
  _count?: Maybe<DepartmentCount>;
  id: Scalars['Int'];
  name: Scalars['String'];
  topics: Array<Topic>;
};


export type DepartmentTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<TopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};

export type DepartmentAvgAggregate = {
  __typename?: 'DepartmentAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type DepartmentAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DepartmentCount = {
  __typename?: 'DepartmentCount';
  topics: Scalars['Int'];
};

export type DepartmentCountAggregate = {
  __typename?: 'DepartmentCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type DepartmentCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DepartmentCreateInput = {
  name: Scalars['String'];
  topics?: InputMaybe<TopicCreateNestedManyWithoutDepartmentInput>;
};

export type DepartmentCreateNestedOneWithoutTopicsInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutTopicsInput>;
  create?: InputMaybe<DepartmentCreateWithoutTopicsInput>;
};

export type DepartmentCreateOrConnectWithoutTopicsInput = {
  create: DepartmentCreateWithoutTopicsInput;
  where: DepartmentWhereUniqueInput;
};

export type DepartmentCreateWithoutTopicsInput = {
  name: Scalars['String'];
};

export type DepartmentGroupBy = {
  __typename?: 'DepartmentGroupBy';
  _avg?: Maybe<DepartmentAvgAggregate>;
  _count?: Maybe<DepartmentCountAggregate>;
  _max?: Maybe<DepartmentMaxAggregate>;
  _min?: Maybe<DepartmentMinAggregate>;
  _sum?: Maybe<DepartmentSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type DepartmentMaxAggregate = {
  __typename?: 'DepartmentMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type DepartmentMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DepartmentMinAggregate = {
  __typename?: 'DepartmentMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type DepartmentMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DepartmentOrderByWithAggregationInput = {
  _avg?: InputMaybe<DepartmentAvgOrderByAggregateInput>;
  _count?: InputMaybe<DepartmentCountOrderByAggregateInput>;
  _max?: InputMaybe<DepartmentMaxOrderByAggregateInput>;
  _min?: InputMaybe<DepartmentMinOrderByAggregateInput>;
  _sum?: InputMaybe<DepartmentSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type DepartmentOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  topics?: InputMaybe<TopicOrderByRelationAggregateInput>;
};

export type DepartmentRelationFilter = {
  is?: InputMaybe<DepartmentWhereInput>;
  isNot?: InputMaybe<DepartmentWhereInput>;
};

export enum DepartmentScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type DepartmentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<DepartmentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<DepartmentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<DepartmentScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type DepartmentSumAggregate = {
  __typename?: 'DepartmentSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type DepartmentSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DepartmentUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  topics?: InputMaybe<TopicUpdateManyWithoutDepartmentInput>;
};

export type DepartmentUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DepartmentUpdateOneWithoutTopicsInput = {
  connect?: InputMaybe<DepartmentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DepartmentCreateOrConnectWithoutTopicsInput>;
  create?: InputMaybe<DepartmentCreateWithoutTopicsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<DepartmentUpdateWithoutTopicsInput>;
  upsert?: InputMaybe<DepartmentUpsertWithoutTopicsInput>;
};

export type DepartmentUpdateWithoutTopicsInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DepartmentUpsertWithoutTopicsInput = {
  create: DepartmentCreateWithoutTopicsInput;
  update: DepartmentUpdateWithoutTopicsInput;
};

export type DepartmentWhereInput = {
  AND?: InputMaybe<Array<DepartmentWhereInput>>;
  NOT?: InputMaybe<Array<DepartmentWhereInput>>;
  OR?: InputMaybe<Array<DepartmentWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  topics?: InputMaybe<TopicListRelationFilter>;
};

export type DepartmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Lesson = {
  __typename?: 'Lesson';
  _count?: Maybe<LessonCount>;
  content: Scalars['String'];
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lessonFiles: Array<LessonFile>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type LessonLessonFilesArgs = {
  cursor?: InputMaybe<LessonFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonFileWhereInput>;
};

export type LessonAvgAggregate = {
  __typename?: 'LessonAvgAggregate';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type LessonAvgOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type LessonCount = {
  __typename?: 'LessonCount';
  lessonFiles: Scalars['Int'];
};

export type LessonCountAggregate = {
  __typename?: 'LessonCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  courseId: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  published: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type LessonCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonCreateInput = {
  content: Scalars['String'];
  course?: InputMaybe<CourseCreateNestedOneWithoutLessonsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  lessonFiles?: InputMaybe<LessonFileCreateNestedManyWithoutLessonInput>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LessonCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LessonCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<LessonCreateWithoutCourseInput>>;
};

export type LessonCreateNestedOneWithoutLessonFilesInput = {
  connect?: InputMaybe<LessonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LessonCreateOrConnectWithoutLessonFilesInput>;
  create?: InputMaybe<LessonCreateWithoutLessonFilesInput>;
};

export type LessonCreateOrConnectWithoutCourseInput = {
  create: LessonCreateWithoutCourseInput;
  where: LessonWhereUniqueInput;
};

export type LessonCreateOrConnectWithoutLessonFilesInput = {
  create: LessonCreateWithoutLessonFilesInput;
  where: LessonWhereUniqueInput;
};

export type LessonCreateWithoutCourseInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  lessonFiles?: InputMaybe<LessonFileCreateNestedManyWithoutLessonInput>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LessonCreateWithoutLessonFilesInput = {
  content: Scalars['String'];
  course?: InputMaybe<CourseCreateNestedOneWithoutLessonsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LessonFile = {
  __typename?: 'LessonFile';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lesson?: Maybe<Lesson>;
  lessonId?: Maybe<Scalars['Int']>;
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LessonFileAvgAggregate = {
  __typename?: 'LessonFileAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  lessonId?: Maybe<Scalars['Float']>;
};

export type LessonFileAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
};

export type LessonFileCountAggregate = {
  __typename?: 'LessonFileCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  lessonId: Scalars['Int'];
  link: Scalars['Int'];
  name: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type LessonFileCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonFileCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  lesson?: InputMaybe<LessonCreateNestedOneWithoutLessonFilesInput>;
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LessonFileCreateNestedManyWithoutLessonInput = {
  connect?: InputMaybe<Array<LessonFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LessonFileCreateOrConnectWithoutLessonInput>>;
  create?: InputMaybe<Array<LessonFileCreateWithoutLessonInput>>;
};

export type LessonFileCreateOrConnectWithoutLessonInput = {
  create: LessonFileCreateWithoutLessonInput;
  where: LessonFileWhereUniqueInput;
};

export type LessonFileCreateWithoutLessonInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type LessonFileGroupBy = {
  __typename?: 'LessonFileGroupBy';
  _avg?: Maybe<LessonFileAvgAggregate>;
  _count?: Maybe<LessonFileCountAggregate>;
  _max?: Maybe<LessonFileMaxAggregate>;
  _min?: Maybe<LessonFileMinAggregate>;
  _sum?: Maybe<LessonFileSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  lessonId?: Maybe<Scalars['Int']>;
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LessonFileListRelationFilter = {
  every?: InputMaybe<LessonFileWhereInput>;
  none?: InputMaybe<LessonFileWhereInput>;
  some?: InputMaybe<LessonFileWhereInput>;
};

export type LessonFileMaxAggregate = {
  __typename?: 'LessonFileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lessonId?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonFileMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonFileMinAggregate = {
  __typename?: 'LessonFileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  lessonId?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonFileMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LessonFileOrderByWithAggregationInput = {
  _avg?: InputMaybe<LessonFileAvgOrderByAggregateInput>;
  _count?: InputMaybe<LessonFileCountOrderByAggregateInput>;
  _max?: InputMaybe<LessonFileMaxOrderByAggregateInput>;
  _min?: InputMaybe<LessonFileMinOrderByAggregateInput>;
  _sum?: InputMaybe<LessonFileSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonFileOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lesson?: InputMaybe<LessonOrderByWithRelationInput>;
  lessonId?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum LessonFileScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  LessonId = 'lessonId',
  Link = 'link',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type LessonFileScalarWhereInput = {
  AND?: InputMaybe<Array<LessonFileScalarWhereInput>>;
  NOT?: InputMaybe<Array<LessonFileScalarWhereInput>>;
  OR?: InputMaybe<Array<LessonFileScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lessonId?: InputMaybe<IntNullableFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LessonFileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LessonFileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LessonFileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LessonFileScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lessonId?: InputMaybe<IntNullableWithAggregatesFilter>;
  link?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type LessonFileSumAggregate = {
  __typename?: 'LessonFileSumAggregate';
  id?: Maybe<Scalars['Int']>;
  lessonId?: Maybe<Scalars['Int']>;
};

export type LessonFileSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  lessonId?: InputMaybe<SortOrder>;
};

export type LessonFileUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lesson?: InputMaybe<LessonUpdateOneWithoutLessonFilesInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LessonFileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LessonFileUpdateManyWithWhereWithoutLessonInput = {
  data: LessonFileUpdateManyMutationInput;
  where: LessonFileScalarWhereInput;
};

export type LessonFileUpdateManyWithoutLessonInput = {
  connect?: InputMaybe<Array<LessonFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LessonFileCreateOrConnectWithoutLessonInput>>;
  create?: InputMaybe<Array<LessonFileCreateWithoutLessonInput>>;
  delete?: InputMaybe<Array<LessonFileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LessonFileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LessonFileWhereUniqueInput>>;
  set?: InputMaybe<Array<LessonFileWhereUniqueInput>>;
  update?: InputMaybe<Array<LessonFileUpdateWithWhereUniqueWithoutLessonInput>>;
  updateMany?: InputMaybe<Array<LessonFileUpdateManyWithWhereWithoutLessonInput>>;
  upsert?: InputMaybe<Array<LessonFileUpsertWithWhereUniqueWithoutLessonInput>>;
};

export type LessonFileUpdateWithWhereUniqueWithoutLessonInput = {
  data: LessonFileUpdateWithoutLessonInput;
  where: LessonFileWhereUniqueInput;
};

export type LessonFileUpdateWithoutLessonInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LessonFileUpsertWithWhereUniqueWithoutLessonInput = {
  create: LessonFileCreateWithoutLessonInput;
  update: LessonFileUpdateWithoutLessonInput;
  where: LessonFileWhereUniqueInput;
};

export type LessonFileWhereInput = {
  AND?: InputMaybe<Array<LessonFileWhereInput>>;
  NOT?: InputMaybe<Array<LessonFileWhereInput>>;
  OR?: InputMaybe<Array<LessonFileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  lesson?: InputMaybe<LessonRelationFilter>;
  lessonId?: InputMaybe<IntNullableFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LessonFileWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type LessonGroupBy = {
  __typename?: 'LessonGroupBy';
  _avg?: Maybe<LessonAvgAggregate>;
  _count?: Maybe<LessonCountAggregate>;
  _max?: Maybe<LessonMaxAggregate>;
  _min?: Maybe<LessonMinAggregate>;
  _sum?: Maybe<LessonSumAggregate>;
  content: Scalars['String'];
  courseId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type LessonListRelationFilter = {
  every?: InputMaybe<LessonWhereInput>;
  none?: InputMaybe<LessonWhereInput>;
  some?: InputMaybe<LessonWhereInput>;
};

export type LessonMaxAggregate = {
  __typename?: 'LessonMaxAggregate';
  content?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonMinAggregate = {
  __typename?: 'LessonMinAggregate';
  content?: Maybe<Scalars['String']>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type LessonMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type LessonOrderByWithAggregationInput = {
  _avg?: InputMaybe<LessonAvgOrderByAggregateInput>;
  _count?: InputMaybe<LessonCountOrderByAggregateInput>;
  _max?: InputMaybe<LessonMaxOrderByAggregateInput>;
  _min?: InputMaybe<LessonMinOrderByAggregateInput>;
  _sum?: InputMaybe<LessonSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  course?: InputMaybe<CourseOrderByWithRelationInput>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lessonFiles?: InputMaybe<LessonFileOrderByRelationAggregateInput>;
  published?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type LessonRelationFilter = {
  is?: InputMaybe<LessonWhereInput>;
  isNot?: InputMaybe<LessonWhereInput>;
};

export enum LessonScalarFieldEnum {
  Content = 'content',
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type LessonScalarWhereInput = {
  AND?: InputMaybe<Array<LessonScalarWhereInput>>;
  NOT?: InputMaybe<Array<LessonScalarWhereInput>>;
  OR?: InputMaybe<Array<LessonScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  courseId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LessonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LessonScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LessonScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LessonScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  courseId?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  published?: InputMaybe<BoolWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type LessonSumAggregate = {
  __typename?: 'LessonSumAggregate';
  courseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type LessonSumOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type LessonUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  course?: InputMaybe<CourseUpdateOneWithoutLessonsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lessonFiles?: InputMaybe<LessonFileUpdateManyWithoutLessonInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LessonUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LessonUpdateManyWithWhereWithoutCourseInput = {
  data: LessonUpdateManyMutationInput;
  where: LessonScalarWhereInput;
};

export type LessonUpdateManyWithoutCourseInput = {
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LessonCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<LessonCreateWithoutCourseInput>>;
  delete?: InputMaybe<Array<LessonWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LessonScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LessonWhereUniqueInput>>;
  set?: InputMaybe<Array<LessonWhereUniqueInput>>;
  update?: InputMaybe<Array<LessonUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany?: InputMaybe<Array<LessonUpdateManyWithWhereWithoutCourseInput>>;
  upsert?: InputMaybe<Array<LessonUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type LessonUpdateOneWithoutLessonFilesInput = {
  connect?: InputMaybe<LessonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LessonCreateOrConnectWithoutLessonFilesInput>;
  create?: InputMaybe<LessonCreateWithoutLessonFilesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<LessonUpdateWithoutLessonFilesInput>;
  upsert?: InputMaybe<LessonUpsertWithoutLessonFilesInput>;
};

export type LessonUpdateWithWhereUniqueWithoutCourseInput = {
  data: LessonUpdateWithoutCourseInput;
  where: LessonWhereUniqueInput;
};

export type LessonUpdateWithoutCourseInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  lessonFiles?: InputMaybe<LessonFileUpdateManyWithoutLessonInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LessonUpdateWithoutLessonFilesInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  course?: InputMaybe<CourseUpdateOneWithoutLessonsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  published?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type LessonUpsertWithWhereUniqueWithoutCourseInput = {
  create: LessonCreateWithoutCourseInput;
  update: LessonUpdateWithoutCourseInput;
  where: LessonWhereUniqueInput;
};

export type LessonUpsertWithoutLessonFilesInput = {
  create: LessonCreateWithoutLessonFilesInput;
  update: LessonUpdateWithoutLessonFilesInput;
};

export type LessonWhereInput = {
  AND?: InputMaybe<Array<LessonWhereInput>>;
  NOT?: InputMaybe<Array<LessonWhereInput>>;
  OR?: InputMaybe<Array<LessonWhereInput>>;
  content?: InputMaybe<StringFilter>;
  course?: InputMaybe<CourseRelationFilter>;
  courseId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  lessonFiles?: InputMaybe<LessonFileListRelationFilter>;
  published?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type LessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Meeting = {
  __typename?: 'Meeting';
  course?: Maybe<Course>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  duration: Scalars['DateTime'];
  id: Scalars['Int'];
  link?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MeetingAvgAggregate = {
  __typename?: 'MeetingAvgAggregate';
  courseId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type MeetingAvgOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MeetingCountAggregate = {
  __typename?: 'MeetingCountAggregate';
  _all: Scalars['Int'];
  courseId: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  description: Scalars['Int'];
  duration: Scalars['Int'];
  id: Scalars['Int'];
  link: Scalars['Int'];
  startTime: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type MeetingCountOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MeetingCreateInput = {
  course?: InputMaybe<CourseCreateNestedOneWithoutMeetingsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  duration: Scalars['DateTime'];
  link?: InputMaybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MeetingCreateNestedManyWithoutCourseInput = {
  connect?: InputMaybe<Array<MeetingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MeetingCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<MeetingCreateWithoutCourseInput>>;
};

export type MeetingCreateOrConnectWithoutCourseInput = {
  create: MeetingCreateWithoutCourseInput;
  where: MeetingWhereUniqueInput;
};

export type MeetingCreateWithoutCourseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  duration: Scalars['DateTime'];
  link?: InputMaybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MeetingGroupBy = {
  __typename?: 'MeetingGroupBy';
  _avg?: Maybe<MeetingAvgAggregate>;
  _count?: Maybe<MeetingCountAggregate>;
  _max?: Maybe<MeetingMaxAggregate>;
  _min?: Maybe<MeetingMinAggregate>;
  _sum?: Maybe<MeetingSumAggregate>;
  courseId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  duration: Scalars['DateTime'];
  id: Scalars['Int'];
  link?: Maybe<Scalars['String']>;
  startTime: Scalars['DateTime'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MeetingListRelationFilter = {
  every?: InputMaybe<MeetingWhereInput>;
  none?: InputMaybe<MeetingWhereInput>;
  some?: InputMaybe<MeetingWhereInput>;
};

export type MeetingMaxAggregate = {
  __typename?: 'MeetingMaxAggregate';
  courseId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MeetingMaxOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MeetingMinAggregate = {
  __typename?: 'MeetingMinAggregate';
  courseId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MeetingMinOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MeetingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MeetingOrderByWithAggregationInput = {
  _avg?: InputMaybe<MeetingAvgOrderByAggregateInput>;
  _count?: InputMaybe<MeetingCountOrderByAggregateInput>;
  _max?: InputMaybe<MeetingMaxOrderByAggregateInput>;
  _min?: InputMaybe<MeetingMinOrderByAggregateInput>;
  _sum?: InputMaybe<MeetingSumOrderByAggregateInput>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MeetingOrderByWithRelationInput = {
  course?: InputMaybe<CourseOrderByWithRelationInput>;
  courseId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  duration?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum MeetingScalarFieldEnum {
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  Date = 'date',
  Description = 'description',
  Duration = 'duration',
  Id = 'id',
  Link = 'link',
  StartTime = 'startTime',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type MeetingScalarWhereInput = {
  AND?: InputMaybe<Array<MeetingScalarWhereInput>>;
  NOT?: InputMaybe<Array<MeetingScalarWhereInput>>;
  OR?: InputMaybe<Array<MeetingScalarWhereInput>>;
  courseId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  duration?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  link?: InputMaybe<StringNullableFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MeetingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<MeetingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<MeetingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<MeetingScalarWhereWithAggregatesInput>>;
  courseId?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  duration?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  link?: InputMaybe<StringNullableWithAggregatesFilter>;
  startTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MeetingSumAggregate = {
  __typename?: 'MeetingSumAggregate';
  courseId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type MeetingSumOrderByAggregateInput = {
  courseId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type MeetingUpdateInput = {
  course?: InputMaybe<CourseUpdateOneWithoutMeetingsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  duration?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MeetingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  duration?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MeetingUpdateManyWithWhereWithoutCourseInput = {
  data: MeetingUpdateManyMutationInput;
  where: MeetingScalarWhereInput;
};

export type MeetingUpdateManyWithoutCourseInput = {
  connect?: InputMaybe<Array<MeetingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<MeetingCreateOrConnectWithoutCourseInput>>;
  create?: InputMaybe<Array<MeetingCreateWithoutCourseInput>>;
  delete?: InputMaybe<Array<MeetingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<MeetingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<MeetingWhereUniqueInput>>;
  set?: InputMaybe<Array<MeetingWhereUniqueInput>>;
  update?: InputMaybe<Array<MeetingUpdateWithWhereUniqueWithoutCourseInput>>;
  updateMany?: InputMaybe<Array<MeetingUpdateManyWithWhereWithoutCourseInput>>;
  upsert?: InputMaybe<Array<MeetingUpsertWithWhereUniqueWithoutCourseInput>>;
};

export type MeetingUpdateWithWhereUniqueWithoutCourseInput = {
  data: MeetingUpdateWithoutCourseInput;
  where: MeetingWhereUniqueInput;
};

export type MeetingUpdateWithoutCourseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  duration?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  startTime?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MeetingUpsertWithWhereUniqueWithoutCourseInput = {
  create: MeetingCreateWithoutCourseInput;
  update: MeetingUpdateWithoutCourseInput;
  where: MeetingWhereUniqueInput;
};

export type MeetingWhereInput = {
  AND?: InputMaybe<Array<MeetingWhereInput>>;
  NOT?: InputMaybe<Array<MeetingWhereInput>>;
  OR?: InputMaybe<Array<MeetingWhereInput>>;
  course?: InputMaybe<CourseRelationFilter>;
  courseId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  duration?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  link?: InputMaybe<StringNullableFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MeetingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmin: Admin;
  createAssignment: Assignment;
  createAssignmentFile: AssignmentFile;
  createCourse: Course;
  createDepartment: Department;
  createLesson: Lesson;
  createLessonFile: LessonFile;
  createMeeting: Meeting;
  createStudent: Student;
  createSubmission: Submission;
  createSubmissionFile: SubmissionFile;
  createTeacher: Teacher;
  createTopic: Topic;
  createUser: User;
  deleteAdmin?: Maybe<Admin>;
  deleteAssignment?: Maybe<Assignment>;
  deleteAssignmentFile?: Maybe<AssignmentFile>;
  deleteCourse?: Maybe<Course>;
  deleteDepartment?: Maybe<Department>;
  deleteLesson?: Maybe<Lesson>;
  deleteLessonFile?: Maybe<LessonFile>;
  deleteManyAdmin: AffectedRowsOutput;
  deleteManyAssignment: AffectedRowsOutput;
  deleteManyAssignmentFile: AffectedRowsOutput;
  deleteManyCourse: AffectedRowsOutput;
  deleteManyDepartment: AffectedRowsOutput;
  deleteManyLesson: AffectedRowsOutput;
  deleteManyLessonFile: AffectedRowsOutput;
  deleteManyMeeting: AffectedRowsOutput;
  deleteManyStudent: AffectedRowsOutput;
  deleteManySubmission: AffectedRowsOutput;
  deleteManySubmissionFile: AffectedRowsOutput;
  deleteManyTeacher: AffectedRowsOutput;
  deleteManyTopic: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteMeeting?: Maybe<Meeting>;
  deleteStudent?: Maybe<Student>;
  deleteSubmission?: Maybe<Submission>;
  deleteSubmissionFile?: Maybe<SubmissionFile>;
  deleteTeacher?: Maybe<Teacher>;
  deleteTopic?: Maybe<Topic>;
  deleteUser?: Maybe<User>;
  updateAdmin?: Maybe<Admin>;
  updateAssignment?: Maybe<Assignment>;
  updateAssignmentFile?: Maybe<AssignmentFile>;
  updateCourse?: Maybe<Course>;
  updateDepartment?: Maybe<Department>;
  updateLesson?: Maybe<Lesson>;
  updateLessonFile?: Maybe<LessonFile>;
  updateManyAdmin: AffectedRowsOutput;
  updateManyAssignment: AffectedRowsOutput;
  updateManyAssignmentFile: AffectedRowsOutput;
  updateManyCourse: AffectedRowsOutput;
  updateManyDepartment: AffectedRowsOutput;
  updateManyLesson: AffectedRowsOutput;
  updateManyLessonFile: AffectedRowsOutput;
  updateManyMeeting: AffectedRowsOutput;
  updateManyStudent: AffectedRowsOutput;
  updateManySubmission: AffectedRowsOutput;
  updateManySubmissionFile: AffectedRowsOutput;
  updateManyTeacher: AffectedRowsOutput;
  updateManyTopic: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateMeeting?: Maybe<Meeting>;
  updateStudent?: Maybe<Student>;
  updateSubmission?: Maybe<Submission>;
  updateSubmissionFile?: Maybe<SubmissionFile>;
  updateTeacher?: Maybe<Teacher>;
  updateTopic?: Maybe<Topic>;
  updateUser?: Maybe<User>;
  upsertAdmin: Admin;
  upsertAssignment: Assignment;
  upsertAssignmentFile: AssignmentFile;
  upsertCourse: Course;
  upsertDepartment: Department;
  upsertLesson: Lesson;
  upsertLessonFile: LessonFile;
  upsertMeeting: Meeting;
  upsertStudent: Student;
  upsertSubmission: Submission;
  upsertSubmissionFile: SubmissionFile;
  upsertTeacher: Teacher;
  upsertTopic: Topic;
  upsertUser: User;
};


export type MutationCreateAdminArgs = {
  data: AdminCreateInput;
};


export type MutationCreateAssignmentArgs = {
  data: AssignmentCreateInput;
};


export type MutationCreateAssignmentFileArgs = {
  data: AssignmentFileCreateInput;
};


export type MutationCreateCourseArgs = {
  data: CourseCreateInput;
};


export type MutationCreateDepartmentArgs = {
  data: DepartmentCreateInput;
};


export type MutationCreateLessonArgs = {
  data: LessonCreateInput;
};


export type MutationCreateLessonFileArgs = {
  data: LessonFileCreateInput;
};


export type MutationCreateMeetingArgs = {
  data: MeetingCreateInput;
};


export type MutationCreateStudentArgs = {
  data: StudentCreateInput;
};


export type MutationCreateSubmissionArgs = {
  data: SubmissionCreateInput;
};


export type MutationCreateSubmissionFileArgs = {
  data: SubmissionFileCreateInput;
};


export type MutationCreateTeacherArgs = {
  data: TeacherCreateInput;
};


export type MutationCreateTopicArgs = {
  data: TopicCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationDeleteAssignmentArgs = {
  where: AssignmentWhereUniqueInput;
};


export type MutationDeleteAssignmentFileArgs = {
  where: AssignmentFileWhereUniqueInput;
};


export type MutationDeleteCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type MutationDeleteDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};


export type MutationDeleteLessonArgs = {
  where: LessonWhereUniqueInput;
};


export type MutationDeleteLessonFileArgs = {
  where: LessonFileWhereUniqueInput;
};


export type MutationDeleteManyAdminArgs = {
  where?: InputMaybe<AdminWhereInput>;
};


export type MutationDeleteManyAssignmentArgs = {
  where?: InputMaybe<AssignmentWhereInput>;
};


export type MutationDeleteManyAssignmentFileArgs = {
  where?: InputMaybe<AssignmentFileWhereInput>;
};


export type MutationDeleteManyCourseArgs = {
  where?: InputMaybe<CourseWhereInput>;
};


export type MutationDeleteManyDepartmentArgs = {
  where?: InputMaybe<DepartmentWhereInput>;
};


export type MutationDeleteManyLessonArgs = {
  where?: InputMaybe<LessonWhereInput>;
};


export type MutationDeleteManyLessonFileArgs = {
  where?: InputMaybe<LessonFileWhereInput>;
};


export type MutationDeleteManyMeetingArgs = {
  where?: InputMaybe<MeetingWhereInput>;
};


export type MutationDeleteManyStudentArgs = {
  where?: InputMaybe<StudentWhereInput>;
};


export type MutationDeleteManySubmissionArgs = {
  where?: InputMaybe<SubmissionWhereInput>;
};


export type MutationDeleteManySubmissionFileArgs = {
  where?: InputMaybe<SubmissionFileWhereInput>;
};


export type MutationDeleteManyTeacherArgs = {
  where?: InputMaybe<TeacherWhereInput>;
};


export type MutationDeleteManyTopicArgs = {
  where?: InputMaybe<TopicWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteMeetingArgs = {
  where: MeetingWhereUniqueInput;
};


export type MutationDeleteStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type MutationDeleteSubmissionArgs = {
  where: SubmissionWhereUniqueInput;
};


export type MutationDeleteSubmissionFileArgs = {
  where: SubmissionFileWhereUniqueInput;
};


export type MutationDeleteTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type MutationDeleteTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateAdminArgs = {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpdateAssignmentArgs = {
  data: AssignmentUpdateInput;
  where: AssignmentWhereUniqueInput;
};


export type MutationUpdateAssignmentFileArgs = {
  data: AssignmentFileUpdateInput;
  where: AssignmentFileWhereUniqueInput;
};


export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpdateDepartmentArgs = {
  data: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
};


export type MutationUpdateLessonArgs = {
  data: LessonUpdateInput;
  where: LessonWhereUniqueInput;
};


export type MutationUpdateLessonFileArgs = {
  data: LessonFileUpdateInput;
  where: LessonFileWhereUniqueInput;
};


export type MutationUpdateManyAdminArgs = {
  data: AdminUpdateManyMutationInput;
  where?: InputMaybe<AdminWhereInput>;
};


export type MutationUpdateManyAssignmentArgs = {
  data: AssignmentUpdateManyMutationInput;
  where?: InputMaybe<AssignmentWhereInput>;
};


export type MutationUpdateManyAssignmentFileArgs = {
  data: AssignmentFileUpdateManyMutationInput;
  where?: InputMaybe<AssignmentFileWhereInput>;
};


export type MutationUpdateManyCourseArgs = {
  data: CourseUpdateManyMutationInput;
  where?: InputMaybe<CourseWhereInput>;
};


export type MutationUpdateManyDepartmentArgs = {
  data: DepartmentUpdateManyMutationInput;
  where?: InputMaybe<DepartmentWhereInput>;
};


export type MutationUpdateManyLessonArgs = {
  data: LessonUpdateManyMutationInput;
  where?: InputMaybe<LessonWhereInput>;
};


export type MutationUpdateManyLessonFileArgs = {
  data: LessonFileUpdateManyMutationInput;
  where?: InputMaybe<LessonFileWhereInput>;
};


export type MutationUpdateManyMeetingArgs = {
  data: MeetingUpdateManyMutationInput;
  where?: InputMaybe<MeetingWhereInput>;
};


export type MutationUpdateManyStudentArgs = {
  data: StudentUpdateManyMutationInput;
  where?: InputMaybe<StudentWhereInput>;
};


export type MutationUpdateManySubmissionArgs = {
  data: SubmissionUpdateManyMutationInput;
  where?: InputMaybe<SubmissionWhereInput>;
};


export type MutationUpdateManySubmissionFileArgs = {
  data: SubmissionFileUpdateManyMutationInput;
  where?: InputMaybe<SubmissionFileWhereInput>;
};


export type MutationUpdateManyTeacherArgs = {
  data: TeacherUpdateManyMutationInput;
  where?: InputMaybe<TeacherWhereInput>;
};


export type MutationUpdateManyTopicArgs = {
  data: TopicUpdateManyMutationInput;
  where?: InputMaybe<TopicWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateMeetingArgs = {
  data: MeetingUpdateInput;
  where: MeetingWhereUniqueInput;
};


export type MutationUpdateStudentArgs = {
  data: StudentUpdateInput;
  where: StudentWhereUniqueInput;
};


export type MutationUpdateSubmissionArgs = {
  data: SubmissionUpdateInput;
  where: SubmissionWhereUniqueInput;
};


export type MutationUpdateSubmissionFileArgs = {
  data: SubmissionFileUpdateInput;
  where: SubmissionFileWhereUniqueInput;
};


export type MutationUpdateTeacherArgs = {
  data: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
};


export type MutationUpdateTopicArgs = {
  data: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertAdminArgs = {
  create: AdminCreateInput;
  update: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpsertAssignmentArgs = {
  create: AssignmentCreateInput;
  update: AssignmentUpdateInput;
  where: AssignmentWhereUniqueInput;
};


export type MutationUpsertAssignmentFileArgs = {
  create: AssignmentFileCreateInput;
  update: AssignmentFileUpdateInput;
  where: AssignmentFileWhereUniqueInput;
};


export type MutationUpsertCourseArgs = {
  create: CourseCreateInput;
  update: CourseUpdateInput;
  where: CourseWhereUniqueInput;
};


export type MutationUpsertDepartmentArgs = {
  create: DepartmentCreateInput;
  update: DepartmentUpdateInput;
  where: DepartmentWhereUniqueInput;
};


export type MutationUpsertLessonArgs = {
  create: LessonCreateInput;
  update: LessonUpdateInput;
  where: LessonWhereUniqueInput;
};


export type MutationUpsertLessonFileArgs = {
  create: LessonFileCreateInput;
  update: LessonFileUpdateInput;
  where: LessonFileWhereUniqueInput;
};


export type MutationUpsertMeetingArgs = {
  create: MeetingCreateInput;
  update: MeetingUpdateInput;
  where: MeetingWhereUniqueInput;
};


export type MutationUpsertStudentArgs = {
  create: StudentCreateInput;
  update: StudentUpdateInput;
  where: StudentWhereUniqueInput;
};


export type MutationUpsertSubmissionArgs = {
  create: SubmissionCreateInput;
  update: SubmissionUpdateInput;
  where: SubmissionWhereUniqueInput;
};


export type MutationUpsertSubmissionFileArgs = {
  create: SubmissionFileCreateInput;
  update: SubmissionFileUpdateInput;
  where: SubmissionFileWhereUniqueInput;
};


export type MutationUpsertTeacherArgs = {
  create: TeacherCreateInput;
  update: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
};


export type MutationUpsertTopicArgs = {
  create: TopicCreateInput;
  update: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<Admin>;
  admins: Array<Admin>;
  aggregateAdmin: AggregateAdmin;
  aggregateAssignment: AggregateAssignment;
  aggregateAssignmentFile: AggregateAssignmentFile;
  aggregateCourse: AggregateCourse;
  aggregateDepartment: AggregateDepartment;
  aggregateLesson: AggregateLesson;
  aggregateLessonFile: AggregateLessonFile;
  aggregateMeeting: AggregateMeeting;
  aggregateStudent: AggregateStudent;
  aggregateSubmission: AggregateSubmission;
  aggregateSubmissionFile: AggregateSubmissionFile;
  aggregateTeacher: AggregateTeacher;
  aggregateTopic: AggregateTopic;
  aggregateUser: AggregateUser;
  assignment?: Maybe<Assignment>;
  assignmentFile?: Maybe<AssignmentFile>;
  assignmentFiles: Array<AssignmentFile>;
  assignments: Array<Assignment>;
  course?: Maybe<Course>;
  courses: Array<Course>;
  department?: Maybe<Department>;
  departments: Array<Department>;
  findFirstAdmin?: Maybe<Admin>;
  findFirstAssignment?: Maybe<Assignment>;
  findFirstAssignmentFile?: Maybe<AssignmentFile>;
  findFirstCourse?: Maybe<Course>;
  findFirstDepartment?: Maybe<Department>;
  findFirstLesson?: Maybe<Lesson>;
  findFirstLessonFile?: Maybe<LessonFile>;
  findFirstMeeting?: Maybe<Meeting>;
  findFirstStudent?: Maybe<Student>;
  findFirstSubmission?: Maybe<Submission>;
  findFirstSubmissionFile?: Maybe<SubmissionFile>;
  findFirstTeacher?: Maybe<Teacher>;
  findFirstTopic?: Maybe<Topic>;
  findFirstUser?: Maybe<User>;
  groupByAdmin: Array<AdminGroupBy>;
  groupByAssignment: Array<AssignmentGroupBy>;
  groupByAssignmentFile: Array<AssignmentFileGroupBy>;
  groupByCourse: Array<CourseGroupBy>;
  groupByDepartment: Array<DepartmentGroupBy>;
  groupByLesson: Array<LessonGroupBy>;
  groupByLessonFile: Array<LessonFileGroupBy>;
  groupByMeeting: Array<MeetingGroupBy>;
  groupByStudent: Array<StudentGroupBy>;
  groupBySubmission: Array<SubmissionGroupBy>;
  groupBySubmissionFile: Array<SubmissionFileGroupBy>;
  groupByTeacher: Array<TeacherGroupBy>;
  groupByTopic: Array<TopicGroupBy>;
  groupByUser: Array<UserGroupBy>;
  lesson?: Maybe<Lesson>;
  lessonFile?: Maybe<LessonFile>;
  lessonFiles: Array<LessonFile>;
  lessons: Array<Lesson>;
  meeting?: Maybe<Meeting>;
  meetings: Array<Meeting>;
  student?: Maybe<Student>;
  students: Array<Student>;
  submission?: Maybe<Submission>;
  submissionFile?: Maybe<SubmissionFile>;
  submissionFiles: Array<SubmissionFile>;
  submissions: Array<Submission>;
  teacher?: Maybe<Teacher>;
  teachers: Array<Teacher>;
  topic?: Maybe<Topic>;
  topics: Array<Topic>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryAggregateAdminArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryAggregateAssignmentArgs = {
  cursor?: InputMaybe<AssignmentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentWhereInput>;
};


export type QueryAggregateAssignmentFileArgs = {
  cursor?: InputMaybe<AssignmentFileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AssignmentFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentFileWhereInput>;
};


export type QueryAggregateCourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryAggregateDepartmentArgs = {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
};


export type QueryAggregateLessonArgs = {
  cursor?: InputMaybe<LessonWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LessonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};


export type QueryAggregateLessonFileArgs = {
  cursor?: InputMaybe<LessonFileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LessonFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonFileWhereInput>;
};


export type QueryAggregateMeetingArgs = {
  cursor?: InputMaybe<MeetingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<MeetingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MeetingWhereInput>;
};


export type QueryAggregateStudentArgs = {
  cursor?: InputMaybe<StudentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StudentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentWhereInput>;
};


export type QueryAggregateSubmissionArgs = {
  cursor?: InputMaybe<SubmissionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SubmissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionWhereInput>;
};


export type QueryAggregateSubmissionFileArgs = {
  cursor?: InputMaybe<SubmissionFileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SubmissionFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionFileWhereInput>;
};


export type QueryAggregateTeacherArgs = {
  cursor?: InputMaybe<TeacherWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TeacherOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryAggregateTopicArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAssignmentArgs = {
  where: AssignmentWhereUniqueInput;
};


export type QueryAssignmentFileArgs = {
  where: AssignmentFileWhereUniqueInput;
};


export type QueryAssignmentFilesArgs = {
  cursor?: InputMaybe<AssignmentFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssignmentFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssignmentFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentFileWhereInput>;
};


export type QueryAssignmentsArgs = {
  cursor?: InputMaybe<AssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentWhereInput>;
};


export type QueryCourseArgs = {
  where: CourseWhereUniqueInput;
};


export type QueryCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryDepartmentArgs = {
  where: DepartmentWhereUniqueInput;
};


export type QueryDepartmentsArgs = {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<DepartmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
};


export type QueryFindFirstAdminArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryFindFirstAssignmentArgs = {
  cursor?: InputMaybe<AssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentWhereInput>;
};


export type QueryFindFirstAssignmentFileArgs = {
  cursor?: InputMaybe<AssignmentFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<AssignmentFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AssignmentFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentFileWhereInput>;
};


export type QueryFindFirstCourseArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryFindFirstDepartmentArgs = {
  cursor?: InputMaybe<DepartmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<DepartmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
};


export type QueryFindFirstLessonArgs = {
  cursor?: InputMaybe<LessonWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};


export type QueryFindFirstLessonFileArgs = {
  cursor?: InputMaybe<LessonFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonFileWhereInput>;
};


export type QueryFindFirstMeetingArgs = {
  cursor?: InputMaybe<MeetingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MeetingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MeetingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MeetingWhereInput>;
};


export type QueryFindFirstStudentArgs = {
  cursor?: InputMaybe<StudentWhereUniqueInput>;
  distinct?: InputMaybe<Array<StudentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StudentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentWhereInput>;
};


export type QueryFindFirstSubmissionArgs = {
  cursor?: InputMaybe<SubmissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubmissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubmissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionWhereInput>;
};


export type QueryFindFirstSubmissionFileArgs = {
  cursor?: InputMaybe<SubmissionFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubmissionFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubmissionFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionFileWhereInput>;
};


export type QueryFindFirstTeacherArgs = {
  cursor?: InputMaybe<TeacherWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeacherScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeacherOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryFindFirstTopicArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<TopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByAdminArgs = {
  by: Array<AdminScalarFieldEnum>;
  having?: InputMaybe<AdminScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AdminOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryGroupByAssignmentArgs = {
  by: Array<AssignmentScalarFieldEnum>;
  having?: InputMaybe<AssignmentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AssignmentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentWhereInput>;
};


export type QueryGroupByAssignmentFileArgs = {
  by: Array<AssignmentFileScalarFieldEnum>;
  having?: InputMaybe<AssignmentFileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AssignmentFileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssignmentFileWhereInput>;
};


export type QueryGroupByCourseArgs = {
  by: Array<CourseScalarFieldEnum>;
  having?: InputMaybe<CourseScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CourseOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type QueryGroupByDepartmentArgs = {
  by: Array<DepartmentScalarFieldEnum>;
  having?: InputMaybe<DepartmentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<DepartmentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DepartmentWhereInput>;
};


export type QueryGroupByLessonArgs = {
  by: Array<LessonScalarFieldEnum>;
  having?: InputMaybe<LessonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LessonOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};


export type QueryGroupByLessonFileArgs = {
  by: Array<LessonFileScalarFieldEnum>;
  having?: InputMaybe<LessonFileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LessonFileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonFileWhereInput>;
};


export type QueryGroupByMeetingArgs = {
  by: Array<MeetingScalarFieldEnum>;
  having?: InputMaybe<MeetingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<MeetingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MeetingWhereInput>;
};


export type QueryGroupByStudentArgs = {
  by: Array<StudentScalarFieldEnum>;
  having?: InputMaybe<StudentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StudentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentWhereInput>;
};


export type QueryGroupBySubmissionArgs = {
  by: Array<SubmissionScalarFieldEnum>;
  having?: InputMaybe<SubmissionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SubmissionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionWhereInput>;
};


export type QueryGroupBySubmissionFileArgs = {
  by: Array<SubmissionFileScalarFieldEnum>;
  having?: InputMaybe<SubmissionFileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SubmissionFileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionFileWhereInput>;
};


export type QueryGroupByTeacherArgs = {
  by: Array<TeacherScalarFieldEnum>;
  having?: InputMaybe<TeacherScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TeacherOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryGroupByTopicArgs = {
  by: Array<TopicScalarFieldEnum>;
  having?: InputMaybe<TopicScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TopicOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryLessonArgs = {
  where: LessonWhereUniqueInput;
};


export type QueryLessonFileArgs = {
  where: LessonFileWhereUniqueInput;
};


export type QueryLessonFilesArgs = {
  cursor?: InputMaybe<LessonFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonFileWhereInput>;
};


export type QueryLessonsArgs = {
  cursor?: InputMaybe<LessonWhereUniqueInput>;
  distinct?: InputMaybe<Array<LessonScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LessonOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<LessonWhereInput>;
};


export type QueryMeetingArgs = {
  where: MeetingWhereUniqueInput;
};


export type QueryMeetingsArgs = {
  cursor?: InputMaybe<MeetingWhereUniqueInput>;
  distinct?: InputMaybe<Array<MeetingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<MeetingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MeetingWhereInput>;
};


export type QueryStudentArgs = {
  where: StudentWhereUniqueInput;
};


export type QueryStudentsArgs = {
  cursor?: InputMaybe<StudentWhereUniqueInput>;
  distinct?: InputMaybe<Array<StudentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StudentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentWhereInput>;
};


export type QuerySubmissionArgs = {
  where: SubmissionWhereUniqueInput;
};


export type QuerySubmissionFileArgs = {
  where: SubmissionFileWhereUniqueInput;
};


export type QuerySubmissionFilesArgs = {
  cursor?: InputMaybe<SubmissionFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubmissionFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubmissionFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionFileWhereInput>;
};


export type QuerySubmissionsArgs = {
  cursor?: InputMaybe<SubmissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubmissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubmissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionWhereInput>;
};


export type QueryTeacherArgs = {
  where: TeacherWhereUniqueInput;
};


export type QueryTeachersArgs = {
  cursor?: InputMaybe<TeacherWhereUniqueInput>;
  distinct?: InputMaybe<Array<TeacherScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TeacherOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TeacherWhereInput>;
};


export type QueryTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type QueryTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  distinct?: InputMaybe<Array<TopicScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TopicOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  _count?: Maybe<StudentCount>;
  firstName: Scalars['String'];
  grade: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  submissions: Array<Submission>;
  topic?: Maybe<Topic>;
  topicId?: Maybe<Scalars['Int']>;
  user: User;
  userId: Scalars['Int'];
};


export type StudentSubmissionsArgs = {
  cursor?: InputMaybe<SubmissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubmissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubmissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionWhereInput>;
};

export type StudentAvgAggregate = {
  __typename?: 'StudentAvgAggregate';
  grade?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  topicId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type StudentAvgOrderByAggregateInput = {
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentCount = {
  __typename?: 'StudentCount';
  submissions: Scalars['Int'];
};

export type StudentCountAggregate = {
  __typename?: 'StudentCountAggregate';
  _all: Scalars['Int'];
  firstName: Scalars['Int'];
  grade: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  topicId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type StudentCountOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentCreateInput = {
  firstName: Scalars['String'];
  grade: Scalars['Int'];
  lastName: Scalars['String'];
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutStudentInput>;
  topic?: InputMaybe<TopicCreateNestedOneWithoutStudentsInput>;
  user: UserCreateNestedOneWithoutStudentInput;
};

export type StudentCreateNestedManyWithoutTopicInput = {
  connect?: InputMaybe<Array<StudentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StudentCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<StudentCreateWithoutTopicInput>>;
};

export type StudentCreateNestedOneWithoutSubmissionsInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<StudentCreateWithoutSubmissionsInput>;
};

export type StudentCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StudentCreateWithoutUserInput>;
};

export type StudentCreateOrConnectWithoutSubmissionsInput = {
  create: StudentCreateWithoutSubmissionsInput;
  where: StudentWhereUniqueInput;
};

export type StudentCreateOrConnectWithoutTopicInput = {
  create: StudentCreateWithoutTopicInput;
  where: StudentWhereUniqueInput;
};

export type StudentCreateOrConnectWithoutUserInput = {
  create: StudentCreateWithoutUserInput;
  where: StudentWhereUniqueInput;
};

export type StudentCreateWithoutSubmissionsInput = {
  firstName: Scalars['String'];
  grade: Scalars['Int'];
  lastName: Scalars['String'];
  topic?: InputMaybe<TopicCreateNestedOneWithoutStudentsInput>;
  user: UserCreateNestedOneWithoutStudentInput;
};

export type StudentCreateWithoutTopicInput = {
  firstName: Scalars['String'];
  grade: Scalars['Int'];
  lastName: Scalars['String'];
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutStudentInput>;
  user: UserCreateNestedOneWithoutStudentInput;
};

export type StudentCreateWithoutUserInput = {
  firstName: Scalars['String'];
  grade: Scalars['Int'];
  lastName: Scalars['String'];
  submissions?: InputMaybe<SubmissionCreateNestedManyWithoutStudentInput>;
  topic?: InputMaybe<TopicCreateNestedOneWithoutStudentsInput>;
};

export type StudentGroupBy = {
  __typename?: 'StudentGroupBy';
  _avg?: Maybe<StudentAvgAggregate>;
  _count?: Maybe<StudentCountAggregate>;
  _max?: Maybe<StudentMaxAggregate>;
  _min?: Maybe<StudentMinAggregate>;
  _sum?: Maybe<StudentSumAggregate>;
  firstName: Scalars['String'];
  grade: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  topicId?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type StudentListRelationFilter = {
  every?: InputMaybe<StudentWhereInput>;
  none?: InputMaybe<StudentWhereInput>;
  some?: InputMaybe<StudentWhereInput>;
};

export type StudentMaxAggregate = {
  __typename?: 'StudentMaxAggregate';
  firstName?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type StudentMaxOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentMinAggregate = {
  __typename?: 'StudentMinAggregate';
  firstName?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  topicId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type StudentMinOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StudentOrderByWithAggregationInput = {
  _avg?: InputMaybe<StudentAvgOrderByAggregateInput>;
  _count?: InputMaybe<StudentCountOrderByAggregateInput>;
  _max?: InputMaybe<StudentMaxOrderByAggregateInput>;
  _min?: InputMaybe<StudentMinOrderByAggregateInput>;
  _sum?: InputMaybe<StudentSumOrderByAggregateInput>;
  firstName?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentOrderByWithRelationInput = {
  firstName?: InputMaybe<SortOrder>;
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  submissions?: InputMaybe<SubmissionOrderByRelationAggregateInput>;
  topic?: InputMaybe<TopicOrderByWithRelationInput>;
  topicId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentRelationFilter = {
  is?: InputMaybe<StudentWhereInput>;
  isNot?: InputMaybe<StudentWhereInput>;
};

export enum StudentScalarFieldEnum {
  FirstName = 'firstName',
  Grade = 'grade',
  Id = 'id',
  LastName = 'lastName',
  TopicId = 'topicId',
  UserId = 'userId'
}

export type StudentScalarWhereInput = {
  AND?: InputMaybe<Array<StudentScalarWhereInput>>;
  NOT?: InputMaybe<Array<StudentScalarWhereInput>>;
  OR?: InputMaybe<Array<StudentScalarWhereInput>>;
  firstName?: InputMaybe<StringFilter>;
  grade?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type StudentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StudentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StudentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StudentScalarWhereWithAggregatesInput>>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  grade?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  topicId?: InputMaybe<IntNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type StudentSumAggregate = {
  __typename?: 'StudentSumAggregate';
  grade?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  topicId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type StudentSumOrderByAggregateInput = {
  grade?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  topicId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type StudentUpdateInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutStudentInput>;
  topic?: InputMaybe<TopicUpdateOneWithoutStudentsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStudentInput>;
};

export type StudentUpdateManyMutationInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StudentUpdateManyWithWhereWithoutTopicInput = {
  data: StudentUpdateManyMutationInput;
  where: StudentScalarWhereInput;
};

export type StudentUpdateManyWithoutTopicInput = {
  connect?: InputMaybe<Array<StudentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StudentCreateOrConnectWithoutTopicInput>>;
  create?: InputMaybe<Array<StudentCreateWithoutTopicInput>>;
  delete?: InputMaybe<Array<StudentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StudentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StudentWhereUniqueInput>>;
  set?: InputMaybe<Array<StudentWhereUniqueInput>>;
  update?: InputMaybe<Array<StudentUpdateWithWhereUniqueWithoutTopicInput>>;
  updateMany?: InputMaybe<Array<StudentUpdateManyWithWhereWithoutTopicInput>>;
  upsert?: InputMaybe<Array<StudentUpsertWithWhereUniqueWithoutTopicInput>>;
};

export type StudentUpdateOneWithoutSubmissionsInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutSubmissionsInput>;
  create?: InputMaybe<StudentCreateWithoutSubmissionsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<StudentUpdateWithoutSubmissionsInput>;
  upsert?: InputMaybe<StudentUpsertWithoutSubmissionsInput>;
};

export type StudentUpdateOneWithoutUserInput = {
  connect?: InputMaybe<StudentWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StudentCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<StudentCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<StudentUpdateWithoutUserInput>;
  upsert?: InputMaybe<StudentUpsertWithoutUserInput>;
};

export type StudentUpdateWithWhereUniqueWithoutTopicInput = {
  data: StudentUpdateWithoutTopicInput;
  where: StudentWhereUniqueInput;
};

export type StudentUpdateWithoutSubmissionsInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  topic?: InputMaybe<TopicUpdateOneWithoutStudentsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStudentInput>;
};

export type StudentUpdateWithoutTopicInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutStudentInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStudentInput>;
};

export type StudentUpdateWithoutUserInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  grade?: InputMaybe<IntFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  submissions?: InputMaybe<SubmissionUpdateManyWithoutStudentInput>;
  topic?: InputMaybe<TopicUpdateOneWithoutStudentsInput>;
};

export type StudentUpsertWithWhereUniqueWithoutTopicInput = {
  create: StudentCreateWithoutTopicInput;
  update: StudentUpdateWithoutTopicInput;
  where: StudentWhereUniqueInput;
};

export type StudentUpsertWithoutSubmissionsInput = {
  create: StudentCreateWithoutSubmissionsInput;
  update: StudentUpdateWithoutSubmissionsInput;
};

export type StudentUpsertWithoutUserInput = {
  create: StudentCreateWithoutUserInput;
  update: StudentUpdateWithoutUserInput;
};

export type StudentWhereInput = {
  AND?: InputMaybe<Array<StudentWhereInput>>;
  NOT?: InputMaybe<Array<StudentWhereInput>>;
  OR?: InputMaybe<Array<StudentWhereInput>>;
  firstName?: InputMaybe<StringFilter>;
  grade?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  submissions?: InputMaybe<SubmissionListRelationFilter>;
  topic?: InputMaybe<TopicRelationFilter>;
  topicId?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type StudentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type Submission = {
  __typename?: 'Submission';
  _count?: Maybe<SubmissionCount>;
  assignment?: Maybe<Assignment>;
  assignmentId?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  student?: Maybe<Student>;
  studentId?: Maybe<Scalars['Int']>;
  submissionFiles: Array<SubmissionFile>;
  updatedAt: Scalars['DateTime'];
};


export type SubmissionSubmissionFilesArgs = {
  cursor?: InputMaybe<SubmissionFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<SubmissionFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SubmissionFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SubmissionFileWhereInput>;
};

export type SubmissionAvgAggregate = {
  __typename?: 'SubmissionAvgAggregate';
  assignmentId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  studentId?: Maybe<Scalars['Float']>;
};

export type SubmissionAvgOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  studentId?: InputMaybe<SortOrder>;
};

export type SubmissionCount = {
  __typename?: 'SubmissionCount';
  submissionFiles: Scalars['Int'];
};

export type SubmissionCountAggregate = {
  __typename?: 'SubmissionCountAggregate';
  _all: Scalars['Int'];
  assignmentId: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  studentId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SubmissionCountOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  studentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionCreateInput = {
  assignment?: InputMaybe<AssignmentCreateNestedOneWithoutSubmissionsInput>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutSubmissionsInput>;
  submissionFiles?: InputMaybe<SubmissionFileCreateNestedManyWithoutSubmissionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubmissionCreateNestedManyWithoutAssignmentInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionCreateOrConnectWithoutAssignmentInput>>;
  create?: InputMaybe<Array<SubmissionCreateWithoutAssignmentInput>>;
};

export type SubmissionCreateNestedManyWithoutStudentInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionCreateOrConnectWithoutStudentInput>>;
  create?: InputMaybe<Array<SubmissionCreateWithoutStudentInput>>;
};

export type SubmissionCreateNestedOneWithoutSubmissionFilesInput = {
  connect?: InputMaybe<SubmissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubmissionCreateOrConnectWithoutSubmissionFilesInput>;
  create?: InputMaybe<SubmissionCreateWithoutSubmissionFilesInput>;
};

export type SubmissionCreateOrConnectWithoutAssignmentInput = {
  create: SubmissionCreateWithoutAssignmentInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateOrConnectWithoutStudentInput = {
  create: SubmissionCreateWithoutStudentInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateOrConnectWithoutSubmissionFilesInput = {
  create: SubmissionCreateWithoutSubmissionFilesInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionCreateWithoutAssignmentInput = {
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutSubmissionsInput>;
  submissionFiles?: InputMaybe<SubmissionFileCreateNestedManyWithoutSubmissionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubmissionCreateWithoutStudentInput = {
  assignment?: InputMaybe<AssignmentCreateNestedOneWithoutSubmissionsInput>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  submissionFiles?: InputMaybe<SubmissionFileCreateNestedManyWithoutSubmissionInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubmissionCreateWithoutSubmissionFilesInput = {
  assignment?: InputMaybe<AssignmentCreateNestedOneWithoutSubmissionsInput>;
  content: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  student?: InputMaybe<StudentCreateNestedOneWithoutSubmissionsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubmissionFile = {
  __typename?: 'SubmissionFile';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  link: Scalars['String'];
  name: Scalars['String'];
  submission?: Maybe<Submission>;
  submissionId?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SubmissionFileAvgAggregate = {
  __typename?: 'SubmissionFileAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  submissionId?: Maybe<Scalars['Float']>;
};

export type SubmissionFileAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  submissionId?: InputMaybe<SortOrder>;
};

export type SubmissionFileCountAggregate = {
  __typename?: 'SubmissionFileCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  link: Scalars['Int'];
  name: Scalars['Int'];
  submissionId: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type SubmissionFileCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  submissionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionFileCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  link: Scalars['String'];
  name: Scalars['String'];
  submission?: InputMaybe<SubmissionCreateNestedOneWithoutSubmissionFilesInput>;
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubmissionFileCreateNestedManyWithoutSubmissionInput = {
  connect?: InputMaybe<Array<SubmissionFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionFileCreateOrConnectWithoutSubmissionInput>>;
  create?: InputMaybe<Array<SubmissionFileCreateWithoutSubmissionInput>>;
};

export type SubmissionFileCreateOrConnectWithoutSubmissionInput = {
  create: SubmissionFileCreateWithoutSubmissionInput;
  where: SubmissionFileWhereUniqueInput;
};

export type SubmissionFileCreateWithoutSubmissionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  link: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type SubmissionFileGroupBy = {
  __typename?: 'SubmissionFileGroupBy';
  _avg?: Maybe<SubmissionFileAvgAggregate>;
  _count?: Maybe<SubmissionFileCountAggregate>;
  _max?: Maybe<SubmissionFileMaxAggregate>;
  _min?: Maybe<SubmissionFileMinAggregate>;
  _sum?: Maybe<SubmissionFileSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  link: Scalars['String'];
  name: Scalars['String'];
  submissionId?: Maybe<Scalars['Int']>;
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SubmissionFileListRelationFilter = {
  every?: InputMaybe<SubmissionFileWhereInput>;
  none?: InputMaybe<SubmissionFileWhereInput>;
  some?: InputMaybe<SubmissionFileWhereInput>;
};

export type SubmissionFileMaxAggregate = {
  __typename?: 'SubmissionFileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  submissionId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubmissionFileMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  submissionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionFileMinAggregate = {
  __typename?: 'SubmissionFileMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  submissionId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubmissionFileMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  submissionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubmissionFileOrderByWithAggregationInput = {
  _avg?: InputMaybe<SubmissionFileAvgOrderByAggregateInput>;
  _count?: InputMaybe<SubmissionFileCountOrderByAggregateInput>;
  _max?: InputMaybe<SubmissionFileMaxOrderByAggregateInput>;
  _min?: InputMaybe<SubmissionFileMinOrderByAggregateInput>;
  _sum?: InputMaybe<SubmissionFileSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  submissionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionFileOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  submission?: InputMaybe<SubmissionOrderByWithRelationInput>;
  submissionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum SubmissionFileScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Link = 'link',
  Name = 'name',
  SubmissionId = 'submissionId',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type SubmissionFileScalarWhereInput = {
  AND?: InputMaybe<Array<SubmissionFileScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionFileScalarWhereInput>>;
  OR?: InputMaybe<Array<SubmissionFileScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  submissionId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SubmissionFileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SubmissionFileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SubmissionFileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SubmissionFileScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  link?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  submissionId?: InputMaybe<IntNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type SubmissionFileSumAggregate = {
  __typename?: 'SubmissionFileSumAggregate';
  id?: Maybe<Scalars['Int']>;
  submissionId?: Maybe<Scalars['Int']>;
};

export type SubmissionFileSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  submissionId?: InputMaybe<SortOrder>;
};

export type SubmissionFileUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  submission?: InputMaybe<SubmissionUpdateOneWithoutSubmissionFilesInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionFileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionFileUpdateManyWithWhereWithoutSubmissionInput = {
  data: SubmissionFileUpdateManyMutationInput;
  where: SubmissionFileScalarWhereInput;
};

export type SubmissionFileUpdateManyWithoutSubmissionInput = {
  connect?: InputMaybe<Array<SubmissionFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionFileCreateOrConnectWithoutSubmissionInput>>;
  create?: InputMaybe<Array<SubmissionFileCreateWithoutSubmissionInput>>;
  delete?: InputMaybe<Array<SubmissionFileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubmissionFileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubmissionFileWhereUniqueInput>>;
  set?: InputMaybe<Array<SubmissionFileWhereUniqueInput>>;
  update?: InputMaybe<Array<SubmissionFileUpdateWithWhereUniqueWithoutSubmissionInput>>;
  updateMany?: InputMaybe<Array<SubmissionFileUpdateManyWithWhereWithoutSubmissionInput>>;
  upsert?: InputMaybe<Array<SubmissionFileUpsertWithWhereUniqueWithoutSubmissionInput>>;
};

export type SubmissionFileUpdateWithWhereUniqueWithoutSubmissionInput = {
  data: SubmissionFileUpdateWithoutSubmissionInput;
  where: SubmissionFileWhereUniqueInput;
};

export type SubmissionFileUpdateWithoutSubmissionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  link?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionFileUpsertWithWhereUniqueWithoutSubmissionInput = {
  create: SubmissionFileCreateWithoutSubmissionInput;
  update: SubmissionFileUpdateWithoutSubmissionInput;
  where: SubmissionFileWhereUniqueInput;
};

export type SubmissionFileWhereInput = {
  AND?: InputMaybe<Array<SubmissionFileWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionFileWhereInput>>;
  OR?: InputMaybe<Array<SubmissionFileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  link?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  submission?: InputMaybe<SubmissionRelationFilter>;
  submissionId?: InputMaybe<IntNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SubmissionFileWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type SubmissionGroupBy = {
  __typename?: 'SubmissionGroupBy';
  _avg?: Maybe<SubmissionAvgAggregate>;
  _count?: Maybe<SubmissionCountAggregate>;
  _max?: Maybe<SubmissionMaxAggregate>;
  _min?: Maybe<SubmissionMinAggregate>;
  _sum?: Maybe<SubmissionSumAggregate>;
  assignmentId?: Maybe<Scalars['Int']>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  studentId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type SubmissionListRelationFilter = {
  every?: InputMaybe<SubmissionWhereInput>;
  none?: InputMaybe<SubmissionWhereInput>;
  some?: InputMaybe<SubmissionWhereInput>;
};

export type SubmissionMaxAggregate = {
  __typename?: 'SubmissionMaxAggregate';
  assignmentId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  studentId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubmissionMaxOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  studentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionMinAggregate = {
  __typename?: 'SubmissionMinAggregate';
  assignmentId?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  studentId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SubmissionMinOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  studentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SubmissionOrderByWithAggregationInput = {
  _avg?: InputMaybe<SubmissionAvgOrderByAggregateInput>;
  _count?: InputMaybe<SubmissionCountOrderByAggregateInput>;
  _max?: InputMaybe<SubmissionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SubmissionMinOrderByAggregateInput>;
  _sum?: InputMaybe<SubmissionSumOrderByAggregateInput>;
  assignmentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  studentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionOrderByWithRelationInput = {
  assignment?: InputMaybe<AssignmentOrderByWithRelationInput>;
  assignmentId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  student?: InputMaybe<StudentOrderByWithRelationInput>;
  studentId?: InputMaybe<SortOrder>;
  submissionFiles?: InputMaybe<SubmissionFileOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type SubmissionRelationFilter = {
  is?: InputMaybe<SubmissionWhereInput>;
  isNot?: InputMaybe<SubmissionWhereInput>;
};

export enum SubmissionScalarFieldEnum {
  AssignmentId = 'assignmentId',
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  StudentId = 'studentId',
  UpdatedAt = 'updatedAt'
}

export type SubmissionScalarWhereInput = {
  AND?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  OR?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  assignmentId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  studentId?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SubmissionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SubmissionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SubmissionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SubmissionScalarWhereWithAggregatesInput>>;
  assignmentId?: InputMaybe<IntNullableWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  studentId?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type SubmissionSumAggregate = {
  __typename?: 'SubmissionSumAggregate';
  assignmentId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  studentId?: Maybe<Scalars['Int']>;
};

export type SubmissionSumOrderByAggregateInput = {
  assignmentId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  studentId?: InputMaybe<SortOrder>;
};

export type SubmissionUpdateInput = {
  assignment?: InputMaybe<AssignmentUpdateOneWithoutSubmissionsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutSubmissionsInput>;
  submissionFiles?: InputMaybe<SubmissionFileUpdateManyWithoutSubmissionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionUpdateManyWithWhereWithoutAssignmentInput = {
  data: SubmissionUpdateManyMutationInput;
  where: SubmissionScalarWhereInput;
};

export type SubmissionUpdateManyWithWhereWithoutStudentInput = {
  data: SubmissionUpdateManyMutationInput;
  where: SubmissionScalarWhereInput;
};

export type SubmissionUpdateManyWithoutAssignmentInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionCreateOrConnectWithoutAssignmentInput>>;
  create?: InputMaybe<Array<SubmissionCreateWithoutAssignmentInput>>;
  delete?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubmissionUpdateWithWhereUniqueWithoutAssignmentInput>>;
  updateMany?: InputMaybe<Array<SubmissionUpdateManyWithWhereWithoutAssignmentInput>>;
  upsert?: InputMaybe<Array<SubmissionUpsertWithWhereUniqueWithoutAssignmentInput>>;
};

export type SubmissionUpdateManyWithoutStudentInput = {
  connect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SubmissionCreateOrConnectWithoutStudentInput>>;
  create?: InputMaybe<Array<SubmissionCreateWithoutStudentInput>>;
  delete?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SubmissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  set?: InputMaybe<Array<SubmissionWhereUniqueInput>>;
  update?: InputMaybe<Array<SubmissionUpdateWithWhereUniqueWithoutStudentInput>>;
  updateMany?: InputMaybe<Array<SubmissionUpdateManyWithWhereWithoutStudentInput>>;
  upsert?: InputMaybe<Array<SubmissionUpsertWithWhereUniqueWithoutStudentInput>>;
};

export type SubmissionUpdateOneWithoutSubmissionFilesInput = {
  connect?: InputMaybe<SubmissionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<SubmissionCreateOrConnectWithoutSubmissionFilesInput>;
  create?: InputMaybe<SubmissionCreateWithoutSubmissionFilesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<SubmissionUpdateWithoutSubmissionFilesInput>;
  upsert?: InputMaybe<SubmissionUpsertWithoutSubmissionFilesInput>;
};

export type SubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
  data: SubmissionUpdateWithoutAssignmentInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpdateWithWhereUniqueWithoutStudentInput = {
  data: SubmissionUpdateWithoutStudentInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpdateWithoutAssignmentInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutSubmissionsInput>;
  submissionFiles?: InputMaybe<SubmissionFileUpdateManyWithoutSubmissionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionUpdateWithoutStudentInput = {
  assignment?: InputMaybe<AssignmentUpdateOneWithoutSubmissionsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  submissionFiles?: InputMaybe<SubmissionFileUpdateManyWithoutSubmissionInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionUpdateWithoutSubmissionFilesInput = {
  assignment?: InputMaybe<AssignmentUpdateOneWithoutSubmissionsInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutSubmissionsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
  create: SubmissionCreateWithoutAssignmentInput;
  update: SubmissionUpdateWithoutAssignmentInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpsertWithWhereUniqueWithoutStudentInput = {
  create: SubmissionCreateWithoutStudentInput;
  update: SubmissionUpdateWithoutStudentInput;
  where: SubmissionWhereUniqueInput;
};

export type SubmissionUpsertWithoutSubmissionFilesInput = {
  create: SubmissionCreateWithoutSubmissionFilesInput;
  update: SubmissionUpdateWithoutSubmissionFilesInput;
};

export type SubmissionWhereInput = {
  AND?: InputMaybe<Array<SubmissionWhereInput>>;
  NOT?: InputMaybe<Array<SubmissionWhereInput>>;
  OR?: InputMaybe<Array<SubmissionWhereInput>>;
  assignment?: InputMaybe<AssignmentRelationFilter>;
  assignmentId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  student?: InputMaybe<StudentRelationFilter>;
  studentId?: InputMaybe<IntNullableFilter>;
  submissionFiles?: InputMaybe<SubmissionFileListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type SubmissionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Teacher = {
  __typename?: 'Teacher';
  _count?: Maybe<TeacherCount>;
  courses: Array<Course>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};


export type TeacherCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};

export type TeacherAvgAggregate = {
  __typename?: 'TeacherAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TeacherAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeacherCount = {
  __typename?: 'TeacherCount';
  courses: Scalars['Int'];
};

export type TeacherCountAggregate = {
  __typename?: 'TeacherCountAggregate';
  _all: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TeacherCountOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeacherCreateInput = {
  courses?: InputMaybe<CourseCreateNestedManyWithoutTeacherInput>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  user: UserCreateNestedOneWithoutTeacherInput;
};

export type TeacherCreateNestedOneWithoutCoursesInput = {
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeacherCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<TeacherCreateWithoutCoursesInput>;
};

export type TeacherCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeacherCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<TeacherCreateWithoutUserInput>;
};

export type TeacherCreateOrConnectWithoutCoursesInput = {
  create: TeacherCreateWithoutCoursesInput;
  where: TeacherWhereUniqueInput;
};

export type TeacherCreateOrConnectWithoutUserInput = {
  create: TeacherCreateWithoutUserInput;
  where: TeacherWhereUniqueInput;
};

export type TeacherCreateWithoutCoursesInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  user: UserCreateNestedOneWithoutTeacherInput;
};

export type TeacherCreateWithoutUserInput = {
  courses?: InputMaybe<CourseCreateNestedManyWithoutTeacherInput>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type TeacherGroupBy = {
  __typename?: 'TeacherGroupBy';
  _avg?: Maybe<TeacherAvgAggregate>;
  _count?: Maybe<TeacherCountAggregate>;
  _max?: Maybe<TeacherMaxAggregate>;
  _min?: Maybe<TeacherMinAggregate>;
  _sum?: Maybe<TeacherSumAggregate>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  userId: Scalars['Int'];
};

export type TeacherMaxAggregate = {
  __typename?: 'TeacherMaxAggregate';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TeacherMaxOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeacherMinAggregate = {
  __typename?: 'TeacherMinAggregate';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TeacherMinOrderByAggregateInput = {
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeacherOrderByWithAggregationInput = {
  _avg?: InputMaybe<TeacherAvgOrderByAggregateInput>;
  _count?: InputMaybe<TeacherCountOrderByAggregateInput>;
  _max?: InputMaybe<TeacherMaxOrderByAggregateInput>;
  _min?: InputMaybe<TeacherMinOrderByAggregateInput>;
  _sum?: InputMaybe<TeacherSumOrderByAggregateInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeacherOrderByWithRelationInput = {
  courses?: InputMaybe<CourseOrderByRelationAggregateInput>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type TeacherRelationFilter = {
  is?: InputMaybe<TeacherWhereInput>;
  isNot?: InputMaybe<TeacherWhereInput>;
};

export enum TeacherScalarFieldEnum {
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  UserId = 'userId'
}

export type TeacherScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TeacherScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TeacherScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TeacherScalarWhereWithAggregatesInput>>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type TeacherSumAggregate = {
  __typename?: 'TeacherSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TeacherSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TeacherUpdateInput = {
  courses?: InputMaybe<CourseUpdateManyWithoutTeacherInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTeacherInput>;
};

export type TeacherUpdateManyMutationInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeacherUpdateOneWithoutCoursesInput = {
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeacherCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<TeacherCreateWithoutCoursesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TeacherUpdateWithoutCoursesInput>;
  upsert?: InputMaybe<TeacherUpsertWithoutCoursesInput>;
};

export type TeacherUpdateOneWithoutUserInput = {
  connect?: InputMaybe<TeacherWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TeacherCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<TeacherCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TeacherUpdateWithoutUserInput>;
  upsert?: InputMaybe<TeacherUpsertWithoutUserInput>;
};

export type TeacherUpdateWithoutCoursesInput = {
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutTeacherInput>;
};

export type TeacherUpdateWithoutUserInput = {
  courses?: InputMaybe<CourseUpdateManyWithoutTeacherInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TeacherUpsertWithoutCoursesInput = {
  create: TeacherCreateWithoutCoursesInput;
  update: TeacherUpdateWithoutCoursesInput;
};

export type TeacherUpsertWithoutUserInput = {
  create: TeacherCreateWithoutUserInput;
  update: TeacherUpdateWithoutUserInput;
};

export type TeacherWhereInput = {
  AND?: InputMaybe<Array<TeacherWhereInput>>;
  NOT?: InputMaybe<Array<TeacherWhereInput>>;
  OR?: InputMaybe<Array<TeacherWhereInput>>;
  courses?: InputMaybe<CourseListRelationFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  lastName?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type TeacherWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type Topic = {
  __typename?: 'Topic';
  _count?: Maybe<TopicCount>;
  courses: Array<Course>;
  department?: Maybe<Department>;
  departmentId?: Maybe<Scalars['Int']>;
  grades: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  students: Array<Student>;
};


export type TopicCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>;
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CourseWhereInput>;
};


export type TopicStudentsArgs = {
  cursor?: InputMaybe<StudentWhereUniqueInput>;
  distinct?: InputMaybe<Array<StudentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StudentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StudentWhereInput>;
};

export type TopicAvgAggregate = {
  __typename?: 'TopicAvgAggregate';
  departmentId?: Maybe<Scalars['Float']>;
  grades?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type TopicAvgOrderByAggregateInput = {
  departmentId?: InputMaybe<SortOrder>;
  grades?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TopicCount = {
  __typename?: 'TopicCount';
  courses: Scalars['Int'];
  students: Scalars['Int'];
};

export type TopicCountAggregate = {
  __typename?: 'TopicCountAggregate';
  _all: Scalars['Int'];
  departmentId: Scalars['Int'];
  grades: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type TopicCountOrderByAggregateInput = {
  departmentId?: InputMaybe<SortOrder>;
  grades?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicCreateInput = {
  courses?: InputMaybe<CourseCreateNestedManyWithoutTopicInput>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutTopicsInput>;
  grades: Scalars['Int'];
  name: Scalars['String'];
  students?: InputMaybe<StudentCreateNestedManyWithoutTopicInput>;
};

export type TopicCreateNestedManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TopicCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<TopicCreateWithoutDepartmentInput>>;
};

export type TopicCreateNestedOneWithoutCoursesInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<TopicCreateWithoutCoursesInput>;
};

export type TopicCreateNestedOneWithoutStudentsInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutStudentsInput>;
  create?: InputMaybe<TopicCreateWithoutStudentsInput>;
};

export type TopicCreateOrConnectWithoutCoursesInput = {
  create: TopicCreateWithoutCoursesInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutDepartmentInput = {
  create: TopicCreateWithoutDepartmentInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateOrConnectWithoutStudentsInput = {
  create: TopicCreateWithoutStudentsInput;
  where: TopicWhereUniqueInput;
};

export type TopicCreateWithoutCoursesInput = {
  department?: InputMaybe<DepartmentCreateNestedOneWithoutTopicsInput>;
  grades: Scalars['Int'];
  name: Scalars['String'];
  students?: InputMaybe<StudentCreateNestedManyWithoutTopicInput>;
};

export type TopicCreateWithoutDepartmentInput = {
  courses?: InputMaybe<CourseCreateNestedManyWithoutTopicInput>;
  grades: Scalars['Int'];
  name: Scalars['String'];
  students?: InputMaybe<StudentCreateNestedManyWithoutTopicInput>;
};

export type TopicCreateWithoutStudentsInput = {
  courses?: InputMaybe<CourseCreateNestedManyWithoutTopicInput>;
  department?: InputMaybe<DepartmentCreateNestedOneWithoutTopicsInput>;
  grades: Scalars['Int'];
  name: Scalars['String'];
};

export type TopicGroupBy = {
  __typename?: 'TopicGroupBy';
  _avg?: Maybe<TopicAvgAggregate>;
  _count?: Maybe<TopicCountAggregate>;
  _max?: Maybe<TopicMaxAggregate>;
  _min?: Maybe<TopicMinAggregate>;
  _sum?: Maybe<TopicSumAggregate>;
  departmentId?: Maybe<Scalars['Int']>;
  grades: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type TopicListRelationFilter = {
  every?: InputMaybe<TopicWhereInput>;
  none?: InputMaybe<TopicWhereInput>;
  some?: InputMaybe<TopicWhereInput>;
};

export type TopicMaxAggregate = {
  __typename?: 'TopicMaxAggregate';
  departmentId?: Maybe<Scalars['Int']>;
  grades?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TopicMaxOrderByAggregateInput = {
  departmentId?: InputMaybe<SortOrder>;
  grades?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicMinAggregate = {
  __typename?: 'TopicMinAggregate';
  departmentId?: Maybe<Scalars['Int']>;
  grades?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type TopicMinOrderByAggregateInput = {
  departmentId?: InputMaybe<SortOrder>;
  grades?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TopicOrderByWithAggregationInput = {
  _avg?: InputMaybe<TopicAvgOrderByAggregateInput>;
  _count?: InputMaybe<TopicCountOrderByAggregateInput>;
  _max?: InputMaybe<TopicMaxOrderByAggregateInput>;
  _min?: InputMaybe<TopicMinOrderByAggregateInput>;
  _sum?: InputMaybe<TopicSumOrderByAggregateInput>;
  departmentId?: InputMaybe<SortOrder>;
  grades?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type TopicOrderByWithRelationInput = {
  courses?: InputMaybe<CourseOrderByRelationAggregateInput>;
  department?: InputMaybe<DepartmentOrderByWithRelationInput>;
  departmentId?: InputMaybe<SortOrder>;
  grades?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  students?: InputMaybe<StudentOrderByRelationAggregateInput>;
};

export type TopicRelationFilter = {
  is?: InputMaybe<TopicWhereInput>;
  isNot?: InputMaybe<TopicWhereInput>;
};

export enum TopicScalarFieldEnum {
  DepartmentId = 'departmentId',
  Grades = 'grades',
  Id = 'id',
  Name = 'name'
}

export type TopicScalarWhereInput = {
  AND?: InputMaybe<Array<TopicScalarWhereInput>>;
  NOT?: InputMaybe<Array<TopicScalarWhereInput>>;
  OR?: InputMaybe<Array<TopicScalarWhereInput>>;
  departmentId?: InputMaybe<IntNullableFilter>;
  grades?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TopicScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TopicScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TopicScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TopicScalarWhereWithAggregatesInput>>;
  departmentId?: InputMaybe<IntNullableWithAggregatesFilter>;
  grades?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type TopicSumAggregate = {
  __typename?: 'TopicSumAggregate';
  departmentId?: Maybe<Scalars['Int']>;
  grades?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type TopicSumOrderByAggregateInput = {
  departmentId?: InputMaybe<SortOrder>;
  grades?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type TopicUpdateInput = {
  courses?: InputMaybe<CourseUpdateManyWithoutTopicInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutTopicsInput>;
  grades?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  students?: InputMaybe<StudentUpdateManyWithoutTopicInput>;
};

export type TopicUpdateManyMutationInput = {
  grades?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TopicUpdateManyWithWhereWithoutDepartmentInput = {
  data: TopicUpdateManyMutationInput;
  where: TopicScalarWhereInput;
};

export type TopicUpdateManyWithoutDepartmentInput = {
  connect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TopicCreateOrConnectWithoutDepartmentInput>>;
  create?: InputMaybe<Array<TopicCreateWithoutDepartmentInput>>;
  delete?: InputMaybe<Array<TopicWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TopicScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TopicWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicWhereUniqueInput>>;
  update?: InputMaybe<Array<TopicUpdateWithWhereUniqueWithoutDepartmentInput>>;
  updateMany?: InputMaybe<Array<TopicUpdateManyWithWhereWithoutDepartmentInput>>;
  upsert?: InputMaybe<Array<TopicUpsertWithWhereUniqueWithoutDepartmentInput>>;
};

export type TopicUpdateOneWithoutCoursesInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutCoursesInput>;
  create?: InputMaybe<TopicCreateWithoutCoursesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TopicUpdateWithoutCoursesInput>;
  upsert?: InputMaybe<TopicUpsertWithoutCoursesInput>;
};

export type TopicUpdateOneWithoutStudentsInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TopicCreateOrConnectWithoutStudentsInput>;
  create?: InputMaybe<TopicCreateWithoutStudentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<TopicUpdateWithoutStudentsInput>;
  upsert?: InputMaybe<TopicUpsertWithoutStudentsInput>;
};

export type TopicUpdateWithWhereUniqueWithoutDepartmentInput = {
  data: TopicUpdateWithoutDepartmentInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpdateWithoutCoursesInput = {
  department?: InputMaybe<DepartmentUpdateOneWithoutTopicsInput>;
  grades?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  students?: InputMaybe<StudentUpdateManyWithoutTopicInput>;
};

export type TopicUpdateWithoutDepartmentInput = {
  courses?: InputMaybe<CourseUpdateManyWithoutTopicInput>;
  grades?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  students?: InputMaybe<StudentUpdateManyWithoutTopicInput>;
};

export type TopicUpdateWithoutStudentsInput = {
  courses?: InputMaybe<CourseUpdateManyWithoutTopicInput>;
  department?: InputMaybe<DepartmentUpdateOneWithoutTopicsInput>;
  grades?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TopicUpsertWithWhereUniqueWithoutDepartmentInput = {
  create: TopicCreateWithoutDepartmentInput;
  update: TopicUpdateWithoutDepartmentInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpsertWithoutCoursesInput = {
  create: TopicCreateWithoutCoursesInput;
  update: TopicUpdateWithoutCoursesInput;
};

export type TopicUpsertWithoutStudentsInput = {
  create: TopicCreateWithoutStudentsInput;
  update: TopicUpdateWithoutStudentsInput;
};

export type TopicWhereInput = {
  AND?: InputMaybe<Array<TopicWhereInput>>;
  NOT?: InputMaybe<Array<TopicWhereInput>>;
  OR?: InputMaybe<Array<TopicWhereInput>>;
  courses?: InputMaybe<CourseListRelationFilter>;
  department?: InputMaybe<DepartmentRelationFilter>;
  departmentId?: InputMaybe<IntNullableFilter>;
  grades?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  students?: InputMaybe<StudentListRelationFilter>;
};

export type TopicWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  admin?: Maybe<Admin>;
  createdAt: Scalars['DateTime'];
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  id: Scalars['Int'];
  role: Scalars['String'];
  student?: Maybe<Student>;
  teacher?: Maybe<Teacher>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  disabled: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  disabled?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  teacher?: InputMaybe<TeacherCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutAdminInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdminInput>;
  create?: InputMaybe<UserCreateWithoutAdminInput>;
};

export type UserCreateNestedOneWithoutStudentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStudentInput>;
  create?: InputMaybe<UserCreateWithoutStudentInput>;
};

export type UserCreateNestedOneWithoutTeacherInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeacherInput>;
  create?: InputMaybe<UserCreateWithoutTeacherInput>;
};

export type UserCreateOrConnectWithoutAdminInput = {
  create: UserCreateWithoutAdminInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutStudentInput = {
  create: UserCreateWithoutStudentInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTeacherInput = {
  create: UserCreateWithoutTeacherInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAdminInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  teacher?: InputMaybe<TeacherCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateWithoutStudentInput = {
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  teacher?: InputMaybe<TeacherCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateWithoutTeacherInput = {
  admin?: InputMaybe<AdminCreateNestedOneWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  student?: InputMaybe<StudentCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  disabled: Scalars['Boolean'];
  email: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  disabled?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  disabled?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  disabled?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  disabled?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  disabled?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  disabled?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  student?: InputMaybe<StudentOrderByWithRelationInput>;
  teacher?: InputMaybe<TeacherOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Disabled = 'disabled',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  disabled?: InputMaybe<BoolWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  teacher?: InputMaybe<TeacherUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAdminInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAdminInput>;
  create?: InputMaybe<UserCreateWithoutAdminInput>;
  update?: InputMaybe<UserUpdateWithoutAdminInput>;
  upsert?: InputMaybe<UserUpsertWithoutAdminInput>;
};

export type UserUpdateOneRequiredWithoutStudentInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStudentInput>;
  create?: InputMaybe<UserCreateWithoutStudentInput>;
  update?: InputMaybe<UserUpdateWithoutStudentInput>;
  upsert?: InputMaybe<UserUpsertWithoutStudentInput>;
};

export type UserUpdateOneRequiredWithoutTeacherInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTeacherInput>;
  create?: InputMaybe<UserCreateWithoutTeacherInput>;
  update?: InputMaybe<UserUpdateWithoutTeacherInput>;
  upsert?: InputMaybe<UserUpsertWithoutTeacherInput>;
};

export type UserUpdateWithoutAdminInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  teacher?: InputMaybe<TeacherUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutStudentInput = {
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  teacher?: InputMaybe<TeacherUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutTeacherInput = {
  admin?: InputMaybe<AdminUpdateOneWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  disabled?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
  student?: InputMaybe<StudentUpdateOneWithoutUserInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAdminInput = {
  create: UserCreateWithoutAdminInput;
  update: UserUpdateWithoutAdminInput;
};

export type UserUpsertWithoutStudentInput = {
  create: UserCreateWithoutStudentInput;
  update: UserUpdateWithoutStudentInput;
};

export type UserUpsertWithoutTeacherInput = {
  create: UserCreateWithoutTeacherInput;
  update: UserUpdateWithoutTeacherInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  admin?: InputMaybe<AdminRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  disabled?: InputMaybe<BoolFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  student?: InputMaybe<StudentRelationFilter>;
  teacher?: InputMaybe<TeacherRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CreateLessonMutationVariables = Exact<{
  data: LessonCreateInput;
}>;


export type CreateLessonMutation = { __typename?: 'Mutation', createLesson: { __typename?: 'Lesson', id: number } };

export type UpdateLessonMutationVariables = Exact<{
  data: LessonUpdateInput;
  where: LessonWhereUniqueInput;
}>;


export type UpdateLessonMutation = { __typename?: 'Mutation', updateLesson?: { __typename?: 'Lesson', id: number } | null };

export type DeleteLessonMutationVariables = Exact<{
  where: LessonWhereUniqueInput;
}>;


export type DeleteLessonMutation = { __typename?: 'Mutation', deleteLesson?: { __typename?: 'Lesson', id: number } | null };

export type CreateCourseMutationVariables = Exact<{
  data: CourseCreateInput;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'Course', id: number } };

export type UpdateCourseMutationVariables = Exact<{
  data: CourseUpdateInput;
  where: CourseWhereUniqueInput;
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse?: { __typename?: 'Course', id: number } | null };

export type DeleteCourseMutationVariables = Exact<{
  where: CourseWhereUniqueInput;
}>;


export type DeleteCourseMutation = { __typename?: 'Mutation', deleteCourse?: { __typename?: 'Course', id: number } | null };

export type CreateStudentMutationVariables = Exact<{
  data: StudentCreateInput;
}>;


export type CreateStudentMutation = { __typename?: 'Mutation', createStudent: { __typename?: 'Student', id: number } };

export type UpdateStudentMutationVariables = Exact<{
  data: StudentUpdateInput;
  where: StudentWhereUniqueInput;
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent?: { __typename?: 'Student', id: number } | null };

export type DeleteStudentMutationVariables = Exact<{
  where: StudentWhereUniqueInput;
}>;


export type DeleteStudentMutation = { __typename?: 'Mutation', deleteStudent?: { __typename?: 'Student', id: number } | null };

export type CreateTeacherMutationVariables = Exact<{
  data: TeacherCreateInput;
}>;


export type CreateTeacherMutation = { __typename?: 'Mutation', createTeacher: { __typename?: 'Teacher', id: number } };

export type UpdateTeacherMutationVariables = Exact<{
  data: TeacherUpdateInput;
  where: TeacherWhereUniqueInput;
}>;


export type UpdateTeacherMutation = { __typename?: 'Mutation', updateTeacher?: { __typename?: 'Teacher', id: number } | null };

export type DeleteTeacherMutationVariables = Exact<{
  where: TeacherWhereUniqueInput;
}>;


export type DeleteTeacherMutation = { __typename?: 'Mutation', deleteTeacher?: { __typename?: 'Teacher', id: number } | null };

export type CreateAdminMutationVariables = Exact<{
  data: AdminCreateInput;
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createAdmin: { __typename?: 'Admin', id: number } };

export type UpdateAdminMutationVariables = Exact<{
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
}>;


export type UpdateAdminMutation = { __typename?: 'Mutation', updateAdmin?: { __typename?: 'Admin', id: number } | null };

export type DeleteAdminMutationVariables = Exact<{
  where: AdminWhereUniqueInput;
}>;


export type DeleteAdminMutation = { __typename?: 'Mutation', deleteAdmin?: { __typename?: 'Admin', id: number } | null };

export type CreateAssignmentMutationVariables = Exact<{
  data: AssignmentCreateInput;
}>;


export type CreateAssignmentMutation = { __typename?: 'Mutation', createAssignment: { __typename?: 'Assignment', id: number } };

export type UpdateAssignmentMutationVariables = Exact<{
  data: AssignmentUpdateInput;
  where: AssignmentWhereUniqueInput;
}>;


export type UpdateAssignmentMutation = { __typename?: 'Mutation', updateAssignment?: { __typename?: 'Assignment', id: number } | null };

export type DeleteAssignmentMutationVariables = Exact<{
  where: AssignmentWhereUniqueInput;
}>;


export type DeleteAssignmentMutation = { __typename?: 'Mutation', deleteAssignment?: { __typename?: 'Assignment', id: number } | null };

export type CreateMeetingMutationVariables = Exact<{
  data: MeetingCreateInput;
}>;


export type CreateMeetingMutation = { __typename?: 'Mutation', createMeeting: { __typename?: 'Meeting', id: number } };

export type UpdateMeetingMutationVariables = Exact<{
  data: MeetingUpdateInput;
  where: MeetingWhereUniqueInput;
}>;


export type UpdateMeetingMutation = { __typename?: 'Mutation', updateMeeting?: { __typename?: 'Meeting', id: number } | null };

export type DeleteMeetingMutationVariables = Exact<{
  where: MeetingWhereUniqueInput;
}>;


export type DeleteMeetingMutation = { __typename?: 'Mutation', deleteMeeting?: { __typename?: 'Meeting', id: number } | null };

export type LessonsQueryVariables = Exact<{
  where?: InputMaybe<LessonWhereInput>;
}>;


export type LessonsQuery = { __typename?: 'Query', lessons: Array<{ __typename?: 'Lesson', id: number, title: string, description?: string | null, published: boolean, content: string }> };

export type LessonQueryVariables = Exact<{
  where: LessonWhereUniqueInput;
}>;


export type LessonQuery = { __typename?: 'Query', lesson?: { __typename?: 'Lesson', id: number, title: string, description?: string | null, published: boolean, content: string } | null };

export type AssignmentQueryVariables = Exact<{
  where: AssignmentWhereUniqueInput;
}>;


export type AssignmentQuery = { __typename?: 'Query', assignment?: { __typename?: 'Assignment', id: number, courseId?: number | null, title: string, description?: string | null, published: boolean, content: string } | null };

export type MeetingQueryVariables = Exact<{
  where: MeetingWhereUniqueInput;
}>;


export type MeetingQuery = { __typename?: 'Query', meeting?: { __typename?: 'Meeting', id: number, title: string, description?: string | null, courseId?: number | null, createdAt: any, updatedAt: any, date: any, startTime: any, duration: any, link?: string | null } | null };

export type CourseQueryVariables = Exact<{
  where: CourseWhereUniqueInput;
}>;


export type CourseQuery = { __typename?: 'Query', course?: { __typename?: 'Course', id: number, title: string, lessons: Array<{ __typename?: 'Lesson', id: number, title: string, description?: string | null, published: boolean, courseId?: number | null }>, meetings: Array<{ __typename?: 'Meeting', id: number, link?: string | null, title: string, date: any, startTime: any, duration: any, courseId?: number | null }>, assignments: Array<{ __typename?: 'Assignment', id: number, published: boolean, courseId?: number | null }> } | null };

export type CoursesQueryVariables = Exact<{
  where?: InputMaybe<CourseWhereInput>;
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput> | CourseOrderByWithRelationInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type CoursesQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', id: number, title: string, description?: string | null, teacher?: { __typename?: 'Teacher', firstName: string, lastName: string } | null, _count?: { __typename?: 'CourseCount', lessons: number, assignments: number, meetings: number } | null }> };


export const CreateLessonDocument = gql`
    mutation createLesson($data: LessonCreateInput!) {
  createLesson(data: $data) {
    id
  }
}
    `;
export type CreateLessonMutationFn = Apollo.MutationFunction<CreateLessonMutation, CreateLessonMutationVariables>;

/**
 * __useCreateLessonMutation__
 *
 * To run a mutation, you first call `useCreateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonMutation, { data, loading, error }] = useCreateLessonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateLessonMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonMutation, CreateLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLessonMutation, CreateLessonMutationVariables>(CreateLessonDocument, options);
      }
export type CreateLessonMutationHookResult = ReturnType<typeof useCreateLessonMutation>;
export type CreateLessonMutationResult = Apollo.MutationResult<CreateLessonMutation>;
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<CreateLessonMutation, CreateLessonMutationVariables>;
export const UpdateLessonDocument = gql`
    mutation updateLesson($data: LessonUpdateInput!, $where: LessonWhereUniqueInput!) {
  updateLesson(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateLessonMutationFn = Apollo.MutationFunction<UpdateLessonMutation, UpdateLessonMutationVariables>;

/**
 * __useUpdateLessonMutation__
 *
 * To run a mutation, you first call `useUpdateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonMutation, { data, loading, error }] = useUpdateLessonMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateLessonMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonMutation, UpdateLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLessonMutation, UpdateLessonMutationVariables>(UpdateLessonDocument, options);
      }
export type UpdateLessonMutationHookResult = ReturnType<typeof useUpdateLessonMutation>;
export type UpdateLessonMutationResult = Apollo.MutationResult<UpdateLessonMutation>;
export type UpdateLessonMutationOptions = Apollo.BaseMutationOptions<UpdateLessonMutation, UpdateLessonMutationVariables>;
export const DeleteLessonDocument = gql`
    mutation deleteLesson($where: LessonWhereUniqueInput!) {
  deleteLesson(where: $where) {
    id
  }
}
    `;
export type DeleteLessonMutationFn = Apollo.MutationFunction<DeleteLessonMutation, DeleteLessonMutationVariables>;

/**
 * __useDeleteLessonMutation__
 *
 * To run a mutation, you first call `useDeleteLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLessonMutation, { data, loading, error }] = useDeleteLessonMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteLessonMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLessonMutation, DeleteLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLessonMutation, DeleteLessonMutationVariables>(DeleteLessonDocument, options);
      }
export type DeleteLessonMutationHookResult = ReturnType<typeof useDeleteLessonMutation>;
export type DeleteLessonMutationResult = Apollo.MutationResult<DeleteLessonMutation>;
export type DeleteLessonMutationOptions = Apollo.BaseMutationOptions<DeleteLessonMutation, DeleteLessonMutationVariables>;
export const CreateCourseDocument = gql`
    mutation createCourse($data: CourseCreateInput!) {
  createCourse(data: $data) {
    id
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation updateCourse($data: CourseUpdateInput!, $where: CourseWhereUniqueInput!) {
  updateCourse(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateCourseMutationFn = Apollo.MutationFunction<UpdateCourseMutation, UpdateCourseMutationVariables>;

/**
 * __useUpdateCourseMutation__
 *
 * To run a mutation, you first call `useUpdateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseMutation, { data, loading, error }] = useUpdateCourseMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateCourseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseMutation, UpdateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument, options);
      }
export type UpdateCourseMutationHookResult = ReturnType<typeof useUpdateCourseMutation>;
export type UpdateCourseMutationResult = Apollo.MutationResult<UpdateCourseMutation>;
export type UpdateCourseMutationOptions = Apollo.BaseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const DeleteCourseDocument = gql`
    mutation deleteCourse($where: CourseWhereUniqueInput!) {
  deleteCourse(where: $where) {
    id
  }
}
    `;
export type DeleteCourseMutationFn = Apollo.MutationFunction<DeleteCourseMutation, DeleteCourseMutationVariables>;

/**
 * __useDeleteCourseMutation__
 *
 * To run a mutation, you first call `useDeleteCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCourseMutation, { data, loading, error }] = useDeleteCourseMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteCourseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCourseMutation, DeleteCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCourseMutation, DeleteCourseMutationVariables>(DeleteCourseDocument, options);
      }
export type DeleteCourseMutationHookResult = ReturnType<typeof useDeleteCourseMutation>;
export type DeleteCourseMutationResult = Apollo.MutationResult<DeleteCourseMutation>;
export type DeleteCourseMutationOptions = Apollo.BaseMutationOptions<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const CreateStudentDocument = gql`
    mutation createStudent($data: StudentCreateInput!) {
  createStudent(data: $data) {
    id
  }
}
    `;
export type CreateStudentMutationFn = Apollo.MutationFunction<CreateStudentMutation, CreateStudentMutationVariables>;

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateStudentMutation(baseOptions?: Apollo.MutationHookOptions<CreateStudentMutation, CreateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStudentMutation, CreateStudentMutationVariables>(CreateStudentDocument, options);
      }
export type CreateStudentMutationHookResult = ReturnType<typeof useCreateStudentMutation>;
export type CreateStudentMutationResult = Apollo.MutationResult<CreateStudentMutation>;
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<CreateStudentMutation, CreateStudentMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation updateStudent($data: StudentUpdateInput!, $where: StudentWhereUniqueInput!) {
  updateStudent(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;
export const DeleteStudentDocument = gql`
    mutation deleteStudent($where: StudentWhereUniqueInput!) {
  deleteStudent(where: $where) {
    id
  }
}
    `;
export type DeleteStudentMutationFn = Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>;

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteStudentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStudentMutation, DeleteStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
      }
export type DeleteStudentMutationHookResult = ReturnType<typeof useDeleteStudentMutation>;
export type DeleteStudentMutationResult = Apollo.MutationResult<DeleteStudentMutation>;
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const CreateTeacherDocument = gql`
    mutation createTeacher($data: TeacherCreateInput!) {
  createTeacher(data: $data) {
    id
  }
}
    `;
export type CreateTeacherMutationFn = Apollo.MutationFunction<CreateTeacherMutation, CreateTeacherMutationVariables>;

/**
 * __useCreateTeacherMutation__
 *
 * To run a mutation, you first call `useCreateTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeacherMutation, { data, loading, error }] = useCreateTeacherMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTeacherMutation(baseOptions?: Apollo.MutationHookOptions<CreateTeacherMutation, CreateTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTeacherMutation, CreateTeacherMutationVariables>(CreateTeacherDocument, options);
      }
export type CreateTeacherMutationHookResult = ReturnType<typeof useCreateTeacherMutation>;
export type CreateTeacherMutationResult = Apollo.MutationResult<CreateTeacherMutation>;
export type CreateTeacherMutationOptions = Apollo.BaseMutationOptions<CreateTeacherMutation, CreateTeacherMutationVariables>;
export const UpdateTeacherDocument = gql`
    mutation updateTeacher($data: TeacherUpdateInput!, $where: TeacherWhereUniqueInput!) {
  updateTeacher(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateTeacherMutationFn = Apollo.MutationFunction<UpdateTeacherMutation, UpdateTeacherMutationVariables>;

/**
 * __useUpdateTeacherMutation__
 *
 * To run a mutation, you first call `useUpdateTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTeacherMutation, { data, loading, error }] = useUpdateTeacherMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateTeacherMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTeacherMutation, UpdateTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTeacherMutation, UpdateTeacherMutationVariables>(UpdateTeacherDocument, options);
      }
export type UpdateTeacherMutationHookResult = ReturnType<typeof useUpdateTeacherMutation>;
export type UpdateTeacherMutationResult = Apollo.MutationResult<UpdateTeacherMutation>;
export type UpdateTeacherMutationOptions = Apollo.BaseMutationOptions<UpdateTeacherMutation, UpdateTeacherMutationVariables>;
export const DeleteTeacherDocument = gql`
    mutation deleteTeacher($where: TeacherWhereUniqueInput!) {
  deleteTeacher(where: $where) {
    id
  }
}
    `;
export type DeleteTeacherMutationFn = Apollo.MutationFunction<DeleteTeacherMutation, DeleteTeacherMutationVariables>;

/**
 * __useDeleteTeacherMutation__
 *
 * To run a mutation, you first call `useDeleteTeacherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTeacherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTeacherMutation, { data, loading, error }] = useDeleteTeacherMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteTeacherMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTeacherMutation, DeleteTeacherMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTeacherMutation, DeleteTeacherMutationVariables>(DeleteTeacherDocument, options);
      }
export type DeleteTeacherMutationHookResult = ReturnType<typeof useDeleteTeacherMutation>;
export type DeleteTeacherMutationResult = Apollo.MutationResult<DeleteTeacherMutation>;
export type DeleteTeacherMutationOptions = Apollo.BaseMutationOptions<DeleteTeacherMutation, DeleteTeacherMutationVariables>;
export const CreateAdminDocument = gql`
    mutation createAdmin($data: AdminCreateInput!) {
  createAdmin(data: $data) {
    id
  }
}
    `;
export type CreateAdminMutationFn = Apollo.MutationFunction<CreateAdminMutation, CreateAdminMutationVariables>;

/**
 * __useCreateAdminMutation__
 *
 * To run a mutation, you first call `useCreateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminMutation, { data, loading, error }] = useCreateAdminMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAdminMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdminMutation, CreateAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdminMutation, CreateAdminMutationVariables>(CreateAdminDocument, options);
      }
export type CreateAdminMutationHookResult = ReturnType<typeof useCreateAdminMutation>;
export type CreateAdminMutationResult = Apollo.MutationResult<CreateAdminMutation>;
export type CreateAdminMutationOptions = Apollo.BaseMutationOptions<CreateAdminMutation, CreateAdminMutationVariables>;
export const UpdateAdminDocument = gql`
    mutation updateAdmin($data: AdminUpdateInput!, $where: AdminWhereUniqueInput!) {
  updateAdmin(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateAdminMutationFn = Apollo.MutationFunction<UpdateAdminMutation, UpdateAdminMutationVariables>;

/**
 * __useUpdateAdminMutation__
 *
 * To run a mutation, you first call `useUpdateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdminMutation, { data, loading, error }] = useUpdateAdminMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAdminMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdminMutation, UpdateAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdminMutation, UpdateAdminMutationVariables>(UpdateAdminDocument, options);
      }
export type UpdateAdminMutationHookResult = ReturnType<typeof useUpdateAdminMutation>;
export type UpdateAdminMutationResult = Apollo.MutationResult<UpdateAdminMutation>;
export type UpdateAdminMutationOptions = Apollo.BaseMutationOptions<UpdateAdminMutation, UpdateAdminMutationVariables>;
export const DeleteAdminDocument = gql`
    mutation deleteAdmin($where: AdminWhereUniqueInput!) {
  deleteAdmin(where: $where) {
    id
  }
}
    `;
export type DeleteAdminMutationFn = Apollo.MutationFunction<DeleteAdminMutation, DeleteAdminMutationVariables>;

/**
 * __useDeleteAdminMutation__
 *
 * To run a mutation, you first call `useDeleteAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdminMutation, { data, loading, error }] = useDeleteAdminMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAdminMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdminMutation, DeleteAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdminMutation, DeleteAdminMutationVariables>(DeleteAdminDocument, options);
      }
export type DeleteAdminMutationHookResult = ReturnType<typeof useDeleteAdminMutation>;
export type DeleteAdminMutationResult = Apollo.MutationResult<DeleteAdminMutation>;
export type DeleteAdminMutationOptions = Apollo.BaseMutationOptions<DeleteAdminMutation, DeleteAdminMutationVariables>;
export const CreateAssignmentDocument = gql`
    mutation createAssignment($data: AssignmentCreateInput!) {
  createAssignment(data: $data) {
    id
  }
}
    `;
export type CreateAssignmentMutationFn = Apollo.MutationFunction<CreateAssignmentMutation, CreateAssignmentMutationVariables>;

/**
 * __useCreateAssignmentMutation__
 *
 * To run a mutation, you first call `useCreateAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssignmentMutation, { data, loading, error }] = useCreateAssignmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAssignmentMutation, CreateAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAssignmentMutation, CreateAssignmentMutationVariables>(CreateAssignmentDocument, options);
      }
export type CreateAssignmentMutationHookResult = ReturnType<typeof useCreateAssignmentMutation>;
export type CreateAssignmentMutationResult = Apollo.MutationResult<CreateAssignmentMutation>;
export type CreateAssignmentMutationOptions = Apollo.BaseMutationOptions<CreateAssignmentMutation, CreateAssignmentMutationVariables>;
export const UpdateAssignmentDocument = gql`
    mutation updateAssignment($data: AssignmentUpdateInput!, $where: AssignmentWhereUniqueInput!) {
  updateAssignment(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateAssignmentMutationFn = Apollo.MutationFunction<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>;

/**
 * __useUpdateAssignmentMutation__
 *
 * To run a mutation, you first call `useUpdateAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssignmentMutation, { data, loading, error }] = useUpdateAssignmentMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>(UpdateAssignmentDocument, options);
      }
export type UpdateAssignmentMutationHookResult = ReturnType<typeof useUpdateAssignmentMutation>;
export type UpdateAssignmentMutationResult = Apollo.MutationResult<UpdateAssignmentMutation>;
export type UpdateAssignmentMutationOptions = Apollo.BaseMutationOptions<UpdateAssignmentMutation, UpdateAssignmentMutationVariables>;
export const DeleteAssignmentDocument = gql`
    mutation deleteAssignment($where: AssignmentWhereUniqueInput!) {
  deleteAssignment(where: $where) {
    id
  }
}
    `;
export type DeleteAssignmentMutationFn = Apollo.MutationFunction<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>;

/**
 * __useDeleteAssignmentMutation__
 *
 * To run a mutation, you first call `useDeleteAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssignmentMutation, { data, loading, error }] = useDeleteAssignmentMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>(DeleteAssignmentDocument, options);
      }
export type DeleteAssignmentMutationHookResult = ReturnType<typeof useDeleteAssignmentMutation>;
export type DeleteAssignmentMutationResult = Apollo.MutationResult<DeleteAssignmentMutation>;
export type DeleteAssignmentMutationOptions = Apollo.BaseMutationOptions<DeleteAssignmentMutation, DeleteAssignmentMutationVariables>;
export const CreateMeetingDocument = gql`
    mutation createMeeting($data: MeetingCreateInput!) {
  createMeeting(data: $data) {
    id
  }
}
    `;
export type CreateMeetingMutationFn = Apollo.MutationFunction<CreateMeetingMutation, CreateMeetingMutationVariables>;

/**
 * __useCreateMeetingMutation__
 *
 * To run a mutation, you first call `useCreateMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeetingMutation, { data, loading, error }] = useCreateMeetingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMeetingMutation(baseOptions?: Apollo.MutationHookOptions<CreateMeetingMutation, CreateMeetingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMeetingMutation, CreateMeetingMutationVariables>(CreateMeetingDocument, options);
      }
export type CreateMeetingMutationHookResult = ReturnType<typeof useCreateMeetingMutation>;
export type CreateMeetingMutationResult = Apollo.MutationResult<CreateMeetingMutation>;
export type CreateMeetingMutationOptions = Apollo.BaseMutationOptions<CreateMeetingMutation, CreateMeetingMutationVariables>;
export const UpdateMeetingDocument = gql`
    mutation updateMeeting($data: MeetingUpdateInput!, $where: MeetingWhereUniqueInput!) {
  updateMeeting(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateMeetingMutationFn = Apollo.MutationFunction<UpdateMeetingMutation, UpdateMeetingMutationVariables>;

/**
 * __useUpdateMeetingMutation__
 *
 * To run a mutation, you first call `useUpdateMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeetingMutation, { data, loading, error }] = useUpdateMeetingMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateMeetingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeetingMutation, UpdateMeetingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMeetingMutation, UpdateMeetingMutationVariables>(UpdateMeetingDocument, options);
      }
export type UpdateMeetingMutationHookResult = ReturnType<typeof useUpdateMeetingMutation>;
export type UpdateMeetingMutationResult = Apollo.MutationResult<UpdateMeetingMutation>;
export type UpdateMeetingMutationOptions = Apollo.BaseMutationOptions<UpdateMeetingMutation, UpdateMeetingMutationVariables>;
export const DeleteMeetingDocument = gql`
    mutation deleteMeeting($where: MeetingWhereUniqueInput!) {
  deleteMeeting(where: $where) {
    id
  }
}
    `;
export type DeleteMeetingMutationFn = Apollo.MutationFunction<DeleteMeetingMutation, DeleteMeetingMutationVariables>;

/**
 * __useDeleteMeetingMutation__
 *
 * To run a mutation, you first call `useDeleteMeetingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeetingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeetingMutation, { data, loading, error }] = useDeleteMeetingMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteMeetingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMeetingMutation, DeleteMeetingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMeetingMutation, DeleteMeetingMutationVariables>(DeleteMeetingDocument, options);
      }
export type DeleteMeetingMutationHookResult = ReturnType<typeof useDeleteMeetingMutation>;
export type DeleteMeetingMutationResult = Apollo.MutationResult<DeleteMeetingMutation>;
export type DeleteMeetingMutationOptions = Apollo.BaseMutationOptions<DeleteMeetingMutation, DeleteMeetingMutationVariables>;
export const LessonsDocument = gql`
    query Lessons($where: LessonWhereInput) {
  lessons(where: $where) {
    id
    title
    description
    published
    content
  }
}
    `;

/**
 * __useLessonsQuery__
 *
 * To run a query within a React component, call `useLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLessonsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLessonsQuery(baseOptions?: Apollo.QueryHookOptions<LessonsQuery, LessonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LessonsQuery, LessonsQueryVariables>(LessonsDocument, options);
      }
export function useLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LessonsQuery, LessonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LessonsQuery, LessonsQueryVariables>(LessonsDocument, options);
        }
export type LessonsQueryHookResult = ReturnType<typeof useLessonsQuery>;
export type LessonsLazyQueryHookResult = ReturnType<typeof useLessonsLazyQuery>;
export type LessonsQueryResult = Apollo.QueryResult<LessonsQuery, LessonsQueryVariables>;
export function refetchLessonsQuery(variables?: LessonsQueryVariables) {
      return { query: LessonsDocument, variables: variables }
    }
export const LessonDocument = gql`
    query Lesson($where: LessonWhereUniqueInput!) {
  lesson(where: $where) {
    id
    title
    description
    published
    content
  }
}
    `;

/**
 * __useLessonQuery__
 *
 * To run a query within a React component, call `useLessonQuery` and pass it any options that fit your needs.
 * When your component renders, `useLessonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLessonQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLessonQuery(baseOptions: Apollo.QueryHookOptions<LessonQuery, LessonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LessonQuery, LessonQueryVariables>(LessonDocument, options);
      }
export function useLessonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LessonQuery, LessonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LessonQuery, LessonQueryVariables>(LessonDocument, options);
        }
export type LessonQueryHookResult = ReturnType<typeof useLessonQuery>;
export type LessonLazyQueryHookResult = ReturnType<typeof useLessonLazyQuery>;
export type LessonQueryResult = Apollo.QueryResult<LessonQuery, LessonQueryVariables>;
export function refetchLessonQuery(variables: LessonQueryVariables) {
      return { query: LessonDocument, variables: variables }
    }
export const AssignmentDocument = gql`
    query Assignment($where: AssignmentWhereUniqueInput!) {
  assignment(where: $where) {
    id
    courseId
    title
    description
    published
    content
  }
}
    `;

/**
 * __useAssignmentQuery__
 *
 * To run a query within a React component, call `useAssignmentQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignmentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignmentQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useAssignmentQuery(baseOptions: Apollo.QueryHookOptions<AssignmentQuery, AssignmentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AssignmentQuery, AssignmentQueryVariables>(AssignmentDocument, options);
      }
export function useAssignmentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AssignmentQuery, AssignmentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AssignmentQuery, AssignmentQueryVariables>(AssignmentDocument, options);
        }
export type AssignmentQueryHookResult = ReturnType<typeof useAssignmentQuery>;
export type AssignmentLazyQueryHookResult = ReturnType<typeof useAssignmentLazyQuery>;
export type AssignmentQueryResult = Apollo.QueryResult<AssignmentQuery, AssignmentQueryVariables>;
export function refetchAssignmentQuery(variables: AssignmentQueryVariables) {
      return { query: AssignmentDocument, variables: variables }
    }
export const MeetingDocument = gql`
    query meeting($where: MeetingWhereUniqueInput!) {
  meeting(where: $where) {
    id
    title
    description
    courseId
    createdAt
    updatedAt
    date
    startTime
    duration
    link
  }
}
    `;

/**
 * __useMeetingQuery__
 *
 * To run a query within a React component, call `useMeetingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeetingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMeetingQuery(baseOptions: Apollo.QueryHookOptions<MeetingQuery, MeetingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeetingQuery, MeetingQueryVariables>(MeetingDocument, options);
      }
export function useMeetingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeetingQuery, MeetingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeetingQuery, MeetingQueryVariables>(MeetingDocument, options);
        }
export type MeetingQueryHookResult = ReturnType<typeof useMeetingQuery>;
export type MeetingLazyQueryHookResult = ReturnType<typeof useMeetingLazyQuery>;
export type MeetingQueryResult = Apollo.QueryResult<MeetingQuery, MeetingQueryVariables>;
export function refetchMeetingQuery(variables: MeetingQueryVariables) {
      return { query: MeetingDocument, variables: variables }
    }
export const CourseDocument = gql`
    query Course($where: CourseWhereUniqueInput!) {
  course(where: $where) {
    id
    title
    lessons {
      id
      title
      description
      published
      courseId
    }
    meetings {
      id
      link
      title
      date
      startTime
      duration
      courseId
    }
    assignments {
      id
      published
      courseId
    }
  }
}
    `;

/**
 * __useCourseQuery__
 *
 * To run a query within a React component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useCourseQuery(baseOptions: Apollo.QueryHookOptions<CourseQuery, CourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
      }
export function useCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseQuery, CourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
        }
export type CourseQueryHookResult = ReturnType<typeof useCourseQuery>;
export type CourseLazyQueryHookResult = ReturnType<typeof useCourseLazyQuery>;
export type CourseQueryResult = Apollo.QueryResult<CourseQuery, CourseQueryVariables>;
export function refetchCourseQuery(variables: CourseQueryVariables) {
      return { query: CourseDocument, variables: variables }
    }
export const CoursesDocument = gql`
    query Courses($where: CourseWhereInput, $orderBy: [CourseOrderByWithRelationInput!], $take: Int) {
  courses(where: $where, orderBy: $orderBy, take: $take) {
    id
    title
    description
    teacher {
      firstName
      lastName
    }
    _count {
      lessons
      assignments
      meetings
    }
  }
}
    `;

/**
 * __useCoursesQuery__
 *
 * To run a query within a React component, call `useCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useCoursesQuery(baseOptions?: Apollo.QueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
      }
export function useCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
        }
export type CoursesQueryHookResult = ReturnType<typeof useCoursesQuery>;
export type CoursesLazyQueryHookResult = ReturnType<typeof useCoursesLazyQuery>;
export type CoursesQueryResult = Apollo.QueryResult<CoursesQuery, CoursesQueryVariables>;
export function refetchCoursesQuery(variables?: CoursesQueryVariables) {
      return { query: CoursesDocument, variables: variables }
    }