import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
    selector: 'food-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private afs: AngularFirestore) {
        afs.firestore.settings({ timestampsInSnapshots: true });
    }
}
