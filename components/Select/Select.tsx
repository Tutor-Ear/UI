export interface SelectProps<T> {
  options: string[];
  label: keyof T;
  value: keyof T;
}
