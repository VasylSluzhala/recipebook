import * as firebase from 'firebase';

export class AuthService{
    singUp(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(e => console.log(e));
    }

    signIn(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(a => console.log(a))
        .catch(a => console.log(a));
    }
}