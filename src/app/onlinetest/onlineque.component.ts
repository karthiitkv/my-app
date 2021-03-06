import { Component, OnInit } from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Questions } from './questions';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'onlinetest-que',
  templateUrl: './onlineque.component.html',
  styleUrls: ['./onlineque.component.css']
})
export class OnlinequeComponent implements OnInit{
  title = 'QueAns';
  quest: Questions[];
  private heroesUrl = 'http://onlinetest-kvkit.rhcloud.com/kvkapi/getAllQueAns';  // URL to web api
  
  constructor(private http: Http) { }

  ngOnInit() {
      this.getQuestions().then(response => {
        console.log("response - "+response);
        console.log(response);
        this.quest = response["quesAns"]
    });
      console.log("question - "+this.getQuestions());
  }
  
  getQuestions(): Promise<Questions[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json() as Questions[])
               .catch(this.handleError);
  }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
