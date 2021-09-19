import * as admin from 'firebase-admin';

console.log('init');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://tcc-quizit.firebaseio.com'
});

async function grantAdminRole(email) {
    // const user = await admin.auth().getUserByEmail(email);

    // if (user.customClaims && user.customClaims.admin === true) {
    //     return null;
    // }

    await admin.auth().setCustomUserClaims('SRWLsnmSPfNdEyGjPeFal6av4t42', {
        admin: true
    });

    console.log('grantAdminRole');
}

grantAdminRole();

console.log('end');
