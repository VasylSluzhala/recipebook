import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private token: string = null;

    constructor(private router: Router) { }

    initialize() {
        firebase.initializeApp({
            apiKey: "AIzaSyCdiDyf_pIYTFwBT_ocFlK0TE17E3By_Qk",
            authDomain: "recipes-3f8ca.firebaseapp.com"
        });
        this.checkToken();
    }

    checkToken() {
        /*
        debugger;
        const ref = firebase.storage();
        const user = firebase.auth().currentUser;
        if(user != null){
            user.getIdToken().then(
                (token: string) => this.token = token
            );
        }
        
        const d = window.localStorage;
        const userKey = Object.keys(window.localStorage)
            .filter(it => it.startsWith('firebase:authUser'))[0];
        const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;*/
    }

    singUp(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                (e) => {
                    console.log(e);
                });
    }

    signIn(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (e) => {
                    console.log(e);
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken().then(
                        (token: string) => {
                            this.token = token;
                        });
                })
            .catch(a => console.log(a));
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => {
                    this.token = token;
                });
        return this.token;
    }

    signOut() {
        firebase.auth().signOut();
        this.token = null;
    }

    isAuthenticated() {
        return this.token != null;
    }
}