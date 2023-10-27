import { Fragment, useEffect, useState } from 'react'
import { onMessageListener, requestPermission } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';

const PushNotifications = () => {
    const [notification, setNotification ] = useState()
    useEffect(() => {
        requestPermission()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const unsubscribe = onMessageListener().then((payload: any) => {
            setNotification(payload)
            toast.success(
                <Fragment>
                    <div>{payload?.notification?.title}</div>
                    <div>{payload?.notification?.body}</div>
                </Fragment>
            )
        });

        console.log(notification, '===>> PUSH');
        
        return () => {
            unsubscribe.catch(err => console.log('failed: ', err));
        }
    }, [notification])
    return (
        <div style={{ zIndex: 400 }}>
            <ToastContainer />
        </div>
    )
}

export default PushNotifications