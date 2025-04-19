import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  Text,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { ShareTaskModalProps } from '../types';
import SocialMediaIcon from './SocialMediaIcon';

const ShareTaskModal = ({
  visible,
  task,
  onClose,
}: ShareTaskModalProps) => {
  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalContainer} onPress={handleCancel}>
        <Pressable style={styles.modalContent} onPress={() => {}}>
          <View style={styles.buttonContainer}>
            <SocialMediaIcon
              imageSource={require('../../assets/icons/copy.png')}
              onPress={handleCancel}
            />
            <SocialMediaIcon
              imageSource={require('../../assets/icons/vk.png')}
              onPress={handleCancel}
            />
            <SocialMediaIcon
              imageSource={require('../../assets/icons/telegram.png')}
              onPress={handleCancel}
            />
            <SocialMediaIcon
              imageSource={require('../../assets/icons/whatsapp.png')}
              onPress={handleCancel}
            />
            <SocialMediaIcon
              imageSource={require('../../assets/icons/facebook.png')}
              onPress={handleCancel}
            />
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({

  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.BACKGROUND_OVERLAY,
  },

  modalContent: {
    width: '100%',
    backgroundColor: COLORS.BACKGROUND,
    height: 76,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
});

export default ShareTaskModal;
