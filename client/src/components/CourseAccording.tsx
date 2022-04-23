import { Accordion, Tabs } from "@mantine/core";

export default function CourseAccording({ title }) {
  return (
    <Accordion.Item label={title}>
      <Tabs>
        <Tabs.Tab label="Lessons"></Tabs.Tab>
        <Tabs.Tab label="TD"> </Tabs.Tab>
        <Tabs.Tab label="Meetings"> </Tabs.Tab>
      </Tabs>
    </Accordion.Item>
  );
}
