import { SeasonLayout } from "@/Layouts/SeasonLayout";
import { Head } from "@inertiajs/react";

type ShowProps = {
  season: string;
  year: string;
};

export default function Show({ season, year }: ShowProps) {
  const title = season.charAt(0).toUpperCase() + season.slice(1) + " " + year;

  return (
    <SeasonLayout title={title}>
      <Head title={title} />
      <div className="container my-4 px-4 prose bg-base-200 md:rounded-lg shadow-lg p-4">
        <h2 className="mb-2">Julehilsen fra Jørn og Anne-Berit</h2>
        <p className="mt-1">
          Tusen takk for alle de flotte opplevelsene dere har gitt oss i året
          som har gått! Vi ønsker dere en god jul og et fantastisk nytt år!
          🎅🎄🎉
        </p>

        <div>
          <p className="mb-2">
            Året startet med ferie til Gran Canaria, eller vent, det var vel mer
            treningsleir enn ferie vi ente opp med 😂 Men vi storkosa oss! Å ha
            guider som har erfaringer fra plassen helt tilbake fra 1975 var en
            fantastisk opplevelse, og vi opplevde Gran Canaria på en helt ny
            måte😊
          </p>
          <figure className="mt-3">
            <img
              src="/storage/20240206_105543.webp"
              alt="Guidet tur på Gran Canaria"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Guidet tur på Gran Canaria.
            </figcaption>
          </figure>
          <figure className="mt-3">
            <img
              src="/storage/20240207_161817.webp"
              alt="Gran Canaria båttur"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Båttur i Gran Canaria.
            </figcaption>
          </figure>
        </div>

        <div className="my-4">
          <p>
            I påska fikk vi oss en tur til vakre Komagfjord med trugeturer og
            godt selskap, før vi fløy en tur til Tromsø for å oppleve fotball
            sesongåpning mot Brann, var en iskald opplevelse, men vi hadde det
            gøy! 😊
          </p>
          <figure className="mt-3">
            <img
              src="/storage/1909797786192089.webp"
              alt="Trugetur i Komagfjord"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Trugetur i Komagfjord.
            </figcaption>
          </figure>

          <video
            src="/storage/Snapchat-196424127.mp4"
            className="my-0 rounded-lg"
            controls={true}
            autoPlay={false}
          />
        </div>

        <div className="my-4">
          <p>
            I april gikk turen på overraskelse besøk til Sørlandet, der vi duket
            opp for å feire 2x50 år. Ble litt tårer og mye glede. 🤩
          </p>
          <figure className="mt-3">
            <img
              src="/storage/20240407_160252.webp"
              alt="Osvald prøver å få startet mopeden"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Osvald prøver å få startet mopeden
            </figcaption>
          </figure>
        </div>

        <div className="my-4">
          <p>
            17.mai ble feiret med besteforeldre på Senja med grillmat i nydelig
            sommervær, før vi måtte rømme hjem 2 dager senere pga snevær.{" "}
          </p>
          <figure className="mt-3">
            <img
              src="/storage/Snapchat-768772655.webp"
              alt="Solnedgang på Senja"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Solnedgang på Senja
            </figcaption>
          </figure>
        </div>

        <div className="my-4">
          <p>
            I juni var det klart for en av årets <strong>«tuillturer»</strong>{" "}
            som vi kaller det, kor vi sov i igloo båt. En merkelig men artig
            opplevelse som vi absolutt kan anbefale 😄
          </p>
          <figure className="mt-3">
            <img
              src="/storage/20240623_101705.webp"
              alt="Igloo Båt i Finland"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Igloo båt i Finland
            </figcaption>
          </figure>
        </div>

        <div className="my-4">
          <p>
            Juli og August ble tilbragt i nærområde, med besøk fra familie
            sørfra. Hadde nån fantastiske fjellturer, og Ytter Forsøl leverte på
            sitt beste. «Blir det varmere no så fløtter vi sørover» ble mye sagt
            i sommer 😅
          </p>
          <figure className="mt-3">
            <img
              src="/storage/20240720_213955.webp"
              alt="Jørn fisker i Storvannet i Porsa"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Jørn fisker i Storvannet i Porsa
            </figcaption>
          </figure>
          <figure className="mt-3">
            <img
              src="/storage/20240728_112708.webp"
              alt="Sennalandet 2024"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Sennalandet 2024
            </figcaption>
          </figure>
          <figure className="mt-3">
            <img
              src="/storage/20240811_160526.webp"
              alt="Ytre Forsøl bading og grilling"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Ytre Forsøl bading og grilling
            </figcaption>
          </figure>
        </div>

        <div className="my-4">
          <p>
            September gikk turen til vakreste Kreta, enda en perfekt ferie.
            Nydelig mat og drikke, fantastiske folk og opplevelser.
          </p>
          <figure className="mt-3">
            <img
              src="/storage/samaria.webp"
              alt="Anne-Berit i Samaria ravinen"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Anne-Berit i Samaria ravinen
            </figcaption>
          </figure>
          <figure className="mt-3">
            <img
              src="/storage/20240925_191215.webp"
              alt="Utsikten fra hotellrommet på Kreta"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Utsikten fra hotellrommet på Kreta
            </figcaption>
          </figure>
        </div>

        <div className="my-4">
          <p>
            Resten av høsten har blitt brukt til småturer til Alta og studie,
            siden Anne-Berit har bestemt seg for at det kan være lurt å ha en
            utdannelse innen det en liker å jobbe med 😅 4,5år studie på
            privaten, med forventet 18 timer studering i uken, gjør mye med
            livsstil 😂 Far i huset fikk endelig gulv i garasjen, så møbel
            snekringen kan foregå på litt bedre underlag 😊
          </p>
          <figure className="mt-3">
            <img
              src="/storage/20241006_104155.webp"
              alt="Tur til Svartfjellet"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">
              Tur til Svartfjellet
            </figcaption>
          </figure>
          <figure className="mt-3">
            <img
              src="/storage/20241026_121605.webp"
              alt="Alta Canyon"
              className="my-0 rounded-lg"
            />
            <figcaption className="text-accent mt-1">Alta Canyon</figcaption>
          </figure>
        </div>

        <p>
          Jula i år skal vi tilbringe på Gran Canaria, det gledes stort, og vi
          er veldig spent på hvordan det blir å oppleves med sol i jula 🌞
        </p>

        <p>
          Ølene dere har fått i år, er en Juleøl med lakrissmak (svartboks), en
          Surøl med smak av mango (hvitboks), og en enkel Skjærgårdsøl
          (sølvboks). Vi har også testet noen nye lokk i år, disse var litt
          vanskeligere å åpne. Men gjorde det veldig enkelt å fylle glasset. 😉
        </p>
      </div>
    </SeasonLayout>
  );
}
