import React from 'react';
import { useState,useEffect } from 'react';
import {Text, View,StyleSheet} from 'react-native';
import * as Notifications from 'expo-notifications';

import TimeTableNotificationsList from '../component/TimeTable/TimeTableNotificationsList'


const HelloWorldApp = () => {
    const [NotficatonUnitList,setNotficatonUnitList]=useState([{id:'読み込み中',body:'読み込み中'}])
    const a=1

    const getPushDateUnitList = async () => {
        const notifications = await Notifications.getAllScheduledNotificationsAsync();
        const list= notifications.map((NotificationUnit)=>[{"title":NotificationUnit.content.title,"id":NotificationUnit.identifier,"body":NotificationUnit.content.body,"data":NotificationUnit.content.data} ][0])
        //setNotficatonUnitList(list)
        list != null ? setNotficatonUnitList(list) : null;
        //console.log(NotficatonUnitList)
        // console.log(NotficatonUnitList)
      }    
    useEffect(()=>{
      getPushDateUnitList();
    })

  return (
    <View
      style={styles.body}>
        {/* <TimeTableNotificationsList
          data={NotficatonUnitList[0]}
        /> */}
         {NotficatonUnitList.map((NotficatonUnit,index)=><TimeTableNotificationsList key={index} data={NotficatonUnit}/>)}
    </View>
  );
};
const styles = StyleSheet.create({
  body:{

  }
})
export default HelloWorldApp;