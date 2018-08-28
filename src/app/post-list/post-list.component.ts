import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Vestigia Claudiopolis quidem praeter regis aegre pristinae civitates exornant opus regis Caesar',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Opibus ora cum tempore relicta adnexam densis igitur maritima ora densis pascebantur mox nihil pascebantur',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Postulatus solitudine quasi nullo quod in in bonorum bonorum vel aut solo solitudine rumore honoratorum.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
