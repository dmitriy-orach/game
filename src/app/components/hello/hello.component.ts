import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  public formHello: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.formHello = new FormGroup ({
      name: new FormControl ('', [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3)
      ]),
      characterType: new FormControl ('', [
        Validators.required,
      ])
    })
  }

  public onSubmit() {
    if(this.formHello.valid) {
      this.userService.postNewUser(this.formHello.value).subscribe((data: User[]) => {})
    }
  }

  get nameControl(): AbstractControl {
    return this.formHello.get('name') as AbstractControl;
  }

  get characterTypeControl(): AbstractControl {
    return this.formHello.get('characterType') as AbstractControl;
  }
}
