import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMoviesDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        key: 'Sonic',
        name: 'sonic',
        description: 'Sonic, el descarado erizo azul basado en la famosa serie de videojuegos de Sega, vivirá aventuras y desventuras cuando conoce a su amigo humano y policía, Tom Wachowski (James Marsden). Sonic y Tom unirán sus fuerzas para tratar de detener los planes del malvado Dr. Robotnik (Jim Carrey), que intenta atrapar a Sonic con el fin de emplear sus inmensos poderes para dominar el mundo.',
        genres: [
          'accion',
          'aventura',
          'comedia'
        ],
        rate: '8.6',
        length: '1hr 48mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg',
        cover: 'https://image.tmdb.org/t/p/w533_and_h300_bestv2/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg',
        url:"https://drive.google.com/file/d/1DZ3LworS8tph3WjC5Df_HCwSVlDBtqeX/preview"
      },
      {
        id: 2,
        key: 'we-are-the-millers',
        name: 'We\'re the Millers',
        description: 'A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.',
        genres: [
          'adventure',
          'comedy',
          'crime'
        ],
        rate: '7.0',
        length: '1hr 50mins',
        img: 'we-are-the-millers.jpg',
        cover: 'we-are-the-millers-cover.jpg'
      },
     
{
        id: 3,
        key: 'LA-MOMIA',
        name: 'LA MOMIA',
        description: 'A pesar de estar enterrada en una tumba en lo más profundo del desierto, una antigua princesa (Sofia Boutella) cuyo destino le fue arrebatado injustamente, se despierta en la época actual, trayendo consigo una maldición que ha crecido hasta límites insospechados con el paso de miles de años.',
        genres: [
          'action',
          'adventure',
          'fantasia',
          'suspenso'
        ],
        rate: '6.9',
        length: '1hr 50mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ceOtPPIZBB0c4mCFx4p0kAq9n0L.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ynDNRynKEg6LdDWVIbgXv1ix4jg.jpg',
        url: 'https://drive.google.com/file/d/1pp7ShNqewMIniVmrd03gKqmiF7InpGVl/preview'
      },
      {
        id: 4,
        key: 'EL-QUINTO-ELEMENTO',
        name: 'EL QUINTO ELEMENTO',
        description: 'Cada 5.000 años se abre una puerta entre las dimensiones. En una dimensión existe el Universo y la vida. En la otra dimensión existe un elemento que no está hecho ni de tierra, ni de fuego, ni de aire, ni de agua, sino que es una anti-energía, la anti-vida: es el quinto elemento.',
        genres: [
          'action',
          'adventure',
          'fantasia'
        ],
        rate: '6.9',
        length: '2hr 28mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/r2IFRKmD0nLaJOaILGKHdF31bKy.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/xfulCqUm5cT7qvyEjUmrzzMB0LJ.jpg',
        url: 'https://drive.google.com/file/d/17NBLv-n_m-jND_0EdsXHkmM1vA-sEaKd/preview'
      },
      {
        id: 5,
        key: 'HOMBRES-DE-NEGROS-3',
        name: 'HOMBRES DE NEGROS 3',
        description: 'Comienza con la fuga de un extraño y poderoso extraterrestre llamado Boris el animal. Es el último superviviente de la raza alienígena boglodita, que sobrevive mediante el ataque, toma, y ocupación de otros planetas habitados. Boris es un asesino, que fue capturado por el agente K y encarcelado en una prisión secreta en la Luna. K también pudo desplegar un sistema de defensa (denominado "Arca Net"), y evitar una invasión boglodita, logrando así su extinción. Sin embargo, Boris logra burlar la seguridad y destruir gran parte de la cárcel, para escapar y vengarse de K.',
        genres: [
          'action',
          'comedia',
          'ciencia ficcion'
        ],
        rate: '6.9',
        length: '2hr 28mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/uYL8UlNpu05BLF99ATURIDpnjy3.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ty0aXVf2aSbiEkrif88UWbKNVnH.jpg',
        url: 'https://drive.google.com/file/d/16s1gJyUA01dNblzE8EzWJwanY1-SI9ZI/preview'
        
      },
      {
        id: 6,
        key: 'RESIDENT-EVIL',
        name: 'RESIDENT EVIL',
        description: 'En un centro clandestino de investigación genética -con fines militares- de una poderosa multinacional se produce un brote vírico que contamina todo el edificio. Para contener la fuga el ordenador que controla el centro sella toda la instalación y, en un principio se cree que mueren todos los empleados, pero en realidad se han convertido en feroces zombis...',
        genres: [
          'action',
          'TERROR',
          'ciencia ficcion'
        ],
        rate: '6.9',
        length: '1hr 36mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/f8kYxuHNkFkhA7I4IKAk8sN9bdY.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/eLuE9zFExdASgZkUPSvTh6ocFtk.jpg',
        url: 'https://drive.google.com/file/d/1fNGkemtlpN3qvZOvR0N5Eu5JY9BbIpj6/preview'
        
      },
    ];
    return { movies };
  }
}
