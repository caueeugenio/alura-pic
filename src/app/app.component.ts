import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  photos = [
    {
      "image": 'https://magazinefeminina.com.br/wp-content/uploads/2020/09/wp4355353.jpg',
      "description": 'sabre de luz azul'
    },
    {
      "image": 'https://wallpaperaccess.com/full/150242.jpg',
      "description": 'sabre de luz vermelho'
    },
    {
      "image": 'https://i.pinimg.com/564x/05/7d/44/057d44fa0389f7f96d62421356a81ebc.jpg',
      "description": 'sabre de luz amarelo'
    },
    {
      "image": 'https://i.pinimg.com/originals/6f/1b/69/6f1b6988545105b9a9bcb8e3c651250e.png',
      "description": 'sabre de luz verde'
    }


  ]
}
