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
        key: 'QUIENES-SON-LOS-MILLERS',
        name: 'QUIENES SON LOS MILLERS',
        description: 'Un traficante de marihuana se crea una familia ficticia con una stripper y dos jóvenes como parte de su plan para pasar un gran cargamento de Estados Unidos a México.',
        genres: [
          'aventura',
          'comedia',
          'crimen'
        ],
        rate: '7.0',
        length: '1hr 50mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/e6ITLpsQP9FMBF4jDyvHpWUYV64.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/e4l6Spo6gCyAx9AVuwbkxEtAfEE.jpg',
        url:'https://drive.google.com/file/d/1kLxKsTRYKWXYKM0qojuL-eYJv_cNCPxa/preview'
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
        url: ' https://drive.google.com/file/d/1IZLRgGwOXFNBRUkvLZ8bNV1Xr2CF3c4x/preview'
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
          'scifi'
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
          'terror',
          'scifi'
        ],
        rate: '6.9',
        length: '1hr 36mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/f8kYxuHNkFkhA7I4IKAk8sN9bdY.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/eLuE9zFExdASgZkUPSvTh6ocFtk.jpg',
        url: 'https://drive.google.com/file/d/1fNGkemtlpN3qvZOvR0N5Eu5JY9BbIpj6/preview'
        
      },
      {
        id: 7,
        key: 'JUMANJI-BIENVENIDO-A-LA-JUMGLA',
        name: 'JUMANJI BIENVENIDO A LA JUNGLA',
        description: 'Cuatro adolescentes son absorbidos por un videojuego, en el que se convierten en avatares de personajes arquetípicos. Allí vivirán múltiples aventuras, al tiempo que buscan cómo salir de allí para volver a su mundo.',
        genres: [
          'action',
          'aventura',
          'comedia',
          'fantasia'
        ],
        rate: '7.9',
        length: '1hr 59mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/h2n0oHdJa6Y7ZvZx3WsSYPfrW1j.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/r3pJ884C2cJ6F64X5Yd5sARuNZ6.jpg',
        url: 'https://drive.google.com/file/d/1vj06hvqtk0matqdOJ1Fxg5zQXHfj0OQ6/preview'
        
      },
      {
        id: 8,
        key: 'JUMANJI-EL-SIGUIENTE-NIVEL',
        name: 'JUMANJI EL SIGUIENTE NIVEL',
        description: ' Los jugadores vuelven al juego, pero sus personajes se han intercambiado entre sí, lo que ofrece un curioso plantel: los mismos héroes con distinta apariencia. Pero, ¿dónde está el resto de la gente? Los participantes sólo tienen una opción: jugar una vez más a esta peligrosa partida para descubrir qué es realmente lo que está sucediendo.',
        genres: [
          'action',
          'aventura',
          'comedia',
          'fantasia'
        ],
        rate: '8.0',
        length: '2hr 5mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/kfimTKoXd9CMTboi1ucYXwMuWO.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/noMvJUYVB9LUJClftPbQT78TUlQ.jpg',
        url: 'https://drive.google.com/file/d/1mlr-ZU64FMhccc1jZyJlBAJ303iljzLY/preview'
        
      },
      {
        id: 9,
        key: 'VENGADORES-LA-ERA-DE-ULTON',
        name: 'VENGADORES LA ERA DE ULTRON',
        description: 'Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz, las cosas empiezan a torcerse y los héroes más poderosos de la Tierra, incluyendo a Iron Man, Capitán América, Thor, El Increíble Hulk, Viuda Negra y Ojo de Halcón, tendrán que afrontar la prueba definitiva cuando el destino del planeta se ponga en juego. Cuando el villano Ultron emerge, le corresponderá a Los Vengadores detener sus terribles planes, que junto a incómodas alianzas llevarán a una inesperada acción que allanará el camino para una épica y única aventura.',
        genres: [
          'action',
          'aventura',
          'scifi'
        ],
        rate: '8.0',
        length: '2hr 20mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/SWfuMs4doCHcrz0InTh785SpQU.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/4zmNJNQkugbalqJLnKp0wnlp8i3.jpg',
        url: 'https://drive.google.com/file/d/1FUPf2o95L0gjRQxvocWTySdQJb7oOrOC/preview'
        
      },
      {
        id: 10,
        key: 'VENGADORES-INFINITY-WAR',
        name: 'VENGADORES INFINITY WAR',
        description: 'El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?',
        genres: [
          'action',
          'aventura',
          'scifi'
        ],
        rate: '8.0',
        length: '2hr 36mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/2ZChRdEnZVT6EWGIHE0blbjpyyA.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg',
        url: 'https://drive.google.com/file/d/1zVyD3NaWalUUFq7Qq60q45YwOPFViS6c/preview'
        
      },
      {
        id: 11,
        key: 'LOS-VENGADORES-ENDGAME',
        name: 'LOS VENGADORES ENDGAME',
        description: 'Después de los eventos devastadores de Vengadores Infinity War el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga Vengadores.',
        genres: [
          'action',
          'aventura',
          'scifi'
        ],
        rate: '8.0',
        length: '3hr 1mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/t7ZVQKZu0zcP8nJz462zd5vLWWN.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/wMFad1v8SwyVvrKXmsIkLhSxCEC.jpg',
        url: 'https://drive.google.com/file/d/1f2EX62UBS3vb0FPsLqMyxz3XNGB4m1Gz/preview'
        
      },
      {
        id: 12,
        key: 'TITANES-DEL-PACIFICO',
        name: 'TITANES DEL PACIFICO',
        description: 'Cuando legiones de monstruosas criaturas, denominadas Kaiju, comienzan a salir del mar, se inicia una guerra que acabará con millones de vidas y que consumirá los recursos de la humanidad durante interminables años. Para combatir a los Kaiju gigantes diseñan un tipo especial de arma: enormes robots, llamados Jaegers, que son controlados simultáneamente por dos pilotos cuyas mentes están bloqueadas en un puente neural. Pero incluso los Jaegers proporcionan poca defensa ante los incansables Kaiju. A punto de la derrota, las fuerzas que defienden a la humanidad no tienen otra elección que recurrir a dos insólitos héroes: un ex piloto acabado (Charlie Hunnam) y un aprendiz que todavía no se ha puesto a prueba (Rinko Kikuchi). Ambos se unen para traer a un legendario pero al parecer obsoleto Jaeger del pasado. Juntos, son la última esperanza de la humanidad frente al Apocalipsis que se avecina.',
        genres: [
          'action',
          'fantasia',
          'scifi'
        ],
        rate: '8.0',
        length: '2hr 11mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/5dN112OTkbWTah8PJA9dzQsUE47.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ig7qUy7drkEFZNCK7gi0hMn1WMN.jpg',
        url: 'https://drive.google.com/file/d/1maWwaJhRHUQif0vYVS60Y0yjB_0Jo2We/preview'
        
      },
      {
        id: 13,
        key: 'TITANES-DEL-PACIFICO-2',
        name: 'TITANES DEL PACIFICO 2',
        description: 'Un futuro cercano. Después de la primera invasión que sufrió la humanidad, la lucha aun no ha terminado. El planeta vuelve a ser asediado por los Kaiju, una raza de alienígenas colosales que emergen desde un portal interdimensional, con el objetivo de destruir a la raza humana. Ante esta nueva amenaza para la cual los humanos no están preparados, los Jaegers, robots gigantes de guerra pilotados por dos personas para sobrellevar la inmensa carga neural que conlleva manipularlos, ya no están a la altura de lo que se les viene encima. Será entonces cuando los supervivientes de la primera invasión, además de nuevos personajes como el hijo de Pentecost (John Boyega), tendrán que idear la manera de sorprender al enorme enemigo, apostando por nuevas estrategias defensivas y de ataque. Con la Tierra en ruinas e intentando reconstruirse, esta nueva batalla puede ser decisiva para el futuro.',
        genres: [
          'action',
          'fantasia',
          'aventura',
          'scifi'
        ],
        rate: '8.0',
        length: '2hr 0mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/cAQRgMxyuy3qhjCitR0hHJhEPAI.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/2DrFGk3B6zWCNHVdUxQzyQkXpXe.jpg',
        url: 'https://drive.google.com/file/d/109Gl0TyrIGtcdhdG2GjkOTWphkxlk8Kr/preview'
        
      },
      {
        id: 14,
        key: 'UNA-CUESTION-DE-TIEMPO',
        name: 'UNA CUESTION DE TIEMPO',
        description: 'La trama de la película gira en torno a un joven llamado Tim Lake. El protagonista y su familia tienen el curioso don de poder viajar a través del tiempo. Al descubrir esta cualidad, Tim empieza a beneficiarse de ello para cambiar diferentes aspectos de su vida. Se enamora de una chica, Mary, a la que conoce tras transladarse a vivir a Londres por motivos de trabajo. Su historia de amor se verá beneficiada gracias al don de Tim, sin embargo, el protagonista no tardará en darse cuenta de que su habilidad no es capaz de ampararle en algunos problemas y cuestiones familiares.',
        genres: [
          'comedia',
          'fantasia',
          'drama',
          'romance'
        ],
        rate: '8.0',
        length: '2hr 3mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/u8k9KMzZGYgg2f5i8pKj23VMNPZ.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/sjMZgKUHNlRtUrBLXd9K5KgsgxR.jpg',
        url: 'https://drive.google.com/file/d/18ET89Hq8-D38HjXCHUxGJ3a3KzSM7fAV/preview'
        
      },
      {
        id: 15,
        key: 'DEADPOOL',
        name: 'DEADPOOL',
        description: 'Basado en el anti-héroe menos convencional de la Marvel, Deadpool narra el origen de un ex-operativo de la fuerzas especiales llamado Wade Wilson, reconvertido a mercenario, y que tras ser sometido a un cruel experimento adquiere poderes de curación rápida, adoptando Wade entonces el alter ego de Deadpool. Armado con sus nuevas habilidades y un oscuro y retorcido sentido del humor, Deadpool intentará dar caza al hombre que casi destruye su vida.',
        genres: [
          'comedia',
          'accion',
          'aventura'
        ],
        rate: '8.0',
        length: '1hr 48mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/pcZT1Ouq99dY6J2iGXjMxw16x6o.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/k2VX0gFu2BEJhvduQTq2ioYp8z7.jpg',
        url: 'https://drive.google.com/file/d/1EfS-ENu3oMVP6B6qe-IAE-F1Ocrd7qD_/preview'
        
      },
      {
        id: 16,
        key: 'READY-PLAYER-ONE',
        name: 'READY PLAYER ONE',
        description: ' Año 2044. Wade Watts es un adolescente al que le gusta evadirse del cada vez más sombrío mundo real a través de una popular utopía virtual a escala global llamada Oasis, hasta que su excéntrico y multimillonario creador muere. Antes de morir, ofrece su fortuna como premio a una elaborada búsqueda del tesoro a través de los rincones más inhóspitos de su creación. Será el punto de partida para que Wade se enfrente a jugadores, poderosos enemigos corporativos y otros competidores despiadados dispuestos a hacer lo que sea, tanto dentro de Oasis como del mundo real, para hacerse con el premio.',
        genres: [
          'aventura',
          'familia',
          'scifi'
        ],
        rate: '8.4',
        length: '2hr 20mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/2iuVrtC5IpwLtSFSgkIIIKLs0Zq.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/5a7lMDn3nAj2ByO0X1fg6BhUphR.jpg',
        url: 'https://drive.google.com/file/d/18L3pC4DJ3mEUeP8BXv0tnsrmKj-VXu4r/preview'
        
      },
       {
        id: 17,
        key: 'RESIDENT-EVIL-EL-CAPITULO-FINAL',
        name: 'RESIDENT EVIL EL CAPITULO FINAL',
        description: ' La humanidad está agonizando tras la traición sufrida por Alice a manos de Wesker. Alice deberá regresar a donde la comenzó la pesadilla -Raccoon City-, ya que allí la Corporación Umbrella está reuniendo fuerzas antes de un último ataque a los últimos supervivientes del apocalipsis. En una carrera contra el tiempo, Alice tendrá que unir fuerzas con viejos amigos y con un inesperado aliado en una batalla contra hordas de zombis y nuevos monstruos mutantes. Será la aventura más difícil de Alice para salvar a la humanidad, que está al borde de la extinción.',
        genres: [
          'accion',
          'terror',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 47mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/o9GblhAuku22VM3zugfpnHXQ5K7.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/iDouL01ezoqD6IYwgAcjrqUUhd5.jpg',
        url: 'https://drive.google.com/file/d/1xdgxU9gpo2_A04_T-HRgM2Ac5gE_k-Hq/preview'
        
      },
      {
        id: 18,
        key: 'RESIDENT-EVIL-4-ULTRATUMBA',
        name: 'RESIDENT EVIL 4 ULTRATUMBA',
        description: 'En un mundo asolado por un virus infeccioso que convierte a sus víctimas en muertos vivientes, Alice continúa buscando supervivientes para ponerlos a salvo. Su batalla a muerte con la Corporación Umbrella llega a alturas insospechadas, pero Alice, inesperadamente, recibe ayuda de una vieja amiga. Nuevas pistas, con la promesa de un paraíso a salvo de muertos vivientes, los conduce hasta Los Ángeles, pero cuando llegan, la ciudad está infectada con miles de muertos vivientes. Alice y sus compañeros están a punto de caer en una trampa mortal.',
        genres: [
          'accion',
          'terror',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 37mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/vkGXvYomkL91pGNzyQAmrOcZFTM.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6ewLQo8VYkwF7fTA7wDEji9xlV8.jpg',
        url: 'https://drive.google.com/file/d/1VyZhaxiTc9H74OQxhblN5DgV4aB0GJk6/preview'
        
      },
      {
        id: 19,
        key: 'RESIDENT-EVIL-3-EXTINCION',
        name: 'RESIDENT EVIL 3 EXTINCION',
        description: 'Tercera entrega de la saga basada en los famosos videojuegos. En esta ocasión, nuestra heroína, Milla Jovovich, junto con los supervivientes de la catástrofe acontecida en la ciudad de Raccoon deben atravesar el desierto de Nevada con la esperanza de llegar a Alaska, antes de que los de la Corporación Umbrella les alcancen.',
        genres: [
          'accion',
          'terror',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 35mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/vs007Td09KtsN8v1vfXaWiVplyz.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/A5hvEPYTp8Hek0BY785mdhVQHMK.jpg',
        url: 'https://drive.google.com/file/d/10CS8uOrzVFp0LczyTN-F7WL6rVI0Hz2u/preview'
        
      },
      {
        id: 20,
        key: 'RESIDENT-EVIL-2-APOCALIPSIS',
        name: 'RESIDENT EVIL 2 APOCALIPSIS',
        description: 'Un virus mortal ha sido liberado sobre la población de Raccoon City. Alice (Milla Jovovich), una de las supervivientes del desastre bioquímico, se encuentra en el corazón de esta devastada ciudad. Sometida a experimentos que han alterado su genética, ahora posee fuerza, sentidos y destreza sobrehumana. Estas habilidades, y más, serán las que deba utilizar quien quiera sobrevivir en esta nueva aventura. Junto con otros supervivientes deberá escapar de la cada vez más peligrosa Raccoon City. Para alcanzar su meta necesitarán luchar contra las fuerzas de la Umbrella Corporation, las violentas criaturas de bioingeniería creadas en sus laboratorios, los zombies que plagan la ciudad y, finalmente, enfrentarse a la más colosal y mortal de estas creaciones: Nemesis.',
        genres: [
          'accion',
          'terror',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 34mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/h8FFSlEq9DjUP6i9M6vIPFWw8ad.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/bt8PzoTx4QvmsredlMVKGR0jnQI.jpg',
        url: 'https://drive.google.com/file/d/1pzqvA69TISBYjxk130h30QB3LhYncBub/preview'
        
      },
      {
        id: 21,
        key: 'RESIDENT-EVIL-VENGANZA',
        name: 'RESIDENT EVIL VENGANZA',
        description: 'El virus de la corporación Umbrella sigue haciendo estragos en La Tierra convirtiendo a la población en legiones de muertos sedientos de sangre. La última esperanza de la humanidad, Alice, despierta en el centro de operaciones de la compañía donde comienza a conocer más detalles de su pasado. Alice seguirá persiguiendo a los responsables del virus llevándola por Tokio, Nueva York, Washington y Moscú donde le será revelado algo que la hará plantearse todo lo que la ha sucedido hasta ahora. Con la ayuda de sus nuevos aliados, Alice deberá sobrevivir el tiempo suficiente para escapar de un mundo hostil... La cuenta atrás ha comenzado.',
        genres: [
          'accion',
          'terror',
          'ciencia ficcion'
        ],
        rate: '8.4',
        length: '1hr 36mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/9mX1cqSYtIk9Fdlx8bd5WuMmGXc.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/irX4I9e77dW409AK1Fubm5NviBc.jpg',
        url: 'https://drive.google.com/file/d/1RCP6DK5hieUQYdYG9-v-zmxQLOK8lJ8T/preview'
        
      },
      {
        id: 22,
        key: 'TERMINATOR-5-GENESIS',
        name: 'TERMINATOR 5 GENESIS',
        description: 'Año 2032. La guerra del futuro se está librando y un grupo de rebeldes humanos tiene el sistema de inteligencia artificial Skynet contra las cuerdas. John Connor es el líder de la resistencia, y Kyle Reese es su fiel soldado, criado en las ruinas de una postapocalíptica California. Para salvaguardar el futuro, Connor envía a Reese a 1984 para salvar a su madre, Sarah de un Terminator programado para matarla con el fin de que no llegue a dar a luz a John. Pero lo que Reese encuentra en el otro lado no es como él esperaba.',
        genres: [
          'accion',
          'suspenso',
          'scifi'
        ],
        rate: '8.4',
        length: '2hr 6mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/a8rmtdNO6WSYUYhnumecti5b32H.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/wwdqGLwzfpe6SmqVE9HGd55IMDs.jpg',
        url: 'https://drive.google.com/file/d/11vQMkflF3lEXUhZyxugsz5ayJfKkWZVU/preview'
        
      },
      {
        id: 23,
        key: 'TERMINATOR-4-LA-SALVACION',
        name: 'TERMINATOR 4 LA SALVACION',
        description: 'Nueva entrega de la saga de Terminator, que transcurre en un post-apocalíptico 2018, tras el día del Juicio Final. John Connor es el hombre destinado a liderar la resistencia de los humanos contra Skynet y su ejército de Terminators. Pero el futuro en el que a Connor le enseñaron a creer se ve alterado en parte por la aparición de Marcus Wright, un extraño cuyo último recuerdo es haber estado en el corredor de la muerte, y que afirma haber estado con Kyle Reese, el padre de John. Connor debe decidir si Marcus ha sido enviado desde el futuro o rescatado del pasado, todo en una carrera contrareloj mientras la Resistencia prepara su ataque final contra el corazón del centro de operaciones de Skynet.',
        genres: [
          'accion',
          'suspenso',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 55mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/864FCqlmdvQKyFPZwXicMIO8YkI.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/oEbtjCyBxuYhymYlcQOY2lwUzJ.jpg',
        url: 'https://drive.google.com/file/d/1wo-5wQ4L5bamhG-rOs-D1fAJZI-wqAz7/preview'
        
      },
      {
        id: 24,
        key: 'TERMINATOR-3-LA-REBELION-DE-LAS-MAQUINAS',
        name: 'TERMINATOR 3 LA REBELION DE LAS MAQUINAS',
        description: 'Ha pasado una década desde que John Connor -Nick Stahl- salvara a la humanidad de la destrucción. En la actualidad John tiene 25 años y vive en la clandestinidad: no hay ninguna prueba documental de su existencia. Así evita ser rastreado por Skynet -la sofisticada corporación de máquinas que una vez intentó acabar con su vida-. Pero, ahora, desde el futuro, ha sido enviado el T-X (Kristanna Loken), la máquina destructora cyborg más desarrollada de Skynet. Su misión es completar el trabajo que no pudo terminar su predecesor, el T-1000. El T-X es una máquina tan implacable como bello su aspecto humano. Ahora la única esperanza de sobrevivir para Connnor es Terminator.',
        genres: [
          'accion',
          'suspenso',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 49mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/l311E80UHiCB1nGv3tZVFcnbcoJ.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/nZCQUC9W9XKBe7Tm3KuzwOQUt41.jpg',
        url: 'https://drive.google.com/file/d/1MrbP7YvWDJn1ofni3ULpreLRX80BnbSC/preview'
        
      },
      {
        id: 25,
        key: 'TERMINATOR-2-EL-JUICIO-FINAL',
        name: 'TERMINATOR 2 EL JUICIO FINAL',
        description: 'Ha pasado 11 años desde que Sarah Connor fue marcada como objetivo para ser eliminada por un cyborg del futuro. Ahora su hijo, John, el futuro líder de la resistencia, es el objetivo de un Terminator más moderno, más mortífero. Una vez más, la resistencia se las ha ingeniado para enviar un protector de vuelta al pasado para intentar salvar a John y a su madre, Sarah.',
        genres: [
          'Accion',
          'Suspenso',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 49mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/wmEVZzh4CGW9y0IZHCFWQIZzqfB.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/naY04cHGEdMaIbIIZpFj6Eoxno8.jpg',
        url: 'https://drive.google.com/file/d/1V9Ga9oRuVLfWuEoZC3SvqocT9Nb2sMOh/preview'
        
      },
      {
        id: 26,
        key: 'TERMINATOR',
        name: 'TERMINATOR ',
        description: 'Un cyborg ha sido enviado desde el futuro en una misión mortal: Eliminar a Sarah Connor, una joven cuya vida tendrá una gran importancia en los próximos años. Sarah tiene sólo un protector - Kyle Reese - también enviado desde el futuro. El Terminator utiliza su inteligencia excepcional y fuerza para encontrar a Sarah, pero ¿hay alguna forma de detener al cyborg aparentemente indestructible.',
        genres: [
          'accion',
          'suspenso',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 48mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/qJw4hTyDcWHXDHyEdpdwNyF8OcX.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/dH6m8iWJEPIFoyQaZiuo9Ih7kpA.jpg',
        url: 'https://drive.google.com/file/d/1KM7VkAd033rwUxRl1WjZ74tYnECpCFfn/preview'
        
      },
      {
        id: 27,
        key: 'EL UNICO',
        name: 'EL UNICO ',
        description: 'En un mundo futuro se ha descubierto que existen vidas alternas en universos alternos, un hecho que los agentes del Departamento Multiverse defienden, excepto el investigador Yulaw. Yulaw ha atravesado 123 universos persiguiendo y destruyendo sus vidas alternas. A medida que las mata, absorbe la fuerza de esas vidas alternas, ganando habilidades sobrehumanas. La magnitud de tal fenómeno puede desequilibrar el delicado equilibrio de todos los universos, sobre todo cuando a Yulaw ya sólo le queda eliminar a la última de sus vidas alternas. Ese personaje, Gabriel Yulaw, es agente de policía honesto y buen marido, y su vida se ve alterada cuando el otro Yulaw entra en su universo. Para salvarse a sí mismo, la única alternativa que le queda es la de matar a su yo malvado del otro universo.',
        genres: [
          'accion',
          'suspenso',
          'scifi'
        ],
        rate: '8.4',
        length: '1hr 27mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/dmUl55UCP6qhU4vb8lqSzApSyxy.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/2JApfvtgf2snKUtOFn8d1wm5pDU.jpg',
        url: 'https://drive.google.com/file/d/1xVGpFQy2nWOZdbbYZ7W1-m09LhuTiYxX/preview'
        
      },
      {
        id: 28,
        key: 'TOMORROWLAND-EL-MUNDO-DEL-MAÑANA',
        name: 'TOMORROWLAND EL MUNDO DEL MAÑANA ',
        description: 'Unidos por el mismo destino, una adolescente inteligente y optimista, llena de curiosidad científica, y un antiguo niño prodigio inventor, hastiado por las desilusiones, se embarcan en una peligrosa misión para desenterrar los secretos de un enigmático lugar localizado en algún lugar del tiempo y el espacio, conocido en la memoria colectiva como “Tomorrowland”, y así salvar a la humanidad.',
        genres: [
          'aventura',
          'mysterio',
          'scifi'
        ],
        rate: '8.4',
        length: '2hr 10mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/cz05f0OEkuK1bBsS6XXo5RjoH8c.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/tfPUB8H6c22ZFcJC9hM62w0nMjT.jpg',
        url: 'https://drive.google.com/file/d/12w6QWeLyEbYJxED76Ux7o7RBJjWfvYGs/preview'
        
      },
      {
        id: 29,
        key: 'SPACE JAM',
        name: 'SPACE JAM',
        description: 'Bugs Bunny y su equipo desafían a los Nerdlucks (un grupo de pequeños extraterrestres) a un partido de baloncesto para decidir si los Looney Tunes permanecen en la Tierra o se trasladan a una lejana galaxia para trabajar en un parque de atracciones de Montaña Tontolandia. Los Nerdlucks cuentan con una poderosa arma secreta que los hace superiores: se han apoderado de las mejores cualidades de las estrellas de la NBA (Charles Barkley y Patrick Ewing). Pero también los Looney poseen un arma secreta: ¡Michael Jordan.',
        genres: [
          'animacion',
          'familia',
          'comedia'
        ],
        rate: '8.4',
        length: '1hr 27mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/2yyw20gloVgbzR9a5B15GqPdqux.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/54lisrR60aaS9w7VjIrzX2rxCct.jpg',
        url: 'https://drive.google.com/file/d/1WWxQJdfKihR0UOD8LKXruo6ky8FRfInh/preview'
        
      },
      {
        id: 30,
        key: 'TIEMPOS-VIOLENTOS',
        name: 'TIEMPOS VIOLENTOS',
        description: 'Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.',
        genres: [
          'suspenso',
          'crimen'
        ],
        rate: '8.4',
        length: '2hr 34mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/qoWK8srpkxeC1iV9JfhKskVmFIw.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/52StM7zDmcjeKxWkW55X5LtoLQi.jpg',
        url: 'https://drive.google.com/file/d/16yV6fZnYjhN_pCi85L8mE8fkwoU5JgpF/preview'
        
      },
      {
        id: 31,
        key: 'QUE-PASO-AYER-PARTE-III',
        name: 'QUE PASO AYER PARTE III',
        description: 'Tras la inesperada muerte de su padre, Alan (Zach Galifianakas) es llevado por sus amigos Phil (Bradley Cooper), Stu (Ed Helms) y Doug (Justin Bartha) a un centro especializado para que mejore. Esta vez no hay boda ni fiesta de despedida ¿Qué puede ir mal? Pues que cuando estos chicos salen a la carretera, y sobre todo cuando aparece Chow (Ken Jeong)... la suerte está echada. Tercera entrega de la franquicia iniciada en 2009 con Resacón en Las Vegas.',
        genres: [
          'comedia',
        ],
        rate: '8.0',
        length: '1hr 40mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/mqgoB38AJzM6CsGTmLRQ8zoYv0K.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/9pLMes75NR9ggg6b7trNVxUEjhz.jpg',
        url: 'https://drive.google.com/file/d/1kIXpGxlP3jcmUHRYnfVZs4RngboOLIAK/preview'
        
      },
      {
        id: 32,
        key: 'QUE-PASO-AYER-PARTE-II',
        name: 'QUE PASO AYER PARTE II',
        description: 'Phil (Bradley Cooper), Stu (Ed Helms), Alan (Zach Galifianakis) y Doug (Justin Bartha) viajan a la exótica Tailandia para la boda de Stu. Con el recuerdo de la desastrosa despedida de soltero en Las Vegas aún vivo en su memoria - o al menos bien documentado -, Stu no deja nada al azar. Ha optado por un brunch preboda seguro y tranquilo con tortitas, café, y sin alcohol... Sin embargo, las cosas no siempre salen como se piensa. Dos noches antes del gran día, en un fabuloso resort de Tailandia, Stu cede. Una cerveza para cada uno. En botellas cerradas, ¿qué podría pasar?Lo que ocurre en Las Vegas se queda en Las Vegas, pero lo que ocurre en Bangkok resulta difícil de imaginar.',
        genres: [
          'comedia',
        ],
        rate: '8.0',
        length: '1hr 42mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jQfURiv7Ho6ozviSRv519jXSpHD.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/aGmsekNU5cMOkJMpbdRutkvmVMl.jpg',
        url: 'https://drive.google.com/file/d/1FmFE2ZugyRpZiPovhtQjOW-ZsKMujQfv/preview'
        
      },
      {
        id: 33,
        key: 'QUE-PASO-AYER',
        name: 'QUE PASO AYER ',
        description: '"The Hangover" es la historia de una desmadrada despedida de soltero en la que el futuro novio y sus tres amigos, dos días antes de la boda, se montan la juerga padre en Las Vegas. Doug viaja a la ciudad del juego con sus mejores amigos Phil y Stu, así como su futuro cuñado Alan. La juerga es de campeonato y, como era de esperar, a la mañana siguiente tienen una resaca monumental. El problema es que, siendo incapaces de recordar nada de lo ocurrido durante la noche anterior, se encuentran con que el prometido ha desaparecido, topándose en su lugar con otras dos sorpresas en la suite del hotel: un tigre y un bebé.',
        genres: [
          'comedia',
        ],
        rate: '8.0',
        length: '1hr 40mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/rqeim09TdaflSvPNVnCTBjUHlKu.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/2o0PKGmnSgCGkzoSePNAqse8Ure.jpg',
        url: 'https://drive.google.com/file/d/17DiJFfSnG3DnwWGW8NtsI9K5Bz8JcEm0/preview'
        
      },
      {
        id: 34,
        key: 'EL-EFECTO-MARIPOSA',
        name: 'EL EFECTO MARIPOSA ',
        description: 'Evan Treborn, un joven que se está esforzando por superar unos dolorosos recuerdos de su infancia, descubre una técnica que le permite viajar atrás en el tiempo y ocupar su cuerpo de niño para poder cambiar el curso de su dolorosa historia. Sin embargo también descubre que cualquier mínimo cambio en el pasado altera enormemente su futuro.',
        genres: [
          'scifi',
          'suspenso'
        ],
        rate: '8.0',
        length: '1hr 53mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/vtqJkVTvrxbk2BehGO6e6izsUBa.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/yriYPLqyFqPW0QXaegT1KmWXk9a.jpg',
        url: 'https://drive.google.com/file/d/1oaI6vc0MAc2fHj8Je0pM46BIXpXnIk4E/preview'
        
      },
      {
        id: 35,
        key: 'PROYECTO-GEMINIS',
        name: 'PROYECTO GEMINIS ',
        description: 'Henry Bogan, un asesino a sueldo, pretende retirarse porque se siente viejo. Sin embargo, hay alguien que no está dispuesto a permitírselo porque tiene la misión de matarlo: un clon suyo más joven, más rápido y más fuerte.',
        genres: [
          'accion',
          'suspenso'
        ],
        rate: '8.0',
        length: '1hr 57mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/fjCK5YIDRXrAnffd56zJOYfgF46.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6nIfuQbDoxcKW4TfYUSdV7DjmNk.jpg',
        url: 'https://drive.google.com/file/d/1Zw_8TpWlB6Pmr2xsqPhtxyzT5_4NpIKs/preview'
        
      },
      {
        id: 36,
        key: 'ULTRAVIOLETA',
        name: 'ULTRAVIOLETA',
        description: 'A finales del siglo XXI, surge una subcultura de seres humanos con una mutación genética: están dotados de una asombrosa velocidad, una increíble resistencia y una profunda inteligencia. A medida que hay más personas contagiadas, el temor del gobierno aumenta y a los mutantes se les trata como a marginados, se les somete a pruebas espantosas y se les pone en cuarentena. El gobierno ha tomado la determinación de acabar con ellos, pero una mujer está decidida a impedirlo: la ultrabella y ultraletal Violet (Milla Jovovich). Gracias a sus impresionantes técnicas de artes marciales y a su capacidad camaleónica, Violet se convierte en una guerrera solitaria dedicada a proteger a su nueva raza y a vengarse de los que la crearon.',
        genres: [
          'accion',
          'suspenso',
          'scifi'
        ],
        rate: '9.0',
        length: '1hr 28mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/bLwx3RGXgwxjRrwgPEY0noXJzlO.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/xfV7huEdsTUzEFiUmZHxTzlJhoB.jpg',
        url: 'https://drive.google.com/file/d/1VN9yexUyAQjmLJstaNWoWEPinZK7erkI/preview'
        
      },
      {
        id: 37,
        key: 'MISION-IMPOSIBLE-6-REPERCUSION',
        name: 'MISION IMPOSIBLE 6 REPERCUSION',
        description: 'En ocasiones, hasta las mejores intenciones pueden volverse en contra. Después de una misión fallida, Ethan Hunt y su equipo IMF, junto con algunos aliados conocidos, se enfrentarán a una nueva carrera contrarreloj.',
        genres: [
          'accion',
          'aventura',
          'scifi'
        ],
        rate: '8.0',
        length: '2hr 27mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/l0NHRXsdtkSNL6OSn1MSEA2COT.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/a9fRqsl6P27qxbDSb4pBXNv9Fwl.jpg',
        url: 'https://drive.google.com/file/d/1doi74QC6p5uV2h6qtFBPv-tZrdyluzm9/preview'
        
      },
      {
        id: 38,
        key: 'MISION-IMPOSIBLE-5-NACION-SECRETA',
        name: 'MISION IMPOSIBLE 5 NACION SECRETA',
        description: 'Con la FMI disuelta y Ethan Hunt abandonado a su suerte, el equipo tiene que enfrentarse contra el Sindicato, una red de agentes especiales altamente preparados y entrenados. Estos grupos están empeñados en crear un nuevo orden mundial mediante una serie de ataques terroristas cada vez más graves. Ethan reúne a su equipo y une sus fuerzas con la agente británica renegada Ilsa Faust, quien puede que sea o no miembro de esta nación secreta, mientras el grupo se va enfrentando a su misión más imposible hasta la fecha…',
        genres: [
          'accion',
          'aventura',
          'scifi'
        ],
        rate: '8.0',
        length: '2hr 11mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ww0IX7Xla6tHgrwYSupfXcksV3n.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/eR20N1flPCQyp9HzpxlTcxgDAO7.jpg',
        url: 'https://drive.google.com/file/d/184eyRJJJUbUL4IhXrE8fBWFjRtd5mwUt/preview'
        
      },
      {
        id: 39,
        key: 'MISION-IMPOSIBLE-4-PROTOCOLO-FANTASMA',
        name: 'MISION IMPOSIBLE 4 PROTOCOLO FANTASMA',
        description: 'El agente Ethan Hunt, acusado de un atentado terrorista con bombas contra el Kremlin, es desautorizado junto con toda la organización, al poner en marcha el presidente el llamado Protocolo fantasma. Abandonado a su suerte y sin recursos, el objetivo de Ethan es rehabilitar el buen nombre de su agencia e impedir un nuevo ataque. Pero emprende esta misión con un equipo formado por fugitivos, cuyos motivos personales no conoce bien.',
        genres: [
          'accion',
          'aventura',
          'scifi'
        ],
        rate: '7.0',
        length: '2hr 12mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/y0hjsPyieqxcunEcAxb9mrrE09c.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/f0fgxPQSbk2oFRiEHpCTUFIk4Sd.jpg',
        url: 'https://drive.google.com/file/d/1TQZAmhARb-nasypJlw2VBgFuzUOPIXiK/preview'
        
      },
      {
        id: 40,
        key: 'MISION-IMPOSIBLE-3',
        name: 'MISION IMPOSIBLE 3',
        description: 'Tras haber llevado a cabo diversas misiones, el agente especial Ethan Hunt (Tom Cruise) se ha retirado del servicio activo y se ha prometido con su amada Julia (Michelle Monaghan). Pero, cuando es secuestrado uno de los agentes entrenados por él, volverá de nuevo a la acción. También tendrá que enfrentarse a Owen Davian (Philip Seymour Hoffman), un individuo sin escrúpulos que trafica con armas y con información.',
        genres: [
          'accion',
          'aventura',
          'suspenso',
          'scifi'
        ],
        rate: '8.0',
        length: '2hr 6mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/w61xBgFOfP8Z6uHKIKn1sl1TI8j.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/bYKeB9uUcPmvikjouEEQ86uvPw9.jpg',
        url: 'https://drive.google.com/file/d/1OYAGKYzeLW_vnyQXtnJOBh3EYPWnNdvo/preview'
        
      },
      {
        id: 41,
        key: 'MISION-IMPOSIBLE-2',
        name: 'MISION IMPOSIBLE 2',
        description: 'El agente especial Ethan Hunt tiene una nueva misión: evitar que un despiadado ex-agente y ahora terrorista internacional se haga con un virus mortal que podría soltar sobre Australia causando millones de víctimas. Para evitarlo, contará otra vez con la inestimable ayuda del genio informático Luther Stickell, del experto conductor Billy Baird y de la presencia de la sensual y exótica ladrona internacional Nhye, que en el pasado mantuvo una relación sentimental con el criminal y que ahora se siente atraída por Hunt.',
        genres: [
          'accion',
          'aventura',
          'suspenso',
          'scifi'
        ],
        rate: '6.0',
        length: '2hr 3mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/mskE3W88cjMRrnKQye8pjmJu3O1.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/24DZfupDlhXeTchmcOkoGRhP5Vg.jpg',
        url: 'https://drive.google.com/file/d/1iyEWU4Wc41T88F9H_uBwrOf4Bajwfn23/preview'
        
      },
      {
        id: 42,
        key: 'MISION-IMPOSIBLE',
        name: 'MISION IMPOSIBLE',
        description: 'Ethan Hunt es un superespía capaz de resolver cualquier arriesgada situación con la máxima elegancia. Forma parte de un competente equipo dirigido por el agente Jim Phelps, que ha vuelto a reunir a sus hombres para participar en una dificilísima misión: evitar la venta de un disco robado que contiene información secreta de vital importancia.',
        genres: [
          'accion',
          'aventura',
          'suspenso',
          'scifi'
        ],
        rate: '6.0',
        length: '1hr 50mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/xCpmxw3UUjv4PGzbIPOHeoKAV0l.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/pbaAkR1FDvgndTVFgGRIzf9o49r.jpg',
        url: 'https://drive.google.com/file/d/1pm_5e4SJTgja90kF2VI9gKqfPxmvCQYb/preview'
        
      },
      {
        id: 43,
        key: 'MAZINGER-Z',
        name: 'MAZINGER Z',
        description: 'La película llega en la conmemoración de los 45 años del manga, y está dirigida por Junji Shimizu (Yu-Gi-Oh!, One Piece,Toriko 3D: Kaimaku Gourment Adventure!) y bajo la producción de Toei Animation, productora encargada de otros famosos animes como Caballeros del Zodiaco, Sailor Moon y Candy Candy. El villano Doctor Infierno y su Imperio del Mal vuelven para hacerse con la humanidad y sembrar el caos, lo que hará que Koji Kabuto vuelva a ponerse a los mandos del robot Mazinger Z. Tras descubrir una extraña y diferente forma de vida en el Monte Fuji Kabuto tendrá que hacer frente a un nuevo y desconocido mal y escoger entre volver a ser el héroe o un dios.',
        genres: [
          'accion',
          'animacion',
          'scifi'
        ],
        rate: '7.0',
        length: '1hr 30mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/rulLQ2eLxpCBKOSfTyFBcpGnmX.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/8we8EpFgalNg0wtRhhYFDTNF7pp.jpg',
        url: 'https://drive.google.com/file/d/18NCkyXzhrukILeg073ClKoSC-hFjAAU1/preview'
        
      },
      {
        id: 44,
        key: 'EL-CORREDOR-DEL-LABERINTO-LA-PRUEBA',
        name: 'EL CORREDOR DEL LABERINTO LA PRUEBA',
        description: 'En este nuevo capítulo de la trepidante saga El Corredor del Laberinto, Thomas Dylan O Brien y el resto de clarianos tendrán que enfrentarse a su mayor desafío hasta el momento: buscar pistas sobre la misteriosa y poderosa organización conocida como CRUEL. Este viaje les llevará a “La Quemadura un apocalíptico lugar repleto de inimaginables obstáculos. Formando equipo con miembros de la resistencia, los clarianos deberán desenmascarar a las fuerzas superiores de CRUEL y averiguar qué planes tienen para todos ellos',
        genres: [
          'accion',
          'suspenso',
          'scifi'
        ],
        rate: '6.9',
        length: '2hr 12mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/wtbjAodeIf0Pj2blNeN1dM3suxU.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/pTZ8jRtDqd5a1xFhCI50yORX13D.jpg',
        url: 'https://drive.google.com/file/d/1hHeqZRQpjX_jG3kRjT9nIC-QiH5QUaEn/preview'
        
      },
      {
        id: 45,
        key: 'EL-CORREDOR-DEL-LABERINTO-LA-CURA-MORTAL',
        name: 'EL CORREDOR DEL LABERINTO LA CURA MORTAL',
        description: 'En este final de saga, Thomas lidera a su grupo en una última misión. Deberán entrar en la legendaria Last City, un laberinto controlado por WCKD que puede llegar a ser el laberinto más mortífero de todos. Cualquier persona que lo supere obtendrá las respuestas a las preguntas y los protagonistas quieren saber lo que realmente sucede.',
        genres: [
          'accion',
          'suspenso',
          'mysterio',
          'scifi'
        ],
        rate: '7.1',
        length: '2hr 22mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/t0NJa8B0QiemnMNg6KkuDvS3Bh7.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/zgcL0xaHxXVvrV1Fu1ZSKoTk0MH.jpg',
        url: 'https://drive.google.com/file/d/1D2QWMXszr0kFpEBkyF4qf5uK23X5WhoZ/preview'
        
      },
      {
        id: 46,
        key: 'EL-CORREDOR-DEL-LABERINTO-CORRER-O-MORIR',
        name: 'EL CORREDOR DEL LABERINTO CORRER O MORIR',
        description: 'Thomas abre los ojos y se da cuenta que está en un ascensor. Lo extraño es que no recuerda nada, ni dónde está, ni quién es. Lo único que aún permanece intacto en su memoria es su nombre, y ya es mucho. Antes de que le dé tiempo a cuestionarse algo sobre sí mismo las puertas se abrirán y aparecerá ante él un extraño mundo. Todo lo que ve son chicos de su edad que tienen su mismo estado de amnesia. Una aventura fantástica que pronto destapará la dura realidad bajo ese velo de incertidumbre: todos ellos están atrapados en un laberinto. Si quieren tener alguna posibilidad de salir de allí y recuperar su antigua vida y aquello que no son capaces de recordar deberán unir fuerzas para escapar. Un mundo post-apocalíptico que les acorralará e irá un paso por delante será el desafío que tengan que pasar estos jóvenes por la libertad.',
        genres: [
          'accion',
          'suspenso',
          'mysterio',
          'scifi'
        ],
        rate: '7.1',
        length: '1hr 53mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/l4gHlqLUpksNpixKcePNL9KUIjz.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/vHJlbhsXrZ5yrO2KqCbGSIU6fRX.jpg',
        url: 'https://drive.google.com/file/d/1THs9PlZGFy17k283J5l4DHq4Qqnlc8Dc/preview'
        
      },
      {
        id: 47,
        key: 'INDIANA-JONES-Y-LA-CALAVERA-DE-CRISTAL',
        name: 'INDIANA JONES Y LA CALAVERA DE CRISTAL',
        description: 'Guerra Fría (1957). Indiana Jones (Harrison Ford) y su amigo Mac (Ray Winstone) acaban de escapar de las garras de unos agentes soviéticos en un remoto aeropuerto. El decano de la Universidad (Jim Broadbent) le confiesa a su amigo el profesor Jones que las últimas misiones de Indy han fracasado y que está a punto de ser despedido. Mientras tanto, Indiana conoce a Mutt (Shia LaBeouf), un joven rebelde que le propone un trato: si le ayuda a resolver un problema personal, él, a cambio, le facilitaría uno de los descubrimientos más espectaculares de la historia: la Calavera de Cristal de Akator, que se encuentra en un lugar remoto del Perú. Pero los agentes soviéticos, dirigidos por la fría y bella Irina Spalko (Cate Blanchett), tienen el mismo objetivo.',
        genres: [
          'accion',
          'aventura',
          'mysterio',
          'scifi'
        ],
        rate: '8.1',
        length: '2hr 3mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/eahWIgjttYQu4Ih8HwhF9sdexYk.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/p96949hcwUG2BwE6MgKmw0uYNCx.jpg',
        url: 'https://drive.google.com/file/d/1Qx7qwePg7IVLuMMJpHzWxPb2FxvHWspl/preview'
        
      },
      {
        id: 48,
        key: 'INDIANA-JONES-LA-ULTIMA-CRUZADA',
        name: 'INDIANA JONES LA ULTIMA CRUZADA',
        description: 'En esta tercera entrega, el padre del protagonista (Harrison Ford), Henry Jones, también arqueólogo (Sean Connery), es secuestrado cuando buscaba el Santo Grial. Indiana tendrá que ir a rescatarlo y, de paso, intentar hacerse con la preciada reliquia, que también ambicionan los nazis.',
        genres: [
          'accion',
          'aventura',
          'mysterio',
          'scifi'
        ],
        rate: '8.1',
        length: '2hr 7mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/osKZUgKRUK1jwYMdsmlevK7zZIY.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/je2QsgBLEy4lzsvWprwfoZKmIX1.jpg',
        url: 'https://drive.google.com/file/d/1MHTc7oEwVyo60UcRqsJkL8V0IeELdoRT/preview'
        
      },
      {
        id: 49,
        key: 'INDIANA-JONES-Y-EL-TEMPLO-MALDITO',
        name: 'INDIANA JONES Y EL TEMPLO MALDITO',
        description: '1935. Shanghai. El intrépido arqueólogo Indiana Jones, tras meterse en jaleos en un local nocturno, consigue escapar junto a una bella cantante y su joven acompañante. Tras un accidentado vuelo, los tres acaban en la India, donde intentarán ayudar a los habitantes de un pequeño poblado, cuyos niños han sido raptados.',
        genres: [
          'accion',
          'aventura',
          'mysterio',
          'scifi'
        ],
        rate: '8.1',
        length: '1hr 58mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/6UrznkPL4Y2f66zkoFAiSwfAYtE.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/iO73omOyLwUPW22EpaZkJNC72ec.jpg',
        url: 'https://drive.google.com/file/d/1upJkn0Uuk09Loq7jxHm3thbYxN59GZuJ/preview'
        
      },
      {
        id: 50,
        key: 'INDIANA-JONES',
        name: 'INDIANA JONES',
        description: 'Cuando el profesor Henry Jones Sr. es invitado a dar conferencias en todo el mundo en mayo de 1908, lleva consigo a su esposa e hijo, e invita a su ex tutor, la señorita Helen Seymour, a enseñar a Henry Jr. durante el viaje. Su primera parada es El Cairo, Egipto. Cuando Junior, que prefiere llamarse Indy y Miss Seymour visitan las pirámides, T.E. los invita. Lawrence (otro antiguo alumno suyo) para unirse a una excavación arqueológica. Cuando la momia desaparece y se roba un tocado invaluable, el joven Indy prueba su primera aventura. En su próxima parada en Tánger, la familia se queda con el ex compañero de clase del profesor Jones, Walter Harris. Indy se hace amigo de un joven esclavo llamado Omar que pertenece a Emily Keen. Los dos se meten en problemas cuando Indy insiste en visitar el mercado para ver una cabeza salada exhibida en un poste. Atrapados por traficantes de esclavos, terminan en una subasta de la que solo Harris puede intentar rescatarlos.',
        genres: [
          'accion',
          'aventura',
          'mysterio',
          'scifi'
        ],
        rate: '8.1',
        length: '1hr 30mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/oY0QAAwhbtTNkpYhKJcD3dqSuzG.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/zfRNjIG69w76AZsh3p2SGurSE5r.jpg',
        url: 'https://drive.google.com/file/d/12NjLlzAB7kOQb6r1WBO7f3oqahQ-3-IE/preview'
        
      },
      {
        id: 51,
        key: 'JOKER',
        name: 'JOKER',
        description: 'Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro.',
        genres: [
          'crime',
          'drama',
          'suspenso',
          'scifi'
        ],
        rate: '8.1',
        length: '2hr 2mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/v0eQLbzT6sWelfApuYsEkYpzufl.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg',
        url: 'https://drive.google.com/file/d/1xnGvbAVT3eE0M2VQyA-EVAklt6NJ2EYM/preview'
        
      },
      {
        id: 52,
        key: 'EL-HOMBRE-INVISIBLE',
        name: 'EL HOMBRE INVISIBLE',
        description: 'Cecilia (Elisabeth Moss) rehace su vida tras recibir la noticia de que su exnovio, un maltratador empedernido, ha fallecido. Sin embargo, su cordura comienza a tambalearse cuando empieza tener la certeza de que en realidad sigue vivo.',
        genres: [
          'terror',
          'drama',
          'suspenso',
          'scifi'
        ],
        rate: '8.1',
        length: '1hr 50mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/xk4RpcvVQ7JmnrkQtZ479EwWieT.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/hiGjyrNhojSgugIqd0xhd70rCRD.jpg',
        url: 'https://drive.google.com/file/d/16eJqy5qtwrjikkBh1C8_okdH5NR-xJNh/preview'
        
      },
      {
        id: 53,
        key: 'LA-GUERRA-DE-LOS-MUNDOS',
        name: 'LA GUERRA DE LOS MUNDOS',
        description: 'Basada en una popular novela de HG Wells, narra la historia de una invasión del planeta tierra por los marcianos, y la extraordinaria batalla de la humanidad por la supervivencia a través de los ojos de una familia americana. Ray Ferrier es un descargador de muelle, divorciado y padre nada modélico. Poco después de que su ex mujer y su nuevo marido se vayan después de dejar a Robbie, su hijo adolescente, y a su pequeña hija Rachel para una de sus contadas visitas, estalla una tremenda e inesperada tormenta eléctrica. Unos momentos después, en un cruce cerca de la casa, Ray es testigo de un acontecimiento que cambiará su vida y la de los suyos para siempre. Una enorme máquina de tres patas emerge del suelo y antes de que alguien pueda hacer algo, arrasa todo lo que está a su alcance. Un día como otro cualquiera acaba de convertirse en la fecha más extraordinaria de su vida: el primer ataque alienígena contra la Tierra.',
        genres: [
          'aventura',
          'suspenso',
          'scifi'
        ],
        rate: '8.1',
        length: '1hr 56mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ahcOViJGgwGojoncRVDMq5R7WDN.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/nH6hPhJq3EEv9CnBZgXU3IQnpJo.jpg',
        url: 'https://drive.google.com/file/d/1UeYewLBlNqyzZ5jPiEEcHgtf5kU-QhCh/preview'
        
      },
      {
        id: 54,
        key: 'LA-VECINA-DE-ALADO',
        name: 'LA VECINA DE ALADO',
        description: 'Matthew, un ambicioso joven de un instituto con aspiraciones a ser político en el futuro, se enamora de la chica de sus sueños: la bella y joven vecina de la puerta de al lado. Ambos comienzan un idílico romance, pero un sorprendente descubrimiento pondrá a prueba su relación: ella es un famosa actriz porno.',
        genres: [
          'comedia',
          'romance'
        ],
        rate: '8.1',
        length: '1hr 48mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/lpFkU7VmWvtBOf6FnWV3bCLoXVW.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/lDHdDgObpNXWHP2PHnA3BjDHm3g.jpg',
        url: 'https://drive.google.com/file/d/1gbEzjodQxXFvvkyvw8ATpy5899mkjQ9d/preview'
        
      },
      {
        id: 55,
        key: 'GIGANTES-DE-ACERO',
        name: 'GIGANTES DE ACERO',
        description: 'En un futuro no muy lejano, el boxeo es robótico: en los combates ya no se enfrentan seres humanos, sino robots humanoides, sofisticadas máquinas diseñadas para luchar. Charlie Kenton, un antiguo púgil que casi llegó a alcanzar la gloria, está pasando una mala racha como promotor de combates. Un día, encuentra un viejo robot desechado y, al comprobar que es un gran boxeador, decide entrenarlo.',
        genres: [
          'accion',
          'drama',
          'scifi'
        ],
        rate: '8.1',
        length: '2hr 6mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/ubHhEiVQfE0UMa2NQRrzCiXhhZg.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/qTtfFf5TuEp2PhpUtqpPHHR7lYU.jpg',
        url: 'https://drive.google.com/file/d/1gjOx-Dskj0hmghoe_awiDxDtfIupm7Sf/preview'
        
      },
      {
        id: 56,
        key: 'BATTLESHIP',
        name: 'BATTLESHIP',
        description: '“Battleship” es la libre adaptación al cine del popular juego de mesa de Hasbro conocido como “Hundir la flota” o ”Batalla naval”. La curiosa variante que plantea esta versión es que la batalla será entre la U.S. Navy y… ¡una flota alienígena! La historia nos propone una épica aventura de acción que transcurre en el mar, el cielo y la tierra, y en la que nuestro planeta lucha por sobrevivir contra una fuerza muy superior. La película está protagonizada por Taylor Kitsch en el papel del teniente Hopper, un oficial de la Marina destinado al John Paul Jones; Brooklyn Decker es Sam Shane, una fisioterapeuta de la Marina y novia de Hopper; Alexander Skarsgård es Stone, el hermano mayor de Hopper y comandante del Samson; Rihanna es la suboficial Raikes, especialista en armas del John Paul Jones; y Liam Neeson es el almirante Shane, el oficial superior de Hopper y Stone (y padre de Sam).',
        genres: [
          'accion',
          'suspenso',
          'aventura',
          'scifi'
        ],
        rate: '8.1',
        length: '2hr 11mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/iPcKGENr2JciyNqmiMNJGerVWO.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/13FUpGdCRFBcMBAk3PJ5iIY5mFw.jpg',
        url: 'https://drive.google.com/file/d/1C7uHUBCmVwmXklke_SAa2StKe5MEwZGx/preview'
        
      },
      {
        id: 57,
        key: 'LA BELLA Y LA BESTIA',
        name: 'LA BELLA Y LA BESTIA',
        description: 'Bella, una joven hermosa y brillante, asume el lugar de su padre como prisionero en el castillo de una bestia. Poco a poco, la valiente Bella irá dándose cuenta de que el príncipe bestia no es el malvado ser que todos creen que es y tiene, en realidad, un gran corazón.',
        genres: [
          'familia',
          'fantasia',
          'romance'
        ],
        rate: '8.1',
        length: '2hr 9mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/8vMrk2AWbJbSsRnIdogKIB8cHTK.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/sibwRLuvvsblv8tBjY5b459VrmS.jpg',
        url: 'https://drive.google.com/file/d/1qlVCIwymXl1G3jRJpJ28tNQxxqa-HklW/preview'
        
      },
      {
        id: 58,
        key: 'CHAPPIE',
        name: 'CHAPPIE',
        description: 'Ambientada en Johanesburgo, y con un personaje robótico ridículo como protagonista, este delirante relato nos traslada a un viaje por las emociones y sentimientos en un mundo distinto a la par que sorprendente. Con un argumento elaborado y un trasfondo reflexivo, esta cómica historia encaja en un marco inusual visualmente cuidado e impactante. Una comedia que cala por la simplicidad de su trama principal, y engancha por los minuciosos detalles que te adentran en una realidad ficticia y muy visual. Enigmática y divertida a partes iguales, se trata de una historia de corazón en un entorno robotizado y futurista donde la ciencia ficción es el paisaje.',
        genres: [
          'crimen',
          'accion',
          'scifi'
        ],
        rate: '8.1',
        length: '2hr 00mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/h767mOshwwM4VzmcuEu7rTZmgRa.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6qjK7kJBodduKkuSP9AU8OiEzNS.jpg',
        url: 'https://drive.google.com/file/d/1QIb54pBcsIP0oq2HwNBac4a7vU8yODdE/preview'
        
      },
      {
        id: 59,
        key: '365-DIAS',
        name: '365 DIAS',
        description: 'Massimo es miembro de la mafia siciliana y Laura es una directora de ventas. Ella no espera que un viaje a Sicilia salve su relación, pero Massimo la secuestrará durante 365 días para que se enamore de él.',
        genres: [
          'drama',
          'romance'
        ],
        rate: '9.1',
        length: '1hr 56mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/jz8T3hrU6GuMqSuQ4Rbd4MJUeaq.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/e8b2F4eg6ansZhaQQN8iXfzZtz7.jpg',
        url: 'https://drive.google.com/file/d/1lr-wNRyM-C_gIffjLj3DIHcsGfmI9opH/preview'
        
      },
      {
        id: 60,
        key: 'CAMINO-HACIA-EL-DORADO',
        name: 'CAMINO HACIA EL DORADO',
        description: 'Siglo XVI. Dos jóvenes estafadores ganan en un juego de dados un mapa a El Dorado pero son descubiertos y perseguidos por los guardias. Logran escapar pero terminan por meterse en el barco del mismisimo Hernán Cortés. Escapan en un bote del barco y llegan a tierra arrastrados por el mar. Allí deciden emprender la búsqueda de la ciudad de oro al reconocer indicios que aparecían en el mapa, pero su aventura no terminará como ellos lo esperan.',
        genres: [
          'animacion',
          'aventura',
          'comedia'
        ],
        rate: '8.1',
        length: '1hr 29mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/g9v66AdqXSmphnKPEcHqlKqxhA8.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/ciID0Mu1pPuOUP3JbOsDXQ5aMV6.jpg',
        url: 'https://drive.google.com/file/d/1OT_hh2-DZSv_ALS9riEzP5h9zix4ksgL/preview'
        
      },
      {
        id: 61,
        key: 'LAS-NOVIAS-DE-MIS-AMIGOS',
        name: 'LAS NOVIAS DE MIS AMIGOS',
        description: 'Tres amigos están en ese momento vital en el que no saben qué hacer con su vida sentimental. Jason y Daniel viven yendo de relación en relación con chicas con las que no quieren comprometerse, mientras que Mickey está casado y tiene problemas con su mujer. Todo cambiará para ellos una noche en que deciden salir de fiesta para animar a su amigo y Jason cae perdidamente enamorado de una chica a la que acaba de conocer.',
        genres: [
          'romance',
          'comedia'
        ],
        rate: '9.0',
        length: '1hr 40mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/fuC76J6XMKlhXBgjcP3GtU15Us0.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/l44Dz6cuQaixAlfmQDNwDQJRC5m.jpg',
        url: 'https://drive.google.com/file/d/18hv65b5_w_BBDsscXSf0OzoQsRMeotQz/preview'
        
      },
       {
        id: 62,
        key: 'ALADDIN',
        name: 'ALADDIN',
        description: 'Aladdin es un adorable pero desafortunado ladronzuelo enamorado de la hija del Sultán, la princesa Jasmine. Para intentar conquistarla, acepta el desafío de Jafar, que consiste en entrar a una cueva en mitad del desierto para dar con una lámpara mágica que le concederá todos sus deseos. Allí es donde Aladdín conocerá al Genio, dando inicio a una aventura como nunca antes había imaginado.',
        genres: [
          'aventura',
          'fantasia',
          'romance',
          'familia'
        ],
        rate: '7.5',
        length: '2hr 8mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/rSfOAjBSqdvGndNHv0H961YkZIr.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/oX056O8bAInZ75jGY9MacQ2VlsM.jpg',
        url: 'https://drive.google.com/file/d/1lnCeOw4vVoSYU8wBUugx1D_gwUBz-wPx/preview'
        
      },
      {
        id: 63,
        key: 'DEADPOOL-2',
        name: 'DEADPOOL 2',
        description: 'Wade Wilson (Ryan Reynolds), mejor conocido como Deadpool, su nombre de batalla e identidad antiheroica, está de regreso con Deadpool 2 y en esta ocasión su misión será salvar a un chico llamado Russell (Julian Dennison) de las manos de un poderoso rival llamado Cable (Josh Brolin). En aras de dar cumplimiento a su tarea el antihéroe formará un grupo al cual pondrá el nombre de X-Force. Secuela de la exitosa película (recaudó más de 780 millones de dólares en todo el mundo) parodia de los superhéroes mutantes del 2016, también protagonizada por Reynolds.',
        genres: [
          'aventura',
          'comedia',
          'accion'
        ],
        rate: '8.5',
        length: '2hr 00mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/fgPTa4IS07Pygz0Q1WJnRgOP7r7.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/1CzUuIdalmARzfYyEX3vGmBy6dn.jpg',
        url: 'https://drive.google.com/file/d/1zUkxRiOghs3bTgZ1mNm7ygHD0KrNg54z/preview'
        
      },
      {
        id: 64,
        key: 'LINTERNA-VERDE',
        name: 'LINTERNA VERDE',
        description: 'En un universo tan vasto como misterioso, una pequeña pero misteriosa fuerza ha existido por siglos. Protectores de la paz y la justicia se hace llamar el cuerpo de linternas verdes. Una hermandad de guerreros que juraron mantener el orden intergaláctico donde cada linterna verde lleva un anillo que le da superpoderes. Pero cuando un nuevo enemigo llamado Parallax amenaza con destruir el balance y el poder del universo, su destino y el de la tierra cae en manos del nuevo recluta; el primer humano que ha sido elegido: Hal Jordan.',
        genres: [
          'aventura',
          'suspenso',
          'scifi',
          'accion'
        ],
        rate: '8.5',
        length: '1hr 54mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/f1xnVz2zFp49Kz8I7T231V5qN3m.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/58r049aVTO1KjAYVuWJr0KgG5nY.jpg',
        url: 'https://drive.google.com/file/d/1ZMuJGUJb2U5PvQiBUbk3ytoaG24_wFkd/preview'
        
      },
      {
        id: 65,
        key: 'ARTEMIS-FOWL',
        name: 'ARTEMIS FOWL',
        description: 'La historia de Artemis Fowl es la de un niño de 12 años de edad que está a punto de arrebatar el poder al mundo subterráneo. Lo que él todavía no sabe es que sus habitantes: hadas, duendes, elfos... no son las criaturas maravillosas que siempre hemos imaginado y no van a consentir que un humano conozca sus secretos más sagrados. Como él, van armados hasta las barbas y conocen las últimas tecnologías: se prepara un trepidante duelo que puede provocar una auténtica guerra entre las especies del planeta.',
        genres: [
          'aventura',
          'fantasia',
          'scifi',
          'familia'
        ],
        rate: '8.5',
        length: '1hr 35mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/juE7o699roXnxCi8shR10Cf2dCH.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg',
        url: 'https://drive.google.com/file/d/1QzlTziLYnm-kVlkbwrpkenKSiwGzY5l_/preview'
        
      },
      {
        id: 66,
        key: 'ANT-MAN',
        name: 'ANT-MAN',
        description: 'Armado con la asombrosa capacidad de reducir su tamaño a la dimensiones de un insecto, el estafador Scott Lang debe sacar a relucir al héroe que lleva dentro y ayudar a su mentor, el doctor Hank Pym, a proteger de una nueva generación de amenazas el secreto que se esconde tras el traje de Ant-Man, con un casco que le permite comunicarse con las hormigas. A pesar de los obstáculos aparentemente insuperables que les acechan, Pym y Lang deben planear y llevar a cabo un atraco para intentar salvar al mundo.',
        genres: [
          'aventura',
          'accion',
          'scifi'
        ],
        rate: '8.5',
        length: '1hr 57mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/A6t1I87uxjlrGKQbrrhrAOO9X0f.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/yAqtv3d1nkJmvosWDAi9eMvILty.jpg',
        url: 'https://drive.google.com/file/d/1qak8-B5FoYdcQv2oDxAqUIWn70zkMyZo/preview'
        
      },
      {
        id: 67,
        key: 'ANT-MAN-Y-LA-AVISPA',
        name: 'ANT-MAN Y LA AVISPA',
        description: 'Mientras Scott Lang se convierte en un súper héroe y en un padre, Hope van Dyne y el Dr. Hank Pym presentan una nueva misión urgente que encuentra a Ant-Man luchando junto a The Wasp para descubrir secretos de su pasado.',
        genres: [
          'aventura',
          'accion',
          'scifi'
        ],
        rate: '8.5',
        length: '2hr 18mins',
        img: 'https://image.tmdb.org/t/p/w220_and_h330_face/bvYI6i9lQ3bsup9PgnMF3YYr8ZR.jpg',
        cover: 'https://image.tmdb.org/t/p/w500_and_h282_face/6P3c80EOm7BodndGBUAJHHsHKrp.jpg',
        url: ''
        
      },
    ];
    return { movies };
  }
}
