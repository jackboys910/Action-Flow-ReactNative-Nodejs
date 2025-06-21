import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Control, FieldValues, FieldPath, useController } from 'react-hook-form';
import { styles } from './formControls.styles';

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  options: string[];
};

export function FormPicker<T extends FieldValues>({ name, control, options }: Props<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <>
      <View style={styles.picker}>
        <Picker selectedValue={value} onValueChange={onChange}>
          {options.map((opt) => (
            <Picker.Item key={opt} label={opt} value={opt} />
          ))}
        </Picker>
      </View>
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </>
  );
}
