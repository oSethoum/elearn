import {
  Anchor,
  Box,
  Group,
  PasswordInput,
  PasswordInputProps,
  Text,
} from "@mantine/core";
import { forwardRef } from "react";

type ForgotPasswordInput = PasswordInputProps & {
  component?: any;
  componentProps?: any;
  linkLabel: string;
};

export const ForgotPasswordInput = forwardRef<
  HTMLInputElement,
  ForgotPasswordInput
>(
  (
    { componentProps, component, linkLabel, label, required, ...others },
    ref
  ) => {
    return (
      <Box>
        <Group position="apart">
          <Text size="sm" weight={500}>
            {label}{" "}
            {!!required && (
              <Text component="span" color="red">
                *
              </Text>
            )}
          </Text>
          <Anchor
            tabIndex={-1}
            size="xs"
            component={component}
            {...componentProps}
          >
            {linkLabel}
          </Anchor>
        </Group>
        <PasswordInput ref={ref} {...others} />
      </Box>
    );
  }
);
