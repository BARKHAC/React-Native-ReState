import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const Create = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  // Function to open modal
  const openModal = () => {
    setIsModalVisible(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Create Button - This button is in the Bottom Tab Bar */}
      <TouchableOpacity onPress={openModal} style={styles.createButton}>
        <Text style={styles.createButtonText}>+</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Button (X) */}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Modal Options */}
            <Text style={styles.modalTitle}>Choose an option:</Text>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Text style={styles.optionButtonText}>Poll</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    position: 'absolute',
    bottom: 70, // Positioned above the bottom tab bar
    right: 20,
    backgroundColor: '#007BFF',
    borderRadius: 50,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100, // Make sure it's on top
  },
  createButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#2C2929',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#ff4040',
    padding: 5,
    borderRadius: 50,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 20,
  },
  modalTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#555',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  optionButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Create;
