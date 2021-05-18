import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
} from 'react-native';
import CardView from 'react-native-cardview';
import dummyData from '../dummyData.json';
import CheckBox from '@react-native-community/checkbox';

const Home = () => {

  let [records, setRecords] = useState(dummyData);
  let [oddEID, toggleOddEID] = useState(false);
  let [student, toggleStudent] = useState(false);
  let [staff, toggleStaff] = useState(false);
  let [faculty, toggleFaculty] = useState(false);

  const DisplayCard = ({item}) => (
    <CardView
      cardElevation={5}
      cardMaxElevation={10}
      cornerRadius={10}
      style={styles.cardView}
    >
      <View style={styles.innerCardView}>
        <Text style={styles.paddingTop}>
          Name: {item.Name}
        </Text>
        <Text style={styles.paddingTop}>
          EID: {item.EID}
        </Text>
        <View>
          <Text style={styles.paddingTop}>
            UT Affliation: 
          </Text>
            {
              item.Affliation.map((type, index) => (
                <Text key={index}>
                  {type}
                </Text>
              ))  
            }
          </View>
      </View>
      <View style={{marginBottom: 10}}>
        <Button 
          title='Remove' 
          onPress={() => setRecords(records.filter((ele) => ele.EID !== item.EID))}
        />
      </View>
    </CardView>
  );

  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <View
        style={styles.listAreaContainer}
        horizontal={true}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}>
          {records.map((record, index) => 
              <DisplayCard key={index} item={record} />
          )}
        </ScrollView>
      </View>
      <View style={{height: '20%', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: 130, justifyContent: 'space-between'}}>
        <Text style={{marginRight: 5}}>Odd EID Only</Text> 
        <CheckBox
          disabled={false}
          boxType={'square'}
          animationDuration={0}
          value={oddEID}
          onValueChange={(newValue) => { 
            toggleOddEID(newValue);
            const oddEIDs = records.filter((ele) => ele.EID % 2 !== 0);
            records = oddEIDs;
          }}
          style={{height: 15}}
        />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: 130, justifyContent: 'space-between'}}>
        <Text style={{marginRight: 5}}>Student</Text> 
        <CheckBox
          disabled={false}
          boxType={'square'}
          animationDuration={0}
          value={student}
          onValueChange={(newValue) => {
            toggleStudent(newValue);
            const students = records.filter((ele) => ele.Affliation.includes('Student'));
            records = students;
          }}
          style={{height: 15}}
        />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: 130, justifyContent: 'space-between'}}>
        <Text style={{marginRight: 5}}>Staff</Text> 
        <CheckBox
          disabled={false}
          boxType={'square'}
          animationDuration={0}
          value={staff}
          onValueChange={(newValue) => {
            toggleStaff(newValue);
            const staffs = records.filter((ele) => ele.Affliation.includes('Staff'));
            records = staffs;
          }}
          style={{height: 15}}
        />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10, width: 130, justifyContent: 'space-between'}}>
          <Text style={{marginRight: 5}}>Faculty</Text> 
          <CheckBox
            disabled={false}
            boxType={'square'}
            animationDuration={0}
            value={faculty}
            onValueChange={(newValue) => {
              toggleFaculty(newValue);
              const faculty = records.filter((ele) => ele.Affliation.includes('faculty'));
              records = faculty;
            }}
            style={{height: 15}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderWidth: 2,
    margin: 5,
    height: '80%',
    width: 150,
  },
  innerCardView: {
    margin: 15,
    flex: 1,
  },
  paddingTop: {
    paddingTop: 5,
  },
  safeAreaWrapper: {
    height: '100%', 
    justifyContent: 'center',
  },
  listAreaContainer: {
    height: '30%', 
    width: '100%',
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
});

export default Home;
