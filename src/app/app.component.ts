import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  a:string;
  b:string;
  res:number;
  val="";
  i:number;
  public function(y:string)
  {
    
    this.val+=y;

  }
  public calc(ch:string)
  {
     switch(ch)
     {
       case '+':
       this.b=this.val;
       
       this.a=this.val.slice(0,-1);
             
       return this.a;
       


       case '-':
       this.b=this.val;
       
       this.a=this.val.slice(0,-1);
             
       return this.a;
       
       

       case '/':
       this.b=this.val;
       
       this.a=this.val.slice(0,-1);
             
       return this.a;
       
       

       case 'x':
       this.b=this.val;
       
       this.a=this.val.slice(0,-1);
             
       return this.a;
       
       

       case 'del':
       this.val=this.val.slice(0,-1);   
       break;
       
       default: this.val="";
      

     }

  }
  public equals()
  {
    for(this.i=0;this.i<this.val.length;this.i++)
    {
      if(this.val[this.i]=='+')
      {
         this.val=this.val.substring(this.val.indexOf("+")+1);
         this.val.trim();
         this.res=+this.a+(+this.val);
         this.val=""+this.res;
         console.log(this.val);
      }

      else if(this.val[this.i]=='-')
      {
         this.val=this.val.substring(this.val.indexOf("-")+1);
         this.val.trim();
         this.res=+this.a-(+this.val);
         console.log(this.val);
         console.log(this.a);
         this.val=""+this.res;
         console.log(this.val);
      }

      else if(this.val[this.i]=='/')
      {
         this.val=this.val.substring(this.val.indexOf("/")+1);
         this.val.trim();
         this.res=+this.a/(+this.val);
         this.val=""+this.res;
         console.log(this.val);
      }

      else if(this.val[this.i]=='x')
      {
         this.val=this.val.substring(this.val.indexOf("x")+1);
         this.val.trim();
         this.res=+this.a*(+this.val);
         this.val=""+this.res;
         console.log(this.val);
      }
    }     

  }
  
  
}
