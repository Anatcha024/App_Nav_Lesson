import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProjectStyles';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [aboutVisible, setAboutVisible] = useState(false); // สถานะเปิด/ปิด Modal แสดงข้อมูลแอป

  // กำหนดชุดสีสำหรับ โหมดปกติ / โหมดมืด
  const theme = {
    bg: isDarkMode ? '#121212' : '#ffffff',
    textPrimary: isDarkMode ? '#ffffff' : '#333333',
    textSecondary: isDarkMode ? '#a0a0a0' : '#888888',
    border: isDarkMode ? '#333333' : '#eeeeee',
    cardBg: isDarkMode ? '#1e1e1e' : '#f9f9f9',
  };

  return (
    <ScrollView 
      contentContainerStyle={[
        styles.screen, 
        { padding: 20, backgroundColor: theme.bg, minHeight: '100%' }
      ]}
    >
      <Text style={[styles.title, { marginBottom: 20, color: theme.textPrimary }]}>
        การตั้งค่า
      </Text>

      {/* กลุ่มการตั้งค่าทั่วไป */}
      <Text style={[styles.subtitle, { fontWeight: 'bold', color: theme.textSecondary, marginBottom: 10 }]}>
        ทั่วไป
      </Text>

      {/* เมนู: โหมดมืด (Dark Mode) */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderColor: theme.border }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="moon-outline" size={24} color="#FF1493" style={{ marginRight: 12 }} />
          <Text style={[styles.subtitle, { color: theme.textPrimary }]}>โหมดมืด (Dark Mode)</Text>
        </View>
        <Switch 
          value={isDarkMode} 
          onValueChange={(val) => setIsDarkMode(val)}
          trackColor={{ false: '#767577', true: '#FF1493' }}
        />
      </View>

      {/* เมนู: การแจ้งเตือน */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderColor: theme.border }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="notifications-outline" size={24} color="#FF1493" style={{ marginRight: 12 }} />
          <Text style={[styles.subtitle, { color: theme.textPrimary }]}>การแจ้งเตือนบทเรียน</Text>
        </View>
        <Switch 
          value={isNotificationEnabled} 
          onValueChange={(val) => setIsNotificationEnabled(val)}
          trackColor={{ false: '#767577', true: '#FF1493' }}
        />
      </View>

      {/* กลุ่มเกี่ยวกับแอป */}
      <Text style={[styles.subtitle, { fontWeight: 'bold', color: theme.textSecondary, marginTop: 25, marginBottom: 10 }]}>
        เกี่ยวกับ
      </Text>

      {/* เมนู: เกี่ยวกับแอปพลิเคชัน (กดแล้วเปิด Modal) */}
      <TouchableOpacity 
        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderColor: theme.border }}
        onPress={() => setAboutVisible(true)}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="information-circle-outline" size={24} color="#FF1493" style={{ marginRight: 12 }} />
          <Text style={[styles.subtitle, { color: theme.textPrimary }]}>เกี่ยวกับแอปพลิเคชัน</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={theme.textSecondary} />
      </TouchableOpacity>

      {/* เมนู: เวอร์ชัน */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="code-working-outline" size={24} color="#FF1493" style={{ marginRight: 12 }} />
          <Text style={[styles.subtitle, { color: theme.textPrimary }]}>เวอร์ชัน</Text>
        </View>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>1.0.0</Text>
      </View>

      {/* Modal ป๊อปอัปแสดงข้อมูลเกี่ยวกับแอปพลิเคชัน */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={aboutVisible}
        onRequestClose={() => setAboutVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', padding: 20 }}>
          <View style={{ width: '100%', backgroundColor: theme.cardBg, borderRadius: 16, padding: 20, alignItems: 'center' }}>
            <Ionicons name="logo-buffer" size={50} color="#FF1493" style={{ marginBottom: 10 }} />
            <Text style={[styles.title, { color: theme.textPrimary, fontSize: 18, marginBottom: 8 }]}>
              Data Network Learning App
            </Text>
            <Text style={[styles.cardText, { color: theme.textSecondary, textAlign: 'center', marginBottom: 15 }]}>
              แอปพลิเคชันสำหรับการเรียนรู้สื่อการสอนวิชาเครือข่ายคอมพิวเตอร์และการสื่อสารข้อมูล จัดทำขึ้นเพื่อสนับสนุนการเรียนรู้ด้วยตนเองผ่านระบบออนไลน์
            </Text>

            <TouchableOpacity 
              style={{ backgroundColor: '#FF1493', paddingVertical: 10, paddingHorizontal: 25, borderRadius: 8 }}
              onPress={() => setAboutVisible(false)}
            >
              <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>ปิด</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}