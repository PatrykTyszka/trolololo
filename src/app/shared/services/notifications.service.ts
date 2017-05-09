import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationsService {
    private subject = new Subject<any>();

    public notice(msg: string) {
        this.subject.next({msg: msg, type: 'notice'});
        setTimeout(() => this.clearSubject(), 2000);
    }

    public alert(msg: string) {
        this.subject.next({msg: msg, type: 'alert'});
        setTimeout(() => this.clearSubject(), 2000);
    }

    public notificationListener(): Observable<any> {
        return this.subject.asObservable();
    }

    private clearSubject() {
        this.subject.next({msg: null, type: null});
    }
}
