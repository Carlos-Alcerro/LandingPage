import BestBusiness from "@/components/BestBusiness/BestBusiness";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { ControlBilling } from "@/components/ControlBilling";
import { CounterData } from "@/components/CounterData";
import FirstBlock from "@/components/FirstBlock/FirstBlock";
import Header from "@/components/Header/Header";
import PaymentMethod from "@/components/PaymentMethod/PaymentMethod";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <ChooseYourCards />
      <ControlBilling />
      <Testimonials />
      <PaymentMethod />
    </>
  );
}
