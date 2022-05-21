var c=Object.defineProperty;var i=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var d=(t,e,u)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u,n=(t,e)=>{for(var u in e||(e={}))p.call(e,u)&&d(t,u,e[u]);if(i)for(var u of i(e))m.call(e,u)&&d(t,u,e[u]);return t};import{V as a,W as o,X as s}from"./vendor.0be45842.js";const r={},h=a`
    mutation createLesson($data: LessonCreateInput!) {
  createLesson(data: $data) {
    id
  }
}
    `;function X(t){const e=n(n({},r),t);return s(h,e)}const $=a`
    mutation updateLesson($data: LessonUpdateInput!, $where: LessonWhereUniqueInput!) {
  updateLesson(data: $data, where: $where) {
    id
  }
}
    `;function K(t){const e=n(n({},r),t);return s($,e)}const l=a`
    mutation deleteLesson($where: LessonWhereUniqueInput!) {
  deleteLesson(where: $where) {
    id
  }
}
    `;function Y(t){const e=n(n({},r),t);return s(l,e)}const w=a`
    mutation createCourse($data: CourseCreateInput!) {
  createCourse(data: $data) {
    id
  }
}
    `;function Z(t){const e=n(n({},r),t);return s(w,e)}const U=a`
    mutation updateCourse($data: CourseUpdateInput!, $where: CourseWhereUniqueInput!) {
  updateCourse(data: $data, where: $where) {
    id
  }
}
    `;function ee(t){const e=n(n({},r),t);return s(U,e)}const D=a`
    mutation deleteCourse($where: CourseWhereUniqueInput!) {
  deleteCourse(where: $where) {
    id
  }
}
    `;function te(t){const e=n(n({},r),t);return s(D,e)}const g=a`
    mutation createTopic($data: TopicCreateInput!) {
  createTopic(data: $data) {
    id
  }
}
    `;function ne(t){const e=n(n({},r),t);return s(g,e)}const I=a`
    mutation updateTopic($data: TopicUpdateInput!, $where: TopicWhereUniqueInput!) {
  updateTopic(data: $data, where: $where) {
    id
  }
}
    `;function ae(t){const e=n(n({},r),t);return s(I,e)}const T=a`
    mutation deleteTopic($where: TopicWhereUniqueInput!) {
  deleteTopic(where: $where) {
    id
  }
}
    `;function re(t){const e=n(n({},r),t);return s(T,e)}a`
    mutation createUser($data: UserCreateInput!) {
  createUser(data: $data) {
    id
  }
}
    `;const C=a`
    mutation updateManyUser($data: UserUpdateManyMutationInput!, $where: UserWhereInput) {
  updateManyUser(data: $data, where: $where) {
    count
  }
}
    `;function se(t){const e=n(n({},r),t);return s(C,e)}const A=a`
    mutation updateUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
  updateUser(data: $data, where: $where) {
    id
  }
}
    `;function ue(t){const e=n(n({},r),t);return s(A,e)}const M=a`
    mutation deleteUser($where: UserWhereUniqueInput!) {
  deleteUser(where: $where) {
    id
  }
}
    `;function oe(t){const e=n(n({},r),t);return s(M,e)}const f=a`
    mutation createStudent($data: StudentCreateInput!) {
  createStudent(data: $data) {
    id
  }
}
    `;function ie(t){const e=n(n({},r),t);return s(f,e)}const y=a`
    mutation updateStudent($data: StudentUpdateInput!, $where: StudentWhereUniqueInput!) {
  updateStudent(data: $data, where: $where) {
    id
  }
}
    `;function de(t){const e=n(n({},r),t);return s(y,e)}a`
    mutation deleteStudent($where: StudentWhereUniqueInput!) {
  deleteStudent(where: $where) {
    id
  }
}
    `;const q=a`
    mutation createTeacher($data: TeacherCreateInput!) {
  createTeacher(data: $data) {
    id
  }
}
    `;function ce(t){const e=n(n({},r),t);return s(q,e)}const W=a`
    mutation updateTeacher($data: TeacherUpdateInput!, $where: TeacherWhereUniqueInput!) {
  updateTeacher(data: $data, where: $where) {
    id
  }
}
    `;function pe(t){const e=n(n({},r),t);return s(W,e)}a`
    mutation deleteTeacher($where: TeacherWhereUniqueInput!) {
  deleteTeacher(where: $where) {
    id
  }
}
    `;a`
    mutation createAdmin($data: AdminCreateInput!) {
  createAdmin(data: $data) {
    id
  }
}
    `;a`
    mutation updateAdmin($data: AdminUpdateInput!, $where: AdminWhereUniqueInput!) {
  updateAdmin(data: $data, where: $where) {
    id
  }
}
    `;a`
    mutation deleteAdmin($where: AdminWhereUniqueInput!) {
  deleteAdmin(where: $where) {
    id
  }
}
    `;const S=a`
    mutation createAssignment($data: AssignmentCreateInput!) {
  createAssignment(data: $data) {
    id
  }
}
    `;function me(t){const e=n(n({},r),t);return s(S,e)}const L=a`
    mutation updateAssignment($data: AssignmentUpdateInput!, $where: AssignmentWhereUniqueInput!) {
  updateAssignment(data: $data, where: $where) {
    id
  }
}
    `;function he(t){const e=n(n({},r),t);return s(L,e)}const N=a`
    mutation deleteAssignment($where: AssignmentWhereUniqueInput!) {
  deleteAssignment(where: $where) {
    id
  }
}
    `;function $e(t){const e=n(n({},r),t);return s(N,e)}const b=a`
    mutation createMeeting($data: MeetingCreateInput!) {
  createMeeting(data: $data) {
    id
  }
}
    `;function le(t){const e=n(n({},r),t);return s(b,e)}const Q=a`
    mutation updateMeeting($data: MeetingUpdateInput!, $where: MeetingWhereUniqueInput!) {
  updateMeeting(data: $data, where: $where) {
    id
  }
}
    `;function we(t){const e=n(n({},r),t);return s(Q,e)}const _=a`
    mutation deleteMeeting($where: MeetingWhereUniqueInput!) {
  deleteMeeting(where: $where) {
    id
  }
}
    `;function Ue(t){const e=n(n({},r),t);return s(_,e)}const k=a`
    mutation createDepartment($data: DepartmentCreateInput!) {
  createDepartment(data: $data) {
    id
  }
}
    `;function De(t){const e=n(n({},r),t);return s(k,e)}const B=a`
    mutation updateDepartment($data: DepartmentUpdateInput!, $where: DepartmentWhereUniqueInput!) {
  updateDepartment(data: $data, where: $where) {
    id
  }
}
    `;function ge(t){const e=n(n({},r),t);return s(B,e)}const P=a`
    mutation deleteDepartment($where: DepartmentWhereUniqueInput!) {
  deleteDepartment(where: $where) {
    id
  }
}
    `;function Ie(t){const e=n(n({},r),t);return s(P,e)}a`
    query Lessons($where: LessonWhereInput) {
  lessons(where: $where) {
    id
    title
    description
    published
    content
  }
}
    `;const O=a`
    query Lesson($where: LessonWhereUniqueInput!) {
  lesson(where: $where) {
    id
    title
    description
    published
    content
  }
}
    `;function Te(t){const e=n(n({},r),t);return o(O,e)}const x=a`
    query Departments($where: DepartmentWhereInput) {
  departments(where: $where) {
    id
    name
    _count {
      topics
    }
  }
}
    `;function Ce(t){const e=n(n({},r),t);return o(x,e)}a`
    query Teacher($where: TeacherWhereUniqueInput!) {
  teacher(where: $where) {
    id
    firstName
    lastName
    userId
    user {
      id
      email
      username
      disabled
    }
  }
}
    `;const j=a`
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
    `;function Ae(t){const e=n(n({},r),t);return o(j,e)}const v=a`
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
    `;function Me(t){const e=n(n({},r),t);return o(v,e)}const z=a`
    query statePageData($swhere: StudentWhereInput, $twhere: TeacherWhereInput) {
  aggregateCourse {
    _count {
      _all
    }
  }
  aggregateStudent {
    _count {
      _all
    }
  }
  aggregateTeacher {
    _count {
      _all
    }
  }
  aggregateTopic {
    _count {
      _all
    }
  }
  students(where: $swhere) {
    id
    firstName
    lastName
    year
    topic {
      name
    }
    user {
      id
      role
      username
      createdAt
      disabled
      email
    }
  }
  teachers(where: $twhere) {
    id
    firstName
    lastName
    user {
      id
      username
      disabled
      createdAt
      role
      email
    }
  }
}
    `;function fe(t){const e=n(n({},r),t);return o(z,e)}a`
    query Admins($where: AdminWhereInput) {
  admins(where: $where) {
    id
    firstName
    lastName
    user {
      id
      username
      createdAt
      disabled
      email
    }
  }
}
    `;const E=a`
    query Teachers($where: TeacherWhereInput) {
  teachers(where: $where) {
    id
    firstName
    lastName
    user {
      id
      email
      createdAt
      disabled
      username
    }
  }
}
    `;function ye(t){const e=n(n({},r),t);return o(E,e)}a`
    query Students($where: StudentWhereInput) {
  students(where: $where) {
    id
    firstName
    lastName
    year
    topic {
      name
    }
    user {
      id
      email
      createdAt
      disabled
      username
    }
  }
}
    `;const F=a`
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
      title
      description
      published
      courseId
    }
  }
}
    `;function qe(t){const e=n(n({},r),t);return o(F,e)}a`
    query Student($where: StudentWhereUniqueInput!) {
  student(where: $where) {
    firstName
    lastName
    year
    lastName
    topicId
    user {
      username
      email
      disabled
      id
      role
    }
  }
}
    `;const G=a`
    query Courses($where: CourseWhereInput, $orderBy: [CourseOrderByWithRelationInput!], $take: Int) {
  courses(where: $where, orderBy: $orderBy, take: $take) {
    id
    title
    description
    topic {
      id
      name
    }
    topicId
    year
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
    `;function We(t){const e=n(n({},r),t);return o(G,e)}const H=a`
    query Topics($where: TopicWhereInput) {
  topics(where: $where) {
    id
    name
    years
    department {
      id
      name
    }
    _count {
      courses
      students
    }
  }
}
    `;function Se(t){const e=n(n({},r),t);return o(H,e)}const J=a`
    query DashboardUsers($awhere: AdminWhereInput, $twhere: TeacherWhereInput, $swhere: StudentWhereInput) {
  admins(where: $awhere) {
    id
    firstName
    lastName
    user {
      id
      username
      createdAt
      disabled
      email
    }
  }
  teachers(where: $twhere) {
    id
    firstName
    lastName
    user {
      id
      email
      createdAt
      disabled
      username
    }
  }
  students(where: $swhere) {
    id
    firstName
    lastName
    year
    topicId
    topic {
      name
    }
    user {
      id
      email
      createdAt
      disabled
      username
    }
  }
}
    `;function Le(t){const e=n(n({},r),t);return o(J,e)}const Ne={Query:{Lessons:"Lessons",Lesson:"Lesson",Departments:"Departments",Teacher:"Teacher",Assignment:"Assignment",meeting:"meeting",statePageData:"statePageData",Admins:"Admins",Teachers:"Teachers",Students:"Students",Course:"Course",Student:"Student",Courses:"Courses",Topics:"Topics",DashboardUsers:"DashboardUsers"},Mutation:{createLesson:"createLesson",updateLesson:"updateLesson",deleteLesson:"deleteLesson",createCourse:"createCourse",updateCourse:"updateCourse",deleteCourse:"deleteCourse",createTopic:"createTopic",updateTopic:"updateTopic",deleteTopic:"deleteTopic",createUser:"createUser",updateManyUser:"updateManyUser",updateUser:"updateUser",deleteUser:"deleteUser",createStudent:"createStudent",updateStudent:"updateStudent",deleteStudent:"deleteStudent",createTeacher:"createTeacher",updateTeacher:"updateTeacher",deleteTeacher:"deleteTeacher",createAdmin:"createAdmin",updateAdmin:"updateAdmin",deleteAdmin:"deleteAdmin",createAssignment:"createAssignment",updateAssignment:"updateAssignment",deleteAssignment:"deleteAssignment",createMeeting:"createMeeting",updateMeeting:"updateMeeting",deleteMeeting:"deleteMeeting",createDepartment:"createDepartment",updateDepartment:"updateDepartment",deleteDepartment:"deleteDepartment"}};export{ie as A,ce as B,Le as C,oe as D,ue as E,ge as F,De as G,Ie as H,se as I,fe as J,ye as a,ee as b,Z as c,We as d,te as e,Ce as f,ae as g,ne as h,re as i,le as j,we as k,Me as l,Y as m,Ne as n,$e as o,Ue as p,qe as q,Te as r,Ae as s,me as t,Se as u,he as v,X as w,K as x,de as y,pe as z};
