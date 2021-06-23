import firebase from 'react-native-firebase';
// Optional flow type
import { NotificationOpen } from 'react-native-firebase';

export default async (notificationOpen: NotificationOpen) => {
    if (notificationOpen.action === 'test_action') {
        // handle the action
        console.log(`test_action`);
    }

    return Promise.resolve();
}