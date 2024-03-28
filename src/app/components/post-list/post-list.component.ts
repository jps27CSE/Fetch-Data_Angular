import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
   posts:any[] =[]

   constructor(private postService: PostService){}

   ngOnInit():void{
       this.postService.getPosts()
       .subscribe(posts=>{
        this.posts=posts
        console.log(this.posts)
       })
   }
}
