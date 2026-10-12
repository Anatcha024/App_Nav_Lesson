import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProjectStyles';

export default function LessonScreen() {
  return (
    <ScrollView style={[styles.screen, styles.center]}>
      <Text style={styles.title}>บทที่ 1: พื้นฐานการสื่อสารข้อมูลและเครือข่าย</Text>
       
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}1. การสื่อสารข้อมูล (Data Communication)</Text></View>
            <Text style={styles.subtitle}>กระบวนการแลกเปลี่ยนข้อมูลระหว่างผู้ส่งและผู้รับผ่านสื่อกลาง</Text>
          
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="logo-web-component" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>องค์ประกอบ 5 ประการ</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. ข้อมูลข่าวสาร (Message)</Text>
              <Text style={styles.subtitle}>2. ผู้ส่ง (Sender)</Text>
              <Text style={styles.subtitle}>3. ผู้รับ (Receiver)</Text>
              <Text style={styles.subtitle}>4. สื่อกลาง (Medium)</Text>
              <Text style={styles.subtitle}>5. โพรโทคอล (Protocol)</Text>
            </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
            <Ionicons name="clipboard-outline" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>คุณลักษณะพื้นฐาน 3 ประการ</Text>
          </View>
          <View style={{ width: '100%', paddingLeft: 10 }}>
            <Text style={styles.subtitle}>1. ความถูกต้องของการส่ง (Delivery)</Text>
            <Text style={styles.subtitle}>2. ความถูกต้องของข้อมูล (Accuracy)</Text>
            <Text style={styles.subtitle}>3. ระยะเวลาที่เหมาะสม (Timeliness)</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
            <Ionicons name="compass-outline" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>ทิศทางการสื่อสาร 3 รูปแบบ</Text>
          </View>
          <View style={{ width: '100%', paddingLeft: 10 }}>
            <Text style={styles.subtitle}>1. Simplex (ทางเดียว)</Text>
            <Text style={styles.subtitle}>2. Half-Duplex (สลับกันส่งคนละเวลา)</Text>
            <Text style={styles.subtitle}>3. Full-Duplex (รับ-ส่งพร้อมกันได้)</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}2. เครือข่ายคอมพิวเตอร์ (Computer Network)</Text></View>
            <Text style={styles.subtitle}>การเชื่อมต่อกลุ่มอุปกรณ์/โหนดเข้าด้วยกันเพื่อสื่อสารและใช้ทรัพยากรร่วมกัน</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="key-outline" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>ประโยชน์หลัก</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. แชร์ทรัพยากร/ไฟล์ข้อมูล</Text>
              <Text style={styles.subtitle}>2. ลดค่าใช้จ่าย</Text>
              <Text style={styles.subtitle}>3. ติดต่อสื่อสารสะดวก</Text>
              <Text style={styles.subtitle}>4. ทำงานได้ทุกที่ทุกเวลา</Text>
              <Text style={styles.subtitle}>5. มีความปลอดภัย/น่าเชื่อถือสูง</Text>
            </View>

             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="map-outline" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>3 ประเภทเครือข่าย (แบ่งตามขนาดพื้นที่)</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. LAN: เครือข่ายระยะใกล้ (บ้าน/อาคารเดียวกัน)</Text>
              <Text style={styles.subtitle}>2. MAN: เครือข่ายระดับเมือง/เทศบาล</Text>
              <Text style={styles.subtitle}>3. WAN: เครือข่ายวงกว้างระดับประเทศ/โลก (เช่น อินเทอร์เน็ต)</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}3. ลักษณะการเชื่อมต่อและสถาปัตยกรรม (Topology)</Text></View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="key-outline" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>รูปแบบการเชื่อมต่อพื้นฐาน</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. จุดต่อจุด (Point-to-Point)</Text>
              <Text style={styles.subtitle}>2. หลายจุด (Multi-point)</Text>
            </View>

             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="logo-web-component" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>5 ทอพอโลยีหลัก</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. Bus: ใช้สายหลัก (Backbone) เส้นเดียว ติดตั้งง่าย ราคาถูก แต่ถ้าสายหลักขาดระบบล้มทั้งหมด</Text>
              <Text style={styles.subtitle}>2. Star: เชื่อมต่อเข้ากับอุปกรณ์ศูนย์กลาง (Switch/Hub) นิยมมากที่สุด ตรวจสอบปัญหาง่าย</Text>
              <Text style={styles.subtitle}>3. Ring: เชื่อมต่อเป็นวงกลม ใช้บัตรผ่าน (Token) วิ่งเวียนเพื่อส่งข้อมูล ลดการชนกันของข้อมูล</Text>
              <Text style={styles.subtitle}>4. Mesh: เชื่อมต่อระหว่างโหนดแบบจุดต่อจุดทุกเครื่อง เสถียรและปลอดภัยสูงที่สุด แต่ค่าใช้จ่ายแพง</Text>
              <Text style={styles.subtitle}>5. Hybrid: ผสมผสานทอพอโลยีหลายแบบเข้าด้วยกัน</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}4. มาตรฐานและองค์กรควบคุม (Data Communication)</Text></View>
            <Text style={styles.subtitle}>การมีมาตรฐานกลางช่วยให้อุปกรณ์ต่างยี่ห้อสามารถทำงานร่วมกันได้</Text>
          
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="logo-web-component" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>ประเภทมาตรฐาน</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. มาตรฐานโดยพฤตินัย (De facto - ยอมรับโดยทั่วไป)</Text>
              <Text style={styles.subtitle}>2. มาตรฐานโดยนิตินัย (De jure - มีกฎหมาย/องค์กรรับรอง)</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 10, width: '100%' }}>
              <Ionicons name="people-circle-outline" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>องค์กรสำคัญ</Text>
            </View>
            <View style={{ width: '100%', paddingLeft: 10 }}>
              <Text style={styles.subtitle}>1. ISO</Text>
              <Text style={styles.subtitle}>2. ITU-T</Text>
              <Text style={styles.subtitle}>3. ANSI</Text>
              <Text style={styles.subtitle}>4. IEEE</Text>
              <Text style={styles.subtitle}>5. EIA</Text>
            </View>
    </ScrollView>
  );
}