import { cn } from "@/utils";
import type { ReactNode } from "react";
import type { UseFormReturn } from "react-hook-form";
import {
  Form,
  type FormConfig,
  InferredFormControl,
  type InferredFormControlProps,
  type InferredFormFields,
  type UseInferredFormParams,
  useInferredForm,
} from ".";
import type { UseInferredFormWithHideField } from "../../form";
import { Button, type ButtonProps } from "../button";

export type InferredFormProps<T extends FormConfig> = {
  onSubmit: (
    data: InferredFormFields<T>,
    form: UseFormReturn<InferredFormFields<T>>,
  ) => void | Promise<void>;
  config: UseInferredFormParams<T>[0];
  defaultValues?: NonNullable<UseInferredFormParams<T>[1]>["defaultValues"];
  hideFormFields?: NonNullable<UseInferredFormParams<T>[1]>["hideFormFields"];
  props?: NonNullable<UseInferredFormParams<T>[1]>["props"];
  children?: ReactNode;
  className?: string;
  shouldHideFormField?: (
    fieldName: keyof T,
    data: InferredFormFields<T>,
  ) => boolean;
};

export const InferredForm = <T extends FormConfig>({
  config,
  onSubmit,
  props = {},
  defaultValues,
  hideFormFields,
  children,
  className,
}: InferredFormProps<T>) => {
  const form = useInferredForm<T>(config, {
    defaultValues,
    hideFormFields,
    ...props,
  });

  const shouldHideField = hideFormFields
    ? (form as UseInferredFormWithHideField<T>).shouldHideField
    : undefined;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data, form))}
        className={cn("flex flex-col gap-2.5", className)}
      >
        {Object.entries(config).map(([key, field]) => {
          type InferredFieldProps = InferredFormControlProps<
            typeof field.shape,
            typeof field.constraint
          >;

          return (
            <InferredFormControl
              {...(field as InferredFieldProps)}
              shouldHideFormField={
                shouldHideField as InferredFieldProps["shouldHideFormField"]
              }
              key={key}
              name={key}
            />
          );
        })}
        <div className={"flex w-full justify-end"}>{children}</div>
      </form>
    </Form>
  );
};

export const FormSubmitButton = ({
  variant = "default",
  color = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <Button {...props} variant={variant} color={color} type={"submit"}>
      {children}
    </Button>
  );
};
