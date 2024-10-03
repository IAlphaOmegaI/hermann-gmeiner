import type { Override } from "@/types";
import { cn } from "@/utils";
import { type ControllerRenderProps, useFormContext } from "react-hook-form";
import { z } from "zod";
import { type FieldShape, getCoreZodType } from "../../form";
import { Checkbox } from "../checkbox";
import { DatePicker } from "../date-picker";
import { FileUploader } from "../file-uploader";
import { Input } from "../input";
import { Label } from "../label";
import { PhoneInput } from "../phone-input";
import { RadioGroup, RadioGroupItem } from "../radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Slider } from "../slider";
import { Switch } from "../switch";
import { Textarea } from "../textarea";
import type { FieldShapeConfig, InferredFieldConfig } from "./config";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";

const splitCamelCase = (name: string) => name.split(/(?=[A-Z])/).join(" ");
const INLINE_INPUTS = ["switch", "checkbox"];

export type InferredFormControlProps<
  S extends FieldShape,
  T extends z.ZodType,
> = {
  name: string;
  shouldHideFormField?: (fieldName: string, data: unknown) => boolean;
} & InferredFieldConfig<S, T>;

export const InferredFormControl = <S extends FieldShape, T extends z.ZodType>({
  shouldHideFormField,
  ...props
}: InferredFormControlProps<S, T>) => {
  const { watch } = useFormContext();
  const formData = watch();
  const isHiddenField = shouldHideFormField?.(props.name, formData);

  if (isHiddenField) return null;

  return (
    <FormField
      name={props.name}
      disabled={props.disabled}
      render={({ field }) => (
        <FormItem>
          <div
            className={cn(
              "flex flex-col gap-2",
              INLINE_INPUTS.includes(props.shape) && "flex-row items-center",
            )}
          >
            <FormLabel>{props.label ?? splitCamelCase(props.name)}</FormLabel>
            <FormControl>
              <InferredFormField {...props} {...field} />
            </FormControl>
          </div>
          {props.description && (
            <FormDescription>{props.description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

type InferredFormFieldsProps = {
  constraint: z.ZodType;
  className?: string;
} & Omit<FieldShapeConfig, "constraint"> &
  ControllerRenderProps;

export const InferredFormField = (config: InferredFormFieldsProps) => {
  const props = config as Override<InferredFormFieldsProps, FieldShapeConfig> &
    ControllerRenderProps;
  const isReadOnly = props.constraint instanceof z.ZodReadonly;
  const isDisabled = isReadOnly || props.disabled;

  switch (props.shape) {
    case "text":
      return <Input {...props} />;
    case "textarea":
      return <Textarea {...props} />;
    case "phone":
      return <PhoneInput {...props} />;
    case "switch":
      return <Switch {...props} />;
    case "checkbox":
      return <Checkbox {...props} />;
    case "slider": {
      const isRangeSlider = props.constraint.safeParse([1, 2]).success;
      const { min, max, value } = props;

      return (
        <>
          <Slider
            {...props}
            value={
              isRangeSlider
                ? [value?.[0] ?? min, value?.[1] ?? max]
                : [value ?? min]
            }
            onChange={() => {}}
            onValueChange={(values) => {
              props.onChange(isRangeSlider ? values : values[0]);
            }}
          />

          {isRangeSlider && (
            <div className={"mt-2 flex w-full justify-between text-2xs"}>
              <span>{value?.[0] ?? min}</span>
              <span>{value?.[1] ?? max}</span>
            </div>
          )}
        </>
      );
    }
    case "file":
      return <FileUploader {...props} />;
    case "select": {
      const options = getCoreZodType(props.constraint).options;

      return (
        <Select {...props} onValueChange={props.onChange}>
          <SelectTrigger>
            <SelectValue
              className={"capitalize"}
              placeholder={props.placeholder}
            />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {props.optionLabels?.[option] ?? option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }
    case "radio-group": {
      const options = getCoreZodType(props.constraint).options;
      const { optionLabels, ...inputProps } = props;

      return (
        <RadioGroup {...inputProps} onValueChange={props.onChange}>
          {options.map((option) => (
            <div
              key={option}
              className={cn(
                "flex cursor-pointer items-center gap-x-2",
                props.disabled && "cursor-not-allowed opacity-50",
              )}
            >
              <RadioGroupItem value={option} id={option} />
              <Label htmlFor={option} className="cursor-[inherit]">
                {optionLabels?.[option] ?? option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      );
    }
    case "date": {
      const isDateRange = props.constraint.safeParse({
        start: new Date(),
        end: new Date(),
      }).success;

      return (
        <DatePicker {...props} type={isDateRange ? "date-range" : "date"} />
      );
    }
    default:
      return null;
  }
};
