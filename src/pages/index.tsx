import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
const gifts = [
  {
    id: 1,
    title: "Adrenalin pur beim Laser Tag ",
    text: "An einem sonnigen Morgen beschlossen Süßvieh und Großkadse, die örtliche Laser-Tag-Arena zu besuchen. Als sie den schummrig beleuchteten Raum betraten, leuchteten ihre Augen vor Vorfreude. Sie legten ihre Westen an, nahmen ihre Laserpistolen und jagten sich spielerisch durch das Labyrinth aus Hindernissen. Sie lachten und miauten, während sie Punkte erzielten. Als sie die Arena verließen, konnten sie es kaum erwarten, ihr nächstes Abenteuer zu beginnen.",
    date: "07.04.2023",
    image:
      "https://cdn.discordapp.com/attachments/1008571088919343124/1089322861191245946/Philipp_Merk_2_cats_player_laser_tag_2a2dc4d9-2a20-482d-b024-389b985aa865.png",
  },
  {
    id: 2,
    title: "E-Bike Tour in der Natur",
    text: "Am zweiten Tag beschlossen sie, eine Mountainbike-Tour durch die wunderschönen Hügel rund um ihre Stadt zu unternehmen. Sie stiegen auf ihre speziell angefertigten katzen-großen Fahrräder und fuhren den Weg hinauf, ihr Fell wehte im Wind. Sie bestaunten die üppigen Wälder, funkelnden Bäche und atemberaubenden Ausblicke, die sie auf ihrer Reise entdeckten. Als die Sonne zu sinken begann, hielten sie inne, um einen zärtlichen Moment miteinander zu teilen und die Schönheit der Welt zu bewundern.",
    date: "08.04.2023",
    image:
      "https://cdn.discordapp.com/attachments/1008571088919343124/1089337279077687337/Philipp_Merk_2_cats_mountain_biking_fantasy_drawn_6d43f750-47f7-49f4-b641-f4afc23ede90.png",
  },
  {
    id: 3,
    title: "Ein Tag im Spa",
    text: "Am dritten Tag beschlossen sie, einen Tag im Thermalbad zu verbringen. Sie ließen sich von den sanften Wellen des Wassers in den Whirlpools und der Wärme verwöhnen. Sie genossen die Ruhe und Entspannung, die sie in diesem Moment erlebten. Als sie sich wieder auf den Weg machten, fühlten sie sich wie neu gebohrene Kadsen.",
    date: "09.04.2023",
    image:
      "https://cdn.discordapp.com/ephemeral-attachments/1008571088919343124/1089338769829810216/Philipp_Merk_2_cats_in_a_thermal_bath_futuristic_romantic_drawn_8cf60db9-b7ae-4aa7-9cb6-d4e28df1089c.png",
  },
  {
    id: 4,
    title: "Tapas - 4 Gänge",
    text: "An einem weiteren Tag kleideten sich Süßvieh und Großkadse in ihre feinste Garderobe und begaben sich zu einem exquisiten Restaurant, das ein besonderes Dinner für zwei anbot. Das warme Kerzenlicht und die sanfte Musik erfüllten die Luft, während sie an einem privaten Tisch am Fenster Platz nahmen. Sie genossen jeden Bissen ihres Gourmet-Mahls und tauschten liebevolle Blicke aus, während sie speisten.",
    date: "10.04.2023",
    image:
      "https://cdn.discordapp.com/attachments/1008571088919343124/1089336385808384052/Philipp_Merk_2_cats_romantic_dinner_fantasy_cc41b79b-6026-4772-af02-e5fddcb32bca.png",
  },
  {
    id: 5,
    title: "Bowling",
    text: "Schließlich, am letzten Tag ihres Abenteuers wollten sie sehen wer die Geschicklichere der beiden Kadsen war. In einem Kopf-an-Kopf-Rennen, das bis zum letzten Moment andauerte, konnte Süßvieh sich schließlich durchsetzen und gewann das Spiel.",
    date: "11.04.2023",
    image:
      "https://cdn.discordapp.com/attachments/1008571088919343124/1089339878795378768/Philipp_Merk_2_cats_bowling_drawn_futuristic_98b6c387-e626-40dd-92b0-de07c192aea0.png",
  },
];

export default function Home() {
  return (
    <Swiper
      className="h-screen"
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {gifts.map((gift) => (
        <SwiperSlide key={gift.id}>
          <div className="relative h-screen w-screen text-white">
            <section className="z-50 max-w-3xl w-full absolute left-3/4 top-3/4 -translate-x-1/2 -translate-y-1/2 text-justify bg-slate-800/50 p-5 rounded-3xl shadow-md">
              <h1 className="text-4xl font-bold z-50 mb-6">{gift.title}</h1>
              <p className="text-lg z-50 font-semibold">{gift.text}</p>
              <p className="flex mt-4">
                <Calendar />
                <span className=" ml-3 text-lg z-50 font-semibold">
                  {gift.date}
                </span>
              </p>
            </section>

            <Image
              alt=""
              fill
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={gift.image}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const Calendar = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10H3M21 12.5V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22H12M16 2V6M8 2V6M14.5 19L16.5 21L21 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
