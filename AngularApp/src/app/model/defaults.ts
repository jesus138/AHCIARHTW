import { Weather, WeatherType, WeatherDetail } from './weather';
import { Blackboard, BlackboardLarge } from './blackboard';
import { ShortPlan } from './plan';
import { EventsDetail, Mail } from './events-detail';
import { Schedule } from './schedule';
import { Room, Professor, Project, Learning } from './room';

export class Defaults {
    public static readonly weather: Weather = new Weather('12:08 PM', WeatherType.Sunny, '9°C');
    public static readonly blackboard: Blackboard = {
        count: 5,
        entries: [
          { label: 'MCI Raumverlegung G2/1.44', date: '14:00 Uhr' },
          { label: 'Datenbanksysteme fällt aus', date: 'Morgen 9:45 Uhr' }
        ]
      };

    public static readonly weatherToday: WeatherDetail = {
        description: 'Regen, teilweise stürmisch',
        humidity: '34%',
        wind: '21 km/h, 42 km/h Böen',
        mean: 10,
        min: 5,
        high: 12,
        weather: new Weather('12:08 PM', WeatherType.Rain, '10°C'),
        warnings: [
          'Sturm, Orkan', 'Gelegentlich Hagel', 'Blitzeis'
        ]
      };

    public static readonly weatherTomorrow: WeatherDetail = {
        description: 'Sonnig, klarer Himmel',
        humidity: '20%',
        wind: '14 km/h',
        mean: 14,
        min: 8,
        high: 15,
        weather: new Weather('12:08 PM', WeatherType.Sunny, '14°C'),
        warnings: []
      };

    public static readonly blackboardDetail: BlackboardLarge = {
        count: 3,
        all: [
          {
            label: 'Prüfung verschoben auf den 24.02',
            date: '20.02.2020',
            author: 'Prof. Dr. Hans Müller',
            module: 'Datenbanksysteme'
          },
          {
            label: 'Tutorium Bash/C fällt am 17.02 aus',
            date: '16.02.2020 18 Uhr',
            author: 'Herr Krüger',
            module: 'Betriebssysteme'
          },
          {
            label: 'MCI fällt aus',
            date: '11.02.2020',
            author: 'Prof. Dr. Alexander Hartmann',
            module: 'Mensch Computer Interaktion'
          },
          {
            label: 'Veranstaltung zu Big Data',
            date: '10.02.2020',
            author: 'Prof. Dr. Emil Braun',
            module: 'Big Data & Data Mining'
          },
          {
            label: 'Exkursion zu Smart Factory',
            date: '02.02.2020',
            author: 'Prof. Dr. Vincent Winkler',
            module: 'Embedded Systems'
          },
          {
            label: 'Aktion Medizinische Grundausbildung',
            date: '29.01.2020',
            author: 'Herr Schulte',
            module: 'Bioinformatik'
          },
          {
            label: 'Weiterbildung mit Java 11',
            date: '15.01.2020',
            author: 'Prof. Dr. Emil Braun',
            module: 'Fortgeschrittene Programmierung'
          },
          {
            label: 'Verschiebung Termine zu Seminarvorträge',
            date: '07.01.2020',
            author: 'Prof. Dr. Vincent Winkler',
            module: 'Seminar'
          },
          {
            label: 'Abgabefrist für Projekt ist am Freitag',
            date: '06.12.2019',
            author: 'Prof. Dr. Hans Müller',
            module: 'Softwareengineering'
          },
        ],
        pinned: [
          {
            label: 'Studium Generale Einträge in einem violetten Schnellhefter sammeln',
            date: '01.06.2015 12 Uhr',
            author: 'Frau Becker',
            module: 'Studium Generale'
          },
          {
            label: 'Veranstaltungen für das praktische Semester sind Pflicht',
            date: '20.03.2015 9:45 Uhr',
            author: 'Herr Meyer',
            module: 'Informatik'
          }
        ]
      };

    public static readonly shortPlan: ShortPlan = {
      count: 1,
      topic: {
        label: 'MCI',
        time: '14:00-15:30',
        location: 'G2/1.44'
      }
    };

    public static readonly eventsDetail: EventsDetail = {
      mailnew: 4,
      mailtotal: 15,
      announnew: 1,
      annountotal: 7
    };

