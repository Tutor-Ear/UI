import type {
  ComponentProps,
  ElementType,
  ValidationMap,
  WeakValidationMap,
} from "react";

type As<Props = any> = ElementType<Props>;

type ComponentWithProps<Component extends As, Props> = {
  (props: ComponentProps<Component> & Props): JSX.Element;
  displayName?: string;
  propTypes?: WeakValidationMap<Props> | undefined;
  contextTypes?: ValidationMap<any> | undefined;
  defaultProps?: Partial<Props> | undefined;
};

export interface UIComponent<T extends As, P>
  extends ComponentWithProps<T, P> {}
