import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProjectStyles';

export default function LessonScreen() {
  return (
    <ScrollView style={[styles.screen, styles.center]}>
      <Text style={styles.title}>บทที่ 2: แบบจำลองเครือข่ายและชั้นสื่อสาร (Network Models)</Text>
       
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}1. แนวคิดการทำงานแบบลำดับชั้น (Layered Architecture)</Text></View>
            <Text style={styles.subtitle}>การแบ่งระบบเครือข่ายเป็นชั้นสื่อสาร (Layer) ช่วยลดความซับซ้อน โดยแต่ละชั้นจะทำหน้าที่ของตนเองและให้บริการแก่ชั้นที่อยู่ถัดไป</Text>
            <Text style={styles.subtitle}>Peer-to-Peer Process: กระบวนการสื่อสารระหว่างชั้นสื่อสารระดับเดียวกันของฝั่งส่งและฝั่งรับ</Text>
          
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="logo-web-component" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>Encapsulation & Decapsulation</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. Encapsulation (ฝั่งส่ง): การห่อหุ้มข้อมูลโดยเพิ่มส่วนหัว (Header/Trailer) เข้าไปในแต่ละชั้น</Text>
              <Text style={styles.subtitle}>2. Decapsulation (ฝั่งรับ): การถอดส่วนหัวออกทีละชั้นเพื่อดึงข้อมูลต้นฉบับ</Text>
            </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}2. แบบจำลอง OSI (OSI Model 7 Layers)</Text></View>
            <Text style={styles.subtitle}>เป็นแบบจำลองอ้างอิงมาตรฐานสากล (Open System) ประกอบด้วย 7 ชั้นสื่อสาร</Text>

            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. Physical Layer: ส่งข้อมูลเป็นกระแสบิต (0 และ 1) ผ่านสื่อกลาง กำหนดคุณสมบัติทางไฟฟ้าและสัญญาณ</Text>
              <Text style={styles.subtitle}>2. Data Link Layer: จัดการข้อมูลเป็น Frame ส่งข้อมูลแบบ Node-to-Node (Hop-to-Hop) ตรวจสอบข้อผิดพลาด และใส่ Physical Address (MAC Address)</Text>
              <Text style={styles.subtitle}>3. Network Layer: จัดการข้อมูลเป็น Packet กำหนด Logical Address (IP Address) และเลือกเส้นทางที่ดีที่สุด (Routing)</Text>
              <Text style={styles.subtitle}>4. Transport Layer: จัดการข้อมูลเป็น Segment ควบคุมการรับส่งข้อมูลแบบ Process-to-Process โดยใช้ Port Number และรับประกันการส่งข้อมูลถึงปลายทาง (เช่น TCP/UDP)</Text>
              <Text style={styles.subtitle}>5. Session Layer: ควบคุมช่วงเวลา (Session) ตั้งแต่เริ่มเปิดการสื่อสาร การแลกเปลี่ยนข้อมูล จนถึงการจบการเชื่อมต่อ</Text>
              <Text style={styles.subtitle}>6. Presentation Layer: แปลงรูปแบบข้อมูล (Translation) การเข้ารหัส/ถอดรหัส (Encryption/Decryption) และการบีบอัดข้อมูล (Compression)</Text>
              <Text style={styles.subtitle}>7. Application Layer: ชั้นที่ติดต่อกับผู้ใช้หรือซอฟต์แวร์ประยุกต์ ให้บริการต่างๆ บนเครือข่าย (เช่น HTTP, SMTP, FTP)</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}3. แบบจำลองอินเทอร์เน็ต (TCP/IP Model 4 Layers)</Text></View>
            <Text style={styles.subtitle}>เป็นชุดโพรโทคอลที่ใช้งานจริงบนอินเทอร์เน็ต ถูกพัฒนามาก่อน OSI Model ประกอบด้วย 4 ชั้นสื่อสาร</Text>

            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. Network Access Layer: เทียบเท่าชั้น Physical + Data Link ของ OSI</Text>
              <Text style={styles.subtitle}>2. Internet Layer: เทียบเท่าชั้น Network ของ OSI (ใช้งาน IP Protocol)</Text>
              <Text style={styles.subtitle}>3. Transport Layer: เทียบเท่าชั้น Transport ของ OSI (ใช้งาน TCP/UDP Protocol)</Text>
              <Text style={styles.subtitle}>4. Application Layer: เทียบเท่าชั้น Session + Presentation + Application ของ OSI รวมกัน</Text>
            </View>
    </ScrollView>
  );
}