    public static readonly scheduleMci: Schedule = {
      columns: [
        {
          label: 'Uhrzeit',
          entries: [
            { label: '8:00 - 9:30' },
            { label: '9:45 - 11:15' },
            { label: '11:30 - 13:00' },
            { label: '14:00 - 15:30' },
            { label: '15:45 - 17:15' }
          ]
        },
        {
          label: 'Montag',
          entries: [
            { label: 'Datenbanksysteme' },
            { label: 'Datenbanksysteme' },
            { label: 'Mensch Computer Interaktion' },
            { label: 'Mensch Computer Interaktion' },
            { label: 'Projektarbeit' }
          ]
        },
        {
          label: 'Dienstag',
          entries: [
            { label: 'Projektarbeit' },
            { label: 'Fortgeschrittene Mensch Computer Interaktion' },
            { label: 'Fortgeschrittene Mensch Computer Interaktion' },
            { label: '' },
            { label: '' }
          ]
        },
        {
          label: 'Mittwoch',
          entries: [
            { label: '' },
            { label: 'Projektarbeit' },
            { label: '' },
            { label: '' },
            { label: '' }
          ]
        },
        {
          label: 'Donnerstag',
          entries: [
            { label: 'Big Data & Data Mining' },
            { label: '' },
            { label: 'Software Projekt Management', isnow: true },
            { label: '' },
            { label: '' }
          ]
        },
        {
          label: 'Freitag',
          entries: [
            { label: '' },
            { label: 'Besprechung', isirregular: true },
            { label: '' },
            { label: 'Embedded Systems' },
            { label: 'Embedded Systems' }
          ]
        }
      ]
    };

    public static readonly mail: Mail = {
      email: 'leon.schulz@studmail.htw-aalen.de',
      sent: [
        {
          entity: 'Fabian Schmid',
          regard: 'Projekt zu Java Server',
          date: '19.02.2020',
        },
        {
          entity: 'Lukas Zimmermann',
          regard: 'UI Konzept C++ QT Frontend',
          date: '14.02.2020',
        },
        {
          entity: 'Franz Walter',
          regard: 'Abgabe Praktikum zu Neuronale Netze',
          date: '11.02.2020',
        },
        {
          entity: 'Christian Roth',
          regard: 'Bericht zu Laborübung Neo4j Graphdatenbank',
          date: '17.01.2020',
        }
      ],
      received: [
        {
          entity: 'Prof. Dr. Markus Schäfer',
          regard: 'Praktikum IT-Sicherheit Anmeldefrist',
          date: '22.02.2020',
          new: true
        },
        {
          entity: 'Leonardt Pfeiffer',
          regard: 'Wartungsarbeiten Serverinfrastruktur',
          date: '20.02.2020'
        },
        {
          entity: 'Thomas Stein',
          regard: 'Hinweise zu Feueralarm',
          date: '20.02.2020',
          new: true
        },
        {
          entity: 'Luis Jäger',
          regard: 'Wartungsarbeiten Serverinfrastruktur',
          date: '14.02.2020'
        },
        {
          entity: 'Prof. Dr. Philip Baumann',
          regard: 'Wartungsarbeiten Serverinfrastruktur',
          date: '10.02.2020'
        },
        {
          entity: 'Prof. Dr. Julius Fuchs',
          regard: 'Wartungsarbeiten Serverinfrastruktur',
          date: '04.02.2020'
        }
      ]
    };

    public static readonly roomMci: Room = {
      location: 'G2/1.35',
      type: 'Labor',
      equipment: [
        { label: 'Rechner', qty: '14' },
        { label: 'Beamer', qty: '1' },
        { label: 'Elektroniksets', qty: '5+' }
      ],
      places: 22,
      placesbusy: 19,
      lecture: 'Software Projekt Management',
      contact: 'Prof. Dr. Helmut Roth',
      status: 'Vorlesung'
    };

    public static readonly profRoth: Professor = {
      name: 'Prof. Dr. Helmut Roth',
      position: 'Studiendekan',
      room: 'G2/1.09',
      available: false,
      location: 'Out of Office',
      lectures: [ 'Datenbanksysteme', 'Mensch Computer Interaktion', 'Programmieren 2', 'Wahrscheinlichkeitstheorie' ]
    };

    public static readonly projectGraph: Project = {
      name: 'Graph Tree Programming',
      description: 'Graphenbasierte Programmierung von Baumstrukturen für fortgeschrittene Algorithmen zur Systemanalyse',
      semester: 'Wintersemester 18/19',
      lecture: 'Algorithmen und Datenstrukturen',
      course: 'Informatik',
      authors: [ 'Tobias Schmitt', 'Tom Werner' ],
      professor: 'Prof. Dr. Alexander Hartmann'
    };

    public static readonly learning: Learning[] = [
      {
        room: 'G2/0.12',
        busy: 80,
        people: 7
      },
      {
        room: 'G2/0.19',
        busy: 50,
        people: 3
      },
      {
        room: 'G2/0.36',
        busy: 30,
        people: 1
      }
    ];
}
