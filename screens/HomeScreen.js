import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProjectStyles';

export default function HomeScreen() {
  return (
    <ScrollView style={[styles.screen, styles.center]}>
      <Text style={styles.title}>ยินดีต้อนรับ</Text>
      <Text style={styles.title}>นักศึกษา Data Network</Text>
      <Text style={styles.title}>Online</Text>
      <Text style={styles.subtitle}>บทเรียนเตรียมความพร้อมก่อนเข้าสู่บทเรียน</Text>
      <View style={[styles.card, styles.center]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={[styles.cardTitle, { flex: 1 }]}>
            ภาพรวมและความสำคัญของวิชาเครือข่ายคอมพิวเตอร์ (Network Summary)
            </Text>
          </View>
        <Text style={styles.cardText}>
        ความสำคัญหลักของการเรียนรู้ระบบเครือข่าย คือการเข้าใจกระบวนการแลกเปลี่ยนข้อมูลข่าวสารระหว่างอุปกรณ์ จากเดิมที่เป็นระบบคอมพิวเตอร์เครื่องเดียว (Stand-alone) เปลี่ยนมาเป็นระบบที่เชื่อมต่อถึงกัน เพื่อให้สามารถแบ่งปันทรัพยากร ลดต้นทุน สื่อสารได้อย่างสะดวกรวดเร็ว ทำงานได้ทุกที่ทุกเวลา และมีความปลอดภัยของข้อมูลสูง</Text>
      </View>
      
      <View style={[styles.card, styles.center]}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="bookmarks-outline" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={[styles.cardTitle, { flex: 1 }]}>
            สรุปประโยชน์และหัวใจสำคัญของการเรียน
            </Text>
          </View>
        <Text style={styles.cardText}>
       บทเรียน Network ในเอกสารชุดนี้ มุ่งเน้นให้ผู้เรียนเข้าใจตั้งแต่ ทฤษฎีพื้นฐานของสัญญาณ สถาปัตยกรรมเครือข่าย แบบจำลองมาตรฐาน OSI/TCP-IP ไปจนถึง การนำไปปฏิบัติจริง ผ่านเครื่องมือจำลองเครือข่ายอย่าง Cisco Packet Tracer (เช่น การต่อสาย LAN, ตั้งค่า IP Address, สั่ง Ping และใช้ Simulator) เพื่อเตรียมความพร้อมสำหรับการออกแบบ ติดตั้ง และดูแลรักษาระบบเครือข่ายในองค์กรได้อย่างมีประสิทธิภาพ</Text>
      </View>
    </ScrollView>
  );
}