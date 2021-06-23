import { observable, toJS } from "mobx";
import autobind from "autobind-decorator";
import firebase from 'react-native-firebase';
import { Alert } from "react-native";
import { RemoteMessage, Notification, NotificationOpen } from 'react-native-firebase';

export default class notificationServices {

  createChannel() {
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
      .setDescription('My apps test channel');

    // Create the channel
    firebase.notifications().android.createChannel(channel);
  }
  async checkHasPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // user has permissions
      const token = await firebase.messaging().getToken();
      console.log(`token`, token);
      return
    } else {
      console.log('not enabled');
      // user doesn't have permission
      try {
        await firebase.messaging().requestPermission();
        Alert.alert('permission granted');
        // User has authorised
      } catch (error) {
        Alert.alert('not granted');
        // User has rejected permissions
      }
    }
  }

  messageListener() {
    firebase.messaging().onMessage((RemoteMessage: any) => {
      // Process your message as required
      console.log(`remote:`, RemoteMessage);
      const notification = new firebase.notifications.Notification()
        .setNotificationId('notificationId')
        .setTitle('My notification title')
        .setBody('My notification body')
        .setData({
          key1: 'value1',
          key2: 'value2',
        })
        .android.setChannelId('test-channel');
      // Build an action
      const action1 = new firebase.notifications.Android.Action('test_action', 'ic_launcher', 'My Test Action');
      const action2 = new firebase.notifications.Android.Action('test_action2', 'ic_launcher', 'Cancel');
      // Add the action to the notification
      notification.android.addAction(action1);
      notification.android.addAction(action2);

      return firebase.notifications().displayNotification(notification);
    });
  }

  NotificationDisplayedListener() {
    return firebase.notifications().onNotificationDisplayed((Notification) => {
      console.log(`notification1`, Notification);
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
    });
  }

  NotificationListener() {
    return firebase.notifications().onNotification((Notification) => {
      console.log(`notification2`, Notification);
      // Process your notification as required
       // Build an action
       const action1 = new firebase.notifications.Android.Action('test_action', 'ic_launcher', 'My Test Action');
       const action2 = new firebase.notifications.Android.Action('test_action2', 'ic_launcher', 'Cancel');
       // Add the action to the notification
       Notification.android.addAction(action1);
       Notification.android.addAction(action2);
    });
  }

  NotificationOpened() {
    firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      // Get information about the notification that was opened
      const notification: Notification = notificationOpen.notification;
      console.log(`opened`, notification);
    });
  }

  NotificationOpenedAppClosed() {
    firebase.notifications().getInitialNotification()
      .then((notificationOpen: NotificationOpen) => {
        if (notificationOpen) {
          // App was opened by a notification
          // Get the action triggered by the notification being opened
          const action = notificationOpen.action;
          // Get information about the notification that was opened
          const notification: Notification = notificationOpen.notification;
          console.log(`closed`, notification);
        }
      });
  }

}