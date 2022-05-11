import {
  Box,
  Checkbox,
  createStyles,
  Paper,
  ScrollArea,
  Table,
  TableProps,
} from "@mantine/core";
import { useEffect, useState } from "react";

interface DataGridProps extends TableProps {
  data: object[];
  onSelectionChanged?: (selectedIndexes: Number[]) => void;
  headerModifier?: (text: string) => string;
  height?: number | string;
}

const useStyles = createStyles((theme, params) => ({
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

  td: {
    ...theme.fn.focusStyles(),
    margin: 5,
  },

  rowSelected: {
    backgroundColor: theme.fn.rgba(theme.colors.blue[7], 0.2),
  },
}));

export function DataGrid({
  data,
  onSelectionChanged,
  headerModifier,
  height,
  ...others
}: DataGridProps) {
  const { classes, cx, theme } = useStyles();
  const [selected, setSelected] = useState<Number[]>([]);
  const keys = Object.keys(data[0]);

  const ths = keys.map((key) => (
    <th key={key}>{headerModifier ? headerModifier(key) : key}</th>
  ));

  useEffect(() => {
    onSelectionChanged && onSelectionChanged(selected);
  }, [selected]);

  const updateChecked = (index: number) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const toggleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((_, i) => i));
    }
  };

  const rows = data.map((d, index) => (
    <tr
      key={index}
      className={cx(selected.includes(index) ? classes.rowSelected : null)}
      onClick={() => updateChecked(index)}
    >
      <td>
        <Checkbox
          checked={selected.includes(index)}
          onChange={() => updateChecked(index)}
        />
      </td>
      {keys.map((k, i) => (
        <td className={cx(classes.td)} tabIndex={1} key={i}>
          {d[k]}
        </td>
      ))}
    </tr>
  ));

  return (
    <Paper withBorder sx={{ height }} component={ScrollArea}>
      <Table sx={{ borderCollapse: "separate" }} {...others}>
        <thead className={classes.thead}>
          <tr>
            <th style={{ width: 20 }}>
              <Checkbox
                checked={selected.length === data.length}
                indeterminate={
                  selected.length > 0 && selected.length < data.length
                }
                onChange={toggleSelectAll}
              />
            </th>
            {ths}
          </tr>
        </thead>
        <Box component="tbody">{rows}</Box>
      </Table>
    </Paper>
  );
}

export default DataGrid;
