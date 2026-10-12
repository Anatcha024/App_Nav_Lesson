import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProjectStyles';

export default function LessonListScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={[styles.screen, styles.center]}>
      <Text style={styles.title}>บทเรียนวิชาเครือข่าย</Text>
      <Text style={styles.subtitle}>กรุณาเลือกรอบบทเรียนที่ต้องการเรียนรู้</Text>

      {/* ปุ่มกดเข้า บทที่ 1 */}
      <TouchableOpacity 
        style={[styles.card, { width: '100%', marginVertical: 8 }]}
        onPress={() => navigation.navigate('Chapter1')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="book-outline" size={32} color="#FF1493" style={{ marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>บทที่ 1</Text>
            <Text style={styles.cardText}>พื้นฐานการสื่อสารข้อมูลและเครือข่าย</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </View>
      </TouchableOpacity>

      {/* ปุ่มกดเข้า บทที่ 2 */}
      <TouchableOpacity 
        style={[styles.card, { width: '100%', marginVertical: 8 }]}
        onPress={() => navigation.navigate('Chapter2')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="book-outline" size={32} color="#FF1493" style={{ marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>บทที่ 2</Text>
            <Text style={styles.cardText}>แบบจำลองเครือข่ายและชั้นสื่อสาร (Network Models)</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </View>
      </TouchableOpacity>

       {/* ปุ่มกดเข้า บทที่ 3 */}
      <TouchableOpacity 
        style={[styles.card, { width: '100%', marginVertical: 8 }]}
        onPress={() => navigation.navigate('Chapter3')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="book-outline" size={32} color="#FF1493" style={{ marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>บทที่ 3</Text>
            <Text style={styles.cardText}>การส่งผ่านข้อมูล (Data Transmission)</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </View>
      </TouchableOpacity>

       {/* ปุ่มกดเข้า บทที่ 4 */}
      <TouchableOpacity 
        style={[styles.card, { width: '100%', marginVertical: 8 }]}
        onPress={() => navigation.navigate('Chapter4')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="book-outline" size={32} color="#FF1493" style={{ marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>บทที่ 4</Text>
            <Text style={styles.cardText}>สื่อกลางในการนำสัญญาณ (Transmission Media)</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </View>
      </TouchableOpacity>

      {/* ปุ่มกดเข้า บทที่ 5 */}
      <TouchableOpacity 
        style={[styles.card, { width: '100%', marginVertical: 8 }]}
        onPress={() => navigation.navigate('Chapter5')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="book-outline" size={32} color="#FF1493" style={{ marginRight: 12 }} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>บทที่ 5</Text>
            <Text style={styles.cardText}>อุปกรณ์เครือข่าย (Network Devices)</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#888" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}