import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import useTaskStore from '../hooks/useTaskStore';
import { TaskActionsProps } from '../types';
import ActionButton from './ActionButton';
import EditTaskModal from './EditTaskModal';

const TaskActions = ({
  taskId,
  onEdit,
  onShare
}: TaskActionsProps) => {
  const { clearActiveTask, getTaskById, updateTask } = useTaskStore();
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);

  const task = getTaskById ? getTaskById(taskId) : null;

  const handleShare = () => {
    onShare();
  };

  const handleInfo = () => {
    //TODO
  };

  const handleEdit = () => {
    onEdit();
  };

  return (
    <>
      <View style={styles.container}>
        {/* Share Buttons */}
        <ActionButton
          imageSource={require('../../assets/icons/share.png')}
          onPress={handleShare}
        />

        {/* Info Buttons */}
        <ActionButton
          imageSource={require('../../assets/icons/info.png')}
          onPress={handleInfo}
        />

        {/* Edit Buttons */}
        <ActionButton
          imageSource={require('../../assets/icons/edit.png')}
          onPress={handleEdit}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  // Container
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 36,
    gap: 8,
    marginTop: 8,
    marginRight:-3,
  }
});

export default TaskActions;