import {
    Component,
    OnInit
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';

declare var $: any;


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    constructor(private http: HttpClient) {}

    ngOnInit(): void {}

    signIn(event: Event) {

        event.preventDefault();
        let isRegisteredUser=false;
        if ($("#comp-screen-02").valid()) {

            this.http.get <[]> ("https://jsonplaceholder.typicode.com/users")
                .subscribe((datas:any) => {
                    for (let i = 0; i < datas.length; i++) {

                      debugger;
                        let data = datas[i];
                        if (data.email == $("#email").val()) {
                            isRegisteredUser = true;
                            alert("Succeess");
                            break;
                        }
                    }
                    if(!isRegisteredUser){
                      alert("Error");
                    }

                })


        }

    }
}
