import { gql } from "@apollo/client";

export const GET_COURSE = gql`
  query ($courseWhere: CourseWhereUniqueInput!) {
    course(where: $courseWhere) {
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
        title
        description
        published
        courseId
      }
    }
  }
`;
