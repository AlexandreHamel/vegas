<?php

namespace Database\Seeders;

use App\Models\Place;
use Illuminate\Database\Seeder;

class PlaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Hotels 

        Place::create([
            'namePlace' => 'Bellagio',
            'address' => '3600 Las Vegas Blvd S, Las Vegas, NV 89109, États-Unis',
            'latitude' => '36.11442234',
            'longitude' => '-115.17395356',
            'description' => 'Bellagio combines European opulence with modern luxuries. Its Tuscan theme transports you to the famous town on Italy\'s Lake Como. The Fountains of Bellagio are choreographed to music and soar above the lake, surrounded by abundant dining, entertainment and shopping options. Enjoy some of the world\'s best restaurants, like Prime Steakhouse, Lago, Picasso, and Harvest by Roy Ellamar. Plus, shopping at Via Bellagio is luxury at its finest.',
            'extras' => 'ON-STRIP, Miles from LAS Airport: 3, Cross Streets: Las Vegas Blvd & Flamingo',
            'Picture' => 'Bellagio_Hotel.jpg',
            'category_id' => '1',
        ]);

        Place::create([
            'namePlace' => 'The Venetian Resort',
            'address' => '3355 Las Vegas Blvd S, Las Vegas, NV 89109, États-Unis',
            'latitude' => '36.12200600',
            'longitude' => '-115.16961643',
            'description' => 'The Italian city of Venice is recreated with The Venetian. Winding canals, gondolas and marble floors surround a casino. Each room is a suite with living room and sleeping area. The Grand Canal Shoppes have chic boutiques such as Burberry, Dooney & Burke, and Salvatore Ferragamo. The Venetian Expo is under the same roof. Plus, Canyon Ranch SpaClub, one of the world\'s largest day spas, has extraordinary services and a Forbes Travel Guide four-star spa. Catch a gondola with an opera-singing gondolier.',
            'extras' => 'ON-STRIP, Miles from LAS Airport: 8, Cross Streets: Las Vegas Blvd &  Sands Ave',
            'picture' => 'Venetian.jpg',
            'category_id' => '1',
        ]);

        Place::create([
            'namePlace' => 'Caesars Palace',
            'address' => '3570 Las Vegas Blvd S, Las Vegas, NV 89109, États-Unis',
            'latitude' => '36.11589001',
            'longitude' => '-115.17322117',
            'description' => 'Celebrating the glory of Rome, Caesars Palace is a must-see destination resort. In the heart of the Strip, the famous fountains and Corinthian columns are world-renowned. The Colosseum\'s addition brings superstar performers and lavish productions shows. Try the internationally acclaimed restaurant, MR CHOW Las Vegas. The Forum Shops has upscale retailers, including Kate Spade, Juicy Couture, CH Carolina, and dining options. There\'s also the Venus Pool to enjoy a private oasis and serene escape.',
            'extras' => 'ON-STRIP, Miles from LAS Airport: 7, Cross Streets: Las Vegas Blvd &  Sands Ave',
            'picture' => 'Caesars_Palace.jpg',
            'category_id' => '1',
        ]);

        // Restaurants

        Place::create([
            'namePlace' => 'Allegro',
            'address' => '3131 Las Vegas Blvd S, Las Vegas, NV 89109, États-Unis',
            'latitude' => '36.12645775478329',
            'longitude' => '-115.16744740383945',
            'description' => 'Chef Enzo Febbraro creates classic Italian-American dishes from Italy\'s freshest ingredients at Allegro at Wynn. Allegro\'s casual atmosphere is perfect for a pre-show meal or late night supper.',
            'extras' => 'ON-STRIP, Located Within: Wynn Las Vegas',
            'picture' => 'Allegro.jpg',
            'category_id' => '2',
        ]);

        Place::create([
            'namePlace' => 'China Poblano',
            'address' => '3708 Las Vegas Blvd S, Las Vegas, NV 89109, États-Unis',
            'latitude' => '36.110132527637894',
            'longitude' => '-115.17535891733571',
            'description' => 'China Poblano is an entirely new concept from innovative Chef José Andrés . China Poblano showcases Andres personal take on Chinese and Mexican cuisines. Noodles and tacos come together in a festive, stylish setting.',
            'extras' => 'ON-STRIP, Located Within: The Cosmopolitan of Las Vegas',
            'picture' => 'China-Poblano.jpg',
            'category_id' => '2',
        ]);

        Place::create([
            'namePlace' => 'Top of the World',
            'address' => '2000 Las Vegas Blvd S, Las Vegas, NV 89104, États-Unis',
            'latitude' => '36.147518757505175',
            'longitude' => '-115.15666707500363',
            'description' => 'Located more than 800 feet above Las Vegas Top of the World Restaurant offers a dining experience like no other. Top of the World features culinary delights served in an elegant atmosphere with views of Las Vegas as the restaurant revolves 360 degrees in one hour and 20 minutes The menu includes a selection of fresh seafood and sizzling steaks, the signature dishes including Colorado Rack of Lamb and Chateaubriand 3-course dinner for two. Top of the World features an extensive wine list and desserts such as Tiramisu and the The Chocolate Lovers Dessert.',
            'extras' => 'ON-STRIP, Located Within: The STRAT Hotel, Casino & Tower',
            'picture' => 'Top-of-the-World.jpg',
            'category_id' => '2',
        ]);

        // Spectacles

        Place::create([
            'namePlace' => 'Weekends With Adele',
            'address' => '3570 Las Vegas Blvd S, Las Vegas, NV 89109, États-Unis',
            'latitude' => '36.11590734',
            'longitude' => '-115.17327481',
            'description' => 'Adele announces Weekends With Adele, an exclusive residency in the Colosseum of Las Vegas\' famed Caesars Palace Hotel. Adele recently releasing her fourth studio album 30 on Columbia Records. 30 debuted at #1 on album charts in 30 countries and is already one of the biggest selling albums of 2021.',
            'extras' => 'POP/ROCK, Price: Visit Website for Pricing, Time: 8pm, Located Within: Caesars Palace,
            Dates: 2/16/2024, 2/17/2024, 2/23/2024, 2/24/2024, 3/1/2024, 3/2/2024, 3/8/2024, 3/9/2024, 3/15/2024, 3/16/2024, 3/22/2024, 3/23/2024',
            'picture' => 'adele-Vegas.jpg',
            'category_id' => '3',
        ]);

        Place::create([
            'namePlace' => 'Christina Aguilera',
            'address' => '3355 Las Vegas Blvd S, Las Vegas, NV 89109, États-Unis',
            'latitude' => '36.12204066',
            'longitude' => '-115.16965934',
            'description' => 'Christina will be unveiling a new show that celebrates her vocal prowess in a seductively cozy environment like no performance she has ever done before. In contrast to traditional concert shows, the intimate venue will allow for Christina to invite guests into a musically dynamic and immersive piece of art. With a career spanning over two decades of music\'s most celebrated pop hits and incomparable vocal ballads, Christina is the sparkling gem to accompany your nightcap.',
            'extras' => 'POP/ROCK, Price:
            Starting at $250 per person per table,
            Time: 9:45pm, Located Within: The Venetian Resort Las Vegas
            Dates:
            2/9/2024, 2/10/2024, 3/1/2024, 3/2/2024, 4/12/2024, 4/13/2024, 4/19/2024, 4/20/2024, 5/31/2024, 6/1/2024',
            'picture' => 'Christina-Aguilera_Voltaire.jpg',
            'category_id' => '3',
        ]);

        Place::create([
            'namePlace' => 'Wu-Tang Clan: The Saga Continues Residency',
            'address' => '4455 Paradise Rd, Las Vegas, NV 89119, États-Unis',
            'latitude' => '36.11039848',
            'longitude' => '-115.15537741',
            'description' => 'Wu-Tang Clan will take the stage on the heels of the 50th anniversary of hip-hop celebration. This residency is more than a concert - it serves as a tribute to their prolific careers as individuals and as the most storied group in hip-hop history. Founded in New York Citys Staten Island in the early 1990s, the Wu-Tang Clan is comprised of members RZA, GZA, Method Man, Raekwon, Ghostface Killah, U-God, Masta Killa, Inspectah Deck, Cappadonna, and the deceased Ol Dirty Bastard (ODB). Their name is a reference to a 1983 martial arts film. Their live sets are a family affair, with every member of the crew representing their lyrical contributions to the Wus eight studio albums, as well as notable cuts from the Wu-Tang solo discography. With the omnipresent Wu-Tang "W" flanking all angles of the stage, theres a familiarity to Wu-Tang Clans music that gives their shows unique mass appeal',
            'extras' => 'HIP HOP/RAP, Price: Starting at $65
            Time: 8pm, Located Within: Virgin Hotels Las Vegas
            Dates: 2/9/2024, 2/10/2024, 3/22/2024, 3/23/2024',
            'picture' => 'Wu-Tang-Clan.jpg',
            'category_id' => '3',
        ]);


        \App\Models\Place::factory(20)->create();
    }
}
