
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Ionicons,Octicons , Entypo } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.title}>
    <Text style={styles.Limko}>Limkokwing UniApp</Text>
    <View style={styles.heading}>
    <TouchableOpacity style={styles.arrow}>
    <Ionicons name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
    <View style={styles.searchbox}>
    <Text style={styles.word}>Type here</Text>
    <TouchableOpacity style={styles.searchicon}>
    <Octicons name="search" size={15} color="#fff" />
    </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.lines}>
    <Entypo name="menu" size={24} color="#fff" />
    </TouchableOpacity>
    <View style={styles.menubar}>
    <Text style={styles.Home}>Home</Text>
    <Text style={styles.Us}>About Us</Text>
    <Text style={styles.class}>Class</Text>
    <View style={styles.selectbar}></View>
    </View>
    </View>
    </View>
    <ScrollView>
    <View style={styles.courseIT}>
    <Image style={styles.ITimage} source={require("./assets/co.jpg")} />
        <Text style={styles.ITtext}>Bachelor of Science(Hons) in Software Engineering with Multimedia</Text>
        <Text style={{ color: '#fff' }}>Bachelor of Science(Hons) in Software Engineering with Multimedia (BSCSM) is an exceptional community of students, educators, scholars, and reasearchers who embrace the breadth of the computing and Engineering professions</Text>
    <Text style={{color:'#fff',fontWeight:'bold',marginTop:5,fontSize:20}}>Modules</Text>
    <Text style={{ color: '#fff' }}>*Data Communication & Networking</Text>
    <Text style={{ color: '#fff' }}>*Calculus II</Text>
    <Text style={{ color: '#fff' }}>*C++ Programming</Text>
    <Text style={{ color: '#fff' }}>*Database Design</Text>
    
    
    </View>
        <View style={styles.courseBusiness}>
        <Image style={styles.COimage} source={require("./assets/busi.jpg")} />
        <Text style={styles.BUtext}>Bachelor of Business(Hons) in International Business</Text>
        <Text style={{ color: '#fff' }}>Bachelor of Business(Hons) in International Business(BBIB) is an innovative, challenging Business degree programme that will enable you to pursue a successful career as a Professional, giving you a global focus, exposing you to key ideal and new thinking that is essential for enterprices that trade intertionally .</Text>
        <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 5, fontSize: 20 }}>Modules</Text> 
        <Text style={{ color: '#fff' }}>*Principle of marketing</Text>
        <Text style={{ color: '#fff' }}>*Fianacial Accounting Fundamentals </Text>
        <Text style={{ color: '#fff' }}>*Business Communication Skills 1</Text>
        <Text style={{ color: '#fff' }}>*Business Statistics </Text>
        </View>
        <View style={styles.courseCommunication}>
        <Image style={styles.BUimage} source={require("./assets/it.jpg")} />
        <Text style={styles.COtext}>Bachelor of Art(Hons) in Professional Communication</Text>
        <Text style={{ color: '#fff' }}>Bachelor of Art(Hons) in Professional Communication(BAPC) is a program that designed to enhance Communication skills and managerial techniques in preparation for employement or further education. It's a combination of Communication, advertising, public relations, writing and marketing.</Text>
        <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 5, fontSize: 20 }}>Modules</Text>
        <Text style={{ color: '#fff' }}>*writing Skills for Communicator</Text>
        <Text style={{ color: '#fff' }}>*Creative Studies</Text>
        <Text style={{ color: '#fff' }}>*Principles of Business Law</Text>
        <Text style={{ color: '#fff' }}>*public relation Principle</Text>
        </View>
      </ScrollView>
        </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent:'center',
    
  },
  title:{
  width:'100%',
  height:150,
  backgroundColor:'black',
  marginTop:20,
  
  },
  Limko:{
  fontSize:30,
  fontStyle:'italic',
  fontWeight:'bold',
  color:'#fff',
  marginTop:16,
  paddingLeft:'15%',
  marginBottom:10,
  },
  heading:{
    backgroundColor:'black',
    width:'100%',
    height:40,
  },
  searchbox:{
    width:'50%',
    height:25,
    backgroundColor:'#616161',
    borderRadius:20,
    position:'absolute',
    marginTop:7,
    marginLeft:85,
    paddingLeft:'10%',
  },
  arrow:{
  paddingLeft:'7%',
  marginTop:7,
  position:'absolute',
  },
  lines:{
  marginTop:7,
  position:'absolute',
  paddingLeft:'93%',
  },
  word:{
    color:'#BDBDBD',
    marginTop:1,
  },
  courseIT:{
  width:'94%',
  height:500,
  backgroundColor:'black',
  marginTop:20,
  borderRadius:5,
  },
  courseBusiness: {
    width: '94%',
    height: 500,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 5,
  },
  courseCommunication: {
    width: '94%',
    height: 500,
    backgroundColor: 'black',
    marginTop: 20,
    borderRadius: 5,
  },
  ITtext:{
  color:'#fff',
  fontWeight:'bold',
  paddingLeft:'1%',
  marginTop:5,
  fontSize:20,
  },
  COtext: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: '1%',
    marginTop: 5,
    fontSize: 20,
  },
  BUtext: {
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: '1%',
    marginTop: 5,
    fontSize: 20,
  },
  ITimage:{
  width:'100%',
  height:200,
  borderTopRightRadius:5,
  borderTopLeftRadius:5,
  marginBottom:15,
  },
  COimage:{
    width: '100%',
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: 15,
  },
  BUimage: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: 15,
  },
  searchicon:{
  position:'absolute',
  marginTop:5,
  paddingLeft:'90%',
  },
  menubar:{
  width:'100%',
  height:42,
  backgroundColor:'#212121',
  paddingBottom:10,
  position:'relative',
  marginTop:38,
  },
  Home:{
  color:'#9E9E9E',
  fontWeight:'bold',
  fontStyle:'italic',
  fontSize:20,
  position:'absolute',
  marginTop: 5,
  paddingLeft:'5%'

  },
  Us:{
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    position: 'absolute',
    marginTop: 5,
    paddingLeft: '40%'
  },
  class:{
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    position: 'absolute',
    marginTop:5,
    paddingLeft: '80%'
  },
  selectbar:{
  backgroundColor:'#9E9E9E',
  width:70,
  height:5,
  marginTop:30,
  marginLeft:10,
  borderRadius:4,
  },

  
});
