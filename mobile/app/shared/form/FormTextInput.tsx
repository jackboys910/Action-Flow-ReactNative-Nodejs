import { TextInput, TextInputProps, Text, View, StyleProp, ViewStyle } from 'react-native';
import { Control, FieldValues, FieldPath, useController } from 'react-hook-form';
import { styles } from './formControls.styles';

type Props<T extends FieldValues> = {
  name: FieldPath<T>;
  control: Control<T>;
  containerStyle?: StyleProp<ViewStyle>;
  isTextArea?: boolean;
} & Omit<TextInputProps, 'value' | 'onChangeText'>;

export function FormTextInput<T extends FieldValues>({
  name,
  control,
  containerStyle,
  isTextArea,
  style,
  ...rest
}: Props<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <View style={containerStyle}>
      <TextInput
        {...rest}
        value={value as string}
        onChangeText={onChange}
        multiline={isTextArea}
        style={[isTextArea ? styles.textArea : styles.input, error && styles.errorInput, style]}
      />
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
}
