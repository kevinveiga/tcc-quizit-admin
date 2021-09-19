import * as admin from 'firebase-admin';

import serviceAccount from '../tcc-quizit-firebase-adminsdk.json';

console.log('init');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://tcc-quizit.firebaseio.com'
});

async function grantAdminRole(email) {
    // const user = await admin.auth().getUserByEmail(email);

    // if (user.customClaims && user.customClaims.admin === true) {
    //     return null;
    // }

    try {
        await admin.auth().setCustomUserClaims('SRWLsnmSPfNdEyGjPeFal6av4t42', {
            admin: true
        });

        console.log('grantAdminRole');
    } catch (err) {
        console.log('err: ', err);
    }
}

grantAdminRole();

console.log('end');
