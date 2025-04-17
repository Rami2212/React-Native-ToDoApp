import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TaskItem from './TaskItem';
import TaskActions from './TaskActions';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  activeTaskId: string | null;
  onTaskPress: (taskId: string) => void;
  onDeletePress: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  activeTaskId,
  onTaskPress,
  onDeletePress
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <TaskItem
              task={item}
              isActive={item.id === activeTaskId}
              onPress={() => onTaskPress(item.id)}
              onDelete={() => {
                onDeletePress(item.id);
              }}
            />
            {item.id === activeTaskId && (
              <TaskActions taskId={item.id} />
            )}
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default TaskList;