import { BsJournalCheck } from "react-icons/bs";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";

export const getIcon = (icon: string) => {
  switch (icon) {
    case "icon-marketing":
      return <MdOutlineAnalytics />;
    case "icon-finance":
      return <FaMoneyBillWaveAlt />;
    case "icon-people":
      return <BsJournalCheck />;
    default:
      return <MdOutlineAnalytics />;
  }
};
