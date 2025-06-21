import { Switch, View, Text } from 'react-native';
import { Control, FieldValues, FieldPath, useController } from 'react-hook-form';
import { styles } from './formControls.styles';

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
};

export function FormSwitch<T extends FieldValues>({ name, control, label }: Props<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <View style={styles.switchWrapper}>
      {label && <Text style={styles.switchLabel}>{label}</Text>}
      <Switch value={value as boolean} onValueChange={onChange} />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
}
