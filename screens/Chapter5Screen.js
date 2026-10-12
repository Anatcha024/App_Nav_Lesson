import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProjectStyles';

export default function LessonScreen() {
  return (
    <ScrollView style={[styles.screen, styles.center]}>
      <Text style={styles.title}>บทที่ 5: อุปกรณ์เครือข่าย (Network Devices)</Text>
       
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}1. อุปกรณ์ที่ใช้สำหรับเครือข่าย (Network Devices)</Text></View>
              <Text style={styles.subtitle}>1.1. เครื่องทวนสัญญาณ (Repeater): ทำงานใน Physical Layer ทำหน้าที่ซ่อมแซมและฟื้นฟูสัญญาณที่อ่อนกำลังเนื่องจากการเดินทางไกล เพื่อให้ส่งต่อไปได้ไกลขึ้น</Text>
              <Text style={styles.subtitle}>1.2. ฮับ (Hub): ทำงานใน Physical Layer เป็นศูนย์กลางรับ-ส่งข้อมูล โดยจะสำเนาข้อมูลส่งออกไปทุกพอร์ต (Broadcasting) ทำให้ทุกเซกเมนต์อยู่ใน Collision Domain เดียวกัน แบ่งเป็น 2 ประเภท</Text>
                <View style={{ width: '100%', paddingLeft: 10 }}>
                  <Text style={styles.subtitle}>1.2.1. Active Hub: ทวนสัญญาณได้ ต้องใช้ไฟฟ้า</Text>
                  <Text style={styles.subtitle}>1.2.2. Passive Hub: ทำหน้าที่เชื่อมสาย ไม่ปรับแต่งสัญญาณ เช่น แผงต่อ (Patch Panel)</Text>
                </View>
              <Text style={styles.subtitle}>1.3. บริดจ์ (Bridge): ทำงานใน Physical Layer และ Data Link Layer ช่วยเชื่อมต่อเครือข่ายและแบ่งออกเป็นหลายเซกเมนต์เพื่อ แยก Collision Domain ช่วยลดการคับคั่งของข้อมูล โดยตรวจสอบคีย์ MAC Address ในตาราง (Bridge Table) เพื่อกรองเฟรมข้อมูล</Text>
              <Text style={styles.subtitle}>1.4. อุปกรณ์การสลับ (Switching)</Text>
                <View style={{ width: '100%', paddingLeft: 10 }}>
                  <Text style={styles.subtitle}>1.4.1. Layer 2 Switch: ทำงานคล้ายบริดจ์แต่มีจำนวนพอร์ตมากกว่าและส่งข้อมูลได้เร็วกว่า ส่งข้อมูลเฉพาะพอร์ตปลายทางโดยตรวจ MAC Address ช่วยแยก Collision Domain</Text>
                  <Text style={styles.subtitle}>1.4.2. Layer 3 Switch: เพิ่มฟังก์ชันใน Network Layer สามารถค้นหาเส้นทาง (Routing) ได้เหมือน Router แต่ทำงานเร็วกว่าด้วยเทคโนโลยี ASIC นิยมใช้เป็น Core Switc</Text>
                </View>
              <Text style={styles.subtitle}>1.5. เกตเวย์ (Gateway): ทำงานได้ทุกชั้นสื่อสาร (OSI Model) ใช้เชื่อมต่อเครือข่ายที่มีความแตกต่างกัน ทั้งโพรโทคอล สายสัญญาณ หรือสถาปัตยกรรมเครื่อง (เช่น PC กับ Mainframe)</Text>
              <Text style={styles.subtitle}>1.6. อุปกรณ์จัดเส้นทาง (Router): ทำงานใน Network Layer หน้าที่หาเส้นทางที่ดีที่สุดในการส่งแพ็กเก็ตข้อมูลโดยใช้ตารางจัดเส้นทาง (Routing Table)</Text>
                <View style={{ width: '100%', paddingLeft: 10 }}>
                  <Text style={styles.subtitle}>1.6.1. ส่วนต่อประสาน (Interface) สำคัญ: Console (คอนฟิกครั้งแรก), Ethernet (เชื่อมต่อ LAN/Switch), Serial (เชื่อมต่อ WAN/Leased Line) และ Auxiliary (คอนฟิกจากระยะไกลผ่าน Modem)</Text>
                </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}2. โหมดการทำงานและการคอนฟิก Router (Cisco)</Text></View>
            <Text style={styles.subtitle}>2.1. โหมดหลัก</Text>
              <View style={{ width: '100%', paddingLeft: 10 }}>
                <Text style={styles.subtitle}>2.1.1. User Mode (router>): ดูสถานะพื้นฐาน</Text>
                <Text style={styles.subtitle}>2.1.2. Privileged Mode (router#): ดูสถานะเชิงลึก ใช้คำสั่ง enable เพื่อเข้าสู่โหมดนี้</Text>
                <Text style={styles.subtitle}>2.1.3. Global Configuration Mode (router(config)#): โหมดปรับแต่งค่าหลัก ใช้คำสั่ง configure terminal</Text>
              </View>
            <Text style={styles.subtitle}>2.2. โหมดย่อย: Interface Configuration ((config-if)#), Routing Configuration ((config-router)#), Line Configuration ((config-line)#)</Text>
            <Text style={styles.subtitle}>2.3. เทคนิคการเลือกเส้นทาง</Text>
              <View style={{ width: '100%', paddingLeft: 10 }}>
                <Text style={styles.subtitle}>2.3.1. Static Route: ผู้ดูแลระบบป้อนเส้นทางด้วยตนเองผ่านคำสั่ง ip route</Text>
                <Text style={styles.subtitle}>2.3.2. Dynamic Route (เช่น RIP): แลกเปลี่ยนตารางการจัดเส้นทางอัตโนมัติทุกๆ 30 วินาที เลือกเส้นทางจากจำนวน Hop น้อยที่สุด (ไม่เกิน 15 Hops)</Text>
              </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
            <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
            <Text style={styles.title2}>{'\n'}3. เครือข่ายแบ็กโบน (Backbone Network)</Text></View>
            <Text style={styles.subtitle}>เป็นเส้นทางหลักความเร็วสูงที่ใช้เชื่อมต่อเครือข่าย LAN หลายๆ วงเข้าด้วยกัน</Text>
            <Text style={styles.subtitle}>3.1. Bus Backbone: ใช้สายแกนหลักเส้นเดียว (เช่น สายไฟเบอร์ออพติก) เชื่อมต่อวงแลนผ่าน Bridge</Text>
             <Text style={styles.subtitle}>3.2. Star Backbone: ใช้ Switch ศูนย์กลาง (เช่น Layer 3 Switch / Core Switch) เชื่อมต่อวงแลนต่างๆ เข้าด้วยกัน</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <Ionicons name="logo-buffer" size={28} color="#FF1493" style={{ marginRight: 8 }} />
              <Text style={styles.title2}>{'\n'}4. เครือข่ายเสมือนหรือวีแลน (VLAN - Virtual LAN)</Text></View>
              <Text style={styles.subtitle}>ความหมาย: การจัดกลุ่มคอมพิวเตอร์ให้อยู่ใน Broadcast Domain เดียวกันทางตรรกภาพ แม้ว่าจะอยู่ต่างพื้นที่หรือคนละ Switch ก็ตาม</Text>
              <Text style={styles.subtitle}>ประโยชน์: จำกัดขอบเขต Broadcast Traffic, เพิ่มความปลอดภัยของข้อมูล, ประหยัดค่าใช้จ่าย/เวลาในการย้ายเครื่อง และรองรับการขยายตัวในอนาคต</Text>
              <Text style={styles.subtitle}>รูปแบบการจัดกลุ่ม VLAN: จัดตาม Port Number, จัดตาม MAC Address, หรือจัดตาม IP Address</Text>
              <Text style={styles.subtitle}>VLAN Trunking: เทคนิคผนวกรวมข้อมูลของหลายๆ VLAN ให้สามารถส่งผ่านสายสื่อสารเส้นเดียวกันระหว่าง Switch ได้ โดยใช้มาตรฐาน encapsulation (เช่น dot1q) ช่วยลดจำนวนสายเชื่อมต่อ</Text>
    </ScrollView>
  );
}