import { Box, Container } from "@mantine/core";
import CourseCard from "@/ui/components/CourseCard";
import { Loader } from "@/ui/components/Loader";
import { useAppContext } from "@/context/";
import { useCallback, useRef } from "react";
import { Course, useCoursesQuery } from "@/graphql";
import { useVirtual } from "react-virtual";

const ListCourse = ({ courses }: { courses: Course[] }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtual({
    size: courses.length,
    parentRef,
    estimateSize: useCallback(() => 170, []),
  });

  return (
    <>
      <Box
        ref={parentRef}
        className="List"
        style={{
          display: "flex",
          height: `90vh`,
          width: `100%`,
          overflow: "auto",
        }}
      >
        <Box
          className="ListInner"
          style={{
            height: `${rowVirtualizer.totalSize}px`,
            width: "99.5%",
            position: "relative",
          }}
        >
          {rowVirtualizer.virtualItems.map((virtualRow) => {
            return (
              <div
                key={virtualRow.index}
                className={
                  virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"
                }
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <>
                  <CourseCard course={courses[virtualRow.index]} />
                </>
              </div>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export const CourseList = () => {
  const { user } = useAppContext();
  const { loading, data } = useCoursesQuery({
    variables: {
      where: user?.student
        ? {
            AND: [
              { topicId: { equals: user?.student?.topicId } },
              { year: { equals: user?.student?.year } },
            ],
          }
        : user?.teacher
        ? {
            teacherId: { equals: user?.teacher?.id },
          }
        : {},
    },
  });

  if (!data) {
    return <Loader height={"80vh"} />;
  }

  return (
    <Container
      my={20}
      size="xl"
      sx={{ display: "flex", gap: 15, flexDirection: "column" }}
    >
      {loading ? (
        <Loader height="80vh" />
      ) : (
        <ListCourse courses={data.courses as Course[]} />
      )}
    </Container>
  );
};

export default CourseList;
