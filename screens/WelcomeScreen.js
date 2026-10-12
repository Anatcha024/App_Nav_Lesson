import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles, { COLORS } from '../styles/ProjectStyles';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={[styles.screen, styles.center, { padding: 24, justifyContent: 'center' }]}>
      {/* โลโก้แอป */}
      <View style={{ marginBottom: 24, alignItems: 'center' }}>
        <Ionicons name="logo-buffer" size={90} color={COLORS?.primary || '#FF1493'} />
      </View>

      {/* ข้อความต้อนรับ */}
      <Text style={[styles.title, { textAlign: 'center', marginBottom: 12, fontSize: 24 }]}>
        Data Network Learning
      </Text>
      
      <Text style={[styles.subtitle, { textAlign: 'center', marginBottom: 40, color: '#666' }]}>
        ยินดีต้อนรับสู่แอปพลิเคชันเรียนรู้การสื่อสารข้อมูลและเครือข่ายคอมพิวเตอร์
      </Text>

      {/* ปุ่มคลิกเข้าสู่หน้าหลัก */}
      <TouchableOpacity 
        style={customStyles.button}
        onPress={() => navigation.replace('MainTab')}
      >
        <Text style={customStyles.buttonText}>เข้าสู่บทเรียน</Text>
        <Ionicons name="arrow-forward" size={20} color="#FFFFFF" style={{ marginLeft: 8 }} />
      </TouchableOpacity>
    </View>
  );
}

const customStyles = StyleSheet.create({
  button: {
    backgroundColor: '#FF1493',
    flexDirection: 'row',
    alignItems: 'center',
    justify: 'center',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});