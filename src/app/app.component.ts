import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ahorcadoDMP';
  aleatorio = Math.floor(Math.random() * (50 - 1) + 1);

  // Declaramos las variables a usar
  variasPalabras = [
    'NERUDA',
    'BORGES',
    'VALLEJO',
    'VALDELOMAR',
    'ARGUEDAS',
    'PARRA',
    'CORTAZAR',
    'RULFO',
    'GARCIA',
    'BENEDETTI',
    'MACHADO',
    'QUEVEDO',
    'PARRA',
    'ALEGRIA',
    'RIBEYRO',
    'SCORZA',
    'MARIATEGUI',
    'BRYCE',
    'ECHENIQUE',
    'PALMA',
    'VALDELOMAR',
    'SANTOS',
    'CHOCANO',
    'LOPEZ',
    'ALBUJAR',
    'GARCILAZO',
    'CORNEJO',
    'NERUDA',
    'BORGES',
    'VALLEJO',
    'VALDELOMAR',
    'ARGUEDAS',
    'NERUDA',
    'CORTAZAR',
    'RULFO',
    'GARCIA',
    'BENEDETTI',
    'MACHADO',
    'QUEVEDO',
    'PARRA',
    'ALEGRIA',
    'RIBEYRO',
    'SCORZA',
    'MARIATEGUI',
    'BRYCE',
    'ECHENIQUE',
    'PALMA',
    'VALDELOMAR',
    'SANTOS',
    'CHOCANO',
    'LOPEZ',
    'ALBUJAR',
    'GARCILAZO',
    'CORNEJO',
    'NERUDA',
    'BORGES',
    'VALLEJO',
    'VALDELOMAR',
    'ARGUEDAS',
    'NERUDA',
    'CORTAZAR',
    'RULFO',
    'GARCIA',
    'BENEDETTI',
    'MACHADO',
    'QUEVEDO',
    'PARRA',
    'ALEGRIA',
    'RIBEYRO',
    'SCORZA',
    'MARIATEGUI',
    'BRYCE',
    'ECHENIQUE',
    'PALMA',
    'VALDELOMAR',
    'SANTOS',
    'CHOCANO',
    'LOPEZ',
    'ALBUJAR',
    'GARCILAZO',
    'CORNEJO',
    'NERUDA',
    'BORGES',
    'VALLEJO',
    'VALDELOMAR',
    'ARGUEDAS',
    'NERUDA',
    'CORTAZAR',
    'RULFO',
    'GARCIA',
    'BENEDETTI',
    'MACHADO',
    'QUEVEDO',
    'PARRA',
    'ALEGRIA',
    'RIBEYRO',
    'SCORZA',
    'MARIATEGUI',
    'BRYCE',
    'ECHENIQUE',
    'PALMA',
    'VALDELOMAR',
    'SANTOS',
    'CHOCANO',
    'LOPEZ',
    'ALBUJAR',
    'GARCILAZO',
    'CORNEJO',
  ];

  palabra = '';
  palabraOculta = '';

  intentos = 0;
  campeon = 0;

  gano = false;
  perdio = false;

  letras = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  constructor() {
    this.palabra = this.variasPalabras[this.aleatorio];
    this.palabraOculta = '- '.repeat(this.palabra.length);

    console.log(this.palabra);
    console.log(this.aleatorio);
  }

  comprobar(letra: string) {
    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }

    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      this.campeon = 1;
      this.intentos = 0;
    }

    if (this.intentos >= 9) {
      this.perdio = true;
    }
  }
  // Verificar si la letra presionada existe en la palabra:
  existeLetra(letra: string) {
    // Para ver si la letra existe en la palbra oculta
    if (this.palabra.indexOf(letra) >= 0) {
      // console.log('Letra existe ' + letra );
    } else {
      // console.log('Letra NO existe ' + letra );
      // Aquí aumentamos el contador para llegar al 9
      this.intentos++;
    }
  }

  btnReiniciar() {
    location.reload();
  }
}
