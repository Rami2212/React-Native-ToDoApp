import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TaskItem from './TaskItem';
import TaskActions from './TaskActions';
import { TaskListProps } from '../types';

const TaskList = ({
  tasks,
  activeTaskId,
  onTaskPress,
  onDeletePress,
  onEditPress,
  onSharePress,
}: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View>
          <TaskItem
            task={item}
            isActive={item.id === activeTaskId}
            onPress={() => onTaskPress(item.id)}
            onDelete={() => onDeletePress(item.id)}
          />
          {item.id === activeTaskId && (
            <TaskActions
              taskId={item.id}
              onEdit={() => onEditPress(item.id)}
              onShare={() => onSharePress(item.id)}
            />
          )}
        </View>
      )}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
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