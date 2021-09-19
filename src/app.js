import * as admin from 'firebase-admin';

import serviceAccount from '../tcc-quizit-firebase-adminsdk.json';

console.log('init');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://tcc-quizit.firebaseio.com'
});

async function grantAdminRole(email) {
    try {
        const user = await admin.auth().getUserByEmail(email);

        if (user.customClaims && user.customClaims.admin === true) {
            console.log('Usuário já tem o papel de Admin');
        } else {
            await admin.auth().setCustomUserClaims(user.uid, {
                admin: true
            });

            console.log('Papel de Admin adicionado para o usuário');
        }
    } catch (err) {
        console.log('err: ', err);
    }
}

grantAdminRole('admin@admin.com');

console.log('end');
