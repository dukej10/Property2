import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ChangeListComponent } from "./change-list.component";
import { HttpClientModule } from "@angular/common/http";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { NgxPaginationModule } from "ngx-pagination";
describe("ChangeListComponent", () => {
  let component: ChangeListComponent;
  let fixture: ComponentFixture<ChangeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NgxPaginationModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should return 200 response code, successful get", function (done) {
    fetch(
      "http://localhost:3000/api/changesLog?access_token=t8YAoFLv0mjP4JiEzcvnvO71J81o8OempNX2Yt6UV2gGhhngGhVTwjsJtxttRQgR",
      {
        method: "get",
      }
    ).then(function (response) {
      expect(response.status).toEqual(200);
      done();
    });
  });

  it("should return 200 response code, succesfull get by id", function (done) {
    fetch(
      "http://localhost:3000/api/changesLog/622655bf51e5e931a4a2fe62?access_token=t8YAoFLv0mjP4JiEzcvnvO71J81o8OempNX2Yt6UV2gGhhngGhVTwjsJtxttRQgR",
      {
        method: "get",
      }
    ).then(function (response) {
      expect(response.status).toEqual(200);
      done();
    });
  });

  it("should return 404 response code, impossible get by id", function (done) {
    fetch(
      "http://localhost:3000/api/changesLog/622655b?access_token=t8YAoFLv0mjP4JiEzcvnvO71J81o8OempNX2Yt6UV2gGhhngGhVTwjsJtxttRQgR",
      {
        method: "get",
      }
    ).then(function (response) {
      expect(response.status).toEqual(404);
      done();
    });
  });

  // it("should create", () => {
  //   expect(component).toBeTruthy();
  // });
});
