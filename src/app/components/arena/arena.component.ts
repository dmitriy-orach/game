import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss']
})
export class ArenaComponent implements OnInit {

  public  characters: User[] = []

  constructor( private userService: UserService ) {}

  ngOnInit(): void {
    this.userService.getData().subscribe((characters: User[]) => {
      this.characters = [...characters];
    })
  }

  public onClick(character) {
    console.log(character)
  }
}
