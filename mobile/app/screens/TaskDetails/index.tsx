import { useCallback } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { taskDetailsSchema, taskDetailsType } from '@utils/validation/taskValidation';
import { ITask } from '@interfaces/ITask';
import { useTaskStore } from '@store/useTaskStore';
import { statusOptions } from '@constants/statusOptions';
import { FormTextInput } from '@shared/form/FormTextInput';
import { FormSwitch } from '@shared/form/FormSwitch';
import { FormPicker } from '@shared/form/FormPicker';
import { styles } from './index.styles';

interface IRouteParams {
  task: ITask;
}

const TaskDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { task } = route.params as IRouteParams;

  const { updateTask, deleteTask } = useTaskStore();

  const { control, handleSubmit } = useForm<taskDetailsType>({
    resolver: zodResolver(taskDetailsSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      status: task.status,
      isImportant: task.isImportant,
    },
  });

  const handleSave = useCallback(
    (data: taskDetailsType) => {
      updateTask({
        ...task,
        ...data,
      });
      navigation.goBack();
    },
    [task, updateTask, navigation],
  );

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
    navigation.goBack();
  }, [deleteTask, task.id, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <FormTextInput
        name="title"
        control={control}
        placeholder="Enter task name (1-30 characters)"
      />

      <Text style={styles.label}>Important</Text>
      <FormSwitch name="isImportant" control={control} />

      <Text style={styles.label}>Description</Text>
      <FormTextInput
        name="description"
        control={control}
        placeholder="Enter task description"
        isTextArea
      />

      <Text style={styles.label}>Status</Text>
      <FormPicker name="status" control={control} options={statusOptions} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit(handleSave)}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TaskDetails;
