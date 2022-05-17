import { InputWrapper } from "@mantine/core";
import { RichTextEditor, RichTextEditorProps } from "@mantine/rte";
import { ReactNode } from "react";

interface RichTextEditorInputProps extends RichTextEditorProps {
  label?: string;
  description?: string;
  required?: boolean;
  error?: ReactNode;
}

export const RichTextEditorInput = ({
  label,
  description,
  error,
  id,
  required,
  ...others
}: RichTextEditorInputProps) => {
  return (
    <InputWrapper
      id={id}
      error={error}
      label={label}
      required={required}
      description={description}
    >
      <RichTextEditor
        id={id}
        sx={(theme) => ({
          minHeight: 250,
          border: error ? `1px solid ${theme.colors.red[6]}` : undefined,
          color: error ? theme.colors.red[6] : undefined,
        })}
        {...others}
      />
    </InputWrapper>
  );
};

export default RichTextEditorInput;
