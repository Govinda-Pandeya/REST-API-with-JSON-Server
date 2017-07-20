import { Component, OnInit } from '@angular/core';
import { Address } from './interfaces/address.interface';
import { Post } from './interfaces/post.interface';

import { JsonPlaceHolderService } from './services/json-place-holder.service';

@Component({
  selector: '[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  name: string;
  hobbies: string[];
  posts: Post[];
  showUpdate: boolean;

  constructor(
    private jsonPlaceHolderService: JsonPlaceHolderService
  ) {
    console.log('UserComponent created!');
  }

  ngOnInit() {
    console.log('UserComponent initialized ..');
    this.initialize();
  }

  /**
   * Initializes variables.
   * Calls data service to get 'posts' data.
   */
  initialize() {
    this.showUpdate = false;
    this.name = 'Bharat Pandey';
    this.hobbies = ['Write code', 'Watch movies', 'Swimming'];
    this.getJSONPlaceholderPosts();
  }

  /**
   * Gets 'posts' data from jsonPlaceHolderService.
   */
  getJSONPlaceholderPosts() {
    this.jsonPlaceHolderService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }


  /**
   * Adds hobby provided from the input field.
   * @param  {string} hobby
   * @returns {boolean}
   */
  addHobby(hobby: string) {
    this.hobbies.unshift(hobby);
    return false;
  }

  /**
   * Removes selected hobby.
   * @param  {string} hobby
   */
  deleteHobby(hobby: string) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}
