import { Injectable } from '@angular/core';
import { Leader } from 'src/app/shared/leader';
import { LEADERS } from 'src/app/shared/LEADERS';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: string): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }

  getFeaturedDishLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}