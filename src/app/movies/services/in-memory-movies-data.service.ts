import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMoviesDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        id: 1,
        key: "Sonic",
        name: "sonic",
        description:
          "Sonic, el descarado erizo azul basado en la famosa serie de videojuegos de Sega, vivirá aventuras y desventuras cuando conoce a su amigo humano y policía, Tom Wachowski (James Marsden). Sonic y Tom unirán sus fuerzas para tratar de detener los planes del malvado Dr. Robotnik (Jim Carrey), que intenta atrapar a Sonic con el fin de emplear sus inmensos poderes para dominar el mundo.",
        genres: ["accion", "aventura", "comedia"],
        rate: "8.6",
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/jYbANSoj6qGTbDkstq9J5Vy8fRF.jpg",
        cover:
          "https://image.tmdb.org/t/p/w533_and_h300_bestv2/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
        url:
          "https://drive.google.com/file/d/1DZ3LworS8tph3WjC5Df_HCwSVlDBtqeX/preview",
      },
      {
        id: 2,
        key: "QUIENES-SON-LOS-MILLERS",
        name: "QUIENES SON LOS MILLERS",
        description:
          "Un traficante de marihuana se crea una familia ficticia con una stripper y dos jóvenes como parte de su plan para pasar un gran cargamento de Estados Unidos a México.",
        genres: ["aventura", "comedia", "crimen"],
        rate: "7.0",
        length: "1hr 50mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/e6ITLpsQP9FMBF4jDyvHpWUYV64.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/e4l6Spo6gCyAx9AVuwbkxEtAfEE.jpg",
        url:
          "https://drive.google.com/file/d/1kLxKsTRYKWXYKM0qojuL-eYJv_cNCPxa/preview",
      },
      {
        id: 3,
        key: "LA-MOMIA",
        name: "LA MOMIA",
        description:
          "A pesar de estar enterrada en una tumba en lo más profundo del desierto, una antigua princesa (Sofia Boutella) cuyo destino le fue arrebatado injustamente, se despierta en la época actual, trayendo consigo una maldición que ha crecido hasta límites insospechados con el paso de miles de años.",
        genres: ["action", "adventure", "fantasia", "suspenso"],
        rate: "6.9",
        length: "1hr 50mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/ceOtPPIZBB0c4mCFx4p0kAq9n0L.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/ynDNRynKEg6LdDWVIbgXv1ix4jg.jpg",
        url:
          " https://drive.google.com/file/d/1IZLRgGwOXFNBRUkvLZ8bNV1Xr2CF3c4x/preview",
      },
      {
        id: 4,
        key: "EL-QUINTO-ELEMENTO",
        name: "EL QUINTO ELEMENTO",
        description:
          "Cada 5.000 años se abre una puerta entre las dimensiones. En una dimensión existe el Universo y la vida. En la otra dimensión existe un elemento que no está hecho ni de tierra, ni de fuego, ni de aire, ni de agua, sino que es una anti-energía, la anti-vida: es el quinto elemento.",
        genres: ["action", "adventure", "fantasia"],
        rate: "6.9",
        length: "2hr 28mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/r2IFRKmD0nLaJOaILGKHdF31bKy.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/xfulCqUm5cT7qvyEjUmrzzMB0LJ.jpg",
        url:
          "https://drive.google.com/file/d/17NBLv-n_m-jND_0EdsXHkmM1vA-sEaKd/preview",
      },
      {
        id: 5,
        key: "HOMBRES-DE-NEGROS-3",
        name: "HOMBRES DE NEGROS 3",
        description:
          'Comienza con la fuga de un extraño y poderoso extraterrestre llamado Boris el animal. Es el último superviviente de la raza alienígena boglodita, que sobrevive mediante el ataque, toma, y ocupación de otros planetas habitados. Boris es un asesino, que fue capturado por el agente K y encarcelado en una prisión secreta en la Luna. K también pudo desplegar un sistema de defensa (denominado "Arca Net"), y evitar una invasión boglodita, logrando así su extinción. Sin embargo, Boris logra burlar la seguridad y destruir gran parte de la cárcel, para escapar y vengarse de K.',
        genres: ["action", "comedia", "scifi"],
        rate: "6.9",
        length: "2hr 28mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/uYL8UlNpu05BLF99ATURIDpnjy3.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/ty0aXVf2aSbiEkrif88UWbKNVnH.jpg",
        url:
          "https://drive.google.com/file/d/16s1gJyUA01dNblzE8EzWJwanY1-SI9ZI/preview",
      },
      {
        id: 6,
        key: "RESIDENT-EVIL",
        name: "RESIDENT EVIL",
        description:
          "En un centro clandestino de investigación genética -con fines militares- de una poderosa multinacional se produce un brote vírico que contamina todo el edificio. Para contener la fuga el ordenador que controla el centro sella toda la instalación y, en un principio se cree que mueren todos los empleados, pero en realidad se han convertido en feroces zombis...",
        genres: ["action", "terror", "scifi"],
        rate: "6.9",
        length: "1hr 36mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/f8kYxuHNkFkhA7I4IKAk8sN9bdY.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/eLuE9zFExdASgZkUPSvTh6ocFtk.jpg",
        url:
          "https://drive.google.com/file/d/1fNGkemtlpN3qvZOvR0N5Eu5JY9BbIpj6/preview",
      },
      {
        id: 7,
        key: "JUMANJI-BIENVENIDO-A-LA-JUMGLA",
        name: "JUMANJI BIENVENIDO A LA JUNGLA",
        description:
          "Cuatro adolescentes son absorbidos por un videojuego, en el que se convierten en avatares de personajes arquetípicos. Allí vivirán múltiples aventuras, al tiempo que buscan cómo salir de allí para volver a su mundo.",
        genres: ["action", "aventura", "comedia", "fantasia"],
        rate: "7.9",
        length: "1hr 59mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/h2n0oHdJa6Y7ZvZx3WsSYPfrW1j.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/r3pJ884C2cJ6F64X5Yd5sARuNZ6.jpg",
        url:
          "https://drive.google.com/file/d/1vj06hvqtk0matqdOJ1Fxg5zQXHfj0OQ6/preview",
      },
      {
        id: 8,
        key: "JUMANJI-EL-SIGUIENTE-NIVEL",
        name: "JUMANJI EL SIGUIENTE NIVEL",
        description:
          " Los jugadores vuelven al juego, pero sus personajes se han intercambiado entre sí, lo que ofrece un curioso plantel: los mismos héroes con distinta apariencia. Pero, ¿dónde está el resto de la gente? Los participantes sólo tienen una opción: jugar una vez más a esta peligrosa partida para descubrir qué es realmente lo que está sucediendo.",
        genres: ["action", "aventura", "comedia", "fantasia"],
        rate: "8.0",
        length: "2hr 5mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/kfimTKoXd9CMTboi1ucYXwMuWO.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/noMvJUYVB9LUJClftPbQT78TUlQ.jpg",
        url:
          "https://drive.google.com/file/d/1mlr-ZU64FMhccc1jZyJlBAJ303iljzLY/preview",
      },
      {
        id: 9,
        key: "VENGADORES-LA-ERA-DE-ULTON",
        name: "VENGADORES LA ERA DE ULTRON",
        description:
          "Cuando Tony Stark intenta reactivar un programa caído en desuso cuyo objetivo es mantener la paz, las cosas empiezan a torcerse y los héroes más poderosos de la Tierra, incluyendo a Iron Man, Capitán América, Thor, El Increíble Hulk, Viuda Negra y Ojo de Halcón, tendrán que afrontar la prueba definitiva cuando el destino del planeta se ponga en juego. Cuando el villano Ultron emerge, le corresponderá a Los Vengadores detener sus terribles planes, que junto a incómodas alianzas llevarán a una inesperada acción que allanará el camino para una épica y única aventura.",
        genres: ["action", "aventura", "scifi"],
        rate: "8.0",
        length: "2hr 20mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/SWfuMs4doCHcrz0InTh785SpQU.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/4zmNJNQkugbalqJLnKp0wnlp8i3.jpg",
        url:
          "https://drive.google.com/file/d/1FUPf2o95L0gjRQxvocWTySdQJb7oOrOC/preview",
      },
      {
        id: 10,
        key: "VENGADORES-INFINITY-WAR",
        name: "VENGADORES INFINITY WAR",
        description:
          "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le confiere un poder incalculable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que deberán estar dispuestos a sacrificarlo todo por un bien mayor. Capitán América e Ironman deberán limar sus diferencias, Black Panther apoyará con sus tropas desde Wakanda, Thor y los Guardianes de la Galaxia e incluso Spider-Man se unirán antes de que los planes de devastación y ruina pongan fin al universo. ¿Serán capaces de frenar el avance del titán del caos?",
        genres: ["action", "aventura", "scifi"],
        rate: "8.0",
        length: "2hr 36mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/2ZChRdEnZVT6EWGIHE0blbjpyyA.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
        url:
          "https://drive.google.com/file/d/1zVyD3NaWalUUFq7Qq60q45YwOPFViS6c/preview",
      },
      {
        id: 11,
        key: "LOS-VENGADORES-ENDGAME",
        name: "LOS VENGADORES ENDGAME",
        description:
          "Después de los eventos devastadores de Vengadores Infinity War el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados que quedaron, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar cuáles sean las consecuencias... Cuarta y última entrega de la saga Vengadores.",
        genres: ["action", "aventura", "scifi"],
        rate: "8.0",
        length: "3hr 1mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/t7ZVQKZu0zcP8nJz462zd5vLWWN.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/wMFad1v8SwyVvrKXmsIkLhSxCEC.jpg",
        url:
          "https://drive.google.com/file/d/1f2EX62UBS3vb0FPsLqMyxz3XNGB4m1Gz/preview",
      },
      {
        id: 12,
        key: "TITANES-DEL-PACIFICO",
        name: "TITANES DEL PACIFICO",
        description:
          "Cuando legiones de monstruosas criaturas, denominadas Kaiju, comienzan a salir del mar, se inicia una guerra que acabará con millones de vidas y que consumirá los recursos de la humanidad durante interminables años. Para combatir a los Kaiju gigantes diseñan un tipo especial de arma: enormes robots, llamados Jaegers, que son controlados simultáneamente por dos pilotos cuyas mentes están bloqueadas en un puente neural. Pero incluso los Jaegers proporcionan poca defensa ante los incansables Kaiju. A punto de la derrota, las fuerzas que defienden a la humanidad no tienen otra elección que recurrir a dos insólitos héroes: un ex piloto acabado (Charlie Hunnam) y un aprendiz que todavía no se ha puesto a prueba (Rinko Kikuchi). Ambos se unen para traer a un legendario pero al parecer obsoleto Jaeger del pasado. Juntos, son la última esperanza de la humanidad frente al Apocalipsis que se avecina.",
        genres: ["action", "fantasia", "scifi"],
        rate: "8.0",
        length: "2hr 11mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/5dN112OTkbWTah8PJA9dzQsUE47.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/ig7qUy7drkEFZNCK7gi0hMn1WMN.jpg",
        url:
          "https://drive.google.com/file/d/1maWwaJhRHUQif0vYVS60Y0yjB_0Jo2We/preview",
      },
      {
        id: 13,
        key: "TITANES-DEL-PACIFICO-2",
        name: "TITANES DEL PACIFICO 2",
        description:
          "Un futuro cercano. Después de la primera invasión que sufrió la humanidad, la lucha aun no ha terminado. El planeta vuelve a ser asediado por los Kaiju, una raza de alienígenas colosales que emergen desde un portal interdimensional, con el objetivo de destruir a la raza humana. Ante esta nueva amenaza para la cual los humanos no están preparados, los Jaegers, robots gigantes de guerra pilotados por dos personas para sobrellevar la inmensa carga neural que conlleva manipularlos, ya no están a la altura de lo que se les viene encima. Será entonces cuando los supervivientes de la primera invasión, además de nuevos personajes como el hijo de Pentecost (John Boyega), tendrán que idear la manera de sorprender al enorme enemigo, apostando por nuevas estrategias defensivas y de ataque. Con la Tierra en ruinas e intentando reconstruirse, esta nueva batalla puede ser decisiva para el futuro.",
        genres: ["action", "fantasia", "aventura", "scifi"],
        rate: "8.0",
        length: "2hr 0mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/cAQRgMxyuy3qhjCitR0hHJhEPAI.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/2DrFGk3B6zWCNHVdUxQzyQkXpXe.jpg",
        url:
          "https://drive.google.com/file/d/109Gl0TyrIGtcdhdG2GjkOTWphkxlk8Kr/preview",
      },
      {
        id: 14,
        key: "UNA-CUESTION-DE-TIEMPO",
        name: "UNA CUESTION DE TIEMPO",
        description:
          "La trama de la película gira en torno a un joven llamado Tim Lake. El protagonista y su familia tienen el curioso don de poder viajar a través del tiempo. Al descubrir esta cualidad, Tim empieza a beneficiarse de ello para cambiar diferentes aspectos de su vida. Se enamora de una chica, Mary, a la que conoce tras transladarse a vivir a Londres por motivos de trabajo. Su historia de amor se verá beneficiada gracias al don de Tim, sin embargo, el protagonista no tardará en darse cuenta de que su habilidad no es capaz de ampararle en algunos problemas y cuestiones familiares.",
        genres: ["comedia", "fantasia", "drama", "romance"],
        rate: "8.0",
        length: "2hr 3mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/u8k9KMzZGYgg2f5i8pKj23VMNPZ.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/sjMZgKUHNlRtUrBLXd9K5KgsgxR.jpg",
        url:
          "https://drive.google.com/file/d/18ET89Hq8-D38HjXCHUxGJ3a3KzSM7fAV/preview",
      },
      {
        id: 15,
        key: "DEADPOOL",
        name: "DEADPOOL",
        description:
          "Basado en el anti-héroe menos convencional de la Marvel, Deadpool narra el origen de un ex-operativo de la fuerzas especiales llamado Wade Wilson, reconvertido a mercenario, y que tras ser sometido a un cruel experimento adquiere poderes de curación rápida, adoptando Wade entonces el alter ego de Deadpool. Armado con sus nuevas habilidades y un oscuro y retorcido sentido del humor, Deadpool intentará dar caza al hombre que casi destruye su vida.",
        genres: ["comedia", "accion", "aventura"],
        rate: "8.0",
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/pcZT1Ouq99dY6J2iGXjMxw16x6o.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/k2VX0gFu2BEJhvduQTq2ioYp8z7.jpg",
        url:
          "https://drive.google.com/file/d/1EfS-ENu3oMVP6B6qe-IAE-F1Ocrd7qD_/preview",
      },
      {
        id: 16,
        key: "READY-PLAYER-ONE",
        name: "READY PLAYER ONE",
        description:
          " Año 2044. Wade Watts es un adolescente al que le gusta evadirse del cada vez más sombrío mundo real a través de una popular utopía virtual a escala global llamada Oasis, hasta que su excéntrico y multimillonario creador muere. Antes de morir, ofrece su fortuna como premio a una elaborada búsqueda del tesoro a través de los rincones más inhóspitos de su creación. Será el punto de partida para que Wade se enfrente a jugadores, poderosos enemigos corporativos y otros competidores despiadados dispuestos a hacer lo que sea, tanto dentro de Oasis como del mundo real, para hacerse con el premio.",
        genres: ["aventura", "familia", "scifi"],
        rate: "8.4",
        length: "2hr 20mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/2iuVrtC5IpwLtSFSgkIIIKLs0Zq.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/5a7lMDn3nAj2ByO0X1fg6BhUphR.jpg",
        url:
          "https://drive.google.com/file/d/18L3pC4DJ3mEUeP8BXv0tnsrmKj-VXu4r/preview",
      },
      {
        id: 17,
        key: "RESIDENT-EVIL-EL-CAPITULO-FINAL",
        name: "RESIDENT EVIL EL CAPITULO FINAL",
        description:
          " La humanidad está agonizando tras la traición sufrida por Alice a manos de Wesker. Alice deberá regresar a donde la comenzó la pesadilla -Raccoon City-, ya que allí la Corporación Umbrella está reuniendo fuerzas antes de un último ataque a los últimos supervivientes del apocalipsis. En una carrera contra el tiempo, Alice tendrá que unir fuerzas con viejos amigos y con un inesperado aliado en una batalla contra hordas de zombis y nuevos monstruos mutantes. Será la aventura más difícil de Alice para salvar a la humanidad, que está al borde de la extinción.",
        genres: ["accion", "terror", "scifi"],
        rate: "8.4",
        length: "1hr 47mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/o9GblhAuku22VM3zugfpnHXQ5K7.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/iDouL01ezoqD6IYwgAcjrqUUhd5.jpg",
        url:
          "https://drive.google.com/file/d/1xdgxU9gpo2_A04_T-HRgM2Ac5gE_k-Hq/preview",
      },
      {
        id: 18,
        key: "RESIDENT-EVIL-4-ULTRATUMBA",
        name: "RESIDENT EVIL 4 ULTRATUMBA",
        description:
          "En un mundo asolado por un virus infeccioso que convierte a sus víctimas en muertos vivientes, Alice continúa buscando supervivientes para ponerlos a salvo. Su batalla a muerte con la Corporación Umbrella llega a alturas insospechadas, pero Alice, inesperadamente, recibe ayuda de una vieja amiga. Nuevas pistas, con la promesa de un paraíso a salvo de muertos vivientes, los conduce hasta Los Ángeles, pero cuando llegan, la ciudad está infectada con miles de muertos vivientes. Alice y sus compañeros están a punto de caer en una trampa mortal.",
        genres: ["accion", "terror", "scifi"],
        rate: "8.4",
        length: "1hr 37mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/vkGXvYomkL91pGNzyQAmrOcZFTM.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/6ewLQo8VYkwF7fTA7wDEji9xlV8.jpg",
        url:
          "https://drive.google.com/file/d/1VyZhaxiTc9H74OQxhblN5DgV4aB0GJk6/preview",
      },
      {
        id: 19,
        key: "RESIDENT-EVIL-3-EXTINCION",
        name: "RESIDENT EVIL 3 EXTINCION",
        description:
          "Tercera entrega de la saga basada en los famosos videojuegos. En esta ocasión, nuestra heroína, Milla Jovovich, junto con los supervivientes de la catástrofe acontecida en la ciudad de Raccoon deben atravesar el desierto de Nevada con la esperanza de llegar a Alaska, antes de que los de la Corporación Umbrella les alcancen.",
        genres: ["accion", "terror", "scifi"],
        rate: "8.4",
        length: "1hr 35mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/vs007Td09KtsN8v1vfXaWiVplyz.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/A5hvEPYTp8Hek0BY785mdhVQHMK.jpg",
        url:
          "https://drive.google.com/file/d/10CS8uOrzVFp0LczyTN-F7WL6rVI0Hz2u/preview",
      },
      {
        id: 20,
        key: "RESIDENT-EVIL-2-APOCALIPSIS",
        name: "RESIDENT EVIL 2 APOCALIPSIS",
        description:
          "Un virus mortal ha sido liberado sobre la población de Raccoon City. Alice (Milla Jovovich), una de las supervivientes del desastre bioquímico, se encuentra en el corazón de esta devastada ciudad. Sometida a experimentos que han alterado su genética, ahora posee fuerza, sentidos y destreza sobrehumana. Estas habilidades, y más, serán las que deba utilizar quien quiera sobrevivir en esta nueva aventura. Junto con otros supervivientes deberá escapar de la cada vez más peligrosa Raccoon City. Para alcanzar su meta necesitarán luchar contra las fuerzas de la Umbrella Corporation, las violentas criaturas de bioingeniería creadas en sus laboratorios, los zombies que plagan la ciudad y, finalmente, enfrentarse a la más colosal y mortal de estas creaciones: Nemesis.",
        genres: ["accion", "terror", "scifi"],
        rate: "8.4",
        length: "1hr 34mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/h8FFSlEq9DjUP6i9M6vIPFWw8ad.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/bt8PzoTx4QvmsredlMVKGR0jnQI.jpg",
        url:
          "https://drive.google.com/file/d/1pzqvA69TISBYjxk130h30QB3LhYncBub/preview",
      },
      {
        id: 21,
        key: "RESIDENT-EVIL-VENGANZA",
        name: "RESIDENT EVIL VENGANZA",
        description:
          "El virus de la corporación Umbrella sigue haciendo estragos en La Tierra convirtiendo a la población en legiones de muertos sedientos de sangre. La última esperanza de la humanidad, Alice, despierta en el centro de operaciones de la compañía donde comienza a conocer más detalles de su pasado. Alice seguirá persiguiendo a los responsables del virus llevándola por Tokio, Nueva York, Washington y Moscú donde le será revelado algo que la hará plantearse todo lo que la ha sucedido hasta ahora. Con la ayuda de sus nuevos aliados, Alice deberá sobrevivir el tiempo suficiente para escapar de un mundo hostil... La cuenta atrás ha comenzado.",
        genres: ["accion", "terror", "ciencia ficcion"],
        rate: "8.4",
        length: "1hr 36mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/9mX1cqSYtIk9Fdlx8bd5WuMmGXc.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/irX4I9e77dW409AK1Fubm5NviBc.jpg",
        url:
          "https://drive.google.com/file/d/1RCP6DK5hieUQYdYG9-v-zmxQLOK8lJ8T/preview",
      },
      {
        id: 22,
        key: "TERMINATOR-5-GENESIS",
        name: "TERMINATOR 5 GENESIS",
        description:
          "Año 2032. La guerra del futuro se está librando y un grupo de rebeldes humanos tiene el sistema de inteligencia artificial Skynet contra las cuerdas. John Connor es el líder de la resistencia, y Kyle Reese es su fiel soldado, criado en las ruinas de una postapocalíptica California. Para salvaguardar el futuro, Connor envía a Reese a 1984 para salvar a su madre, Sarah de un Terminator programado para matarla con el fin de que no llegue a dar a luz a John. Pero lo que Reese encuentra en el otro lado no es como él esperaba.",
        genres: ["accion", "suspenso", "scifi"],
        rate: "8.4",
        length: "2hr 6mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/a8rmtdNO6WSYUYhnumecti5b32H.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/wwdqGLwzfpe6SmqVE9HGd55IMDs.jpg",
        url:
          "https://drive.google.com/file/d/11vQMkflF3lEXUhZyxugsz5ayJfKkWZVU/preview",
      },
      {
        id: 23,
        key: "TERMINATOR-4-LA-SALVACION",
        name: "TERMINATOR 4 LA SALVACION",
        description:
          "Nueva entrega de la saga de Terminator, que transcurre en un post-apocalíptico 2018, tras el día del Juicio Final. John Connor es el hombre destinado a liderar la resistencia de los humanos contra Skynet y su ejército de Terminators. Pero el futuro en el que a Connor le enseñaron a creer se ve alterado en parte por la aparición de Marcus Wright, un extraño cuyo último recuerdo es haber estado en el corredor de la muerte, y que afirma haber estado con Kyle Reese, el padre de John. Connor debe decidir si Marcus ha sido enviado desde el futuro o rescatado del pasado, todo en una carrera contrareloj mientras la Resistencia prepara su ataque final contra el corazón del centro de operaciones de Skynet.",
        genres: ["accion", "suspenso", "scifi"],
        rate: "8.4",
        length: "1hr 55mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/864FCqlmdvQKyFPZwXicMIO8YkI.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/oEbtjCyBxuYhymYlcQOY2lwUzJ.jpg",
        url:
          "https://drive.google.com/file/d/1wo-5wQ4L5bamhG-rOs-D1fAJZI-wqAz7/preview",
      },
      {
        id: 24,
        key: "TERMINATOR-3-LA-REBELION-DE-LAS-MAQUINAS",
        name: "TERMINATOR 3 LA REBELION DE LAS MAQUINAS",
        description:
          "Ha pasado una década desde que John Connor -Nick Stahl- salvara a la humanidad de la destrucción. En la actualidad John tiene 25 años y vive en la clandestinidad: no hay ninguna prueba documental de su existencia. Así evita ser rastreado por Skynet -la sofisticada corporación de máquinas que una vez intentó acabar con su vida-. Pero, ahora, desde el futuro, ha sido enviado el T-X (Kristanna Loken), la máquina destructora cyborg más desarrollada de Skynet. Su misión es completar el trabajo que no pudo terminar su predecesor, el T-1000. El T-X es una máquina tan implacable como bello su aspecto humano. Ahora la única esperanza de sobrevivir para Connnor es Terminator.",
        genres: ["accion", "suspenso", "scifi"],
        rate: "8.4",
        length: "1hr 49mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/l311E80UHiCB1nGv3tZVFcnbcoJ.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/nZCQUC9W9XKBe7Tm3KuzwOQUt41.jpg",
        url:
          "https://drive.google.com/file/d/1MrbP7YvWDJn1ofni3ULpreLRX80BnbSC/preview",
      },
      {
        id: 25,
        key: "TERMINATOR-2-EL-JUICIO-FINAL",
        name: "TERMINATOR 2 EL JUICIO FINAL",
        description:
          "Ha pasado 11 años desde que Sarah Connor fue marcada como objetivo para ser eliminada por un cyborg del futuro. Ahora su hijo, John, el futuro líder de la resistencia, es el objetivo de un Terminator más moderno, más mortífero. Una vez más, la resistencia se las ha ingeniado para enviar un protector de vuelta al pasado para intentar salvar a John y a su madre, Sarah.",
        genres: ["Accion", "Suspenso", "scifi"],
        rate: "8.4",
        length: "1hr 49mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/wmEVZzh4CGW9y0IZHCFWQIZzqfB.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/naY04cHGEdMaIbIIZpFj6Eoxno8.jpg",
        url:
          "https://drive.google.com/file/d/1V9Ga9oRuVLfWuEoZC3SvqocT9Nb2sMOh/preview",
      },
      {
        id: 26,
        key: "TERMINATOR",
        name: "TERMINATOR ",
        description:
          "Un cyborg ha sido enviado desde el futuro en una misión mortal: Eliminar a Sarah Connor, una joven cuya vida tendrá una gran importancia en los próximos años. Sarah tiene sólo un protector - Kyle Reese - también enviado desde el futuro. El Terminator utiliza su inteligencia excepcional y fuerza para encontrar a Sarah, pero ¿hay alguna forma de detener al cyborg aparentemente indestructible.",
        genres: ["accion", "suspenso", "scifi"],
        rate: "8.4",
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/qJw4hTyDcWHXDHyEdpdwNyF8OcX.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/dH6m8iWJEPIFoyQaZiuo9Ih7kpA.jpg",
        url:
          "https://drive.google.com/file/d/1KM7VkAd033rwUxRl1WjZ74tYnECpCFfn/preview",
      },
      {
        id: 27,
        key: "EL UNICO",
        name: "EL UNICO ",
        description:
          "En un mundo futuro se ha descubierto que existen vidas alternas en universos alternos, un hecho que los agentes del Departamento Multiverse defienden, excepto el investigador Yulaw. Yulaw ha atravesado 123 universos persiguiendo y destruyendo sus vidas alternas. A medida que las mata, absorbe la fuerza de esas vidas alternas, ganando habilidades sobrehumanas. La magnitud de tal fenómeno puede desequilibrar el delicado equilibrio de todos los universos, sobre todo cuando a Yulaw ya sólo le queda eliminar a la última de sus vidas alternas. Ese personaje, Gabriel Yulaw, es agente de policía honesto y buen marido, y su vida se ve alterada cuando el otro Yulaw entra en su universo. Para salvarse a sí mismo, la única alternativa que le queda es la de matar a su yo malvado del otro universo.",
        genres: ["accion", "suspenso", "scifi"],
        rate: "8.4",
        length: "1hr 27mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/dmUl55UCP6qhU4vb8lqSzApSyxy.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/2JApfvtgf2snKUtOFn8d1wm5pDU.jpg",
        url:
          "https://drive.google.com/file/d/1xVGpFQy2nWOZdbbYZ7W1-m09LhuTiYxX/preview",
      },
      {
        id: 28,
        key: "TOMORROWLAND-EL-MUNDO-DEL-MAÑANA",
        name: "TOMORROWLAND EL MUNDO DEL MAÑANA ",
        description:
          "Unidos por el mismo destino, una adolescente inteligente y optimista, llena de curiosidad científica, y un antiguo niño prodigio inventor, hastiado por las desilusiones, se embarcan en una peligrosa misión para desenterrar los secretos de un enigmático lugar localizado en algún lugar del tiempo y el espacio, conocido en la memoria colectiva como “Tomorrowland”, y así salvar a la humanidad.",
        genres: ["aventura", "mysterio", "scifi"],
        rate: "8.4",
        length: "2hr 10mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/cz05f0OEkuK1bBsS6XXo5RjoH8c.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/tfPUB8H6c22ZFcJC9hM62w0nMjT.jpg",
        url:
          "https://drive.google.com/file/d/12w6QWeLyEbYJxED76Ux7o7RBJjWfvYGs/preview",
      },
      {
        id: 29,
        key: "SPACE JAM",
        name: "SPACE JAM",
        description:
          "Bugs Bunny y su equipo desafían a los Nerdlucks (un grupo de pequeños extraterrestres) a un partido de baloncesto para decidir si los Looney Tunes permanecen en la Tierra o se trasladan a una lejana galaxia para trabajar en un parque de atracciones de Montaña Tontolandia. Los Nerdlucks cuentan con una poderosa arma secreta que los hace superiores: se han apoderado de las mejores cualidades de las estrellas de la NBA (Charles Barkley y Patrick Ewing). Pero también los Looney poseen un arma secreta: ¡Michael Jordan.",
        genres: ["animacion", "familia", "comedia"],
        rate: "8.4",
        length: "1hr 27mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/2yyw20gloVgbzR9a5B15GqPdqux.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/54lisrR60aaS9w7VjIrzX2rxCct.jpg",
        url:
          "https://drive.google.com/file/d/1WWxQJdfKihR0UOD8LKXruo6ky8FRfInh/preview",
      },
      {
        id: 30,
        key: "TIEMPOS-VIOLENTOS",
        name: "TIEMPOS VIOLENTOS",
        description:
          "Jules y Vincent, dos asesinos a sueldo con muy pocas luces, trabajan para Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse manos a la obra. Su misión: recuperar un misterioso maletín.",
        genres: ["suspenso", "crimen"],
        rate: "8.4",
        length: "2hr 34mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/qoWK8srpkxeC1iV9JfhKskVmFIw.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/52StM7zDmcjeKxWkW55X5LtoLQi.jpg",
        url:
          "https://drive.google.com/file/d/16yV6fZnYjhN_pCi85L8mE8fkwoU5JgpF/preview",
      },
      {
        id: 31,
        key: "QUE-PASO-AYER-PARTE-III",
        name: "QUE PASO AYER PARTE III",
        description:
          "Tras la inesperada muerte de su padre, Alan (Zach Galifianakas) es llevado por sus amigos Phil (Bradley Cooper), Stu (Ed Helms) y Doug (Justin Bartha) a un centro especializado para que mejore. Esta vez no hay boda ni fiesta de despedida ¿Qué puede ir mal? Pues que cuando estos chicos salen a la carretera, y sobre todo cuando aparece Chow (Ken Jeong)... la suerte está echada. Tercera entrega de la franquicia iniciada en 2009 con Resacón en Las Vegas.",
        genres: ["comedia"],
        rate: "8.0",
        length: "1hr 40mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/mqgoB38AJzM6CsGTmLRQ8zoYv0K.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/9pLMes75NR9ggg6b7trNVxUEjhz.jpg",
        url:
          "https://drive.google.com/file/d/1kIXpGxlP3jcmUHRYnfVZs4RngboOLIAK/preview",
      },
      {
        id: 32,
        key: "QUE-PASO-AYER-PARTE-II",
        name: "QUE PASO AYER PARTE II",
        description:
          "Phil (Bradley Cooper), Stu (Ed Helms), Alan (Zach Galifianakis) y Doug (Justin Bartha) viajan a la exótica Tailandia para la boda de Stu. Con el recuerdo de la desastrosa despedida de soltero en Las Vegas aún vivo en su memoria - o al menos bien documentado -, Stu no deja nada al azar. Ha optado por un brunch preboda seguro y tranquilo con tortitas, café, y sin alcohol... Sin embargo, las cosas no siempre salen como se piensa. Dos noches antes del gran día, en un fabuloso resort de Tailandia, Stu cede. Una cerveza para cada uno. En botellas cerradas, ¿qué podría pasar?Lo que ocurre en Las Vegas se queda en Las Vegas, pero lo que ocurre en Bangkok resulta difícil de imaginar.",
        genres: ["comedia"],
        rate: "8.0",
        length: "1hr 42mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/jQfURiv7Ho6ozviSRv519jXSpHD.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/aGmsekNU5cMOkJMpbdRutkvmVMl.jpg",
        url:
          "https://drive.google.com/file/d/1FmFE2ZugyRpZiPovhtQjOW-ZsKMujQfv/preview",
      },
      {
        id: 33,
        key: "QUE-PASO-AYER",
        name: "QUE PASO AYER ",
        description:
          '"The Hangover" es la historia de una desmadrada despedida de soltero en la que el futuro novio y sus tres amigos, dos días antes de la boda, se montan la juerga padre en Las Vegas. Doug viaja a la ciudad del juego con sus mejores amigos Phil y Stu, así como su futuro cuñado Alan. La juerga es de campeonato y, como era de esperar, a la mañana siguiente tienen una resaca monumental. El problema es que, siendo incapaces de recordar nada de lo ocurrido durante la noche anterior, se encuentran con que el prometido ha desaparecido, topándose en su lugar con otras dos sorpresas en la suite del hotel: un tigre y un bebé.',
        genres: ["comedia"],
        rate: "8.0",
        length: "1hr 40mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/rqeim09TdaflSvPNVnCTBjUHlKu.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/2o0PKGmnSgCGkzoSePNAqse8Ure.jpg",
        url:
          "https://drive.google.com/file/d/17DiJFfSnG3DnwWGW8NtsI9K5Bz8JcEm0/preview",
      },
      {
        id: 34,
        key: "EL-EFECTO-MARIPOSA",
        name: "EL EFECTO MARIPOSA ",
        description:
          "Evan Treborn, un joven que se está esforzando por superar unos dolorosos recuerdos de su infancia, descubre una técnica que le permite viajar atrás en el tiempo y ocupar su cuerpo de niño para poder cambiar el curso de su dolorosa historia. Sin embargo también descubre que cualquier mínimo cambio en el pasado altera enormemente su futuro.",
        genres: ["scifi", "suspenso"],
        rate: "8.0",
        length: "1hr 53mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/vtqJkVTvrxbk2BehGO6e6izsUBa.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/yriYPLqyFqPW0QXaegT1KmWXk9a.jpg",
        url:
          "https://drive.google.com/file/d/1oaI6vc0MAc2fHj8Je0pM46BIXpXnIk4E/preview",
      },
      {
        id: 35,
        key: "PROYECTO-GEMINIS",
        name: "PROYECTO GEMINIS ",
        description:
          "Henry Bogan, un asesino a sueldo, pretende retirarse porque se siente viejo. Sin embargo, hay alguien que no está dispuesto a permitírselo porque tiene la misión de matarlo: un clon suyo más joven, más rápido y más fuerte.",
        genres: ["accion", "suspenso"],
        rate: "8.0",
        length: "1hr 57mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/fjCK5YIDRXrAnffd56zJOYfgF46.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/6nIfuQbDoxcKW4TfYUSdV7DjmNk.jpg",
        url:
          "https://drive.google.com/file/d/1Zw_8TpWlB6Pmr2xsqPhtxyzT5_4NpIKs/preview",
      },
      {
        id: 36,
        key: "ULTRAVIOLETA",
        name: "ULTRAVIOLETA",
        description:
          "A finales del siglo XXI, surge una subcultura de seres humanos con una mutación genética: están dotados de una asombrosa velocidad, una increíble resistencia y una profunda inteligencia. A medida que hay más personas contagiadas, el temor del gobierno aumenta y a los mutantes se les trata como a marginados, se les somete a pruebas espantosas y se les pone en cuarentena. El gobierno ha tomado la determinación de acabar con ellos, pero una mujer está decidida a impedirlo: la ultrabella y ultraletal Violet (Milla Jovovich). Gracias a sus impresionantes técnicas de artes marciales y a su capacidad camaleónica, Violet se convierte en una guerrera solitaria dedicada a proteger a su nueva raza y a vengarse de los que la crearon.",
        genres: ["accion", "suspenso", "scifi"],
        rate: "9.0",
        length: "1hr 28mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/bLwx3RGXgwxjRrwgPEY0noXJzlO.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/xfV7huEdsTUzEFiUmZHxTzlJhoB.jpg",
        url:
          "https://drive.google.com/file/d/1VN9yexUyAQjmLJstaNWoWEPinZK7erkI/preview",
      },
      {
        id: 37,
        key: "MISION-IMPOSIBLE-6-REPERCUSION",
        name: "MISION IMPOSIBLE 6 REPERCUSION",
        description:
          "En ocasiones, hasta las mejores intenciones pueden volverse en contra. Después de una misión fallida, Ethan Hunt y su equipo IMF, junto con algunos aliados conocidos, se enfrentarán a una nueva carrera contrarreloj.",
        genres: ["accion", "aventura", "scifi"],
        rate: "8.0",
        length: "2hr 27mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/l0NHRXsdtkSNL6OSn1MSEA2COT.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/a9fRqsl6P27qxbDSb4pBXNv9Fwl.jpg",
        url:
          "https://drive.google.com/file/d/1doi74QC6p5uV2h6qtFBPv-tZrdyluzm9/preview",
      },
      {
        id: 38,
        key: "MISION-IMPOSIBLE-5-NACION-SECRETA",
        name: "MISION IMPOSIBLE 5 NACION SECRETA",
        description:
          "Con la FMI disuelta y Ethan Hunt abandonado a su suerte, el equipo tiene que enfrentarse contra el Sindicato, una red de agentes especiales altamente preparados y entrenados. Estos grupos están empeñados en crear un nuevo orden mundial mediante una serie de ataques terroristas cada vez más graves. Ethan reúne a su equipo y une sus fuerzas con la agente británica renegada Ilsa Faust, quien puede que sea o no miembro de esta nación secreta, mientras el grupo se va enfrentando a su misión más imposible hasta la fecha…",
        genres: ["accion", "aventura", "scifi"],
        rate: "8.0",
        length: "2hr 11mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/ww0IX7Xla6tHgrwYSupfXcksV3n.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/eR20N1flPCQyp9HzpxlTcxgDAO7.jpg",
        url:
          "https://drive.google.com/file/d/184eyRJJJUbUL4IhXrE8fBWFjRtd5mwUt/preview",
      },
      {
        id: 39,
        key: "MISION-IMPOSIBLE-4-PROTOCOLO-FANTASMA",
        name: "MISION IMPOSIBLE 4 PROTOCOLO FANTASMA",
        description:
          "El agente Ethan Hunt, acusado de un atentado terrorista con bombas contra el Kremlin, es desautorizado junto con toda la organización, al poner en marcha el presidente el llamado Protocolo fantasma. Abandonado a su suerte y sin recursos, el objetivo de Ethan es rehabilitar el buen nombre de su agencia e impedir un nuevo ataque. Pero emprende esta misión con un equipo formado por fugitivos, cuyos motivos personales no conoce bien.",
        genres: ["accion", "aventura", "scifi"],
        rate: "7.0",
        length: "2hr 12mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/y0hjsPyieqxcunEcAxb9mrrE09c.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/f0fgxPQSbk2oFRiEHpCTUFIk4Sd.jpg",
        url:
          "https://drive.google.com/file/d/1TQZAmhARb-nasypJlw2VBgFuzUOPIXiK/preview",
      },
      {
        id: 40,
        key: "MISION-IMPOSIBLE-3",
        name: "MISION IMPOSIBLE 3",
        description:
          "Tras haber llevado a cabo diversas misiones, el agente especial Ethan Hunt (Tom Cruise) se ha retirado del servicio activo y se ha prometido con su amada Julia (Michelle Monaghan). Pero, cuando es secuestrado uno de los agentes entrenados por él, volverá de nuevo a la acción. También tendrá que enfrentarse a Owen Davian (Philip Seymour Hoffman), un individuo sin escrúpulos que trafica con armas y con información.",
        genres: ["accion", "aventura", "suspenso", "scifi"],
        rate: "8.0",
        length: "2hr 6mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/w61xBgFOfP8Z6uHKIKn1sl1TI8j.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/bYKeB9uUcPmvikjouEEQ86uvPw9.jpg",
        url:
          "https://drive.google.com/file/d/1OYAGKYzeLW_vnyQXtnJOBh3EYPWnNdvo/preview",
      },
      {
        id: 41,
        key: "MISION-IMPOSIBLE-2",
        name: "MISION IMPOSIBLE 2",
        description:
          "El agente especial Ethan Hunt tiene una nueva misión: evitar que un despiadado ex-agente y ahora terrorista internacional se haga con un virus mortal que podría soltar sobre Australia causando millones de víctimas. Para evitarlo, contará otra vez con la inestimable ayuda del genio informático Luther Stickell, del experto conductor Billy Baird y de la presencia de la sensual y exótica ladrona internacional Nhye, que en el pasado mantuvo una relación sentimental con el criminal y que ahora se siente atraída por Hunt.",
        genres: ["accion", "aventura", "suspenso", "scifi"],
        rate: "6.0",
        length: "2hr 3mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/mskE3W88cjMRrnKQye8pjmJu3O1.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/24DZfupDlhXeTchmcOkoGRhP5Vg.jpg",
        url:
          "https://drive.google.com/file/d/1iyEWU4Wc41T88F9H_uBwrOf4Bajwfn23/preview",
      },
      {
        id: 42,
        key: "MISION-IMPOSIBLE",
        name: "MISION IMPOSIBLE",
        description:
          "Ethan Hunt es un superespía capaz de resolver cualquier arriesgada situación con la máxima elegancia. Forma parte de un competente equipo dirigido por el agente Jim Phelps, que ha vuelto a reunir a sus hombres para participar en una dificilísima misión: evitar la venta de un disco robado que contiene información secreta de vital importancia.",
        genres: ["accion", "aventura", "suspenso", "scifi"],
        rate: "6.0",
        length: "1hr 50mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/xCpmxw3UUjv4PGzbIPOHeoKAV0l.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/pbaAkR1FDvgndTVFgGRIzf9o49r.jpg",
        url:
          "https://drive.google.com/file/d/1pm_5e4SJTgja90kF2VI9gKqfPxmvCQYb/preview",
      },
      {
        id: 43,
        key: "MAZINGER-Z",
        name: "MAZINGER Z",
        description:
          "La película llega en la conmemoración de los 45 años del manga, y está dirigida por Junji Shimizu (Yu-Gi-Oh!, One Piece,Toriko 3D: Kaimaku Gourment Adventure!) y bajo la producción de Toei Animation, productora encargada de otros famosos animes como Caballeros del Zodiaco, Sailor Moon y Candy Candy. El villano Doctor Infierno y su Imperio del Mal vuelven para hacerse con la humanidad y sembrar el caos, lo que hará que Koji Kabuto vuelva a ponerse a los mandos del robot Mazinger Z. Tras descubrir una extraña y diferente forma de vida en el Monte Fuji Kabuto tendrá que hacer frente a un nuevo y desconocido mal y escoger entre volver a ser el héroe o un dios.",
        genres: ["accion", "animacion", "scifi"],
        rate: "7.0",
        length: "1hr 30mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/rulLQ2eLxpCBKOSfTyFBcpGnmX.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/8we8EpFgalNg0wtRhhYFDTNF7pp.jpg",
        url:
          "https://drive.google.com/file/d/18NCkyXzhrukILeg073ClKoSC-hFjAAU1/preview",
      },
      {
        id: 44,
        key: "EL-CORREDOR-DEL-LABERINTO-LA-PRUEBA",
        name: "EL CORREDOR DEL LABERINTO LA PRUEBA",
        description:
          "En este nuevo capítulo de la trepidante saga El Corredor del Laberinto, Thomas Dylan O Brien y el resto de clarianos tendrán que enfrentarse a su mayor desafío hasta el momento: buscar pistas sobre la misteriosa y poderosa organización conocida como CRUEL. Este viaje les llevará a “La Quemadura un apocalíptico lugar repleto de inimaginables obstáculos. Formando equipo con miembros de la resistencia, los clarianos deberán desenmascarar a las fuerzas superiores de CRUEL y averiguar qué planes tienen para todos ellos",
        genres: ["accion", "suspenso", "scifi"],
        rate: "6.9",
        length: "2hr 12mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/wtbjAodeIf0Pj2blNeN1dM3suxU.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/pTZ8jRtDqd5a1xFhCI50yORX13D.jpg",
        url:
          "https://drive.google.com/file/d/1hHeqZRQpjX_jG3kRjT9nIC-QiH5QUaEn/preview",
      },
      {
        id: 45,
        key: "EL-CORREDOR-DEL-LABERINTO-LA-CURA-MORTAL",
        name: "EL CORREDOR DEL LABERINTO LA CURA MORTAL",
        description:
          "En este final de saga, Thomas lidera a su grupo en una última misión. Deberán entrar en la legendaria Last City, un laberinto controlado por WCKD que puede llegar a ser el laberinto más mortífero de todos. Cualquier persona que lo supere obtendrá las respuestas a las preguntas y los protagonistas quieren saber lo que realmente sucede.",
        genres: ["accion", "suspenso", "mysterio", "scifi"],
        rate: "7.1",
        length: "2hr 22mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/t0NJa8B0QiemnMNg6KkuDvS3Bh7.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/zgcL0xaHxXVvrV1Fu1ZSKoTk0MH.jpg",
        url:
          "https://drive.google.com/file/d/1D2QWMXszr0kFpEBkyF4qf5uK23X5WhoZ/preview",
      },
      {
        id: 46,
        key: "EL-CORREDOR-DEL-LABERINTO-CORRER-O-MORIR",
        name: "EL CORREDOR DEL LABERINTO CORRER O MORIR",
        description:
          "Thomas abre los ojos y se da cuenta que está en un ascensor. Lo extraño es que no recuerda nada, ni dónde está, ni quién es. Lo único que aún permanece intacto en su memoria es su nombre, y ya es mucho. Antes de que le dé tiempo a cuestionarse algo sobre sí mismo las puertas se abrirán y aparecerá ante él un extraño mundo. Todo lo que ve son chicos de su edad que tienen su mismo estado de amnesia. Una aventura fantástica que pronto destapará la dura realidad bajo ese velo de incertidumbre: todos ellos están atrapados en un laberinto. Si quieren tener alguna posibilidad de salir de allí y recuperar su antigua vida y aquello que no son capaces de recordar deberán unir fuerzas para escapar. Un mundo post-apocalíptico que les acorralará e irá un paso por delante será el desafío que tengan que pasar estos jóvenes por la libertad.",
        genres: ["accion", "suspenso", "mysterio", "scifi"],
        rate: "7.1",
        length: "1hr 53mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/l4gHlqLUpksNpixKcePNL9KUIjz.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/vHJlbhsXrZ5yrO2KqCbGSIU6fRX.jpg",
        url:
          "https://drive.google.com/file/d/1THs9PlZGFy17k283J5l4DHq4Qqnlc8Dc/preview",
      },
      {
        id: 47,
        key: "INDIANA-JONES-Y-LA-CALAVERA-DE-CRISTAL",
        name: "INDIANA JONES Y LA CALAVERA DE CRISTAL",
        description:
          "Guerra Fría (1957). Indiana Jones (Harrison Ford) y su amigo Mac (Ray Winstone) acaban de escapar de las garras de unos agentes soviéticos en un remoto aeropuerto. El decano de la Universidad (Jim Broadbent) le confiesa a su amigo el profesor Jones que las últimas misiones de Indy han fracasado y que está a punto de ser despedido. Mientras tanto, Indiana conoce a Mutt (Shia LaBeouf), un joven rebelde que le propone un trato: si le ayuda a resolver un problema personal, él, a cambio, le facilitaría uno de los descubrimientos más espectaculares de la historia: la Calavera de Cristal de Akator, que se encuentra en un lugar remoto del Perú. Pero los agentes soviéticos, dirigidos por la fría y bella Irina Spalko (Cate Blanchett), tienen el mismo objetivo.",
        genres: ["accion", "aventura", "mysterio", "scifi"],
        rate: "8.1",
        length: "2hr 3mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/eahWIgjttYQu4Ih8HwhF9sdexYk.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/p96949hcwUG2BwE6MgKmw0uYNCx.jpg",
        url:
          "https://drive.google.com/file/d/1Qx7qwePg7IVLuMMJpHzWxPb2FxvHWspl/preview",
      },
      {
        id: 48,
        key: "INDIANA-JONES-LA-ULTIMA-CRUZADA",
        name: "INDIANA JONES LA ULTIMA CRUZADA",
        description:
          "En esta tercera entrega, el padre del protagonista (Harrison Ford), Henry Jones, también arqueólogo (Sean Connery), es secuestrado cuando buscaba el Santo Grial. Indiana tendrá que ir a rescatarlo y, de paso, intentar hacerse con la preciada reliquia, que también ambicionan los nazis.",
        genres: ["accion", "aventura", "mysterio", "scifi"],
        rate: "8.1",
        length: "2hr 7mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/osKZUgKRUK1jwYMdsmlevK7zZIY.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/je2QsgBLEy4lzsvWprwfoZKmIX1.jpg",
        url:
          "https://drive.google.com/file/d/1MHTc7oEwVyo60UcRqsJkL8V0IeELdoRT/preview",
      },
      {
        id: 49,
        key: "INDIANA-JONES-Y-EL-TEMPLO-MALDITO",
        name: "INDIANA JONES Y EL TEMPLO MALDITO",
        description:
          "1935. Shanghai. El intrépido arqueólogo Indiana Jones, tras meterse en jaleos en un local nocturno, consigue escapar junto a una bella cantante y su joven acompañante. Tras un accidentado vuelo, los tres acaban en la India, donde intentarán ayudar a los habitantes de un pequeño poblado, cuyos niños han sido raptados.",
        genres: ["accion", "aventura", "mysterio", "scifi"],
        rate: "8.1",
        length: "1hr 58mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/6UrznkPL4Y2f66zkoFAiSwfAYtE.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/iO73omOyLwUPW22EpaZkJNC72ec.jpg",
        url:
          "https://drive.google.com/file/d/1upJkn0Uuk09Loq7jxHm3thbYxN59GZuJ/preview",
      },
      {
        id: 50,
        key: "INDIANA-JONES",
        name: "INDIANA JONES",
        description:
          "Cuando el profesor Henry Jones Sr. es invitado a dar conferencias en todo el mundo en mayo de 1908, lleva consigo a su esposa e hijo, e invita a su ex tutor, la señorita Helen Seymour, a enseñar a Henry Jr. durante el viaje. Su primera parada es El Cairo, Egipto. Cuando Junior, que prefiere llamarse Indy y Miss Seymour visitan las pirámides, T.E. los invita. Lawrence (otro antiguo alumno suyo) para unirse a una excavación arqueológica. Cuando la momia desaparece y se roba un tocado invaluable, el joven Indy prueba su primera aventura. En su próxima parada en Tánger, la familia se queda con el ex compañero de clase del profesor Jones, Walter Harris. Indy se hace amigo de un joven esclavo llamado Omar que pertenece a Emily Keen. Los dos se meten en problemas cuando Indy insiste en visitar el mercado para ver una cabeza salada exhibida en un poste. Atrapados por traficantes de esclavos, terminan en una subasta de la que solo Harris puede intentar rescatarlos.",
        genres: ["accion", "aventura", "mysterio", "scifi"],
        rate: "8.1",
        length: "1hr 30mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/oY0QAAwhbtTNkpYhKJcD3dqSuzG.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/zfRNjIG69w76AZsh3p2SGurSE5r.jpg",
        url:
          "https://drive.google.com/file/d/12NjLlzAB7kOQb6r1WBO7f3oqahQ-3-IE/preview",
      },
      {
        id: 51,
        key: "JOKER",
        name: "JOKER",
        description:
          "Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro.",
        genres: ["crime", "drama", "suspenso", "scifi"],
        rate: "8.1",
        length: "2hr 2mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
        url:
          "https://drive.google.com/file/d/1xnGvbAVT3eE0M2VQyA-EVAklt6NJ2EYM/preview",
      },
      {
        id: 52,
        key: "EL-HOMBRE-INVISIBLE",
        name: "EL HOMBRE INVISIBLE",
        description:
          "Cecilia (Elisabeth Moss) rehace su vida tras recibir la noticia de que su exnovio, un maltratador empedernido, ha fallecido. Sin embargo, su cordura comienza a tambalearse cuando empieza tener la certeza de que en realidad sigue vivo.",
        genres: ["terror", "drama", "suspenso", "scifi"],
        rate: "8.1",
        length: "1hr 50mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/xk4RpcvVQ7JmnrkQtZ479EwWieT.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/hiGjyrNhojSgugIqd0xhd70rCRD.jpg",
        url:
          "https://drive.google.com/file/d/16eJqy5qtwrjikkBh1C8_okdH5NR-xJNh/preview",
      },
      {
        id: 53,
        key: "LA-GUERRA-DE-LOS-MUNDOS",
        name: "LA GUERRA DE LOS MUNDOS",
        description:
          "Basada en una popular novela de HG Wells, narra la historia de una invasión del planeta tierra por los marcianos, y la extraordinaria batalla de la humanidad por la supervivencia a través de los ojos de una familia americana. Ray Ferrier es un descargador de muelle, divorciado y padre nada modélico. Poco después de que su ex mujer y su nuevo marido se vayan después de dejar a Robbie, su hijo adolescente, y a su pequeña hija Rachel para una de sus contadas visitas, estalla una tremenda e inesperada tormenta eléctrica. Unos momentos después, en un cruce cerca de la casa, Ray es testigo de un acontecimiento que cambiará su vida y la de los suyos para siempre. Una enorme máquina de tres patas emerge del suelo y antes de que alguien pueda hacer algo, arrasa todo lo que está a su alcance. Un día como otro cualquiera acaba de convertirse en la fecha más extraordinaria de su vida: el primer ataque alienígena contra la Tierra.",
        genres: ["aventura", "suspenso", "scifi"],
        rate: "8.1",
        length: "1hr 56mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/ahcOViJGgwGojoncRVDMq5R7WDN.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/nH6hPhJq3EEv9CnBZgXU3IQnpJo.jpg",
        url:
          "https://drive.google.com/file/d/1UeYewLBlNqyzZ5jPiEEcHgtf5kU-QhCh/preview",
      },
      {
        id: 54,
        key: "LA-VECINA-DE-ALADO",
        name: "LA VECINA DE ALADO",
        description:
          "Matthew, un ambicioso joven de un instituto con aspiraciones a ser político en el futuro, se enamora de la chica de sus sueños: la bella y joven vecina de la puerta de al lado. Ambos comienzan un idílico romance, pero un sorprendente descubrimiento pondrá a prueba su relación: ella es un famosa actriz porno.",
        genres: ["comedia", "romance"],
        rate: "8.1",
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/lpFkU7VmWvtBOf6FnWV3bCLoXVW.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/lDHdDgObpNXWHP2PHnA3BjDHm3g.jpg",
        url:
          "https://drive.google.com/file/d/1gbEzjodQxXFvvkyvw8ATpy5899mkjQ9d/preview",
      },
      {
        id: 55,
        key: "GIGANTES-DE-ACERO",
        name: "GIGANTES DE ACERO",
        description:
          "En un futuro no muy lejano, el boxeo es robótico: en los combates ya no se enfrentan seres humanos, sino robots humanoides, sofisticadas máquinas diseñadas para luchar. Charlie Kenton, un antiguo púgil que casi llegó a alcanzar la gloria, está pasando una mala racha como promotor de combates. Un día, encuentra un viejo robot desechado y, al comprobar que es un gran boxeador, decide entrenarlo.",
        genres: ["accion", "drama", "scifi"],
        rate: "8.1",
        length: "2hr 6mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/ubHhEiVQfE0UMa2NQRrzCiXhhZg.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/qTtfFf5TuEp2PhpUtqpPHHR7lYU.jpg",
        url:
          "https://drive.google.com/file/d/1gjOx-Dskj0hmghoe_awiDxDtfIupm7Sf/preview",
      },
      {
        id: 56,
        key: "BATTLESHIP",
        name: "BATTLESHIP",
        description:
          "“Battleship” es la libre adaptación al cine del popular juego de mesa de Hasbro conocido como “Hundir la flota” o ”Batalla naval”. La curiosa variante que plantea esta versión es que la batalla será entre la U.S. Navy y… ¡una flota alienígena! La historia nos propone una épica aventura de acción que transcurre en el mar, el cielo y la tierra, y en la que nuestro planeta lucha por sobrevivir contra una fuerza muy superior. La película está protagonizada por Taylor Kitsch en el papel del teniente Hopper, un oficial de la Marina destinado al John Paul Jones; Brooklyn Decker es Sam Shane, una fisioterapeuta de la Marina y novia de Hopper; Alexander Skarsgård es Stone, el hermano mayor de Hopper y comandante del Samson; Rihanna es la suboficial Raikes, especialista en armas del John Paul Jones; y Liam Neeson es el almirante Shane, el oficial superior de Hopper y Stone (y padre de Sam).",
        genres: ["accion", "suspenso", "aventura", "scifi"],
        rate: "8.1",
        length: "2hr 11mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/iPcKGENr2JciyNqmiMNJGerVWO.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/13FUpGdCRFBcMBAk3PJ5iIY5mFw.jpg",
        url:
          "https://drive.google.com/file/d/1C7uHUBCmVwmXklke_SAa2StKe5MEwZGx/preview",
      },
      {
        id: 57,
        key: "LA BELLA Y LA BESTIA",
        name: "LA BELLA Y LA BESTIA",
        description:
          "Bella, una joven hermosa y brillante, asume el lugar de su padre como prisionero en el castillo de una bestia. Poco a poco, la valiente Bella irá dándose cuenta de que el príncipe bestia no es el malvado ser que todos creen que es y tiene, en realidad, un gran corazón.",
        genres: ["familia", "fantasia", "romance"],
        rate: "8.1",
        length: "2hr 9mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/8vMrk2AWbJbSsRnIdogKIB8cHTK.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/sibwRLuvvsblv8tBjY5b459VrmS.jpg",
        url:
          "https://drive.google.com/file/d/1qlVCIwymXl1G3jRJpJ28tNQxxqa-HklW/preview",
      },
      {
        id: 58,
        key: "CHAPPIE",
        name: "CHAPPIE",
        description:
          "Ambientada en Johanesburgo, y con un personaje robótico ridículo como protagonista, este delirante relato nos traslada a un viaje por las emociones y sentimientos en un mundo distinto a la par que sorprendente. Con un argumento elaborado y un trasfondo reflexivo, esta cómica historia encaja en un marco inusual visualmente cuidado e impactante. Una comedia que cala por la simplicidad de su trama principal, y engancha por los minuciosos detalles que te adentran en una realidad ficticia y muy visual. Enigmática y divertida a partes iguales, se trata de una historia de corazón en un entorno robotizado y futurista donde la ciencia ficción es el paisaje.",
        genres: ["crimen", "accion", "scifi"],
        rate: "8.1",
        length: "2hr 00mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/h767mOshwwM4VzmcuEu7rTZmgRa.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/6qjK7kJBodduKkuSP9AU8OiEzNS.jpg",
        url:
          "https://drive.google.com/file/d/1QIb54pBcsIP0oq2HwNBac4a7vU8yODdE/preview",
      },
      {
        id: 59,
        key: "365-DIAS",
        name: "365 DIAS",
        description:
          "Massimo es miembro de la mafia siciliana y Laura es una directora de ventas. Ella no espera que un viaje a Sicilia salve su relación, pero Massimo la secuestrará durante 365 días para que se enamore de él.",
        genres: ["drama", "romance"],
        rate: "9.1",
        length: "1hr 56mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/jz8T3hrU6GuMqSuQ4Rbd4MJUeaq.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/e8b2F4eg6ansZhaQQN8iXfzZtz7.jpg",
        url:
          "https://drive.google.com/file/d/1lr-wNRyM-C_gIffjLj3DIHcsGfmI9opH/preview",
      },
      {
        id: 60,
        key: "CAMINO-HACIA-EL-DORADO",
        name: "CAMINO HACIA EL DORADO",
        description:
          "Siglo XVI. Dos jóvenes estafadores ganan en un juego de dados un mapa a El Dorado pero son descubiertos y perseguidos por los guardias. Logran escapar pero terminan por meterse en el barco del mismisimo Hernán Cortés. Escapan en un bote del barco y llegan a tierra arrastrados por el mar. Allí deciden emprender la búsqueda de la ciudad de oro al reconocer indicios que aparecían en el mapa, pero su aventura no terminará como ellos lo esperan.",
        genres: ["animacion", "aventura", "comedia"],
        rate: "8.1",
        length: "1hr 29mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/g9v66AdqXSmphnKPEcHqlKqxhA8.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/ciID0Mu1pPuOUP3JbOsDXQ5aMV6.jpg",
        url:
          "https://drive.google.com/file/d/1OT_hh2-DZSv_ALS9riEzP5h9zix4ksgL/preview",
      },
      {
        id: 61,
        key: "LAS-NOVIAS-DE-MIS-AMIGOS",
        name: "LAS NOVIAS DE MIS AMIGOS",
        description:
          "Tres amigos están en ese momento vital en el que no saben qué hacer con su vida sentimental. Jason y Daniel viven yendo de relación en relación con chicas con las que no quieren comprometerse, mientras que Mickey está casado y tiene problemas con su mujer. Todo cambiará para ellos una noche en que deciden salir de fiesta para animar a su amigo y Jason cae perdidamente enamorado de una chica a la que acaba de conocer.",
        genres: ["romance", "comedia"],
        rate: "9.0",
        length: "1hr 40mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/fuC76J6XMKlhXBgjcP3GtU15Us0.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/l44Dz6cuQaixAlfmQDNwDQJRC5m.jpg",
        url:
          "https://drive.google.com/file/d/18hv65b5_w_BBDsscXSf0OzoQsRMeotQz/preview",
      },
      {
        id: 62,
        key: "ALADDIN",
        name: "ALADDIN",
        description:
          "Aladdin es un adorable pero desafortunado ladronzuelo enamorado de la hija del Sultán, la princesa Jasmine. Para intentar conquistarla, acepta el desafío de Jafar, que consiste en entrar a una cueva en mitad del desierto para dar con una lámpara mágica que le concederá todos sus deseos. Allí es donde Aladdín conocerá al Genio, dando inicio a una aventura como nunca antes había imaginado.",
        genres: ["aventura", "fantasia", "romance", "familia"],
        rate: "7.5",
        length: "2hr 8mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/rSfOAjBSqdvGndNHv0H961YkZIr.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/oX056O8bAInZ75jGY9MacQ2VlsM.jpg",
        url:
          "https://drive.google.com/file/d/1lnCeOw4vVoSYU8wBUugx1D_gwUBz-wPx/preview",
      },
      {
        id: 63,
        key: "DEADPOOL-2",
        name: "DEADPOOL 2",
        description:
          "Wade Wilson (Ryan Reynolds), mejor conocido como Deadpool, su nombre de batalla e identidad antiheroica, está de regreso con Deadpool 2 y en esta ocasión su misión será salvar a un chico llamado Russell (Julian Dennison) de las manos de un poderoso rival llamado Cable (Josh Brolin). En aras de dar cumplimiento a su tarea el antihéroe formará un grupo al cual pondrá el nombre de X-Force. Secuela de la exitosa película (recaudó más de 780 millones de dólares en todo el mundo) parodia de los superhéroes mutantes del 2016, también protagonizada por Reynolds.",
        genres: ["aventura", "comedia", "accion"],
        rate: "8.5",
        length: "2hr 00mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/fgPTa4IS07Pygz0Q1WJnRgOP7r7.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/1CzUuIdalmARzfYyEX3vGmBy6dn.jpg",
        url:
          "https://drive.google.com/file/d/1zUkxRiOghs3bTgZ1mNm7ygHD0KrNg54z/preview",
      },
      {
        id: 64,
        key: "LINTERNA-VERDE",
        name: "LINTERNA VERDE",
        description:
          "En un universo tan vasto como misterioso, una pequeña pero misteriosa fuerza ha existido por siglos. Protectores de la paz y la justicia se hace llamar el cuerpo de linternas verdes. Una hermandad de guerreros que juraron mantener el orden intergaláctico donde cada linterna verde lleva un anillo que le da superpoderes. Pero cuando un nuevo enemigo llamado Parallax amenaza con destruir el balance y el poder del universo, su destino y el de la tierra cae en manos del nuevo recluta; el primer humano que ha sido elegido: Hal Jordan.",
        genres: ["aventura", "suspenso", "scifi", "accion"],
        rate: "8.5",
        length: "1hr 54mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/f1xnVz2zFp49Kz8I7T231V5qN3m.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/58r049aVTO1KjAYVuWJr0KgG5nY.jpg",
        url:
          "https://drive.google.com/file/d/1ZMuJGUJb2U5PvQiBUbk3ytoaG24_wFkd/preview",
      },
      {
        id: 65,
        key: "ARTEMIS-FOWL",
        name: "ARTEMIS FOWL",
        description:
          "La historia de Artemis Fowl es la de un niño de 12 años de edad que está a punto de arrebatar el poder al mundo subterráneo. Lo que él todavía no sabe es que sus habitantes: hadas, duendes, elfos... no son las criaturas maravillosas que siempre hemos imaginado y no van a consentir que un humano conozca sus secretos más sagrados. Como él, van armados hasta las barbas y conocen las últimas tecnologías: se prepara un trepidante duelo que puede provocar una auténtica guerra entre las especies del planeta.",
        genres: ["aventura", "fantasia", "scifi", "familia"],
        rate: "8.5",
        length: "1hr 35mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/juE7o699roXnxCi8shR10Cf2dCH.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
        url:
          "https://drive.google.com/file/d/1QzlTziLYnm-kVlkbwrpkenKSiwGzY5l_/preview",
      },
      {
        id: 66,
        key: "ANT-MAN",
        name: "ANT-MAN",
        description:
          "Armado con la asombrosa capacidad de reducir su tamaño a la dimensiones de un insecto, el estafador Scott Lang debe sacar a relucir al héroe que lleva dentro y ayudar a su mentor, el doctor Hank Pym, a proteger de una nueva generación de amenazas el secreto que se esconde tras el traje de Ant-Man, con un casco que le permite comunicarse con las hormigas. A pesar de los obstáculos aparentemente insuperables que les acechan, Pym y Lang deben planear y llevar a cabo un atraco para intentar salvar al mundo.",
        genres: ["aventura", "accion", "scifi"],
        rate: "8.5",
        length: "1hr 57mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/A6t1I87uxjlrGKQbrrhrAOO9X0f.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/yAqtv3d1nkJmvosWDAi9eMvILty.jpg",
        url:
          "https://drive.google.com/file/d/1qak8-B5FoYdcQv2oDxAqUIWn70zkMyZo/preview",
      },
      {
        id: 67,
        key: "ANT-MAN-Y-LA-AVISPA",
        name: "ANT-MAN Y LA AVISPA",
        description:
          "Mientras Scott Lang se convierte en un súper héroe y en un padre, Hope van Dyne y el Dr. Hank Pym presentan una nueva misión urgente que encuentra a Ant-Man luchando junto a The Wasp para descubrir secretos de su pasado.",
        genres: ["aventura", "accion", "scifi"],
        rate: "8.5",
        length: "2hr 18mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/bvYI6i9lQ3bsup9PgnMF3YYr8ZR.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/6P3c80EOm7BodndGBUAJHHsHKrp.jpg",
        url:
          "https://drive.google.com/file/d/1d_UiTatuLtz9AFBoGsio80k5ejzGZoMo/preview",
      },
      {
        id: 68,
        key: "SCOTT-PILGRIM-CONTRA-EL-MUNDO",
        name: "SCOTT PILGRIM CONTRA EL MUNDO",
        description:
          "Les presentamos al encantador y desempleado Scott Pilgrim (Michael Cera), bajista de un grupo “garage” de lo más corriente, los Sex Bob-omb. Este joven de 22 años acaba de conocer a la chica de sus sueños… la de verdad. ¿Cuál es el problema a la hora de conquistar a Ramona Flowers (Mary Elizabeth Winstead)? Los siete ex de la chica están decididos a matar a Scott.Scott Pilgrim nunca ha tenido problemas para echarse novia. Las dificultades aparecen cuando quiere cortar. Mientras intenta deshacerse de la última conquista, Ramona irrumpe en su vida, pero no tarda en descubrir que la mujer deseada arrastra un bagaje nada tranquilizador: sus ex controlan su vida amorosa y están dispuestos a hacer lo que sea para eliminar la competencia.",
        genres: ["comedia", "accion", "fantasia", "romance"],
        rate: "8.5",
        length: "1hr 52mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/bOz2Wxv89mtCsr5gaxJDdwZifK4.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/A0xxZhihmbOvzSBFauvaxnm9zAZ.jpg",
        url:
          "https://drive.google.com/file/d/1rOos7PedFXixpmZgcX9zybm5SJ4zSf4j/preview",
      },
      {
        id: 69,
        key: "AQUAMAN",
        name: "AQUAMAN",
        description:
          "Arthur Curry, también conocido como Aquaman (Jason Momoa), es un habitante de un poderoso reino subacuático que recibe el nombre de la Atlántida. En esta película repleta de acción, aventura, e incluso partes de terror, conoceremos sus orígenes, desde que era un niño criado por un hombre humano y considerado un paria por los suyos, hasta que crece y debe hacer frente a los problemas que han aparecido en su mundo. Entonces, este hombre mitad humano y mitad atlante, emprenderá el viaje de su vida, en el que tendrá que descubrir quién es realmente y si es digno de ser un rey. Acompañado de Mera (Amber Heard), hará frente a este y otros retos, mientras le planta cara a Black Manta (Yahya Abdul-Mateen II) y a su propio hermanastro Orm (Patrick Wilson). ¿Será capaz de dirigir a su pueblo y convertirse en un héroe para el mundo?",
        genres: ["aventura", "accion", "fantasia"],
        rate: "8.5",
        length: "2hr 22mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/yTzr6Nc4RcTXVw9SsWQNJdcjTz5.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/8UqyECPx67XgNETLbQYbnOjRaut.jpg",
        url:
          "https://drive.google.com/file/d/1Xdus_MyRjpdU3rMldhZllANdB25QvI7d/preview",
      },
      {
        id: 70,
        key: "PANTERA-NEGRA",
        name: "PANTERA NEGRA",
        description:
          '"Black Panther" cuenta la historia de TChalla quien, después de los acontecimientos de "Capitán América: Civil War", vuelve a casa, a la nación de Wakanda, aislada y muy avanzada tecnológicamente, para ser proclamado Rey. Pero la reaparición de un viejo enemigo pone a prueba el temple de TChalla como Rey y Black Panther ya que se ve arrastrado a un conflicto que pone en peligro todo el destino de Wakanda y del mundo.',
        genres: ["aventura", "accion", "fantasia", "scifi"],
        rate: "7.4",
        length: "2hr 14mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gNekOam2UG6bB6tklMAtGmvZC1Z.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/bQwzJX3CPaZYaLobhhQeKN8LGb3.jpg",
        url:
          "https://drive.google.com/file/d/1rX9PJkwkUkiCalgZmxIrNY78IeIT-ccD/preview",
      },
      {
        id: 71,
        key: "BLADE",
        name: "BLADE",
        description:
          'En un mundo cohabitado en guerra por hombres y vampiros Blade es un vampiro que, al contrario que el resto, no se alimenta de humanos, y que pretende acabar con la raza de "seres superiores" que mordieron a su madre cuando estaba embarazada.',
        genres: ["accion", "terror", "scifi"],
        rate: "6.7",
        length: "2hr 00mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/dCsTsFX4PT9wewpKYaddwPHYI3A.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/mIkqnFP5OPAqyHXxc23NbE6IIb2.jpg",
        url:
          "https://drive.google.com/file/d/1qS4N1f7tB3-Y9M0dM858_71Vowb6iBNy/preview",
      },
      {
        id: 71,
        key: "BLADE-2",
        name: "BLADE 2",
        description:
          "Una nueva raza de vampiros, los Reapers, surge para atacar tanto a los humanos como a los de su propia raza, causando el terror. El Consejo de la Sombra, un grupo de vampiros que teme por su supervivencia y que tiene su sede en Praga, contacta con Blade para que acabe con ellos.",
        genres: ["accion", "terror", "scifi"],
        rate: "6.7",
        length: "1hr 57mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/hxCGLp3yGUBat6w9YdxxVtqiApH.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/xlEJbzhq975o8EEDW3Cg2obgZIA.jpg",
        url:
          "https://drive.google.com/file/d/1Ehf2UyoEG4em_Yr93_WrUEC05i77MV-Q/preview",
      },
      {
        id: 72,
        key: "BLADE-TRINITY",
        name: "BLADE TRINITY",
        description:
          "Durante años, Blade ha luchado contra los vampiros sin que el mundo supiera lo que sucedía en los bajos fondos. Pero ahora, tras caer en las redes del FBI, se ve forzado a salir a la luz del día para unir sus fuerzas con un clan de humanos cazadores de vampiros que nunca supo que existían, los Nightstalkers. Junto a Abigail y Hannibal, Blade sigue la pista de una Antigua criatura que lo está acechando el vampiro original: Drácula.",
        genres: ["accion", "terror", "scifi"],
        rate: "6.7",
        length: "2hr 3mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/zIkhgzbxoMiv3RF1Jmr3juglAQG.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/55885wQeb8XISRccwnfVJ7DDJFM.jpg",
        url:
          "https://drive.google.com/file/d/13Pov3nOXzMFaSGDCtiWMbZU0eeHNAykF/preview",
      },
      {
        id: 73,
        key: "CAPITAN-AMERICA-EL-PRIMER-VENGADOR",
        name: "CAPITAN AMERICA EL PRIMER VENGADOR",
        description:
          "Nacido durante la Gran Depresión, Steve Rogers creció como un chico enclenque en una familia pobre. Horrorizado por las noticias que llegaban de Europa sobre los nazis, decidió enrolarse en el ejército; sin embargo, debido a su precaria salud, fue rechazado una y otra vez. Enternecido por sus súplicas, el general Chester Phillips le ofrece la oportunidad de tomar parte en un experimento especial: la Operación Renacimiento. Tras meses de preparación y entrenamiento recibe su primera misión como Capitán América. Armado con un escudo indestructible y su inteligencia para la batalla, el Capitán América emprende la guerra contra el mal, como centinela de la libertad y como líder de los Vengadores.",
        genres: ["accion", "aventura", "scifi"],
        rate: "7.9",
        length: "2hr 4mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/vAOy3JW7JSiZBUwy72g8a8V6b1m.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/17hvMyOv06uun4ofZSN2BhZSxme.jpg",
        url:
          "https://drive.google.com/file/d/1_MmINehscxyewv36_pvR7X-6ZWN7JnuC/preview",
      },
      {
        id: 73,
        key: "CAPITAN-AMERICA-Y-EL-SOLDADO-DEL-INVIERNO",
        name: "CAPITAN AMERICA Y EL SOLDADO DEL INVIERNO",
        description:
          "Capitán América, Viuda Negra y un nuevo aliado, Falcon, se enfrentan a un enemigo inesperado mientras intentan sacar a la luz una conspiración que pone en riesgo al mundo.",
        genres: ["accion", "aventura", "scifi"],
        rate: "7.9",
        length: "2hr 4mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/6QBRnyvJHD7slOlX6aukvMwcEu.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/55zqM1Dt1kVFOQf0ddgjhS3SCf7.jpg",
        url:
          "https://drive.google.com/file/d/18njGWgZyBcRc4JrQjNVYwJeTmXTr9vq4/preview",
      },
      {
        id: 74,
        key: "CAPITAN-AMERICA-CIVIL-WAR",
        name: "CAPITAN AMERICA CIVIL WAR",
        description:
          '"Captain America: Civil War” continúa la historia de “Avengers: Age of Ultron”, con Steve Rogers liderando un nuevo equipo de Vengadores en su esfuerzo por proteger a la humanidad. Tras otro incidente internacional relacionado con los Vengadores que ocasiona daños colaterales, la presión política fuerza a crear un sistema de registro y un cuerpo gubernamental para determinar cuándo se requiere los servicios del equipo. El nuevo status quo divide a los Vengadores mientras intentan salvar al mundo de un nuevo y perverso villano.',
        genres: ["accion", "aventura", "scifi"],
        rate: "7.8",
        length: "2hr 27mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/g6UTwUVFYWI8VPWo5GylnbZVhin.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/A1sO8cnVJbxPi4orypg6QOfmCnk.jpg",
        url:
          "https://drive.google.com/file/d/1t5XaSzt8eszip7bHorgELpXF4YfW9_vN/preview",
      },
      {
        id: 75,
        key: "CAPITANA-MARVEL",
        name: "CAPITANA MARVEL",
        description:
          "La historia sigue a Carol Danvers mientras se convierte en uno de los héroes más poderosos del universo, cuando la Tierra se encuentra atrapada en medio de una guerra galáctica entre dos razas alienígenas. Situada en los años 90, Capitana Marvel es una historia nueva de un período de tiempo nunca antes visto en la historia del Universo Cinematográfico de Marvel.",
        genres: ["accion", "aventura", "scifi"],
        rate: "7.8",
        length: "2hr 5mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gQIQqdrhFdKBFEaZuZ117wkpqOJ.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/ozTR6OROWHCqZ6ZWlTogDFpHcEp.jpg",
        url:
          "https://drive.google.com/file/d/1rjDSOJct2KvGtg1f8UY9Fx1hzvAT92hn/preview",
      },
      {
        id: 76,
        key: "DAREDEVIL",
        name: "DAREDEVIL",
        description:
          "Un abogado ciego se convierte en un superhéroe nocturno que pone en manos de la justicia a los criminales de Nueva York",
        genres: ["accion", "aventura", "scifi"],
        rate: "7.8",
        length: "2hr 5mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/9Vu49OxWp6LYKsvaEFNokDzKWP3.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/pPALpad1Fh14g7ejyQjqKzlhrBw.jpg",
        url:
          "https://drive.google.com/file/d/1NRpPGXAlp75xOJrndt8aVB3cBIYtDfAY/preview",
      },
      {
        id: 77,
        key: "DOCTOR-STRANGE",
        name: "DOCTOR STRANGE",
        description:
          "La vida del Dr. Stephen Strange cambia para siempre tras un accidente automovilístico que le deja muy malheridas sus manos. Cuando la medicina tradicional falla, se ve obligado a buscar esperanza y una cura en un lugar impensable: una comunidad aislada en Nepal llamada Kamar-Taj. Rápidamente descubre que éste no es sólo un centro de recuperación, sino también la primera línea de una batalla en contra de fuerzas oscuras y ocultas empeñadas en destruir nuestra realidad. En poco tiempo, Strange, armado con sus poderes mágicos recientemente adquiridos, se ve obligado a elegir entre volver a su antigua vida de riqueza y prestigio o dejarlo todo, para defender el mundo como el mago más poderoso del planeta.",
        genres: ["accion", "aventura", "scifi"],
        rate: "7.9",
        length: "1hr 55mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/lxZRdSYXPLxnAQZmlG8civ2sfJr.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/eQN31P4IEhyp6NkdccvppJnyuJ4.jpg",
        url:
          "https://drive.google.com/file/d/1-T4UlIfuNwOqrEwEVVBMln6SGDnZXOXO/preview",
      },
      {
        id: 78,
        key: "EL-AVISPON-VERDE",
        name: "EL AVIPON VERDE",
        description:
          "De noche, Britt Reid (Seth Rogen), heredero del gran imperio periodístico creado por su padre (Tom Wilkinson), se convierte en un héroe enmascarado que se propone combatir el crimen: es The Green Hornet. Su compañero de aventuras es Jato (Jay Chou), un experto en artes marciales.",
        genres: ["accion", "crimen", "comedia"],
        rate: "5.9",
        length: "1hr 57mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/qvj0JmB1txRC0nQULRBdWwmj5xR.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/rST1USLBic6otxxKaquQkAS9931.jpg",
        url:
          "https://drive.google.com/file/d/1vKnL5qYeZpYKPw_CWRM6RHcEhkwOq1zA/preview",
      },
      {
        id: 79,
        key: "EL-HOMBRE-ARAÑA",
        name: "EL HOMBRE ARAÑA",
        description:
          "Peter Parker es un joven y tímido estudiante que vive con su tía May y su tío Ben desde la muerte de sus padres, siendo él muy pequeño. Peter está enamorado de su guapa vecina, pero su escaso carisma no le hace ser precisamente muy popular en el instituto. Un día es mordido por una araña que ha sido modificada genéticamente, descubriendo al día siguiente que posee unos poderes poco habituales: tiene la fuerza y agilidad de una araña. Las aventuras del hombre araña, basadas en el famoso cómic de Stan Lee y Steve Ditko, arrasó en las taquillas americanas y pulverizó los récords de recaudación en su primer fin de semana: 114 millones de dólares, la primera vez en la historia que se consiguió pasar de la barrera de los 100 millones en un fin de semana normal.",
        genres: ["accion", "fantasia", "aventura"],
        rate: "7.1",
        length: "2hr 1mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/rweIrveL43TaxUN0akQEaAXL6x0.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/zp33lkXqcZWyr7iMxzt3lNDtcPv.jpg",
        url:
          "https://drive.google.com/file/d/14l5RcbfeKY0MACgnIrJZ8SIKrTGIe7OV/preview",
      },
      {
        id: 80,
        key: "EL-HOMBRE-ARAÑA-2",
        name: "EL HOMBRE ARAÑA 2",
        description:
          'Han pasado dos años desde que el tranquilo Peter Parker dejó a Mary Jane Watson, su gran amor, y decidió seguir asumir sus responsabilidades como Spider-Man. Peter debe afrontar nuevos desafíos mientras lucha contra el don y la maldición de sus poderes equilibrando sus dos identidades: el escurridizo superhéroe Spider-Man y el estudiante universitario. Las relaciones con las personas que más aprecia están ahora en peligro de ser descubiertas con la aparición del poderoso villano de múltiples tentáculos Doctor Octopus, "Doc Ock". Su atracción por M.J. se hace más fuerte mientras lucha contra el impulso de abandonar su vida secreta y declarar su amor. Mientras tanto, M.J. ha seguido con su vida. Se ha embarcado en su carrera de actriz y tiene un nuevo hombre en su vida. La relación de Peter con su mejor amigo Harry Osborn se ha alejado por la creciente venganza de Harry contra Spider-Man, al que considera responsable de la muerte de su padre.',
        genres: ["accion", "fantasia", "aventura"],
        rate: "7.1",
        length: "2hr 16mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/1nIV4N6QOsMGsEgaQHHhdYX7lNJ.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/vqZnytUpDDAZI6JU7WtCqdq84L.jpg",
        url:
          "https://drive.google.com/file/d/1ya6qrRxC6PZ13Qi6YZ4xHHbpLeaFou06/preview",
      },
      {
        id: 81,
        key: "EL-HOMBRE-ARAÑA-3",
        name: "EL HOMBRE ARAÑA 3",
        description:
          "Tercera entrega de las aventuras del joven Peter Parker (Maguire). Parece que Parker ha conseguido por fin el equilibrio entre su devoción por Mary Jane y sus deberes como superhéroe. Pero, de repente, su traje cambia volviéndose negro y aumentando sus poderes; también Peter se transforma, sacando el lado más oscuro y vengativo de su personalidad. Bajo la influencia de este nuevo traje, Peter deja de proteger a la gente que realmente lo quiere y se preocupa por él. En estas circunstancias, no tiene más remedio que elegir entre disfrutar del tentador poder del nuevo traje o seguir siendo el compasivo héroe de antes. Mientras tanto, dos temibles enemigos, Venom y el Hombre de Arena, utilizarán sus poderes para calmar su sed de venganza.",
        genres: ["accion", "fantasia", "aventura"],
        rate: "7.1",
        length: "2hr 19mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/ej5MReggbRv5yNKkAqwy4HkmJe.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/nVSkePSFsZNcMJsp8IOQVmHhyG1.jpg",
        url:
          "https://drive.google.com/file/d/17szJeUpnN8P-8suLItOSa-46qX_hDy_a/preview",
      },
      {
        id: 82,
        key: "EL-HOMBRE-DE-ACERO",
        name: "EL HOMBRE DE ACERO",
        description:
          "Un niño descubre que posee poderes extraordinarios y que no pertenece a este planeta. En su juventud, viaja para descubrir sus orígenes y las razones por las cuales ha sido enviado a la Tierra. Pero el héroe que lleva dentro tiene que emerger para que pueda salvar al mundo de la aniquilación y convertirse en el símbolo de esperanza para la humanidad.",
        genres: ["accion", "fantasia", "aventura"],
        rate: "7.6",
        length: "2hr 28mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/qcncHlqBNaEdA3ooV7X9Lqmlvqx.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/6lsvafjUX32pVbqvKcO12851TTt.jpg",
        url:
          "https://drive.google.com/file/d/1Hdo1BSJ_QBmZtzcKF1Xhp38hnxfOXEvX/preview",
      },
      {
        id: 83,
        key: "ELEKTRA",
        name: "ELEKTRA",
        description:
          'Elektra (Jennifer Garner), tras recuperarse de las mortales heridas sufridas en "Daredevil", se conviertre en la más peligrosa asesina del mundo. Una vez asignada su última misión, Elektra tomará una decisión que llevará su vida en una nueva dirección... o la destruirá para siempre.',
        genres: ["accion", "fantasia", "scifi"],
        rate: "8.6",
        length: "1hr 37mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/tPNM1iP7YS9w4OQsBOChLzbHmBF.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/muuUBPhE8qy5cJIB1XReY7VBkzN.jpg",
        url:
          "https://drive.google.com/file/d/1vjuuu9WhCJoDy5z9ZdZv6c0ad7hLXuFl/preview",
      },
      {
        id: 84,
        key: "X-MEN-ORIGENES",
        name: "X-MEN ORIGENES",
        description:
          "Precuela de la película X-Men. Situada 17 años antes, narra los inicios del arma X y la forma en la que Wolverine se convirtió en mutante. Logan, convertido en un mutante que se hace llamar Wolverine, y que es capaz de sacar unas afiladas garras y de una fuerza y agilidad sobrehumana, ultima su venganza contra Victor Creed, culpable de la muerte de su novia. Mientras tanto, otros mutantes se acogen al programa X para unir sus fuerzas..",
        genres: ["accion", "fantasia", "scifi"],
        rate: "8.6",
        length: "1hr 47mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/lQAiASSFzY5SMud5f0Gu0C0jLlJ.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/wvqdJLVh0mSblly7UnYFPEk04Wd.jpg",
        url:
          "https://drive.google.com/file/d/1C55mGmZc6LewpmLpcV8CimjGrtws4plS/preview",
      },
      {
        id: 85,
        key: "ESCUADRON-SUICIDA",
        name: "ESCUADRON SUICIDA",
        description:
          "Mientras el gobierno de EE.UU no tiene claro cómo responder a una visita alienígena a la Tierra con intenciones malignas, Amanda El Muro Waller, la líder de la agencia secreta A.R.G.U.S., ofrece una curiosa solución: reclutar a los villanos más crueles, con habilidades letales e incluso mágicas, para que trabajen para ellos. Sin demasiadas opciones a dar una negativa, los ocho supervillanos más peligrosos del mundo acceden a colaborar con el Ejecutivo en peligrosas misiones secretas, casi suicidas, para así lograr limpiar su expediente.",
        genres: ["accion", "fantasia", "aventura", "scifi"],
        rate: "7.8",
        length: "2hr 3mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/9ymhU7NclJr29MpZnBQbJurYbuc.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/1Nn2aBWB1x91GmvFm9F5SM2nQl3.jpg",
        url:
          "https://drive.google.com/file/d/1G1co2MBwhRsIV_cU0AUAgSCVrJz1AqNC/preview",
      },
      {
        id: 86,
        key: "LOS-CUATROS-FANTASTICOS",
        name: "LOS CUATROS FANTASTICOS",
        description:
          "Cuatro astronautas se convierten en superhéroes tras ser contaminados en el espacio exterior. En compañía del benefactor del proyecto, el ambicioso Von Doom (Julian McMahon), los cuatro parten para la exploración de sus vidas. La misión discurre sin incidentes hasta que Reed descubre que hay un error de cálculo en la velocidad con la que se acerca la tormenta. En unos minutos, el umbral de este fenómeno atmosférico está sobre ellos. La estación espacial se ve engullida por turbulentas nubes de radiación cósmica que cambian el genoma de la tripulación. Su ADN se ve irrevocablemente alterado.... y ése va a ser su futuro. De regreso a la Tierra, los efectos de la exposición muestran rápidamente sus primeros síntomas brindando a cada uno de ellos poderes sobrenaturales, convirtiéndose en Los Cuatro Fantásticos: Míster Fantástico, La Chica Invisible, La Antorcha Humana y La Cosa.",
        genres: ["accion", "fantasia", "aventura", "scifi"],
        rate: "7.1",
        length: "1hr 45mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/ij3Nl6Jlx3CJBwXbIFaYYz1acna.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/beAj6f4tiqoRZxqOczYljjitNtC.jpg",
        url:
          "https://drive.google.com/file/d/1JbYVrZPd-IKHG18Y4zU8VuJPYiXEGCa8/preview",
      },
      {
        id: 87,
        key: "LOS-CUATROS-FANTASTICOS-Y-SILVER-SURFER",
        name: "LOS CUATROS FANTASTICOS Y SILVER SURFER",
        description:
          "La primera familia de superhéroes de Marvel, los Cuatro Fantásticos, se enfrentan a su mayor reto hasta la fecha cuando un enigmático heraldo intergaláctico, Estela Plateada, llega a la Tierra para prepararla para su destrucción. Mientras Estela Plateada recorre el mundo sembrando la destrucción, Reed, Sue, Johnny y Ben deben desentrañar el misterio de dicho personaje, y hacer frente al sorprendente regreso de su mortal enemigo el Doctor Muerte, antes de perder toda esperanza.",
        genres: ["accion", "fantasia", "aventura", "scifi"],
        rate: "7.1",
        length: "1hr 32mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/tvFjow9ET16axWcQdXSBqehiFL1.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/4hPJT531skippmci5BfGrJYGfRv.jpg",
        url:
          "https://drive.google.com/file/d/1w7WHhvLT3ni61KYsAQuAZhkKAUQnzdp5/preview",
      },
      {
        id: 88,
        key: "GHOST-RIDER-EL-VENGADOR-FANTASMA",
        name: "GHOST RIDER EL VENGADOR FANTASMA",
        description:
          "Adaptación del famoso cómic de la Marvel. Hace mucho tiempo, la superestrella de las acrobacias en moto, Johnny Blaze (Nicolas Cage) hizo un trato con el diablo para proteger a los que más quería: su padre y su novia de la juventud, Roxanne (Eva Mendes). Ahora, el diablo ha venido a cobrar su deuda. De día, Johnny es un motero acróbata temerario... pero de noche, en presencia del diablo, se convierte en Ghost Rider, un cazarecompensas de demonios deshonestos. Obligado a hacer la voluntad del diablo, Johnny está decidido a enfrentarse a su destino y utilizar su maldición y sus poderes para defender al inocente.",
        genres: ["accion", "fantasia", "suspenso"],
        rate: "7.0",
        length: "1hr 50mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/beWg4c9XKFbmtLmMM6dIJYFS5XJ.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/ohfWCHT65P7b3kQvZnoy2BL95MB.jpg",
        url:
          "https://drive.google.com/file/d/1Dfrfg1TQzyX2Mn8YpELtAQd1NYbh4owA/preview",
      },
      {
        id: 89,
        key: "GHOST-RIDER-EL-CONTRATO-DE-SAN-VENGANZA",
        name: "GHOST RIDER EL CONTRATO DE SAN VENGANZA",
        description:
          'Nueva adaptación del cómic "El motorista fantasma". Con el fin de controlar sus deseos de venganza, Johnny Blaze (Nicolas Cage), que ve sus poderes como una maldición, vive apartado del mundo y sin relacionarse con nadie, pero acaba siendo localizado por el monje Moreau, que necesita su ayuda para buscar a Nadya y a su hijo Danny antes de que los encuentre Roarke, un viejo conocido de Blaze.',
        genres: ["accion", "fantasia", "suspenso"],
        rate: "7.0",
        length: "1hr 36mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/yokkUoswEXgPiNRZvQ2XrYCEbVp.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/vDpj9KXcAXvv5Z89zfighckL7pj.jpg",
        url:
          "https://drive.google.com/file/d/1Lg_kHKuenuouBeCbGPI_c6MpM7qfhdfW/preview",
      },
      {
        id: 90,
        key: "GUARDIANES-DE-LA-GALAXIA",
        name: "GUARDIANES DE LA GALAXIA ",
        description:
          "El temerario aventurero Peter Quill es objeto de un implacable cazarrecompensas después de robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuya ambición amenaza todo el universo. Para poder escapar del incansable Ronan, Quill se ve obligado a pactar una complicada tregua con un cuarteto de disparatados inadaptados: Rocket, un mapache armado con un rifle, Groot, un humanoide con forma de árbol, la letal y enigmática Gamora y el vengativo Drax the Destroyer. Pero cuando Quill descubre el verdadero poder de la esfera, deberá hacer todo lo posible para derrotar a sus extravagantes rivales en un intento desesperado de salvar el destino de la galaxia.",
        genres: ["accion", "aventura", "scifi"],
        rate: "8.0",
        length: "2hr 2mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/iAAmnDsLuse01zjzFLrhJLDqUYh.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/gkYu744gqKYvCVTm6B69eAHZJdS.jpg",
        url:
          "https://drive.google.com/file/d/1ys0qj8Y9FY773WsoifQYoS8YbgmFKagj/preview",
      },
      {
        id: 91,
        key: "GUARDIANES-DE-LA-GALAXIA-VOL2",
        name: "GUARDIANES DE LA GALAXIA-VOL2",
        description:
          "Una poderosa raza alienígena contrata a los Guardianes para que protejan sus valiosas baterías de energía, pero, cuando Rocket las roba, los alienígenas envían a sus tropas de combate a vengarse de ellos. Mientras tratan de escapar con vida, intentan resolver el misterio de los verdaderos orígenes de Peter Quill.",
        genres: ["accion", "aventura", "scifi"],
        rate: "8.0",
        length: "2hr 17mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/4KJ97gaTICl9cTMqoBCVoKhYCaF.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/tM894AtE7UQTJEoQG6qF6mdfSUT.jpg",
        url:
          "https://drive.google.com/file/d/1onvkUqScbMFFSq3HEw8meB6_6fPiRGMy/preview",
      },
      {
        id: 92,
        key: "IRON-MAN",
        name: "IRON MAN",
        description:
          'El multimillonario fabricante de armas Tony Stark debe enfrentarse a su turbio pasado después de sufrir un accidente con una de sus armas. Equipado con una armadura de última generación tecnológica, se convierte en "El hombre de hierro" para combatir el mal a escala global.',
        genres: ["accion", "aventura", "scifi"],
        rate: "8.2",
        length: "2hr 6mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/8tZ1KaRTGfIGtfowZRWa9I71qbU.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/qbozjOW2txxIbscWfakaq8suPow.jpg",
        url:
          "https://drive.google.com/file/d/1YUICQ1ejy9zjLD7w6CG01haky3rovBpm/preview",
      },
      {
        id: 93,
        key: "IRON-MAN-2",
        name: "IRON MAN 2",
        description:
          "El mundo sabe que el multimillonario Tony Stark es Iron Man, el superhéroe enmascarado. Sometido a presiones por parte del gobierno, la prensa y la opinión pública para que comparta su tecnología con el ejército, Tony es reacio a desvelar los secretos de la armadura de Iron Man porque teme que esa información pueda caer en manos indeseables..",
        genres: ["accion", "aventura", "scifi"],
        rate: "8.2",
        length: "2hr 5mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/5tCA3oZXLRPHmS5DIDnlu7hY4Ab.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/jesRqfL9v6HNnowe795xjmuKUXl.jpg",
        url:
          "https://drive.google.com/file/d/1ZvI6oS2hDLKbNqHEGXxdqDkJ_F3Y9iZL/preview",
      },
      {
        id: 94,
        key: "IRON-MAN-3",
        name: "IRON MAN 3",
        description:
          "El descarado y brillante empresario Tony Stark/Iron Man se enfrentará a un enemigo cuyo poder no conoce límites. Cuando Stark comprende que su enemigo ha destruido su universo personal, se embarca en una angustiosa búsqueda para encontrar a los responsables. Este viaje pondrá a prueba su entereza una y otra vez. Acorralado, Stark tendrá que sobrevivir por sus propios medios, confiando en su ingenio y su instinto para proteger a las personas que quiere.",
        genres: ["accion", "aventura", "scifi"],
        rate: "8.2",
        length: "2hr 10mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/jcs4B2AiNPbVm8GFXNaTmvymR7x.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/tKa1gmGKAUVYnflYcadipeL3d9h.jpg",
        url:
          "https://drive.google.com/file/d/1lLW5ujykpI85gPU46HzUoX9AGhvIwZo6/preview",
      },
      {
        id: 95,
        key: "KICK-ASS",
        name: "KICK-ASS",
        description:
          "Dave Lizewski es un estudiante de instituto que pasa desapercibido por todos, aficionado a los cómics, de donde saca un día la idea de convertirse en un superhéroe, aunque no tenga superpoderes, no haya seguido un duro entrenamiento y ni siquiera tenga una razón significativa para ello. Pero la vida de Dave cambiará para siempre cuando se encuentre con un par de locos vigilantes -la terremoto de 11 años Hit Girl y su padre, Big Daddy- y forje amistad con otro joven luchador contra el crimen, Red Mist. Y cuando todos se tengan que enfrentar al jefe de la mafia local, Frank DAmico, sus alianzas y sus verdaderas habilidades serán puestas a prueba.",
        genres: ["accion", "crimen", "scifi"],
        rate: "7.2",
        length: "1hr 57mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/lXDsqmcn0JP4YPdpNdub0xMiS8b.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/qHhuTmhRCYvj9ls4STFGnaeAPhR.jpg",
        url:
          "https://drive.google.com/file/d/1wRsVuWLuSx5wFhBVmzX5aA0PGVQCHYIl/preview",
      },
      {
        id: 96,
        key: "KICK-ASS-2",
        name: "KICK-ASS 2",
        description:
          "Secuela de la aclamada película Kick-Ass (2010), basada en el cómic de Mark Millar. Después de que la loca valentía de Kick-Ass (Aaron Taylor-Johnson) inspirara a toda una oleada de nuevos defensores del bien dirigidos por el durísimo coronel Stars and Stripes (Jim Carrey), nuestro héroe decide unirse a ellos. Pero cuando Bruma Roja (Christopher Mintz-Plasse), que regresa con el nombre de The Mother, decide deshacerse de los superhéroes aficionados, solo Hit Girl (Chloë Grace Moretz) podrá impedir que los aniquile.",
        genres: ["accion", "crimen", "scifi"],
        rate: "7.2",
        length: "1hr 43mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/vUPNbrTpHkxIr7HZcvxFxvAWPbC.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/AkBLdx5W9rqUgQwm3jwjuRdFact.jpg",
        url:
          "https://drive.google.com/file/d/1dFzqQ-sZaF1YxRjCcKroywWqsBbE9tnm/preview",
      },
      {
        id: 97,
        key: "LA-MUJER-MARAVILLA",
        name: "LA MUJER MARAVILLA",
        description:
          "Antes de ser Wonder Woman, era Diana, princesa de las Amazonas, entrenada para ser una guerrera invencible. Diana fue criada en una isla paradisíaca protegida. Hasta que un día un piloto norteamericano, que tiene un accidente y acaba en sus costas, le habla de un gran conflicto existente en el mundo, la Primera Guerra Mundial. Diana decide salir de la isla convencida de que puede detener la terrible amenaza. Mientras lucha junto a los hombres en la guerra que acabará con todas las guerras, Diana descubre todos sus poderes y su verdadero destino.",
        genres: ["accion", "aventura", "scifi"],
        rate: "7.3",
        length: "2hr 21mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/yjzHtHSAPDdRQejnTyFbifX2gef.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/aPEhtVLrZRnJufKHwbHgqwirv7J.jpg",
        url:
          "https://drive.google.com/file/d/1cwm6n5MkvgLGrIRJBsAh1PB5r5wGIFPb/preview",
      },
      {
        id: 98,
        key: "LOGAN",
        name: "LOGAN",
        description:
          "Sin sus poderes, por primera vez, Lobezno es verdaderamente vulnerable. Después de una vida de dolor y angustia, sin rumbo y perdido en el mundo donde los X-Men son leyenda, su mentor Charles Xavier lo convence de asumir una última misión: proteger a una joven que será la única esperanza para la raza mutante.",
        genres: ["accion", "drama", "scifi"],
        rate: "7.8",
        length: "2hr 17mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/hbJkbdwLNjHTomnXPD3jWlYm2U1.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/qTdCfGyDisY9e8BLycszlyTsPWx.jpg",
        url:
          "https://drive.google.com/file/d/1ct3PmnDDh84QFjUnGpFrsZCEbgBRi1pi/preview",
      },
      {
        id: 99,
        key: "SHAZAM",
        name: "SHAZAM",
        description:
          "Todos llevamos un superhéroe dentro, solo se necesita un poco de magia para sacarlo a la luz. Cuando Billy Batson, un niño de acogida de 14 años que ha crecido en las calles, grita la palabra SHAZAM!se convierte en el Superhéroe adulto Shazam, por cortesía de un antiguo mago. Dentro de un cuerpo musculoso y divino, Shazam esconde un corazón de niño. Pero lo mejor es que en esta versión de adulto consigue realizar todo lo que le gustaría hacer a cualquier adolescente con superpoderes: ¡divertirse con ellos! ¿Volar? ¿Tener visión de rayos X? ¿Disparar un rayo con las manos? ¿Saltarse el examen de sociales? Shazam va a poner a prueba los límites de sus habilidades con la inconsciencia propia de un niño. Pero necesitará dominar rápidamente esos poderes para luchar contra las letales fuerzas del mal que controla el Dr. Thaddeus Sivana.",
        genres: ["accion", "comedia", "scifi"],
        rate: "7.0",
        length: "2hr 12mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/4f5Rz8uYpcTvo1hHKcQRSaay0ek.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/8q5q6wR67oIPpZk4zrgkMU1EgSp.jpg",
        url:
          "https://drive.google.com/file/d/10z1IaPT5nKo-wF8Pz__NJLkufO4FgenP/preview",
      },
      {
        id: 100,
        key: "LIGA-DE-LA-JUSTICIA",
        name: "LIGA DE LA JUSTICIA",
        description:
          "Motivado por la fe que había recuperado en la humanidad e inspirado por la acción altruista de Superman, Bruce Wayne recluta la ayuda de su nueva aliada, Diana Prince, para enfrentarse a un enemigo aún mayor. Juntos, Batman y Wonder Woman se mueven rápidamente para intentar encontrar y reclutar un equipo de metahumanos que combata esta nueva amenaza. El problema es que a pesar de la formación de esta liga de héroes sin precedentes (Batman, Wonder Woman, Aquaman, Cyborg y Flash) puede que sea demasiado tarde para salvar el planeta de una amenaza de proporciones catastróficas.",
        genres: ["accion", "aventura", "scifi"],
        rate: "7.5",
        length: "2hr 1mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/A2AnLbZmaHyPA6oHjgri3KPjxoe.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/kpYGvWA9u4C1dAwZsnjHv7abtiq.jpg",
        url:
          "https://drive.google.com/file/d/1f1432ThuDYf3VELvQWANWFRwksMxl2pl/preview",
      },
      {
        id: 101,
        key: "SPAWN",
        name: "SPAWN",
        description:
          "Un mercenario llamado Al Simmons es traicionado y asesinado por su diabólico jefe. Cuando baja a los infiernos hace un pacto con el diablo para volver a la tierra bajo la figura de Spawn, y así poder volver a ver a su mujer.",
        genres: ["accion", "aventura", "fantasia", "terror", "scifi"],
        rate: "6.5",
        length: "1hr 36mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/hB1z8EiEhCmSUD3UK4QXm5MPxGr.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/dE0Nj2b4Qlmsa9PgyzWBT7NgAhB.jpg",
        url:
          "https://drive.google.com/file/d/1087e_YNmx_5GhGOcF4DbQTlgXsw0ZVkL/preview",
      },
      {
        id: 102,
        key: "SPIDER-MAN-REGRESO-A-CASA",
        name: "SPIDER MAN REGRESO A CASA",
        description:
          "Peter Parker comienza a experimentar su recién descubierta identidad como el superhéroe Spider-Man. Después de la experiencia vivida con los Vengadores, Peter regresa a casa, donde vive con su tía. Bajo la atenta mirada de su mentor Tony Stark, Peter intenta mantener una vida normal como cualquier joven de su edad, pero interrumpe en su rutina diaria el nuevo villano Vulture y, con él, lo más importante de la vida de Peter comenzará a verse amenazado.",
        genres: ["accion", "aventura", "drama", "scifi"],
        rate: "7.5",
        length: "1hr 50mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/h1Iq6WfE4RWc9klGvN8sdi5aR6V.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg",
        url:
          "https://drive.google.com/file/d/1gW62gLqGKXSoEA7uSxUmX3Nd3QkonBrP/preview",
      },
      {
        id: 103,
        key: "SPIDER-MAN-LEJOS-DE-CASA",
        name: "SPIDER MAN LEJOS DE CASA",
        description:
          "Peter Parker decide irse junto a Michelle Jones, Ned y el resto de sus amigos a pasar unas vacaciones a Europa después de los eventos ocurridos en Vengadores: EndGame. Sin embargo, el plan de Parker por dejar de lado sus superpoderes durante unas semanas se ven truncados cuándo es reclutado por Nick Fury para unirse a Mysterio (un humano que proviene de la Tierra 833, una dimensión del multiverso, que tuvo su primera aparición en Doctor Strange) para luchar contra los elementales (cuatro entes inmortales que vienen de la misma dimensión y que dominan los cuatro elementos de la naturaleza, el fuego, el agua, el aire y la tierra) . En ese momento, Parker vuelve a ponerse el traje de Spider-Man para cumplir con su labor.",
        genres: ["accion", "aventura", "drama", "scifi"],
        rate: "7.5",
        length: "2hr 15mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/iDorDI5iNSBp57Jv5KiHHe43Y3k.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/6ihyJWRLEngSnlW8HKeDOH3AfSQ.jpg",
        url:
          "https://drive.google.com/file/d/1lWzooWF_kkjTeTW1xTfRkUX4muwAV3Fh/preview",
      },
      {
        id: 104,
        key: "LOS-VENGADORES",
        name: "LOS VENGADORES",
        description:
          'Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro. Adaptación del cómic de Marvel "Los Vengadores", el legendario grupo de superhéroes formado por Ironman, Hulk, Thor y el Capitán América entre otros.',
        genres: ["accion", "aventura", "drama", "scifi"],
        rate: "8.0",
        length: "2hr 23mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/qZ9VEmoL3OaIVkkcaneRUKSaWzA.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg",
        url:
          "https://drive.google.com/file/d/1TcDp4JS9KYI746M758mHVw1pYgQRILqn/preview",
      },
      {
        id: 105,
        key: "EL-INCREIBLE-HULK",
        name: "EL INCREIBLE HULK",
        description:
          "El científico Bruce Banner recorre el mundo tratando de encontrar una cura a su problema, en busca de un antídoto que le permita librarse de su Alter Ego. Perseguido por el ejército y por su propia rabia interna, es incapaz de sacar de su cabeza a Betty Ross. Así que se decide a volver a la civilización, donde debe enfrentarse a una criatura creada cuando el agente de la KGB, Emil Blonsky, se expone a una dosis superior de la radiación que convirtió a Bruce en Hulk. Incapaz de volver a su estado humano, Emil hace responsable a Hulk de su aterradora condición, mientras que la ciudad de Nueva York se convierte en el escenario de la última batalla entre las dos criaturas más poderosas que jamás han pisado la Tierra.",
        genres: ["accion", "aventura", "drama", "scifi"],
        rate: "6.5",
        length: "1hr 54mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/p4NYZXVtgKf6aiH65QzzkUVJcsd.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/cMZI5VrSv4L8ioHApQLqUkNS99o.jpg",
        url:
          "https://drive.google.com/file/d/1-pid2-fg4lMXoAf2_5XOqnMoWV87fWIh/preview",
      },
      {
        id: 106,
        key: "EL-CASTIGADOR",
        name: "EL CASTIGADOR",
        description:
          "Frank Castle (Thomas Jane) es un agente secreto del FBI que hasta el momento ha logrado una carrera intachable. Frank también es un ex operativo de las Fuerzas Especiales. Finalmente sale del campo de batalla para trabajar en una oficina y así poder tener una vida normal con su esposa e hijo. Será entonces cuando el mundo de Frank se viene abajo por el peor temor que siempre tuvo: Su familia es ejecutada como repercusión de su último trabajo. Ahora Castle busca castigar a los asesinos, para encontrar al final lo que menos esperaba: La redención.",
        genres: ["accion", "crimen", "drama", "scifi"],
        rate: "6.2",
        length: "2hr 4mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/bD0VrkWxs0tmJueFy0maRjWS7dW.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/Ao7mTUqaF84o4w2prRmjNgOXjIs.jpg",
        url:
          "https://drive.google.com/file/d/1R_PONKuN8WPRR5boFpILZeXcJPSqjfuR/preview",
      },
      {
        id: 107,
        key: "EL-CASTIGADOR-ZONA-DE-GUERRA",
        name: "EL CASTIGADOR ZONA DE GUERRA",
        description:
          'Película basada en el anti-héroe de Marvel Frank Castle, también conocido como "El castigador". Continuando su cruzada para castigar a criminales violentos en América, el agente del FBI Frank Castle (Ray Stevenson), llega a Nueva York en busca de un jefe que controla los bajos fondos de la ciudad. ',
        genres: ["accion", "crimen", "drama", "scifi"],
        rate: "5.7",
        length: "1hr 47mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/8X2r09vhgGc4dk0Es3jr2gFSD8o.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/bpanpGm2owc3vJpkzViLKj8VpBx.jpg",
        url:
          "https://drive.google.com/file/d/1UCzofIR0VdH2YFZawmYe70eH8VIrw8uA/preview",
      },
      {
        id: 108,
        key: "THOR",
        name: "THOR",
        description:
          "Thor es un arrogante y codicioso guerrero cuya imprudencia desata una antigua guerra. Por ese motivo, su padre Odín lo castiga desterrándolo a la Tierra para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Cuando el villano más peligroso de su mundo envía a la Tierra a las fuerzas más oscuras de Asgard, Thor se dará cuenta de lo que realmente hace falta para ser un verdadero héroe.",
        genres: ["accion", "fantasia", "aventura"],
        rate: "6.7",
        length: "1hr 55mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/jCEhPVVg14omDgWPN7vyAFUWzXZ.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/8rk1VyBbMbb6tVLQ8FzfyFxx5EP.jpg",
        url:
          "https://drive.google.com/file/d/1JdThcOsELC3xit8RoDSSBr_QSr07wRYa/preview",
      },
      {
        id: 109,
        key: "THOR-UN-MUNDO-OSCURO",
        name: "THOR UN MUNDO OSCURO",
        description:
          "Thor lucha por restablecer el orden en el cosmos, pero una antigua raza liderada por el vengativo Malekith regresa con el propósito de volver a sumir el universo en la oscuridad. Se trata de un villano con el que ni siquiera Odín y Asgard se atreven a enfrentarse; por esa razón, Thor tendrá que emprender un viaje muy peligroso, durante el cual se reunirá con Jane Foster y la obligará a sacrificarlo todo para salvar el mundo.",
        genres: ["accion", "fantasia", "aventura"],
        rate: "6.7",
        length: "1hr 52mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gxnXMwF2jdKPz7siwlEtHgTUqz0.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/w5T8OK5rkkE8rXadSZHyZWqfNSX.jpg",
        url:
          "https://drive.google.com/file/d/1OaRfSY0WLbQbZ_mdZmUjEjY8-Hop3Sio/preview",
      },
      {
        id: 110,
        key: "THOR-RAGNAROK",
        name: "THOR RAGNAROK",
        description:
          "Thor está preso al otro lado del universo sin su poderoso martillo y se enfrenta a una carrera contra el tiempo. Su objetivo es volver a Asgard y parar el Ragnarok porque significaría la destrucción de su planeta natal y el fin de la civilización Asgardiana a manos de una todopoderosa y nueva amenaza, la implacable Hela. Pero, primero deberá sobrevivir a una competición letal de gladiadores que lo enfrentará a su aliado y compañero en los Vengadores, ¡el Increíble Hulk!",
        genres: ["accion", "fantasia", "aventura"],
        rate: "7.6",
        length: "2hr 11mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/sgVe7blGP5P71STv2TBXmO86qPo.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/15j6yep75STDBslA2UwgkKwtwml.jpg",
        url:
          "https://drive.google.com/file/d/1qzqR6B35QouRV0ijjP4ge2EGOec_qDok/preview",
      },
      {
        id: 111,
        key: "VENOM",
        name: "VENOM",
        description:
          "Eddie Brock (Tom Hardy) es un consolidado periodista y astuto reportero que está investigando una empresa llamada Fundación Vida. Esta fundación, dirigida por el eminente científico Carlton Drake (Riz Ahmed), está ejecutando secretamente experimentos ilegales en seres humanos y realizando pruebas que involucran formas de vida extraterrestres y amorfas conocidas como simbiontes. Durante una visita furtiva a la central, el periodista quedará infectado por un simbionte. Comenzará entonces a experimentar cambios en su cuerpo que no entiende, y escuchará una voz interior, la del simbionte Venom, que le dirá lo que tiene que hacer. Cuando Brock adquiera los poderes del simbionte que le usa como huésped, Venom tomará posesión de su cuerpo, convirtiéndole en un despiadado y peligroso súpervillano.",
        genres: ["accion", "scifi", "aventura"],
        rate: "6.7",
        length: "1hr 52mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/jMBTJQiHAyGlZR05J2sq5coA6ew.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
        url:
          "https://drive.google.com/file/d/1ujdQE3gmw-XWc5gNnZGbeyLCVbq9Jauv/preview",
      },
      {
        id: 112,
        key: "WOLVERINE-INMORTAL",
        name: "WOLVERINE INMORTAL",
        description:
          'Secuela de "X-Men: la decisión final". El film se centra en la soledad del protagonista tras la desaparición definitiva de Jean Grey y otros compañeros. Logan amnésico busca respuestas sobre su pasado en el mundo del crimen organizado de Japón, donde un hombre al que salvó la vida en el pasado le ofrece algo que lleva tiempo deseando: hacer a Wolverine mortal.',
        genres: ["accion", "scifi", "aventura"],
        rate: "6.5",
        length: "2hr 6mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/p5IFVd8PQjcGk0KKaSP97jze3wP.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/AqIes6H9NlRoo0YjlO7exLCu72v.jpg",
        url:
          "https://drive.google.com/file/d/1DtW2fehBHG7NkX3huhw7_rBPcfVGLhrU/preview",
      },
      {
        id: 113,
        key: "X-MEN",
        name: "X MEN",
        description:
          "En un futuro cercano, la humanidad comienza a ver aparecer una nueva raza; los mutantes. Dotados de extraños y variados poderes, están agrupados en dos bandos: los que abogan por la integración y el entendimiento con la humanidad, encabezados por el doctor Charles Xavier, y los que buscan el enfrentamiento con una raza que consideran inferior y que les odia, dirigidos por Magnus, alias Magneto, un peligroso mutante con extraordinarios poderes.",
        genres: ["accion", "scifi", "aventura"],
        rate: "7.0",
        length: "1hr 44mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/bojMb5j1dOHvD1cKffI0AW9ARkk.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/a6MwSrIKmMjs5b8os7eEgQk05yx.jpg",
        url:
          "https://drive.google.com/file/d/1Arptw-R3a0ndLEvb8AQZp0NDhwczsVyF/preview",
      },
      {
        id: 114,
        key: "X-MEN-2",
        name: "X MEN 2",
        description:
          "Los mutantes son seres humanos con alguna variación genética que les dota de características especiales. También son la más moderna minoría perseguida del mundo. En medio de un clima de rabia y persecución, el profesor Xavier ha creado un instituto, un refugio, para estos seres poderosos. En este lugar los iniciados son preparados para aceptar y dominar sus habilidades, y ponerlas al servicio de la tolerancia y el combate contra la creciente histeria colectiva que está amenazando con su existencia. Pero la reputación de los mutantes será todavía peor cuando uno de ellos lanza un devastador ataque, lo que conlleva causas una pública recriminación hacia todos ellos y nuevos poderes para la Mutant Registration Act y William Stryker, un líder militar que pretende acabar con todos ellos centrándose en la escuela de X-Men.",
        genres: ["accion", "scifi", "aventura"],
        rate: "7.0",
        length: "2hr 13mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/8JjzEdEjHCAd4VZCvgMz8M5ekFg.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/aJG4Lrm2XlwjmIY4eA538b0JHvk.jpg",
        url:
          "https://drive.google.com/file/d/1l4c2hnRSmJgMjMTPpy40eGjOpjcSjIsm/preview",
      },
      {
        id: 115,
        key: "X-MEN-3",
        name: "X MEN 3",
        description:
          'En X-Men: La decisión final, el último capítulo de la trilogía cinematográfica de los "X-Men", hay una "cura" para los mutantes que amenaza con alterar el curso de la historia. Por primera vez, los mutantes pueden elegir: seguir con su singularidad, aunque eso les aísle y les separe, o renunciar a sus poderes y convertirse en seres humanos normales. Los opuestos puntos de vista de los líderes mutantes, Charles Xavier, que aboga por la tolerancia, y Magneto, que cree en la supervivencia de los más aptos, se ven sometidos a la prueba definitiva: desencadenar la guerra que pondrá fin a todas las guerras.',
        genres: ["accion", "scifi", "aventura"],
        rate: "7.0",
        length: "1hr 45mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/6FnWDI3mKZhfWv7NznKUFlvSdo0.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/5PkkT6BL6xPaOXSa0RjPvEPVpmp.jpg",
        url:
          "https://drive.google.com/file/d/1lV2DMcv0slImSLqlEcsq8b8clC_qbLlO/preview",
      },
      {
        id: 116,
        key: "X-MEN-APOCALIPSIS",
        name: "X MEN APOCALIPSIS",
        description:
          "Desde los albores de la civilización, fue adorado como un dios. Apocalypse, el primer y más poderoso mutante del universo X-Men de Marvel, acumuló los poderes de muchos otros mutantes, convirtiéndose en inmortal e invencible. Pero al despertar tras miles de años, se encuentra desilusionado con el mundo en que se encuentra y decide reclutar un equipo de mutantes poderosos, entre ellos a un descorazonado Magneto (Michael Fassbender), con el fin de limpiar la humanidad y crear una nueva orden mundial, sobre la cual él reinará. A medida que el destino de la tierra está en juego, Raven (Jennifer Lawrence) con la ayuda del Profesor X (James McAvoy) se unirán junto a un equipo de jóvenes X-Men para detener a su mayor enemigo y salvar así a la humanidad de la destrucción total.",
        genres: ["accion", "scifi", "aventura"],
        rate: "7.0",
        length: "2hr 24mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/6H7kfFsH7laKnMgJtaUYtOgEYRU.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/pCssRYbILVduCYDgrcRG0T8W4FN.jpg",
        url:
          "https://drive.google.com/file/d/1A9pWsXCkcoRBLtnDz6CEIfwN5syZwIhh/preview",
      },
      {
        id: 117,
        key: "X-MEN-EL-FENIX-OSCURO",
        name: "X MEN EL FENIX OSCURO",
        description:
          "Los X-Men se enfrentan a su enemigo más poderoso: uno de sus miembros, Jean Grey. Durante una misión de rescate en el espacio, Jean casi muere al ser alcanzada por una misteriosa fuerza cósmica. Cuando regresa a casa, esa radiación la ha hecho más poderosa, pero mucho más inestable. Mientras lucha con la entidad que habita en su interior, Jean desata sus poderes de formas que no puede controlar ni comprender. Jean cae en una espiral fuera de control haciendo daño a aquellos que más ama y empieza a destruir los lazos que mantienen unidos a los X-Men.",
        genres: ["accion", "scifi", "aventura"],
        rate: "7.0",
        length: "1hr 56mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/ks3b0jNq10KmnFK9CWL1FpVEuMY.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/lkO04dvBgbipQRR4V8RdPWaLT7v.jpg",
        url:
          "https://drive.google.com/file/d/1xUHBQUatIrHx7Wtg-0xXBbUXDTva3AWy/preview",
      },
      {
        id: 118,
        key: "X-MEN-DIAS-DEL-FUTURO-PASADO",
        name: "X MEN DIAS DEL FUTURO PASADO ",
        description:
          "Ambientada en la década de los 70, los miembros de la famosa Patrulla X tendrán que evitar un futuro apocalíptico en el que los mutantes luchan por sobrevivir en campos de concentración controlados por los temibles Centinelas. Para ello, los héroes del universo Marvel deberán unificar sus fuerzas dejando a un lado la creciente enemistad de los bandos liderados por Charles Xavier y Magneto. Trask Industries, la empresa encargada de crear a estos gigantescos cazamutantes, será el origen de todos sus problemas. Tan sólo viajando en el tiempo podrán impedir la masacre que se avecina. ¿Serán capaces nuestros héroes de derrocar a la multinacional y evitar así el exterminio de su especie?",
        genres: ["accion", "scifi", "aventura"],
        rate: "7.0",
        length: "2hr 10mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/yTVqNNp7hWFrFtzxAo5bdVUBuz0.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/hUPgIibqZlwbhs4N08cPzzc4f5K.jpg",
        url:
          "https://drive.google.com/file/d/1in86830KgydsJjnf5WukCTxf8gB8aYIh/preview",
      },
      {
        id: 119,
        key: "X-MEN-PRIMERA-GENERACION",
        name: "X MEN PRIMERA GENERACION",
        description:
          "Comienzo de la saga de los X-Men, esta es una historia secreta que alude a conocidos acontecimientos mundiales. Antes de que los mutantes se mostraran al mundo, y antes de que cambiaran sus nombres por los de Profesor X y Magneto, Charles Xavier (James McAvoy) y Erik Lehnsherr (Michael Fassbender) eran dos jóvenes que descubrían sus poderes. No había animadversión alguna entre ellos, sino que les unía una sincera amistad y la decisión de acabar con el trabajar juntos y entrenar a un grupo de jóvenes mutantes para evitar el Armagedón nuclear. Su enemigo común: el malvado Sebastian Shaw (Kevin Bacon), un humano con poderes con el que Erik tiene una cuenta pendiente.",
        genres: ["accion", "scifi", "aventura"],
        rate: "7.0",
        length: "2hr 11mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/p63jtwBMlec3pLffxHFqs6kOI5P.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/4Ky8OcB0F7x3PRZQIiFFZyf3eIX.jpg",
        url:
          "https://drive.google.com/file/d/1qP0bT2mTbisMXpwQFm9lvB6Bdt2U8svR/preview",
      },
      {
        id: 120,
        key: "BATMAN-VS-SUPERMAN",
        name: "BATMAN VS SUPERMAN",
        description:
          "Ante el temor de las acciones que pueda llevar a cabo Superman, el vigilante de Gotham City aparece para poner a raya al superhéroe de Metrópolis, mientras que la opinión pública debate cuál es realmente el héroe que necesitan. El hombre de acero y Batman se sumergen en una contienda territorial, pero las cosas se complican cuando una nueva y peligrosa amenaza surge rápidamente, poniendo en jaque la existencia de la humanidad.",
        genres: ["accion", "fantasia", "aventura"],
        rate: "5.9",
        length: "2hr 33mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face/mS3t9puIjLKgoex82cu9d6G0835.jpg",
        cover:
          "https://image.tmdb.org/t/p/w500_and_h282_face/owSJfU25QxFOSaOdnMAsHqOwY7G.jpg",
        url:
          "https://drive.google.com/file/d/1cuqjAUcpldPOeDbyki12R5qVAjQt4eZD/preview",
      },
      {
        id: 241863,
        key: "As%20the%20Gods%20Will",
        name: "As the Gods Will",
        description:
          "Shun Takahata  es un estudiante corriente que lleva una vida aburrida. Su amigo de toda la vida es Ichika Akimoto . Un día la cabeza de un maestro explota en plena clase. Shun Takahata y sus compañeros se ven obligados a jugar un macabro juego de la muerte sin saber cómo, por qué o quién les ha metido en ese lio.",
        genres: ["Suspense", "Terror"],
        rate: 7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//rDtof82caRS2yCvpcdRSRhHPNC8.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//aIokpcLZ1CRJDqFCjb0KHlUY1UQ.jpg",
        url:
          "https://drive.google.com/file/d/1-oAgX6_0f7Rz7-nUgh7-FZvXVNyNkhNv/preview",
      },
      {
        id: 65,
        key: "8%20millas",
        name: "8 millas",
        description:
          "Detroit, 1995. La promesa de potencia industrial se ha transformado en un hervidero de conflictos económicos y raciales. La 8 Mile Road, que recorre el perímetro de la ciudad, marca ahora la frontera entre lo urbano y lo suburbano; entre lo blanco y lo negro. Allí, hay una larga tradición de creatividad negra. Ésta ha tenido siempre unas raíces obreras y ha expresado sin filtros su dura realidad. En los clubs, los mejores raperos se enfrentan en duelos verbales para conseguir el respeto de sus colegas.",
        genres: ["Drama", "Música"],
        rate: 7.1,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//bRSMRkf06aUeZcmr5Cyxuv5vk4T.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//z8YErTh23UzOnC4b6dFOps76SGI.jpg",
        url:
          "https://drive.google.com/file/d/1wjJRio3o8-F-EUrjIzi91ALNDTbzT2XS/preview",
      },
      {
        id: 10068,
        key: "9%20semanas%20y%20media",
        name: "9 semanas y media",
        description:
          "Elizabeth, una bella marchante de arte, entabla relación con John, un broker de Wall Street. Tras unos inicios apasionados, la pareja se embarcará, por deseo de él, en una serie de juegos eróticos cada vez más extraños que confundirán a Elizabeth, pues ella le ama pero desconoce los verdaderos sentimientos de John.",
        genres: ["Drama", "Romance"],
        rate: 6,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//oQDTKI8TYZ90lzVRNB8mk7UFe6b.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//pBUAEqvfzBAZE9pNNvC3nWpJdUf.jpg",
        url:
          "https://drive.google.com/file/d/1wJ3ojNXdgAPZcnGoypjp2BwZdt3nu0C-/preview",
      },
      {
        id: 7840,
        key: "10.000%20a.C.",
        name: "10.000 a.C.",
        description:
          'Era la época en la que el hombre y la bestia eran salvajes y el gran mamut recorría la Tierra. Una época en la que nacieron las ideas y las creencias que forjaron a la humanidad para siempre. "10.000" narra la historia de un joven cazador (Steven Strait) en su misión de guiar a un ejército a través de un vasto desierto, luchando contra tigres dientes de sable y depredadores prehistóricos, mientras descubre una civilización perdida e intenta rescatar a la mujer que ama.',
        genres: ["Aventura", "Acción"],
        rate: 5.3,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//fShaGUuwkDgobYRZCwntmzjjn2i.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//1oFMH3f5HJ9AJVnqQuNSWvYAP6q.jpg",
        url:
          "https://drive.google.com/file/d/1xmDONaL-SmyU5cVCGCC0l3hRvabCqn_k/preview",
      },
      {
        id: 11324,
        key: "Shutter%20Island",
        name: "Shutter Island",
        description:
          "Verano de 1954. Los agentes judiciales Teddy Daniels y Chuck Aule son destinados a una remota isla del puerto de Boston para investigar la desaparición de una peligrosa asesina recluida en el hospital psiquiátrico Ashecliffe, un centro penitenciario para criminales perturbados dirigido por el siniestro doctor John Cawley. Pronto descubrirán que el centro guarda muchos secretos, y que la isla esconde algo más peligroso que los pacientes.",
        genres: ["Drama", "Suspense"],
        rate: 8.1,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//Ap0iZ0CRNCsrK6kUfWLA6HJwu2K.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//ntxArhtReGCqQSWFXk0c0Yt8uDO.jpg",
        url:
          "https://drive.google.com/file/d/1EJQ6OPOvbFbolu0V2G1FaNMX4FnYA3Vv/preview",
      },
      {
        id: 419704,
        key: "Ad%20astra",
        name: "Ad astra",
        description:
          "El futuro cercano, un tiempo en el que tanto la esperanza como la adversidad impulsan a la humanidad a mirar hacia las estrellas y más allá. Mientras un misterioso fenómeno amenaza con destruir la vida en el planeta Tierra, el astronauta Roy McBride emprende una misión a través de la inmensidad del espacio y sus muchos peligros para descubrir la verdad sobre una expedición perdida que décadas antes afrontó audazmente el vacío y el silencio en busca de lo desconocido.",
        genres: ["Ciencia ficción", "Drama"],
        rate: 6.1,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//kK6Oq4JywUNXmJ299efUkv1h6Mn.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//cs6z1byqL0ffw1948FJI2Jr1HVT.jpg",
        url:
          "https://drive.google.com/file/d/1Km87iqIQmGDM9FDtQy3l1rRucGiBa4ZC/preview",
      },
      {
        id: 7972,
        key: "Antes%20que%20el%20diablo%20sepa%20que%20has%20muerto",
        name: "Antes que el diablo sepa que has muerto",
        description:
          "Dos hermanos de clase burguesa se encuentran en una situación desesperada y necesitan conseguir dinero sea como sea: Andy (Philip Seymour Hoffman), un ambicioso ejecutivo adicto a la heroína le propone a su hermano Hank (Ethan Hawke), cuyo sueldo se va casi íntegramente en pagar la pensión de su ex mujer y su hija, dar un golpe perfecto: atracar la joyería que sus padres tienen en Wetchester (Nueva York). Nada de pistolas, nada de violencia, pero las circunstancias y el azar se conjugan para que nada salga según lo previsto.",
        genres: ["Crimen", "Drama"],
        rate: 7.1,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//nLTwhGnd4H6LKikvOpyQvHqg79g.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//gpRI6UjNMVd63QzGIERYuqFtMLC.jpg",
        url:
          "https://drive.google.com/file/d/1OXn3TAlmuqEDfradzxOXuQxtlxTmbhHt/preview",
      },
      {
        id: 272,
        key: "Batman%20Begins",
        name: "Batman Begins",
        description:
          "¿Cómo cambia un hombre el mundo? Es una pregunta que obsesiona a Bruce Wayne al igual que el fantasma de sus padres, muertos a tiros ante sus ojos en las calles de Gotham una noche que cambió su vida para siempre. Atormentado por la culpa y la ira, el desilusionado heredero industrial desaparece de Gotham y viaja en secreto por el mundo, buscando los medios de luchar contra la injusticia y utilizar el miedo contra los que se aprovechan de los que tienen miedo. Con la ayuda de su leal mayordomo Alfred, el detective Jim Gordon - uno de los pocos buenos policías de las fuerzas del orden público de Gotham - y Lucius Fox, su aliado en la división de Ciencias Aplicadas de Wayne Enterprises, Bruce Wayne libera a su imponente alter ego: Batman, un justiciero enmascarado que utiliza la fuerza, la inteligencia y un despliegue de artefactos de alta tecnología para combatir las fuerzas siniestras que amenazan con destruir la ciudad.",
        genres: ["Acción", "Crimen"],
        rate: 7.7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//6yMWU1vWkOBbNRIwOxhetd2aHhO.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//lh5lbisD4oDbEKgUxoRaZU8HVrk.jpg",
        url:
          "https://drive.google.com/file/d/1qGSfurRqOlkruxoTB0ov71dyI0u6HjQf/preview",
      },
      {
        id: 2310,
        key: "Beowulf",
        name: "Beowulf",
        description:
          "Un héroe se alza, proclamando su fama y su nombre. Beowulf! Cazador de demonios. Defensor del reino. Acabará con la feroz bestia que acecha tierras vikingas. Oro y reino serán su recompensa. Pero su ambición le llevará a vivir el lado más oscuro de su propia leyenda",
        genres: ["Aventura", "Acción"],
        rate: 5.7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//7QsWYyJAV97N9jOh21pdRIqJeJq.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//qal6AHFHJlovuoXjv9l83hKgJm5.jpg",
        url:
          "https://drive.google.com/file/d/1sljJBRgzSjrVUQ5G2xaew9xhHL3CV983/preview",
      },
      {
        id: 714338,
        key: "Bulbbul",
        name: "Bulbbul",
        description:
          "Tras haber vivido un matrimonio arreglado, una mujer enigmática con un pasado doloroso se enfoca en su hogar mientras una plaga de crímenes sobrenaturales azota su aldea.",
        genres: ["Terror", "Fantasía"],
        rate: 6.7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//4XYEqHqvcf6vxFhNyeKZz5xbUfV.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//hwBFGNabkGv2ZIyFUnCTSSmprf7.jpg",
        url:
          "https://drive.google.com/file/d/1vpYEXJqsUjferfOWjQvuHui0Pj0abQkk/preview",
      },
      {
        id: 14836,
        key: "Los%20mundos%20de%20Coraline",
        name: "Los mundos de Coraline",
        description:
          "Película de animación en la que se nos cuenta la historia de Coraline, una jovencita que descubre en su nueva casa una puerta secreta y decide abrirla. Al hacerlo, descubre una segunda versión de su vida, una vida paralela a la que ella tiene. A primera vista, la realidad paralela es curiosamente parecida a su vida de verdad, aunque mucho mejor. Pero cuando su increíble y maravillosa aventura empieza a tomar un cariz peligroso y su otra madre intenta mantenerla a su lado para siempre, Coraline deberá recurrir a su determinación y coraje, a la ayuda de los vecinos y a un gato negro con el don del habla para salvar a sus auténticos padres, a unos niños fantasmas y regresar a casa.",
        genres: ["Animación", "Familia"],
        rate: 7.7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//sYXXUeSrx9TBbFpbgtLklW5kmVR.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//8GHxjXlI5rqyTBuVNekGTPjG5T6.jpg",
        url:
          "https://drive.google.com/file/d/1jSY11xXWvl_1ed1DHqZVllwNukckoVhS/preview",
      },
      {
        id: 9208,
        key: "Codigo-Flecha-Rota",
        name: "Codigo Flecha Rota",
        description:
          "John Travolta y Christian Slater protagonizan esta emocionante película de acción, del director John Woo. Travolta interpreta a un piloto renegado y Slater es su obediente protegido. Copilotos en una misión de alto secreto, Deakins y Hale pronto se encuentran enfrentados en una guerra cuando las cabezas nucleares que transportan son robadas. Hale se da cuenta de que Deakins es el cerebro de la operación, y con millones de vidas en juego y el rápido tictac del reloj avanzando hacia el día señalado, él emplea todo lo que ha aprendido de Deakins para vencerle en su propio juego mortal. Caracterizada por unos brillantes efectos especiales, “Broken Arrow” culmina en una vertiginosa batalla de alta tecnología que mantiene el suspense hasta el final.",
        genres: ["Acción"],
        rate: 6,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//7wmFsLBQDDTMxEbaZlCqgfEx9PK.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//m2maHbK0bZhBb9y86Yw39Zm0IFe.jpg",
        url:
          "https://drive.google.com/file/d/16S_NKvKLU4m0zZpV2h3lfsxpRzNYo5sL/preview",
      },
      {
        id: 10329,
        key: "Congo",
        name: "Congo",
        description:
          "Una expedición al Congo africano termina siendo un desastre. Un grupo de expertos busca un tipo de diamantes que, por su tamaño y pureza, pueden ser utilizados para poner en funcionamiento un transmisor de comunicaciones por láser, que también puede ser utilizado como arma. Cuando el equipo pierde contacto, la novia de uno de ellos, una antigua agente de la CIA, se dispone a buscar a su prometido por la selva.",
        genres: ["Acción", "Aventura"],
        rate: 5.2,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//hgHB2Hzy0ykHzrEDQsdpHUx83Iz.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//AhRgsiYnu0cDVqarGsOqXga7Syd.jpg",
        url:
          "https://drive.google.com/file/d/10dUtM6GkEhekUlUOlHk64y4Zx3EHY9kM/preview",
      },
      {
        id: 581,
        key: "Bailando%20con%20lobos",
        name: "Bailando con lobos",
        description:
          "En torno a 1860, en vísperas de la Guerra de Secesión y a punto de terminar el periodo de colonización del Oeste (1785-1890), el teniente John J. Dunbar se dirige a un lejano puesto fronterizo que ha sido abandonado por los soldados. Su soledad lo impulsa a entrar en contacto con los indios sioux y, gracias a ello, conoce a 'En pie con el puño en alto', una mujer blanca que fue adoptada por la tribu cuando era niña. Poco a poco, entre Dunbar y los sioux se establece una relación de respeto y admiración mutuos.",
        genres: ["Aventura", "Drama"],
        rate: 7.9,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//eC8ELcuUwpB0qFxExi0tjrWrEuG.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//aXKUodFZfaMMm2nM4rdekrNgvE2.jpg",
        url:
          "https://drive.google.com/file/d/1N-FB1NQrmyF1Rr1ZzBukhluW0yXYBPrL/preview",
      },
      {
        id: 254172,
        key: "De-padres-a-hijas",
        name: "De padres a hijas",
        description:
          "Historia de la relación entre un padre y su hija a lo largo de 25 años. Todo comienza en Nueva York en la década de los 80, donde Jake Davis (Russell Crowe), novelista ganador del Pulitzer y viudo reciente tras la muerte de su esposa, lucha contra una enfermedad mental al tiempo que intenta criar a su hija de cinco años.",
        genres: ["Drama"],
        rate: 7.1,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//bGYMxXWAwSNVvuRkuZnoae4O33P.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//ol31OSomLbEQW7GvsFyVNuuHoMd.jpg",
        url:
          "https://drive.google.com/file/d/1N-FB1NQrmyF1Rr1ZzBukhluW0yXYBPrL/preview",
      },
      {
        id: 501170,
        key: "Doctor%20Sue%C3%B1o",
        name: "Doctor Sueño",
        description:
          'Secuela del film de culto "El resplandor" (1980) dirigido por Stanley Kubrick y también basado en una famosa novela de Stephen King. La historia transcurre algunos años después de los acontecimientos de "The Shining", y sigue a Danny Torrance (Ewan McGregor), traumatizado y con problemas de ira y alcoholismo que hacen eco de los problemas de su padre Jack, que cuando sus habilidades psíquicas resurgen, se contacta con una niña de nombre Abra Stone, a quien debe rescatar de un grupo de viajeros que se alimentan de los niños que poseen el don de "el resplandor".',
        genres: ["Terror", "Drama"],
        rate: 7.1,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//xfDtjSEAhIbb1WKkYmNNNp5mhAe.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//sZAXOoOMyCbBskmqR0f4LShxXtw.jpg",
        url:
          "https://drive.google.com/file/d/12n88aWO7OXjjEiQpjYnlm8sqL1Yyj5um/preview",
      },
      {
        id: 520016,
        key: "Driven%3A%20El%20origen%20de%20la%20leyenda",
        name: "Driven: El origen de la leyenda",
        description:
          'Basada en un hecho real de la vida de John DeLorean (Lee Pace), un hombre de negocios del mundo del automóvil que, al caer en picado su empresa, se vio envuelto en un caso de narcotráfico. Ambientada en la opulencia californiana de 1980, la historia ilustra la operación que llevó a cabo el FBI para intentar destapar el famoso escándalo de drogas y poder atrapar al fundador de la aclamada compañía "DeLorean Motor Company".',
        genres: ["Suspense", "Historia"],
        rate: 6.3,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//5szS3NXiycrTL67AunS7TLG0EE0.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//8aa4dhlDSjpIlb7Stn9BLXpf37c.jpg",
        url:
          "https://drive.google.com/file/d/1LDceqQLL96ylFhkcviOksK66G5CSPoDC/preview",
      },
      {
        id: 10135,
        key: "De%20profesi%C3%B3n%3A%20Duro",
        name: "De profesión: Duro",
        description:
          'Dalton tiene un doctorado en Filosofía, pero ha optado por ganarse la vida como vigilante de locales de alterne, una profesión bastante bien remunerada. Contratado para mantener el orden en el Double Duce en Jasper, Missouri, resulta herido en su primera noche en el local y es atendido por "Doc" Clay, una bella doctora de la localidad. Enseguida se enamora de ella, pero hay otro hombre que se interpone entre ambos: Brad Wesley, un extorsionista y capo mafioso.',
        genres: ["Acción", "Suspense"],
        rate: 6.4,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//kSq6Y51TcGqFqYaRRKKijNtHeJX.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//gIYhoARq24usTgHOyY6RWPcyGtU.jpg",
        url:
          "https://drive.google.com/file/d/13gxpbR_538Y3MiOjgs_ZhePvxLhEuqR1/preview",
      },
      {
        id: 37247,
        key: "El%20graduado",
        name: "El graduado",
        description:
          "Benjamin Braddock (Dustin Hoffman) vuelve a casa después de terminar sus estudios universitarios. Es un joven que alberga un gran rencor contra la hipocresía y la corrupción de la sociedad que lo rodea. La señora Robinson (Anne Bancroft), una amiga de la familia, se encapricha de él y lo hace su amante. Pero cuando Benjamin conoce a Elaine (Katharine Ross), la hija de la señora Robinson, todo se complica...",
        genres: ["Comedia", "Drama"],
        rate: 7.7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//85tDae3l4zewFKEYJUx6FLGVjQ0.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//5DRTA4sf3D4FXZjquH8ph7uG7s3.jpg",
        url:
          "https://drive.google.com/file/d/1Yw8kw32UOTbCQdBHTcAt7j3UVFXwzCmL/preview",
      },
      {
        id: 9341,
        key: "El%20n%C3%BAcleo",
        name: "El núcleo",
        description:
          "Los científicos descubren que el corazón del planeta Tierra va a detener su movimiento giratorio, lo que causará un tremendo desastere natural, eliminando la vida tal y como la conocemos. Un grupo de científicos son reclutados para una peligrosa misión al centro de la tierra que pueda prevenir la catástrofe.",
        genres: ["Acción", "Suspense"],
        rate: 5.6,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//l4HpogVLiVtx0LWW8XuJoWT7WfZ.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//v2YxWPX2yKdo6arIAknJzKLxhZY.jpg",
        url:
          "https://drive.google.com/file/d/1oqJk3QUOp_AhEv752gwxkkKr7dPvIWZ2/preview",
      },
      {
        id: 7299,
        key: "Equilibrium",
        name: "Equilibrium",
        description:
          'En el mundo del futuro, un régimen estricto ha eliminado las guerras al haber superado las emociones. Los libros, el arte y la música están totalmente prohibidos, y los sentimientos se consideran un crimen castigado con la pena de muerte. El clérigo John Preston (Christian Bale) es un agente de élite del gobierno, responsable de combatir aquellos que osen desafiar las reglas. Cuando pierde una dosis de "Prozium", una droga que altera la mente para ocultar sus emociones, toda su escala de valores cambiará de manera súbita.',
        genres: ["Acción", "Ciencia ficción"],
        rate: 7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//vO0SyoE0D0LYX1hFxu60VnjC5zY.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//cIU78P8fjPsXj4IHQDH4Vq98GNz.jpg",
        url:
          "https://drive.google.com/file/d/1xOkAhak1EAe9umfKxde7iOPRpJDZSgI0/preview",
      },
      {
        id: 10061,
        key: "2013%3A%20Rescate%20en%20L.A.",
        name: "2013: Rescate en L.A.",
        description:
          "El hombre del ojo tapado ha vuelto, llámale Serpiente. Kurt Russell se une de nuevo a John Carpenter y Debra Hill para hacer con la Gran Naranja lo que ya hicieron con la Gran Manzana en 1997: Huida de Nueva York, pero con más emociones y más acción, en un futuro no muy lejano. Serpiente Plissken llega a Los Ángeles del año 2013, destruida por un terremoto de 9.6.Su misión: abrirse camino entre las ruinas de L.A. para recuperar un dispositivo que puede acabar con el planeta. No se pierdan la excitación que produce ver a Serpiente surfear por Wilshyre Blvd., esquivar disparos en el Coliseum, bucear entre las bombas del parque temático de Happy Kingdom y mezclarse con la combinación más salvaje de amigos, demonios y enemigos.2013: Rescate en L.A. es una locura repleta de acción.",
        genres: ["Acción", "Aventura"],
        rate: 5.9,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//3L9lL2eUsmLNNfENPwNOc82Hzpw.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//bLedLNwTzfDOSN6JVAOt7ykAzu7.jpg",
        url:
          "https://drive.google.com/file/d/1CbNaQmM957-VL6ys_JQrs5hBGMIJwydr/preview",
      },
      {
        id: 539537,
        key: "Fantasy%20Island",
        name: "Fantasy Island",
        description:
          "El enigmático Sr. Roarke hace realidad los sueños de los afortunados huéspedes que acuden a su lujoso y remoto resort tropical. Sin embargo, sus fantasías se convertirán en pesadillas, y los invitados deberán resolver el misterio que oculta la isla para poder escapar con vida. Adaptación en clave de terror del famoso programa de televisión de los años 70 ambientado en un resort ubicado en una isla mágica.",
        genres: ["Aventura", "Fantasía"],
        rate: 6.2,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//y0ZX1ymtnZ4ATsQJjXTPaG9RdWD.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//27WkMAcrLJYgmJcgbNvzMh2qw70.jpg",
        url:
          "https://drive.google.com/file/d/1WR39OSvOooG3_1gSLpeKvFTRnPgcpi4R/preview",
      },
      {
        id: 232842,
        key: "The%20Flash",
        name: "The Flash",
        description:
          "John Wesley Shipp interpreta a un modesto químico de un laboratorio oficial, cuyo padre y abuelo son policías. Durante un accidente, él sufre una mutación prodigiosa, por la cual ahora toma la identidad de Flash, un ser increíblemente veloz. Sus nuevas capacidades serán muy apreciadas en Central City, a la hora de luchar contra una banda de punks motociclistas que se dedican al crimen y al vicio abyecto.",
        genres: ["Acción", "Crimen"],
        rate: 6.6,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//yzIBlpyufPoL9ujOOizLktHRFev.jpg",
        cover: "https://image.tmdb.org/t/p/original/null",
        url:
          "https://drive.google.com/file/d/15hdCF5zCOHnV3wk8ybPWmwjqU5pTkIUP/preview",
      },
      {
        id: 314,
        key: "Catwoman",
        name: "Catwoman",
        description:
          "Patience Philips (Halle Berry) es una mujer sumisa y siempre dispuesta a agradar a la gente, que trabaja como diseñadora gráfica para el gigantesco laboratorio de cosméticos Hedare Beauty, dirigido por el despótico George Hedare (Lambert Wilson) y su esposa, la supermodelo Laurel (Sharon Stone). La tímida Patience se entera por casualidad de un siniestro secreto sobre un revolucionario producto antienvejecimiento de la compañía que pronto va a salir a la venta y se ve envuelta en una conspiración. Justo entonces es salvada de la muerte al renacer con la fuerza, la velocidad, la agilidad y los agudísimos sentidos de un gato. En su nueva vida de venganzas como Catwoman la guiará una misteriosa mujer llamada Ophelia Powers (Frances Conroy).",
        genres: ["Acción", "Fantasía"],
        rate: 4.5,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//l40ot7UBtLOmse1qn4NI97w3ve3.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//x7fK0oOUX8Ks1B1lZsACmCXUybI.jpg",
        url:
          "https://drive.google.com/file/d/14NjKCb0bTx4BcmObFf7VdHF3M5aW_XGE/preview",
      },
      {
        id: 10136,
        key: "El%20chico%20de%20oro",
        name: "El chico de oro",
        description:
          "Chandler Jarrell es un detective especializado en buscar niños perdidos. Se le encomienda la misión de encontrar y proteger a un niño budista que posee poderes mágicos llamado el Chico de Oro, que ha sido raptado según sus tutores por un maligno hechicero. Jarrell es escéptico respecto a la magia y a los poderes sobrenaturales, pero a medida que avanza en el caso, descubre evidencias suficientes para empezar a dudar.",
        genres: ["Acción", "Aventura"],
        rate: 5.8,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//zvm91TyaYRbf09RDwmLANLlit3n.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//kDeUbLBib2mFtX1h4FZ4tGQphyP.jpg",
        url:
          "https://drive.google.com/file/d/1kgsGHwmzxIaoETY3Qobt5PM2MVS94WZk/preview",
      },
      {
        id: 567609,
        key: "Noche%20de%20bodas",
        name: "Noche de bodas",
        description:
          "Durante la noche de su boda, una mujer (Weaving) recibe la invitación por parte de la rica y excéntrica familia de su marido para participar en una tradición ancestral que se convierte en un juego letal de supervivencia.",
        genres: ["Terror", "Suspense"],
        rate: 7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//47BlTRVQ43NyzgMWPLOkKYYnHez.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//j8uPZSPjKYzHlN2B4NhPQVWWZ5x.jpg",
        url:
          "https://drive.google.com/file/d/19fbdQEfgim4kAExPxa-RiHOr16yzIDbf/preview",
      },
      {
        id: 9869,
        key: "Juego%20de%20patriotas",
        name: "Juego de patriotas",
        description:
          "Jack Ryan es un ex agente de la CIA. Salir de aquel mundillo, tan peculiar, donde el peligro y la acción forman parte del día a día, no ha sido una decisión fácil. Pero no se arrepiente porque ahora, por primera vez, tiene una vida familiar. Durante unas vacaciones en Londres, por casualidad, mientras pasean por la ciudad, son testigos de un atentado contra Lord Holmes, un distinguido miembro de la Familia Real Británica. En medio de la confusión, los gritos y las llamas, su entrenamiento en la CIA hace reaccionar a Ryan automáticamente. Sale a defender a Lord Holmes y al hacerlo, le salva la vida, aunque para ello tiene que matar a uno de los terroristas. El atentado es atribuido al I.R.A..",
        genres: ["Drama", "Acción"],
        rate: 6.6,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//fRk6f3OBrFWp95almdoUjhAmvkc.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//A7yIl10fjfakyHuS2LFWqiOo0GU.jpg",
        url:
          "https://drive.google.com/file/d/1XqGREDAvCLH2EpgI_-WZl9WJDfORyNht/preview",
      },
      {
        id: 17205,
        key: "La%20justicia%20del%20ninja",
        name: "La justicia del ninja",
        description:
          "Después de completar su formación como ninja, Cole (Franco Nero) recibe un angustioso telegrama de su amigo Frank (Alex Courtney), pidiéndole que vaya a Filipinas para que le ayude con un grave problema. Tanto él como su esposa están siendo acosados por un grupo de matones. Cole tendrá que emplearse a fondo y más cuando sepa la verdadera naturaleza de su rival.",
        genres: ["Crimen", "Acción"],
        rate: 5.8,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//qm7cccLrUISl0QswgK2be9z31yC.jpg",
        cover: "https://image.tmdb.org/t/p/original/null",
        url:
          "https://drive.google.com/file/d/1mQ16nfNKN_YSJu8vKl83b72ZsSvwWW_y/preview",
      },
      {
        id: 17386,
        key: "La%20venganza%20del%20Ninja",
        name: "La venganza del Ninja",
        description:
          "Procedente de una larga tradición de maestros ninja, Cho decide abandonar su Japón natal acompañado por su madre y su hijo tratando de olvidar el pasado violento que destruyó a su familia. Años después, en Estados Unidos, deberá enfrentarse a la traición y retomar el camino del ninja.",
        genres: ["Acción", "Crimen"],
        rate: 5.9,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//vmcS36S4xFxaHguLmwPt3BJ8V2U.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//9EjTo3FKzUohv592C447tIohyZ2.jpg",
        url:
          "https://drive.google.com/file/d/1QEnxY30UCnSv4Vr3FQFlIRfnT_PLorEg/preview",
      },
      {
        id: 101,
        key: "El%20profesional%20(L%C3%A9on)",
        name: "El profesional (Léon)",
        description:
          "Stan es un corrupto agente de la DEA cuya codicia le lleva a cometer asesinatos en las calles de Nueva York. El mortal juego del gato y el ratón empieza cuando se cruza en su camino un solitario hombre, llamado León. León es asesino a sueldo, un personaje indestructible e indocumentado, que sólo bebe leche y se ocupa de sus plantas. En medio se encuentra una huerfanita de 12 años, que no puede olvidar al hombre que asesinó a su familia. Ella acabará convirtiéndose en su perdición.",
        genres: ["Crimen", "Drama"],
        rate: 8.3,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//gT8w2VX3LFcQInpVaYL6Mjhbqwx.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//oPcxdm2rNv5xg2sZlzjwKtAiPXl.jpg",
        url:
          "https://drive.google.com/file/d/13Z4ewiisIbVBpvZKfOUkcuVeei92iEFB/preview",
      },
      {
        id: 9659,
        key: "Mad%20Max%3A%20Salvajes%20de%20la%20autopista",
        name: "Mad Max: Salvajes de la autopista",
        description:
          "En las autopistas desiertas de una Australia desconocida, tiene lugar una guerra sin merced entre motoristas forajidos y policías Interceptor, que intentan triunfar sobre la gentuza al volante de coches con motores trucados. En un mundo en plena decadencia, la moral se difuminará en el escenario post apocalíptico donde lo único que tiene valor es el bien más preciado: la gasolina. La depravación, crueldad y salvajismo reinan en las bandas que no dudarán en perseguir y acabar con cualquiera que se ponga entre ellos y su ansia destruir y ser los amos de la carretera. Max se cruzará en su camino y lo que empieza como un acto de justicia no tardará en tornarse una lucha personal para acabar con ellos.",
        genres: ["Aventura", "Acción"],
        rate: 6.7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//pgTGAi2z6hqI2llYvlJjZeP8GuE.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//oQIBypbvcAwtTVu26G81Xxhd57x.jpg",
        url:
          "https://drive.google.com/file/d/1VbZe63AhhFyOeqNWZIXMCsCxruz-QA_8/preview",
      },
      {
        id: 8810,
        key: "Mad%20Max%202%3A%20El%20guerrero%20de%20la%20carretera",
        name: "Mad Max 2: El guerrero de la carretera",
        description:
          "Tras el holocausto nuclear, la gasolina se ha convertido en un bien escaso y muy codiciado. Mad Max, héroe solitario, inicia una lucha sin cuartel para ayudar a una colonia de supervivientes constantemente atacada por un grupo de violentos guerreros que intenta arrebatarle un tanque de gasolina. Max decide ayudar a los defensores del tanque utilizando un enorme camión como trampa. La banda de guerreros persigue al camión, pensando que transporta miles de litros de gasolina.",
        genres: ["Aventura", "Acción"],
        rate: 7.4,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//dcWUhNODxu7bYvoobo1IkKuFROL.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//2rMRP9Dhb5mnA1lNfvwLl1PpYBu.jpg",
        url:
          "https://drive.google.com/file/d/147EH6AH0NGrJBU1xM_RE4Sy1n4H_i5sg/preview",
      },
      {
        id: 9355,
        key:
          "Mad%20Max%203%3A%20M%C3%A1s%20all%C3%A1%20de%20la%20c%C3%BApula%20del%20trueno",
        name: "Mad Max 3: Más allá de la cúpula del trueno",
        description:
          "Tras la catástrofe nuclear, Mad Max cruza un desierto donde pierde su caravana de camellos. Llega a una ciudad donde le proponen cambiárselos a cambio de que ataque al tirano de la ciudad subterránea, un enano que fabrica gas metano con excrementos de cerdo.",
        genres: ["Acción", "Aventura"],
        rate: 6.2,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//pgmOX4PQl5xPAdAx18zPPnQjQKs.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//qlWeNnr4FoREFtdRjDiSLKM0BJW.jpg",
        url:
          "https://drive.google.com/file/d/1gVA3O2GdwKtRh-hX229MSQa10tyND3Tv/preview",
      },
      {
        id: 76341,
        key: "Mad%20Max%3A%20Furia%20en%20la%20carretera",
        name: "Mad Max: Furia en la carretera",
        description:
          "Perseguido por su turbulento pasado, Mad Max cree que la mejor forma de sobrevivir es ir solo por el mundo. Sin embargo, se ve arrastrado a formar parte de un grupo que huye a través del desierto en un War Rig conducido por una Emperatriz de élite: Furiosa. Escapan de una Ciudadela tiranizada por Immortan Joe, a quien han arrebatado algo irreemplazable. Enfurecido, el Señor de la Guerra moviliza a todas sus bandas y persigue implacablemente a los rebeldes en una 'guerra de la carretera' de altas revoluciones.",
        genres: ["Acción", "Aventura"],
        rate: 7.5,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//mnVZLdo9C4X80sJmgcGNpMNCbgk.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg",
        url:
          "https://drive.google.com/file/d/1iSUu8hcDw50TiRKkfvzrpDpHT3ymxXoN/preview",
      },
      {
        id: 9353,
        key: "Super%20Nacho",
        name: "Super Nacho",
        description:
          "Ignacio (Jack Black) es un luchador gordo con un socio de equipo. Su madre era una misionera de Escandinavia y su padre era diácono de México. Murieron cuando Ignacio era pequeño. Creciendo como huérfano en un monasterio mexicano se convirtió en el cocinero del orfanato. Ignacio soñaba con convertirse en un luchador, pero la prohibición de la lucha en el monasterio no se lo permitía. Como en el orfanato la comida era escasa, a Nacho se le ocurrió un plan para conseguir el dinero para los huérfanos, ir a competir en la lucha libre, pero debe tener cuidado con la hermana Encarnación (Ana de la Reguera) con quien tiene mucho en común. Ignacio decide finalmente ser un luchador.",
        genres: ["Comedia", "Familia"],
        rate: 6,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//y2Qdz67GQticGM15CdxDFXk1gzg.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//3rRNO4mmzzcAEbBe1pwpSzMvDPc.jpg",
        url:
          "https://drive.google.com/file/d/1sN4PtUJ9u4bR-IHojxkKSHMsUYJy154L/preview",
      },
      {
        id: 86834,
        key: "No%C3%A9",
        name: "Noé",
        description:
          "Superproducción épica sobre la figura bíblica de Noé. En un mundo destruido por la perversión de los hombres, un humilde carpintero llamado Noé recibe una importante misión que será trascendental para la evolución y el desarrollo de la raza humana.  Dios, cansado del corrupto y depravado comportamiento de los seres humanos a los que él mismo dio vida, advierte a Noé de un necesario e inminente diluvio universal que depure y libere a la tierra de la acción humana.  Noé tendrá que construir un arca gigante para salvar a su familia, donde deberá reunir a una pareja de cada especie animal para preservar su conservación y crecimiento tras el apocalíptico diluvio que acabará con la humanidad y su fatídica conducta. El arca evitará que los seres que estén dentro mueran ahogados y los mantendrá con vida para una posterior reconstrucción del universo.",
        genres: ["Drama", "Aventura"],
        rate: 5.6,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//aF3wGlkxLnMSul3wCuZdLnx793N.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//80okkzq7wIahAndcPDfmgVYrUQ8.jpg",
        url:
          "https://drive.google.com/file/d/1bftkSnUGi4QeWn3fTbA4o-yd-0lA7g2J/preview",
      },
      {
        id: 676,
        key: "Pearl%20Harbor",
        name: "Pearl Harbor",
        description:
          "Rafe y Danny crecieron juntos en una zona rural estadounidense y su amistad se ha prolongado a lo largo de los años hasta las filas del ejercito del aire, donde los dos son pilotos de combate. Rafe encontró en Evelyn, una valiente enfermera, al amor de su vida, pero pronto es llamado a servir en la fuerza aérea británica para combatir a los nazis como representante del ejército estadounidense. Mientras tanto, Danny y Evelyn son enviados a la base aérea de Pearl Harbor en Hawai. Una vez allí, ambos se enamoran mientras Rafe es derribado en combate. Para sorpresa de ambos, Rafe sobrevive y regresa a Pearl Harbor pero todo se complica cuando se produce un mortal bombardeo por parte del ejercito japonés.",
        genres: ["Historia", "Romance"],
        rate: 6.9,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//ftkKVbk4sQEcekuaGJvpvXcNs32.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//f1VBnGgFDghOAt9PApaDGtR2Wuq.jpg",
        url:
          "https://drive.google.com/file/d/19JBWLjgBdYVfsvuSmFXBufZ9KmBQVsDD/preview",
      },
      {
        id: 522938,
        key: "Rambo%3A%20Last%20Blood",
        name: "Rambo: Last Blood",
        description:
          "Después de luchar contra sus demonios durante décadas, John Rambo vive ahora en paz en su rancho familiar en Arizona, pero su descanso se ve interrumpido cuando Gabriela, la nieta de su ama de llaves María, desaparece después de cruzar la frontera con México con el propósito de conocer a su padre biológico. Rambo, que con los años se ha convertido para Gabriela en una verdadera figura paterna, emprende un desesperado y peligroso viaje para encontrarla.",
        genres: ["Acción", "Suspense"],
        rate: 6.3,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//ajfGtf3LQk7GFcWvGbpsN6ZmVqe.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//3IHqwENGxOb36Jgeot4XHs3BTxz.jpg",
        url:
          "https://drive.google.com/file/d/1Kf7m_B7ToC8x9_95S3eT0kIAIGxSM6mX/preview",
      },
      {
        id: 11013,
        key: "Secretary",
        name: "Secretary",
        description:
          "Lee Holloway  tiene el peor de los currículum cuando decide solicitar un empleo de secretaria en el bufete de abogados de E. Edward Grey. Basta con decir que acaba de salir de una institución psiquiátrica y que, tan sólo un día después de volver a estar con su disfuncional familia de barrio periférico, ha recaído ya en su hábito secreto e inconfesable. Pese a que nunca en su vida ha tenido trabajo, Lee resulta finalmente contratada por el Sr. Grey, un misterioso abogado. Al principio el trabajo parece normal: mecanografiar cartas, archivar documentos y hacer el café; pero Lee y el Sr. Grey no tardan en embarcarse en una relación mucho más estrecha e íntima; una relación que haría sonrojar a cualquier jefe de personal.",
        genres: ["Comedia", "Drama"],
        rate: 6.7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//zCL29rCrHlTbiNjzY1f9tiAHJtF.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//ifHgVh5c7B3mbq5CfkzwsyMRmpG.jpg",
        url:
          "https://drive.google.com/file/d/1hP4VrN8U9pUk4LEFEakz8ZjBzutaRYJ1/preview",
      },
      {
        id: 8854,
        key: "Steel%2C%20un%20h%C3%A9roe%20de%20acero",
        name: "Steel, un héroe de acero",
        description:
          "Un corrupto militar pone en las calles unas innovadoras y peligrosas armas. John Hery (Shaquille O'Neal), un diseñador de armas que trabaja para el ejército norteamericano, se convertirá en la única esperanza que tendrán los desesperados ciudadanos para luchar contra las bandas que asolan las calles. Contará para ello con la ayuda de una experta en electrónica (Annabeth Gish) y la imaginación de un trabajador del metal (Richard Roundtree). Ambos prepararán un equipo de acero con el que Hery podrá enfrentarse en una despiadada guerra en las calles para detener al militar.",
        genres: ["Ciencia ficción", "Acción"],
        rate: 4,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//ufA7d5LT2rGj58KaZErPhcMkJ4U.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//khw67xjtoVvySP8Sat2VwWxmI9V.jpg",
        url:
          "https://drive.google.com/file/d/1W5K8RF-iUn2PS9JdyUssI4ZJMU_MheER/preview",
      },
      {
        id: 38757,
        key: "Enredados",
        name: "Enredados",
        description:
          "Flynn Rider, el más buscado -y encantador- bandido del reino, se esconde en una misteriosa torre y allí se encuentra con Rapunzel, una bella y avispada adolescente con una cabellera dorada de 21 metros de largo, que vive encerrada allí desde hace años. Ambos sellan un pacto y a partir de ese momento la pareja vivirá emocionantes aventuras en compañía de un caballo superpolicía, un camaleón sobreprotector y una ruda pandilla de matones",
        genres: ["Animación", "Familia"],
        rate: 7.6,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//bFUreK1CxkUwk4y6W2Qoo88l0UF.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//rXLw50QWqJVkQQ47Ic6M8bqWNU5.jpg",
        url:
          "https://drive.google.com/file/d/1-CE1i1_TFFNyHz5fP_F_n5qPpxZhc6PI/preview",
      },
      {
        id: 103,
        key: "Taxi%20Driver",
        name: "Taxi Driver",
        description:
          "Para sobrellevar el insomnio crónico que sufre después de su regreso de Vietnam, Travis decide trabajar como taxista nocturno. Como individuo tiene poco contacto con la gente, pero observa la violencia y desolación en la que se hunde la ciudad de Nueva York. Travis anota en su diario todas sus impresiones, hasta que un día decide pasar a la acción.",
        genres: ["Crimen", "Drama"],
        rate: 8.2,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//SK3Ik9ZZdI9TSPT9qBMlBczREO.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//a58oc5qGNazb3QOxEH8eG5S7gjr.jpg",
        url:
          "https://drive.google.com/file/d/19MQUs8KQZH579trFw8SN5XHnzEK_6SuF/preview",
      },
      {
        id: 76487,
        key: "Devil%20Inside",
        name: "Devil Inside",
        description:
          "En 1989, los servicios de emergencia recibieron una llamada al 911 de Maria Rossi confesando que había asesinado brutalmente a tres personas. 20 años después, su hija Isabel, trata de comprender la verdad de lo sucedido esa noche y viaja al Hospital de Centrino para depravados mentales en Italia, donde su madre ha sido encerrada para determinar si es una enferma mental o está poseída por demonios. Isabel decide reclutar a dos jóvenes exorcistas que podrían curar a su madre usando métodos poco convencionales que combinan la ciencia y la religión y terminan enfrentándose cara a cara con el mal en estado puro en forma de cuatro poderosos demonios que poseen a María. Muchos han sido poseídos por uno, sólo una ha sido poseída por muchos.",
        genres: ["Suspense", "Terror"],
        rate: 4.7,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//e0wphqZ4Ll36c6p9ndTumiyQUNt.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//gMdMPqYuAaqvdjqaaICoDA77PCD.jpg",
        url:
          "https://drive.google.com/file/d/1Gqp-3H-D7A9BE37tXAr0Y6tt6s7zJKMe/preview",
      },
      {
        id: 9591,
        key: "The%20Wonders",
        name: "The Wonders",
        description:
          'Guy Patterson trabaja en la tienda de electrodomésticos de su padre, pero su sueño es tocar la batería. Por casualidad se presenta a un concurso cuando un grupo de su barrio se queda sin batería. Guy imprime un nuevo ritmo a las canciones que les hace triunfar y subir a los primeros puestos de ventas con "Los Wonders".',
        genres: ["Comedia", "Drama"],
        rate: 6.8,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//bYxLT2H80Tyq4VhdNfVM4CibmPS.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//sVTYoRoEUVbsQHGTN90aHIcaSiT.jpg",
        url:
          "https://drive.google.com/file/d/1hvSk61HacM-Zxq5lOcIhLJPzUMW1fqXH/preview",
      },
      {
        id: 9560,
        key: "Un%20paseo%20por%20las%20nubes",
        name: "Un paseo por las nubes",
        description:
          "Después de regresar del frente, un soldado norteamericano (Keanu Reeves) conoce de forma casual a la hermosa hija del dueño de un viñedo (Aitana Sanchez-Gijón) y acepta ser presentado como su esposo para ayudarla a enfrentarse a su dominante padre. Cuando la pasión entre ellos se enciende con la mágica sensualidad del rito de la cosecha, se dan cuenta de que están embarcándose en una aventura romántica al tener que luchar contra todos para estar juntos.",
        genres: ["Drama", "Romance"],
        rate: 6.8,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//e4WdZMteJ1iF6RAcnwEAyzFnDxa.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//p0LajotMSSyxCdW2vgvX3sY2HRE.jpg",
        url:
          "https://drive.google.com/file/d/1G1SyP5ZwnmH3dx4JgrHud8Inc3YiSgQQ/preview",
      },
      {
        id: 752,
        key: "V%20de%20Vendetta",
        name: "V de Vendetta",
        description:
          "En un futuro no muy lejano, Gran Bretaña es un país totalitario dirigido con mano de hierro por un tirano (John Hurt). Una tarde, tras el toque de queda nocturno, la joven Evey (Natalie Portman) es rescatada en plena calle por un misterioso enmascarado cuyo nombre es V (Hugo Weaving). El extraño personaje le explica cuáles son sus planes para combatir la falta de libertad. A partir de ese momento, las acciones de V tendrán como objetivo hacer estallar en todo el país una revolución contra el gobierno fascista.",
        genres: ["Acción", "Suspense"],
        rate: 7.9,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//RGtqJD856BJ7kZ88v7ZPz84tU6.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//hIZrdvAfH74H3vxrE3s40kOrS96.jpg",
        url:
          "https://drive.google.com/file/d/17YXLRLbqRewgn4eSo7CNIJIH4cBdnl7R/preview",
      },
      {
        id: 565743,
        key: "The%20Vast%20of%20Night",
        name: "The Vast of Night",
        description:
          "En el ocaso de los años 50, en una fatídica noche en Nuevo México, una joven operadora de centralita telefónica, Fay (Sierra McCormick), y un carismático DJ de radio, Everett (Jake Horowitz), descubren una extraña audiofrecuencia que podría cambiar su pequeño pueblo y el futuro para siempre.",
        genres: ["Misterio", "Ciencia ficción"],
        rate: 6.5,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//suORidtGKPO6tWwNqiwGvNo85z3.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//lVSMgZUBE4XTVaPBEBAczre4f1W.jpg",
        url:
          "https://drive.google.com/file/d/1wFtn35eSHphMiOSBoQIPfLRbUzXBirVo/preview",
      },
      {
        id: 26603,
        key: "Viceversa",
        name: "Viceversa",
        description:
          "Charlie es un niño que tiene un deseo bastante peculiar: cambiarse por su padre Marshall, un ejecutivo de una empresa de juguetes. Lo malo es que su deseo se cumple, aunque padre e hijo conservan su cuerpo original: mientras Marshall permanece adulto, pero con la mente de un niño de once años, Charlie sigue siendo un niño, pero tiene la sabiduría y la experiencia de su padre. En estas circunstancias, ambos tendrán que enfrentarse a situaciones nuevas y algo disparatadas.",
        genres: ["Comedia", "Fantasía"],
        rate: 5.8,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//pAKK3wMLWCKgOtBlKw7s6TCzbg2.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//oXHKSMMEDrv8fcOLmP3zl0epshl.jpg",
        url:
          "https://drive.google.com/file/d/1v7pBFBlsaxqea-A8OJizaLH7IaKDFU3_/preview",
      },
      {
        id: 620883,
        key: "La%20corazonada",
        name: "La corazonada",
        description:
          "Una novata y un detective investigan el asesinato de una chica de diecinueve años. La principal sospechosa es su mejor amiga.",
        genres: ["Suspense", "Crimen"],
        rate: 6.5,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//zOQ8G8Ov8O1EzJgfWWQnowJeYlV.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//prnq2ONhqo9Tga7dOMZKgFJMofs.jpg",
        url:
          "https://drive.google.com/file/d/1R9ke3DezcXMyGpCmPhsrv52vAp67kEc8/preview",
      },
      {
        id: 2135,
        key: "La%20m%C3%A1quina%20del%20tiempo",
        name: "La máquina del tiempo",
        description:
          "El científico e inventor Alexander Hartdegen ha tomado la decisión de probar que los viajes a través del tiempo son posibles. Una tragedia personal que lo ha sumido en la desesperación es la razón de su deseo de volver al pasado. Pero la máquina de su invención, en contra de sus deseos, lo lleva al futuro (800.000 después), donde descubre que la humanidad se ha dividido en dos bandos: perseguidores y perseguidos.",
        genres: ["Ciencia ficción", "Aventura"],
        rate: 6.1,
        length: "1hr 48mins",
        img:
          "https://image.tmdb.org/t/p/w220_and_h330_face//ir4elJEr8mbCBIMFgsQG6m01aS1.jpg",
        cover:
          "https://image.tmdb.org/t/p/original//i0eOILDW8HipIkOUSKhB1dvZzNJ.jpg",
        url:
          "https://drive.google.com/file/d/1qJ3r8HFbUWKiKTZAiKWeFDSo-3NGJYuI/preview",
      },
    ];
    return { movies };
  }
}
