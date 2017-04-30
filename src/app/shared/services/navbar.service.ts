import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NavbarService {
    private subject = new Subject<any>();

    setFlag(val: boolean) {
        this.subject.next(val);
    }

    show(): Observable<any> {
        return this.subject.asObservable();
    }
}
