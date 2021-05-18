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

const Home = () => {
  const [records, setRecords] = useState(dummyData);

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
      <View style={styles.marginBottom}>
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
  marginBottom: {
    marginBottom: 10
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
