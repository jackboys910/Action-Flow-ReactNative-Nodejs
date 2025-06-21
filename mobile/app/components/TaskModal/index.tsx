import { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskValidationSchema, taskValidationType } from '@utils/validation/taskValidation';
import { ITask } from '@interfaces/ITask';
import { FormTextInput } from '@shared/form/FormTextInput';
import { FormSwitch } from '@shared/form/FormSwitch';
import { styles } from './index.styles';

interface ITaskModalProps {
  visible: boolean;
  onClose: () => void;
  onSaveTask: (task: ITask) => void;
}

const TaskModal: React.FC<ITaskModalProps> = ({ visible, onClose, onSaveTask }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<taskValidationType>({
    resolver: zodResolver(taskValidationSchema),
    defaultValues: {
      title: '',
      description: '',
      isImportant: false,
    },
  });

  const handleSave = useCallback(
    (data: taskValidationType) => {
      const newTask: ITask = {
        id: Date.now().toString(),
        ...data,
        status: 'In Progress',
      };
      onSaveTask(newTask);
      reset();
      onClose();
    },
    [onSaveTask, reset, onClose],
  );

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [reset, onClose]);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={handleClose}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <View style={styles.content}>
        <Text style={styles.title}>Add New Task</Text>

        <FormTextInput name="title" control={control} placeholder="Task Title (1-30 characters)" />

        <FormTextInput
          name="description"
          control={control}
          placeholder="Description (optional, up to 100 chars)"
          isTextArea
        />

        <Text style={styles.label}>Important</Text>
        <FormSwitch name="isImportant" control={control} label="Important" />

        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSave)}>
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonClose} onPress={handleClose}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TaskModal;
