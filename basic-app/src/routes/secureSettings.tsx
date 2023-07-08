import { useRouter } from 'next/navigation';

import { auth } from '../config/firebase';
import Settings from '@/app/components/settings/settings';

export default function SecureSettings() {

    const { push } = useRouter();

    let Token = { 'token': false };

    try {
        if (auth.currentUser) {
            console.log("User has a Token");
            if (auth.currentUser.hasOwnProperty('accessToken')) {
                console.log("User Token Authenticated!");
                Token = { 'token': true };
            } else {
                console.log("User Token Is Not Authenticated!");
                Token = { 'token': false };
            }
        } else {
            console.log("User has no Token");
            Token = { 'token': false };
        }
    } catch (err) {
        console.log("Here is the error: " + err);
    }

    return (
        Token.token ? <Settings /> : push("/error")
    );
};