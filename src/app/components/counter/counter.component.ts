import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { CountState, counterFeatureKey } from './counter.reducer';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {

  count$: Observable<CountState>;
 
  constructor(private store: Store<State>) {
    this.count$ = store.pipe(select(counterFeatureKey));
  }
 
  increment() {
    this.store.dispatch(increment({username: 'test', password: '123123'}));
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
