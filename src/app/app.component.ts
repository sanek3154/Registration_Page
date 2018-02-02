import { Component } from '@angular/core';
import { type } from 'os';
     
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent { 
    mask: any[]=[/[1-9]/,/\d/,' ',/\d/,/\d/,' ',/\d/,/\d/,/\d/,/\d/,/\d/,/\d/];
   
    
    name= '';
    surname='';
    patronymic='';
    birthDay='';
    passport='';
    login='';
    password='';
    c=0;
    secondpath='';
    registeration(): void{
        if ((this.name!='')&&(this.surname!='')&&(this.birthDay!='')
        &&(this.login!='')&&(this.passport!='')&&(this.password!='')
        &&(this.patronymic!=''))
        {
            if (this.password.length>10){
            if (localStorage.getItem(this.login)==null)
            {
                this.secondpath=(this.password+":"+this.birthDay+":"+this.name+":"+this.surname+":"+this.patronymic+":"+this.passport).toString();
               // this.name=this.secondpath;
                localStorage.setItem(this.login,this.secondpath);            
            }
            else {
                alert("Логин занят");
                
            }}else {alert("Пароль должен быть больше 10 символов")}

        }else {
            alert("Все поля обязательны для заполнения");
        }
        //localStorage.setItem(this.name,this.c.toString());
        this.c++;
        console.log(this.surname);
        console.log(this.name);
        console.log(this.birthDay);
        console.log(this.login);
        console.log(this.password);
        console.log(this.passport);
        console.log(this.secondpath);
        console.log(this.c);
    }

}