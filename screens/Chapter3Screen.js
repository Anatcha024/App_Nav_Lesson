import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProjectStyles';

export default function LessonScreen() {
  return (
    <ScrollView style={[styles.screen, styles.center]}>
      <Text style={styles.title}>บทที่ 3: การส่งผ่านข้อมูล (Data Transmission)</Text>
       
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}1. พื้นฐานของข้อมูลและสัญญาณ (Data & Signals)</Text></View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. ข้อมูล (Data): ข้อเท็จจริงในคอมพิวเตอร์ (ตัวเลข, ภาพ, เสียง, วิดีโอ) ที่เก็บในรูปแบบไฟล์</Text>
              <Text style={styles.subtitle}>2. สัญญาณ (Signal): กระแสไฟฟ้าหรือคลื่นแม่เหล็กไฟฟ้าที่ใช้เข้ารหัสข้อมูลเพื่อส่งผ่านสื่อกลาง</Text>
            </View>
          
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="logo-web-component" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>รูปแบบข้อมูลและสัญญาณ</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. Analog: สัญญาณคลื่นแบบต่อเนื่อง ไวต่อสัญญาณรบกวน มีองค์ประกอบหลักคือ แอมพลิจูด (Amplitude), ความถี่ (Frequency) และเฟส (Phase)</Text>
              <Text style={styles.subtitle}>2. Digital: สัญญาณแบบไม่ต่อเนื่อง (แรงดันสูง/ต่ำ แทนบิต 0 และ 1) ทนต่อสัญญาณรบกวนได้ดีกว่า</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="logo-web-component" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>ปัจจัยที่ทำให้สัญญาณบิดเบี้ยว/สูญหาย</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. ความเบาบางของสัญญาณ (Attenuation - ต้องใช้ Amplifier/Repeater ช่วย)</Text>
              <Text style={styles.subtitle}>2. การบิดเบี้ยว (Distortion)</Text>
              <Text style={styles.subtitle}>3. สัญญาณรบกวน (Noise เช่น Thermal noise, Impulse noise, Crosstalk, Echo, Jitter)</Text>
            </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}2. การส่งข้อมูลด้วยสัญญาณดิจิทัล (Digital Transmission)</Text>
          </View>
            <Text style={styles.subtitle}>เDigital Data to Digital Signal: การแปลงข้อมูลดิจิทัลเป็นสัญญาณดิจิทัลผ่านสายส่ง</Text>

            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. Line Coding: เทคนิคแปลงสัญญาณ เช่น Unipolar, Polar (NRZ-L, NRZ-I, RZ, Manchester, Differential Manchester) และ Bipolar</Text>
              <Text style={styles.subtitle}>2. Block Coding: เพิ่มบิตพิเศษช่วยตรวจเช็กความถูกต้องและข้อผิดพลาด</Text>
              <Text style={styles.subtitle}>Analog Data to Digital Signal: แปลงสัญญาณแอนะล็อกเป็นดิจิทัลด้วยวิธี PCM (Pulse Code Modulation) มี 4 ขั้นตอน: Sampling (ชักตัวอย่าง/PAM) -> Quantization (แจงหน่วย) -> Binary Coding (แปลงเป็นเลขฐานสอง) -> Line Coding</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={styles.title2}>{'\n'}3. การสื่อสารระหว่างคอมพิวเตอร์กับอุปกรณ์</Text>
            </View>
                <Text style={styles.subtitle}>1. แบบขนาน (Parallel): ส่งข้อมูลพร้อมกันทีละหลายบิต (เช่น 8 บิต) เร็ว แต่ใช้สายเยอะและส่งได้ระยะสั้น</Text>
                <Text style={styles.subtitle}>2. แบบอนุกรม (Serial): ส่งทีละบิตเรียงต่อกัน ประหยัดสาย แบ่งเป็น 2 แบบ:</Text>
            <View style={{ width: '100%', paddingLeft: 10 }}>
                  <Text style={styles.subtitle}>2.1. Asynchronous: ไม่ใช้สัญญาณนาฬิกาควบคุม มีบิตเริ่มต้น (Start Bit) และบิตสิ้นสุด (Stop Bit) แนบไปทุกไบต์</Text>
                  <Text style={styles.subtitle}>2.2. Synchronous: ใช้สัญญาณนาฬิกากำหนดจังหวะ รวมข้อมูลส่งเป็น Frame ต่อเนื่องกัน ไม่มีช่องว่างระหว่าง Frame เหมาะกับการส่งข้อมูลปริมาณมาก</Text>
            </View>
                

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={styles.title2}>{'\n'}4. การส่งข้อมูลด้วยสัญญาณแอนะล็อก (Analog Transmission)</Text>
            </View>
              <Text style={styles.subtitle}>1. Digital Data to Analog Signal (ใช้งาน Modem): มอดูเลตข้อมูลดิจิทัลลงบนคลื่นพาห์ (Carrier Signal)</Text>
              <View style={{ width: '100%', paddingLeft: 10 }}>
                <Text style={styles.subtitle}>1.1. ASK: เปลี่ยนแอมพลิจูดตามบิตข้อมูล</Text>
                <Text style={styles.subtitle}>1.2. FSK: เปลี่ยนความถี่ตามบิตข้อมูล</Text>
                <Text style={styles.subtitle}>1.3. PSK: เปลี่ยนเฟสตามบิตข้อมูล (ทนสัญญาณรบกวนได้ดีที่สุด)</Text>
                <Text style={styles.subtitle}>1.4. QAM: ผสมผสาน ASK และ PSK เข้าด้วยกันเพื่อให้ส่งข้อมูลได้เร็วขึ้น</Text>
              </View>
              <Text style={styles.subtitle}>2. Analog Data to Analog Signal: มอดูเลตสัญญาณแอนะล็อกเข้ากับคลื่นพาห์ เช่น วิทยุ AM (เปลี่ยนแอมพลิจูด), วิทยุ FM (เปลี่ยนความถี่) และ PM (เปลี่ยนเฟส)</Text> 
    </ScrollView>
  );
}