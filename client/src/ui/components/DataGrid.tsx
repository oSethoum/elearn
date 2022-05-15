import {
  Box,
  Center,
  Checkbox,
  createStyles,
  Paper,
  ScrollArea,
  Table,
  Text,
  TableProps,
} from "@mantine/core";

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

  if (!data || data?.length == 0)
    return (
      <Paper sx={{ minHeight: 300 }}>
        <Center sx={{ minHeight: 300 }}>
          <Text>{t("empty")}</Text>
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

  const rows = data.map((d, index) => (
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
        <td key={i}>{d[k]}</td>
      ))}
      {actions && <td>{actions(index)}</td>}
    </tr>
  ));

  return (
    <Paper withBorder sx={{ height, width }} component={ScrollArea}>
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
            {actionsLabel && <th style={{ width: 100 }}>{t(actionsLabel)}</th>}
          </tr>
        </thead>
        <Box component="tbody">{rows}</Box>
      </Table>
    </Paper>
  );
}

export default DataGrid;
