import { useRadioGroup } from 'react-aria';
import { RadioGroupProps, useRadioGroupState } from 'react-stately';
import { RadioContext } from './radio-context';

type Props = {
  children: React.ReactNode;
};

type AllProps = Props & RadioGroupProps;

export function RadioGroup({ children, ...props }: AllProps) {
  const state = useRadioGroupState(props);
  const { radioGroupProps } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}
