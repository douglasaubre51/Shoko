import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelUsers } from './channel-users';

describe('ChannelUsers', () => {
  let component: ChannelUsers;
  let fixture: ComponentFixture<ChannelUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
