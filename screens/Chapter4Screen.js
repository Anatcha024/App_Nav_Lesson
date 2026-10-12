import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProjectStyles';

export default function LessonScreen() {
  return (
    <ScrollView style={[styles.screen, styles.center]}>
      <Text style={styles.title}>บทที่ 4: บทที่ 4: สื่อกลางในการนำสัญญาณ (Transmission Media)</Text>
       
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}1. ประเภทของสื่อกลางในการนำสัญญาณ</Text></View>
            <Text style={styles.subtitle}>แบ่งออกเป็น 2 ประเภทหลัก ได้แก่</Text>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. สื่อกลางแบบมีสาย (Guided Media): สัญญาณนำทางไปตามตัวนำทางกายภาพ</Text>
              <Text style={styles.subtitle}>2. สื่อกลางแบบไร้สาย (Unguided Media): สัญญาณกระจายผ่านชั้นบรรยากาศหรืออวกาศ</Text>
            </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}2. สื่อกลางแบบมีสาย (Guided Media)</Text>
          </View>

            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. สายคู่ตีเกลียว (Twisted-Pair Cable): สายทองแดงนำมาตีเกลียวคู่กันเพื่อลดสัญญาณรบกวน (Crosstalk)</Text>
              <View style={{ width: '100%', paddingLeft: 10 }}>
                <Text style={styles.subtitle}>1.1 UTP (Unshielded Twisted-Pair): ไม่มีฉนวนหุ้มห่อภายนอก นิยมใช้ใน LAN ทั่วไป ราคาถูก</Text>
                <Text style={styles.subtitle}>1.2 STP (Shielded Twisted-Pair): มีฉนวนฟอยล์ป้องกันสัญญาณรบกวนภายนอกได้ดีกว่า</Text>
              </View>
              <Text style={styles.subtitle}>2. สายโคแอกเชียล (Coaxial Cable): สายที่มีแกนทองแดงเดี่ยวอยู่ตรงกลาง ล้อมรอบด้วยฉนวนและตาข่ายโลหะ ป้องกันสัญญาณรบกวนได้ดี นิยมใช้ในเคเบิลทีวีและเครือข่ายยุคแรก</Text>
              <Text style={styles.subtitle}>3. สายใยแก้วนำแสง (Fiber-Optic Cable): ส่งข้อมูลในรูปแบบของแสงผ่านแก้วหรือพลาสติก มีแบนด์วิดท์สูงมาก ไม่ถูกรบกวนจากคลื่นแม่เหล็กไฟฟ้า ส่งข้อมูลระยะไกลได้ดีเยี่ยม แบ่งเป็น</Text>
              <View style={{ width: '100%', paddingLeft: 10 }}>
                <Text style={styles.subtitle}>3.1. Single-mode: แกนเล็ก ส่งแสงแนวตรงได้ไกลมาก</Text>
                <Text style={styles.subtitle}>3.2. Multi-mode: แกนใหญ่ แสงสะท้อนหลายทิศทาง เหมาะกับระยะใกล้</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={styles.title2}>{'\n'}3. สื่อกลางแบบไร้สาย (Unguided Media)</Text></View>
              <Text style={styles.subtitle}>เป็นการส่งสัญญาณคลื่นแม่เหล็กไฟฟ้าผ่านอากาศ แบ่งตามย่านความถี่และการใช้งาน</Text>
              <Text style={styles.subtitle}>1. คลื่นวิทยุ (Radio Waves): กระจายได้ทุกทิศทาง (Omnidirectional) ทะลุสิ่งกีดขวางได้ เหมาะกับการสื่อสารไร้สายทั่วไป เช่น Wi-Fi, Bluetooth, AM/FM</Text>
              <Text style={styles.subtitle}>2. คลื่นไมโครเวฟ (Microwave): ส่งสัญญาณทิศทางเดียวเป็นแนวเส้นตรง (Line-of-Sight) ไม่ทะลุสิ่งกีดขวาง ต้องไม่มีสิ่งกีดขวางบังจานรับ-ส่ง แบ่งเป็น</Text>
              <View style={{ width: '100%', paddingLeft: 10 }}>
                <Text style={styles.subtitle}>2.1. Terrestrial Microwave: สถานีไมโครเวฟบนพื้นดิน (ตั้งบนภูเขา/ตึกสูง)</Text>
                <Text style={styles.subtitle}>2.2. Satellite Microwave: ระบบไมโครเวฟผ่านดาวเทียม สำหรับการสื่อสารข้ามประเทศหรือพื้นที่ห่างไกล</Text>
              </View>
               <Text style={styles.subtitle}>3. รังสีอินฟราเรด (Infrared): คลื่นความถี่สูง ไม่สามารถทะลุกำแพง/สิ่งกีดขวางได้ เหมาะกับการสื่อสารระยะสั้นมากๆ เช่น รีโมทคอนโทรล, การส่งข้อมูลระหว่างอุปกรณ์ใกล้ๆ</Text>
    </ScrollView>
  );
}