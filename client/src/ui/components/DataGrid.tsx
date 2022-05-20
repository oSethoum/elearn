import {
  Box,
  Center,
  Checkbox,
  createStyles,
  Paper,
  Table,
  Text,
  TableProps,
  Pagination,
  Group,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { ImFilesEmpty } from "react-icons/im";

interface DataGridProps extends TableProps {
  data?: object[];
  withSelection?: boolean;
  selectedIndexes?: number[];
  setSelectedIndexes?: (selectedIndexes: number[]) => void;
  headerModifier?: (text: string) => string;
  height?: number | string;
  width?: number | string;
  actions?: (index: number) => React.ReactNode;
  actionsLabel?: string;
}

const useStyles = createStyles((theme) => ({
  thead: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[1],
    height: "40px",
    position: "sticky",
    top: 0,
    zIndex: 10,
    boxShadow: `0px 0px 10px ${
      theme.colorScheme === "dark" ? theme.colors.gray[8] : theme.colors.gray[4]
    }`,
  },

  rowSelected: {
    backgroundColor: theme.fn.rgba(theme.colors.blue[7], 0.2),
  },
}));

export function DataGrid({
  data,
  selectedIndexes,
  withSelection,
  setSelectedIndexes,
  headerModifier,
  height,
  width,
  actionsLabel,
  actions,
  ...others
}: DataGridProps) {
  const { classes, cx } = useStyles();

  const t = headerModifier ? headerModifier : (text: string) => text;
  const [page, setPage] = useState(1);

  const [elements, setElements] = useState<Object[]>([]);

  useEffect(() => {
    if (data) {
      setElements([...data.slice((page - 1) * 10, page * 10)]);
    }
  }, [page, data]);

  if (!data || data?.length == 0)
    return (
      <Paper sx={{ minHeight: 300 }}>
        <Center sx={{ minHeight: 300 }}>
          <Group direction="column">
            <ImFilesEmpty size={36} />
            <Text>{t("empty")}</Text>
          </Group>
        </Center>
      </Paper>
    );

  const keys = Object.keys(data[0]);

  const ths = keys.map((key) => <th key={key}>{t(key)}</th>);

  const onChangeHandler = (index: number, op: boolean) => {
    if (op) {
      setSelectedIndexes &&
        selectedIndexes &&
        setSelectedIndexes([...selectedIndexes, index]);
    } else {
      setSelectedIndexes &&
        selectedIndexes &&
        setSelectedIndexes(selectedIndexes.filter((i) => i !== index));
    }
  };

  const toggleSelectedAll = () => {
    if (selectedIndexes && selectedIndexes.length === data.length) {
      setSelectedIndexes && setSelectedIndexes([]);
    } else {
      setSelectedIndexes && setSelectedIndexes(data.map((_, index) => index));
    }
  };

  const rows = elements.map((element, index) => (
    <tr
      key={index}
      className={cx(
        selectedIndexes?.includes(index) ? classes.rowSelected : null
      )}
    >
      {!!withSelection && (
        <td>
          <Checkbox
            checked={selectedIndexes?.includes(index)}
            onChange={(e) =>
              e.currentTarget.checked
                ? onChangeHandler(index, true)
                : onChangeHandler(index, false)
            }
          />
        </td>
      )}
      {keys.map((k, i) => (
        <td key={i}>{element[k]}</td>
      ))}
      {actions && <td>{actions(index)}</td>}
    </tr>
  ));

  const calculateTotal = () => {
    let rest = data.length % 10 > 0 ? 1 : 0;
    return Math.floor(data.length / 10) + rest;
  };

  return (
    <>
      <Paper withBorder sx={{ width, minHeight: 490 }}>
        <Table {...others}>
          <thead className={classes.thead}>
            <tr>
              {!!withSelection && (
                <th style={{ width: 20 }}>
                  <Checkbox
                    checked={selectedIndexes?.length === data.length}
                    indeterminate={
                      selectedIndexes &&
                      selectedIndexes?.length > 0 &&
                      selectedIndexes?.length < data.length
                    }
                    onChange={toggleSelectedAll}
                  />
                </th>
              )}
              {ths}
              {actionsLabel && (
                <th style={{ width: 100 }}>{t(actionsLabel)}</th>
              )}
            </tr>
          </thead>
          <Box component="tbody">{rows}</Box>
        </Table>
      </Paper>

      {data.length > 10 && (
        <Pagination
          initialPage={1}
          my={20}
          total={calculateTotal()}
          sx={{ float: "right" }}
          page={page}
          onChange={setPage}
        />
      )}
    </>
  );
}

export default DataGrid;
